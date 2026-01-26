# PFERDESICHT: Modul-Erstellungs-Workflow
## Reverse-Engineered aus Fruktan-Guide v8.1 & Fellwechsel-Modul v10 Entwicklung

**Version:** 1.2
**Erstellt:** 09.01.2026
**Aktualisiert:** 13.01.2026
**Basierend auf:** 20+ Entwicklungs-Sessions, ~60 wissenschaftliche Quellen
**Anwendung:** Erstellung wissenschaftlich fundierter, Anna-optimierter Kurs-Module

---

# âš ï¸ WICHTIG: KURS-MODULE â‰  BLOGBEITRÃ„GE (NEU in v1.2)

Dieser Workflow gilt fÃ¼r **Kurs-Module** (G18 FrÃ¼hlings-Guide, Premium-Kurse etc.).

## Welches Dokument wann?

| Dokument | Wann verwenden |
|----------|----------------|
| **Dieser Workflow (v1.2)** | FÃ¼r Kurs-Module |
| **Master-Prompt v3.13** | FÃ¼r BlogbeitrÃ¤ge |
| **Diana-Bibel v3.0** | FÃ¼r beides (Positionen, Fakten, TonalitÃ¤t) |

## Was Kurs-Module NICHT haben

| âŒ NICHT in Kurs-Modulen | GehÃ¶rt zu... |
|--------------------------|--------------|
| Key Takeaways | BlogbeitrÃ¤ge |
| Lead Magnet Boxes | BlogbeitrÃ¤ge |
| Headline-Typen (Kontrast, Fakt-Hook etc.) | BlogbeitrÃ¤ge |
| Beitrags-Kopf mit "von Diana â€¢ X min" | BlogbeitrÃ¤ge |
| "In diesem Artikel:" Listen | BlogbeitrÃ¤ge |
| Kategorie-Tags | BlogbeitrÃ¤ge |
| "FÃ¼r Box und Offenstall." in Subheadline | BlogbeitrÃ¤ge |

## Was Kurs-Module HABEN

```
# TITEL â€” Untertitel
## VerstÃ¤ndlich erklÃ¤rt, praktisch anwendbar

**Version:** X.X
**Stand:** [Datum]
**Modul:** X von Y (Guide-Name)

---

## PersÃ¶nlicher Einstieg (Diana's Geschichte)
## Wichtiger Hinweis vorab (Disclaimer)
## Kurze Einordnung (Abgrenzung)

# TEIL 1: [THEMA]
# TEIL 2: [THEMA]
# TEIL 3: [THEMA]
...

# CHECKLISTE
# ZUSAMMENFASSUNG
# QUELLENVERZEICHNIS
# Ã„NDERUNGSLOG
```

## Referenz-Module

Bei Unsicherheit Ã¼ber Format/Struktur â†’ Diese Module laden und als Vorlage nutzen:

- `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md` (Modul 1)
- `g18-modul2-fellwechsel-v11-final.md` (Modul 2)

---

# ÃœBERSICHT: DER 7-PHASEN-WORKFLOW

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 1: BRIEFING & SCOPE                                      â”‚
â”‚  â†’ Was genau soll das Modul abdecken?                           â”‚
â”‚  â†’ Was weiÃŸ Anna bereits? Was glaubt sie zu wissen?             â”‚
â”‚  â†’ Welche Mythen/Fehlinformationen existieren?                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 2: STRUKTUR-ENTWURF                                      â”‚
â”‚  â†’ Grobe Gliederung (Teile/Abschnitte)                          â”‚
â”‚  â†’ Diana-Review: Passt das zu ihrer Erfahrung?                  â”‚
â”‚  â†’ Anpassung basierend auf Feedback                             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 3: WISSENSCHAFTLICHE TIEFENRECHERCHE                     â”‚
â”‚  â†’ PrimÃ¤rquellen suchen (UniversitÃ¤ten, Peer-reviewed)          â”‚
â”‚  â†’ PopulÃ¤rquellen verifizieren                                  â”‚
â”‚  â†’ WidersprÃ¼che identifizieren und klÃ¤ren                       â”‚
â”‚  â†’ Quellenverzeichnis aufbauen                                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 4: ERSTER ENTWURF                                        â”‚
â”‚  â†’ Inhalte schreiben (Anna-Sprache, nicht wissenschaftlich)     â”‚
â”‚  â†’ Praktische Tools einbauen (Ampeln, Checklisten, Tabellen)    â”‚
â”‚  â†’ Diana's Geschichte/Erfahrung integrieren                     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 5: VERIFIKATIONS-SCHLEIFEN                               â”‚
â”‚  â†’ Diana prÃ¼ft: Stimmt das mit meiner Erfahrung?                â”‚
â”‚  â†’ Kritische Zahlen/Aussagen gegen Quellen checken              â”‚
â”‚  â†’ LÃ¼cken identifizieren und nachrecherchieren                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 6: FEINSCHLIFF & QUELLENVERWEISE                         â”‚
â”‚  â†’ Inline-Zitate einfÃ¼gen [Autor, Jahr] [Nummer]                â”‚
â”‚  â†’ Quellenverzeichnis vervollstÃ¤ndigen                          â”‚
â”‚  â†’ DACH-Anpassungen prÃ¼fen                                      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                              â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  PHASE 7: FINALISIERUNG & INTEGRATION                           â”‚
â”‚  â†’ Version in Projektordner Ã¼bernehmen                          â”‚
â”‚  â†’ Diana-Bibel Update                                           â”‚
â”‚  â†’ Workflow-Learnings dokumentieren                             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

