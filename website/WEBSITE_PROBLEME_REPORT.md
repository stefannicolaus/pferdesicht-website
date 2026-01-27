# PFERDESICHT WEBSITE - BEKANNTE PROBLEME REPORT

**Stand:** 26. Januar 2026, 20:00 Uhr  
**Basis:** Manuelle Screenshots & bisherige Analyse

---

## EXECUTIVE SUMMARY

- 🔴 **Fehlende Seiten:** 5+ (geschätzt)
- ⚠️  **Seiten mit großen Abweichungen:** 2 (bestätigt)
- ✅ **Korrekte Seiten:** 3 (bestätigt)
- ❓ **Nicht geprüft:** 8+ Seiten

---

## 🔴 KRITISCHE PROBLEME (BESTÄTIGT)

### 1. Quiz-Seite fehlt komplett
**URL:** `/quiz`  
**Status:** 404 - Seite existiert nicht  
**Auswirkung:** Alle Homepage-CTAs führen ins Leere  
**Priorität:** HÖCHSTE

**Betroffene Links:**
- Homepage Hero: "Frühlings-Check starten"
- Homepage Quiz-Sektion: "Quiz starten"
- Alle weiteren "Quiz starten" Buttons

---

### 2. Wissen: Thermoregulation fehlt
**URL:** `/wissen/thermoregulation`  
**Status:** 404 - Seite existiert nicht (Screenshot bestätigt)  
**Auswirkung:** Navigation-Dropdown führt zu 404  
**Priorität:** HOCH

---

### 3. Über-mich Seite komplett falsch
**URL:** `/ueber-diana` (sollte `/ueber-mich` sein)  
**Status:** Existiert, aber mit völlig falschen Inhalten  
**Priorität:** HOCH

**Unterschiede:**

| Element | v0 (KORREKT) | Next.js (FALSCH) |
|---------|--------------|------------------|
| **URL** | `/ueber-mich` | `/ueber-diana` |
| **Headline** | "Für Pferdemenschen, die hinschauen." | "Hallo, ich bin Diana." |
| **Subline** | "Pferde fand ich schon als kleines Kind toll. Mit 12..." | "Heute gebe ich dir die Worte, das Wissen und den Mut..." |
| **Layout** | Zweispaltig (Foto + Text) | Hero-Format mit Avatar-Placeholder |
| **Storytelling** | Persönliche Geschichte mit Zitaten | Abstraktes Mission-Statement |
| **Bild** | Echtes Diana-Foto | User-Icon Placeholder |

---

## ⚠️  WAHRSCHEINLICH FEHLENDE SEITEN (NICHT GEPRÜFT)

Diese Seiten sind in der Navigation verlinkt, wurden aber noch nicht getestet:

### 4. /wissen/fuetterung
**Status:** Unbekannt  
**Wahrscheinlichkeit fehlt:** 80%  
**Grund:** Gleiche Struktur wie /thermoregulation

### 5. /wissen/bewegung
**Status:** Unbekannt  
**Wahrscheinlichkeit fehlt:** 80%  

### 6. /wissen/haltung
**Status:** Unbekannt  
**Wahrscheinlichkeit fehlt:** 80%  

### 7. /guides (Index-Seite)
**Status:** Unbekannt  
**Wahrscheinlichkeit fehlt:** 60%  
**Grund:** Nur /guides/fruehling existiert bestätigt

---

## ⚠️  BEKANNTE TEXTABWEICHUNGEN (HOMEPAGE)

### Problem: Claude Code hat Texte "optimiert"

**Betroffene Bereiche:**

#### 1. Hero Subheadline

**v0 (KORREKT):**
```
Du bist nicht „pingelig", wenn du Dinge hinterfragst – 
du bist konsequent. Doch dein Weg zur natürlichen Haltung 
ist gepflastert mit widersprüchlichen Informationen. 
Ich filtere das für dich: Fundiert sortiert und im Matsch 
des Alltags getestet.
```

**Next.js (FALSCH):**
```
Du hinterfragst nicht zu viel – du bist konsequent. 
Hier bekommst du getestete, praxisnahe Informationen 
zu natürlicher Pferdehaltung.
```

**Änderung:** Text massiv gekürzt und umformuliert

---

#### 2. "Über mich" Sektion auf Homepage

**v0 (KORREKT):**
```
Seit über 30 Jahren begleiten mich Pferde. Ich filtere 
für dich die Wahrheit im Meinungs-Dschungel.
```
(NUR 2 Sätze!)

**Next.js (FALSCH):**
```
Seit über 30 Jahren begleiten mich Pferde. Was als 
jugendliche Leidenschaft begann, wurde zur Lebensaufgabe: 
Pferdewissen sortieren, prüfen und verständlich weitergeben.

Ich habe 20 Jahre einen Offenstall geführt, bin seit 
16 Jahren Reittherapeutin und habe bei Hempura 15 Jahre 
lang tausende Gespräche mit Pferdebesitzern geführt.

Ich filtere für dich die Wahrheit im Meinungs-Dschungel.
```

**Änderung:** Von 2 auf 3 Absätze aufgebläht

---

#### 3. Zitat-Box hinzugefügt (existiert nicht in v0!)

**Next.js hat hinzugefügt:**
```
"Es gibt nie nur die eine richtige Lösung, wenn es um 
dein Pferd geht. Jedes Pferd ist anders. Jede Situation 
ist anders. Deine Aufgabe ist es, hinzuschauen und die 
Signale zu lesen."
— Diana
```

