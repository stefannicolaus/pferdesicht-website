"use client";

import { useState, FormEvent } from "react";
import { Mail, Gift, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsletterSignupProps {
  /** Überschrift */
  title?: string;
  /** Beschreibungstext */
  description?: string;
  /** Benefit-Name für with-benefit Variante */
  benefitName?: string;
  /** Button-Text */
  buttonText?: string;
  /** Placeholder für Input */
  placeholder?: string;
  /** Datenschutz-Hinweis */
  privacyText?: string;
  /** Variante */
  variant?: "default" | "minimal" | "with-benefit";
  /** Submit-Handler */
  onSubmit?: (email: string) => void | Promise<void>;
  /** Controlled: Email-Wert */
  value?: string;
  /** Controlled: onChange-Handler */
  onChange?: (email: string) => void;
  /** Loading-State */
  loading?: boolean;
  /** Erfolgs-State */
  success?: boolean;
  /** Erfolgsmeldung */
  successMessage?: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export function NewsletterSignup({
  title = "Wissen, das ankommt",
  description = "Erhalte fundiertes Pferdewissen direkt in dein Postfach – recherchiert, sortiert und praxisnah aufbereitet.",
  benefitName,
  buttonText = "Anmelden",
  placeholder = "Deine E-Mail-Adresse",
  privacyText = "Kein Spam. Abmeldung jederzeit.",
  variant = "default",
  onSubmit,
  value,
  onChange,
  loading = false,
  success = false,
  successMessage = "Geschafft! Schau in dein Postfach.",
  className,
}: NewsletterSignupProps) {
  // Internal state for uncontrolled usage
  const [internalEmail, setInternalEmail] = useState("");
  const [internalLoading, setInternalLoading] = useState(false);
  const [internalSuccess, setInternalSuccess] = useState(false);

  // Use controlled or uncontrolled values
  const email = value !== undefined ? value : internalEmail;
  const isLoading = loading || internalLoading;
  const isSuccess = success || internalSuccess;

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalEmail(newValue);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    if (onSubmit) {
      setInternalLoading(true);
      try {
        await onSubmit(email);
        setInternalSuccess(true);
      } finally {
        setInternalLoading(false);
      }
    }
  };

  // Success State (shared across variants)
  if (isSuccess) {
    return (
      <aside
        className={cn(
          "bg-sage/10 border border-sage/20 rounded-lg p-6 text-center",
          className
        )}
      >
        <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Mail className="w-6 h-6 text-sage" />
        </div>
        <p className="text-base font-serif text-loam">{successMessage}</p>
      </aside>
    );
  }

  // Minimal Variante
  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className={cn("w-full", className)}>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-2.5 bg-white border border-loam/20 rounded text-sm font-sans text-loam placeholder:text-loam/40 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-5 py-2.5 bg-sage hover:bg-sage/90 disabled:bg-sage/50 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              buttonText
            )}
          </button>
        </div>
        <p className="text-xs font-sans text-loam/50 mt-2">{privacyText}</p>
      </form>
    );
  }

  // With-Benefit Variante
  if (variant === "with-benefit") {
    return (
      <aside
        className={cn(
          "bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-lg p-8",
          className
        )}
      >
        {/* Benefit Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
            <Gift className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-gold font-semibold">
              Gratis für dich
            </p>
            {benefitName && (
              <p className="text-sm font-sans font-semibold text-loam">
                {benefitName}
              </p>
            )}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-serif text-loam mb-2">
          {title}
        </h3>
        <p className="text-sm font-sans text-loam/70 mb-6 leading-relaxed">
          {description}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 px-4 py-3 bg-white border border-gold/30 rounded text-sm font-sans text-loam placeholder:text-loam/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gold hover:bg-gold/90 disabled:bg-gold/50 font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              style={{ color: "#2c2a25" }}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          <p className="text-xs font-sans text-loam/50 mt-3">{privacyText}</p>
        </form>
      </aside>
    );
  }

  // Default Variante
  return (
    <aside
      className={cn(
        "bg-sage/5 border border-sage/10 rounded-lg p-8",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center">
          <Mail className="w-5 h-5 text-sage" />
        </div>
        <p className="text-xs font-sans uppercase tracking-[0.15em] text-sage font-semibold">
          Newsletter
        </p>
      </div>

      <h3 className="text-xl md:text-2xl font-serif text-loam mb-2">
        {title}
      </h3>
      <p className="text-sm font-sans text-loam/70 mb-6 leading-relaxed">
        {description}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-3 bg-white border border-loam/20 rounded text-sm font-sans text-loam placeholder:text-loam/40 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-sage hover:bg-sage/90 disabled:bg-sage/50 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        <p className="text-xs font-sans text-loam/50 mt-3">{privacyText}</p>
      </form>
    </aside>
  );
}
