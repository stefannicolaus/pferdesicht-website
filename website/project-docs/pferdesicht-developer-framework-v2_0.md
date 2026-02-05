# PFERDESICHT DEVELOPER FRAMEWORK v2.0
## Next.js 15 + Vercel + Tailwind CSS + Claude Code Best Practices

---

**Version:** 2.0
**Erstellt:** 28.01.2026
**Aktualisiert:** 31.01.2026
**Basis:** 
- Gemini Deep Research: Next.js 14/15 & Vercel Best Practices
- Gemini Deep Research: Core Web Vitals Optimierung 2025
- Gemini Deep Research: React & Tailwind CSS Best Practices
- Anthropic Claude Code Best Practices
**Ziel:** Konsistente, performante, wartbare Codebasis für Pferdesicht

---

# QUICK REFERENCE CARDS

## Card 1: Server vs. Client Components

```
┌─────────────────────────────────────────────────────────────────â”
│                SERVER COMPONENT (Standard)                      │
│  ─────────────────────────────────────────                      │
│  ✅ Datenabrufe (fetch, Datenbank)                              │
│  ✅ Sensible Logik (API Keys, Secrets)                          │
│  ✅ Statische Inhalte (Blog, Text, Bilder)                      │
│  ✅ Layouts, Navigation, Footer                                 │
│  ✅ MDX Content                                                 │
│                                                                 │
│  → KEIN JavaScript an Client gesendet!                          │
├─────────────────────────────────────────────────────────────────┤
│                CLIENT COMPONENT ("use client")                  │
│  ─────────────────────────────────────────                      │
│  ⚡ useState, useEffect, useRef                                 │
│  ⚡ Event Handler (onClick, onChange)                           │
│  ⚡ Browser APIs (window, localStorage)                         │
│  ⚡ Interaktive UI (Formulare, Quiz, Toggle)                    │
│                                                                 │
│  → So KLEIN wie möglich halten!                                 │
│  → An die "Blätter" des Komponentenbaums schieben               │
└─────────────────────────────────────────────────────────────────┘
```

## Card 2: Core Web Vitals Zielwerte

| Metrik | Gut (Grün) | Verbesserungswürdig | Schlecht |
|--------|------------|---------------------|----------|
| **LCP** | ≤ 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** | ≤ 200ms | 200ms - 500ms | > 500ms |
| **CLS** | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |

**Pferdesicht Ziel:** Alle Metriken GRÜN auf Mobile UND Desktop

## Card 3: Datei-Konventionen im App Router

| Datei | Zweck |
|-------|-------|
| `page.tsx` | Die Route selbst |
| `layout.tsx` | Persistentes Layout (Header, Footer) |
| `loading.tsx` | Suspense Fallback / Skeleton |
| `error.tsx` | Error Boundary (muss Client Component sein!) |
| `not-found.tsx` | 404 Seite |

---

# TEIL 1: PROJEKT-STRUKTUR

## Empfohlene Ordnerstruktur für Pferdesicht

```
pferdesicht/
├── app/                          # App Router (Routing)
│   ├── (marketing)/              # Route Group: Landing Pages
│   │   ├── page.tsx              # Homepage
│   │   └── ueber-diana/
│   │       └── page.tsx
│   ├── (blog)/                   # Route Group: Blog
│   │   ├── layout.tsx            # Blog-spezifisches Layout
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── (produkte)/               # Route Group: Produkte
│   │   └── g18-guide/
│   │       └── page.tsx
│   ├── api/                      # API Routes (nur wenn nötig)
│   │   └── newsletter/
│   │       └── route.ts
│   ├── layout.tsx                # Root Layout
│   ├── globals.css               # Tailwind + Global Styles
│   └── not-found.tsx             # 404
│
├── components/                   # Wiederverwendbare Komponenten
│   ├── ui/                       # Atomare UI (Button, Input, Badge)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── card.tsx
│   ├── layout/                   # Layout-Komponenten
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   └── features/                 # Feature-spezifisch
│       ├── newsletter-form.tsx   # Client Component
│       ├── quiz/                 # Quiz-Komponenten
│       └── blog/
│           ├── post-card.tsx
│           └── mdx-components.tsx
│
├── lib/                          # Utilities & Helpers
│   ├── utils.ts                  # Allgemeine Hilfsfunktionen
│   ├── cn.ts                     # className Merger (clsx + twMerge)
│   └── constants.ts              # Konstanten
│
├── content/                      # MDX Blog Posts
│   └── blog/
│       └── fellwechsel-guide.mdx
│
├── public/                       # Statische Assets
│   ├── images/
│   └── fonts/                    # Self-hosted Fonts (DSGVO!)
│
├── styles/                       # Zusätzliche Styles
│   └── mdx.css                   # MDX-spezifische Styles
│
├── types/                        # TypeScript Types
│   └── index.ts
│
├── next.config.ts                # Next.js Konfiguration
├── tailwind.config.ts            # Tailwind Konfiguration
├── tsconfig.json                 # TypeScript Konfiguration
└── package.json
```

