"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/funnel";
import { ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";

export function HomepagePreview() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage/5 to-transparent py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-sage mb-4 font-semibold">
              Fundiertes Wissen für Pferdebesitzer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-loam leading-tight mb-6">
              Wissen als <span className="italic text-gold">Rüstung</span>
            </h1>
            <p className="text-lg md:text-xl font-sans text-loam/70 mb-8 leading-relaxed">
              Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte.
              Recherchiert, sortiert und im Alltag getestet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
              >
                Wissen entdecken
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-loam/20 hover:border-sage text-loam font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
              >
                Über Diana
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-loam mb-4">
              Was dich bei Pferdesicht erwartet
            </h2>
            <p className="text-sm font-sans text-loam/60 max-w-2xl mx-auto">
              Fundiert recherchiert, verständlich erklärt, praxisnah aufbereitet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Wissensartikel",
                description: "Tiefgehende Artikel zu Fütterung, Haltung, Thermoregulation und mehr.",
              },
              {
                icon: Sparkles,
                title: "Praxis-Guides",
                description: "Schritt-für-Schritt Anleitungen für die wichtigsten Themen im Pferdealltag.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Tausche dich mit Gleichgesinnten aus und lerne von den Erfahrungen anderer.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-loam/10 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-lg font-serif text-loam mb-2">{feature.title}</h3>
                <p className="text-sm font-sans text-loam/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 md:py-20 bg-loam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-gold text-loam text-xs font-sans font-semibold uppercase tracking-wider rounded mb-4">
                Neu: Frühlings-Guide
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                Dein Fahrplan für die Weidesaison
              </h2>
              <p className="text-sm font-sans text-white/70 mb-6 leading-relaxed">
                Anweiden, Fellwechsel, Parasiten – in 5 Modulen bekommst du alles,
                was du wissen musst, um dein Pferd sicher durch den Frühling zu bringen.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Über 2 Stunden Video-Content",
                  "Druckbare Checklisten & Kalender",
                  "Lebenslanger Zugang",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm font-sans text-white/80">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 font-sans font-semibold text-sm uppercase tracking-wider rounded transition-colors"
                style={{ color: "#2c2a25" }}
              >
                Guide entdecken
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/10 rounded-xl aspect-video flex items-center justify-center">
              <span className="text-white/30 text-sm font-sans">Guide Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup
            variant="with-benefit"
            benefitName="Frühjahrs-Checkliste PDF"
            title="Hol dir die kostenlose Checkliste"
            description="Plus: Regelmäßige Tipps für dein Pferd – recherchiert, sortiert und praxisnah aufbereitet."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
