"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ProduktTeaser,
  PricingCard,
  PricingSection,
  LeadMagnetBox,
  NewsletterSignup,
} from "@/components/funnel";
import { KeyTakeaway, ExpertQuote, QuizCTA } from "@/components/blog";
import { CheckCircle2, Play, FileText, Users, Clock, Shield } from "lucide-react";

export function LandingPagePreview() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-sage/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-loam text-xs font-sans font-semibold uppercase tracking-wider rounded-full mb-6">
              Der komplette Guide für Pferdebesitzer
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-loam leading-tight mb-6">
              Anweiden, Fellwechsel, Parasiten – <br />
              <span className="italic text-sage">alles auf einen Blick</span>
            </h1>
            <p className="text-lg font-sans text-loam/70 mb-8 leading-relaxed">
              In 5 Modulen bekommst du das fundierte Wissen, das du brauchst,
              um dein Pferd sicher und entspannt durch den Frühling zu bringen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage hover:bg-sage/90 text-white font-sans font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors"
              >
                Jetzt sichern – 47€
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-loam/20 text-loam font-sans font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors"
              >
                <Play className="w-4 h-4" />
                Trailer ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y border-loam/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <span className="block text-2xl font-serif font-semibold text-loam">500+</span>
              <span className="text-xs font-sans text-loam/60 uppercase tracking-wider">Zufriedene Käufer</span>
            </div>
            <div>
              <span className="block text-2xl font-serif font-semibold text-loam">30+</span>
              <span className="text-xs font-sans text-loam/60 uppercase tracking-wider">Jahre Erfahrung</span>
            </div>
            <div>
              <span className="block text-2xl font-serif font-semibold text-loam">4.9/5</span>
              <span className="text-xs font-sans text-loam/60 uppercase tracking-wider">Bewertung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-8">
            Kennst du das?
          </h2>
          <div className="space-y-4">
            {[
              "Du liest im Internet komplett widersprüchliche Infos zum Anweiden",
              "Dein Pferd hat jedes Frühjahr Probleme mit dem Fellwechsel",
              "Du bist unsicher, wann und wie du entwurmen sollst",
              "Im Stall gibt dir jeder andere Ratschläge",
            ].map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white border border-loam/10 rounded-lg"
              >
                <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-loam">
                  {index + 1}
                </span>
                <p className="text-sm font-sans text-loam/80">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Module Overview */}
      <section className="py-16 md:py-20 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-loam mb-4">
              Das bekommst du im Frühlings-Guide
            </h2>
            <p className="text-sm font-sans text-loam/60 max-w-2xl mx-auto">
              5 umfassende Module mit allem, was du wissen musst.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: 1, title: "Fruktan & Anweiden", desc: "Schritt-für-Schritt Plan für sicheres Anweiden" },
              { num: 2, title: "Fellwechsel", desc: "So unterstützt du dein Pferd optimal" },
              { num: 3, title: "Parasiten & Entwurmung", desc: "Moderne Strategien statt blindem Entwurmen" },
              { num: 4, title: "Fütterung im Frühjahr", desc: "Mineralien, Kräuter und Anpassungen" },
              { num: 5, title: "Checklisten & Kalender", desc: "Zum Ausdrucken und Abhaken" },
            ].map((module) => (
              <div
                key={module.num}
                className="bg-white border border-loam/10 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 bg-sage/10 rounded-lg text-sage font-serif font-semibold mb-4">
                  {module.num}
                </span>
                <h3 className="text-lg font-serif text-loam mb-2">{module.title}</h3>
                <p className="text-sm font-sans text-loam/60">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Quote */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExpertQuote author="Diana, Pferdesicht">
            Wissen gibt dir die Sicherheit, die richtigen Entscheidungen für dein Pferd zu treffen –
            auch wenn alle anderen etwas anderes behaupten.
          </ExpertQuote>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-12">
            Alles was du bekommst
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Play, label: "2+ Stunden Video", desc: "Anschaulich erklärt" },
              { icon: FileText, label: "Druckbare PDFs", desc: "Checklisten & Kalender" },
              { icon: Clock, label: "Lebenslanger Zugang", desc: "Inkl. aller Updates" },
              { icon: Users, label: "Community", desc: "Austausch mit anderen" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-loam mb-1">{item.label}</h3>
                <p className="text-xs font-sans text-loam/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 bg-sage/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-loam mb-4">
              Sichere dir den Frühlings-Guide
            </h2>
            <p className="text-sm font-sans text-loam/60">
              Einmalzahlung. Lebenslanger Zugang. Kein Abo.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <PricingCard
              title="Frühlings-Guide"
              subtitle="Der komplette Guide für die Weidesaison"
              price="47"
              originalPrice="67"
              period="einmalig"
              variant="with-guarantee"
              highlighted
              features={[
                "5 umfassende Video-Module",
                "Druckbare Checklisten & Kalender",
                "Bonus: Tierarzt-Fragen Vorlage",
                "Lebenslanger Zugang & Updates",
                "30 Tage Geld-zurück-Garantie",
              ]}
              ctaText="Jetzt kaufen"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {[
              { q: "Wie lange habe ich Zugang?", a: "Lebenslang! Einmal kaufen, für immer nutzen." },
              { q: "Ist der Guide für Anfänger geeignet?", a: "Ja! Alles wird verständlich erklärt." },
              { q: "Was, wenn er mir nicht gefällt?", a: "30 Tage Geld-zurück-Garantie, ohne Wenn und Aber." },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-loam/10 rounded-lg p-4 group"
              >
                <summary className="font-sans font-semibold text-loam cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-sage">+</span>
                </summary>
                <p className="mt-3 text-sm font-sans text-loam/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-loam">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Bereit für einen entspannten Frühling?
          </h2>
          <p className="text-sm font-sans text-white/70 mb-8">
            Hol dir jetzt den Guide und starte sicher in die Weidesaison.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold/90 font-sans font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors"
            style={{ color: "#2c2a25" }}
          >
            Frühlings-Guide sichern – 47€
          </a>
          <p className="mt-4 text-xs font-sans text-white/50 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            30 Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
