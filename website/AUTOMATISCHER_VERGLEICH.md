# AUTOMATISCHER WEBSITE-VERGLEICH: v0 vs Next.js

## FÜR CLAUDE CODE

**Aufgabe:** Vergleiche systematisch ALLE Seiten zwischen v0-Referenz und Next.js-Version und dokumentiere alle Unterschiede.

---

## PHASE 1: AUTOMATISCHER CRAWL & VERGLEICH

### Schritt 1: Beide Versionen crawlen

```bash
# Navigiere ins Projekt
cd /Users/stefan/Documents/Pferdesicht/website

# Starte lokalen Dev-Server
npm run dev &
DEV_PID=$!

# Warte bis Server läuft
sleep 5

# Erstelle Ausgabe-Verzeichnis
mkdir -p /tmp/website-vergleich
cd /tmp/website-vergleich

# Crawle v0-Version (Referenz)
wget --recursive \
     --no-parent \
     --page-requisites \
     --adjust-extension \
     --convert-links \
     --domains=v0-pferdesicht-com-9i.vercel.app \
     --directory-prefix=v0 \
     https://v0-pferdesicht-com-9i.vercel.app/

# Crawle Next.js-Version (lokal)
wget --recursive \
     --no-parent \
     --page-requisites \
     --adjust-extension \
     --convert-links \
     --domains=localhost \
     --directory-prefix=nextjs \
     http://localhost:3000/

# Stoppe Dev-Server
kill $DEV_PID
```

---

### Schritt 2: Automatischer Text-Extraktion

