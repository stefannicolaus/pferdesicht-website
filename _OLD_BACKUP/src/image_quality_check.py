#!/usr/bin/env python3
"""
Pferdesicht - Image Quality Check Workflow
Prüft generierte Bilder auf korrekte Textdarstellung mittels Gemini Vision OCR.
"""

import os
import re
import base64
from pathlib import Path
from dataclasses import dataclass
from typing import Optional, Callable

from PIL import Image
from google import genai
from google.genai import types


@dataclass
class TextCheckResult:
    """Ergebnis einer Textprüfung"""
    expected: str
    found: Optional[str]
    status: bool
    similarity: float


@dataclass
class QualityReport:
    """Gesamtbericht der Qualitätsprüfung"""
    image_path: Path
    extracted_text: str
    results: list[TextCheckResult]
    passed: bool
    attempt: int


def load_api_key() -> str:
    """Lädt den API-Key aus der .env Datei"""
    env_path = Path(__file__).parent.parent / ".env"
    with open(env_path) as f:
        for line in f:
            if line.startswith('GOOGLE_API_KEY='):
                return line.strip().split('=', 1)[1]
    raise ValueError("GOOGLE_API_KEY nicht in .env gefunden")


def extract_text_from_image(image_path: Path, client: genai.Client) -> str:
    """
    Extrahiert Text aus einem Bild mittels Gemini Vision.

    Args:
        image_path: Pfad zum Bild
        client: Google GenAI Client

    Returns:
        Extrahierter Text
    """
    # Bild laden und als Base64 kodieren
    with open(image_path, "rb") as f:
        image_data = f.read()

    # Gemini für OCR nutzen
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[
            types.Part.from_bytes(data=image_data, mime_type="image/png"),
            "Extract ALL text visible in this image. Return ONLY the text, nothing else. Include every word, label, and title you can see. Be very precise with spelling."
        ]
    )

    return response.text


def normalize_text(text: str) -> str:
    """Normalisiert Text für Vergleich (lowercase, keine Sonderzeichen)"""
    text = text.lower()
    text = re.sub(r'[^a-zäöüß0-9\s]', '', text)
    return text


def fuzzy_match(expected: str, extracted_text: str) -> tuple[Optional[str], float]:
    """
    Sucht nach dem erwarteten Text im extrahierten Text.

    Returns:
        (gefundener_text, ähnlichkeit_0_bis_1)
    """
    expected_norm = normalize_text(expected)
    extracted_norm = normalize_text(extracted_text)

    # Exakte Übereinstimmung
    if expected_norm in extracted_norm:
        return expected, 1.0

    # Suche nach ähnlichen Wörtern
    words = extracted_norm.split()
    best_match = None
    best_similarity = 0.0

    for word in words:
        similarity = calculate_similarity(expected_norm, word)
        if similarity > best_similarity:
            best_similarity = similarity
            best_match = word

    # Auch in zusammenhängenden Substrings suchen
    for i in range(len(extracted_norm)):
        for length in range(len(expected_norm) - 2, len(expected_norm) + 3):
            if length > 0 and i + length <= len(extracted_norm):
                substring = extracted_norm[i:i+length]
                similarity = calculate_similarity(expected_norm, substring)
                if similarity > best_similarity:
                    best_similarity = similarity
                    best_match = substring

    return best_match, best_similarity


def calculate_similarity(s1: str, s2: str) -> float:
    """Berechnet Levenshtein-Ähnlichkeit zwischen zwei Strings"""
    if not s1 or not s2:
        return 0.0

    len1, len2 = len(s1), len(s2)

    # Levenshtein-Distanz
    dp = [[0] * (len2 + 1) for _ in range(len1 + 1)]

    for i in range(len1 + 1):
        dp[i][0] = i
    for j in range(len2 + 1):
        dp[0][j] = j

    for i in range(1, len1 + 1):
        for j in range(1, len2 + 1):
            cost = 0 if s1[i-1] == s2[j-1] else 1
            dp[i][j] = min(
                dp[i-1][j] + 1,
                dp[i][j-1] + 1,
                dp[i-1][j-1] + cost
            )

    distance = dp[len1][len2]
    max_len = max(len1, len2)

    return 1.0 - (distance / max_len)


