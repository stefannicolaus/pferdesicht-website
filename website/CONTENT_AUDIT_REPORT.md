# CONTENT AUDIT REPORT – Pferdesicht Website

**Erstellt:** 26.01.2026
**Geprüft gegen:** PROJECT_GUIDE.md, Diana-Bibel v3.0, Golden Circle v2.2

---

## ÜBERSICHT

| Seite | Status | Kritische Issues |
|-------|--------|------------------|
| **Homepage** | ⚠️ Anpassungen nötig | 3 |
| **Über-mich** | ✅ Gut | 2 kleine |
| **G18 Sales Page** | ⚠️ Anpassungen nötig | 4 |
| **Quiz** | ✅ Gut | 1 klein |
| **Wissen/Blog** | ⚠️ Klärung nötig | 1 |
| **Header/Footer** | ✅ Konform | 0 |

---

## 1. HOMEPAGE (`src/app/page.tsx`)

### ✅ Was ENTSPRICHT der Strategie

| Element | Referenz | Status |
|---------|----------|--------|
| Hero Problem+Lösung Format | PROJECT_GUIDE Hero-Section | ✅ |
| Validierung "nicht pingelig" | Diana-Bibel Signature Phrases | ✅ |
| Diana-Section mit Dreifach-Autorität | Golden Circle WHAT | ✅ |
| Quote-Section | Diana-Bibel Aha-Momente | ✅ |
| Wissen-Section (3 Säulen) | Golden Circle HOW | ✅ |
| "Vertraue deiner Perspektive" (implizit im Footer) | Diana-Bibel | ✅ |

### ❌ Was NICHT entspricht / FEHLT

#### KRITISCH 1: Gaslighting-Section fehlt auf Homepage
**Referenz:** PROJECT_GUIDE → Gaslighting-Section ("Kennst du das?")

**Soll (laut Strategie):**
```
H2: "Kennst du das?"
- [3-4 Gaslighting-Sätze als Zitate]
- Dann: "Du bist nicht das Problem. Das System ist das Problem."
```

**Ist:** Diese Section fehlt komplett auf der Homepage. Sie existiert nur auf `/ueber-mich`.

**Empfehlung:** Gaslighting-Section zwischen Diana-Section und Quote-Section einfügen.

---

#### KRITISCH 2: Benefits-Section nach Anna's 3-Schichten fehlt
**Referenz:** PROJECT_GUIDE → Benefits-Section (3 Stück), Anna-Framework Section 2.1

**Soll (laut Strategie):**
- 1 Benefit pro Schicht (Explizit, Implizit, Unbewusst)
- Schicht 1: "Was Anna SAGT sie will"
- Schicht 2: "Was Anna FÜHLT"
- Schicht 3: "Was Anna NICHT AUSSPRICHT"

**Ist:** Es gibt eine "Wissen-Section" mit 3 Säulen (Experten-Netzwerk, Blick hinter Kulissen, Therapeutische Perspektive), aber diese sind aus **Diana's Perspektive** formuliert, nicht als **Benefits für Anna**.

**Empfehlung:** Separate Benefits-Section vor oder nach der Diana-Section hinzufügen, die Anna's 3 Schichten direkt anspricht.

---

#### HINWEIS 3: CTA-Formulierung
**Referenz:** PROJECT_GUIDE → CTA: "Entdecken" (nicht "Kaufen")

**Ist:**
- Hero CTA: "Frühlings-Check starten" → ✅ OK (kein "Kaufen")
- Final CTA: "Jetzt Frühlings-Check starten" → ✅ OK

**Empfehlung:** Kein dringender Handlungsbedarf, aber bei Produkt-Links bevorzugt "entdecken" verwenden.

---

## 2. ÜBER-MICH SEITE (`src/app/ueber-mich/page.tsx`)

### ✅ Was ENTSPRICHT der Strategie

| Element | Referenz | Status |
|---------|----------|--------|
| Gaslighting-Sätze vorhanden | Diana-Bibel Teil 7 | ✅ |
| Benny-Geschichte | Golden Circle Origin Story | ✅ |
| "Was ich glaube" (kontroverser Glaubenssatz) | Golden Circle | ✅ |
| "Wissen als Rüstung" | Diana-Bibel Mission | ✅ |
| "Vertraue deiner Perspektive" Signatur | Diana-Bibel Signature Phrases | ✅ |
| Mein Weg (6 Punkte inkl. Reittherapie) | Golden Circle WHAT | ✅ |
| "Du bist nicht das Problem" | Diana-Bibel | ✅ |

### ⚠️ Kleine Anpassungen nötig

#### HINWEIS 1: Falscher Link in CTA-Cards
**Datei:** `src/app/ueber-mich/page.tsx` Zeile 408

