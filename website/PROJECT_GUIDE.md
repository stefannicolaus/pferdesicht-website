# PROJEKT-DOKUMENTATION QUICK REFERENCE

Alle Projektdateien sind in `/project-docs/`

---

## FÜR HOMEPAGE

### Hero-Section
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-golden-circle-v2_2.md` → Section "WHY" (Anna wird als "zu kompliziert" abgestempelt)
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md` → Section 1.2 (Signature Phrases, nutze "Vertraue deiner Perspektive")
- `/project-docs/pferdesicht-sales-copy-frameworks.md` → Headline-Formeln (Problem + Lösung)

**Struktur:**
- H1: Problem + Lösung Format
- Subheadline: 1 Satz Validierung
- CTA: "Entdecken" (nicht "Kaufen")

### Über-Abschnitt (100 Wörter)
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-ueber-mich-v4_2.md` → Komprimiere auf 100 Wörter
- `/project-docs/pferdesicht-golden-circle-v2_2.md` → Dreifach-Autorität (20 Jahre Offenstall + 16 Jahre Reittherapie + 15 Jahre Hempura)

### Benefits-Section (3 Stück)
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md` → Section 2.1 (3 Schichten: Explizit, Implizit, Unbewusst)
- Erstelle 1 Benefit pro Schicht

### Gaslighting-Section ("Kennst du das?")
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md` → Section 7 (Gaslighting-Sätze)
- Wähle 3-4 Sätze: "Du denkst zu viel", "Das haben wir schon immer so gemacht", "Der verarscht dich nur"

**Format:**
```
H2: "Kennst du das?"
- [3-4 Gaslighting-Sätze als Zitate]
- Dann: "Du bist nicht das Problem. Das System ist das Problem."
```

---

## FÜR ÜBER-MICH-SEITE

**Benötigte Dokumente:**
- `/project-docs/pferdesicht-ueber-mich-v4_2.md` → **KOMPLETT 1:1 übernehmen** (ist bereits v4.2 FINAL, nicht umschreiben!)

**Aufgabe:**
- Markdown → React Components konvertieren
- Design-System anwenden
- Bilder-Platzhalter einfügen (Diana liefert später)
- **KEINE inhaltlichen Änderungen!**

---

## FÜR G18 SALES-PAGE

### Intro (Emotional Hook)
**Benötigte Dokumente:**
- `/project-docs/g18-einleitung-v2_0-draft.md` → **KOMPLETT 1:1 übernehmen** (nicht umschreiben!)
- Section "Du kennst das Gefühl" + "Warum dieser Guide existiert"

### Module-Overview (5 Module als Cards)
**Benötigte Dokumente:**
- `/project-docs/g18-modul1-fellwechsel-v13-final.md` → Fazit-Section
- `/project-docs/g18-modul2-fruktan-anweiden-v12-final.md` → Fazit-Section
- `/project-docs/g18-modul3-parasiten-entwurmung-v2_0-final.md` → Fazit-Section
- `/project-docs/g18-modul4-fuetterung-fruehling-v6-final.md` → Fazit-Section
- `/project-docs/g18-modul5-integration-fahrplan-v2_0-final.md` → Fazit-Section

**Darstellung:**
- 5 Module als Cards
- Je: Icon, Titel, Summary (aus Fazit, 2-3 Sätze), "Was du lernst" (3 Bullet Points)

### Pricing-Section
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-produktstrategie-v1_2-komplett.md` → Section "G18 Pricing" (€47 + Rationale: "Wissen soll zugänglich sein")
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md` → Section "Kosten-Tonalität" (Fakt-basiert, nicht Angst)

**Struktur:**
```
Preis: €47 prominent
Rationale: "Wissen soll zugänglich sein"
Kosten-Framing:
  "Eine Kolik-OP: 5.000-15.000€
   Hufrehe-Behandlung: 500-2.000€
   Für 47€ hast du den Fahrplan."
CTA: DACH-appropriate ("Jetzt entdecken")
```

### FAQ (5 Fragen)
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-produktstrategie-v1_2-komplett.md` → G18 FAQ-Section
- `/project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md` → Kaufhemmnisse

---

## FÜR BLOG-ARTIKEL

**WICHTIG: Nutze Master-Prompt v3.13 für Blogs (NICHT Modul-Workflow!)**

### Workflow
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-master-prompt-v3_13-komplett.md` → 7-Phasen-Prozess
  - Phase 1: Outline (Struktur, Key Takeaways, Kreative Elemente)
  - Phase 2: Diana wählt (Headline, Einstieg)
  - Phase 3: Recherche (Fakten-Verifizierung)
  - Phase 4: Draft
  - Phase 5: Review (Diana-Voice-Check)
  - Phase 6: Feinschliff (Inline-Zitate)
  - Phase 7: Finalisierung (5 Key Takeaways, Lead Magnet Box, Signature Phrase)

### Tonalität & Voice
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md`
  - Section 1: Tonalität ("durfte lernen", "behaupten")
  - Section 8: Anti-Repetition

