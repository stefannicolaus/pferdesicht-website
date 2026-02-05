# PFERDESICHT: Modul-Erstellungs-Workflow
## Reverse-Engineered aus Fruktan-Guide v8.1 & Fellwechsel-Modul v10 Entwicklung

**Version:** 1.2
**Erstellt:** 09.01.2026
**Aktualisiert:** 13.01.2026
**Basierend auf:** 20+ Entwicklungs-Sessions, ~60 wissenschaftliche Quellen
**Anwendung:** Erstellung wissenschaftlich fundierter, Anna-optimierter Kurs-Module

---

# ⚠ï¸ WICHTIG: KURS-MODULE ≠ BLOGBEITRÄGE (NEU in v1.2)

Dieser Workflow gilt für **Kurs-Module** (G18 Frühlings-Guide, Premium-Kurse etc.).

## Welches Dokument wann?

| Dokument | Wann verwenden |
|----------|----------------|
| **Dieser Workflow (v1.2)** | Für Kurs-Module |
| **Master-Prompt v3.13** | Für Blogbeiträge |
| **Diana-Bibel v3.0** | Für beides (Positionen, Fakten, Tonalität) |

## Was Kurs-Module NICHT haben

| âŒ NICHT in Kurs-Modulen | Gehört zu... |
|--------------------------|--------------|
| Key Takeaways | Blogbeiträge |
| Lead Magnet Boxes | Blogbeiträge |
| Headline-Typen (Kontrast, Fakt-Hook etc.) | Blogbeiträge |
| Beitrags-Kopf mit "von Diana • X min" | Blogbeiträge |
| "In diesem Artikel:" Listen | Blogbeiträge |
| Kategorie-Tags | Blogbeiträge |
| "Für Box und Offenstall." in Subheadline | Blogbeiträge |

## Was Kurs-Module HABEN

```
# TITEL — Untertitel
## Verständlich erklärt, praktisch anwendbar

**Version:** X.X
**Stand:** [Datum]
**Modul:** X von Y (Guide-Name)

---

## Persönlicher Einstieg (Diana's Geschichte)
## Wichtiger Hinweis vorab (Disclaimer)
## Kurze Einordnung (Abgrenzung)

# TEIL 1: [THEMA]
# TEIL 2: [THEMA]
# TEIL 3: [THEMA]
...

# CHECKLISTE
# ZUSAMMENFASSUNG
# QUELLENVERZEICHNIS
# ÄNDERUNGSLOG
```

## Referenz-Module

Bei Unsicherheit über Format/Struktur → Diese Module laden und als Vorlage nutzen:

- `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md` (Modul 1)
- `g18-modul2-fellwechsel-v11-final.md` (Modul 2)

---

# ÜBERSICHT: DER 7-PHASEN-WORKFLOW

```
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 1: BRIEFING & SCOPE                                      │
│  → Was genau soll das Modul abdecken?                           │
│  → Was weiß Anna bereits? Was glaubt sie zu wissen?             │
│  → Welche Mythen/Fehlinformationen existieren?                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 2: STRUKTUR-ENTWURF                                      │
│  → Grobe Gliederung (Teile/Abschnitte)                          │
│  → Diana-Review: Passt das zu ihrer Erfahrung?                  │
│  → Anpassung basierend auf Feedback                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 3: WISSENSCHAFTLICHE TIEFENRECHERCHE                     │
│  → Primärquellen suchen (Universitäten, Peer-reviewed)          │
│  → Populärquellen verifizieren                                  │
│  → Widersprüche identifizieren und klären                       │
│  → Quellenverzeichnis aufbauen                                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 4: ERSTER ENTWURF                                        │
│  → Inhalte schreiben (Anna-Sprache, nicht wissenschaftlich)     │
│  → Praktische Tools einbauen (Ampeln, Checklisten, Tabellen)    │
│  → Diana's Geschichte/Erfahrung integrieren                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 5: VERIFIKATIONS-SCHLEIFEN                               │
│  → Diana prüft: Stimmt das mit meiner Erfahrung?                │
│  → Kritische Zahlen/Aussagen gegen Quellen checken              │
│  → Lücken identifizieren und nachrecherchieren                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 6: FEINSCHLIFF & QUELLENVERWEISE                         │
│  → Inline-Zitate einfügen [Autor, Jahr] [Nummer]                │
│  → Quellenverzeichnis vervollständigen                          │
│  → DACH-Anpassungen prüfen                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────â”
│  PHASE 7: FINALISIERUNG & INTEGRATION                           │
│  → Version in Projektordner übernehmen                          │
│  → Diana-Bibel Update                                           │
│  → Workflow-Learnings dokumentieren                             │
└─────────────────────────────────────────────────────────────────┘
```