**Ist:**
```tsx
<Link href="/guides/winter" ...>
```

**Problem:** `/guides/winter` existiert vermutlich nicht (nur `/guides/fruehling` gefunden).

**Empfehlung:** Link ändern zu `/guides/fruehling` oder entfernen bis Winter-Guide existiert.

---

#### HINWEIS 2: CTA-Formulierung "Jetzt holen"
**Referenz:** PROJECT_GUIDE → CTA: "Entdecken"

**Ist:** "Jetzt holen →"

**Empfehlung:** Ändern zu "Jetzt entdecken →" für DACH-Konsistenz.

---

## 3. G18 SALES PAGE (`src/app/guides/fruehling/page.tsx`)

### ✅ Was ENTSPRICHT der Strategie

| Element | Referenz | Status |
|---------|----------|--------|
| "Kennst du das?" Problem-Section | PROJECT_GUIDE | ✅ |
| 4 Module als Cards | PROJECT_GUIDE Module-Overview | ✅ |
| Preis €47 prominent | PROJECT_GUIDE Pricing | ✅ |
| FAQ vorhanden | PROJECT_GUIDE FAQ | ✅ |
| 14 Tage Garantie | Produktstrategie | ✅ |

### ❌ Was NICHT entspricht / FEHLT

#### KRITISCH 1: Kosten-Framing fehlt
**Referenz:** PROJECT_GUIDE → Pricing-Section, Diana-Bibel Teil 13 (Kosten-Tonalität)

**Soll (laut Strategie):**
```
Kosten-Framing:
  "Eine Kolik-OP: 5.000-15.000€
   Hufrehe-Behandlung: 500-2.000€
   Für 47€ hast du den Fahrplan."
```

**Ist:** Nur "für weniger als ein Hufschmied-Besuch" (Zeile 549)

**Empfehlung:** Konkretes Kosten-Framing ergänzen:
```tsx
<p className="text-loam-300 mb-8 max-w-md mx-auto">
  Eine Kolik-OP kostet 5.000–15.000 €. Eine Hufrehe-Behandlung 500–2.000 €.
  Für 47 € hast du das Wissen, das vorbeugt.
</p>
```

---

#### KRITISCH 2: Rationale "Wissen soll zugänglich sein" fehlt
**Referenz:** PROJECT_GUIDE → Pricing-Section

**Soll:** Rationale für den Preis: "Wissen soll zugänglich sein"

**Ist:** Keine explizite Rationale.

**Empfehlung:** In Pricing-Section ergänzen.

---

#### KRITISCH 3: CTA "Jetzt kaufen" nicht DACH-konform
**Referenz:** PROJECT_GUIDE → CTA DACH-appropriate ("Jetzt entdecken")

**Ist:**
- Zeile 206-207: `Jetzt kaufen – 47 €`
- Zeile 551-552: `Jetzt kaufen`
- Zeile 591-592: `Jetzt Frühlings-Guide kaufen – 47 €`

**Empfehlung:** Ändern zu:
- "Jetzt Zugang sichern – 47 €"
- "Jetzt Guide entdecken – 47 €"

---

#### KRITISCH 4: Falscher Link und fehlender Avatar
**Datei:** Zeile 512-514

**Ist:**
```tsx
<Link href="/ueber-diana" ...>
```

**Problem:** Seite heißt `/ueber-mich`, nicht `/ueber-diana`.

**Ist:** Placeholder-Avatar (SVG) statt Diana's Bild.

**Empfehlung:**
- Link ändern zu `/ueber-mich`
- Avatar durch echtes Bild ersetzen: `/images/Diana_Pferdesicht.jpeg`

---

## 4. QUIZ SEITE (`src/app/quiz/page.tsx`)

### ✅ Was ENTSPRICHT der Strategie

| Element | Referenz | Status |
|---------|----------|--------|
| Risiko-Ampel (Grün/Gelb/Rot) | Quiz-Konzept | ✅ |
| Persönlicher Fahrplan | Lead-Magnet-Strategie | ✅ |
| E-Mail-Capture | Funnel-Architektur | ✅ |
| Context-Fragen für Personalisierung | Anna-Framework | ✅ |

### ⚠️ Kleine Anpassung nötig

#### HINWEIS: Signature Phrase fehlt auf Thank-You
**Referenz:** Diana-Bibel → "Vertraue deiner Perspektive" am Ende jeden Contents

**Ist:** Keine Signature Phrase auf der Completion-Seite.

**Empfehlung:** Am Ende der Completion-Seite ergänzen:
```tsx
<p className="text-loam-600 italic font-serif mt-8">
  „Vertraue deiner Perspektive." — Deine Diana
</p>
```

---

## 5. WISSEN & BLOG SEITEN

### ⚠️ Strukturelle Frage

