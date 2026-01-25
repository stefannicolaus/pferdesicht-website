# Pferdesicht Website – Projekt-Status

**Stand:** 25. Januar 2026
**Framework:** Next.js 15 mit App Router, Tailwind CSS v4
**Repository:** `/Users/stefan/Documents/Pferdesicht/website`

---

## 1. Seiten / Routes

### Fertige Seiten

| Route | Datei | Status | Beschreibung |
|-------|-------|--------|--------------|
| `/` | `src/app/page.tsx` | ✅ Fertig | Homepage mit Hero, Quiz-Teaser, Diana-Sektion, "Wissen schafft Gesundheit", Blog-Preview, CTA |
| `/wissen` | `src/app/wissen/page.tsx` | ✅ Fertig | Themenwelten-Übersicht mit Suche, Kategorie-Filter, Diana-Sektion, Quiz-CTA |
| `/blog` | `src/app/blog/page.tsx` | ✅ Fertig | Blog-Übersicht mit Suche und Kategorie-Filter |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | ✅ Fertig | Blog-Artikel-Template mit 2-Spalten-Hero, Drop Cap, Key Takeaway Boxen, ToC |
| `/guides/fruehling` | `src/app/guides/fruehling/page.tsx` | ✅ Fertig | Frühlings-Guide Sales Page mit Modulen, FAQ, Pricing |
| `/ueber-diana` | `src/app/ueber-diana/page.tsx` | ✅ Fertig | Über Diana Seite mit Mission, Erfahrung, Drei Säulen |
| `/kontakt` | `src/app/kontakt/page.tsx` | ✅ Fertig | Kontaktformular mit FAQ und Hinweisen |
| `/impressum` | `src/app/impressum/page.tsx` | ✅ Fertig | Rechtliche Angaben (SDLF Worldwide Solutions LLC) |
| `/datenschutz` | `src/app/datenschutz/page.tsx` | ✅ Fertig | DSGVO-konforme Datenschutzerklärung |
| `/agb` | `src/app/agb/page.tsx` | ✅ Fertig | AGB für digitale Produkte |

### Fehlende Seiten

| Route | Status | Beschreibung |
|-------|--------|--------------|
| `/quiz` | ❌ Fehlt | Frühlings-Quiz (wird auf Homepage, /wissen verlinkt) |
| `/guides` | ❌ Fehlt | Guides-Übersichtsseite (optional) |

---

## 2. Komponenten

### Layout-Komponenten

| Komponente | Datei | Status |
|------------|-------|--------|
| Header | `src/components/layout/Header.tsx` | ✅ Fertig |
| Footer | `src/components/layout/Footer.tsx` | ✅ Fertig |
| Index Export | `src/components/layout/index.ts` | ✅ Fertig |

### Section-Komponenten

| Komponente | Datei | Status |
|------------|-------|--------|
| Hero | `src/components/sections/Hero.tsx` | ✅ Vorhanden (nicht verwendet) |

### Inline-Komponenten (in Page-Dateien)

| Komponente | Datei | Beschreibung |
|------------|-------|--------------|
| ArticleCard | `src/app/wissen/page.tsx` | Blog-Karten für Artikel |
| FeaturedArticleCard | `src/app/wissen/page.tsx` | (entfernt in Redesign) |
| ContactForm | `src/app/kontakt/page.tsx` | Kontaktformular |
| FAQItem | `src/app/kontakt/page.tsx` | Aufklappbare FAQ-Elemente |
| FAQItem | `src/app/guides/fruehling/page.tsx` | FAQ für Guide |
| DropCapParagraph | `src/app/blog/[slug]/page.tsx` | Initiale für ersten Absatz |

---

## 3. Lib / Utilities

| Datei | Status | Beschreibung |
|-------|--------|--------------|
| `src/lib/blog.ts` | ✅ Fertig | MDX-Verarbeitung, Frontmatter-Parsing |
| `src/lib/design-system.ts` | ✅ Fertig | Farben, Navigation, Branding-Konstanten |
| `src/lib/utils.ts` | ✅ Fertig | Utility-Funktionen (cn für Tailwind) |

---

## 4. API Routes

| Route | Datei | Status |
|-------|-------|--------|
| `/api/posts` | `src/app/api/posts/route.ts` | ✅ Fertig |

---

## 5. Content (Blog-Artikel)