## Route Groups erklärt

```
(marketing)/     → URL: /
(blog)/          → URL: /blog/...
(produkte)/      → URL: /g18-guide

Die Klammern () beeinflussen NICHT die URL!
Sie ermöglichen unterschiedliche Layouts pro Bereich.
```

---

# TEIL 2: KOMPONENTEN-PATTERNS

## Pattern 1: Client-Insel in Server Component

```tsx
// app/(marketing)/page.tsx (SERVER COMPONENT)
import { HeroSection } from '@/components/features/hero-section'
import { NewsletterForm } from '@/components/features/newsletter-form'

export default function HomePage() {
  return (
    <main>
      {/* Server Component - kein JS */}
      <HeroSection />
      
      {/* Client-Insel - nur diese Komponente wird hydriert */}
      <NewsletterForm />
      
      {/* Server Component - kein JS */}
      <TestimonialsSection />
    </main>
  )
}
```

```tsx
// components/features/newsletter-form.tsx
"use client"  // â† NUR hier!

import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  
  // Client-Logik hier...
}
```

## Pattern 2: Composition mit Children

```tsx
// SCHLECHT âŒ - Props durchreichen
function Card({ title, description, image, buttonText, onClick }) {
  return (
    <div>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

// GUT ✅ - Composition
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      {children}
    </div>
  )
}

function CardHeader({ children }) { return <div className="mb-4">{children}</div> }
function CardTitle({ children }) { return <h3 className="text-xl font-semibold">{children}</h3> }
function CardContent({ children }) { return <div>{children}</div> }

// Verwendung:
<Card>
  <CardHeader>
    <CardTitle>Fellwechsel Guide</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Alles was du wissen musst...</p>
  </CardContent>
</Card>
```

## Pattern 3: Custom Hooks für Logik-Extraktion

```tsx
// hooks/use-quiz.ts
"use client"

import { useState, useCallback } from 'react'

interface QuizState {
  currentQuestion: number
  answers: Record<number, string>
  isComplete: boolean
}

export function useQuiz(totalQuestions: number) {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isComplete: false,
  })

  const submitAnswer = useCallback((answer: string) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestion]: answer },
      currentQuestion: prev.currentQuestion + 1,
      isComplete: prev.currentQuestion + 1 >= totalQuestions,
    }))
  }, [totalQuestions])

  const reset = useCallback(() => {
    setState({
      currentQuestion: 0,
      answers: {},
      isComplete: false,
    })
  }, [])

  return { ...state, submitAnswer, reset }
}
```

---

# TEIL 3: PERFORMANCE-OPTIMIERUNG

## Bilder: next/image richtig nutzen

```tsx
// ✅ HERO-BILD (Above the Fold) - LCP kritisch!
import Image from 'next/image'

<Image
  src="/images/hero-pferd.jpg"
  alt="Diana mit Pferd im Offenstall"
  width={1200}
  height={600}
  priority                    // â† Sofort laden, nicht lazy!
  sizes="100vw"               // â† Viewport-basierte Größe
  className="object-cover"
/>

// ✅ BLOG-BILD (Below the Fold)
<Image
  src="/images/fellwechsel.jpg"
  alt="Pferd im Fellwechsel"
  width={800}
  height={450}
  // KEIN priority - lazy loading ist Standard
  sizes="(max-width: 768px) 100vw, 800px"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."  // Oder generated
/>
```

### Bilder Checkliste