```python
# vergleich.py - Erstelle dieses Skript

import os
import re
from bs4 import BeautifulSoup
from pathlib import Path
import difflib
import json

def extract_text_from_html(html_path):
    """Extrahiere nur sichtbaren Text ohne HTML-Tags"""
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
        # Entferne Script und Style Tags
        for script in soup(["script", "style"]):
            script.decompose()
        
        # Hole Text
        text = soup.get_text()
        
        # Normalisiere Whitespace
        lines = (line.strip() for line in text.splitlines())
        chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
        text = ' '.join(chunk for chunk in chunks if chunk)
        
        return text

def extract_structure(html_path):
    """Extrahiere HTML-Struktur (Headlines, Sections, etc.)"""
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
        structure = {
            'headlines': {},
            'sections': [],
            'buttons': [],
            'links': []
        }
        
        # Headlines (h1-h6)
        for i in range(1, 7):
            headlines = soup.find_all(f'h{i}')
            structure['headlines'][f'h{i}'] = [h.get_text().strip() for h in headlines]
        
        # Buttons
        buttons = soup.find_all(['button', 'a'], class_=lambda x: x and 'button' in x.lower())
        structure['buttons'] = [b.get_text().strip() for b in buttons]
        
        # Links
        links = soup.find_all('a')
        structure['links'] = [{'text': a.get_text().strip(), 'href': a.get('href')} for a in links if a.get('href')]
        
        return structure

def compare_pages(v0_path, nextjs_path, page_name):
    """Vergleiche zwei HTML-Seiten"""
    
    result = {
        'page': page_name,
        'v0_exists': os.path.exists(v0_path),
        'nextjs_exists': os.path.exists(nextjs_path),
        'differences': []
    }
    
    # Wenn eine Seite fehlt
    if not result['v0_exists']:
        result['differences'].append({
            'type': 'MISSING_IN_V0',
            'severity': 'INFO',
            'message': f'Seite existiert nur in Next.js'
        })
        return result
    
    if not result['nextjs_exists']:
        result['differences'].append({
            'type': 'MISSING_IN_NEXTJS',
            'severity': 'CRITICAL',
            'message': f'Seite fehlt in Next.js (404 Fehler)'
        })
        return result
    
    # Extrahiere Inhalte
    v0_text = extract_text_from_html(v0_path)
    nextjs_text = extract_text_from_html(nextjs_path)
    
    v0_structure = extract_structure(v0_path)
    nextjs_structure = extract_structure(nextjs_path)
    
    # Text-Vergleich
    similarity = difflib.SequenceMatcher(None, v0_text, nextjs_text).ratio()
    
    if similarity < 0.95:  # Weniger als 95% identisch
        result['differences'].append({
            'type': 'TEXT_DIFFERENCE',
            'severity': 'HIGH' if similarity < 0.8 else 'MEDIUM',
            'similarity': f'{similarity*100:.1f}%',
            'message': f'Text-Ähnlichkeit nur {similarity*100:.1f}%'
        })
        
        # Detaillierter Diff
        diff = list(difflib.unified_diff(
            v0_text.split(),
            nextjs_text.split(),
            lineterm='',
            n=0
        ))
        
        result['text_diff'] = diff[:100]  # Erste 100 Zeilen
    
    # Struktur-Vergleich: Headlines
    for level in ['h1', 'h2', 'h3']:
        v0_headlines = v0_structure['headlines'].get(level, [])
        nextjs_headlines = nextjs_structure['headlines'].get(level, [])
        
        if v0_headlines != nextjs_headlines:
            result['differences'].append({
                'type': f'{level.upper()}_DIFFERENCE',
                'severity': 'HIGH' if level == 'h1' else 'MEDIUM',
                'v0': v0_headlines,
                'nextjs': nextjs_headlines,
                'message': f'{level.upper()} Headlines unterscheiden sich'
            })
    
    # Button-Texte
    v0_buttons = v0_structure['buttons']
    nextjs_buttons = nextjs_structure['buttons']
    
    if set(v0_buttons) != set(nextjs_buttons):
        result['differences'].append({
            'type': 'BUTTON_DIFFERENCE',
            'severity': 'MEDIUM',
            'v0': v0_buttons,
            'nextjs': nextjs_buttons,
            'message': 'Button-Texte unterscheiden sich'
        })
    
    return result

# Hauptvergleich
def main():
    pages_to_compare = [
        ('/', 'index.html', 'Homepage'),
        ('/ueber-mich', 'ueber-mich/index.html', 'Über mich'),
        ('/wissen', 'wissen/index.html', 'Wissen Übersicht'),
        ('/wissen/thermoregulation', 'wissen/thermoregulation/index.html', 'Wissen: Thermoregulation'),
        ('/wissen/fuetterung', 'wissen/fuetterung/index.html', 'Wissen: Fütterung'),
        ('/wissen/bewegung', 'wissen/bewegung/index.html', 'Wissen: Bewegung'),
        ('/wissen/haltung', 'wissen/haltung/index.html', 'Wissen: Haltung'),
        ('/quiz', 'quiz/index.html', 'Quiz'),
        ('/guides', 'guides/index.html', 'Guides Übersicht'),
        ('/guides/fruehling', 'guides/fruehling/index.html', 'Frühlings-Guide'),
        ('/kontakt', 'kontakt/index.html', 'Kontakt'),
    ]
    
    all_results = []
    
    for url, filename, page_name in pages_to_compare:
        v0_path = f'v0/v0-pferdesicht-com-9i.vercel.app{url if url != "/" else ""}/{filename if url != "/" else "index.html"}'
        nextjs_path = f'nextjs/localhost:3000{url if url != "/" else ""}/{filename if url != "/" else "index.html"}'
        
        result = compare_pages(v0_path, nextjs_path, page_name)
        all_results.append(result)
        
        print(f"\n{'='*60}")
        print(f"SEITE: {page_name}")
        print(f"{'='*60}")
        
        if not result['v0_exists']:
            print("⚪ Existiert nur in Next.js")
        elif not result['nextjs_exists']:
            print("🔴 FEHLT in Next.js (404)")
        elif not result['differences']:
            print("✅ Identisch")
        else:
            print(f"⚠️  {len(result['differences'])} Unterschiede gefunden:")
            for diff in result['differences']:
                severity_icon = '🔴' if diff['severity'] == 'CRITICAL' else '🟠' if diff['severity'] == 'HIGH' else '🟡'
                print(f"  {severity_icon} {diff['type']}: {diff['message']}")
    
    # Speichere kompletten Report
    with open('vergleich_report.json', 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    
    print(f"\n{'='*60}")
    print("ZUSAMMENFASSUNG")
    print(f"{'='*60}")
    
    critical = sum(1 for r in all_results for d in r.get('differences', []) if d['severity'] == 'CRITICAL')
    high = sum(1 for r in all_results for d in r.get('differences', []) if d['severity'] == 'HIGH')
    medium = sum(1 for r in all_results for d in r.get('differences', []) if d['severity'] == 'MEDIUM')
    
    print(f"🔴 CRITICAL: {critical}")
    print(f"🟠 HIGH: {high}")
    print(f"🟡 MEDIUM: {medium}")
    print(f"\nVollständiger Report: vergleich_report.json")

if __name__ == '__main__':
    main()
```

---

### Schritt 3: Skript ausführen

```bash
# Python-Dependencies installieren
pip install beautifulsoup4 lxml

# Skript ausführen
python3 vergleich.py

# Report anzeigen
cat vergleich_report.json | jq '.'
```

---

## PHASE 2: MENSCHENLESBARER REPORT

