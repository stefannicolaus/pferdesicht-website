"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Menu, X, Check } from "lucide-react"

export default function QuizLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToStart = () => {
    // For now, just link to /quiz/start when we build it
    window.location.href = "/quiz/start"
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Texture Overlay - low z-index to stay behind modals/menus */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05] bg-paper-grain" />

      {/* Header */}

      {/* SECTION 1: HERO */}
      <section className="relative py-20 md:py-28 min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/quiz-hero-desktop-v2.png"
          alt="Pferdeherde grast auf Frühlingsweide"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-loam/50 via-loam/30 to-loam/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1] text-balance drop-shadow-lg">
            Wie fit ist dein Pferd für den <span className="italic text-gold">Frühling</span>?
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
            Finde in 2 Minuten heraus, worauf du jetzt achten solltest – und was du getrost ignorieren kannst.
          </p>
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Quiz starten
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/70 text-sm font-sans mt-6">
            8 kurze Fragen · 100% kostenfrei
          </p>
        </div>
      </section>

      {/* SECTION 2: PROBLEM/AGITATION */}
      <section className="py-20 md:py-24 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-loam/90 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Vielleicht kennst du das:<br /><br />
              Der Frühling kommt, und plötzlich prasseln die Ratschläge auf dich ein: <em>Anweiden! Fellwechsel unterstützen! Entwurmen! Fütterung umstellen!</em> Aber was davon ist wirklich wichtig für <strong className="text-loam font-semibold">DEIN</strong> Pferd?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-sm border border-sage/20 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-loam font-sans font-semibold mb-1">Keine Pauschal-Ratschläge</p>
                  <p className="text-loam/70 text-sm font-sans">Sondern Empfehlungen basierend auf deiner Situation</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-sm border border-sage/20 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-loam font-sans font-semibold mb-1">Keine endlosen Recherchen</p>
                  <p className="text-loam/70 text-sm font-sans">Sondern Klarheit in 2 Minuten</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-sm border border-sage/20 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-loam font-sans font-semibold mb-1">Kein Rätselraten</p>
                  <p className="text-loam/70 text-sm font-sans">Sondern ein konkreter erster Schritt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SO FUNKTIONIERT'S */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-loam text-center mb-16">
            So funktioniert's:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-6">
                <span className="text-sage font-serif text-2xl font-bold">1</span>
              </div>
              <p className="text-loam font-sans text-lg">Beantworte 8 Fragen über dein Pferd</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-6">
                <span className="text-sage font-serif text-2xl font-bold">2</span>
              </div>
              <p className="text-loam font-sans text-lg">Bekomme deine Risiko-Einschätzung sofort auf dem Bildschirm</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 border-2 border-sage flex items-center justify-center mx-auto mb-6">
                <span className="text-sage font-serif text-2xl font-bold">3</span>
              </div>
              <p className="text-loam font-sans text-lg">Erhalte deinen persönlichen Report per E-Mail</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/quiz/start"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-lg transition-colors"
            >
              Jetzt starten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WAS DU BEKOMMST */}
      <section className="py-20 md:py-24 bg-sage">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-16">
            Was du nach dem Quiz bekommst:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-2">Deine persönliche Risiko-Einschätzung</h3>
                <p className="text-white/80 font-sans">Basierend auf Stoffwechsel, Vorgeschichte und Haltung</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-2">Die Prioritäten für DEINEN Frühling</h3>
                <p className="text-white/80 font-sans">Was zuerst? Was kann warten? Was kannst du ignorieren?</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-2">Deinen persönlichen Frühlings-Kalender</h3>
                <p className="text-white/80 font-sans">Februar bis Mai: Was wann dran ist – zum Abhaken</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💌</span>
              </div>
              <div>
                <h3 className="text-white font-sans font-bold text-lg mb-2">Alles als ausführlichen Report per E-Mail</h3>
                <p className="text-white/80 font-sans">Geschrieben für dein Pferd, nicht für irgendeins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FÜR WEN / NICHT FÜR WEN */}
      <section className="py-20 md:py-24 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Für wen */}
            <div className="bg-white p-8 rounded-sm border border-sage/20 shadow-sm">
              <h3 className="text-xl font-serif text-loam mb-6">Dieses Quiz ist für dich, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans">Du dein Pferd gut durch den Frühling bringen willst</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans">Du nicht sicher bist, womit du anfangen sollst</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans">Du keine Lust auf stundenlange Recherche hast</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-loam/80 font-sans">Du lieber konkrete Tipps als allgemeine Ratschläge willst</span>
                </li>
              </ul>
            </div>
            
            {/* Nicht für wen */}
            <div className="bg-white p-8 rounded-sm border border-loam/10 shadow-sm">
              <h3 className="text-xl font-serif text-loam mb-6">Dieses Quiz ist NICHT für dich, wenn...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-loam/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-loam/60" />
                  </div>
                  <span className="text-loam/80 font-sans">Dein Pferd akute gesundheitliche Probleme hat (→ Tierarzt)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-loam/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-loam/60" />
                  </div>
                  <span className="text-loam/80 font-sans">Du bereits einen strukturierten Frühlings-Plan hast</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ÜBER DIANA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-sage/20 flex-shrink-0">
              <img
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana - Gründerin von Pferdesicht"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-loam/90 text-lg font-sans font-light leading-relaxed">
                Ich bin Diana – seit über 30 Jahren begleiten mich Pferde. 20 Jahre davon im Offenstall, wo ich gelernt habe: Das meiste Wissen muss man sich selbst erarbeiten. Heute teile ich, was ich gelernt habe – damit du nicht dieselben teuren Fehler machen musst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Bereit?
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-sans font-light mb-10">
            In 2 Minuten weißt du, worauf es jetzt ankommt.
          </p>
          <Link
            href="/quiz/start"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-xl transition-colors"
          >
            Quiz starten
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/50 text-sm font-sans mt-6">
            Kostenlos · Keine Verpflichtung · Sofort starten
          </p>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
