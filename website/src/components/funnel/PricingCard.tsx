"use client";

import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  /** Produktname */
  title: string;
  /** Untertitel */
  subtitle?: string;
  /** Preis (nur Zahl) */
  price: string;
  /** Originalpreis für Durchstreichpreis */
  originalPrice?: string;
  /** Zahlungsperiode */
  period?: string;
  /** Feature-Liste */
  features: string[];
  /** CTA Button Text */
  ctaText?: string;
  /** Link */
  href?: string;
  /** Variante */
  variant?: "default" | "highlighted" | "with-guarantee";
  /** Alternative: Highlighted-Stil aktivieren */
  highlighted?: boolean;
  /** Garantie-Text */
  guaranteeText?: string;
  /** Garantie-Beschreibung */
  guaranteeDescription?: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export function PricingCard({
  title,
  subtitle,
  price,
  originalPrice,
  period = "einmalig",
  features,
  ctaText = "Jetzt kaufen",
  href = "#",
  variant = "default",
  highlighted = false,
  guaranteeText = "14 Tage Geld-zurück-Garantie",
  guaranteeDescription = "Kein Risiko: Wenn der Guide nicht das Richtige für dich ist, bekommst du dein Geld zurück.",
  className,
}: PricingCardProps) {
  // Determine if highlighted (via variant or prop)
  const isHighlighted = variant === "highlighted" || highlighted;
  const hasGuarantee = variant === "with-guarantee";

  return (
    <article
      className={cn(
        "relative bg-white rounded-xl overflow-hidden flex flex-col h-full",
        isHighlighted
          ? "border-2 border-gold shadow-xl scale-[1.02]"
          : "border border-loam/10 shadow-sm",
        className
      )}
    >
      {/* Beliebt Badge */}
      {isHighlighted && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <div className="bg-gold px-4 py-1.5 rounded-b-lg">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-loam">
              Beliebt
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={cn(
        "p-6 pb-4 text-center",
        isHighlighted && "pt-10"
      )}>
        <h3 className="text-xl font-serif text-loam mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm font-sans text-loam/60">{subtitle}</p>
        )}
      </div>

      {/* Preis */}
      <div className="px-6 pb-6 text-center">
        <div className="flex items-baseline justify-center gap-2">
          {originalPrice && (
            <span className="text-lg font-sans text-loam/40 line-through">
              {originalPrice}€
            </span>
          )}
          <span className={cn(
            "font-serif font-semibold",
            isHighlighted ? "text-4xl text-gold" : "text-3xl text-loam"
          )}>
            {price}€
          </span>
        </div>
        <span className="text-xs font-sans text-loam/50 uppercase tracking-wider">
          {period}
        </span>
      </div>

      {/* Features */}
      <div className="px-6 pb-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm font-sans text-loam/80">
              <CheckCircle2 className={cn(
                "w-4 h-4 flex-shrink-0 mt-0.5",
                isHighlighted ? "text-gold" : "text-sage"
              )} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <a
          href={href}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-sans font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors",
            isHighlighted
              ? "bg-gold hover:bg-gold/90"
              : "bg-sage hover:bg-sage/90 text-white"
          )}
          style={isHighlighted ? { color: "#2c2a25" } : undefined}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Garantie-Box (nur bei with-guarantee) */}
      {hasGuarantee && (
        <div className="bg-sage/5 border-t border-sage/10 px-6 py-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-sage" />
            </div>
            <div>
              <p className="text-xs font-sans font-semibold text-loam mb-0.5">
                {guaranteeText}
              </p>
              <p className="text-xs font-sans text-loam/60 leading-relaxed">
                {guaranteeDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

// Hilfskomponente für Pricing-Sections
export interface PricingSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function PricingSection({ children, className }: PricingSectionProps) {
  return (
    <div className={cn(
      "grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch",
      className
    )}>
      {children}
    </div>
  );
}