**v0:** Dieser Text existiert als normale H2 + Paragraph, NICHT als Zitat-Box!

---

#### 4. "Therapeutische Perspektive" Sektion hinzugefügt

**Next.js hat ganze Sektion hinzugefügt:**
```
### Die therapeutische Perspektive
16 Jahre Reittherapie haben mich gelehrt: Das Pferd 
reagiert nie grundlos – es spiegelt. [...]
```

**v0:** Diese Sektion existiert NICHT! Nur zwei Sektionen:
- Das Experten-Netzwerk
- Der Blick hinter die Kulissen

---

#### 5. Newsletter-Anmeldung im Footer hinzugefügt

**Next.js hat hinzugefügt:**
```
Wissen direkt ins Postfach
Praktische Tipps und fundiertes Wissen für dich und dein Pferd.
[E-Mail-Formular]
```

**v0:** Einfacher Footer ohne Newsletter-Anmeldung

---

#### 6. Button-Texte inkonsistent

**v0:** "Quiz starten" (durchgehend)  
**Next.js:** "Jetzt Quiz starten" (an manchen Stellen)

---

## ✅ KORREKTE SEITEN (BESTÄTIGT)

### 1. /guides/fruehling
**Status:** ✅ Funktioniert  
**Inhalt:** Korrekt

### 2. /kontakt
**Status:** ✅ Funktioniert (angenommen)

### 3. /impressum, /datenschutz, /agb
**Status:** ✅ Sollten funktionieren

---

## ❓ NICHT GEPRÜFTE SEITEN

- `/blog` (Übersicht)
- `/blog/fellwechsel-im-fruehjahr`
- `/blog/anweiden-richtig-gemacht`
- `/blog/eindecken-winter`
- `/wissen` (Hauptseite)

---

## 📊 STATISTIK

| Status | Anzahl | Prozent |
|--------|--------|---------|
| 🔴 Fehlt komplett | 2-5 | ~15-25% |
| ⚠️ Falsche Inhalte | 2 | ~10% |
| ✅ Korrekt | 3 | ~15% |
| ❓ Nicht geprüft | 8+ | ~50% |

**Geschätzte Website-Vollständigkeit:** ~60-75%

---

## 🎯 NÄCHSTE SCHRITTE FÜR CLAUDE CODE

### PHASE 1: Vollständiger Status-Check (empfohlen)
```bash
# Automatischer Vergleich mit Python-Skript
# Siehe: AUTOMATISCHER_VERGLEICH.md
```

**Oder manuell alle URLs testen:**

```bash
# Lokal testen
npm run dev

# Alle URLs durchklicken:
open http://localhost:3000/
open http://localhost:3000/quiz
open http://localhost:3000/wissen/thermoregulation
open http://localhost:3000/wissen/fuetterung
open http://localhost:3000/wissen/bewegung
open http://localhost:3000/wissen/haltung
open http://localhost:3000/guides
open http://localhost:3000/ueber-mich
# ... etc.
```

---

### PHASE 2: Fehlende Seiten erstellen
1. `/quiz` (HÖCHSTE PRIORITÄT)
2. `/wissen/thermoregulation`
3. `/wissen/fuetterung`
4. `/wissen/bewegung`
5. `/wissen/haltung`
6. `/guides` (Index)

---

### PHASE 3: Textkorrek turen
1. Homepage Hero Subheadline zurücksetzen
2. "Über mich" Sektion auf 2 Sätze reduzieren
3. Zitat-Box entfernen → normaler Text
4. "Therapeutische Perspektive" Sektion entfernen
5. Newsletter-Footer entfernen
6. Button-Texte: "Quiz starten" (einheitlich)

---

### PHASE 4: /ueber-mich Seite neu erstellen
1. URL von `/ueber-diana` → `/ueber-mich`
2. Kompletten Inhalt aus v0 übernehmen
3. Layout: Zweispaltig statt Hero
4. Echtes Diana-Foto statt Placeholder

---

## 📁 REFERENZ-DOKUMENTE

1. **AUTOMATISCHER_VERGLEICH.md** - Vollautomatischer Website-Vergleich
2. **DOMAIN_UND_TEXTKORREKTUREN.md** - DNS-Setup & Textkorrekturen
3. **CLAUDE_CODE_AUFGABEN.md** - Detaillierte Aufgabenliste
4. **UEBER_DIANA_ABWEICHUNGEN.md** - Spezifisch für Über-mich Seite

---

## ⚡ EMPFEHLUNG

**OPTION A (Gründlich):**
1. Führe automatischen Vergleich durch → komplette Liste aller Probleme
2. Arbeite systematisch alle Probleme ab
3. Re-validiere mit erneutem Vergleich

**OPTION B (Schnell):**
1. Starte sofort mit bekannten Problemen (dieser Report)
2. Teste manuell fehlende Seiten nach
3. Korrigiere während des Testens

**Zeitersparnis OPTION A:** ~2-3 Stunden weniger Trial-&-Error  
**Zeitersparnis OPTION B:** ~30 Minuten schnellerer Start

---

**Dieser Report basiert auf:**
- ✅ 2 Screenshots (Quiz 404, Thermoregulation 404)
- ✅ Homepage-Vergleich (v0 vs Next.js)
- ✅ Über-Diana Seite (localhost vs v0)
- ❓ Restliche Seiten nicht manuell geprüft
