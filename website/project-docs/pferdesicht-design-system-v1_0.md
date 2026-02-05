# PFERDESICHT DESIGN SYSTEM v1.0

## UI Kit + Imagen Best Practices + Visuelle Richtlinien

---

**Version:** 1.0
**Erstellt:** 31.01.2026
**Basis:** 
- v0.app Original-Export
- Imagen 4 Best Practices
- Mobile-Anpassungen
**Ziel:** Konsistentes, hochwertiges visuelles Erscheinungsbild

---

# KRITISCHE REGEL

```
┌─────────────────────────────────────────────────────────────────┐
│                    🐴 PFERDE-REGEL                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Pferde werden NIEMALS abgeschnitten!                           │
│                                                                 │
│  • Kopf, Beine, Schweif - alles muss sichtbar sein              │
│  • Anna ist pingelig - und hat recht                            │
│  • Abgeschnittene Pferde = respektlos                           │
│                                                                 │
│  KONSEQUENZ:                                                    │
│  → Separate Bilder für Desktop (16:9) und Mobile (9:16)         │
│  → object-fit: cover nur wenn Pferd komplett im sicheren Bereich│
│  → Im Zweifel: contain oder separates Bild                      │
│                                                                 │
│  IM IMAGEN PROMPT IMMER:                                        │
│  → "entire horse visible from ears to hooves"                   │
│  → "full body shot, no cropping"                                │
│  → "complete horse in frame"                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# TEIL 1: FARBEN

## Basis-Farben (Tailwind Config)

```
loam: #2c2a25      - Primärer Text, dunkler Hintergrund
sage: #78866b      - Sekundär, Akzente, Sections
gold: #c8a476      - CTA, Highlights, Italic Text
cream: #faf8f5     - Heller Hintergrund (bg-light)
paper: #f5f2ed     - Papier-Textur Hintergrund
```

## Text auf dunklem Hintergrund

```
Primär:     text-[#F3F0EB]        - Headlines
Sekundär:   text-[#EBE6DF]/90     - Subheadlines
Tertiär:    text-[#EBE6DF]/80     - Body Text
Muted:      text-[#EBE6DF]/60     - Kleingedrucktes
Gold:       text-[#C5A065]        - Akzente, Italic
```

## Text auf hellem Hintergrund

```
Primär:     text-loam             - Headlines, Body
Sekundär:   text-loam/80          - Subtext
Muted:      text-loam/60          - Kleingedrucktes
Akzent:     text-gold             - Links, Highlights
Sekundär:   text-sage             - Tags, Icons
```

## Transparenzen & Overlays

```
Gradient auf Bild:    bg-gradient-to-r from-loam/80 via-loam/40 to-loam/10
Box auf Bild:         bg-white/10 backdrop-blur-sm border border-white/20
Box auf Sage:         bg-white/10 backdrop-blur-sm border border-white/20
Hover Gold:           hover:bg-[#b8956a]
```

---

# TEIL 2: TYPOGRAFIE

## Font Families

```
Serif:      font-serif    - Headlines, Zitate (EB Garamond)
Sans:       font-sans     - Body, Buttons, UI (Poppins)
```

## Headlines

```
H1 Hero (Desktop):
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
  font-serif font-medium leading-[1.1]
  
H1 Hero (Mobile):
  text-4xl sm:text-5xl
  font-serif font-medium leading-[1.1]

H2 Section:
  text-3xl md:text-4xl lg:text-5xl
  font-serif leading-tight

H3 Card/Box:
  text-2xl
  font-serif leading-tight
```

## Gold Italic (Signature Style)

```
italic text-[#C5A065] font-normal font-serif
```

## Body Text

```
Standard:
  text-base sm:text-lg md:text-xl
  font-sans font-light leading-relaxed

Klein:
  text-sm
  font-sans

Subheadline mit Border:
  text-base sm:text-lg md:text-xl
  font-sans font-light leading-relaxed
  border-l-2 border-gold/50 pl-4 md:pl-6
```

## Labels & Badges

```
Badge:
  text-xs font-sans font-bold tracking-widest uppercase

Section Label:
  text-xs font-sans font-bold tracking-[0.2em] uppercase

Button Text:
  text-sm font-sans font-bold tracking-wide uppercase
  
Link Text:
  text-xs font-bold font-sans uppercase tracking-widest
```

---

# TEIL 3: KOMPONENTEN

## Buttons

### Primary CTA

```jsx
<button className="px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm inline-flex items-center justify-center gap-2 shadow-lg transition-colors">
  Button Text
  <ArrowRight className="w-5 h-5" />
</button>
```

### Primary CTA (volle Breite)

```jsx
<button className="w-full px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm inline-flex items-center justify-center gap-2 shadow-lg transition-colors">
  Button Text
  <ArrowRight className="w-5 h-5" />
</button>
```

### Text Link

```jsx
<a className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase hover:text-[#b8956a] transition-colors">
  Link Text
  <ArrowRight className="w-4 h-4" />
</a>
```

## Badges

### Hero Badge (auf Bild)

```jsx
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold text-[#EBE6DF] text-xs font-sans font-bold tracking-widest uppercase">
  BADGE TEXT
</span>
```

### Section Badge (auf Sage)

```jsx
<span className="text-white/90 font-sans text-xs font-bold tracking-[0.2em] uppercase">
  BADGE TEXT
</span>
```

## Cards

### Box auf dunklem/Bild Hintergrund

```jsx
<div className="bg-white/10 backdrop-blur-sm rounded-sm p-8 border border-white/20">
  {/* Content */}
</div>
```

### Lead Magnet Box (v0 Style)

```jsx
<div className="bg-sage rounded-xl p-6 lg:p-8">
  {/* Badge */}
  <span className="inline-block px-3 py-1.5 bg-loam/30 text-white text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
    FRÜHLING 2026
  </span>
  
  {/* Headline */}
  <h2 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-3">
    Dein persönlicher Frühlings-Fahrplan
  </h2>
  
  {/* Inner Box für Benefits */}
  <div className="bg-white/10 rounded-lg p-5 mb-6">
    <span className="text-xs font-bold tracking-widest uppercase text-white mb-4 block">
      WAS DU BEKOMMST:
    </span>
    {/* Benefits */}
  </div>
  
  {/* CTA */}
  <button className="w-full ...">
    Frühlingscheck starten
  </button>
</div>
```

## Benefit Items

### Mit Checkmark

```jsx
<div className="flex items-start gap-3">
  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
  <div>
    <span className="text-gold font-semibold">Titel</span>
    <p className="text-white/80 text-sm">Beschreibung</p>
  </div>
</div>
```

### Mit buntem Icon (v0 Style)

```jsx
<div className="flex items-start gap-4">
  <div className="w-10 h-10 rounded-full bg-orange-400/80 flex items-center justify-center flex-shrink-0">
    <span className="text-lg">🎯</span>
  </div>
  <div>
    <h4 className="text-white font-sans font-semibold text-base mb-1">Klarheit</h4>
    <p className="text-white/70 text-sm font-light">Du weißt, was bei DEINEM Pferd jetzt zählt</p>
  </div>
</div>
```

## Trust Icons

```jsx
<div className="flex flex-wrap items-center gap-4 text-[#EBE6DF]/80 text-xs font-sans">
  <span className="flex items-center gap-1.5">
    <CheckCircle2 className="w-4 h-4 text-sage" />
    Trust Text
  </span>
</div>
```

---

# TEIL 4: SECTIONS

## Hero Section (Desktop)

```jsx
<section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
  <Image fill className="object-cover object-[center_70%]" />
  <div className="absolute inset-0 bg-gradient-to-r from-loam/80 via-loam/40 to-loam/10" />
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="max-w-3xl">
      {/* Content links, Bild rechts sichtbar */}
    </div>
  </div>
</section>
```

## Sage Section

```jsx
<section className="py-20 md:py-24 bg-sage relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Content */}
  </div>
</section>
```

## Cream Section

```jsx
<section className="py-20 md:py-24 bg-[#faf8f5]">
  <div className="max-w-3xl mx-auto px-6 text-center">
    {/* Content */}
  </div>
</section>
```

---

# TEIL 5: MOBILE-SPEZIFISCH

## Unterschiede zu Desktop

| Element | Desktop | Mobile |
|---------|---------|--------|
| Lead Magnet Box | ✅ Im Hero rechts | ❌ Hidden |
| Hero Badge | ✅ Sichtbar | ✅ Sichtbar (md:hidden) |
| CTA | Im Hero + Lead Box | **Sticky Footer Banner** |
| Trust Icons | Im Hero + Lead Box | **Im Sticky Banner** |
| Navigation | Links sichtbar | Hamburger Menu |

## Sticky Mobile CTA Banner

```jsx
<div className="fixed bottom-0 left-0 right-0 bg-loam/95 backdrop-blur-sm border-t border-white/10 p-4 z-50 md:hidden safe-area-bottom">
  {/* Button */}
  <Link
    href="/quiz"
    className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm"
  >
    Frühlingscheck starten
    <ArrowRight className="w-5 h-5" />
  </Link>
  
  {/* Trust Icons */}
  <div className="flex items-center justify-center gap-4 mt-2 text-white/70 text-xs">
    <span className="flex items-center gap-1">
      <Check className="w-3 h-3" />
      Kostenlos
    </span>
    <span className="flex items-center gap-1">
      <Check className="w-3 h-3" />
      2 Min
    </span>
    <span className="flex items-center gap-1">
      <Check className="w-3 h-3" />
      Kein Spam
    </span>
  </div>
</div>
```

## Mobile Hero Bild-Anforderungen

```
┌─────────────────────────────────────────────────────────────────┐
│              MOBILE HERO BILD (9:16)                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────┐                            │
│  │  TEXT-ZONE (obere 40%)          │  ← Freiraum für Headline   │
│  │  Himmel, weicher Hintergrund    │    + Gold Italic           │
│  │  Gradient-freundlich            │    + Subtext               │
│  ├─────────────────────────────────┤                            │
│  │                                 │                            │
│  │  PFERD-ZONE (untere 60%)        │  ← Pferd KOMPLETT          │
│  │  Pferd von Kopf bis Huf         │    sichtbar!               │
│  │  Mit Boden/Kontext              │                            │
│  │                                 │                            │
│  └─────────────────────────────────┘                            │
│                                                                 │
│  Maße: 1080 x 1920 px (9:16)                                    │
│  Style: Organic Luxury                                          │
│  Licht: Warm, natürlich, Golden Hour                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Mobile Hero Code mit separatem Bild

```jsx
<section className="relative min-h-screen pt-16 pb-24">
  {/* Desktop Bild */}
  <Image 
    src="/images/heroes/hero-desktop.jpg"
    fill 
    className="object-cover object-[center_70%] hidden md:block" 
    alt="..."
    priority
  />
  
  {/* Mobile Bild - separates Hochformat! */}
  <Image 
    src="/images/heroes/hero-mobile.jpg"
    fill 
    className="object-cover md:hidden object-top" 
    alt="..."
    priority
  />
  
  {/* Gradient für Text-Lesbarkeit */}
  <div className="absolute inset-0 bg-gradient-to-b from-loam/80 via-loam/50 to-loam/30" />
  
  {/* Content */}
  <div className="relative px-5 pt-8">
    {/* Badge (nur Mobile) */}
    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage text-white text-[10px] font-sans font-bold tracking-widest uppercase mb-6 md:hidden">
      FÜR PFERDEMENSCHEN, DIE HINSCHAUEN
    </span>
    
    {/* Headline, Gold Italic, Subtext */}
  </div>
</section>
```

## Mobile Breakpoint Patterns

```jsx
// Visibility
hidden md:block        // Nur Desktop
md:hidden              // Nur Mobile

// Padding Mobile vs Desktop
p-4                    // Mobile: 16px
md:p-6 lg:p-8          // Desktop: 24px / 32px

// Text Größen Mobile
text-4xl               // Mobile H1
md:text-5xl lg:text-6xl // Desktop H1

// Grid Mobile vs Desktop
grid-cols-1            // Mobile: 1 Spalte
lg:grid-cols-2         // Desktop: 2 Spalten
```

## Safe Area (iPhone Notch/Home Indicator)

```css
/* In globals.css */
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
```

## Mobile Touch Targets

```
Minimum Touch Target:  min-h-[48px] min-w-[48px]
Button Padding:        py-3 px-6 (mindestens)
Icon Buttons:          p-2 mit w-6 h-6 Icon
```

---

# TEIL 6: ABSTÄNDE

## Container

```
Max Width:        max-w-7xl (1280px)
                  max-w-6xl (1152px) - für 2-Spalten
                  max-w-4xl (896px) - für Text-zentriert
                  max-w-3xl (768px) - für schmalen Text
                  
Padding:          px-4 sm:px-6 lg:px-8
                  oder einfach: px-6
```

## Section Padding

```
Standard:         py-20 md:py-24
Groß:             py-24 md:py-32
Hero:             py-20
```

## Zwischen Elementen

```
Nach Badge:       mb-6 md:mb-8
Nach Headline:    mb-6 md:mb-8
Nach Subheadline: mb-8 md:mb-12
Nach Benefits:    mb-6
Zwischen Cards:   gap-8 lg:gap-12
```

---

# TEIL 7: EFFEKTE

## Schatten

```
Card:             shadow-sm hover:shadow-lg
Button:           shadow-lg
Modal:            shadow-2xl
```

## Übergänge

```
Standard:         transition-colors
Card Hover:       transition-all duration-500
Image Zoom:       transition-transform duration-700 group-hover:scale-105
```

---

# TEIL 8: RESPONSIVE BREAKPOINTS

```
sm:   640px   - Kleine Tablets
md:   768px   - Tablets
lg:   1024px  - Desktop
xl:   1280px  - Große Screens
```

---

# TEIL 9: ICONS

## Verwendete Icons (Lucide)

```
ArrowRight    - CTAs, Links
CheckCircle2  - Trust Icons, Bestätigungen
Check         - Listen, Benefits
Shield        - Sicherheit
Brain         - Wissen
Heart         - Beziehung
Sparkles      - Zitate, Highlights
Menu          - Mobile Nav
X             - Schließen
```

## Icon Größen

```
In Buttons:       w-5 h-5 oder w-4 h-4
Trust Icons:      w-4 h-4
Benefit Icons:    w-5 h-5
Feature Icons:    w-6 h-6
Große Icons:      w-10 h-10 (in Kreisen)
```

---

# TEIL 10: IMAGEN BEST PRACTICES

## Prompt-Framework

**Struktur:** Subject + Context/Background + Style + Details

## Goldene Regeln

### 1. Beginne mit "A photo of..."
Aktiviert Imagen 4's photorealistischen Modus.

### 2. Halte initiale Prompts unter 50 Wörter
Für schnelle Tests. Dann erweitere auf 100-200 Wörter für Details.

### 3. Verwende technische Fotografie-Terminologie

**Camera Settings:**
- "shot with 85mm lens"
- "f/1.4 aperture" oder "f/4 aperture"
- "shallow depth of field"

**Lighting:**
- "golden hour lighting"
- "soft natural light"
- "dramatic shadows"

**Composition:**
- "rule of thirds"
- "positioned in left 60% of frame"

**Quality:**
- "high resolution"
- "professional photography"
- "photorealistic"

### 4. Vermeide negative Formulierungen
SCHLECHT: "no clouds in the sky"
BESSER: Beschreibe was du WILLST.

### 5. Nutze negative Prompts separat
"no text, no watermarks, no blurry, no AI artifacts"

## Prompt-Templates

### Hero Bild Desktop (16:9)

```
A photo of [ANZAHL] horses in a German Offenstall pasture, shot with 85mm lens, f/4 aperture, shallow depth of field, golden hour lighting.

Subject: Exactly [ANZAHL] horses - [FARBEN] - in natural relaxed poses. CRITICAL: Entire horses visible from ears to hooves.

Composition: Horses positioned in left 60% of frame, right 40% for UI overlay.

Environment: Tall summer meadow grass, wooden pasture fence, German countryside.

Style: Professional equine photography, Organic Luxury aesthetic, warm tones.

Technical: Aspect ratio 16:9, 1920x1080. No text, no watermarks.
```

### Hero Bild Mobile (9:16)

```
A photo of [ANZAHL] horses in a German Offenstall pasture, vertical portrait composition, shot with 50mm lens, f/2.8 aperture, golden hour lighting.

Subject: [ANZAHL] horses - [FARBEN] - natural poses. CRITICAL: Entire horses visible from ears to hooves. Horses positioned in lower 60% of frame.

Upper 40%: Soft sky for text overlay.

Environment: Tall meadow grass, wooden fence, German countryside.

Style: Professional equine photography, Organic Luxury aesthetic.

Technical: Aspect ratio 9:16 portrait, 1080x1920. No text, no watermarks.
```

## Aspect Ratios

| Verwendung | Ratio | Pixel |
|------------|-------|-------|
| Hero Desktop | 16:9 | 1920x1080 |
| Hero Mobile | 9:16 | 1080x1920 |
| Blog Header | 16:9 | 1200x675 |
| Social Square | 1:1 | 1080x1080 |
| Social Story | 9:16 | 1080x1920 |
| OG Image | 1.91:1 | 1200x630 |

## Speicherorte

```
Desktop Heroes: public/images/heroes/
Mobile Heroes:  public/images/heroes/ (mit -mobile suffix)
Blog Bilder:    public/images/blog/
```

## Checkliste nach Generierung

```
□ Pferde KOMPLETT sichtbar (Ohren bis Hufe)?
□ Richtige Komposition für Viewport?
□ Oberer Bereich frei für Text (bei Hero)?
□ Warme, natürliche Töne?
□ Keine Artefakte/Fehler?
□ Passend zum Organic Luxury Style?
```

---

# TEIL 11: CHECKLISTE FÜR NEUE KOMPONENTEN

```
□ Verwendet die richtigen Farben (siehe Teil 1)
□ Verwendet die richtigen Fonts (serif für Headlines, sans für Body)
□ Badge/Label ist uppercase, tracking-widest, text-xs
□ Buttons haben das richtige Pattern (gold, rounded-sm, uppercase)
□ Abstände entsprechen dem System (mb-6, mb-8, gap-4)
□ Responsive Breakpoints sind Mobile-First
□ Hover-States sind definiert
□ Icons sind aus Lucide und richtige Größe
□ Pferde werden NIEMALS abgeschnitten
```

---

# VERBINDUNG ZU ANDEREN DOKUMENTEN

| Dieses Design System | Verbindet mit | Wie |
|----------------------|---------------|-----|
| Farben & Typo | Master-Prompt v3.14 | Diana-Stimme visuell umgesetzt |
| Komponenten | Developer Framework v2.0 | Code-Implementation |
| Imagen Prompts | Developer Framework v2.0 | CC Prompt Templates |
| Brand Guidelines | Golden Circle v2.3 | Organic Luxury Aesthetic |

---

## CHANGELOG

### v1.0 (2026-01-31)
- UI Kit v1.1 integriert
- Imagen Best Practices integriert
- Pferde-Regel als kritische Regel dokumentiert
- Mobile-spezifische Patterns dokumentiert
- Lead Magnet Box v0 Style dokumentiert

---

**Pferdesicht Design System v1.0**
*Konsistentes, hochwertiges visuelles Erscheinungsbild*
*"Organic Luxury - Warm, Authentisch, Respektvoll"*

---

*Design mit Sorgfalt, wie Diana sich um Pferde kümmert.*