---

# KRITISCHE ARBEITSREGELN (NEU in v1.1)

## Die goldene Regel: Änderungsdisziplin

**NUR explizit beauftragte Änderungen durchführen.**

| Situation | Richtig | Falsch |
|-----------|---------|--------|
| Diana sagt "Korrigiere das Zitat in Teil 1" | Nur das Zitat in Teil 1 ändern | Auch andere Abschnitte "verbessern" |
| Diana sagt "Erstelle das Dokument neu" | Alle unveränderten Abschnitte 1:1 übernehmen | Abschnitte neu formulieren |
| Ich sehe einen Fehler, den Diana nicht erwähnt hat | Nachfragen: "Soll ich auch X ändern?" | Eigenmächtig korrigieren |

**Begründung:** Jede eigenmächtige Änderung gefährdet Diana's etablierte Stimme und macht Mehrarbeit. Das Gegenteil von hilfreich.

## Bei Neuerstellung eines Dokuments

1. Aktuelle Version vollständig laden
2. Explizit beauftragte Änderungen identifizieren
3. NUR diese Stellen ändern
4. Alle anderen Abschnitte 1:1 kopieren (nicht neu schreiben!)
5. Am Ende auflisten: "Geändert wurde: X, Y, Z — sonst nichts"

## Im Zweifel: Nachfragen

- "Soll ich nur X ändern, oder auch Y anpassen?"
- "Ich habe auch in Abschnitt Z etwas bemerkt — soll ich das ebenfalls korrigieren?"

---

# PHASE 1: BRIEFING & SCOPE

## 1.1 Startfragen für jedes neue Modul

Bevor wir beginnen, klären wir:

| Frage | Beispiel Fruktan | Beispiel Fellwechsel | Für neues Modul |
|-------|------------------|----------------------|-----------------|
| **Thema in einem Satz** | "Fruktan entsteht, wenn Gras Zucker produziert, aber nicht wachsen kann" | "Der Fellwechsel wird primär durch Licht gesteuert, Temperatur moduliert" | [Diana definiert] |
| **Anna's Kernfrage** | "Wann ist die Weide gefährlich für mein Pferd?" | "Ist der Fellwechsel meines Pferdes normal?" | [Diana definiert] |
| **Anna's Fehlannahme** | "Kurzes Gras = sicheres Gras" | "Mein Pferd haart später = da stimmt was nicht" | [Diana definiert] |
| **Kosten bei Unwissen** | €500-15.000 (Hufrehe) | Unnötige Tierarztkosten, Cushing-Panik | [Recherche] |
| **Diana's persönliche Geschichte** | Ramses' Hufrehe | Friese im Offenstall vs. Boxen-Warmblüter | [Diana liefert] |
| **Abgrenzung** | Nur fütterungsbedingte Hufrehe, nicht Belastungsrehe | Frühjahrs-Fellwechsel, nicht Herbst | [Diana definiert] |

## 1.2 Projekt-Dateien laden

Zu Beginn jeder Session:
1. Relevante Projekt-Dateien identifizieren
2. **Diesen Workflow laden** (nicht Master-Prompt für Module!)
3. Diana-Bibel für Positionen und Tonalität konsultieren
4. Fertige Module als Referenz für Format laden
5. 12-Cluster-Analyse für Kontext laden (wenn relevant)

## 1.3 Scope-Dokument erstellen

**Output Phase 1:** Kurzes Briefing-Dokument mit:
- Modulname und Arbeitstitel
- 3-5 Kernfragen, die beantwortet werden
- Klare Abgrenzung (was gehört NICHT rein)
- Verbindung zu anderen Modulen
- Diana's Input zu persönlicher Erfahrung

---

# PHASE 2: STRUKTUR-ENTWURF

## 2.1 Gliederung nach bewährtem Muster

Beide Module (Fruktan & Fellwechsel) haben sich in dieser Grundstruktur bewährt:

```
1. DIANA'S STORY (Warum dieses Thema)
2. DISCLAIMER (Was ich bin / nicht bin)
3. EINORDNUNG (Kontext, Abgrenzung)
4. DAS PRINZIP IN EINEM SATZ (Kernaussage)
5. WANN/WO/WIE (Praktische Anwendung)
6. DIE RISIKO-FAKTOREN (Was macht es schlimmer/anders)
7. DIE AMPEL/ENTSCHEIDUNGSHILFE (Visuelles Tool)
8. RISIKOGRUPPEN (Wer muss besonders aufpassen)
9. PRAKTISCHES PROTOKOLL (Schritt-für-Schritt)
10. KOMMUNIKATION (Gespräch mit Stallbetreiber/TA)
11. CHECKLISTE (Zum Abhaken)
12. ZUSAMMENFASSUNG (Die wichtigsten Punkte)
13. QUELLENVERZEICHNIS
```

