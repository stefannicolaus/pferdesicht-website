// app/preview/homepage-gaslighting-v2/page.tsx
// Preview: Gaslighting Section mit mehr Punch
import Image from 'next/image'

export const metadata = {
  title: 'Preview: Gaslighting Section v2 | Pferdesicht',
  description: 'Preview-Version der Gaslighting Section mit durchgängigem Punch',
  robots: 'noindex, nofollow',
}

export default function HomepageGaslightingV2Preview() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-purple-600 text-white text-center py-2 text-sm font-medium">
        🎨 Preview: Gaslighting Section — Oben NEU / Unten AKTUELL
      </div>
      <div className="h-10" /> {/* Spacer for fixed banner */}

      {/* ============================================ */}
      {/* NEUE VERSION - MIT MEHR PUNCH */}
      {/* ============================================ */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
          <h2 className="font-serif text-xl text-green-800 mb-2">✨ NEUE VERSION (Vorschlag)</h2>
          <p className="text-green-700 font-sans text-sm">
            Durchgängiger Punch, bleibt bei "Du", universelle Wahrheit statt persönlicher Story
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/thumbnails/thumbnail-mindset.png"
                alt="Inniger Moment zwischen Mensch und Pferd"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-2 lg:order-1">
              <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                DAS KENNST DU VIELLEICHT?
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam leading-tight mb-4 sm:mb-6">
                &quot;Du denkst zu viel.&quot; Mein Lieblingssatz.{" "}
                <span className="block sm:inline italic text-sage">Gleich nach &quot;Das haben wir schon immer so gemacht.&quot;</span>
              </h2>

              {/* NEU: Bestätigung + Übergang */}
              <p className="text-loam/75 font-sans font-light leading-relaxed mb-2 text-sm sm:text-base">
                Willkommen im Club.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Dann hast du das sicher auch schon gehört:
              </p>

              <p className="text-loam font-serif text-lg sm:text-xl md:text-2xl leading-tight mb-3 sm:mb-4">
                „So macht man das eben."
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Fünf Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base italic">
                Und unter all dem liegt dieses nagende Gefühl: Mache ich vielleicht doch etwas falsch?
              </p>

              <div className="bg-loam rounded-sm p-5 sm:p-6 md:p-8">
                <p className="font-serif text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  Wenn du hinschaust und hinterfragst, machst du nichts falsch.{" "}
                  <span className="text-gold font-medium">Du machst genau das Richtige.</span>
                </p>
              </div>

              <p className="text-loam/75 font-sans font-light leading-relaxed mt-5 sm:mt-6 text-sm sm:text-base italic">
                Das nagende Gefühl, vielleicht doch etwas zu übersehen? Es ist der beste Schutz für dein Pferd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="border-t-4 border-dashed border-loam/30" />
      </div>

      {/* ============================================ */}
      {/* AKTUELLE VERSION */}
      {/* ============================================ */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-4">
          <h2 className="font-serif text-xl text-amber-800 mb-2">📍 AKTUELLE VERSION (Live)</h2>
          <p className="text-amber-700 font-sans text-sm">
            Wechselt von "Du" zu "Ich" (Diana), verliert Punch im Mittelteil
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/thumbnails/thumbnail-mindset.png"
                alt="Inniger Moment zwischen Mensch und Pferd"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-2 lg:order-1">
              <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                DAS KENNST DU VIELLEICHT
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam leading-tight mb-4 sm:mb-6">
                &quot;Du denkst zu viel.&quot; Mein Lieblingssatz.{" "}
                <span className="block sm:inline italic text-sage">Gleich nach &quot;Das haben wir schon immer so gemacht.&quot;</span>
              </h2>

              {/* AKTUELL: Wechselt zu "Ich" */}
              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Vielleicht kommen dir diese Sätze bekannt vor.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <span className="bg-amber-100 px-1">Ich hab sie alle gehört.</span> Z.B. bei einer Tierärztin, die sagte: &apos;Dicke Beine sind normal bei dem.&apos;
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Spoiler: Waren sie nicht.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <span className="bg-amber-100 px-1">Und das ist nur eines von unzähligen Beispielen aus meinen 30 Jahren die ich mit Pferden verbringe.</span>
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                <span className="bg-amber-100 px-1">Aber weißt du was? Auch wenn alle anderen mir was anderes erzählt haben</span> – meistens war mein Bauchgefühl trotzdem richtig.
              </p>

              <div className="bg-loam rounded-sm p-5 sm:p-6 md:p-8">
                <p className="font-serif text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  Wenn du hinschaust und hinterfragst, machst du nichts falsch.{" "}
                  <span className="text-gold font-medium">Du machst genau das Richtige.</span>
                </p>
              </div>

              <p className="text-loam/75 font-sans font-light leading-relaxed mt-5 sm:mt-6 text-sm sm:text-base italic">
                Das nagende Gefühl, vielleicht doch etwas zu übersehen? Es ist der beste Schutz für dein Pferd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleichs-Zusammenfassung */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-loam/5 rounded-lg p-6 border border-loam/10">
          <h3 className="font-serif text-xl text-loam mb-4">Zusammenfassung der Änderungen</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-sans font-bold text-amber-700 mb-2">❌ Aktuell (Problem)</h4>
              <ul className="text-loam/70 space-y-1">
                <li>• "Ich hab sie alle gehört" → Wechsel zu Diana</li>
                <li>• Tierärztin-Beispiel → zu spezifisch</li>
                <li>• "meinen 30 Jahren" → über Diana, nicht Anna</li>
                <li>• Punch verliert sich im Mittelteil</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-bold text-green-700 mb-2">✅ Neu (Lösung)</h4>
              <ul className="text-loam/70 space-y-1">
                <li>• "So macht man das eben" → universell</li>
                <li>• "Fünf Worte..." → Punch wie Headline</li>
                <li>• "Mache ich vielleicht doch..." → Anna's Gefühl</li>
                <li>• Durchgängiger Punch von oben bis unten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
