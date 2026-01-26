# WEBSITE-VERGLEICH REPORT

**Datum:** 25. Januar 2026
**v0.app URL:** https://v0-pferdesicht-com-9i.vercel.app
**Next.js URL:** localhost:3000 (Entwicklung)

---

## EXECUTIVE SUMMARY

| Status | Anzahl |
|--------|--------|
| 🔴 Fehlende Seiten | 1 |
| 🟠 Seiten mit Unterschieden | 3 |
| ✅ Weitgehend identisch | 3 |

---

## 1. FEHLENDE SEITEN

### ❌ /quiz
**Priorität:** KRITISCH

- Wird auf Homepage und /wissen verlinkt
- Führt aktuell zu 404
- **Aktion erforderlich:** Quiz-Seite implementieren

---

## 2. HOMEPAGE VERGLEICH

### Hero Section

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| Badge | "PERSPEKTIVWECHSEL" | "PERSPEKTIVWECHSEL" | ✅ |
| H1 | "Finde die Wahrheit für dein Pferd im Meinungs-Dschungel." | "Finde die Wahrheit für dein Pferd im Meinungs-Dschungel." | ✅ |
| Subtext | "Du bist nicht „pingelig"... Fundiert sortiert und im Matsch des Alltags getestet." | "Du hinterfragst nicht zu viel – du bist konsequent..." | 🟠 UNTERSCHIED |
| CTA | "Frühlings-Check starten" | "Frühlings-Check starten" | ✅ |
| Badges | 2 Minuten, Persönlicher Fahrplan, 100% kostenfrei | 2 Minuten, Persönlicher Fahrplan, 100% kostenfrei | ✅ |

**🟠 Hero Subtext-Unterschied:**
- **v0.app:** "Du bist nicht „pingelig", wenn du Dinge hinterfragst – du bist konsequent. Doch dein Weg zur natürlichen Haltung ist gepflastert mit widersprüchlichen Informationen. Ich filtere das für dich: Fundiert sortiert und im Matsch des Alltags getestet."
- **Next.js:** "Du hinterfragst nicht zu viel – du bist konsequent. Hier bekommst du getestete, praxisnahe Informationen zu natürlicher Pferdehaltung."

### Quote Section

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| Quote | "Es gibt nie nur die eine richtige Lösung..." + Erklärungstext | "Es gibt nie nur die eine richtige Lösung..." (kürzer) | 🟠 |

**🟠 Quote Section fehlt erweiterter Text:**
v0.app hat zusätzlich: "Standard-Antworten werden Individuen niemals gerecht. Was für das Pferd deiner Stallkollegin funktioniert, kann für deines der falsche Weg sein..."

### Diana Section

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| Überschrift | "Ich bin Diana." | "Ich bin Diana." | ✅ |
| Text | "Seit über 30 Jahren... Ich filtere für dich die Wahrheit" | Ähnlich, aber erweitert | ✅ |

### Wissen schafft Gesundheit Section

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| H2 Zeile 1 | "Wissen schafft Gesundheit." | "Wissen schafft Gesundheit." | ✅ |
| H2 Zeile 2 | "Beziehung schafft Vertrauen." | "Beziehung schafft Vertrauen." (italic) | ✅ |
| Block 1: Titel | "Das Experten-Netzwerk" | "DAS EXPERTEN-NETZWERK" | ✅ |
| Block 1: Text | Identisch | Identisch | ✅ |
| Block 2: Titel | "Der Blick hinter die Kulissen" | "DER BLICK HINTER DIE KULISSEN" | ✅ |
| Block 2: Text | Identisch | Identisch | ✅ |
| Block 3 | ❌ Nicht vorhanden | "DIE THERAPEUTISCHE PERSPEKTIVE" | ➕ EXTRA |
| Link | "Wie ich lernte..." | "Wie ich lernte..." | ✅ |

### Blog Preview Section

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| Artikel | 3 Artikel mit spezifischen Titeln | Dynamisch aus MDX | 🟠 |

**🟠 Blog-Artikel unterscheiden sich:**
- v0.app: "Körpersprache: Der Dialog beginnt...", "0 Grad am Stall...", "Angst im Sattel..."
- Next.js: Zeigt die 3 neuesten MDX-Artikel

---