### Was darf im Blog (vs. Guide)
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-g18-content-ableitungsmatrix-v1.md` → Blog-Ebene-Check

**Struktur:**
```markdown
# [H1 - Headline]

[Intro 2-3 Absätze]

## [H2 - Hauptteil 1]

💡 **[Key Takeaway 1]**

## [H2 - Hauptteil 2]

💡 **[Key Takeaway 2]**

[Nach 60-70%:]
<LeadMagnetBox 
  title="[Titel]"
  description="[Beschreibung]"
  cta="[CTA-Text]"
/>

## [H2 - Fazit]

💡 **[Final Key Takeaway]**

Vertraue deiner Perspektive. – Deine Diana

---
**Quellen:**
1. [Quelle 1]
2. [Quelle 2]
```

---

## FÜR LEADMAGNET (Frühlings-Fahrplan)

**Benötigte Dokumente:**
- `/project-docs/pferdesicht-leadmagnet-workflow-v1_1.md` → 5-Phasen-Prozess
- `/project-docs/pferdesicht-leadmagnet-masterprompt-v1_0.md` → Detaillierte Struktur
- `/project-docs/pferdesicht-g18-content-ableitungsmatrix-v1.md` → Was darf im Leadmagnet
- `/project-docs/g18-modul[1-5]-*.md` → Quick Wins extrahieren

**Struktur:**
- 10-12 Seiten
- 4-Wochen-Übersicht als Kernstück
- Checklisten (abhakbar)
- CTAs zu G18 (sanft, nicht pushy)

---

## WICHTIGE REGELN

### 1. Blog ≠ Guide ≠ Leadmagnet
- **Blog:** Master-Prompt v3.13 (Key Takeaways, Lead Magnet Box, 1.500-2.500 Wörter)
- **Guide:** Modul-Workflow v1.2 (university-level, KEINE Key Takeaways, 6.000-8.000 Wörter)
- **Leadmagnet:** Leadmagnet-Workflow v1.1 (Quick Wins, 10-15 Seiten)

### 2. Diana-Voice IMMER checken
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md`
  - ✓ "Durfte lernen" (nicht "musste")
  - ✓ "Behaupten" (nicht "durchsetzen")
  - ✓ Signature Phrase am Ende
  - ✗ Keine verbotenen Phrasen

### 3. Kosten-Kommunikation: Fakten, nicht Angst
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-diana-bibel-v3_0-komplett.md` → Section "Kosten-Tonalität"
- Fakten-basiert: "Eine Kolik-OP kostet 5.000-15.000€"
- NICHT: "Wenn du nicht X machst, stirbt dein Pferd"

### 4. Anna's 3 Schichten IMMER ansprechen
**Benötigte Dokumente:**
- `/project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md` → Section 2.1
- Schicht 1 (Explizit): "Will es richtig machen"
- Schicht 2 (Implizit): "Wird nicht ernst genommen"
- Schicht 3 (Unbewusst): "Sucht Erlaubnis hinzuschauen"

---

## CHECKLISTE VOR JEDER CONTENT-ERSTELLUNG

```
□ Relevante Docs aus PROJECT_GUIDE identifiziert
□ Docs gelesen (nicht nur überflogen)
□ Spezifische Sections extrahiert
□ Diana-Voice gecheckt (Diana-Bibel Section 1)
□ Kosten-Tonalität korrekt (Diana-Bibel Kosten-Section)
□ Anna's Schichten angesprochen (Anna-Framework)
□ Anti-Repetition gecheckt (Diana-Bibel Section 8)
□ Richtiger Workflow für Content-Typ (Blog vs. Guide vs. Leadmagnet)
```

---

## TROUBLESHOOTING

### Problem: "Ich weiß nicht welches Doc für Feature X"
→ Schau in diesem Guide nach oder frage Stefan

### Problem: "Doc ist zu groß"
→ Nutze spezifische Section-Verweise (z.B. "Diana-Bibel Section 1.2")

### Problem: "Content klingt nicht wie Diana"
→ Checke Diana-Bibel Section 1 (Tonalität) und Section 8 (Anti-Repetition)

### Problem: "Unsicher ob Blog oder Guide"
→ Blog = 1.500-2.500 Wörter, Key Takeaways, Lead Magnet Box
→ Guide = 6.000-8.000 Wörter, university-level, KEINE Key Takeaways

---

**Dieses Dokument wächst mit dem Projekt. Bei neuen Features: Hier ergänzen.**
