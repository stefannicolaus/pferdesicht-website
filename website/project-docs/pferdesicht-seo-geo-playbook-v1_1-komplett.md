# PFERDESICHT SEO + GEO PLAYBOOK v1.1

*Konsolidierte Strategie: Klassisches SEO + LLM-Optimierung (GEO)*  
*Basierend auf: Brian Dean/Backlinko, Ahrefs-Methodik, GEO Princeton Framework, Semantic SEO*

---

**Version:** 1.1 (konsolidiert)  
**Erstellt:** 30.01.2026  
**Gilt für:** Alle Blog-Artikel, Landing Pages, Produkt-Seiten

**Referenziert:**
- Developer Framework v1.0 → Technische Umsetzung
- Master-Prompt v3.14 → Content-Erstellung
- Diana-Bibel v3.0 → Stimme & Positionierung
- G18-Ableitungsmatrix v1 → Content-Cluster

---

## ÜBERSICHT: SEO vs. GEO

```
┌─────────────────────────────────────────────────────────────────────────â”
│                                                                         │
│   SEO (Search Engine Optimization)    GEO (Generative Engine Opt.)     │
│   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•     │
│                                                                         │
│   Ziel: Google Rankings               Ziel: LLM-Zitierungen            │
│   User: Menschen suchen               User: ChatGPT, Claude, Perplexity│
│                                                                         │
│   Keywords in Title/H1                Definitive Statements            │
│   Backlinks                           Expertise & Authority (E-E-A-T)  │
│   Meta Descriptions                   FAQ-Struktur                     │
│   Keyword-Dichte                      Zitierbare Fakten + Zahlen       │
│   PageRank                            Einzigartige Perspektive         │
│                                                                         │
│   BEIDE ERGÄNZEN SICH - NICHT ENTWEDER/ODER                            │
│                                                                         │
│   ⚠ï¸  58,5% aller DE-Suchen enden ohne Klick (AI Overviews)            │
│   ⚠ï¸  AI-Traffic = 11+ Min Verweildauer (hochwertig!)                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# TEIL 1: KLASSISCHES SEO

## 1.1 On-Page SEO Checkliste

### Vor dem Schreiben

| Check | Element | Regel |
|-------|---------|-------|
| â˜ | **Fokus-Keyword** | 1 Hauptkeyword pro Artikel identifiziert |
| â˜ | **Suchintention** | Informational / Navigational / Commercial / Transactional? |
| â˜ | **Konkurrenz-Check** | Top 3 Google-Ergebnisse analysiert |
| â˜ | **Parent Topic** | Welches Hub-Thema? (Ahrefs-Methodik) |

### Title & Meta

| Check | Element | Regel | Beispiel |
|-------|---------|-------|----------|
| â˜ | **Title Tag** | 50-60 Zeichen, Keyword vorne | "Pferd eindecken im Winter: Wann eine Decke Sinn macht \| Pferdesicht" |
| â˜ | **Meta Description** | 150-160 Zeichen, CTA enthalten | "Wann du dein Pferd eindecken solltest - und wann nicht. Faktenbasiert aus 30 Jahren Erfahrung. Mit 10-Sekunden-Check." |
| â˜ | **URL-Slug** | Kurz, Keyword enthalten, keine Umlaute | `/blog/pferd-eindecken-winter` |

### Überschriften-Hierarchie

| Check | Element | Regel |
|-------|---------|-------|
| â˜ | **H1** | Genau 1x pro Seite, Keyword enthalten |
| â˜ | **H2** | 3-7 Stück, logische Struktur, **als Fragen formuliert (GEO!)** |
| â˜ | **H3** | Für Unterpunkte, nicht überspringen |
| â˜ | **Keine H4-H6** | Zu tief = schlechte Struktur |

### Content

| Check | Element | Regel |
|-------|---------|-------|
| â˜ | **Answer Capsule** | 40-60 Wörter Zusammenfassung am Anfang (GEO!) |
| â˜ | **Keyword im 1. Absatz** | Innerhalb der ersten 100 Wörter |
| â˜ | **Keyword-Dichte** | 1-2%, natürlich eingebaut |
| â˜ | **Wortanzahl** | Min. 1.500 Wörter für Pillar Content |
| â˜ | **Lesbarkeit** | Kurze Sätze, Absätze max. 3-4 Zeilen |

### Bilder

| Check | Element | Regel | Beispiel |
|-------|---------|-------|----------|
| â˜ | **Alt-Text** | Beschreibend, Keyword wenn passend | "Pferd im Schnee mit aufgestelltem Winterfell" |
| â˜ | **Dateiname** | Keyword, Bindestriche | `pferd-winterfell-schnee.png` |
| â˜ | **Dateigröße** | Max. 200KB, WebP bevorzugt |
| â˜ | **Lazy Loading** | Für Bilder below the fold |

### Interne Verlinkung (Hub & Spoke)

| Check | Element | Regel |
|-------|---------|-------|
| â˜ | **Min. 3 interne Links** | Zu Hub UND verwandten Spokes |
| â˜ | **Ankertext** | Beschreibend: "zuckerarme Pferdefütterung" (nicht "hier klicken") |
| â˜ | **Bidirektional** | Hub → Spokes UND Spokes → Hub |
| â˜ | **Related Posts** | 2-3 am Ende des Artikels |
| â˜ | **Breadcrumbs** | Für mobile Nutzer und SERP |

---

## 1.2 Technisches SEO

### Must-Haves

| Check | Element | Datei/Ort |
|-------|---------|-----------|
| â˜ | **Sitemap.xml** | `src/app/sitemap.ts` |
| â˜ | **Robots.txt** | `src/app/robots.ts` (inkl. AI-Crawler!) |
| â˜ | **llms.txt** | `public/llms.txt` (NEU 2025!) |
| â˜ | **Canonical URLs** | In Metadata |
| â˜ | **Mobile-Responsive** | Tailwind Breakpoints |
| â˜ | **HTTPS** | Vercel Default |
| â˜ | **Page Speed** | LCP < 2.5s, CLS < 0.1 |

### Sitemap.ts Template

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  
  const blogUrls = posts.map((post) => ({
    url: `https://pferdesicht.com/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: 'https://pferdesicht.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://pferdesicht.com/wissen',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pferdesicht.com/ueber-mich',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://pferdesicht.com/quiz',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