**Hinweis:** Nicht jedes Modul braucht alle Elemente. Fellwechsel hatte z.B. keine Ampel, dafür mehr Erklärung zum Mechanismus.

## 2.2 Kurs-Modul Dokument-Kopf (Standard)

```markdown
# [TITEL] — [Untertitel]
## Verständlich erklärt, praktisch anwendbar

**Version:** [X.X]  
**Stand:** [TT.MM.JJJJ]  
**Modul:** [X] von [Y] (G18 Frühlings-Gesundheitsguide)

---
```

## 2.3 Diana-Review der Struktur

**Fragen an Diana:**
- Fehlt etwas Wichtiges aus deiner Erfahrung?
- Ist die Reihenfolge logisch für Anna?
- Wo sind die größten Unsicherheiten/Mythen?
- Welche praktischen Tools braucht Anna am meisten?

## 2.4 Anpassung und Freigabe

**Output Phase 2:** Freigegebene Gliederung mit:
- Alle Abschnitte benannt
- Ungefährer Umfang pro Abschnitt
- Offene Recherchefragen markiert

---

# PHASE 3: WISSENSCHAFTLICHE TIEFENRECHERCHE

## 3.1 Quellen-Hierarchie (WICHTIG!)

Beim Fruktan-Guide haben wir gelernt: **Populärquellen oft falsch oder vereinfacht.**

| Priorität | Quellentyp | Beispiele | Vertrauen |
|-----------|------------|-----------|-----------|
| 1 | Peer-reviewed Journals | Journal of Animal Science, Equine Veterinary Journal, PLOS One | ✅✅✅ |
| 2 | Universitäts-Extension | Penn State, Minnesota, Cornell, MSU | ✅✅✅ |
| 3 | Veterinär-Fakultäten | Tierärztliche Hochschule Hannover | ✅✅ |
| 4 | Fach-Organisationen | AAEP, ECEIM, BEVA, ECIR Group | ✅✅ |
| 5 | Pferdezeitschriften | EQUUS, Pferderevue | ✅ (verifizieren!) |
| 6 | Hersteller/Shops | Masterhorse, etc. | âŒ (nicht verwenden) |

## 3.2 Recherche-Protokoll

Für jede kritische Aussage:

1. **Populärquelle finden** (Was sagen die gängigen Quellen?)
2. **Primärquelle suchen** (Woher kommt diese Information ursprünglich?)
3. **Originalstudie LESEN** (Nicht nur Abstract — ganze Studie!)
4. **Verifizieren** (Stimmt die Interpretation?)
5. **Widersprüche prüfen** (Gibt es andere Meinungen?)
6. **DACH-Relevanz** (Gilt das für deutsche Verhältnisse?)

## 3.3 Recherche-Dokumentation

Für jede Quelle erfassen:
```
**[Kurztitel]**
Vollständige Zitation
URL (wenn verfügbar)
Kernaussage für unser Modul
Vertrauenswürdigkeit: ✅✅✅ / ✅✅ / ✅
```

## 3.4 Kritische Prüfung (erweitert in v1.1)

**ACHTUNG:** Bei beiden Modulen mussten wir mehrfach korrigieren:

**Fruktan-Guide:**
- Nachttemperatur-Logik wurde hinterfragt → Komplette Neurecherche
- Pauschale Zeitangaben zu ungenau → DACH-spezifische Anpassung
- Populäre "Faustregeln" wissenschaftlich nicht haltbar

**Fellwechsel-Modul:**
- Bocian-Studie falsch interpretiert → "Kälte = früheres Abhaaren" war biologisch unsinnig
- Diana's Beobachtung ("kalter März = späterer Fellwechsel") war RICHTIG
- O'Brien-Studie bestätigte Diana's Erfahrung

**Regel:** Wenn Diana etwas hinterfragt, IMMER neu recherchieren! Ihre 30 Jahre Erfahrung sind oft zuverlässiger als eine schnelle Google-Suche.

## 3.5 Übersetzungs-Fallstricke (NEU in v1.1)

**Vorsicht bei englischen Fachbegriffen:**
- "shedding" = Abhaaren/Fellwechsel (NICHT "Fettabbau")
- Automatische Übersetzer machen Fehler
- Im Zweifel: Original-Kontext prüfen