## 3. /BLOG (WISSEN) VERGLEICH

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| H1 | "Entdecke unsere Themenwelten" | "Entdecke unsere Themenwelten" | ✅ |
| Subtext | "Für Pferdemenschen, die hinschauen..." | "Für Pferdemenschen, die hinschauen..." | ✅ |
| Suchfeld Placeholder | "Suchen" | "Suche nach Themen, Tipps oder Perspektiven..." | 🟠 |
| Kategorien | ALLE, TRAINING, GESUNDHEIT, MINDSET | ALLE, TRAINING, GESUNDHEIT, MINDSET | ✅ |
| Diana Section | "Wissen als Rüstung" + Text | "Wissen als Rüstung" + Text | ✅ |
| Diana Text Ende | "Du bist nicht 'zu pingelig'. Du schaust hin." | ❌ Fehlt | 🟠 |

**🟠 Diana-Sektion Text-Unterschied:**
- **v0.app:** Endet mit "Du bist nicht 'zu pingelig'. Du schaust hin."
- **Next.js:** Endet mit "...was ich auf die harte Tour lernen musste."

---

## 4. /UEBER-DIANA VERGLEICH

| Element | v0.app | Next.js | Status |
|---------|--------|---------|--------|
| H1 | "Über Diana" | "Hallo, ich bin Diana." | 🟠 |
| Subtext | "Für Pferdemenschen, die hinschauen." | ❌ Fehlt | 🟠 |
| Gaslighting-Sätze | 8 Sätze Liste | ❌ Fehlt | 🔴 |
| "Der Moment der alles verändert hat" | Vorhanden (Benny-Geschichte) | ❌ Fehlt | 🔴 |
| Was ich glaube | Vorhanden | ❌ Fehlt | 🔴 |
| Was ich dir geben will | Vorhanden | ❌ Fehlt | 🔴 |
| Team Section | Stefan als Partner | ❌ Fehlt | 🔴 |
| Für wen ist Pferdesicht | Zielgruppen-Liste | ❌ Fehlt | 🔴 |
| Erfahrungszahlen | 30+, 20, 16, 15 Jahre | 30+, 20, 16, 15 Jahre | ✅ |
| Drei Säulen | Praktikerin, Reittherapeutin, Freiheitsdressur | Praktikerin, Reittherapeutin, Freiheitsdressur | ✅ |

**🔴 Über-Diana Seite stark abweichend:**
Die v0.app Version hat eine viel ausführlichere Story mit:
- Gaslighting-Sätze aus dem Stall
- Benny-Geschichte (Wendepunkt)
- "Was ich glaube" / "Was ich dir geben will"
- Team-Vorstellung (Stefan)
- Zielgruppen-Definition

---

## 5. PRIORITÄTEN-LISTE

### 🔴 KRITISCH (sofort beheben)

1. **Quiz-Seite erstellen** - Links führen zu 404
2. **Hero Subtext anpassen** - v0.app Text übernehmen
3. **Quote Section erweitern** - Zusatztext hinzufügen

### 🟠 WICHTIG (zeitnah beheben)

4. **Über-Diana Seite erweitern:**
   - Gaslighting-Sätze hinzufügen
   - Benny-Geschichte einfügen
   - "Was ich glaube" Section
   - Team-Section (Stefan)
   - Für-wen-ist-Pferdesicht

5. **Wissen/Blog Diana-Text:**
   - "Du bist nicht 'zu pingelig'. Du schaust hin." hinzufügen

6. **Suchfeld Placeholder:**
   - Von lang auf kurz: "Suchen"

### ✅ OPTIONAL (Verbesserungen)

7. Block 3 "Therapeutische Perspektive" - ist in Next.js extra, prüfen ob gewünscht
8. Blog-Artikel Kategorien an v0.app anpassen (Training, Mindset fehlen)

---

## 6. IDENTISCHE ELEMENTE

Diese Elemente sind korrekt implementiert:

- ✅ Navigation (Header/Footer)
- ✅ Farbschema (Loam, Sage, Gold)
- ✅ Typografie (EB Garamond, Poppins)
- ✅ "Wissen schafft Gesundheit" Section (Blöcke 1+2)
- ✅ Quiz-Teaser Section
- ✅ Diana-Foto und Grundinfo
- ✅ Erfahrungszahlen (30+, 20, 16, 15)
- ✅ Drei Säulen (Praktikerin, Therapeutin, Freiheitsdressur)
- ✅ Impressum, Datenschutz, AGB
- ✅ Kontaktseite

---

*Report generiert am 25. Januar 2026*