```

### Robots.ts Template (MIT AI-CRAWLERN!)

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI-Crawler EXPLIZIT ERLAUBEN
      {
        userAgent: 'OAI-SearchBot',  // OpenAI/ChatGPT
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',  // Google AI Overviews
        allow: '/',
      },
    ],
    sitemap: 'https://pferdesicht.com/sitemap.xml',
  }
}
```

### llms.txt Template (NEU 2025!)

```markdown
// public/llms.txt

# Pferdesicht

> Deutschsprachiges Fachportal für evidenzbasierte Pferdegesundheit. 
> Betrieben von Diana mit 30+ Jahren Pferdeerfahrung.

## Über die Autorin
Diana ist Reittherapeutin mit 16 Jahren Erfahrung, über 30 Jahren 
Pferdehaltung und 20 Jahren Offenstall-Management.

## Hauptthemen
- [Frühjahrsgesundheit](/themen/fruehjahr) - Fellwechsel, Anweiden, Parasitenmanagement
- [Fütterung](/themen/fuetterung) - Grundlagen, Sonderfälle, Zusatzfutter
- [Haltung](/themen/haltung) - Offenstall, Weidemanagement

## Für Zitate
Attribution erwünscht. Bei medizinischen Themen bitte auf tierärztliche 
Beratung hinweisen.

## Kontakt
info@pferdesicht.com
```

---

