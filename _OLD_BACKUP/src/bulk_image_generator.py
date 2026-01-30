#!/usr/bin/env python3
"""
Pferdesicht - Bulk Image Generator mit Qualitätssicherung
Generiert Bilder aus CSV/JSON-Aufträgen mit automatischer OCR-Qualitätsprüfung.

Nutzung:
    python3 bulk_image_generator.py content/beispiel_batch.csv
    python3 bulk_image_generator.py content/batch.json --dry-run
"""

import os
import csv
import json
import time
import shutil
import argparse
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass, asdict, field
from typing import Optional, Callable

from google import genai
from google.genai import types

from image_quality_check import check_image_quality, QualityReport
from notifications import (
    send_desktop_notification,
    send_batch_complete_notification,
    send_batch_error_email
)


# ============================================================
# Konfiguration
# ============================================================

@dataclass
class BatchConfig:
    """Konfiguration für Batch-Durchläufe"""
    output_dir: Path = field(default_factory=lambda: Path("assets/generated"))
    results_dir: Path = field(default_factory=lambda: Path("results"))
    review_dir: Path = field(default_factory=lambda: Path("results/needs_review"))
    max_retries: int = 3
    delay_between_requests: int = 5  # Sekunden
    similarity_threshold: float = 0.8
    error_threshold_percent: float = 10.0
    notification_email: str = "stefan.nicolaus@gmail.com"
    dry_run: bool = False


# Stil-Presets für verschiedene Grafik-Typen
STYLE_PRESETS = {
    "napkin_pencil": """WHITE PAPER + PENCIL style:
- Clean white paper background
- Soft gray pencil lines, slightly imperfect and wobbly
- Hand-drawn aesthetic with imperfect handwriting
- Letters should be slightly different sizes, not on a perfect line
- Sage green (#78866b) colored pencil shading with visible strokes
- NO computer fonts - authentic human handwriting look""",

    "napkin_marker": """WHITEBOARD + MARKER style:
- White/light gray whiteboard background
- Thick bold black marker lines
- Chunky, confident hand-drawn strokes
- Bright sage green (#78866b) marker for shading
- Presentation/teaching aesthetic
- Imperfect handwriting like quick whiteboard notes""",

    "napkin_fineliner": """KRAFT PAPER + FINELINER style:
- Brown kraft paper / craft paper background
- Black fine-tip pen lines (0.3mm fineliner)
- Precise but still hand-drawn strokes
- Sage green (#78866b) ink for shading, contrasts with brown
- Hipster/artisanal aesthetic
- Clean but authentic handwriting""",

    "napkin_kulli": """GRID PAPER + BALLPOINT PEN style:
- Blue squared grid paper background (like math notebook)
- Blue ballpoint pen ink lines
- Quick, casual strokes like meeting notes
- Sage green (#78866b) highlighter accents
- Spontaneous feel like scribbled during a call""",

    "minimal_illustration": """MINIMAL ILLUSTRATION style:
- Clean white background
- Soft, muted color palette: sage green (#78866b), warm earth (#2c2a25), gold accents (#c8a476)
- Organic luxury aesthetic with clean lines
- Professional Scandinavian design style
- High-end editorial feel
- Suitable for premium equestrian brand""",
}


# ============================================================
# Datenmodelle
# ============================================================

@dataclass
class ImageJob:
    """Ein Bild-Auftrag"""
    id: str
    prompt: str
    expected_texts: list[str]
    filename: str
    style_preset: str = "napkin_pencil"
    description: str = ""


@dataclass
class JobResult:
    """Ergebnis eines Bild-Auftrags"""
    job_id: str
    filename: str
    status: str  # "ok", "ok_retry", "failed", "skipped"
    attempts: int
    error_message: Optional[str] = None
    extracted_text: Optional[str] = None
    quality_scores: Optional[dict] = None


@dataclass
class BatchResult:
    """Gesamtergebnis eines Batch-Durchlaufs"""
    timestamp: str
    total_jobs: int
    ok_count: int
    retry_ok_count: int
    failed_count: int
    skipped_count: int
    job_results: list[dict]
    duration_seconds: float
    estimated_cost_usd: float


# ============================================================
# Hilfsfunktionen
# ============================================================

def load_api_key() -> str:
    """Lädt den API-Key aus der .env Datei"""
    env_path = Path(__file__).parent.parent / ".env"
    with open(env_path) as f:
        for line in f:
            if line.startswith('GOOGLE_API_KEY='):
                return line.strip().split('=', 1)[1]
    raise ValueError("GOOGLE_API_KEY nicht in .env gefunden")