def check_image_quality(
    image_path: Path,
    expected_texts: list[str],
    client: genai.Client,
    similarity_threshold: float = 0.8
) -> QualityReport:
    """
    Prüft ein Bild auf erwartete Texte.

    Args:
        image_path: Pfad zum Bild
        expected_texts: Liste der erwarteten Texte
        client: Google GenAI Client
        similarity_threshold: Mindest-Ähnlichkeit für OK (0.0-1.0)

    Returns:
        QualityReport mit allen Ergebnissen
    """
    # Text extrahieren
    extracted_text = extract_text_from_image(image_path, client)

    results = []
    all_passed = True

    for expected in expected_texts:
        found, similarity = fuzzy_match(expected, extracted_text)
        passed = similarity >= similarity_threshold

        if not passed:
            all_passed = False

        results.append(TextCheckResult(
            expected=expected,
            found=found,
            status=passed,
            similarity=similarity
        ))

    return QualityReport(
        image_path=image_path,
        extracted_text=extracted_text,
        results=results,
        passed=all_passed,
        attempt=1
    )


def print_report(report: QualityReport) -> None:
    """Gibt einen formatierten Bericht aus"""
    print("\n" + "=" * 60)
    print(f"🔍 QUALITÄTSPRÜFUNG - Versuch {report.attempt}")
    print("=" * 60)
    print(f"📁 Bild: {report.image_path.name}")
    print("-" * 60)

    print("\n📝 Extrahierter Text (Gemini Vision OCR):")
    print("-" * 40)
    for line in report.extracted_text.strip().split('\n'):
        if line.strip():
            print(f"   {line.strip()}")
    print("-" * 40)

    print("\n📋 Textprüfung:")
    print("-" * 60)

    for result in report.results:
        status_icon = "✅" if result.status else "❌"
        similarity_pct = f"{result.similarity * 100:.0f}%"

        print(f"\n   Erwartet: '{result.expected}'")
        print(f"   Gefunden: '{result.found or '—'}'")
        print(f"   Ähnlichkeit: {similarity_pct}")
        print(f"   Status: {status_icon} {'OK' if result.status else 'FEHLER'}")

    print("\n" + "-" * 60)
    overall = "✅ BESTANDEN" if report.passed else "❌ FEHLER GEFUNDEN"
    print(f"📊 Gesamtergebnis: {overall}")
    print("=" * 60 + "\n")


def quality_check_with_retry(
    image_path: Path,
    expected_texts: list[str],
    client: genai.Client,
    generate_func: Optional[Callable[[], Path]] = None,
    max_retries: int = 3,
    similarity_threshold: float = 0.8
) -> QualityReport:
    """
    Prüft ein Bild und generiert bei Fehlern optional neu.

    Args:
        image_path: Pfad zum Bild
        expected_texts: Liste der erwarteten Texte
        client: Google GenAI Client
        generate_func: Funktion die ein neues Bild generiert (optional)
        max_retries: Maximale Anzahl Versuche
        similarity_threshold: Mindest-Ähnlichkeit für OK

    Returns:
        Letzter QualityReport
    """
    current_path = image_path

    for attempt in range(1, max_retries + 1):
        report = check_image_quality(current_path, expected_texts, client, similarity_threshold)
        report.attempt = attempt

        print_report(report)

        if report.passed:
            print(f"🎉 Bild hat Qualitätsprüfung bestanden!")
            return report

        if attempt < max_retries and generate_func:
            print(f"🔄 Generiere neues Bild (Versuch {attempt + 1}/{max_retries})...")
            try:
                current_path = generate_func()
            except Exception as e:
                print(f"❌ Fehler bei Neugenerierung: {e}")
                break
        elif attempt == max_retries:
            print(f"⚠️  Maximum von {max_retries} Versuchen erreicht.")

    return report


# ============================================================
# Demo / Test
# ============================================================

if __name__ == "__main__":
    import sys

    # API-Key laden und Client erstellen
    api_key = load_api_key()
    client = genai.Client(api_key=api_key)

    # Standard-Testbild und erwartete Texte
    default_image = Path(__file__).parent.parent / "assets" / "test_napkin_kombination.png"
    default_expected = [
        "Fruktan-Tagesverlauf",
        "hoch",
        "niedrig",
        "Morgens",
        "Mittag",
        "Abends"
    ]

    # CLI-Argumente oder Defaults
    if len(sys.argv) > 1:
        image_path = Path(sys.argv[1])
    else:
        image_path = default_image

    if not image_path.exists():
        print(f"❌ Bild nicht gefunden: {image_path}")
        exit(1)

    print("🐴 Pferdesicht Image Quality Check")
    print(f"   Prüfe: {image_path.name}")
    print(f"   Erwartete Texte: {default_expected}")

    # Qualitätsprüfung durchführen
    report = check_image_quality(image_path, default_expected, client)
    print_report(report)

    # Exit-Code basierend auf Ergebnis
    exit(0 if report.passed else 1)