# TEIL 2: GEO - LLM-OPTIMIERUNG

## 2.1 Was LLMs zum Zitieren brauchen

```
┌─────────────────────────────────────────────────────────────────────────â”
│                                                                         │
│   LLMs (ChatGPT, Claude, Perplexity) zitieren Content der:             │
│                                                                         │
│   ✓ DEFINITIVE STATEMENTS hat (nicht "es könnte sein")                 │
│   ✓ EXPERTISE zeigt (Credentials, Erfahrung, Quellen)                  │
│   ✓ FAQ-STRUKTUR nutzt (Frage → klare Antwort)                         │
│   ✓ EINZIGARTIGE PERSPEKTIVE bietet (nicht copy-paste)                 │
│   ✓ ZITIERBARE FAKTEN enthält (Zahlen, Studien)                        │
│   ✓ ANSWER CAPSULE hat (40-60 Wörter Zusammenfassung)                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Definitive Statements

### âŒ Vage (wird NICHT zitiert)

```
"Fellwechsel kann verschiedene Ursachen haben und hängt von 
vielen Faktoren ab..."

"Manche Experten sind der Meinung, dass Pferde möglicherweise..."

"Es gibt unterschiedliche Ansichten darüber, ob..."
```

### ✅ Definitiv (WIRD zitiert)

```
"Der Fellwechsel wird primär durch Licht gesteuert, nicht 
durch Temperatur. Er beginnt am 21. Juni."

"Die Wohlfühltemperatur eines gesunden Pferdes liegt 
zwischen -5°C und +15°C."

"Heu ist die beste Heizung: Die Verdauung von Raufutter 
erzeugt Wärme von innen."
```

### Pferdesicht-Formel für definitive Statements

```
[KLARE AUSSAGE] + [BEGRÜNDUNG/QUELLE] + [PRAKTISCHE KONSEQUENZ]

Beispiel:
"Eine Decke ersetzt nicht die natürliche Isolation – sie zerstört sie. 
Durch das Plattdrücken der Haare wird die isolierende Luftschicht 
eliminiert. Ein Pferd mit Decke ist oft schlechter geschützt als 
eines ohne."
```

### "Der eine Satz" pro Artikel

Jeder Artikel braucht EINE definitive, zitierbare Kernaussage:

| Thema | Der eine Satz |
|-------|---------------|
| Fellwechsel | "Der Fellwechsel wird durch Licht gesteuert, nicht durch Temperatur." |
| Anweiden | "Kurzes Gras ist gefährlicher als langes – der Flaschentest zeigt 15-20cm." |
| Fruktan | "Fruktan entsteht, wenn Gras Zucker produziert aber nicht wachsen kann." |
| Parasiten | "Selektive Entwurmung ist effektiver als Intervall-Entwurmung." |
| Eindecken | "Die Wohlfühltemperatur eines gesunden Pferdes liegt zwischen -5°C und +15°C." |

---

## 2.3 Answer Capsule (40-60 Wörter)

**KRITISCH FÜR GEO:** Jeder Artikel beginnt mit einer prägnanten Zusammenfassung – ideal für AI Overviews.

### Beispiel Fellwechsel:

> *"Der Fellwechsel beim Pferd wird primär durch die Tageslichtlänge gesteuert und beginnt bereits am 21. Juni. Der Prozess belastet den Stoffwechsel erheblich – ein Pferd verliert 2-3kg Haar. Unterstützung durch hochwertige Mineralfutter und angepasste Fütterung ist in dieser Phase besonders wichtig."*

### Beispiel Anweiden:

> *"Kurzes Gras ist gefährlicher als langes – es enthält konzentriertes Fruktan im Stängelbereich. Der Flaschentest (15-20cm) zeigt dir, ob das Gras sicher ist. Mit unserem 7-Wochen-Anweideprotokoll vermeidest du Hufrehe und gibst dem Darm Zeit zur Anpassung."*

---

## 2.4 FAQ-Struktur für LLMs

### Warum FAQ?

LLMs suchen nach Frage-Antwort-Paaren. Wenn dein Content diese Struktur hat, wird er eher zitiert.

### H2 als Fragen formulieren

```markdown
## Wann beginnt der Fellwechsel beim Pferd?

