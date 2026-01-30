"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, X, Check } from "lucide-react"

// ============================================
// Mobile Sticky CTA Component (Framework v2.0)
// ============================================
function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after 30% scroll
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
          Quiz starten
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-white/60 text-xs font-sans text-center mt-2">
          ✓ 8 Fragen · ✓ 2 Minuten · ✓ Kostenlos
        </p>
      </div>
    </div>
  )
}

export default function QuizLandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Texture Overlay - low z-index to stay behind modals/menus */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05] bg-paper-grain" />

      {/* ============================================
          SECTION 1: HERO (Above the Fold - Compact!)
          Framework: CTA must be visible without scrolling
          ============================================ */}
      <section className="relative py-12 md:py-16 min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden">
        <Image
          src="/images/quiz-hero-desktop-v2.png"
          alt="Pferdeherde grast auf Frühlingsweide"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-loam/70 via-loam/60 to-loam/75" />
        {/* Additional radial gradient for center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,42,37,0.3)_0%,rgba(44,42,37,0.6)_100%)]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow Label */}
          <p className="text-gold font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            Dein persönlicher Frühjahrs-Fahrplan
          </p>

          {/* Headline - Visual Hierarchy: Most important */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-[1.15] text-balance [text-shadow:0_4px_20px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.4)]">
            Fellwechsel, Anweiden, Parasiten –<br />
            <span className="italic text-gold [text-shadow:0_4px_20px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.5)]">alle sagen was anderes.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/95 text-base md:text-lg font-sans font-light leading-relaxed mb-6 max-w-xl mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            8 Fragen zu deinem Pferd. Dein persönlicher Report – abgestimmt auf eure Situation.
          </p>

          {/* CTA #1 - Above the Fold */}
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm md:text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Quiz starten
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Click Triggers - PFLICHT */}
          <p className="text-white/80 text-xs md:text-sm font-sans mt-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">
            ✓ 8 Fragen · ✓ 2 Minuten · ✓ Sofort Ergebnis
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: GASLIGHTING (Humor: Entlarvung)
          Framework: Attention Grabber + Validierung
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Header - Gaslighting Entlarvung */}
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-10">
            Im Stall hörst du:
          </h2>

          {/* Gaslighting Quote Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white border border-loam/10 rounded-sm px-5 py-4 shadow-sm">
              <p className="text-loam/70 font-sans italic text-base">"Stell dich nicht so an."</p>
            </div>
            <div className="bg-white border border-loam/10 rounded-sm px-5 py-4 shadow-sm">
              <p className="text-loam/70 font-sans italic text-base">"Das haben wir immer so gemacht."</p>
            </div>
            <div className="bg-white border border-loam/10 rounded-sm px-5 py-4 shadow-sm">
              <p className="text-loam/70 font-sans italic text-base">"Dein Pferd ist nicht aus Zucker."</p>
            </div>
            <div className="bg-white border border-loam/10 rounded-sm px-5 py-4 shadow-sm">
              <p className="text-loam/70 font-sans italic text-base">"Du machst dir zu viele Gedanken."</p>
            </div>
          </div>

          {/* Validierung - Wolf: Self-Image bestätigen */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-loam text-lg md:text-xl font-sans font-medium leading-relaxed">
              Dein Bauchgefühl sagt was anderes?<br />
              <span className="text-sage font-semibold">Dann hör drauf.</span>
            </p>
            <p className="text-loam/70 text-base font-sans mt-3">
              Dieses Quiz gibt dir die Fakten dazu.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WAS DU BEKOMMST
          Framework: Benefits + CTA #2
          ============================================ */}
      <section className="py-16 md:py-20 bg-sage">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white text-center mb-12">
            Was du nach dem Quiz bekommst:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-1">Deine persönliche Risiko-Einschätzung</h3>
                <p className="text-white/80 font-sans text-sm">Basierend auf Stoffwechsel, Vorgeschichte und Haltung</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-1">Die Prioritäten für DEINEN Frühling</h3>
                <p className="text-white/80 font-sans text-sm">Was zuerst? Was kann warten? Was kannst du ignorieren?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📅</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-1">Deinen persönlichen Frühlings-Kalender</h3>
                <p className="text-white/80 font-sans text-sm">Februar bis Mai: Was wann dran ist – zum Abhaken</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💌</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-1">Alles als ausführlichen Report per E-Mail</h3>
                <p className="text-white/80 font-sans text-sm">Geschrieben für dein Pferd, nicht für irgendeins</p>
              </div>
            </div>
          </div>

          {/* CTA #2 - Nach "Was du bekommst" */}
          <div className="text-center">
            <Link
              href="/quiz/start"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-white/90 text-sage font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
            >
              Jetzt Quiz starten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/60 text-sm font-sans mt-4">
              ✓ 8 Fragen · ✓ 2 Minuten · ✓ Sofort Ergebnis
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: SO FUNKTIONIERT'S
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-loam text-center mb-12">
            So funktioniert's:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-serif text-xl font-bold">1</span>
              </div>
              <p className="text-loam font-sans">Beantworte 8 kurze Fragen über dein Pferd</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-serif text-xl font-bold">2</span>
              </div>
              <p className="text-loam font-sans">Bekomme deine Einschätzung sofort auf dem Bildschirm</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-sage font-serif text-xl font-bold">3</span>
              </div>
              <p className="text-loam font-sans">Erhalte deinen persönlichen Report per E-Mail</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: FÜR WEN / NICHT FÜR WEN
          ============================================ */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Für wen */}
            <div className="bg-white p-6 md:p-8 rounded-sm border border-sage/20 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif text-loam mb-5">Dieses Quiz ist für dich, wenn du dich fragst...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm italic">"Muss ich jetzt schon ans Anweiden denken?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm italic">"Braucht mein Pferd jetzt extra Mineralfutter?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm italic">"Wie unterstütze ich den Fellwechsel richtig?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm italic">"Womit sollte ich jetzt wirklich anfangen?"</span>
                </li>
              </ul>
            </div>

            {/* Nicht für wen */}
            <div className="bg-white p-6 md:p-8 rounded-sm border border-loam/10 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif text-loam mb-5">Dieses Quiz ist NICHT für dich, wenn...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-loam/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-loam/60" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm">Dein Pferd akute gesundheitliche Probleme hat (→ Tierarzt)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-loam/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-loam/60" />
                  </div>
                  <span className="text-loam/80 font-sans text-sm">Du bereits einen strukturierten Frühlings-Plan hast</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: DIANA - Origin Story
          Framework: Wärme + "Ich auch"-Moment
          ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-sage/20 flex-shrink-0">
              <img
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana - Gründerin von Pferdesicht"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              {/* Origin Story - Framework: Neville Wärme + Diana's Fehler */}
              <p className="text-loam/90 text-base md:text-lg font-sans font-light leading-relaxed">
                Vor 16 Jahren stand ich genauso da wie du – 20 offene Tabs, jeder sagt was anderes, und dieses nagende Gefühl: <em>Irgendetwas stimmt nicht.</em>
              </p>
              <p className="text-loam text-base md:text-lg font-sans font-medium mt-4">
                Heute weiß ich: Dein Bauchgefühl hatte recht.<br />
                <span className="text-sage">Du fragst nicht zu viel.</span>
              </p>
              <p className="text-loam/60 text-sm font-sans mt-3">
                – Diana, Gründerin von Pferdesicht
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FINAL CTA
          Framework: Wiederholter CTA #3 + Click Triggers
          ============================================ */}
      <section className="py-16 md:py-24 bg-loam">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
            Du fragst nicht zu viel.<br />
            <span className="text-gold italic">Finde heraus, was DEIN Pferd jetzt braucht.</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg font-sans font-light mb-8">
            8 Fragen. 2 Minuten. Klarheit.
          </p>

          {/* CTA #3 - Final */}
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Quiz starten
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Click Triggers - PFLICHT */}
          <p className="text-white/50 text-sm font-sans mt-4">
            ✓ Kostenlos · ✓ Kein Spam · ✓ Sofort starten
          </p>
        </div>
      </section>

      {/* Mobile Sticky CTA - Framework: PFLICHT auf Mobile */}
      <MobileStickyCTA />

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-0 lg:h-0" />
    </div>
  )
}
