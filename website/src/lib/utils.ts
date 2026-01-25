import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Kombiniert Tailwind CSS Klassen intelligent.
 * Verwendet clsx für bedingte Klassen und tailwind-merge
 * um Konflikte zwischen Tailwind-Klassen aufzulösen.
 *
 * @example
 * cn("px-4 py-2", "px-6") // => "py-2 px-6"
 * cn("text-red-500", isActive && "text-green-500")
 * cn(["flex", "items-center"], className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formatiert einen Preis für den DACH-Raum.
 *
 * @example
 * formatPrice(47) // => "47 €"
 * formatPrice(47.5) // => "47,50 €"
 */
export function formatPrice(
  amount: number,
  options: {
    currency?: string;
    locale?: string;
  } = {}
): string {
  const { currency = "EUR", locale = "de-DE" } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Generiert eine sichere ID aus einem String.
 * Nützlich für Anker-Links und HTML IDs.
 *
 * @example
 * slugify("Fütterung & Verdauung") // => "fuetterung-verdauung"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Kürzt Text auf eine maximale Länge mit Ellipsis.
 *
 * @example
 * truncate("Ein sehr langer Text", 10) // => "Ein sehr..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Prüft ob ein Link extern ist.
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

/**
 * Verzögert die Ausführung (Promise-basiert).
 *
 * @example
 * await delay(1000) // Wartet 1 Sekunde
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formatiert ein Datum für den DACH-Raum.
 *
 * @example
 * formatDate(new Date()) // => "25. Januar 2026"
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {}
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  };

  return new Intl.DateTimeFormat("de-DE", defaultOptions).format(dateObj);
}

/**
 * Debounce-Funktion für Event-Handler.
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