# KRITISCHE ARBEITSREGELN (NEU in v1.1)

## Die goldene Regel: Ã„nderungsdisziplin

**NUR explizit beauftragte Ã„nderungen durchfÃ¼hren.**

| Situation | Richtig | Falsch |
|-----------|---------|--------|
| Diana sagt "Korrigiere das Zitat in Teil 1" | Nur das Zitat in Teil 1 Ã¤ndern | Auch andere Abschnitte "verbessern" |
| Diana sagt "Erstelle das Dokument neu" | Alle unverÃ¤nderten Abschnitte 1:1 Ã¼bernehmen | Abschnitte neu formulieren |
| Ich sehe einen Fehler, den Diana nicht erwÃ¤hnt hat | Nachfragen: "Soll ich auch X Ã¤ndern?" | EigenmÃ¤chtig korrigieren |

**BegrÃ¼ndung:** Jede eigenmÃ¤chtige Ã„nderung gefÃ¤hrdet Diana's etablierte Stimme und macht Mehrarbeit. Das Gegenteil von hilfreich.

## Bei Neuerstellung eines Dokuments

1. Aktuelle Version vollstÃ¤ndig laden
2. Explizit beauftragte Ã„nderungen identifizieren
3. NUR diese Stellen Ã¤ndern
4. Alle anderen Abschnitte 1:1 kopieren (nicht neu schreiben!)
5. Am Ende auflisten: "GeÃ¤ndert wurde: X, Y, Z â€” sonst nichts"

## Im Zweifel: Nachfragen

- "Soll ich nur X Ã¤ndern, oder auch Y anpassen?"
- "Ich habe auch in Abschnitt Z etwas bemerkt â€” soll ich das ebenfalls korrigieren?"

---

# PHASE 1: BRIEFING & SCOPE

## 1.1 Startfragen fÃ¼r jedes neue Modul

Bevor wir beginnen, klÃ¤ren wir:

| Frage | Beispiel Fruktan | Beispiel Fellwechsel | FÃ¼r neues Modul |
|-------|------------------|----------------------|-----------------|
| **Thema in einem Satz** | "Fruktan entsteht, wenn Gras Zucker produziert, aber nicht wachsen kann" | "Der Fellwechsel wird primÃ¤r durch Licht gesteuert, Temperatur moduliert" | [Diana definiert] |
| **Anna's Kernfrage** | "Wann ist die Weide gefÃ¤hrlich fÃ¼r mein Pferd?" | "Ist der Fellwechsel meines Pferdes normal?" | [Diana definiert] |
| **Anna's Fehlannahme** | "Kurzes Gras = sicheres Gras" | "Mein Pferd haart spÃ¤ter = da stimmt was nicht" | [Diana definiert] |
| **Kosten bei Unwissen** | â‚¬500-15.000 (Hufrehe) | UnnÃ¶tige Tierarztkosten, Cushing-Panik | [Recherche] |
| **Diana's persÃ¶nliche Geschichte** | Ramses' Hufrehe | Friese im Offenstall vs. Boxen-WarmblÃ¼ter | [Diana liefert] |
| **Abgrenzung** | Nur fÃ¼tterungsbedingte Hufrehe, nicht Belastungsrehe | FrÃ¼hjahrs-Fellwechsel, nicht Herbst | [Diana definiert] |