**Output Phase 3:** Vollständiges Quellenverzeichnis mit:
- Alle Quellen kategorisiert
- Kritische Aussagen mit Primärquellen belegt
- Offene Fragen / Widersprüche dokumentiert

---

# PHASE 4: ERSTER ENTWURF

## 4.1 Schreibstil für Kurs-Module

**Ton:** Wie eine Freundin am Küchentisch erklärt — kompetent, aber nicht akademisch.

**Struktur:** Fließtext mit klaren Überschriften. Tabellen für Übersichten. Keine Bullet-Listen als Hauptstruktur.

**Beispiel aus Modul 1:**
> "Das war's. Diesen einen Satz musst du dir merken — alles andere ergibt sich daraus."

## 4.2 Praktische Tools einbauen

- **Tabellen:** Für Vergleiche, Übersichten, Dosierungen
- **Checklisten:** Zum Abhaken, am Ende des Moduls
- **Ampeln:** Nur wenn sinnvoll (Fellwechsel hatte keine)

## 4.3 Diana's Geschichte integrieren

Jedes Modul braucht:
1. **Einstieg mit persönlicher Geschichte** (Warum dieses Thema)
2. **Eingestreute Erfahrungen** (Authentizität)
3. **Fazit mit Ermutigung** (Du schaffst das)

**Output Phase 4:** Erster kompletter Entwurf mit:
- Alle Abschnitte geschrieben
- Tools/Tabellen eingefügt
- Platzhalter für fehlende Recherche markiert

---

# PHASE 5: VERIFIKATIONS-SCHLEIFEN

## 5.1 Diana-Review

Diana prüft:
- [ ] Stimmt das mit meiner 30-jährigen Erfahrung?
- [ ] Würde ich das so einer Freundin erklären?
- [ ] Fehlt etwas Praktisches?
- [ ] Ist etwas zu kompliziert für Anna?

## 5.2 Fakten-Check

Für jede kritische Aussage:
- [ ] Quelle verifiziert?
- [ ] Originalstudie gelesen (nicht nur Abstract)?
- [ ] Zahlen/Prozente korrekt?
- [ ] DACH-relevant?
- [ ] Keine Halluzination?

## 5.3 Korrektur-Schleifen (erweitert in v1.1)

**Aus beiden Modulen gelernt:**
- Erst recherchieren, DANN schreiben (nicht umgekehrt)
- Bei Zweifeln: Lieber einmal mehr prüfen
- Diana's Hinterfragen ist GOLD wert → immer ernst nehmen
- **NUR beauftragte Änderungen durchführen** — keine eigenmächtigen "Verbesserungen"
- Bei Neuerstellung: Unveränderte Abschnitte 1:1 übernehmen

**Output Phase 5:** Verifizierter Entwurf mit:
- Diana's Freigabe
- Alle kritischen Aussagen quellenbelegt
- Korrekturen dokumentiert

---

# PHASE 6: FEINSCHLIFF & QUELLENVERWEISE

## 6.1 Inline-Zitier-Format

