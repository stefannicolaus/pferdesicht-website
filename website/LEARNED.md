# PFERDESICHT – Gelernte Regeln & Muster

> CC schreibt hier bestätigte Erkenntnisse rein, die als dauerhafte Regeln gelten.  
> Jeder Eintrag wurde vom User bestätigt bevor er aufgenommen wurde.

_LAST_REVIEW: 2026-02-04
_TOTAL_ENTRIES: 4

---

## DESIGN
<!-- Visuelle Entscheidungen, UI-Muster, Bild-Regeln -->

## SALESCOPY
<!-- Copy-Erkenntnisse, CTA-Muster, was konvertiert -->

## BLOG
<!-- Artikel-Strukturen, SEO-Erkenntnisse, Leser-Reaktionen -->

## CODE
<!-- Technische Patterns, Performance-Fixes, Build-Lösungen -->

### Automatische Rechtschreibprüfung (2026-02-04)
**Setup:** cspell + husky + lint-staged

**Dateien:**
- `cspell.json` - Konfiguration (Deutsch + Englisch)
- `cspell-pferdesicht.txt` - Eigenes Glossar (~75 Fachbegriffe)
- `.husky/pre-commit` - Git Hook (im Root, nicht in /website)
- `.vscode/settings.json` - VS Code Integration
- `.vscode/extensions.json` - Empfohlene Extensions

**Workflow:**
1. Beim Commit: lint-staged prüft alle geänderten .md/.tsx/.ts Dateien
2. Bei Fehlern: Commit wird blockiert
3. Neue Begriffe: In `cspell-pferdesicht.txt` eintragen

**VS Code Extensions installieren:**
- Code Spell Checker (`streetsidesoftware.code-spell-checker`)
- German - Code Spell Checker (`streetsidesoftware.code-spell-checker-german`)

**Wichtig:** Git hooks path ist auf `.husky` gesetzt (`git config core.hooksPath .husky`)

### Dev-Server über WLAN (2026-02-04)
**URL:** `http://192.168.1.81:3000` (nicht localhost)

**Warum:** Stefan testet parallel auf dem Handy. Immer die Netzwerk-IP nutzen, nicht localhost.

**CC-Regel:** Wenn Dev-Server gestartet wird, immer `http://192.168.1.81:3000` als URL nennen.

## SOCIAL
<!-- Plattform-Erkenntnisse, Hook-Muster, Algorithmus-Beobachtungen -->

## KURS
<!-- Modul-Strukturen, Lern-Didaktik, Format-Erkenntnisse -->

## VIDEO
<!-- Slide-Erkenntnisse, Canva-Workflows, Tempo-Regeln -->

## STRATEGIE
<!-- Produktentscheidungen, Pricing-Erkenntnisse, Markt-Beobachtungen -->

## ABLEITUNG
<!-- Was funktioniert beim Content-Repurposing -->

## WEBSITE-TEXT
<!-- Tonalität-Feinheiten, Formulierungen die ankommen -->

## ALLGEMEIN
<!-- Workflow-Regeln, Tool-Tipps, Kommunikationsmuster -->

### Neuen Chat starten (Kontext-Transfer)
**Wann:** Wenn der Chat zu lang wird, morgens, oder bei Performance-Problemen.

**Startprompt für neuen Chat:**
```
Lies zuerst diese Dateien in dieser Reihenfolge:
1. @website/CLAUDE.md (Projekt-Kontext + Hooks)
2. @website/LEARNED.md (Gelernte Regeln)
3. @website/TASKS.md (Offene Aufgaben)

Dann: `git status` und `git log --oneline -5` um zu sehen wo wir stehen.

Kontext aus letztem Chat:
[HIER: Was wir zuletzt gemacht haben / wo wir aufgehört haben]
```

**CC-Regel:** Wenn Kontextfenster >80% voll oder Chat träge wird → proaktiv vorschlagen neuen Chat zu starten und obigen Prompt generieren mit aktuellem Kontext.

**User-Tendenz:** Stefan wechselt ungern Chats. Deshalb: Aktiv erinnern wenn Performance leidet oder Kontext-Limit naht. Nicht warten bis er fragt – von mir aus ansprechen.

### TASKS.md Management (2026-02-04)
**Datei:** `website/TASKS.md` – Persistente Task-Verwaltung über Sessions hinweg.

**CC managed diese Datei eigenständig:**

1. **Session-Start:** TASKS.md lesen um offene Tasks zu kennen
2. **Task erstellen:** Wenn User neue Aufgabe nennt → IN PROGRESS oder BACKLOG
3. **Status updaten:** Bei Fortschritt sofort Status ändern
4. **Pausieren:** Wenn User Thema wechselt → Task nach PAUSED mit Notizen
5. **Abschließen:** Fertige Tasks nach DONE mit Datum verschieben
6. **Aufräumen:** DONE-Tasks nach 7 Tagen löschen

**Proaktive Verhaltensweisen:**
- Bei Session-Start: "Ich sehe [Task X] ist noch offen. Sollen wir weitermachen?"
- Bei Task-Wechsel: Automatisch pausieren und Kontext speichern
- Bei Unklarheit: Nachfragen bevor Task-Status geändert wird

**Task-Template:**
```
### [Kurztitel]
**Ziel:** Was soll erreicht werden
**Status:** X% | Warte auf Y | Blockiert durch Z
**Nächster Schritt:** Konkreter nächster Schritt
**Dateien:** relevante-datei.tsx, andere.md
**Notizen:** Kontext für später
```
