// app/preview/ueber-mich-v5/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// PFERDESICHT — Über-mich v5.0 Preview
// Route: /preview/ueber-mich-v5
// NICHT für Produktion — vor Merge in main entfernen
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Über Diana v5.0 Preview | Pferdesicht',
  description: 'Preview der optimierten Über-mich-Seite (9 Sections)',
  robots: 'noindex, nofollow',
}

export default function UeberMichV5Preview() {
  return (
    <main className="bg-[#faf8f5]">
      {/* ─── PREVIEW BANNER ─── */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gold text-white text-center py-2 text-xs font-sans font-bold tracking-[0.2em] uppercase shadow-lg">
        ⚠ PREVIEW v5.0 — NICHT LIVE ⚠
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: Hero + Einstieg
          (absorbiert "So macht man das eben")
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-start bg-loam overflow-hidden md:[clip-path:inset(0)]">
        {/* Background Image - Mobile: static, Desktop: fixed (parallax) */}
        <div className="absolute md:fixed inset-0 z-0">
          <Image
            src="/images/Diana_Pferdesicht_hero_alt.png"
            alt="Diana - Gründerin von Pferdesicht"
            fill
            className="object-cover object-[center_center] md:object-[60%_center]"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-loam via-loam/70 to-loam/30 md:bg-gradient-to-r md:from-loam/95 md:via-loam/60 md:to-loam/20" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-6xl mx-auto px-6 pt-16 md:pt-14 pb-8 md:pb-16">
          <span className="inline-block text-sage font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Über Diana
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F3F0EB] font-medium leading-[1.1] mb-2 md:mb-4 max-w-4xl">
            <span className="text-[#C5A065]">Für Pferdemenschen,</span>
            <br />
            die hinschauen.
          </h1>

          <div className="border-l-2 border-[#C5A065]/50 pl-4 md:pl-6 max-w-md">
            <p className="text-[#EBE6DF]/90 font-sans text-base md:text-lg font-light leading-relaxed mb-4">
              Mit 12, als ich anfing zu reiten, war ich vollkommen begeistert – aber gleichzeitig fühlte sich irgendetwas falsch an.
            </p>
            <p className="text-[#EBE6DF]/80 font-sans text-sm md:text-base font-light leading-relaxed">
              Als ob mein Bauchgefühl mir sagen wollte:
              <br /><br />
              <span className="italic text-[#C5A065]">Hier stimmt was nicht...</span>
              <br /><br />
              Aber alle um mich herum sagten:
              <br /><br />
              <span className="italic text-[#C5A065]">Stell dich nicht so an.</span>
            </p>
          </div>

          <div className="mt-4 md:mt-10 flex flex-col items-center md:items-start gap-4">
            <div className="bg-transparent md:bg-white/10 md:backdrop-blur-sm md:rounded-lg p-3 md:p-5 border-0 md:border md:border-[#C5A065]/30 text-center">
              <p className="hidden md:block text-[#C5A065] font-serif text-lg md:text-xl italic mb-3">
                Ich habe seitdem so ziemlich jeden Fehler gemacht, den man machen kann.<br />
                Bis ich verstanden habe, worauf es wirklich ankommt.
              </p>
              <p className="font-sans text-sm font-bold tracking-wide uppercase text-[#EBE6DF] mb-4">
                Meine Geschichte
              </p>
              <a href="#meine-geschichte" className="group inline-flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-[#C5A065] flex items-center justify-center group-hover:bg-[#d4b896] transition-colors">
                  <svg className="w-5 h-5 text-loam animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: Die Sätze, die niemand laut hinterfragt
          (v4.2: "Gaslighting-Sätze" — Headline geschärft)
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="meine-geschichte" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Die Sätze, die niemand laut hinterfragt
          </h2>

          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-10">
            Vielleicht kennst du sie auch:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              '"Dann hau da mal drauf."',
              '"Dicke Beine sind normal bei dem."',
              '"Dann reit da halt drüber."',
              '"Der verarscht dich nur."',
              '"Ein Pferd steht nun mal so."',
              '"Das macht man hier schon immer so."',
              '"Du denkst zu viel."',
              '"Das Pferd soll einfach funktionieren."',
            ].map((satz, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-loam/10 shadow-sm"
              >
                <p className="font-serif text-lg text-loam italic">
                  {satz}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-loam rounded-xl p-8 md:p-10 text-center">
            <p className="text-[#EBE6DF]/90 font-sans text-lg font-light leading-relaxed mb-4">
              Und unter all dem liegt dieser eine Satz, den niemand ausspricht – aber viele fühlen:
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[#C5A065] leading-tight">
              „Wenn du anders denkst, dann bist DU das Problem."
            </p>
            <p className="text-[#EBE6DF]/70 font-sans text-base font-light mt-6">
              Auch ich habe das lange geglaubt.
            </p>
          </div>

          {/* v5.0: "So macht man das eben" als Punch absorbiert */}
          <div className="mt-12 text-center">
            <p className="font-serif text-2xl md:text-3xl text-loam leading-tight">
              „So macht man das eben."
            </p>
            <p className="text-loam/70 font-sans text-lg font-light mt-4">
              Fünf Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: Benny + Wendepunkt
          (v4.2: "Der Moment" + "Wendepunkt" + "Benny war nur der Anfang" → 1)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Der Moment, der alles verändert hat
          </h2>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Mit 12 bekam ich ein Pflegepferd: <strong className="text-loam font-medium">Benny</strong>. Ich liebte dieses Pferd.
            </p>
            <p>
              Mit 14 wurde Benny verkauft. Ich war <strong className="text-loam font-medium">am Boden zerstört</strong>.
            </p>
            <p>
              Dann kam ein Brief – mit Fotos. Benny in einem Offenstall, mit einem anderen Pferd, eine große Weide im Hintergrund. Er sah aus wie ein <strong className="text-loam font-medium">vollkommen anderes Pferd</strong>.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-gold pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam italic leading-relaxed">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein Tier, das abgestumpft in seiner Box wartet.
            </p>
          </blockquote>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              In diesem Moment wusste ich: <strong className="text-loam font-medium">Es geht also auch anders.</strong>
            </p>
            <p>
              Und ich gab mir ein Versprechen: <strong className="text-loam font-medium">Wenn ich mal ein eigenes Pferd habe, wird es anders.</strong>
            </p>
          </div>

          {/* Wendepunkt — absorbiert */}
          <div className="mt-12 bg-loam rounded-xl p-8 md:p-10">
            <p className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight mb-4">
              Nicht mein Denken war falsch. Die Umgebung war falsch für mein Denken.
            </p>
            <p className="text-[#C5A065] font-serif text-xl italic">
              Ich wollte Pferde nicht kontrollieren. Ich wollte sie wirklich verstehen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: Ramses + Stall-Realität + Hempura
          (v4.2: "Ramses" + "Glückliche Umstände/Hempura" → 1)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-4">
            Dann kam Ramses – mein eigenes Pferd.
          </h2>
          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-8">
            Ein Friese, ganz meiner.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/images/Ramses.jpeg"
              alt="Ramses – Dianas Friese"
              fill
              className="object-cover object-center"
            />
          </div>

          <p className="font-serif text-2xl md:text-3xl text-loam leading-tight mb-10">
            Und damit begann die Realität.
          </p>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ich musste lernen, mich am Stall <strong className="text-loam font-medium">zu behaupten</strong>. Gegen die Stallkönigin. Gegen den Stallbetreiber. Gegen das kollektive <em>„Das haben wir schon immer so gemacht."</em>
            </p>
            <p>
              Nicht mit dem Kopf durch die Wand – sondern mit <strong className="text-loam font-medium">Klarheit</strong>. Kommunizieren. Erklären. Menschen mitnehmen.
            </p>
            <p>
              <strong className="text-loam font-medium">Das war härter als jedes Fachbuch.</strong>
            </p>
            <p>
              Tierärzte, die falsch lagen. Hufschmiede, die mehr schadeten als halfen. Trainer, deren Methoden nicht zu meinem Pferd passten.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-gold pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam leading-relaxed">
              Zehntausende Euro. Für Tierärzte, Therapeuten, Equipment – weil ich das Wichtige vom Unwichtigen noch nicht unterscheiden konnte.
            </p>
          </blockquote>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5a: SÄULE 1 — Hempura (15 Jahre)
          Diana's Praxis-Autorität — Live-Text + Unterscheidungs-Ergänzung
          Reihenfolge: Hempura → Reittherapie → Freiheitsdressur
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">

          <span className="inline-block text-white/50 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Was mich geprägt hat · Teil 1
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            Dann kamen glückliche Umstände — und plötzlich waren Pferde nicht mehr nur mein Hobby
          </h2>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              2009 begannen Stefan und ich, gemeinsam ein Unternehmen aufzubauen — im Bereich Pferdegesundheit und -ernährung.
            </p>
            <p>
              Was als unternehmerische Idee begann, wurde schnell zu etwas viel Größerem.
            </p>
            <p>
              <strong className="text-white font-medium">15 Jahre Hempura.</strong> Tausende Gespräche mit unseren Kooperationspartnern.
            </p>
            <p>
              Alles Pferdeexperten wie Tierärzten, Therapeuten, Hufschmieden, Trainern — mit denen ich jeden Tag über Gesundheit, Haltung, Training & Fütterung sprach. Nicht oberflächlich, sondern <strong className="text-white font-medium">in der Tiefe</strong>.
            </p>
          </div>

          <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mt-12 mb-4">
            Aber die wichtigsten Gespräche waren die mit Pferdebesitzern wie dir
          </h3>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Tausende Gespräche mit unseren Kunden, nicht selten in genau diesen Momenten: Wenn das Pferd krank ist. Wenn nichts mehr hilft. Wenn die Verzweiflung groß ist.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-[#C5A065] pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
              Ich weiß genau, wie sich das anfühlt.
            </p>
          </blockquote>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Diese Gespräche haben etwas in mir geweckt, das im Grunde schon immer da war.
            </p>
          </div>

          <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mt-12 mb-4">
            Ich wollte wirklich verstehen
          </h3>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Nicht oberflächlich, nicht <em>„reicht schon"</em> — sondern in der Tiefe.
            </p>
            <p>
              Nicht weil ich musste. Sondern weil ich nur so beruhigt sein konnte. Weil ich nur so wusste, dass ich das Richtige für mein Pferd tue. Weil ich dieses nagende Gefühl loswerden wollte, vielleicht doch etwas falsch zu machen.
            </p>
            <p>
              Also fing ich an, neben dem täglichen Arbeiten mit Pferden zu recherchieren. Unermüdlich. Bücher, Studien, Fachliteratur.
            </p>
            <p>
              Und das alles parallel. Recherche. Profi-Gespräche. Und gleichzeitig: Umsetzen, ausprobieren, optimieren, lernen — mit Ramses an meiner Seite.
            </p>
            <p>
              Mit der Zeit lernte ich, <strong className="text-white font-medium">meinem eigenen Bauchgefühl zu vertrauen</strong>. Immer mehr.
            </p>
          </div>

          {/* Kern-Ergebnis — Brücke zur Kuratorin-USP */}
          <div className="my-10 bg-white/15 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20 text-center">
            <p className="text-white/90 font-sans text-lg font-light leading-relaxed">
              Diese Kombination — unermüdliche Recherche, tausende Experten-Gespräche, und das tägliche Umsetzen mit meinem eigenen Pferd — hat mir etwas gegeben, das kein Kurs der Welt vermitteln kann:
            </p>
            <p className="font-serif text-2xl md:text-3xl text-white leading-tight mt-4">
              <strong>Die Fähigkeit zu unterscheiden.</strong>
            </p>
            <p className="text-white/70 font-sans text-base font-light mt-3">
              Zwischen gut und mittelmäßig. Zwischen fundiert und oberflächlich. Zwischen „klingt gut" und „ist gut".
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5b: SÄULE 2 — Reittherapie (16 Jahre)
          Diana's Beziehungs-Autorität — Live-Text
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">

          <span className="inline-block text-[#C5A065]/70 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Was mich geprägt hat · Teil 2
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F3F0EB] leading-tight mb-8">
            16 Jahre Reittherapeutin — Was passiert, wenn man Pferden wirklich zuhört
          </h2>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Neben unserem Unternehmen Hempura und meinem eigenen Weg im Offenstall mit Ramses, war da noch etwas:
            </p>
            <p>
              Ich habe <strong className="text-[#F3F0EB] font-medium">16 Jahre lang als Reittherapeutin</strong> gearbeitet. Diese Arbeit hat mein Verständnis von Pferden grundlegend verändert.
            </p>
            <p>
              Ich habe <strong className="text-[#F3F0EB] font-medium">über 200 Menschen begleitet</strong> — Kinder und Erwachsene mit körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen. Menschen, die von anderen Menschen verletzt wurden und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
            </p>
          </div>

          {/* Reittherapie-Bild */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl my-10">
            <Image
              src="/images/reittherapie.png"
              alt="Diana bei der Reittherapie mit Felix"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ich habe gesehen, wie Kinder, die kein Wort sprachen, <strong className="text-[#F3F0EB] font-medium">mit Pferden kommunizierten</strong>. Wie traumatisierte Erwachsene durch ein Pferd wieder Vertrauen fanden. Wie Pferde sofort zeigten, wenn ein Mensch innerlich unruhig war — meist schon <strong className="text-[#F3F0EB] font-medium">bevor der Mensch es überhaupt selbst wusste</strong>.
            </p>
          </div>

          {/* Signature Phrase */}
          <div className="my-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/30 text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight mb-4">
              Pferde lügen nicht. Sie spiegeln.
            </p>
            <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
              Und wenn du verstehst, was sie dir zeigen, verstehst du nicht nur dein Pferd — sondern lernst auch dich selbst besser kennen.
            </p>
          </div>

          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-10">
            <strong className="text-[#F3F0EB] font-medium">Der Mensch ist immer Teil der Gleichung.</strong> Das habe ich in der Reittherapie gelernt. Und das verändert alles zwischen dir und deinem Pferd.
          </p>

          {/* Trainer-Vergleich */}
          <h3 className="font-serif text-2xl text-[#F3F0EB] leading-tight mb-6">
            Diese Perspektive, geprägt durch meine Reittherapie, unterscheidet mich von normalen Pferdetrainern:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              ['"Das Pferd ist dominant"', 'Das Pferd spiegelt die Unsicherheit des Menschen'],
              ['"Das Pferd testet dich"', 'Das Pferd sucht Sicherheit'],
              ['"Das ist ein Verhaltensproblem"', 'Das ist eine Beziehungsfrage'],
              ['"Mehr Druck!"', 'Mehr Klarheit — in dir selbst'],
            ].map(([left, right], index) => (
              <div key={index} className="contents">
                <div className="bg-white/10 rounded-lg p-5 border border-white/10">
                  <p className="text-[#EBE6DF]/50 font-sans text-sm font-bold tracking-wide uppercase mb-2">
                    Was normale Trainer sagen...
                  </p>
                  <p className="font-serif text-lg text-[#F3F0EB]">
                    {left}
                  </p>
                </div>
                <div className="bg-white/15 rounded-lg p-5 border border-[#C5A065]/30">
                  <p className="text-[#C5A065] font-sans text-sm font-bold tracking-wide uppercase mb-2">
                    Was ich zusätzlich sehe...
                  </p>
                  <p className="font-serif text-lg text-[#F3F0EB]">
                    {right}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Zitat */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/30 text-center">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-tight">
              „Das Pferd als Spiegel deiner Seele auf dem Weg zu dir selbst."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5c: SÄULE 3 — Freiheitsdressur (5 Jahre)
          Diana's Trainings-Autorität — Live-Text
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">

          <span className="inline-block text-white/50 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Was mich geprägt hat · Teil 3
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            Die Freiheitsdressur — 5 Jahre hinter den Kulissen
          </h2>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              5 Jahre lang haben Stefan und ich ein Unternehmen mit <strong className="text-white font-medium">einer der bekanntesten Freiheitsdressur-Trainerinnen Europas</strong> aufgebaut.
            </p>
            <p>
              Sie stand vor der Kamera und wir haben ihr komplettes Online-Kurs-Business, ihre Positionierung als Trainerin und das gesamte Projektmanagement aufgebaut und betrieben.
            </p>
            <p>
              Im Kern ging es dabei immer um dieselben Themen: Vertrauen, Freundschaft und feine Kommunikation zwischen Mensch und Pferd — Prinzipien, die auch meinen eigenen Weg mit Ramses tief geprägt haben.
            </p>
            <p>
              Durch diese Kooperation bekam ich auch noch zusätzlich Einblicke in <strong className="text-white font-medium">internationale Pferde-Shows</strong> — und natürlich auch in das, was dort hinter dem Vorhang passiert...
            </p>
            <p>
              All diese Einblicke und neuen Perspektiven haben mein Verständnis von Pferden erweitert — auf eine Weise, die ich vorher nicht für möglich gehalten hätte.
            </p>
            <p>
              Und gleichzeitig habe ich in diesen Jahren <strong className="text-white font-medium">meinen ganz eigenen Weg gefunden</strong>.
            </p>
          </div>

          {/* Kern-Zitat */}
          <div className="my-10 bg-loam/80 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/30 text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#F3F0EB] italic leading-tight">
              „Echte Partnerschaft entsteht, wenn das Pferd <span className="text-[#C5A065]">WÄHLT</span> zu bleiben — nicht weil es muss, sondern weil es will."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5d: Meine Perspektive und warum ich anders schaue
          Zusammenführung: Dreifach-Autorität als visuelles Statement
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F3F0EB] leading-tight mb-4">
            Meine Perspektive und warum ich anders schaue
          </h2>
          <p className="text-[#EBE6DF]/70 font-sans text-lg font-light leading-relaxed mb-12">
            Wenn ich heute über Pferdehaltung, Training oder Verhalten spreche, bringe ich immer diese vierfache Perspektive mit:
          </p>

          {/* Vierfach-Säulen als 4 Karten (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Säule 1: Praxis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <span className="inline-block text-[#C5A065] font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Praxis
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#F3F0EB] leading-tight mb-3">
                30+ Jahre mit Pferden
              </h3>
              <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                Was Pferde körperlich brauchen — Fütterung, Offenstallhaltung, Gesundheit. Die Fehler, die Tierarztrechnungen, die schlaflosen Nächte. <strong className="text-[#F3F0EB] font-medium">Selbst erlebt.</strong>
              </p>
            </div>

            {/* Säule 2: Wissen/Hempura */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <span className="inline-block text-[#C5A065] font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Wissen
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#F3F0EB] leading-tight mb-3">
                15 Jahre Hempura
              </h3>
              <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                Tausende Experten-Gespräche und unermüdliche Recherche. <strong className="text-[#F3F0EB] font-medium">Sortiert für dich</strong> — auf den Punkt gebracht, ohne endloses Suchen.
              </p>
            </div>

            {/* Säule 3: Reittherapie */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#C5A065]/40">
              <span className="inline-block text-[#C5A065] font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Beziehung
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#F3F0EB] leading-tight mb-3">
                16 Jahre Reittherapie
              </h3>
              <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                Was Pferde uns über uns selbst zeigen — und wie die Beziehung alles beeinflusst. <strong className="text-[#F3F0EB] font-medium">Das Pferd als Spiegel.</strong>
              </p>
            </div>

            {/* Säule 4: Freiheitsdressur */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <span className="inline-block text-[#C5A065] font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Training
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#F3F0EB] leading-tight mb-3">
                5 Jahre Freiheitsdressur
              </h3>
              <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                Hinter den Kulissen bei einer der bekanntesten Trainerinnen Europas. <strong className="text-[#F3F0EB] font-medium">Meinen eigenen Weg zu echter Partnerschaft gefunden.</strong>
              </p>
            </div>
          </div>

          {/* Punch */}
          <div className="text-center">
            <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-4">
              Das macht mich nicht besser als andere Experten. Aber <strong className="text-[#F3F0EB] font-medium">anders</strong>.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight">
              Ich schaue nicht nur auf das Pferd — ich schaue auf das,<br className="hidden md:inline" /> <strong>was zwischen Mensch und Pferd passiert</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: Was ich glaube
          (Herzstück — leicht gestrafft)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Was ich glaube
          </h2>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p className="font-serif text-2xl md:text-3xl text-loam leading-tight">
              Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen, nicht das Problem sind – <strong>sondern die Lösung.</strong>
            </p>

            <p>
              Die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>

            <p>
              Das Problem sind die, die <strong className="text-loam font-medium">NICHT</strong> fragen. Die die Verantwortung unreflektiert abgeben. Die sagen: <span className="italic">„Der Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater, Hufschmied, Sattler wird schon wissen, was er tut."</span>
            </p>

            <p>
              Versteh mich nicht falsch: Diese Menschen sind wichtig. Aber sie ersetzen nicht <strong className="text-loam font-medium">deine Verantwortung</strong>. Sie ersetzen nicht <strong className="text-loam font-medium">dein Hinschauen</strong>. Sie ersetzen nicht <strong className="text-loam font-medium">dein Bauchgefühl</strong>.
            </p>

            <p>
              Ich habe das am eigenen Leib erfahren – Tierärzten vertraut, die falsch lagen. Hufschmieden, die mehr Schaden anrichteten als Nutzen. Es hat mich Jahre und Zehntausende Euro gekostet, bis ich gelernt habe, selbst hinzuschauen.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-gold pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam italic leading-relaxed">
              Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
            </p>
          </blockquote>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht.
            </p>
            <p>
              Du bist nicht „zu pingelig". Du bist nicht „zu kompliziert".
            </p>
            <p>
              <strong className="text-loam font-medium">Du schaust hin. Und genau das macht den Unterschied.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: Was ich dir geben will + Kuratorin-USP
          (★ KRITISCH: Kuratorin-USP fehlte in v4.2 komplett!)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F3F0EB] leading-tight mb-4">
            Was ich dir geben will
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-[#C5A065] mb-10">
            Wissen als Rüstung.
          </p>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Die <strong className="text-[#EBE6DF] font-medium">Abkürzungen</strong>, die mir niemand gezeigt hat. Die <strong className="text-[#EBE6DF] font-medium">Warnsignale</strong>, die ich zu spät erkannt habe.
            </p>
          </div>

          {/* ★ KURATORIN-USP — NEU in v5.0 */}
          <div className="my-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/30">
            <p className="text-[#F3F0EB] font-sans text-lg leading-relaxed">
              Du musst nicht mehr stundenlang googeln und am Ende verwirrter sein als vorher. <strong className="text-[#C5A065] font-semibold">Ich habe das für dich sortiert.</strong> Was stimmt, was Mythos ist – verständlich erklärt, ohne Tiermedizin-Studium.
            </p>
          </div>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Wie du erkennst, welchen Experten du vertrauen kannst. Wie du dich am Stall <strong className="text-[#EBE6DF] font-medium">behauptest</strong>. Wie du mit Stallpolitik umgehst.
            </p>
            <p>
              Und dazu meine besondere Perspektive: Was dein Pferd dir zeigt. Warum <strong className="text-[#EBE6DF] font-medium">Verstehen vor Korrigieren</strong> kommt.
            </p>
            <p>
              Damit du nicht um <strong className="text-[#EBE6DF] font-medium">3 Uhr nachts</strong> googelst, ob das normal ist. Damit du nicht hilflos neben deinem Pferd stehst. Damit du <strong className="text-[#EBE6DF] font-medium">selbst entscheiden</strong> kannst.
            </p>
          </div>

          <h4 className="font-serif text-xl md:text-2xl text-[#F3F0EB] leading-tight mt-10 mb-4">
            Und wenn es doch passiert?
          </h4>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Wenn dein Pferd krank wird – dann <strong className="text-[#EBE6DF] font-medium">lass ich dich nicht allein</strong>. Diagnosen stellen ist nicht meine Aufgabe. Aber <strong className="text-[#EBE6DF] font-medium">Orientierung geben</strong>, wenn sich alles überwältigend anfühlt – das kann ich.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-[#C5A065] pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-[#F3F0EB] italic leading-relaxed">
              „Diesen Weg musst du nicht alleine gehen. Und du brauchst keine 30 Jahre."
            </p>
          </blockquote>

          <div className="text-center mt-16">
            <p className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight mb-4">
              Das hier ist mein Weg. Vielleicht auch deiner.
            </p>
            <p className="font-serif text-3xl md:text-4xl text-[#C5A065] italic mb-4">
              Vertraue deiner Perspektive.
            </p>
            <p className="text-[#EBE6DF]/70 font-sans text-base mt-4">
              — Deine Diana
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-loam leading-tight mb-4">
              Bereit für den ersten Schritt?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quiz CTA */}
            <div className="bg-sage rounded-xl p-6 md:p-8">
              <span className="inline-block px-3 py-1.5 bg-loam/30 text-white text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
                Frühling 2026
              </span>
              <h3 className="font-serif text-xl text-white mb-3">
                Dein persönlicher Frühlingscheck
              </h3>
              <p className="text-white/70 font-sans text-sm font-light mb-6">
                8 Fragen zu deinem Pferd. 2 Minuten. Dein Plan für die nächsten Wochen.
              </p>
              <Link
                href="/quiz"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
              >
                Quiz starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-white/50 text-xs mt-3 text-center">
                Kostenlos · 2 Min · Kein Spam
              </p>
            </div>

            {/* Guide CTA */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-loam/10 shadow-sm">
              <span className="inline-block px-3 py-1.5 bg-sage/20 text-sage text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
                Frühlings-Guide
              </span>
              <h3 className="font-serif text-xl text-loam mb-3">
                Das komplette Frühjahrs-Wissen
              </h3>
              <p className="text-loam/70 font-sans text-sm font-light mb-6">
                Anweiden, Fellwechsel, Parasiten – alles an einem Ort. Fundiert recherchiert, verständlich erklärt.
              </p>
              <Link
                href="/guides/fruehling"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-loam hover:bg-loam/90 text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
              >
                Zum Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-loam/50 text-xs mt-3 text-center">
                47 € · Sofort-Zugang · 14 Tage Garantie
              </p>
            </div>

            {/* Blog CTA */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-loam/10 shadow-sm">
              <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
                Blog
              </span>
              <h3 className="font-serif text-xl text-loam mb-3">
                Zum Blog
              </h3>
              <p className="text-loam/70 font-sans text-sm font-light mb-6">
                Fundierte Artikel über Pferdegesundheit, Haltung und die Beziehung zwischen Mensch und Pferd.
              </p>
              <Link
                href="/wissen"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-loam text-loam hover:bg-loam hover:text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
              >
                Artikel lesen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-loam/95 backdrop-blur-sm border-t border-white/10 p-4 z-50 md:hidden safe-area-bottom">
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
        >
          Frühlingscheck starten
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="flex items-center justify-center gap-4 mt-2 text-white/70 text-xs">
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            Kostenlos
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            2 Min
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            Kein Spam
          </span>
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-28 md:hidden" />
    </main>
  )
}