| Aspekt | Regel |
|--------|-------|
| **Format** | Next.js liefert automatisch WebP/AVIF |
| **priority** | NUR für Hero/LCP-Bilder |
| **sizes** | IMMER angeben für responsive Bilder |
| **width/height** | IMMER angeben (verhindert CLS) |
| **Alt-Text** | IMMER beschreibend (A11y + SEO) |

## Fonts: next/font für DSGVO-Konformität

```tsx
// app/layout.tsx
import { EB_Garamond, Poppins } from 'next/font/google'

// Fonts werden LOKAL gehostet - keine Google-Anfragen!
const garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',           // Verhindert FOIT
  variable: '--font-garamond',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${garamond.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* tailwind.config.ts */
theme: {
  extend: {
    fontFamily: {
      serif: ['var(--font-garamond)', 'Georgia', 'serif'],
      sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
    },
  },
}
```

## Third-Party Scripts (Analytics, etc.)

```tsx
// SCHLECHT âŒ - Blockiert Rendering
<script src="https://analytics.example.com/script.js" />

// GUT ✅ - Nach Interaktion laden
import Script from 'next/script'

<Script
  src="https://analytics.example.com/script.js"
  strategy="lazyOnload"      // Lädt NACH allem anderen
/>

// ODER: afterInteractive für wichtigere Scripts
<Script
  src="https://important.example.com/script.js"
  strategy="afterInteractive"
/>
```

### Script-Strategien

| Strategy | Wann laden | Use Case |
|----------|------------|----------|
| `beforeInteractive` | Vor Hydration | Kritische Polyfills (selten!) |
| `afterInteractive` | Nach Hydration | Analytics, Chat-Widgets |
| `lazyOnload` | Nach allem | Nicht-kritische Tools |

---

# TEIL 4: RENDERING-STRATEGIEN

## Entscheidungsmatrix

| Content-Typ | Strategie | Warum |
|-------------|-----------|-------|
| **Blog Posts** | Static (SSG) | Ändert sich selten, maximale Performance |
| **Landing Pages** | Static (SSG) | Schnellste Ladezeit |
| **Quiz-Ergebnis** | Dynamic (Server) | Personalisiert |
| **User Dashboard** | Dynamic (Server) | Nutzer-spezifisch |

## Static Generation (SSG) für Blog

```tsx
// app/(blog)/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/mdx'

// Generiert alle Seiten zur Build-Zeit
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Metadata für SEO
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)
  return <article>{/* ... */}</article>
}
```

## Incremental Static Regeneration (ISR)

```tsx
// Für Inhalte die sich gelegentlich ändern
export const revalidate = 3600  // Re-generiere alle 60 Minuten

// ODER on-demand über API Route:
// POST /api/revalidate?path=/blog/fellwechsel
```

---

# TEIL 5: TAILWIND CSS PATTERNS

## Design Tokens (Pferdesicht Brand)

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Farben */
  --color-loam: #2c2a25;
  --color-sage: #78866b;
  --color-gold: #c8a476;
  --color-cream: #f5f2ed;
  --color-bark: #4a4539;
  
  /* Spacing Scale */
  --spacing-section: 5rem;
  --spacing-component: 2rem;
  
  /* Border Radius */
  --radius-soft: 0.5rem;
  --radius-card: 1rem;
}
```

## Component Variants mit CVA

```tsx
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  // Base styles (immer angewendet)
  "inline-flex items-center justify-center rounded-soft font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-sage text-cream hover:bg-sage/90",
        secondary: "bg-cream text-loam border border-loam hover:bg-loam hover:text-cream",
        ghost: "hover:bg-cream/50",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

## cn() Utility für Klassen-Merging

```tsx
// lib/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Verwendung:
<div className={cn(
  "base-styles",
  isActive && "active-styles",
  className  // Props überschreiben
)} />
```

## Responsive Design

```tsx
// Mobile-First: Basisstyles für Mobile, dann aufbauen
<div className="
  flex flex-col gap-4           // Mobile: Stack
  md:flex-row md:gap-8          // Tablet: Row
  lg:gap-12                     // Desktop: Mehr Abstand
">
  {/* Content */}
</div>

// Container mit max-width
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

---

# TEIL 6: MDX BLOG-SYSTEM

## MDX Components Override

```tsx
// components/features/blog/mdx-components.tsx
import Image from 'next/image'
import Link from 'next/link'
import { InfoBox, WarningBox } from '@/components/ui/callout'

