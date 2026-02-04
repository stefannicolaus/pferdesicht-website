/**
 * Pferdesicht Design System
 * Zentrale Definitionen für Navigation, Branding und UI-Konstanten
 */

// ============================================
// Brand Colors
// ============================================

export const colors = {
  loam: {
    DEFAULT: "#2c2a25",
    50: "#f7f6f5",
    100: "#eeedeb",
    200: "#dddbd7",
    300: "#c5c2bc",
    400: "#a9a59d",
    500: "#918b81",
    600: "#7a7469",
    700: "#635e56",
    800: "#4a4742",
    900: "#2c2a25",
    950: "#1a1917",
  },
  sage: {
    DEFAULT: "#78866b",
    50: "#f6f7f5",
    100: "#ebeee8",
    200: "#d7dcd1",
    300: "#b8c2ad",
    400: "#96a586",
    500: "#78866b",
    600: "#5f6b54",
    700: "#4c5644",
    800: "#3f4639",
    900: "#353b30",
    950: "#1b1f18",
  },
  gold: {
    DEFAULT: "#c8a476",
    50: "#fbf8f3",
    100: "#f6efe3",
    200: "#ecddc6",
    300: "#dfc5a0",
    400: "#c8a476",
    500: "#bc8d58",
    600: "#ae794b",
    700: "#916140",
    800: "#764f39",
    900: "#614231",
    950: "#342118",
  },
  bgLight: "#f3f0eb",
  paper: "#faf9f7",
} as const;

// ============================================
// Typography
// ============================================

export const typography = {
  fonts: {
    serif: "'EB Garamond', Georgia, serif",
    sans: "'Poppins', system-ui, sans-serif",
  },
  sizes: {
    display1: "4.5rem",
    display2: "3.75rem",
    heading1: "3rem",
    heading2: "2.25rem",
    heading3: "1.875rem",
    heading4: "1.5rem",
    bodyLg: "1.125rem",
    body: "1rem",
    bodySm: "0.875rem",
    caption: "0.75rem",
  },
} as const;

// ============================================
// Navigation
// ============================================

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  isExternal?: boolean;
  badge?: string;
}

export const navigation: NavItem[] = [
  {
    label: "Start",
    href: "/",
  },
  {
    label: "Wissen",
    href: "/wissen",
    description: "Fundiert recherchiert, verständlich erklärt",
    children: [
      {
        label: "Alle Artikel",
        href: "/wissen",
        description: "Durchstöbere alle Beiträge",
      },
      {
        label: "Fütterung & Verdauung",
        href: "/wissen/fuetterung",
        description: "Alles rund um die Pferdefütterung",
      },
      {
        label: "Thermoregulation",
        href: "/wissen/thermoregulation",
        description: "Eindecken, Scheren, Wärmehaushalt",
      },
      {
        label: "Bewegung & Training",
        href: "/wissen/bewegung",
        description: "Gesunde Bewegung für dein Pferd",
      },
      {
        label: "Haltung",
        href: "/wissen/haltung",
        description: "Box, Offenstall und mehr",
      },
    ],
  },
  {
    label: "Über mich",
    href: "/ueber-mich",
    description: "Lerne Diana kennen",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export const footerNavigation = {
  wissen: [
    { label: "Alle Artikel", href: "/wissen" },
    { label: "Fütterung", href: "/wissen/fuetterung" },
    { label: "Thermoregulation", href: "/wissen/thermoregulation" },
    { label: "Bewegung", href: "/wissen/bewegung" },
    { label: "Haltung", href: "/wissen/haltung" },
  ],
  rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/pferdesicht", isExternal: true },
    { label: "YouTube", href: "https://youtube.com/@pferdesicht", isExternal: true },
  ],
};

// ============================================
// Branding
// ============================================

export const branding = {
  name: "Pferdesicht",
  tagline: "Vertraue deiner Perspektive.",
  description: "Fundiertes Wissen für Pferdebesitzer im DACH-Raum",
  founder: "Diana",
  founderTitle: "Gründerin & Reittherapeutin",

  // Contact
  email: "hallo@pferdesicht.com",

  // Mission Statement
  mission: "Wissen als Rüstung",
  missionFull: "Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte.",

  // Social proof
  experience: {
    years: "30+",
    label: "Jahre Pferdeerfahrung",
  },

  // Signature
  signature: {
    text: "Vertraue deiner Perspektive.",
    attribution: "— Deine Diana von Pferdesicht",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | Pferdesicht",
    defaultTitle: "Pferdesicht – Fundiertes Wissen für dein Pferd",
    defaultDescription: "Wissen als Rüstung: Diana hilft dir, fundierte Entscheidungen für dein Pferd zu treffen. Recherchiert, sortiert und im Alltag getestet.",
    locale: "de_DE",
    siteName: "Pferdesicht",
  },
} as const;

// ============================================
// UI Constants
// ============================================

export const ui = {
  // Transition durations
  transitions: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },

  // Border radius
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Breakpoints (matching Tailwind)
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Container max widths
  container: {
    prose: "65ch",
    narrow: "48rem",
    default: "80rem",
    wide: "90rem",
  },

  // Z-index scale
  zIndex: {
    dropdown: 50,
    sticky: 100,
    modal: 200,
    overlay: 300,
    toast: 400,
  },
} as const;

// ============================================
// Visual Layers (from CLAUDE.md)
// ============================================

export const visualLayers = {
  organicLuxury: {
    name: "Organic Luxury",
    description: "Clean, hochwertig, vertrauensbildend",
    usage: ["Website Header", "Hero-Bilder", "Kurs-Cover", "Landing Pages"],
    colors: ["sage", "loam", "gold"],
  },
  napkinSketch: {
    name: "Napkin Sketch",
    description: "Küchentisch-Erklärungen, persönlich, nahbar",
    usage: ["Modul-Erklärungen", "Social Media", "Email-Grafiken"],
    style: {
      background: "Weißer Servietten-Hintergrund",
      lines: "Schwarze Filzstift-Linien",
      accent: "NUR Sage Green (#78866b)",
      text: "Imperfekte Handschrift, max. 5-7 Wörter",
    },
  },
} as const;

// ============================================
// Type exports
// ============================================

export type ColorKey = keyof typeof colors;
export type NavItemType = typeof navigation[number];