def load_jobs_from_csv(csv_path: Path) -> list[ImageJob]:
    """
    Lädt Bild-Aufträge aus einer CSV-Datei.

    CSV-Format:
    id,prompt,expected_texts,filename,style_preset,description
    fruktan_01,"Graph...",text1|text2|text3,output.png,napkin_pencil,"Beschreibung"
    """
    jobs = []
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # expected_texts sind durch | getrennt
            expected = [t.strip() for t in row['expected_texts'].split('|')]
            jobs.append(ImageJob(
                id=row['id'],
                prompt=row['prompt'],
                expected_texts=expected,
                filename=row['filename'],
                style_preset=row.get('style_preset', 'napkin_pencil'),
                description=row.get('description', '')
            ))
    return jobs


def load_jobs_from_json(json_path: Path) -> list[ImageJob]:
    """
    Lädt Bild-Aufträge aus einer JSON-Datei.

    JSON-Format:
    {
        "jobs": [
            {
                "id": "fruktan_01",
                "prompt": "Graph...",
                "expected_texts": ["text1", "text2"],
                "filename": "output.png",
                "style_preset": "napkin_pencil",
                "description": "Beschreibung"
            }
        ]
    }
    """
    with open(json_path, encoding='utf-8') as f:
        data = json.load(f)

    jobs = []
    for item in data['jobs']:
        jobs.append(ImageJob(
            id=item['id'],
            prompt=item['prompt'],
            expected_texts=item['expected_texts'],
            filename=item['filename'],
            style_preset=item.get('style_preset', 'napkin_pencil'),
            description=item.get('description', '')
        ))
    return jobs


def build_full_prompt(job: ImageJob) -> str:
    """Baut den vollständigen Prompt mit Stil-Preset"""
    style = STYLE_PRESETS.get(job.style_preset, STYLE_PRESETS['napkin_pencil'])

    expected_text_list = '\n'.join(f'- "{text}"' for text in job.expected_texts)

    return f"""Generate an image: {job.description or 'Hand-drawn infographic'}

CONTENT:
{job.prompt}

EXACT TEXT TO INCLUDE (spell correctly in German!):
{expected_text_list}

STYLE:
{style}

CRITICAL REQUIREMENTS:
- Hand-drawn illustration only, NO photographs
- Use imperfect, authentic handwriting (not computer fonts)

TEXT REQUIREMENTS (CRITICAL):
- Render text EXACTLY as specified, letter by letter
- Spell each word correctly - no missing letters, no substitutions
- Double-check: each word must be COMPLETE
- Prefer UPPERCASE for short labels if readability is critical
- NO spelling errors, NO truncated words
- Make ALL text clearly legible"""


# ============================================================
# Kernfunktionen
# ============================================================

def generate_image(
    client: genai.Client,
    prompt: str,
    output_path: Path
) -> tuple[bool, Optional[str]]:
    """
    Generiert ein einzelnes Bild.

    Returns:
        (erfolg, fehlermeldung)
    """
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash-image',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=['IMAGE', 'TEXT'],
            )
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                output_path.parent.mkdir(parents=True, exist_ok=True)
                with open(output_path, 'wb') as f:
                    f.write(part.inline_data.data)
                return True, None

        return False, "Kein Bild in Response"

    except Exception as e:
        error_msg = str(e)
        if "RESOURCE_EXHAUSTED" in error_msg:
            return False, "Rate Limit erreicht"
        elif "INVALID_ARGUMENT" in error_msg:
            return False, "Ungültiger Prompt"
        else:
            return False, f"API-Fehler: {error_msg[:100]}"