## 1.2 Projekt-Dateien laden

Zu Beginn jeder Session:
1. Relevante Projekt-Dateien identifizieren
2. **Diesen Workflow laden** (nicht Master-Prompt fÃ¼r Module!)
3. Diana-Bibel fÃ¼r Positionen und TonalitÃ¤t konsultieren
4. Fertige Module als Referenz fÃ¼r Format laden
5. 12-Cluster-Analyse fÃ¼r Kontext laden (wenn relevant)

## 1.3 Scope-Dokument erstellen

**Output Phase 1:** Kurzes Briefing-Dokument mit:
- Modulname und Arbeitstitel
- 3-5 Kernfragen, die beantwortet werden
- Klare Abgrenzung (was gehÃ¶rt NICHT rein)
- Verbindung zu anderen Modulen
- Diana's Input zu persÃ¶nlicher Erfahrung

---

# PHASE 2: STRUKTUR-ENTWURF

## 2.1 Gliederung nach bewÃ¤hrtem Muster

Beide Module (Fruktan & Fellwechsel) haben sich in dieser Grundstruktur bewÃ¤hrt:

```
1. DIANA'S STORY (Warum dieses Thema)
2. DISCLAIMER (Was ich bin / nicht bin)
3. EINORDNUNG (Kontext, Abgrenzung)
4. DAS PRINZIP IN EINEM SATZ (Kernaussage)
5. WANN/WO/WIE (Praktische Anwendung)
6. DIE RISIKO-FAKTOREN (Was macht es schlimmer/anders)
7. DIE AMPEL/ENTSCHEIDUNGSHILFE (Visuelles Tool)
8. RISIKOGRUPPEN (Wer muss besonders aufpassen)
9. PRAKTISCHES PROTOKOLL (Schritt-fÃ¼r-Schritt)
10. KOMMUNIKATION (GesprÃ¤ch mit Stallbetreiber/TA)
11. CHECKLISTE (Zum Abhaken)
12. ZUSAMMENFASSUNG (Die wichtigsten Punkte)
13. QUELLENVERZEICHNIS
```

**Hinweis:** Nicht jedes Modul braucht alle Elemente. Fellwechsel hatte z.B. keine Ampel, dafÃ¼r mehr ErklÃ¤rung zum Mechanismus.

## 2.2 Kurs-Modul Dokument-Kopf (Standard)

```markdown
# [TITEL] â€” [Untertitel]
## VerstÃ¤ndlich erklÃ¤rt, praktisch anwendbar

**Version:** [X.X]  
**Stand:** [TT.MM.JJJJ]  
**Modul:** [X] von [Y] (G18 FrÃ¼hlings-Gesundheitsguide)

---
```

## 2.3 Diana-Review der Struktur

**Fragen an Diana:**
- Fehlt etwas Wichtiges aus deiner Erfahrung?
- Ist die Reihenfolge logisch fÃ¼r Anna?
- Wo sind die grÃ¶ÃŸten Unsicherheiten/Mythen?
- Welche praktischen Tools braucht Anna am meisten?

## 2.4 Anpassung und Freigabe

**Output Phase 2:** Freigegebene Gliederung mit:
- Alle Abschnitte benannt
- UngefÃ¤hrer Umfang pro Abschnitt
- Offene Recherchefragen markiert

---

# PHASE 3: WISSENSCHAFTLICHE TIEFENRECHERCHE

## 3.1 Quellen-Hierarchie (WICHTIG!)

Beim Fruktan-Guide haben wir gelernt: **PopulÃ¤rquellen oft falsch oder vereinfacht.**

| PrioritÃ¤t | Quellentyp | Beispiele | Vertrauen |
|-----------|------------|-----------|-----------|
| 1 | Peer-reviewed Journals | Journal of Animal Science, Equine Veterinary Journal, PLOS One | âœ…âœ…âœ… |
| 2 | UniversitÃ¤ts-Extension | Penn State, Minnesota, Cornell, MSU | âœ…âœ…âœ… |
| 3 | VeterinÃ¤r-FakultÃ¤ten | TierÃ¤rztliche Hochschule Hannover | âœ…âœ… |
| 4 | Fach-Organisationen | AAEP, ECEIM, BEVA, ECIR Group | âœ…âœ… |
| 5 | Pferdezeitschriften | EQUUS, Pferderevue | âœ… (verifizieren!) |
| 6 | Hersteller/Shops | Masterhorse, etc. | âŒ (nicht verwenden) |