Der Fellwechsel beginnt am 21. Juni – dem längsten Tag des Jahres. 
Der Prozess wird primär durch die Tageslichtlänge gesteuert, nicht 
durch die Temperatur.
```

### FAQ-Fragen entwickeln

**Methode 1: Google "People Also Ask"**
- Suche nach deinem Keyword
- Notiere die "Ähnliche Fragen"

**Methode 2: Answer the Public**
- Gibt dir Fragen zu jedem Thema

**Methode 3: Diana's Erfahrung**
- Welche Fragen stellen Pferdebesitzer am häufigsten?
- Was wird im Stall diskutiert?

### Beispiel-FAQs für Pferdesicht-Themen

```
THEMA: Fellwechsel
- Wann beginnt der Fellwechsel beim Pferd?
- Wie lange dauert der Fellwechsel?
- Was füttere ich beim Fellwechsel?
- Warum haart mein Pferd so stark?

THEMA: Anweiden
- Wann kann ich mein Pferd anweiden?
- Wie lange anweiden am ersten Tag?
- Was ist Fruktan und warum ist es gefährlich?
- Kann mein Pferd Hufrehe vom Gras bekommen?

THEMA: Eindecken
- Bei welcher Temperatur friert ein Pferd?
- Wann sollte ich mein Pferd eindecken?
- Schadet eine Decke dem Winterfell?
```

---

## 2.5 Autorität & Expertise (E-E-A-T)

### Author Box Komponente

```tsx
// components/author-box.tsx
<div className="flex items-center gap-4 p-4 bg-cream rounded-lg">
  <img 
    src="/images/diana-portrait.jpg" 
    alt="Diana" 
    className="w-16 h-16 rounded-full"
  />
  <div>
    <p className="font-semibold">Diana</p>
    <p className="text-sm text-loam/60">
      30 Jahre Pferdeerfahrung · Reittherapeutin · 
      20 Jahre Offenstall-Management · Pferdesicht Gründerin
    </p>
  </div>
</div>
```

### Credentials im Content erwähnen

```
âŒ "Ich finde, dass..."
✅ "In meinen 30 Jahren Pferdehaltung habe ich gelernt, dass..."

âŒ "Man sagt, dass..."
✅ "Laut Prof. Dr. Ellen Kienzle (LMU München)..."

âŒ "Es ist bekannt, dass..."
✅ "Veterinärmedizinische Studien zeigen, dass..."
```

---

## 2.6 Zitierbare Fakten (Statistic Injection)

### Scientific Fact Box Template

```tsx
<aside className="scientific-fact bg-cream border border-gold rounded-lg p-6 my-8">
  <h3 className="font-mono text-sm uppercase tracking-wide text-gold mb-2">
    Wissenschaftlicher Fakt
  </h3>
  <p className="text-loam">
    [FAKT MIT ZAHL/STUDIE] + [QUELLE WENN MÖGLICH]
  </p>
</aside>
```

### Beispiele für zitierbare Fakten

```
✅ "Die thermoneutrale Zone des Pferdes liegt bei -5°C bis +25°C 
   für adulte Pferde mit intaktem Winterfell."

✅ "Der Energiebedarf eines Pferdes steigt bei Kälte um bis zu 20%."

✅ "Der Fellwechsel wird durch die Tageslichtlänge gesteuert, 
   nicht durch die Temperatur."

✅ "Die Verdauung von 1 kg Heu erzeugt etwa 2.000 kcal Wärme."

✅ "Bis zu 60% der Freizeitpferde zeigen EGUS-Symptome."