Standard etabliert:
```
"Die British Horse Society empfiehlt 0,4–0,6 ha pro Pferd (BHS, 2024) [1]."

**Quellenverweise [Abschnittsname]:**
[1] British Horse Society (2024)
[2] University of Minnesota Extension — Martinson & Peterson (2024)
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

Prüfen:
- [ ] Temperaturen in °C
- [ ] Flächen in Hektar
- [ ] Deutsche Rechtschreibung
- [ ] DACH-spezifische Bedingungen berücksichtigt
- [ ] Keine US-only Empfehlungen

## 6.4 Finale Qualitätsprüfung

- [ ] Umlaute korrekt (UTF-8)
- [ ] Tabellen richtig formatiert (Markdown)
- [ ] Alle Links funktionieren
- [ ] Versionsnummer aktuell
- [ ] Datum aktuell

**Output Phase 6:** Finales Dokument mit:
- Vollständige Inline-Zitate
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
- Verwendete persönliche Stories
- Verwendete Fakten
- Neue Brand-Positionen

## 7.3 Erkenntnisse auf andere Module anwenden

**Fragen nach jedem Modul:**
- Haben wir etwas Neues gelernt, das auch für andere Module gilt?
- Gibt es Workflow-Verbesserungen?
- Neue Best Practices für Quellenarbeit?

## 7.4 Ableitungen planen

Aus dem ausführlichen PDF können abgeleitet werden:
- **Videokurs:** Angewandtes Wissen (Kernpunkte)
- **Kurzfassung:** 2-3 Seiten mit Checklisten
- **Webapp:** Interaktive Entscheidungshilfe
- **Social Media:** Kernaussagen als Posts

**Output Phase 7:** 
- Finales Modul im Projektordner
- Diana-Bibel aktualisiert
- Dokumentierte Erkenntnisse
- Plan für Ableitungen

---

# ABGESCHLOSSENE MODULE

## Modul 1: Fruktan & Anweiden ✅
- Datei: `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md`
- Status: Final
- Umfang: ~8.000 Wörter

## Modul 2: Fellwechsel im Frühjahr ✅
- Datei: `g18-modul2-fellwechsel-v11-final.md`
- Status: Final
- Umfang: ~5.400 Wörter

---

# ANWENDUNG: NÄCHSTES MODUL

## Startpunkt für neuen Chat

Kopiere diesen Block in einen neuen Chat:

---

**BRIEFING: G18 MODUL [X] — [THEMA]**

**Kontext:**
- Wir arbeiten am G18 Frühlings-Guide Premium-Kurs
- Modul 1 (Fruktan & Anweiden) ist fertig: `pferdesicht-g18-fruktan-praxis-v8_2-umlaute-korrigiert.md`
- Modul 2 (Fellwechsel) ist fertig: `g18-modul2-fellwechsel-v11-final.md`
- Workflow-Dokument: `pferdesicht-modul-erstellungs-workflow-v1_2.md`

**Modul [X] Scope:**
- Thema: [THEMA]
- Kernpunkte laut Planung:
  • [Punkt 1]
  • [Punkt 2]
  • [Punkt 3]

**Erste Aufgabe:**
Lies bitte die Projekt-Dateien:
1. **Diesen Workflow** (v1.2) — für Struktur und Format
2. Fertige Module als Referenz für Stil/Tiefe
3. Diana-Bibel für Positionen und Tonalität

**WICHTIG:** Für Kurs-Module den Workflow verwenden, NICHT den Master-Prompt (der ist für Blogbeiträge).

Dann starte mit **Phase 1: Briefing & Scope** — stelle mir die Startfragen.

---

# CHECKLISTE PRO MODUL

## Phase 1: Briefing â˜
- [ ] Thema in einem Satz definiert
- [ ] Anna's Kernfrage geklärt
- [ ] Anna's Fehlannahme identifiziert
- [ ] Diana's persönliche Geschichte vorhanden
- [ ] Abgrenzung definiert

## Phase 2: Struktur â˜
- [ ] Gliederung erstellt (nach Kurs-Modul-Muster, NICHT Blogbeitrag)
- [ ] Diana-Review durchgeführt
- [ ] Struktur freigegeben

## Phase 3: Recherche â˜
- [ ] Primärquellen gesucht
- [ ] Originalstudien gelesen (nicht nur Abstracts)
- [ ] Populärquellen verifiziert
- [ ] Widersprüche geklärt
- [ ] Quellenverzeichnis angelegt

## Phase 4: Erster Entwurf â˜
- [ ] Alle Abschnitte geschrieben
- [ ] Tools/Tabellen eingefügt
- [ ] Diana's Geschichte integriert

## Phase 5: Verifikation â˜
- [ ] Diana-Review durchgeführt
- [ ] Fakten gecheckt
- [ ] Korrekturen eingearbeitet
- [ ] NUR beauftragte Änderungen durchgeführt

## Phase 6: Feinschliff â˜
- [ ] Inline-Zitate eingefügt
- [ ] Quellenverzeichnis komplett
- [ ] DACH-Anpassungen geprüft

## Phase 7: Finalisierung â˜
- [ ] In Projektordner übernommen
- [ ] Diana-Bibel aktualisiert
- [ ] Erkenntnisse dokumentiert
- [ ] Ableitungen geplant

---

# ÄNDERUNGSLOG

| Version | Datum | Änderungen |
|---------|-------|------------|
| 1.0 | 09.01.2026 | Initiale Version basierend auf Fruktan-Guide Entwicklung |
| 1.1 | 13.01.2026 | Learnings aus Fellwechsel-Modul: Änderungsdisziplin, Quellen-Verifikation, Übersetzungs-Fallstricke, Diana-Bibel-Update |
| **1.2** | **13.01.2026** | **Klare Abgrenzung Kurs-Module vs. Blogbeiträge: Neuer Abschnitt am Anfang, was Module NICHT haben (Key Takeaways etc.), Dokument-Kopf-Standard, aktualisierte Dateinamen, Hinweise in Phase 1.2 und Startpunkt-Template** |

---

*Workflow-Dokument v1.2 — Mit klarer Abgrenzung Kurs vs. Blog*
*Basierend auf: Fruktan-Guide v8.2 + Fellwechsel-Modul v11*