## 3.2 Recherche-Protokoll

FÃ¼r jede kritische Aussage:

1. **PopulÃ¤rquelle finden** (Was sagen die gÃ¤ngigen Quellen?)
2. **PrimÃ¤rquelle suchen** (Woher kommt diese Information ursprÃ¼nglich?)
3. **Originalstudie LESEN** (Nicht nur Abstract â€” ganze Studie!)
4. **Verifizieren** (Stimmt die Interpretation?)
5. **WidersprÃ¼che prÃ¼fen** (Gibt es andere Meinungen?)
6. **DACH-Relevanz** (Gilt das fÃ¼r deutsche VerhÃ¤ltnisse?)

## 3.3 Recherche-Dokumentation

FÃ¼r jede Quelle erfassen:
```
**[Kurztitel]**
VollstÃ¤ndige Zitation
URL (wenn verfÃ¼gbar)
Kernaussage fÃ¼r unser Modul
VertrauenswÃ¼rdigkeit: âœ…âœ…âœ… / âœ…âœ… / âœ…
```

## 3.4 Kritische PrÃ¼fung (erweitert in v1.1)

**ACHTUNG:** Bei beiden Modulen mussten wir mehrfach korrigieren:

**Fruktan-Guide:**
- Nachttemperatur-Logik wurde hinterfragt â†’ Komplette Neurecherche
- Pauschale Zeitangaben zu ungenau â†’ DACH-spezifische Anpassung
- PopulÃ¤re "Faustregeln" wissenschaftlich nicht haltbar

**Fellwechsel-Modul:**
- Bocian-Studie falsch interpretiert â†’ "KÃ¤lte = frÃ¼heres Abhaaren" war biologisch unsinnig
- Diana's Beobachtung ("kalter MÃ¤rz = spÃ¤terer Fellwechsel") war RICHTIG
- O'Brien-Studie bestÃ¤tigte Diana's Erfahrung

**Regel:** Wenn Diana etwas hinterfragt, IMMER neu recherchieren! Ihre 30 Jahre Erfahrung sind oft zuverlÃ¤ssiger als eine schnelle Google-Suche.

## 3.5 Ãœbersetzungs-Fallstricke (NEU in v1.1)

**Vorsicht bei englischen Fachbegriffen:**
- "shedding" = Abhaaren/Fellwechsel (NICHT "Fettabbau")
- Automatische Ãœbersetzer machen Fehler
- Im Zweifel: Original-Kontext prÃ¼fen

**Output Phase 3:** VollstÃ¤ndiges Quellenverzeichnis mit:
- Alle Quellen kategorisiert
- Kritische Aussagen mit PrimÃ¤rquellen belegt
- Offene Fragen / WidersprÃ¼che dokumentiert

---

# PHASE 4: ERSTER ENTWURF

## 4.1 Schreibstil fÃ¼r Kurs-Module

**Ton:** Wie eine Freundin am KÃ¼chentisch erklÃ¤rt â€” kompetent, aber nicht akademisch.

**Struktur:** FlieÃŸtext mit klaren Ãœberschriften. Tabellen fÃ¼r Ãœbersichten. Keine Bullet-Listen als Hauptstruktur.

**Beispiel aus Modul 1:**
> "Das war's. Diesen einen Satz musst du dir merken â€” alles andere ergibt sich daraus."

## 4.2 Praktische Tools einbauen

- **Tabellen:** FÃ¼r Vergleiche, Ãœbersichten, Dosierungen
- **Checklisten:** Zum Abhaken, am Ende des Moduls
- **Ampeln:** Nur wenn sinnvoll (Fellwechsel hatte keine)

## 4.3 Diana's Geschichte integrieren

Jedes Modul braucht:
1. **Einstieg mit persÃ¶nlicher Geschichte** (Warum dieses Thema)
2. **Eingestreute Erfahrungen** (AuthentizitÃ¤t)
3. **Fazit mit Ermutigung** (Du schaffst das)

**Output Phase 4:** Erster kompletter Entwurf mit:
- Alle Abschnitte geschrieben
- Tools/Tabellen eingefÃ¼gt
- Platzhalter fÃ¼r fehlende Recherche markiert

---

# PHASE 5: VERIFIKATIONS-SCHLEIFEN

## 5.1 Diana-Review

Diana prÃ¼ft:
- [ ] Stimmt das mit meiner 30-jÃ¤hrigen Erfahrung?
- [ ] WÃ¼rde ich das so einer Freundin erklÃ¤ren?
- [ ] Fehlt etwas Praktisches?
- [ ] Ist etwas zu kompliziert fÃ¼r Anna?