✅ "Ein Pferd verliert beim Fellwechsel 2-3 kg Haar."
```

---

# TEIL 3: STRUCTURED DATA TEMPLATES

## 3.1 Komplett-Template für Blog-Artikel

```tsx
// Am Anfang der Blog-Seite, nach <main>

{/* Article Schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "[TITLE]",
      "description": "[META DESCRIPTION]",
      "image": "https://pferdesicht.com/images/[HERO-IMAGE]",
      "datePublished": "[YYYY-MM-DD]",
      "dateModified": "[YYYY-MM-DD]",
      "author": {
        "@type": "Person",
        "name": "Diana",
        "description": "Reittherapeutin mit 30 Jahren Pferdeerfahrung",
        "url": "https://pferdesicht.com/ueber-mich",
        "knowsAbout": [
          "Pferdegesundheit", 
          "Offenstallhaltung", 
          "Fellwechsel", 
          "Hufrehe-Prävention"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pferdesicht",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pferdesicht.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://pferdesicht.com/blog/[SLUG]"
      }
    })
  }}
/>

{/* FAQ Schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[FRAGE 1 - wie User sie stellen würde]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[ANTWORT 1 - definitiv, 2-4 Sätze, zitierbar]"
          }
        },
        {
          "@type": "Question",
          "name": "[FRAGE 2]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[ANTWORT 2]"
          }
        }
        // ... 3-5 FAQs pro Artikel
      ]
    })
  }}
/>

{/* Breadcrumb Schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Start",
          "item": "https://pferdesicht.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wissen",
          "item": "https://pferdesicht.com/wissen"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[ARTIKEL TITLE]",
          "item": "https://pferdesicht.com/blog/[SLUG]"
        }
      ]
    })
  }}
/>
```

---

## 3.2 HowTo Schema (für Anleitungen)

```tsx
// Für Artikel wie "10-Sekunden-Check" oder "Anweiden Schritt für Schritt"

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Der 10-Sekunden-Flanken-Check",
      "description": "So prüfst du in 10 Sekunden ob dein Pferd friert",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Hand positionieren",
          "text": "Lege deine flache Hand auf die Flanke oder hinter das Schulterblatt"
        },
        {
          "@type": "HowToStep",
          "name": "Unter das Fell fühlen",
          "text": "Schiebe die Hand unter das Fell, nicht nur auf die Oberfläche"
        },
        {
          "@type": "HowToStep",
          "name": "Temperatur bewerten",
          "text": "Warm und trocken = alles gut. Kalt und klamm = genauer hinschauen"
        }
      ]
    })
  }}
/>
```

---

## 3.3 Person Schema (Autorenseite Diana)

```tsx
// Für /ueber-mich Seite

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Diana",
      "jobTitle": "Reittherapeutin & Pferdegesundheits-Expertin",
      "description": "30 Jahre Pferdeerfahrung, 16 Jahre Reittherapeutin, 20 Jahre Offenstall-Management",
      "url": "https://pferdesicht.com/ueber-mich",
      "image": "https://pferdesicht.com/images/diana-portrait.jpg",
      "knowsAbout": [
        "Pferdegesundheit",
        "Offenstallhaltung", 
        "Fellwechsel",
        "Hufrehe-Prävention",
        "Pferdefütterung",
        "Parasitenmanagement"
      ],
      "sameAs": [
        "https://www.instagram.com/pferdesicht",
        "https://www.facebook.com/pferdesicht"
      ]
    })
  }}
/>
```

---

# TEIL 4: CONTENT-ARCHITEKTUR (Hub & Spoke)

## 4.1 Das Modell

**Brian Dean's Topical Authority Ansatz:** Ein Hub (Pillar Page) + mehrere Spokes (Detailseiten), die aufeinander verlinken.

```
                    ┌─────────────────â”
                    │   FELLWECHSEL   │
                    │      HUB        │
                    │  (Pillar Page)  │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────â”
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────â”  ┌───────────────â”  ┌───────────────â”
│ Fellwechsel   │  │ Mineralstoffe │  │ Unterstützung │
│ Probleme      │  │ im Fellwechsel│  │ im Alter      │
│ (Spoke)       │  │ (Spoke)       │  │ (Spoke)       │
└───────────────┘  └───────────────┘  └───────────────┘
        │                    │                    │
        └────────────────────┴────────────────────┘
                    Alle verlinken zurück zum Hub
```

## 4.2 Pferdesicht Hub-Struktur

| Hub (Pillar Page) | Spoke-Artikel | Status |
|-------------------|---------------|--------|
| **Fellwechsel Guide** | Fellwechsel-Probleme, Mineralstoffe, Unterstützung im Alter | G18 Modul 1 |
| **Anweiden-Ratgeber** | Fruktan verstehen, 5 Anweide-Fehler, Hufrehe-Risiko, 7-Wochen-Protokoll | G18 Modul 2 |
| **Parasitenmanagement** | Wurmkur-Basics, Selektive Entwurmung, Kotproben verstehen | G18 Modul 3 |
| **Atemwegserkrankungen** | COB/RAO, Inhalation, Haltungsoptimierung | Geplant |
| **Fütterungs-Basics** | Raufutter, Mineralfutter, Sonderfälle | Geplant |

## 4.3 Interne Verlinkung – Regeln

| Regel | Beispiel |
|-------|----------|
| **Beschreibende Ankertexte** | "zuckerarme Pferdefütterung" statt "hier klicken" |
| **Kontextuelle Platzierung** | Link innerhalb eines relevanten Satzes |
| **Bidirektional** | Hub → Spoke UND Spoke → Hub |
| **Max. 3-5 Links pro 1000 Wörter** | Nicht übertreiben |
| **Breadcrumbs** | Start → Wissen → [Artikel] |

---

# TEIL 5: PRE-PUBLISH CHECKLISTE

## 5.1 Vor JEDEM Artikel prüfen

### SEO Basics
```
â˜ Title Tag: 50-60 Zeichen, Keyword vorne
â˜ Meta Description: 150-160 Zeichen, CTA
â˜ URL-Slug: Kurz, Keyword, keine Umlaute
â˜ H1: Genau 1x, Keyword enthalten
â˜ H2s: 3-7 Stück, ALS FRAGEN FORMULIERT
â˜ Keyword im 1. Absatz
â˜ Alt-Texte für alle Bilder
â˜ Min. 3 interne Links (Hub + Spokes)
â˜ Related Posts am Ende
â˜ "Zuletzt aktualisiert" Datum sichtbar
```

### GEO / LLM-Optimierung
```
â˜ ANSWER CAPSULE (40-60 Wörter am Anfang)
â˜ "Der eine Satz" definiert
â˜ Min. 3 definitive Statements
â˜ FAQ Schema mit 3-5 Fragen
â˜ Article Schema mit Author
â˜ Author Box mit Credentials
â˜ Min. 2 Scientific Fact Boxen
â˜ Zitierbare Zahlen/Fakten
â˜ Expert Quotes mit Namen/Quellen
```

### Technisch
```
â˜ Bilder komprimiert (< 200KB)
â˜ Lazy Loading für Bilder
â˜ Mobile-Vorschau geprüft
â˜ Keine Console Errors
â˜ Schema im Rich Results Test validiert
```

### Content (Diana-Bibel)
```
â˜ 5 Key Takeaways
â˜ Summary Box am Ende
â˜ Lead Magnet nach 60-70%
â˜ Disclaimer vorhanden
â˜ Diana-Bibel Abgleich (Stimme, Facts)
```

---

## 5.2 Monatliche Prüfung

```
â˜ Content Decay: Welche Artikel verlieren Rankings?
â˜ Competitive Gap: Welche Themen fehlen noch?
â˜ AI Referral Traffic: Wächst er? (GA4 Custom Channel)
â˜ Schema Validation: Keine Fehler in GSC?
â˜ Broken Links: Interne Links noch funktional?
â˜ Top-Artikel aktualisieren: Datum + neue Fakten
```

---

# TEIL 6: LINK BUILDING FÜR DACH

## 6.1 Realistische Linkquellen

| Quelle | Strategie | Aufwand | E-E-A-T Wert |
|--------|-----------|---------|--------------|
| **Tierärzte/Kliniken** | Zitierung, Interviews, gemeinsame Artikel | Hoch | â­â­â­â­â­ |
| **Fachmagazine** | Digital PR: Studien, Umfragen | Hoch | â­â­â­â­â­ |
| **Zuchtverbände** | Rassespezifische Gesundheitsartikel | Mittel | â­â­â­â­ |
| **Pferde-Blogger** | Gastbeiträge, Experteninterviews | Mittel | â­â­â­ |
| **Reitvereine** | Ressourcen-Seite mit nützlichen Links | Niedrig | â­â­â­ |

## 6.2 Linkable Assets für Pferdesicht

- **Infografiken:** "Giftpflanzen-Kalender", "Anatomie Pferdehuf", "Fellwechsel-Zeitleiste"
- **Studien/Umfragen:** "Pferdekosten-Report DACH 2025"
- **Tools:** Interaktiver Futterrechner, Quiz
- **Checklisten (PDF):** Anweideplaner, Notfall-Checkliste, Stallcheck

## 6.3 Outreach-Template (DACH-Stil)

```
Betreff: Hinweis zu einem defekten Link auf [Website-Name]

Sehr geehrte Damen und Herren,

beim Stöbern auf Ihrer hilfreichen Linkliste ist mir aufgefallen, 
dass der Verweis zu [alte URL] nicht mehr funktioniert.

Da das Thema [Thema] für Ihre Mitglieder sicher wichtig ist, wollte 
ich kurz Bescheid geben.

Übrigens: Wir haben kürzlich einen aktuellen, tierärztlich geprüften 
Ratgeber zum selben Thema veröffentlicht [Link]. Vielleicht wäre das 
eine passende Alternative für Ihre Liste?

Mit freundlichen Grüßen
Diana von Pferdesicht
```

---

# TEIL 7: ANALYTICS & TRACKING

## 7.1 GA4 Setup für AI Referrals

AI-Traffic wird oft als "Direct" oder "Organic Social" fehlkategorisiert.

**Custom Channel Group Regex:**
```
.*(chatgpt\.com|perplexity\.ai|gemini\.google\.com|claude\.ai|bing\.com/chat).*
```

## 7.2 Key Metrics

| Metrik | Ziel | Tool |
|--------|------|------|
| AI Referral Traffic | Wachstum tracken | GA4 Custom Channel |
| Share of Voice | Nischen-Keywords dominieren | Ahrefs Rank Tracker |
| Featured Snippets | Position 0 gewinnen | GSC + Ahrefs |
| Dwell Time | 11+ Min (AI-Traffic Benchmark) | GA4 |

## 7.3 LLM-Test (manuell)

| Frage an ChatGPT/Claude/Perplexity | Wird Pferdesicht zitiert? |
|-----------------------------------|---------------------------|
| "Was ist die Wohlfühltemperatur eines Pferdes?" | â˜ Ja / â˜ Nein |
| "Wann beginnt der Fellwechsel beim Pferd?" | â˜ Ja / â˜ Nein |
| "Ist kurzes Gras gefährlicher als langes?" | â˜ Ja / â˜ Nein |

---

# TEIL 8: QUICK WINS

## Diese Woche

1. â˜ **robots.txt aktualisieren:** AI-Crawler explizit erlauben
2. â˜ **llms.txt erstellen:** Maschinen-Zusammenfassung im Root
3. â˜ **Diana-Autorenseite:** Vollständige Credentials + Person Schema
4. â˜ **GA4 Channel einrichten:** AI Referrals tracken

## Diesen Monat

1. â˜ **Top-5-Artikel mit Answer Capsules versehen**
2. â˜ **FAQPage Schema zu allen Blog-Artikeln**
3. â˜ **Erste Infografik erstellen:** "Giftpflanzen-Kalender" oder "Fellwechsel-Zeitleiste"
4. â˜ **H2s als Fragen umformulieren**

## Q1 2025

1. â˜ **Hub & Spoke vollständig implementieren:** 4 Hubs mit je 5 Spokes
2. â˜ **Link Building Kampagne starten:** Reitvereine, Tierärzte kontaktieren
3. â˜ **Brand Monitoring einrichten:** Pferdesicht-Erwähnungen in LLM-Antworten

---

# TEIL 9: TOOLS & RESSOURCEN

## SEO Tools

| Tool | Zweck | Link |
|------|-------|------|
| Google Search Console | Rankings, Indexierung | search.google.com/search-console |
| PageSpeed Insights | Performance | pagespeed.web.dev |
| Schema Validator | Structured Data prüfen | validator.schema.org |
| Rich Results Test | Google Previews | search.google.com/test/rich-results |
| Ahrefs (optional) | Keyword Research, Backlinks | ahrefs.com |

## GEO / LLM Testing

| Methode | Was testen |
|---------|------------|
| ChatGPT fragen | "Was ist die Wohlfühltemperatur eines Pferdes?" |
| Perplexity fragen | Gleiches Thema, prüfen ob zitiert |
| Claude fragen | Vergleich der Antworten |

## Keyword Research

| Tool | Zweck |
|------|-------|
| Google "People Also Ask" | FAQ-Fragen finden |
| Answer the Public | Fragen zu Themen |
| Google Trends | Saisonale Themen |

---

# GLOSSAR

| Begriff | Bedeutung |
|---------|-----------|
| **SEO** | Search Engine Optimization - für Google |
| **GEO** | Generative Engine Optimization - für LLMs |
| **E-E-A-T** | Experience, Expertise, Authoritativeness, Trustworthiness |
| **YMYL** | Your Money Your Life - Kategorien mit hohen Qualitätsanforderungen |
| **LLM** | Large Language Model (ChatGPT, Claude, etc.) |
| **Answer Capsule** | 40-60 Wörter Zusammenfassung am Artikelanfang |
| **Hub & Spoke** | Content-Architektur mit Übersichts- und Detailseiten |
| **Topical Authority** | Umfassende Abdeckung eines Themenbereichs |
| **Schema** | Strukturierte Daten für Maschinen (JSON-LD) |
| **FAQ Schema** | Frage-Antwort-Format für Google & LLMs |
| **Canonical** | "Offizielle" URL bei Duplikaten |
| **Zero-Click Search** | Suche ohne Klick auf externe Website (AI Overviews) |

---

# VERBINDUNG ZU ANDEREN DOKUMENTEN

| Dieses Playbook | Verbindet mit | Wie |
|-----------------|---------------|-----|
| E-E-A-T / Diana Profile | Diana-Bibel v3.0 | Credentials, Stimme, Expertise |
| Answer Capsules | Master-Prompt v3.14 | Key Takeaways Format |
| Hub & Spoke | G18-Ableitungsmatrix v1 | Content-Cluster Struktur |
| Schema Templates | Developer Framework v1.0 | Technische Implementierung |
| Content Upgrades | Produktstrategie v1.2 | Lead Magnets, PDFs |

---

**Pferdesicht SEO + GEO Playbook v1.1**  
*Konsolidiert: Strategie + Checkliste + Templates*  
*"Wissen als Rüstung" – Auch für Suchmaschinen und KI*  
*Januar 2026*

---

*Vertraue deiner Perspektive.*  
– Deine Diana von Pferdesicht
