"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

// ============================================
// Mobile Sticky CTA Component
// ============================================
function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > 25)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-loam px-4 py-3 safe-area-bottom">
        <Link
          href="/fruehlingsfahrplan-fuer-mein-pferd/start"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide rounded-sm shadow-lg transition-colors"
        >
          Meinen Check starten
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-white/60 text-xs font-sans text-center mt-2">
          ✓ Kostenlos · ✓ 2 Minuten · ✓ Persönlicher Report
        </p>
      </div>
    </div>
  )
}

export default function QuizLandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05] bg-paper-grain" />

      {/* ============================================
          SECTION 1: HERO
          Pattern Interrupt Headline + CTA above fold
          ============================================ */}
      <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/quiz-hero-desktop-v2.png"
          alt="Pferdeherde grast auf Frühlingsweide"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-loam/70 via-loam/60 to-loam/80" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center py-12">
          {/* Badge */}
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            Frühjahrs-Check 2026
          </p>

          {/* Headline - Pattern Interrupt */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2 leading-[1.2] [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
            Das Warmblut nebenan glänzt schon.
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-[1.2] [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
            Dein Pferd haart noch.
          </h1>

          {/* Question */}
          <p className="text-xl md:text-2xl font-serif text-gold italic mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Ist das normal — oder ein Problem?
          </p>

          {/* Subheadline */}
          <p className="text-white/90 text-base md:text-lg font-sans font-light mb-8 max-w-xl mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            Fellwechsel, Anweiden, Parasiten — 8 Fragen zu DEINEM Pferd.<br className="hidden md:block" />
            Dein persönlicher Frühlings-Report in 2 Minuten.
          </p>

          {/* CTA Button */}
          <Link
            href="/fruehlingsfahrplan-fuer-mein-pferd/start"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide rounded-sm shadow-xl transition-colors"
          >
            Meinen Check starten
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Click Triggers */}
          <p className="text-white/70 text-sm font-sans mt-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
            ✓ Kostenlos · ✓ 2 Minuten · ✓ Sofort Ergebnis
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: PROBLEM (Scham-Auflösung)
          "Hat der Cushing?" Quote + Validation
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#faf8f5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Big Quote */}
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-serif text-loam leading-tight">
              „Hat der Cushing?"
            </p>
          </div>

          {/* Scham-Auflösung */}
          <div className="text-center space-y-4 text-loam/80 text-base md:text-lg font-sans font-light">
            <p>
              Ich habe mir jahrelang Sorgen gemacht. Bis ich verstanden habe,
              was den Fellwechsel wirklich steuert — und warum mein Friese
              völlig normal gewechselt hat.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="mt-8 border-l-4 border-sage bg-sage/10 p-5 rounded-r-lg">
            <p className="text-loam font-sans">
              <span className="font-semibold">Die Wahrheit:</span> Die meisten „Diagnosen"
              am Putzplatz sind gut gemeint — aber falsch. Was wie ein Problem aussieht,
              ist oft einfach Biologie.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: BENEFITS (2x2 Grid)
          Was du nach 2 Minuten weißt
          ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-10">
            Was du nach 2 Minuten weißt:
          </h2>

          {/* 2x2 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Benefit 1: Risikogruppe */}
            <div className="bg-[#faf8f5] rounded-lg p-6">
              <span className="text-3xl mb-3 block">🎯</span>
              <h3 className="text-loam font-sans font-bold text-lg mb-2">
                Risikogruppe oder nicht?
              </h3>
              <p className="text-loam/70 text-sm font-sans">
                „Thrifty Gene"-Rassen, EMS-Zeichen, Vorgeschichte —
                der Check zeigt, wo dein Pferd steht.
              </p>
            </div>

            {/* Benefit 2: Anweiden */}
            <div className="bg-[#faf8f5] rounded-lg p-6">
              <span className="text-3xl mb-3 block">📅</span>
              <h3 className="text-loam font-sans font-bold text-lg mb-2">
                Wann kannst du anweiden?
              </h3>
              <p className="text-loam/70 text-sm font-sans">
                Nicht wenn die App 12°C zeigt. Sondern wenn der
                <span className="font-medium text-loam"> Boden </span>
                warm genug ist.
              </p>
            </div>

            {/* Benefit 3: Kotprobe */}
            <div className="bg-[#faf8f5] rounded-lg p-6">
              <span className="text-3xl mb-3 block">🔬</span>
              <h3 className="text-loam font-sans font-bold text-lg mb-2">
                Kotprobe ja oder nein?
              </h3>
              <p className="text-loam/70 text-sm font-sans">
                70-80% aller Pferde brauchen
                <span className="font-medium text-loam"> keine </span>
                Entwurmung. Gehört deins dazu?
              </p>
            </div>

            {/* Benefit 4: Fellwechsel */}
            <div className="bg-[#faf8f5] rounded-lg p-6">
              <span className="text-3xl mb-3 block">⚠️</span>
              <h3 className="text-loam font-sans font-bold text-lg mb-2">
                Normal oder Warnsignal?
              </h3>
              <p className="text-loam/70 text-sm font-sans">
                Wann du entspannt bleiben kannst. Und wann du
                wirklich zum Tierarzt solltest.
              </p>
            </div>
          </div>

          {/* CTA #2 */}
          <div className="text-center">
            <Link
              href="/fruehlingsfahrplan-fuer-mein-pferd/start"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage hover:bg-sage/90 text-white font-sans font-bold text-sm tracking-wide rounded-sm shadow-lg transition-colors"
            >
              Ja, das will ich wissen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-loam/50 text-xs font-sans mt-3">
              ✓ 8 Fragen · ✓ 2 Minuten · ✓ Kostenlos
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: DIANA (mit echter Geschichte)
          Ramses-Story statt generischer Text
          ============================================ */}
      <section className="py-12 md:py-16 bg-loam">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Foto */}
            <img
              src="/images/Diana_Pferdesicht.jpeg"
              alt="Diana"
              className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0 ring-2 ring-sage/30"
            />

            {/* Quote */}
            <div className="text-center md:text-left">
              <p className="text-white/90 text-base md:text-lg font-serif italic leading-relaxed">
                „Bei Ramses habe ich es falsch gemacht. Kurze Weide, Trockenheit,
                pralle Sonne. Ich kannte die Zusammenhänge nicht.
                <br /><br />
                Heute erkläre ich sie dir — bevor du dieselben Fehler machst."
              </p>
              <p className="text-white/50 text-sm font-sans mt-4">
                — Diana, 30+ Jahre Pferdeerfahrung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: FINAL CTA (Quiet Luxury)
          Emotionaler Payoff
          ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage/10 to-[#faf8f5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          {/* Quiet Luxury Headline */}
          <h2 className="text-2xl md:text-3xl font-serif text-loam mb-8 leading-snug">
            Die Ruhe, nicht mehr raten zu müssen.
          </h2>

          {/* Big CTA */}
          <Link
            href="/fruehlingsfahrplan-fuer-mein-pferd/start"
            className="inline-flex items-center gap-2 px-12 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide rounded-sm shadow-xl transition-colors"
          >
            Meinen Frühlings-Check starten
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-loam/50 text-sm font-sans mt-4">
            ✓ 8 Fragen · ✓ 2 Minuten · ✓ Persönlicher Report
          </p>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </div>
  )
}