| Datei | Kategorie | Status |
|-------|-----------|--------|
| `eindecken-winter.mdx` | Gesundheit | ✅ Fertig (Featured) |
| `fuetterung-winter.mdx` | Fütterung | ✅ Fertig |
| `bewegung-winter.mdx` | Haltung | ✅ Fertig |
| `fell-huf-winter.mdx` | Pflege | ✅ Fertig |
| `winterverhalten.mdx` | Allgemein | ✅ Fertig |
| `anweiden-richtig-gemacht.mdx` | Fütterung | ✅ Fertig |
| `fellwechsel-im-fruehjahr.mdx` | Gesundheit | ✅ Fertig |

---

## 6. Assets / Bilder

### Heroes
- `hero-koppel.png` ✅
- `hero-pferd-winter-schnee-v4.png` ✅
- `quiz-hero-desktop-v2.png` ✅

### Thumbnails
- `thumbnail-winter-v3.png` ✅
- `thumbnail-fuetterung.png` ✅
- `thumbnail-training.png` ✅
- `thumbnail-fellwechsel-v3.png` ✅
- `thumbnail-gesundheit-v2.png` ✅
- `thumbnail-anweiden.png` ✅
- `thumbnail-mindset.png` ✅
- `thumbnail-parasiten-v2.png` ✅

### Sonstige
- `Diana_Pferdesicht.jpeg` ✅
- `flanken-check-hand.png` ✅
- `pferd-fell-textur.png` ✅

---

## 7. Bekannte Probleme

### Kritisch

| Problem | Betroffene Seiten | Beschreibung |
|---------|-------------------|--------------|
| `/quiz` existiert nicht | Homepage, /wissen | Links zu `/quiz` führen zu 404 |

### Mittel

| Problem | Betroffene Seiten | Beschreibung |
|---------|-------------------|--------------|
| Kategorie-Mapping unvollständig | /wissen | Kategorien TRAINING, MINDSET haben keine passenden Artikel |
| Kontaktformular ohne Backend | /kontakt | Formular simuliert nur Absenden |
| Newsletter-Formular ohne Backend | /blog | Kein funktionierendes Newsletter-Signup |

### Niedrig

| Problem | Beschreibung |
|---------|--------------|
| Hero-Komponente ungenutzt | `src/components/sections/Hero.tsx` wird nicht verwendet |
| Thumbnails-Ordner leer | `/public/images/thumbnails/` existiert, ist aber leer |

---

## 8. Offene Aufgaben

### Hohe Priorität

- [ ] **Quiz-Seite erstellen** (`/quiz`) – Frühlings-Quiz mit Ergebnisauswertung
- [ ] **Kategorie-Mapping anpassen** – Artikel-Kategorien an neue Filter anpassen (Training, Gesundheit, Mindset)

### Mittlere Priorität

- [ ] **Newsletter-Integration** – Mailchimp/ConvertKit anbinden
- [ ] **Kontaktformular-Backend** – E-Mail-Versand implementieren (z.B. Resend, SendGrid)
- [ ] **Kaufprozess für Guide** – Payment-Integration (Stripe/Digistore24)

### Niedrige Priorität

- [ ] **Guides-Übersichtsseite** (`/guides`) – Falls weitere Guides geplant
- [ ] **SEO-Optimierung** – Strukturierte Daten, OpenGraph-Bilder
- [ ] **Performance** – Bildoptimierung, Lazy Loading prüfen
- [ ] **Analytics** – Tracking einrichten (Plausible/Fathom)

---

## 9. Letzte Commits

```
16f1673 Redesign /wissen page to match v0.app original
131c925 Add third block to "Wissen schafft Gesundheit" section
b9a7503 Update "Wissen schafft Gesundheit" section on homepage
904bdb0 Redesign blog template and update brand language
1122733 Clean up pilot articles with proper frontmatter
1831982 Fix /wissen article links to use /blog/[slug] route
94aed78 Fix image paths to match folder structure
6fc805a Fix image paths and reorganize images in public folder
1ada9dd Redesign homepage to match v0.app original
ef563d2 Add blog system with MDX support and dynamic article pages
```

---

## 10. Technischer Stack

- **Framework:** Next.js 15.1.6 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Schriften:** EB Garamond (Serif), Poppins (Sans)
- **Farben:** Loam, Sage, Gold (custom palette)
- **Content:** MDX mit `next-mdx-remote/rsc`
- **Deployment:** (noch nicht konfiguriert)

---

*Zuletzt aktualisiert: 25. Januar 2026*