**Problem:** Es gibt ZWEI separate Seiten mit ähnlicher Funktion:
- `/wissen` (`src/app/wissen/page.tsx`)
- `/blog` (`src/app/blog/page.tsx`)

**Unterschiede:**
| Aspekt | /wissen | /blog |
|--------|---------|-------|
| Headline | "Entdecke unsere Themenwelten" | "Blog" |
| Kategorien | TRAINING, GESUNDHEIT, MINDSET | Fütterung, Haltung, Gesundheit, Verhalten, Training, Pflege |
| Diana-Section | ✅ Vorhanden | ❌ Fehlt |
| Quiz-CTA | ✅ Vorhanden | Newsletter-CTA |

**Empfehlung:** Klären, ob beide Seiten benötigt werden oder zusammengeführt werden sollten. Aktuell könnte das für User verwirrend sein.

### ✅ Was GUT ist

- `/wissen` hat "Wissen als Rüstung" Section
- `/wissen` hat "Du bist nicht zu pingelig"
- Beide haben funktionale Filter und Suche

---

## 6. HEADER & FOOTER

### ✅ Vollständig konform

| Element | Referenz | Status |
|---------|----------|--------|
| Logo mit Tagline "Vertraue deiner Perspektive" | Branding | ✅ |
| Navigation Struktur | Design System | ✅ |
| Footer Signature | Diana-Bibel | ✅ |
| Footer Mission | Golden Circle | ✅ |

---

## 7. DESIGN SYSTEM (`src/lib/design-system.ts`)

### ✅ Vollständig konform

| Element | Referenz | Status |
|---------|----------|--------|
| Farben (sage #78866b, loam #2c2a25, gold #c8a476) | CLAUDE.md Farben | ✅ |
| Tagline "Vertraue deiner Perspektive" | Diana-Bibel | ✅ |
| Mission "Wissen als Rüstung" | Golden Circle | ✅ |
| Visual Layers definiert | CLAUDE.md Visuelle Ebenen | ✅ |

---

## ZUSAMMENFASSUNG: PRIORISIERTE AKTIONSLISTE

### 🔴 HOCH (Content-Strategie-Abweichung)

1. **Homepage:** Gaslighting-Section ("Kennst du das?") hinzufügen
2. **Homepage:** Benefits-Section nach Anna's 3-Schichten hinzufügen
3. **G18 Sales:** Kosten-Framing ergänzen (Kolik-OP, Hufrehe)
4. **G18 Sales:** CTAs von "Kaufen" zu "Entdecken/Zugang sichern" ändern

### 🟡 MITTEL (Technische Fixes)

5. **G18 Sales:** Link `/ueber-diana` → `/ueber-mich` korrigieren
6. **G18 Sales:** Placeholder-Avatar durch echtes Diana-Bild ersetzen
7. **Über-mich:** Link `/guides/winter` korrigieren oder entfernen
8. **Wissen/Blog:** Entscheiden ob beide Seiten nötig sind

### 🟢 NIEDRIG (Nice-to-have)

9. **Quiz:** Signature Phrase auf Thank-You-Seite
10. **G18 Sales:** Rationale "Wissen soll zugänglich sein" ergänzen
11. **Über-mich:** CTA "Jetzt holen" → "Jetzt entdecken"

---

## TONALITÄTS-CHECK

### ✅ Korrekt verwendet

| Phrase | Vorkommen |
|--------|-----------|
| "Vertraue deiner Perspektive" | Header, Footer, Über-mich |
| "Wissen als Rüstung" | Über-mich, Wissen |
| "Du bist nicht zu pingelig" | Homepage, Wissen |
| "Für Pferdemenschen, die hinschauen" | Über-mich, Wissen |

### ⚠️ Zu prüfen

| Phrase | Problem |
|--------|---------|
| "durchsetzen" | Kommt 1x vor in Über-mich ("Wie du dich am Stall durchsetzt") → sollte "behaupten" sein |

**Datei:** `src/app/ueber-mich/page.tsx` Zeile 245-246

**Ist:** "Wie du dich am Stall durchsetzt"

**Soll:** "Wie du dich am Stall behauptest"

---

## FEHLENDE SIGNATURE PHRASES

Diese Signature Phrases aus der Diana-Bibel werden noch nicht verwendet:

- "Pferde lügen nicht – sie spiegeln" (Reittherapie)
- "Das Pferd zeigt dir, was du noch nicht siehst"
- "Verstehen kommt vor Korrigieren"
- "Klar sein, nicht laut werden"

**Empfehlung:** Bei passenden Inhalten einbauen, besonders bei Verhaltens- und Beziehungsthemen.

---

*Report erstellt am 26.01.2026*
*Geprüft gegen: PROJECT_GUIDE.md, Diana-Bibel v3.0, Golden Circle v2.2*