def process_job(
    job: ImageJob,
    client: genai.Client,
    config: BatchConfig
) -> JobResult:
    """Verarbeitet einen einzelnen Bild-Auftrag mit Retry-Logik"""

    print(f"\n{'─'*60}")
    print(f"📷 {job.id}: {job.filename}")
    print(f"   Stil: {job.style_preset}")
    print(f"   Texte: {', '.join(job.expected_texts[:3])}{'...' if len(job.expected_texts) > 3 else ''}")

    if config.dry_run:
        print(f"   ⏭️  [DRY-RUN] Übersprungen")
        return JobResult(
            job_id=job.id,
            filename=job.filename,
            status="skipped",
            attempts=0
        )

    output_path = config.output_dir / job.filename
    full_prompt = build_full_prompt(job)

    last_error = None
    last_report = None

    for attempt in range(1, config.max_retries + 1):
        print(f"\n   ⏳ Versuch {attempt}/{config.max_retries}...")

        # Bild generieren
        success, error = generate_image(client, full_prompt, output_path)

        if not success:
            print(f"   ❌ Generierung fehlgeschlagen: {error}")
            last_error = error

            if "Rate Limit" in (error or ""):
                print(f"   ⏸️  Warte 30s wegen Rate Limit...")
                time.sleep(30)
            continue

        print(f"   ✅ Bild generiert")

        # Qualitätsprüfung
        print(f"   🔍 Prüfe Textqualität...")
        report = check_image_quality(
            output_path,
            job.expected_texts,
            client,
            config.similarity_threshold
        )
        last_report = report

        if report.passed:
            status = "ok" if attempt == 1 else "ok_retry"
            print(f"   🎉 Qualitätsprüfung bestanden!")

            # Qualitäts-Scores extrahieren
            scores = {r.expected: r.similarity for r in report.results}

            return JobResult(
                job_id=job.id,
                filename=job.filename,
                status=status,
                attempts=attempt,
                extracted_text=report.extracted_text,
                quality_scores=scores
            )

        # Fehlerdetails anzeigen
        print(f"   ⚠️  Textfehler gefunden:")
        for r in report.results:
            if not r.status:
                print(f"      • '{r.expected}' → '{r.found}' ({r.similarity*100:.0f}%)")

        last_error = "Textqualität nicht erreicht"

        if attempt < config.max_retries:
            print(f"   🔄 Neuer Versuch in {config.delay_between_requests}s...")
            time.sleep(config.delay_between_requests)

    # Alle Versuche fehlgeschlagen
    print(f"   ❌ Alle {config.max_retries} Versuche fehlgeschlagen")

    # Bild in Review-Ordner kopieren
    if output_path.exists():
        review_path = config.review_dir / job.filename
        review_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(output_path, review_path)
        print(f"   📁 Kopiert nach: {review_path}")

    return JobResult(
        job_id=job.id,
        filename=job.filename,
        status="failed",
        attempts=config.max_retries,
        error_message=last_error,
        extracted_text=last_report.extracted_text if last_report else None,
        quality_scores={r.expected: r.similarity for r in last_report.results} if last_report else None
    )


def generate_html_report(
    batch_result: BatchResult,
    jobs: list[ImageJob],
    config: BatchConfig
) -> Path:
    """Generiert den HTML-Review-Report"""

    # Template laden
    template_path = Path(__file__).parent / "templates" / "review_report.html"

    if template_path.exists():
        with open(template_path, encoding='utf-8') as f:
            template = f.read()
    else:
        # Fallback: Einfaches Template
        template = """<!DOCTYPE html><html><head><title>Review Report</title></head>
        <body><h1>Batch Report {{TIMESTAMP}}</h1>
        <p>OK: {{OK_COUNT}}, Retry: {{RETRY_COUNT}}, Failed: {{FAILED_COUNT}}</p>
        {{FAILED_JOBS}}</body></html>"""

    # Fehlgeschlagene Jobs als HTML
    failed_jobs_html = ""
    for result in batch_result.job_results:
        if result['status'] == "failed":
            job = next((j for j in jobs if j.id == result['job_id']), None)
            if job:
                expected_tags = ''.join(
                    f'<span class="expected-text">{t}</span>'
                    for t in job.expected_texts
                )
                scores_html = ""
                if result.get('quality_scores'):
                    scores_html = '<br>'.join(
                        f'"{k}": {v*100:.0f}%'
                        for k, v in result['quality_scores'].items()
                    )

                failed_jobs_html += f"""
                <div class="job-card failed">
                    <div class="job-image">
                        <img src="../needs_review/{result['filename']}" alt="{result['filename']}"
                             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22><rect fill=%22%23f0f0f0%22 width=%22100%%22 height=%22100%%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 fill=%22%23999%22>Bild nicht gefunden</text></svg>'">
                    </div>
                    <div class="job-details">
                        <div class="job-header">
                            <h3>{result['filename']}</h3>
                            <span class="job-id">{result['job_id']}</span>
                        </div>
                        <div class="job-meta">
                            <div class="meta-item">
                                <div class="meta-label">Beschreibung</div>
                                <div class="meta-value">{job.description or 'Keine'}</div>
                            </div>
                            <div class="meta-item">
                                <div class="meta-label">Versuche</div>
                                <div class="meta-value">{result['attempts']}</div>
                            </div>
                        </div>
                        <div class="meta-item" style="margin-bottom: 15px;">
                            <div class="meta-label">Erwartete Texte</div>
                            <div class="expected-texts">{expected_tags}</div>
                        </div>
                        <div class="error-message">
                            <strong>Fehler:</strong> {result.get('error_message', 'Unbekannt')}<br>
                            {f'<strong>Scores:</strong><br>{scores_html}' if scores_html else ''}
                        </div>
                        <div class="actions">
                            <button class="btn btn-accept" onclick="acceptImage('{result['job_id']}')">
                                ✅ Akzeptieren
                            </button>
                            <button class="btn btn-regenerate" onclick="regenerateImage('{result['job_id']}')">
                                🔄 Neu generieren
                            </button>
                            <button class="btn btn-canva" onclick="openInCanva('{result['filename']}')">
                                🎨 In Canva
                            </button>
                        </div>
                    </div>
                </div>
                """

    # Platzhalter ersetzen
    html = template
    html = html.replace('{{TIMESTAMP}}', batch_result.timestamp)
    html = html.replace('{{TOTAL}}', str(batch_result.total_jobs))
    html = html.replace('{{OK_COUNT}}', str(batch_result.ok_count))
    html = html.replace('{{RETRY_COUNT}}', str(batch_result.retry_ok_count))
    html = html.replace('{{FAILED_COUNT}}', str(batch_result.failed_count))
    html = html.replace('{{DURATION}}', f"{batch_result.duration_seconds:.1f}")
    html = html.replace('{{COST}}', f"{batch_result.estimated_cost_usd:.2f}")
    html = html.replace('{{FAILED_JOBS}}', failed_jobs_html or '<p>Keine fehlgeschlagenen Jobs! 🎉</p>')

    # Speichern
    report_path = config.results_dir / f"review_{batch_result.timestamp}.html"
    report_path.parent.mkdir(parents=True, exist_ok=True)
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(html)

    return report_path


