# PFERDESICHT – Projektdokumentation für Claude Code

> **WICHTIG:** Dies ist eine KURZE Übersicht. Für Details lies die referenzierten Dokumente in `/project-docs/`.

---

## Projekt

**Name:** Pferdesicht  
**URL:** pferdesicht.com  
**Sprache:** Deutsch (DACH: Deutschland, Österreich, Schweiz)  
**Tech-Stack:** Next.js, Tailwind CSS, Vercel  
**Inhaber:** Diana + Stefan (Technik)

---

## Mission: "Wissen als Rüstung"

> *"Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte."*

Pferdesicht befähigt Pferdebesitzer, fundierte Entscheidungen zu treffen – statt auf Tradition, Stallgerede oder Gruppendruck zu vertrauen.

**Kernaussage:** Pferdebesitzer, die "zu viele Fragen" stellen, sind nicht das Problem – sie sind die Lösung.

**Tagline:** *Vertraue deiner Perspektive.*

---

## Diana – Die Stimme

**Hintergrund:**
- 30+ Jahre Pferdeerfahrung
- 20 Jahre Offenstallmanagement  
- 16 Jahre Reittherapeutin
- 15 Jahre bei Hempura (Hanfprodukte für Pferde)

**Tonalität:**
- Küchentisch-Gespräch, keine Akademiker-Sprache
- Warmherzig aber direkt
- "Ich zeige dir, was ich gelernt habe" (nicht: "Du musst...")
- Prozess-orientiert, nicht absolutistisch

**DO:**
- "In meiner Erfahrung..."
- "Viele Pferdebesitzer fragen sich..."
- "Das hat mich selbst überrascht..."

**DON'T:**
- Belehrend oder oberlehrerhaft
- Aggressive Dringlichkeit ("JETZT handeln!")
- Absolutistische Aussagen ohne Kontext

→ **Details:** `@project-docs/pferdesicht-diana-bibel-v3_0-komplett.md`

---

## Anna – Die Zielgruppe

**Wer ist Anna:**
- Verantwortungsvolle Pferdebesitzerin, 25-55 Jahre
- Stellt "zu viele" Fragen, wird dafür belächelt
- Überinformiert aber nicht wissend (Google-Chaos)
- Sucht: Orientierung, Bestätigung, klare Antworten

**Anna's 3 Schichten:**
1. **Oberfläche:** "Ich will wissen, wie ich X richtig mache"
2. **Darunter:** "Ich will sicher sein, dass es meinem Pferd gut geht"
3. **Kern:** "Ich will mich nicht schuldig fühlen müssen"

**Anna's Urängste:**
- Etwas zu übersehen, das dem Pferd schadet
- Vor anderen als "hysterisch" oder "überbesorgt" dazustehen
- Eine falsche Entscheidung zu treffen, die irreversibel ist

**Quiet Luxury (was Anna wirklich kauft):**
Der tiefe Frieden zu wissen, dass man alles richtig macht – ohne ständig zweifeln zu müssen.

→ **Details:** `@project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md`

---

## Design-System: "Organic Luxury"

**Farben:**
- Loam (Haupttext): `#2c2a25`
- Sage (Akzent): `#78866b`
- Gold (Highlights): `#c8a476`
- Background Light: `#f3f0eb`
- Paper: `#faf9f7`

**Typografie:**
- Headlines: EB Garamond (Serif)
- Body: Poppins (Sans-Serif)

**Stil:** Warm, authentisch, editorial – keine kalte Perfektion

---

## Dokument-Struktur

```
/project-docs/
├── CORE (Immer relevant)
│   ├── pferdesicht-diana-bibel-v3_0-komplett.md      # Brand Voice, Positionen
│   ├── pferdesicht-anna-empowerment-framework-v2_6-komplett.md  # Zielgruppe
│   └── pferdesicht-golden-circle-v2_2.md             # WHY/HOW/WHAT
│
├── WORKFLOWS (Je nach Task)
│   ├── pferdesicht-master-prompt-v3_13-komplett.md   # Blog-Artikel (7 Phasen)
│   ├── pferdesicht-modul-erstellungs-workflow-v1_2.md # Guide-Module
│   ├── pferdesicht-leadmagnet-workflow-v1_1.md       # 10-Seiten-PDFs
│   └── pferdesicht-leadmagnet-masterprompt-v1_0.md   # Leadmagnet Details
│
├── PRODUCTS (Fertige Inhalte)
│   ├── g18-modul1-fellwechsel-v13-final.md
│   ├── g18-modul2-fruktan-anweiden-v12-final.md
│   ├── g18-modul3-parasiten-entwurmung-v2_0-final.md
│   ├── g18-modul4-fuetterung-fruehling-v6-final.md
│   ├── g18-modul5-integration-fahrplan-v2_0-final.md
│   └── g18-einleitung-v2_0-draft.md                  # Sales-Copy
│
├── MARKETING
│   ├── pferdesicht-sales-copy-frameworks.md          # DACH-optimierte Formeln
│   ├── pferdesicht-g18-content-ableitungsmatrix-v1.md # Content-Planung
│   └── pferdesicht-slide-bibliothek-v3.md            # Canva-Templates
│
└── STRATEGY
    ├── pferdesicht-produktstrategie-v1_2-komplett.md # Gesamtarchitektur
    ├── pferdesicht-12-cluster-analyse-v1_1.md        # Themen-Strategie
    └── pferdesicht-ueber-mich-v4_2.md                # About-Page Content
```

