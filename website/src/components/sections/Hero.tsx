"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ============================================
// Types
// ============================================

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
}

interface HeroProps {
  /** Badge text above the headline */
  badge?: string;
  /** Main headline - supports line breaks with \n */
  headline: string;
  /** Subheadline or description */
  subheadline?: string;
  /** Call-to-action buttons */
  actions?: HeroAction[];
  /** Background image URL */
  backgroundImage?: string;
  /** Additional className */
  className?: string;
  /** Children for custom content */
  children?: React.ReactNode;
}

// ============================================
// Main Hero Component - Fullscreen with Image
// ============================================

export function Hero({
  badge,
  headline,
  subheadline,
  actions,
  backgroundImage = "/images/hero-pferd-winter-schnee-v4.png",
  className,
  children,
}: HeroProps) {
  return (
    <section className={cn("relative min-h-[90vh] flex items-center", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay - from left dark to right transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-loam-900/80 via-loam-900/40 to-loam-900/10" />
      </div>

      {/* Film Grain Effect */}
      <div className="absolute inset-0 z-[1] warm-film-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          {badge && (
            <div className="mb-6">
              <span
                className={cn(
                  "inline-block px-4 py-2 rounded-full",
                  "text-xs font-medium uppercase tracking-wider",
                  "bg-white/10 backdrop-blur-sm",
                  "border border-gold-400/50",
                  "text-amber-100"
                )}
              >
                {badge}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1
            className={cn(
              "font-serif font-medium tracking-tight hero-text-shadow text-balance",
              "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
              "text-white leading-[1.1]"
            )}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          {subheadline && (
            <p
              className={cn(
                "mt-6 text-lg sm:text-xl leading-relaxed max-w-xl",
                "text-amber-50/90"
              )}
            >
              {subheadline}
            </p>
          )}

          {/* Actions */}
          {actions && actions.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={cn(
                    "tactile-button",
                    action.variant === "primary" && "tactile-button-primary",
                    action.variant === "secondary" && "tactile-button-secondary",
                    action.variant === "gold" && "tactile-button-gold",
                    action.variant === "ghost" &&
                      "!bg-transparent !text-white !shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.4)] hover:!bg-white/10",
                    !action.variant && "tactile-button-primary"
                  )}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}

          {/* Custom Content */}
          {children}
        </div>
      </div>
    </section>
  );
}

export default Hero;
