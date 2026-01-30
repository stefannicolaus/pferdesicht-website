# Pferdesicht Bulk Image Generator

Automatisierte Bildgenerierung für Infografiken mit OCR-basierter Qualitätssicherung.

## Übersicht

Das System generiert Napkin-Sketch-Infografiken aus CSV/JSON-Aufträgen und prüft automatisch, ob alle erwarteten Texte korrekt im Bild erscheinen.

```
┌─────────────────────────────────────────────────────────────┐
│  CSV/JSON Input                                              │
│  (Prompt, erwartete Texte, Stil)                            │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Bildgenerierung (Gemini 2.5 Flash Image)                   │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  OCR-Qualitätsprüfung (Gemini Vision)                       │
│  • Texterkennung                                             │
│  • Fuzzy-Matching mit erwarteten Texten                     │
│  • Ähnlichkeits-Score                                        │
└─────────────────┬───────────────────────────────────────────┘
                  │
          ┌───────┴───────┐
          │               │
          ▼               ▼
    ✅ OK            ❌ Fehler
    (weiter)         (Auto-Retry, max. 3x)
                          │
                          ▼
                  ❌ Nach 3x fehlgeschlagen
                  → Review-Ordner + HTML-Report
```

## Schnellstart

```bash
# 1. Batch starten
python3 src/bulk_image_generator.py content/beispiel_batch.csv

# 2. Dry-Run (nur simulieren)
python3 src/bulk_image_generator.py content/beispiel_batch.csv --dry-run

# 3. Mit angepassten Parametern
python3 src/bulk_image_generator.py content/batch.csv --retries 5 --delay 10
```

## Dateien

```
src/
├── bulk_image_generator.py   # Hauptscript
├── image_quality_check.py    # OCR + Textprüfung
├── notifications.py          # Desktop + Email Benachrichtigungen
└── templates/
    └── review_report.html    # HTML-Template für Review

content/
├── beispiel_batch.csv        # Beispiel-Input
└── g18-modul1-bilder.csv     # G18 Modul 1 Bilder

results/
├── batch_[timestamp].json    # Ergebnis-Report
├── review_[timestamp].html   # HTML-Review Interface
└── needs_review/             # Fehlgeschlagene Bilder

assets/
└── generated/                # Generierte Bilder
```

## Input-Format

### CSV-Format

```csv
id,prompt,expected_texts,filename,style_preset,description
fruktan_01,"Graph showing...",text1|text2|text3,output.png,napkin_pencil,"Beschreibung"
```

| Spalte | Beschreibung |
|--------|--------------|
| `id` | Eindeutige Job-ID |
| `prompt` | Beschreibung des Bildinhalts |
| `expected_texts` | Erwartete Texte, durch `\|` getrennt |
| `filename` | Ausgabe-Dateiname |
| `style_preset` | Stil-Preset (siehe unten) |
| `description` | Kurzbeschreibung für Reports |

### JSON-Format

```json
{
  "jobs": [
    {
      "id": "fruktan_01",
      "prompt": "Graph showing fructan levels...",
      "expected_texts": ["Fruktan", "hoch", "niedrig"],
      "filename": "fruktan_graph.png",
      "style_preset": "napkin_pencil",
      "description": "Fruktan-Tagesverlauf"
    }
  ]
}
```

## Stil-Presets

| Preset | Beschreibung |
|--------|--------------|
| `napkin_pencil` | Bleistift auf weißem Papier, weiche Linien |
| `napkin_marker` | Marker auf Whiteboard, kräftige Linien |
| `napkin_fineliner` | Fineliner auf Kraftpapier, präzise Linien |
| `napkin_kulli` | Kugelschreiber auf Karopapier, casual |
| `minimal_illustration` | Minimalistisch, Premium-Look |

Alle Presets verwenden die Pferdesicht-Farbpalette:
- Sage Green: `#78866b`
- Earth Brown: `#2c2a25`
- Gold Accent: `#c8a476`

## Qualitätsprüfung

Die OCR-Prüfung verwendet Gemini Vision um Text aus dem generierten Bild zu extrahieren und vergleicht ihn mit den erwarteten Texten.

### Ähnlichkeits-Schwellwert

Default: 80% Übereinstimmung erforderlich.

```bash
# Strengere Prüfung (90%)
python3 src/bulk_image_generator.py batch.csv --threshold 0.9

# Lockerere Prüfung (70%)
python3 src/bulk_image_generator.py batch.csv --threshold 0.7
```

### Einzelbild prüfen

```bash
python3 src/image_quality_check.py assets/mein_bild.png
```

## Benachrichtigungen

### Desktop-Notification (macOS)

Automatisch bei Batch-Ende.

### Email-Benachrichtigung

Bei Fehlerrate > 10% wird eine Email gesendet.

**Konfiguration in `.env`:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=deine@email.com
SMTP_PASS=dein-app-passwort
```

Für Gmail: [App-Passwort erstellen](https://support.google.com/accounts/answer/185833)

## Review-Workflow

Bei fehlgeschlagenen Bildern:

1. Bilder werden nach `results/needs_review/` kopiert
2. HTML-Report wird generiert: `results/review_[timestamp].html`
3. Report im Browser öffnen
4. Für jedes Bild:
   - **Akzeptieren**: Bild trotz Textfehler verwenden
   - **Neu generieren**: Neuen Versuch starten
   - **In Canva**: Bild manuell bearbeiten

## CLI-Optionen

```
python3 src/bulk_image_generator.py [OPTIONS] INPUT

Argumente:
  INPUT                   CSV- oder JSON-Datei mit Bildaufträgen

Optionen:
  --dry-run              Nur simulieren, keine Bilder generieren
  --retries N            Max. Wiederholungen bei Fehlern (default: 3)
  --delay N              Pause zwischen Requests in Sekunden (default: 5)
  --output DIR           Ausgabe-Verzeichnis (default: assets/generated)
  --threshold N          Min. Textähnlichkeit für OK (default: 0.8)
```

## Kosten

Geschätzte Kosten pro Bild:
- Bildgenerierung: ~$0.04
- OCR-Prüfung: ~$0.001
- **Gesamt: ~$0.041 pro Versuch**

Bei 50 Bildern mit durchschnittlich 1.5 Versuchen: ~$3.10

## Troubleshooting

### Rate Limit erreicht

Das System wartet automatisch 30 Sekunden bei Rate Limits. Bei häufigen Rate Limits:

```bash
# Längere Pause zwischen Requests
python3 src/bulk_image_generator.py batch.csv --delay 15
```

### Textfehler trotz korrektem Bild

Die OCR erkennt handgeschriebenen Text manchmal nicht perfekt. Optionen:

1. Schwellwert senken: `--threshold 0.7`
2. Bild im Review akzeptieren
3. Prompt anpassen (klarere Textanweisungen)

### SMTP-Fehler

```
❌ Email-Fehler: Authentifizierung fehlgeschlagen
```

- Prüfe SMTP_USER und SMTP_PASS in `.env`
- Bei Gmail: App-Passwort verwenden, nicht normales Passwort
- 2FA muss aktiviert sein für App-Passwörter

## Beispiel: G18 Modul 1

```bash
# Alle 10 Bilder für G18 Modul 1 generieren
python3 src/bulk_image_generator.py content/g18-modul1-bilder.csv

# Nur testen ohne Generierung
python3 src/bulk_image_generator.py content/g18-modul1-bilder.csv --dry-run
```

---

*Pferdesicht Bulk Image Generator v1.0*
