"use client";

import { ReactNode } from "react";
import { CheckCircle2, ArrowRight, BookOpen, Video, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProduktTeaserProps {
  /** Produktname */
  title: string;
  /** Kurzbeschreibung */
  description: string;
  /** Preis (nur Zahl, z.B. "47") */
  price: string;
  /** Originalpreis für Durchstreichpreis */
  originalPrice?: string;
  /** Feature-Liste */
  features?: string[];
  /** CTA Button Text */
  ctaText?: string;
  /** Link zum Produkt */
  href?: string;
  /** Variante */
  variant?: "default" | "featured" | "with-preview" | "minimal";
  /** Badge (z.B. "5 Module", "Neu") */
  badge?: string;
  /** Bild-URL (optional) */
  imageUrl?: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export function ProduktTeaser({
  title,
  description,
  price,
  originalPrice,
  features = [],
  ctaText = "Mehr erfahren",
  href = "#",
  variant = "default",
  badge,
  imageUrl,
  className,
}: ProduktTeaserProps) {
  // Default Variante
  if (variant === "default") {
    return (
      <article
        className={cn(
          "bg-white border border-loam/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",
          className
        )}
      >
        {/* Bild-Platzhalter */}
        <div className="relative aspect-[16/9] bg-gradient-to-br from-sage/20 to-sage/5">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-sage" />
              </div>
            </div>
          )}
          {badge && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-loam text-xs font-sans font-semibold uppercase tracking-wider rounded">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif text-loam mb-2">{title}</h3>
          <p className="text-sm font-sans text-loam/70 mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-xs font-sans text-loam/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-loam/10">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif font-semibold text-loam">{price}€</span>
              {originalPrice && (
                <span className="text-sm font-sans text-loam/40 line-through">{originalPrice}€</span>
              )}
            </div>
            <a
              href={href}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-xs uppercase tracking-wider rounded transition-colors"
            >
              {ctaText}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Featured Variante (dunkler Hintergrund)
  if (variant === "featured") {
    return (
      <article
        className={cn(
          "bg-loam rounded-xl overflow-hidden shadow-xl",
          className
        )}
      >
        <div className="p-8 md:p-10">
          {badge && (
            <span className="inline-block px-3 py-1 bg-gold text-loam text-xs font-sans font-semibold uppercase tracking-wider rounded mb-4">
              {badge}
            </span>
          )}

          <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{title}</h3>
          <p className="text-sm font-sans text-white/70 mb-6 leading-relaxed max-w-lg">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-2 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-sans text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-white/10">
            <div className="flex items-baseline gap-2">
              {originalPrice && (
                <span className="text-lg font-sans text-white/40 line-through">{originalPrice}€</span>
              )}
              <span className="text-3xl font-serif font-semibold text-gold">{price}€</span>
            </div>
            <a
              href={href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
              style={{ color: "#2c2a25" }}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // With-Preview Variante (3 Modul-Icons)
  if (variant === "with-preview") {
    const moduleIcons = [
      { icon: Video, label: "Video-Module" },
      { icon: FileText, label: "Worksheets" },
      { icon: BookOpen, label: "Bonus-Material" },
    ];

    return (
      <article
        className={cn(
          "bg-white border border-loam/10 rounded-lg overflow-hidden shadow-sm",
          className
        )}
      >
        {/* Modul-Preview */}
        <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-6">
          <div className="flex items-center justify-center gap-4">
            {moduleIcons.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 mx-auto">
                  <item.icon className="w-6 h-6 text-sage" />
                </div>
                <span className="text-xs font-sans text-loam/60">{item.label}</span>
              </div>
            ))}
          </div>
          {badge && (
            <div className="text-center mt-4">
              <span className="inline-block px-3 py-1 bg-gold/20 text-loam text-xs font-sans font-semibold uppercase tracking-wider rounded">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif text-loam mb-2 text-center">{title}</h3>
          <p className="text-sm font-sans text-loam/70 mb-4 leading-relaxed text-center">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-xs font-sans text-loam/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col items-center gap-3 pt-4 border-t border-loam/10">
            <div className="flex items-baseline gap-2">
              {originalPrice && (
                <span className="text-sm font-sans text-loam/40 line-through">{originalPrice}€</span>
              )}
              <span className="text-2xl font-serif font-semibold text-loam">{price}€</span>
            </div>
            <a
              href={href}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Minimal Variante (horizontal, kompakt)
  if (variant === "minimal") {
    return (
      <article
        className={cn(
          "bg-white border border-loam/10 rounded-lg p-4 flex items-center gap-4 hover:border-sage/30 transition-colors",
          className
        )}
      >
        {/* Mini-Thumbnail */}
        <div className="w-16 h-16 bg-gradient-to-br from-sage/20 to-sage/5 rounded-lg flex items-center justify-center flex-shrink-0">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <BookOpen className="w-6 h-6 text-sage" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-sm font-serif font-semibold text-loam truncate">{title}</h4>
              {badge && (
                <span className="text-xs font-sans text-sage">{badge}</span>
              )}
            </div>
            <div className="flex items-baseline gap-1 flex-shrink-0">
              {originalPrice && (
                <span className="text-xs font-sans text-loam/40 line-through">{originalPrice}€</span>
              )}
              <span className="text-lg font-serif font-semibold text-loam">{price}€</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <a
          href={href}
          className="w-8 h-8 bg-sage/10 hover:bg-sage hover:text-white rounded flex items-center justify-center flex-shrink-0 text-sage transition-colors"
          aria-label={ctaText}
        >
          <ArrowRight className="w-4 h-4" />
        </a>
      </article>
    );
  }

  return null;
}