export const mdxComponents = {
  // Standard-Elemente überschreiben
  h2: (props) => (
    <h2 className="mt-12 mb-4 text-2xl font-serif text-loam" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-serif text-loam" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-bark" {...props} />
  ),
  a: (props) => (
    <Link className="text-sage underline hover:text-sage/80" {...props} />
  ),
  img: (props) => (
    <Image
      className="rounded-card my-8"
      width={800}
      height={450}
      {...props}
    />
  ),
  
  // Custom Components für MDX
  InfoBox,
  WarningBox,
  
  // Callout für wichtige Infos
  Callout: ({ children, type = 'info' }) => (
    <div className={cn(
      "my-6 rounded-card p-4 border-l-4",
      type === 'info' && "bg-sage/10 border-sage",
      type === 'warning' && "bg-gold/10 border-gold",
    )}>
      {children}
    </div>
  ),
}
```

## MDX in Blog-Posts verwenden

```mdx
---
title: "Fellwechsel: Was du wissen musst"
date: "2026-01-15"
excerpt: "Alles über den Fellwechsel im Frühjahr"
image: "/images/blog/fellwechsel.jpg"
---

# Fellwechsel: Was du wissen musst

Der Fellwechsel beginnt schon im Winter...

<Callout type="info">
  **Wichtig:** Der Fellwechsel wird durch Licht gesteuert, nicht durch Temperatur!
</Callout>

## Die häufigsten Fehler

1. Zu früh eindecken
2. Mineralstoffmangel ignorieren
3. ...

<WarningBox>
  Bei verzögertem Fellwechsel im Mai/Juni: Tierarzt konsultieren!
</WarningBox>
```

---

# TEIL 7: FORMULARE & SERVER ACTIONS

## Newsletter-Formular mit Server Action

```tsx
// app/actions/newsletter.ts
"use server"

import { z } from 'zod'

const schema = z.object({
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein"),
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben").optional(),
})

export async function subscribeToNewsletter(formData: FormData) {
  const result = schema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
  })
  
  if (!result.success) {
    return { error: result.error.flatten().fieldErrors }
  }
  
  // E-Mail an Newsletter-Provider senden
  // await addToMailingList(result.data)
  
  return { success: true }
}
```

```tsx
// components/features/newsletter-form.tsx
"use client"

import { useFormStatus, useFormState } from 'react-dom'
import { subscribeToNewsletter } from '@/app/actions/newsletter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Wird gesendet...' : 'Anmelden'}
    </Button>
  )
}

export function NewsletterForm() {
  const [state, formAction] = useFormState(subscribeToNewsletter, null)
  
  if (state?.success) {
    return <p className="text-sage">Danke für deine Anmeldung! ðŸ´</p>
  }
  
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Input
        type="email"
        name="email"
        placeholder="deine@email.de"
        required
      />
      {state?.error?.email && (
        <p className="text-red-500 text-sm">{state.error.email}</p>
      )}
      <SubmitButton />
    </form>
  )
}
```

---

# TEIL 8: SEO & METADATA

## Metadata API

```tsx
// app/layout.tsx - Globale Defaults
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pferdesicht.com'),
  title: {
    default: 'Pferdesicht | Evidenzbasierte Pferdegesundheit',
    template: '%s | Pferdesicht',  // Für Unterseiten
  },
  description: 'Wissen als Rüstung: Evidenzbasierte Informationen für verantwortungsvolle Pferdebesitzer.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Pferdesicht',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

```tsx
// app/(blog)/[slug]/page.tsx - Dynamische Metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  return {
    title: post.title,  // Wird zu "Fellwechsel Guide | Pferdesicht"
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
  }
}
```

## Structured Data (JSON-LD)