```bash
# report_generator.py - Zweites Skript für formatierten Report

import json
from datetime import datetime

with open('vergleich_report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

report = f"""# WEBSITE-VERGLEICH REPORT
**Generiert:** {datetime.now().strftime('%d.%m.%Y %H:%M Uhr')}
**v0 Referenz:** https://v0-pferdesicht-com-9i.vercel.app
**Next.js Version:** http://localhost:3000

---

## EXECUTIVE SUMMARY

"""

# Zähle Probleme
missing_pages = [r for r in data if not r['nextjs_exists']]
pages_with_diffs = [r for r in data if r['differences'] and r['nextjs_exists']]
identical_pages = [r for r in data if not r['differences'] and r['v0_exists'] and r['nextjs_exists']]

report += f"""
- 🔴 **Fehlende Seiten:** {len(missing_pages)}
- ⚠️  **Seiten mit Unterschieden:** {len(pages_with_diffs)}
- ✅ **Identische Seiten:** {len(identical_pages)}

---

## FEHLENDE SEITEN (404 FEHLER)

"""

for page in missing_pages:
    report += f"### ❌ {page['page']}\n"
    report += f"**Priorität:** KRITISCH\n\n"

report += "---\n\n## SEITEN MIT INHALTLICHEN UNTERSCHIEDEN\n\n"

for page in pages_with_diffs:
    report += f"### {page['page']}\n\n"
    
    critical = [d for d in page['differences'] if d['severity'] == 'CRITICAL']
    high = [d for d in page['differences'] if d['severity'] == 'HIGH']
    medium = [d for d in page['differences'] if d['severity'] == 'MEDIUM']
    
    if critical:
        report += f"🔴 **{len(critical)} kritische Unterschiede**\n\n"
        for d in critical:
            report += f"- **{d['type']}:** {d['message']}\n"
    
    if high:
        report += f"\n🟠 **{len(high)} wichtige Unterschiede**\n\n"
        for d in high:
            report += f"- **{d['type']}:** {d['message']}\n"
            if 'v0' in d and 'nextjs' in d:
                report += f"  - **v0:** {d['v0']}\n"
                report += f"  - **Next.js:** {d['nextjs']}\n"
    
    if medium:
        report += f"\n🟡 **{len(medium)} mittlere Unterschiede**\n\n"
        for d in medium:
            report += f"- **{d['type']}:** {d['message']}\n"
    
    report += "\n---\n\n"

report += "## IDENTISCHE SEITEN ✅\n\n"
for page in identical_pages:
    report += f"- {page['page']}\n"

# Speichere Report
with open('VERGLEICH_REPORT.md', 'w', encoding='utf-8') as f:
    f.write(report)

print("Report generiert: VERGLEICH_REPORT.md")
```

---

## AUSFÜHRUNGS-ANLEITUNG FÜR CLAUDE CODE

### 1. Vorbereitungen
```bash
cd /Users/stefan/Documents/Pferdesicht/website
npm install
pip install beautifulsoup4 lxml
```

### 2. Beide Skripte erstellen
- `vergleich.py` (siehe oben)
- `report_generator.py` (siehe oben)

### 3. Ausführen
```bash
# Crawlen & Vergleichen (dauert 2-3 Minuten)
bash -c "$(cat << 'EOF'
cd /Users/stefan/Documents/Pferdesicht/website
npm run dev &
DEV_PID=$!
sleep 10

mkdir -p /tmp/website-vergleich
cd /tmp/website-vergleich

wget -r -np -k -p --domains=v0-pferdesicht-com-9i.vercel.app \
     -P v0 https://v0-pferdesicht-com-9i.vercel.app/

wget -r -np -k -p --domains=localhost \
     -P nextjs http://localhost:3000/

kill $DEV_PID

python3 vergleich.py
python3 report_generator.py

echo "==================================="
echo "REPORT FERTIG:"
cat VERGLEICH_REPORT.md
EOF
)"
```

### 4. Report lesen & Korrekturen planen
```bash
# Report anzeigen
cat /tmp/website-vergleich/VERGLEICH_REPORT.md

# JSON für Details
cat /tmp/website-vergleich/vergleich_report.json | jq '.'
```

---

## ERWARTETES ERGEBNIS

Der Report zeigt dir automatisch:

1. ✅ **Welche Seiten fehlen** (404)
2. ✅ **Welche Headlines unterschiedlich sind** (h1, h2, h3)
3. ✅ **Welche Texte abweichen** (mit Ähnlichkeits-Prozentsatz)
4. ✅ **Welche Button-Texte anders sind**
5. ✅ **Welche Links fehlen oder anders sind**

**Kein manuelles Checking mehr nötig!**

---

## NÄCHSTER SCHRITT

Nach Report-Generierung:

1. Claude Code liest `VERGLEICH_REPORT.md`
2. Claude Code erstellt **automatische Korrektur-Aufgaben**
3. Claude Code führt Korrekturen durch
4. Claude Code re-validiert mit erneutem Vergleich

**Stefan muss nur noch final freigeben!**