## 5.2 Fakten-Check

FÃ¼r jede kritische Aussage:
- [ ] Quelle verifiziert?
- [ ] Originalstudie gelesen (nicht nur Abstract)?
- [ ] Zahlen/Prozente korrekt?
- [ ] DACH-relevant?
- [ ] Keine Halluzination?

## 5.3 Korrektur-Schleifen (erweitert in v1.1)

**Aus beiden Modulen gelernt:**
- Erst recherchieren, DANN schreiben (nicht umgekehrt)
- Bei Zweifeln: Lieber einmal mehr prÃ¼fen
- Diana's Hinterfragen ist GOLD wert â†’ immer ernst nehmen
- **NUR beauftragte Ã„nderungen durchfÃ¼hren** â€” keine eigenmÃ¤chtigen "Verbesserungen"
- Bei Neuerstellung: UnverÃ¤nderte Abschnitte 1:1 Ã¼bernehmen

**Output Phase 5:** Verifizierter Entwurf mit:
- Diana's Freigabe
- Alle kritischen Aussagen quellenbelegt
- Korrekturen dokumentiert

---

# PHASE 6: FEINSCHLIFF & QUELLENVERWEISE

## 6.1 Inline-Zitier-Format

Standard etabliert:
```
"Die British Horse Society empfiehlt 0,4â€“0,6 ha pro Pferd (BHS, 2024) [1]."

**Quellenverweise [Abschnittsname]:**
[1] British Horse Society (2024)
[2] University of Minnesota Extension â€” Martinson & Peterson (2024)
...
```

## 6.2 Quellenverzeichnis-Format

```
### [Kategorie]

**[Autor/Institution] ([Jahr])**
[Titel]
[Journal/Quelle]
[URL]
```

## 6.3 DACH-Anpassungen

PrÃ¼fen:
- [ ] Temperaturen in Â°C
- [ ] FlÃ¤chen in Hektar
- [ ] Deutsche Rechtschreibung
- [ ] DACH-spezifische Bedingungen berÃ¼cksichtigt
- [ ] Keine US-only Empfehlungen

## 6.4 Finale QualitÃ¤tsprÃ¼fung

- [ ] Umlaute korrekt (UTF-8)
- [ ] Tabellen richtig formatiert (Markdown)
- [ ] Alle Links funktionieren
- [ ] Versionsnummer aktuell
- [ ] Datum aktuell

**Output Phase 6:** Finales Dokument mit:
- VollstÃ¤ndige Inline-Zitate
- Komplettes Quellenverzeichnis
- DACH-optimiert

---

# PHASE 7: FINALISIERUNG & INTEGRATION

## 7.1 Version in Projektordner

- Finale Version als Projektdatei speichern
- Dateiname: `pferdesicht-g18-[modulname]-v[X]-final.md`
- In Projekt-Files hochladen

## 7.2 Diana-Bibel Update (NEU in v1.1)

Nach jedem Modul tracken:
- Verwendete Metaphern
- Verwendete persÃ¶nliche Stories
- Verwendete Fakten
- Neue Brand-Positionen

## 7.3 Erkenntnisse auf andere Module anwenden

**Fragen nach jedem Modul:**
- Haben wir etwas Neues gelernt, das auch fÃ¼r andere Module gilt?
- Gibt es Workflow-Verbesserungen?
- Neue Best Practices fÃ¼r Quellenarbeit?

## 7.4 Ableitungen planen

Aus dem ausfÃ¼hrlichen PDF kÃ¶nnen abgeleitet werden:
- **Videokurs:** Angewandtes Wissen (Kernpunkte)
- **Kurzfassung:** 2-3 Seiten mit Checklisten
- **Webapp:** Interaktive Entscheidungshilfe
- **Social Media:** Kernaussagen als Posts

**Output Phase 7:** 
- Finales Modul im Projektordner
- Diana-Bibel aktualisiert
- Dokumentierte Erkenntnisse
- Plan fÃ¼r Ableitungen

---

# ABGESCHLOSSENE MODULE

## Modul 1: Fruktan & Anweiden âœ…
- Datei: `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md`
- Status: Final
- Umfang: ~8.000 WÃ¶rter

## Modul 2: Fellwechsel im FrÃ¼hjahr âœ…
- Datei: `g18-modul2-fellwechsel-v11-final.md`
- Status: Final
- Umfang: ~5.400 WÃ¶rter