# ============================================================
# Hauptfunktion
# ============================================================

def run_batch(input_path: Path, config: BatchConfig = None) -> BatchResult:
    """Führt einen kompletten Batch-Durchlauf aus"""

    if config is None:
        config = BatchConfig()

    start_time = time.time()
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Header
    print("\n" + "═" * 60)
    print("🐴 PFERDESICHT BULK IMAGE GENERATOR")
    print("═" * 60)
    print(f"📁 Input:      {input_path}")
    print(f"📂 Output:     {config.output_dir}")
    print(f"🔄 Max Retry:  {config.max_retries}")
    print(f"⏱️  Start:      {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    if config.dry_run:
        print(f"⚠️  MODUS:      DRY-RUN (keine Bilder werden generiert)")
    print("═" * 60)

    # Jobs laden
    if input_path.suffix == '.csv':
        jobs = load_jobs_from_csv(input_path)
    elif input_path.suffix == '.json':
        jobs = load_jobs_from_json(input_path)
    else:
        raise ValueError(f"Unbekanntes Format: {input_path.suffix} (erwartet: .csv oder .json)")

    print(f"\n📋 {len(jobs)} Jobs geladen")

    # Verzeichnisse erstellen
    config.output_dir.mkdir(parents=True, exist_ok=True)
    config.results_dir.mkdir(parents=True, exist_ok=True)

    # API-Client initialisieren (außer bei Dry-Run)
    client = None
    if not config.dry_run:
        api_key = load_api_key()
        client = genai.Client(api_key=api_key)

    # Jobs verarbeiten
    results = []
    for i, job in enumerate(jobs):
        print(f"\n[{i+1}/{len(jobs)}]", end="")

        if config.dry_run:
            result = JobResult(
                job_id=job.id,
                filename=job.filename,
                status="skipped",
                attempts=0
            )
        else:
            result = process_job(job, client, config)

        results.append(result)

        # Pause zwischen Requests (außer beim letzten)
        if not config.dry_run and i < len(jobs) - 1:
            time.sleep(config.delay_between_requests)

    # Statistiken
    ok_count = sum(1 for r in results if r.status == "ok")
    retry_ok_count = sum(1 for r in results if r.status == "ok_retry")
    failed_count = sum(1 for r in results if r.status == "failed")
    skipped_count = sum(1 for r in results if r.status == "skipped")
    duration = time.time() - start_time

    # Kosten schätzen (ca. $0.04 pro Bildgenerierung + $0.001 pro OCR)
    total_attempts = sum(r.attempts for r in results)
    estimated_cost = total_attempts * 0.041

    batch_result = BatchResult(
        timestamp=timestamp,
        total_jobs=len(jobs),
        ok_count=ok_count,
        retry_ok_count=retry_ok_count,
        failed_count=failed_count,
        skipped_count=skipped_count,
        job_results=[asdict(r) for r in results],
        duration_seconds=duration,
        estimated_cost_usd=estimated_cost
    )

    # JSON-Report speichern
    json_path = config.results_dir / f"batch_{timestamp}.json"
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(asdict(batch_result), f, indent=2, ensure_ascii=False)

    # HTML-Report generieren
    html_path = generate_html_report(batch_result, jobs, config)

    # Abschluss-Report
    print("\n" + "═" * 60)
    print("📊 BATCH ABGESCHLOSSEN")
    print("═" * 60)
    print(f"✅ OK (1. Versuch):  {ok_count}")
    print(f"⚠️  OK (nach Retry): {retry_ok_count}")
    print(f"❌ Fehlgeschlagen:   {failed_count}")
    if skipped_count > 0:
        print(f"⏭️  Übersprungen:    {skipped_count}")
    print(f"─" * 40)
    print(f"⏱️  Dauer:           {duration/60:.1f} Minuten")
    print(f"💰 Kosten (ca.):     ${estimated_cost:.2f}")
    print(f"─" * 40)
    print(f"📄 JSON-Report:      {json_path}")
    print(f"🌐 HTML-Report:      {html_path}")
    if failed_count > 0:
        print(f"📁 Review-Ordner:    {config.review_dir}")
    print("═" * 60)

    # Benachrichtigungen (nur wenn nicht Dry-Run)
    if not config.dry_run:
        # Desktop-Notification
        send_batch_complete_notification(
            total=len(jobs),
            ok_count=ok_count,
            retry_count=retry_ok_count,
            failed_count=failed_count,
            duration_minutes=duration / 60
        )

        # Email bei hoher Fehlerrate
        error_rate = (failed_count / len(jobs) * 100) if jobs else 0
        if error_rate >= config.error_threshold_percent:
            failed_jobs = [asdict(r) for r in results if r.status == "failed"]
            send_batch_error_email(
                to_email=config.notification_email,
                total=len(jobs),
                ok_count=ok_count,
                retry_count=retry_ok_count,
                failed_count=failed_count,
                failed_jobs=failed_jobs,
                report_path=str(html_path.absolute())
            )

    return batch_result


# ============================================================
# CLI
# ============================================================

def main():
    parser = argparse.ArgumentParser(
        description="Pferdesicht Bulk Image Generator",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Beispiele:
  python3 bulk_image_generator.py content/beispiel_batch.csv
  python3 bulk_image_generator.py content/batch.json --dry-run
  python3 bulk_image_generator.py content/batch.csv --retries 5 --delay 10

CSV-Format:
  id,prompt,expected_texts,filename,style_preset,description
  fruktan_01,"Graph...",text1|text2,output.png,napkin_pencil,"Beschreibung"

Stil-Presets:
  napkin_pencil    - Bleistift auf weißem Papier
  napkin_marker    - Marker auf Whiteboard
  napkin_fineliner - Fineliner auf Kraftpapier
  napkin_kulli     - Kugelschreiber auf Karopapier
  minimal_illustration - Minimalistisch, premium
        """
    )

    parser.add_argument('input', type=Path, help='CSV- oder JSON-Datei mit Bildaufträgen')
    parser.add_argument('--dry-run', action='store_true', help='Nur simulieren, keine Bilder generieren')
    parser.add_argument('--retries', type=int, default=3, help='Max. Wiederholungen bei Fehlern (default: 3)')
    parser.add_argument('--delay', type=int, default=5, help='Pause zwischen Requests in Sekunden (default: 5)')
    parser.add_argument('--output', type=Path, default=Path("assets/generated"), help='Ausgabe-Verzeichnis')
    parser.add_argument('--threshold', type=float, default=0.8, help='Min. Textähnlichkeit für OK (default: 0.8)')

    args = parser.parse_args()

    if not args.input.exists():
        print(f"❌ Datei nicht gefunden: {args.input}")
        return 1

    config = BatchConfig(
        output_dir=args.output,
        max_retries=args.retries,
        delay_between_requests=args.delay,
        similarity_threshold=args.threshold,
        dry_run=args.dry_run
    )

    try:
        run_batch(args.input, config)
        return 0
    except KeyboardInterrupt:
        print("\n\n⚠️  Abgebrochen durch Benutzer")
        return 130
    except Exception as e:
        print(f"\n❌ Fehler: {e}")
        return 1


if __name__ == "__main__":
    exit(main())