```tsx
// components/seo/article-schema.tsx
export function ArticleSchema({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Diana',
      url: 'https://pferdesicht.com/ueber-diana',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pferdesicht',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pferdesicht.com/logo.png',
      },
    },
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

# TEIL 9: ACCESSIBILITY (A11Y)

## Checkliste für barrierefreie Komponenten

| Aspekt | Regel |
|--------|-------|
| **Semantisches HTML** | `<header>`, `<main>`, `<article>`, `<footer>` nutzen |
| **Überschriften** | Nur eine `<h1>` pro Seite, keine Ebenen überspringen |
| **Links** | Beschreibender Text, nicht "hier klicken" |
| **Bilder** | IMMER alt-Text (außer dekorativ: `alt=""`) |
| **Formulare** | Labels für alle Inputs, Fehlermeldungen verknüpft |
| **Fokus** | Sichtbarer Focus-Ring (`focus-visible:ring-2`) |
| **Kontrast** | Mindestens 4.5:1 für Text |

## Skip-to-Content Link

```tsx
// components/layout/skip-link.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:absolute focus:top-4 focus:left-4
        focus:z-50 focus:bg-loam focus:text-cream
        focus:px-4 focus:py-2 focus:rounded
      "
    >
      Zum Hauptinhalt springen
    </a>
  )
}

// In layout.tsx:
<body>
  <SkipLink />
  <Header />
  <main id="main-content">
    {children}
  </main>
</body>
```

## Radix UI für komplexe Komponenten

```tsx
// Für Modal, Dropdown, Accordion etc. → Radix nutzen!
// Barrierefreiheit ist eingebaut.

import * as Dialog from '@radix-ui/react-dialog'

