"use client";

import { ReactNode } from "react";
import { Gift, CheckCircle2, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeadMagnetBoxProps {
  /** Überschrift */
  title: string;
  /** Untertitel/Beschreibung */
  description: string;
  /** Name des Lead Magnets (z.B. "Frühlings-Checkliste") */
  leadMagnetName: string;
  /** Benefits als Array */
  benefits?: string[];
  /** CTA Button Text */
  ctaText?: string;
  /** Link oder onClick Handler */
  href?: string;
  onClick?: () => void;
  /** Variante */
  variant?: "default" | "floating" | "inline-compact" | "exit-intent";
  /** Optional: Icon */
  icon?: ReactNode;
  /** Für exit-intent: Schließen-Handler */
  onClose?: () => void;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export function LeadMagnetBox({
  title,
  description,
  leadMagnetName,
  benefits = [],
  ctaText = "Jetzt kostenlos sichern",
  href,
  onClick,
  variant = "default",
  icon,
  onClose,
  className,
}: LeadMagnetBoxProps) {
  const ButtonOrLink = href ? "a" : "button";
  const buttonProps = href ? { href } : { onClick, type: "button" as const };

  // Default Variante
  if (variant === "default") {
    return (
      <aside
        className={cn(
          "bg-gradient-to-br from-sage/10 to-sage/5 border border-sage/20 rounded-lg p-8 my-10",
          className
        )}
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon || <Gift className="w-6 h-6 text-gold" />}
          </div>
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-sage mb-1 font-semibold">
              Kostenlos für dich
            </p>
            <h3 className="text-xl md:text-2xl font-serif text-loam leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-sm font-sans text-loam/70 mb-6 leading-relaxed">
          {description}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-sans text-loam/80">
                <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <ButtonOrLink
            {...buttonProps}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </ButtonOrLink>
          <span className="text-xs font-sans text-loam/50">
            {leadMagnetName} • Kein Spam, versprochen.
          </span>
        </div>
      </aside>
    );
  }

  // Floating Variante (für Sidebar)
  if (variant === "floating") {
    return (
      <aside
        className={cn(
          "bg-white border border-loam/10 rounded-lg p-6 shadow-lg",
          className
        )}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
            {icon || <Gift className="w-5 h-5 text-loam" />}
          </div>
          <h3 className="text-lg font-serif text-loam leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm font-sans text-loam/70 mb-4 leading-relaxed">
          {description}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-xs font-sans text-loam/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <ButtonOrLink
          {...buttonProps}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-xs uppercase tracking-wider rounded transition-colors"
        >
          {ctaText}
        </ButtonOrLink>
      </aside>
    );
  }

  // Inline-Compact Variante (für im Text)
  if (variant === "inline-compact") {
    return (
      <aside
        className={cn(
          "bg-gold/10 border-l-4 border-gold p-4 my-6 flex flex-col sm:flex-row items-start sm:items-center gap-4",
          className
        )}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 bg-gold/30 rounded flex items-center justify-center flex-shrink-0">
            {icon || <Gift className="w-4 h-4 text-loam" />}
          </div>
          <div>
            <p className="text-sm font-sans font-semibold text-loam">{title}</p>
            <p className="text-xs font-sans text-loam/60">{leadMagnetName}</p>
          </div>
        </div>
        <ButtonOrLink
          {...buttonProps}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold/90 font-sans font-semibold text-xs uppercase tracking-wider rounded transition-colors"
          style={{ color: "#2c2a25" }}
        >
          {ctaText}
          <ArrowRight className="w-3.5 h-3.5" />
        </ButtonOrLink>
      </aside>
    );
  }

  // Exit-Intent Variante (Modal-Style)
  if (variant === "exit-intent") {
    return (
      <aside
        className={cn(
          "bg-white rounded-xl shadow-2xl p-8 md:p-10 max-w-lg w-full relative",
          className
        )}
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-loam/40 hover:text-loam transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            {icon || <Gift className="w-8 h-8 text-loam" />}
          </div>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-sage mb-2 font-semibold">
            Warte kurz!
          </p>
          <h3 className="text-2xl md:text-3xl font-serif text-loam leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm font-sans text-loam/70 mb-6 leading-relaxed text-center">
          {description}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6 max-w-xs mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-sans text-loam/80">
                <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col items-center gap-3">
          <ButtonOrLink
            {...buttonProps}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </ButtonOrLink>
          {onClose && (
            <button
              onClick={onClose}
              className="text-xs font-sans text-loam/40 hover:text-loam/60 transition-colors"
            >
              Nein danke, ich möchte keinen kostenlosen Guide
            </button>
          )}
        </div>
      </aside>
    );
  }

  return null;
}
