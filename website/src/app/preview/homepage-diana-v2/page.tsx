// app/preview/homepage-diana-v2/page.tsx
// Preview: Alternative Diana-Section für Homepage
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Preview: Homepage Diana Section v2 | Pferdesicht',
  description: 'Preview-Version der Diana Section mit verbesserter Konsistenz',
  robots: 'noindex, nofollow',
}

export default function HomepageDianaV2Preview() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-purple-600 text-white text-center py-2 text-sm font-medium">
        🎨 Preview: Diana Section v2 — <a href="/#diana" className="underline">Vergleiche mit Live</a>
      </div>
      <div className="h-10" /> {/* Spacer for fixed banner */}

      {/* Info Box */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg p-6 border border-loam/20 shadow-sm mb-8">
          <h1 className="font-serif text-2xl text-loam mb-4">Vorschlag: Diana Section (Homepage)</h1>
          <p className="text-loam/70 font-sans text-sm mb-4">
            Änderungen gegenüber der aktuellen Version:
          </p>
          <ul className="text-loam/70 font-sans text-sm space-y-2 list-disc list-inside">
            <li><strong>Intro:</strong> Pain-fokussiert, auf Augenhöhe</li>
            <li><strong>Text:</strong> Story + Benefit ("selbst denken, verstehen, eigener Weg")</li>
            <li><strong>Stats:</strong> Mit konkreten Benefits für Anna + Jump-Links</li>
            <li><strong>Abschluss:</strong> Zentraler USP-Satz</li>
          </ul>
        </div>
      </div>

      {/* ============================================ */}
      {/* DIANA SECTION - NEUE VERSION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">

            <div className="lg:col-span-2 text-center lg:text-left">
              <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                ÜBER MICH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-loam mb-4 sm:mb-6">Ich bin Diana.</h2>

              <div className="relative w-48 sm:w-64 md:w-72 lg:w-full max-w-[280px] aspect-[3/4] rounded-sm overflow-hidden shadow-lg ring-4 ring-sage/20 mb-5 sm:mb-6 mx-auto lg:mx-0">
                <Image
                  src="/images/Diana_Pferdesicht.jpeg"
                  alt="Diana - Gründerin von Pferdesicht"
                  fill
                  className="object-cover object-top"
                />
              </div>

            </div>

            <div className="lg:col-span-3">
              {/* NEU: Pain-fokussiertes Intro */}
              <div className="bg-white rounded-sm p-5 sm:p-6 md:p-8 border-l-4 border-gold mb-5 sm:mb-6 shadow-sm">
                <p className="font-serif text-loam text-base sm:text-lg md:text-xl italic leading-relaxed">
                  Ich weiß, wie es sich anfühlt, wenn alle was anderes sagen – und du dich fragst, ob DU das Problem bist.
                </p>
              </div>

              {/* NEU: Story + Identifikation */}
              <div className="space-y-3 sm:space-y-4 text-loam/85 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Schon mit 12, als ich anfing zu reiten, fühlte sich irgendetwas falsch an. Alle sagten: „Stell dich nicht so an." Ich hab's trotzdem gespürt.
                </p>

                <p>
                  In <strong className="text-loam font-medium">15 Jahren Hempura</strong>, ein Unternehmen im Bereich Pferdegesundheit und -ernährung, dass ich mit meinem Mann Stefan ab 2009 aufgebaut habe, habe ich mit tausenden Experten gesprochen — Tierärzte, Therapeuten, Trainer — die sich manchmal komplett widersprachen.
                </p>

                <p>
                  Das hat mich gezwungen, selbst zu denken und zu recherchieren. Um wirklich zu verstehen. Um meinen eigenen Weg zu finden.
                </p>

                <p className="text-loam font-medium text-sm sm:text-base md:text-lg">
                  Wenn du auch dieses Gefühl kennst – dass irgendetwas nicht stimmt, aber niemand dich ernst nimmt – dann bist du hier richtig.
                </p>
              </div>

              {/* NEU: Stats als klickbare Links mit Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { num: "30+", label: "Jahre mit Pferden", benefit: "Die Fehler, die du nicht machen musst", link: "/ueber-mich#perspektive" },
                  { num: "16", label: "Jahre Reittherapie", benefit: "Warum dein Pferd dich spiegelt", link: "/ueber-mich#reittherapie" },
                  { num: "15", label: "Jahre Hempura", benefit: "Tausende Gespräche mit Pferdeexperten — für dich gefiltert", link: "/ueber-mich#hempura" },
                  { num: "5", label: "Jahre Freiheitsdressur", benefit: "Echte Partnerschaft statt Kontrolle", link: "/ueber-mich#freiheitsdressur" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="bg-white rounded-sm p-4 shadow-sm border-l-4 border-gold/50 hover:border-gold hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="text-3xl sm:text-4xl font-light text-gold flex-shrink-0 leading-none">{item.num}</div>
                      <div>
                        <div className="text-xs text-loam/60 font-sans uppercase tracking-wide">{item.label}</div>
                        <div className="text-sm sm:text-base text-loam font-medium font-sans leading-snug mt-1 group-hover:text-gold transition-colors">
                          {item.benefit}
                          <ArrowRight className="w-3 h-3 inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* NEU: Abschluss-Satz */}
              <p className="mt-6 text-loam font-serif text-base sm:text-lg md:text-xl text-center lg:text-left">
                Ich schaue nicht nur auf das Pferd — ich schaue auf das, <strong>was zwischen Mensch und Pferd passiert</strong>.
              </p>

              <Link
                href="/ueber-mich"
                className="inline-flex items-center gap-2 mt-5 sm:mt-6 text-gold font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-[#b8956a] transition-colors min-h-[44px]"
              >
                Meine ganze Geschichte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleichs-Hinweis */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-loam/5 rounded-lg p-6 border border-loam/10">
          <h3 className="font-serif text-xl text-loam mb-4">Zusammenfassung der Änderungen</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-sans font-bold text-loam mb-2">Aktuell (Live)</h4>
              <ul className="text-loam/70 space-y-1">
                <li>• "...allein gelassen mit deinen Fragen"</li>
                <li>• Ramses + Hufschmied Geschichte</li>
                <li>• 2.500 Experten-Gespräche</li>
                <li>• Lange Stat-Texte</li>
                <li>• Kein Abschluss-Satz</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-bold text-loam mb-2">Vorschlag (v2)</h4>
              <ul className="text-loam/70 space-y-1">
                <li>• "...fragst, ob DU das Problem bist"</li>
                <li>• Mit 12 + Bauchgefühl Story</li>
                <li>• "dann bist du hier richtig"</li>
                <li>• Stats mit Benefits für Anna + Jump-Links</li>
                <li>• USP-Abschluss</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