---

# ANWENDUNG: NÃ„CHSTES MODUL

## Startpunkt fÃ¼r neuen Chat

Kopiere diesen Block in einen neuen Chat:

---

**BRIEFING: G18 MODUL [X] â€” [THEMA]**

**Kontext:**
- Wir arbeiten am G18 FrÃ¼hlings-Guide Premium-Kurs
- Modul 1 (Fruktan & Anweiden) ist fertig: `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md`
- Modul 2 (Fellwechsel) ist fertig: `g18-modul2-fellwechsel-v11-final.md`
- Workflow-Dokument: `pferdesicht-modul-erstellungs-workflow-v1_2.md`

**Modul [X] Scope:**
- Thema: [THEMA]
- Kernpunkte laut Planung:
  â€¢ [Punkt 1]
  â€¢ [Punkt 2]
  â€¢ [Punkt 3]

**Erste Aufgabe:**
Lies bitte die Projekt-Dateien:
1. **Diesen Workflow** (v1.2) â€” fÃ¼r Struktur und Format
2. Fertige Module als Referenz fÃ¼r Stil/Tiefe
3. Diana-Bibel fÃ¼r Positionen und TonalitÃ¤t

**WICHTIG:** FÃ¼r Kurs-Module den Workflow verwenden, NICHT den Master-Prompt (der ist fÃ¼r BlogbeitrÃ¤ge).

Dann starte mit **Phase 1: Briefing & Scope** â€” stelle mir die Startfragen.

---

# CHECKLISTE PRO MODUL

## Phase 1: Briefing â˜
- [ ] Thema in einem Satz definiert
- [ ] Anna's Kernfrage geklÃ¤rt
- [ ] Anna's Fehlannahme identifiziert
- [ ] Diana's persÃ¶nliche Geschichte vorhanden
- [ ] Abgrenzung definiert

## Phase 2: Struktur â˜
- [ ] Gliederung erstellt (nach Kurs-Modul-Muster, NICHT Blogbeitrag)
- [ ] Diana-Review durchgefÃ¼hrt
- [ ] Struktur freigegeben

## Phase 3: Recherche â˜
- [ ] PrimÃ¤rquellen gesucht
- [ ] Originalstudien gelesen (nicht nur Abstracts)
- [ ] PopulÃ¤rquellen verifiziert
- [ ] WidersprÃ¼che geklÃ¤rt
- [ ] Quellenverzeichnis angelegt

## Phase 4: Erster Entwurf â˜
- [ ] Alle Abschnitte geschrieben
- [ ] Tools/Tabellen eingefÃ¼gt
- [ ] Diana's Geschichte integriert

## Phase 5: Verifikation â˜
- [ ] Diana-Review durchgefÃ¼hrt
- [ ] Fakten gecheckt
- [ ] Korrekturen eingearbeitet
- [ ] NUR beauftragte Ã„nderungen durchgefÃ¼hrt

## Phase 6: Feinschliff â˜
- [ ] Inline-Zitate eingefÃ¼gt
- [ ] Quellenverzeichnis komplett
- [ ] DACH-Anpassungen geprÃ¼ft

## Phase 7: Finalisierung â˜
- [ ] In Projektordner Ã¼bernommen
- [ ] Diana-Bibel aktualisiert
- [ ] Erkenntnisse dokumentiert
- [ ] Ableitungen geplant

---

# Ã„NDERUNGSLOG

| Version | Datum | Ã„nderungen |
|---------|-------|------------|
| 1.0 | 09.01.2026 | Initiale Version basierend auf Fruktan-Guide Entwicklung |
| 1.1 | 13.01.2026 | Learnings aus Fellwechsel-Modul: Ã„nderungsdisziplin, Quellen-Verifikation, Ãœbersetzungs-Fallstricke, Diana-Bibel-Update |
| **1.2** | **13.01.2026** | **Klare Abgrenzung Kurs-Module vs. BlogbeitrÃ¤ge: Neuer Abschnitt am Anfang, was Module NICHT haben (Key Takeaways etc.), Dokument-Kopf-Standard, aktualisierte Dateinamen, Hinweise in Phase 1.2 und Startpunkt-Template** |

---

*Workflow-Dokument v1.2 â€” Mit klarer Abgrenzung Kurs vs. Blog*
*Basierend auf: Fruktan-Guide v8.2 + Fellwechsel-Modul v11*
