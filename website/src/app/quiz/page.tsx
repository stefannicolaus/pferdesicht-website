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
      setIsVisible(scrollPercent > 30)
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
          href="/quiz/start"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-lg transition-colors"
        >
          Check starten
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-white/60 text-xs font-sans text-center mt-2">
          ✓ Kostenlos · ✓ 2 Minuten · ✓ Sofort Ergebnis
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
          SEKTION 1: HERO (Above the Fold)
          ============================================ */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/images/quiz-hero-desktop-v2.png"
          alt="Pferdeherde grast auf Frühlingsweide"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-loam/70 via-loam/60 to-loam/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,42,37,0.3)_0%,rgba(44,42,37,0.6)_100%)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <p className="text-gold font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            Dein persönlicher Frühjahrs-Check
          </p>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-[1.15] text-balance [text-shadow:0_4px_20px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
            Fellwechsel, Anweiden, Parasiten –<br />
            <span className="italic text-gold [text-shadow:0_4px_20px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.5)]">alle sagen was anderes.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/95 text-base md:text-lg font-sans font-light leading-relaxed mb-6 max-w-xl mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            8 Fragen. Dein persönlicher Report. Abgestimmt auf DEIN Pferd.
          </p>

          {/* CTA Button */}
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm md:text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Check starten
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Click Triggers */}
          <p className="text-white/70 text-xs md:text-sm font-sans mt-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
            ✓ Kostenlos · ✓ 2 Minuten · ✓ Sofort Ergebnis
          </p>
        </div>
      </section>

      {/* ============================================
          SEKTION 2: PROBLEM + LÖSUNG
          ============================================ */}
      <section className="py-14 md:py-20 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Validierung (Shame Dissolution) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-loam mb-4 leading-snug">
            Dein Bauchgefühl sagt: Da stimmt was nicht.
          </h2>
          <p className="text-loam/70 text-base md:text-lg font-sans mb-10 max-w-lg mx-auto">
            Im Stall hörst du "Stell dich nicht so an" – aber du weißt:<br />
            <span className="text-sage font-medium">Dein Pferd ist nicht wie jedes andere.</span>
          </p>

          {/* 3 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🎯</span>
              <p className="text-loam font-sans font-medium">Risiko-Einschätzung<br /><span className="font-normal text-loam/70">für DEIN Pferd</span></p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">📅</span>
              <p className="text-loam font-sans font-medium">Frühlings-Kalender<br /><span className="font-normal text-loam/70">Februar bis Mai</span></p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">💌</span>
              <p className="text-loam font-sans font-medium">Persönlicher Report<br /><span className="font-normal text-loam/70">per E-Mail</span></p>
            </div>
          </div>

          {/* CTA #2 */}
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-sage hover:bg-sage/90 text-white font-sans font-bold text-sm md:text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Ja, das will ich wissen
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-loam/50 text-xs md:text-sm font-sans mt-4">
            ✓ 8 Fragen · ✓ 2 Minuten · ✓ Kostenlos
          </p>
        </div>
      </section>

      {/* ============================================
          SEKTION 3: DIANA MINI
          ============================================ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-5 md:gap-8">
          {/* Foto */}
          <img
            src="/images/Diana_Pferdesicht.jpeg"
            alt="Diana - Gründerin von Pferdesicht"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top shadow-lg ring-2 ring-sage/20 flex-shrink-0"
          />
          {/* Statement */}
          <div className="text-center md:text-left">
            <p className="text-loam/90 text-base md:text-lg font-sans font-light italic leading-relaxed">
              "Vor 16 Jahren stand ich genauso da wie du.<br className="hidden md:inline" />
              Heute weiß ich: <span className="text-sage font-medium not-italic">Du fragst nicht zu viel.</span>"
            </p>
            <p className="text-loam/50 text-sm font-sans mt-2">– Diana, Gründerin von Pferdesicht</p>
          </div>
        </div>
      </section>

      {/* ============================================
          SEKTION 4: FINAL CTA
          ============================================ */}
      <section className="py-14 md:py-20 bg-loam">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-6 leading-snug">
            Finde heraus, was <span className="text-gold italic">DEIN Pferd</span> jetzt braucht.
          </h2>

          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Her damit
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-white/50 text-sm font-sans mt-4">
            ✓ 8 Fragen · ✓ 2 Minuten · ✓ Kostenlos
          </p>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </div>
  )
}