---

## Task → Dokument Mapping

| Wenn du... | Lies zuerst... |
|------------|----------------|
| **Website-Text schreibst** | `@project-docs/pferdesicht-diana-bibel-v3_0-komplett.md` |
| **Homepage baust** | `@project-docs/pferdesicht-golden-circle-v2_2.md` + `@project-docs/pferdesicht-ueber-mich-v4_2.md` |
| **Blog-Artikel schreibst** | `@project-docs/pferdesicht-master-prompt-v3_13-komplett.md` |
| **Kurs-Modul erstellst** | `@project-docs/pferdesicht-modul-erstellungs-workflow-v1_2.md` |
| **Leadmagnet baust** | `@project-docs/pferdesicht-leadmagnet-workflow-v1_1.md` |
| **Sales-Copy schreibst** | `@project-docs/pferdesicht-sales-copy-frameworks.md` |
| **G18 Sales-Page baust** | `@project-docs/g18-einleitung-v2_0-draft.md` (EXAKT übernehmen!) |
| **Zielgruppe verstehen willst** | `@project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md` |

---

## Wichtige Regeln

1. **Niemals Content umschreiben** der bereits in `/project-docs/` finalisiert ist – nur formatieren/implementieren

2. **Diana's Stimme prüfen** bei allem Text-Output gegen `@project-docs/pferdesicht-diana-bibel-v3_0-komplett.md`

3. **Umlaute:** In finalen Outputs immer korrekte Umlaute (ä, ö, ü, ß)

4. **Box UND Offenstall:** Beide Haltungsformen gleichwertig ansprechen

5. **Keine Absolutismen:** "In vielen Fällen..." statt "Immer..."

6. **DACH-Tonalität:** Kompetenz-basiert, keine US-Style Dringlichkeit

7. **NIEMALS eigenständig Texte ändern** – nur wenn explizit beauftragt

---

## Glossar

| Begriff | Bedeutung |
|---------|-----------|
| **Anna** | Zielgruppen-Persona (nicht echter Name) |
| **G18** | Frühlings-Gesundheitsguide (Premium-Produkt, €47) |
| **12 Cluster** | Thematische Kategorien für alle Inhalte |
| **Quiet Luxury** | Das Gefühl, alles richtig zu machen |
| **Gaslighting-Sätze** | Typische Abwertungen im Stall ("Du denkst zu viel") |
| **Offenstall** | Pferdehaltung mit freiem Auslauf (Diana's Expertise) |

---

## Beispiel-Prompts für Claude Code

### Blog-Artikel erstellen:
```
Lies @project-docs/pferdesicht-master-prompt-v3_13-komplett.md und folge dem 7-Phasen-Prozess.

Erstelle einen Blog-Artikel:
- Thema: "Fellwechsel im Frühjahr – Was dein Pferd jetzt braucht"
- Länge: 1.800-2.200 Wörter
- Zielgruppe: Anna (siehe @project-docs/pferdesicht-anna-empowerment-framework-v2_6-komplett.md)
- Tonalität: Diana's Stimme (siehe @project-docs/pferdesicht-diana-bibel-v3_0-komplett.md)

Prüfe vor Abgabe:
- [ ] Key Takeaways (5 Stück) am Ende
- [ ] Mindestens 3 kreative Elemente (Vergleiche, Aha-Momente)
- [ ] Keine absolutistischen Aussagen
- [ ] Diana's Tonalität durchgehend
```

### Website-Sektion erstellen:
```
Erstelle die Hero-Section für die Homepage.

Lies zuerst:
- @project-docs/pferdesicht-golden-circle-v2_2.md (WHY-Section für Headline)
- @project-docs/pferdesicht-diana-bibel-v3_0-komplett.md (Signature Phrases)
- @project-docs/pferdesicht-sales-copy-frameworks.md (Headline-Formeln)

WICHTIG: Nutze den EXAKTEN Content aus den Docs, erfinde nichts neu.
```

### Text korrigieren (NICHT umschreiben):
```
Korrigiere NUR die Umlaute und Tippfehler in dieser Datei.
Ändere KEINE Formulierungen, KEINEN Satzbau, KEINE Wortwahl.
```

---

## ⚠️ KRITISCHE WARNUNG

**Claude Code darf NIEMALS:**
- Texte "verbessern" ohne expliziten Auftrag
- Formulierungen eigenständig ändern
- "Generische" Texte schreiben wenn Projekt-Docs existieren
- Sales-Copy abschwächen oder neutralisieren

**Bei Unsicherheit:** IMMER fragen, NICHT eigenständig handeln.

---

*CLAUDE.md v2.0 – Optimiert für Claude Code mit korrekten Pfaden*  
*Erstellt: 27.01.2026*
