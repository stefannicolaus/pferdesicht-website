# Pferdesicht Developer Notes

## Claude in Chrome - Screenshot Workflow

### Problem
"Error capturing screenshot: Cannot access a chrome-extension:// URL"
oder "Cannot access a chrome:// URL"

### Lösung
1. Nach JEDER Navigation: `sleep 3-5` Sekunden warten
2. Dann Screenshot versuchen
3. Bei Fehler:
   - Nochmal `sleep 2`
   - Screenshot erneut versuchen (max 3 Versuche)

### Workflow
```bash
# 1. Neuen Tab erstellen
tabs_create

# 2. Navigieren
navigate zu URL

# 3. WARTEN (wichtig!)
sleep 5

# 4. Screenshot
screenshot

# 5. Bei Fehler: warten und erneut versuchen
sleep 2
screenshot
```

### Wichtig
- Immer in einem normalen Tab arbeiten (nicht chrome:// oder extension://)
- Nach Navigation IMMER warten bevor Screenshot
- Der Fehler tritt auf wenn Chrome-Fokus auf Extension liegt
- Der Fehler ist intermittierend - oft funktioniert der 2. oder 3. Versuch

---

## Parallax Hintergrund - Mobile vs Desktop

### Problem
iOS unterstützt `background-attachment: fixed` nicht richtig.

### Lösung
```css
bg-scroll md:bg-fixed
```
- Mobile: `bg-scroll` (normales Scrollen)
- Desktop: `bg-fixed` (Parallax-Effekt)

### Bild-Positionierung
```css
bg-[center_30%] md:bg-[center_15%]
```
- Mobile: 30% von oben (Pferdekopf sichtbar)
- Desktop: 15% von oben (optimale Position)

---