export function Modal({ trigger, children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream rounded-card p-6">
          {children}
          <Dialog.Close asChild>
            <button aria-label="Schließen">×</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

---

# TEIL 10: ERROR HANDLING

## Error Boundary (error.tsx)

```tsx
// app/(blog)/error.tsx
"use client"  // Error Components MÜSSEN Client Components sein!

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Fehler an Logging-Service senden
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h2 className="text-2xl font-serif text-loam">
        Ups, da ist etwas schiefgelaufen!
      </h2>
      <p className="text-bark">
        Keine Sorge, das passiert den Besten. ðŸ´
      </p>
      <Button onClick={() => reset()}>
        Nochmal versuchen
      </Button>
    </div>
  )
}
```

## Loading State (loading.tsx)

```tsx
// app/(blog)/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-cream rounded w-3/4 mb-4" />
      <div className="h-4 bg-cream rounded w-full mb-2" />
      <div className="h-4 bg-cream rounded w-full mb-2" />
      <div className="h-4 bg-cream rounded w-2/3" />
    </div>
  )
}
```

---

# TEIL 11: TESTING & QUALITÄTSSICHERUNG

## ESLint + Prettier Setup

```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-unescaped-entities": "off"
  }
}
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Performance Budget (Lighthouse CI)

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://pferdesicht.com/
            https://pferdesicht.com/blog/fellwechsel
          budgetPath: ./lighthouse-budget.json
```

```json
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "interactive", "budget": 3500 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 200 },
      { "resourceType": "total", "budget": 500 }
    ]
  }
]
```

---

# TEIL 12: CHECKLISTEN

## Pre-Deployment Checklist

```
┌─────────────────────────────────────────────────────────────────â”
│                 PRE-DEPLOYMENT CHECKLIST                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PERFORMANCE:                                                   │
│  □ Lighthouse Score > 90 (Mobile)?                              │
│  □ Alle Bilder mit next/image?                                  │
│  □ Fonts mit next/font (self-hosted)?                           │
│  □ Keine unused dependencies?                                   │
│  □ Bundle-Größe geprüft?                                        │
│                                                                 │
│  SEO:                                                           │
│  □ Metadata auf allen Seiten?                                   │
│  □ Open Graph Images vorhanden?                                 │
│  □ Sitemap generiert?                                           │
│  □ robots.txt korrekt?                                          │
│                                                                 │
│  ACCESSIBILITY:                                                 │
│  □ Alt-Texte für alle Bilder?                                   │
│  □ Keyboard-Navigation funktioniert?                            │
│  □ Farbkontrast ausreichend?                                    │
│  □ Focus-States sichtbar?                                       │
│                                                                 │
│  DSGVO:                                                         │
│  □ Keine externen Font-Anfragen?                                │
│  □ Cookie-Banner implementiert?                                 │
│  □ Impressum + Datenschutz verlinkt?                            │
│  □ Analytics DSGVO-konform?                                     │
│                                                                 │
│  CODE:                                                          │
│  □ TypeScript Fehler behoben?                                   │
│  □ ESLint Warnings behoben?                                     │
│  □ Console.logs entfernt?                                       │
│  □ Environment Variables gesetzt?                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Component Creation Checklist

```
□ Server oder Client Component?
□ TypeScript Props Interface definiert?
□ Default Props sinnvoll?
□ Responsive (Mobile-First)?
□ A11y: Semantisches HTML?
□ A11y: Keyboard-navigierbar?
□ Dark Mode berücksichtigt (falls aktiviert)?
□ Loading/Error States?
□ Dokumentiert (Storybook oder Kommentare)?
```

---

# GLOSSAR

| Begriff | Bedeutung |
|---------|-----------|
| **RSC** | React Server Components - rendern auf dem Server, kein JS an Client |
| **Hydration** | Prozess bei dem React das statische HTML "aktiviert" |
| **SSG** | Static Site Generation - zur Build-Zeit generiert |
| **ISR** | Incremental Static Regeneration - statisch + regelmäßig aktualisiert |
| **LCP** | Largest Contentful Paint - wann ist das größte Element sichtbar? |
| **INP** | Interaction to Next Paint - wie schnell reagiert die Seite? |
| **CLS** | Cumulative Layout Shift - wie stabil ist das Layout? |
| **CVA** | Class Variance Authority - Tool für Komponenten-Varianten |
| **MDX** | Markdown + JSX - Markdown mit React-Komponenten |
| **CC** | Claude Code - Agentic Coding Environment |

---

# TEIL 13: CC + COWORK BROWSER WORKFLOW

## Übersicht

Der effektivste Workflow für Pferdesicht-Entwicklung nutzt **Claude Code (CC)** mit **Cowork Browser-Verbindung** für visuelle Verifikation.

```
┌─────────────────────────────────────────────────────────────────â”
│              CC + COWORK BROWSER WORKFLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Claude.ai → gibt Code/Anweisung                             │
│  2. User → gibt Anweisung an CC                                 │
│  3. CC → implementiert Änderung                                 │
│  4. CC → prüft visuell via Browser (Screenshot) â† GAME CHANGER  │
│  5. CC → iteriert bei Problemen (ohne User-Feedback)            │
│  6. User → testet auf echtem Device (iPhone)                    │
│  7. User → bestätigt → Commit                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Setup-Voraussetzungen

```
□ Claude Code (CC) installiert und im Projekt-Ordner
□ Cowork Browser-Verbindung aktiv
□ Dev-Server läuft (npm run dev)
□ Browser-Tab im Cowork geöffnet (localhost:3000 oder 3001)
```

## Warum Browser-Verbindung wichtig ist

| Ohne Browser | Mit Browser |
|--------------|-------------|
| Blind implementieren | Screenshots zur Verifikation |
| User muss jeden Fehler melden | CC erkennt Probleme selbst |
| Viel Hin-und-Her | Autonomes Iterieren |
| Langsam | Schnell |

## Typischer Ablauf

### Schritt 1: Anweisung von Claude.ai

```markdown
Ändere den Sticky Mobile CTA Banner:
- Füge Trust Icons unter dem Button hinzu
- Pattern: ✓ Kostenlos · ✓ 2 Min · ✓ Kein Spam
```

### Schritt 2: User gibt an CC

User kopiert die Anweisung und gibt sie CC im Terminal.

### Schritt 3: CC implementiert

CC:
- Findet die richtige Datei
- Macht die Änderung
- Speichert

### Schritt 4: CC prüft visuell

CC:
- Macht Screenshot vom Browser
- Vergleicht mit erwartetem Ergebnis
- Erkennt Fehler (z.B. Layout-Probleme, fehlende Elemente)

### Schritt 5: CC iteriert (falls nötig)

Wenn Screenshot zeigt Problem:
- CC passt Code an
- Neuer Screenshot
- Wiederholen bis korrekt

### Schritt 6: User testet auf echtem Device

```
□ Öffne richtige URL (Port beachten!)
□ Teste auf iPhone/echtem Mobile
□ Prüfe Touch-Interaktion
□ Prüfe verschiedene Viewport-Größen
```

### Schritt 7: Commit bei Bestätigung

```bash
git add . && git commit -m "Beschreibende Commit Message"
```

## Wichtige Hinweise

### Port-Wechsel beachten!

```
Wenn Dev-Server neu startet, kann Port wechseln:
- localhost:3000 → localhost:3001
- Immer aktuelle Konsolen-Ausgabe prüfen!
```

### Mobile Testing

```
Für echtes Mobile-Testing (iPhone):
http://[LOKALE-IP]:3000  (z.B. 192.168.1.68:3000)

Lokale IP finden:
- Mac: ifconfig | grep "inet " | grep -v 127.0.0.1
- Windows: ipconfig
```

### Debugging bei Problemen

```
1. Änderung nicht sichtbar?
   → Dev-Server neu starten
   → Browser Cache leeren (Cmd+Shift+R)
   → Richtigen Port prüfen

2. CC sieht Browser nicht?
   → Cowork-Verbindung prüfen
   → Browser-Tab im Cowork öffnen

3. Mobile zeigt alte Version?
   → Richtigen Port in URL
   → Hard Refresh auf Mobile
```

---

# TEIL 14: CLAUDE CODE BEST PRACTICES

## Kernprinzip: Context Window Management

> Das Context Window ist die wichtigste Ressource. Performance verschlechtert sich wenn es voll wird.

**Konsequenz für Pferdesicht:**
- `/clear` zwischen unzusammenhängenden Tasks
- Präzise, spezifische Prompts statt vager Anweisungen
- Screenshots und erwartete Outputs mitgeben zur Selbstprüfung

## 14.1 Tight Feedback Loops

### Korrektur-Workflow

```
┌─────────────────────────────────────────────────────────────────â”
│                    KORREKTUR-WORKFLOW                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Esc         → Stoppt CC sofort, Context bleibt erhalten     │
│  2. Esc + Esc   → Öffnet Rewind-Menü                            │
│  3. /rewind     → Stellt vorherigen Stand wieder her            │
│  4. /clear      → Reset zwischen unabhängigen Tasks             │
│                                                                 │
│  WICHTIG: Wenn du CC >2x für dasselbe Problem korrigiert hast,  │
│  ist der Context überladen mit fehlgeschlagenen Versuchen.      │
│  → /clear und neu starten mit besserem Prompt!                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 14.2 Plan Mode: Trennung von Research und Implementation

### 4-Phasen Workflow

```
┌─────────────────────────────────────────────────────────────────â”
│                    4-PHASEN WORKFLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PHASE 1: EXPLORATION (Plan Mode)                               │
│  "Lies /src/app/page.tsx und verstehe wie der Hero aufgebaut    │
│   ist. Welche Komponenten gibt es?"                             │
│                                                                 │
│  PHASE 2: PLANUNG                                               │
│  "Ich will den Mobile Hero ändern. Welche Dateien müssen        │
│   geändert werden? Erstelle einen Plan."                        │
│                                                                 │
│  PHASE 3: IMPLEMENTATION                                        │
│  "Setze den Plan um. Schritt 1: Badge hinzufügen..."            │
│                                                                 │
│  PHASE 4: VERIFIKATION                                          │
│  "Teste auf http://192.168.1.68:3001 und mach Screenshot"       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 14.3 Verifikation: Screenshots & Browser-Testing

### Verifikations-Typen

| Typ | Verwendung |
|-----|------------|
| Screenshot | UI-Änderungen, Layout, Farben |
| Lighthouse | Performance, Core Web Vitals |
| TypeScript Check | `npx tsc --noEmit` |
| Linter | `npm run lint` |
| Build Test | `npm run build` |

## 14.4 Spezifische Prompts

### SCHLECHT (vage):
```
Mach das Mobile Design besser
```

### GUT (spezifisch):
```
Ändere die Mobile Hero Section:

1. Badge hinzufügen:
   - Text: "FÜR PFERDEMENSCHEN, DIE HINSCHAUEN"
   - Klassen: px-4 py-1.5 rounded-full bg-sage text-white text-[10px]
   - Position: vor der Headline
   - Nur Mobile: md:hidden

2. Gradient verstärken:
   - Von: from-loam/60 via-loam/40 to-transparent
   - Zu: from-loam/80 via-loam/50 to-loam/30

3. Teste auf http://192.168.1.68:3001 (390x844) und mach Screenshot
```

## 14.5 Pferdesicht Prompt-Templates

### Template 1: UI-Änderung

```
Ändere [KOMPONENTE] in [DATEI]:

AKTUELL:
- [was ist jetzt]

NEU:
- [was soll sein]

KLASSEN:
- [exakte Tailwind-Klassen]

TESTE auf http://192.168.1.68:[PORT] und mach Screenshot.
```

### Template 2: Imagen-Bild generieren

```
Generiere ein neues Bild mit diesem Prompt:

[IMAGEN PROMPT]

Speichere als: [DATEINAME]
Pfad: public/images/[ORDNER]/

Prüfe nach Generierung:
- [ ] Pferde KOMPLETT sichtbar (Ohren bis Hufe)?
- [ ] Richtige Komposition?
- [ ] Keine Artefakte?
```

### Template 3: Komponente erstellen

```
Erstelle Komponente [NAME]:

ZWECK: [was sie tut]

PROPS:
- [prop1]: [typ] - [beschreibung]
- [prop2]: [typ] - [beschreibung]

DESIGN:
- [Tailwind-Klassen oder Design System Referenz]

PLATZIERUNG:
- Datei: components/[ordner]/[name].tsx
- Import in: [wo verwendet]

TESTE mit verschiedenen Props.
```

### Template 4: Bug fixen

```
Bug: [BESCHREIBUNG]

REPRODUKTION:
1. [Schritt 1]
2. [Schritt 2]
3. [Was passiert]

ERWARTET:
[Was passieren sollte]

VERMUTUNG:
[Wo das Problem sein könnte]

Finde und fixe das Problem. Zeige vorher/nachher.
```

### Template 5: Deployment

```
Komplettes Deployment durchführen:

1. Git Status prüfen: git status
2. Alle Änderungen committen: git add . && git commit -m "[MESSAGE]"
3. Auf main pushen: git push origin main
4. Vercel Deployment prüfen
5. Live-Site testen (Desktop + Mobile)
6. Screenshots machen
```

## 14.6 Context-Management

### Wann `/clear` verwenden:

```
✅ /clear VERWENDEN:
- Neues, unabhängiges Feature starten
- Nach >2 fehlgeschlagenen Korrekturversuchen
- Wechsel zwischen völlig verschiedenen Aufgaben
- Context fühlt sich "überladen" an

âŒ /clear NICHT VERWENDEN:
- Mitten in einer zusammenhängenden Aufgabe
- Wenn Context wichtige Entscheidungen enthält
- Bei kleinen Korrekturen
```

## 14.7 Checkliste vor Commit

```
□ Änderung visuell geprüft (Screenshot)?
□ Auf Mobile UND Desktop getestet?
□ TypeScript-Fehler behoben?
□ Lint-Fehler behoben?
□ Build erfolgreich?
□ Commit-Message beschreibend?
```

---

# VERBINDUNG ZU ANDEREN DOKUMENTEN

| Dieses Framework | Verbindet mit | Wie |
|------------------|---------------|-----|
| MDX Components | Master-Prompt v3.14 | Diana-Stimme in Blog-Komponenten |
| Design Tokens | Design System v1.0 | Farben, Spacing, Komponenten |
| Formulare | Sales Copy Framework | Copy für CTAs, Error Messages |
| SEO Metadata | Content-Ableitungsmatrix | Keywords aus SEO-Strategie |
| Bilder | Design System v1.0 | Imagen Best Practices |

---

## CHANGELOG

### v2.0 (2026-01-31)
- TEIL 13 hinzugefügt: CC + Cowork Browser Workflow
- TEIL 14 hinzugefügt: Claude Code Best Practices & Prompt Templates
- Glossar erweitert um CC-Begriff
- Verbindung zu Design System v1.0 hinzugefügt

### v1.0 (2026-01-28)
- Initiale Version

---

**Pferdesicht Developer Framework v2.0**
*Konsistente, performante, wartbare Codebasis*
*"Grüne Core Web Vitals, DSGVO-konform, Accessibility-first"*

---

*Code mit Sorgfalt, wie Diana sich um Pferde kümmert.*
