// app/ueber-mich/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'Über Diana | Pferdesicht',
  description: 'Für Pferdemenschen, die hinschauen. 30+ Jahre Pferdeerfahrung, 16 Jahre Reittherapie, 15 Jahre in der Pferdebranche. Ich gebe dir das Wissen, das dein Pferd verdient.',
}

export default function UeberMichPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
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
        <div className="relative w-full max-w-6xl mx-auto px-6 pt-8 md:pt-14 pb-8 md:pb-16">
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
              {/* Desktop: Voller Text */}
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

      {/* Die Sätze Section */}
      <section id="meine-geschichte" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Die Sätze, bei denen die wenigsten sich trauen, offen etwas dazu zu sagen
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
        </div>
      </section>

      {/* "So macht man das eben" Section */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20">
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
              „So macht man das eben."
            </h2>

            <div className="border-l-4 border-[#C5A065] pl-6">
              <p className="text-white/80 font-sans text-xl font-light leading-relaxed mb-8">
                Fünf Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
              </p>

              <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
                <p>
                  Lange Zeit dachte ich, ich müsste mich anpassen. So denken wie alle. So füttern wie alle. So reiten wie alle. Einfach mitlaufen.
                </p>
                <p>
                  Nicht, weil es sich richtig angefühlt hat – sondern weil ich dachte, ich müsste die Erwartungen der Anderen erfüllen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Der Moment Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Der Moment, der alles verändert hat
          </h2>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Mit 12 bekam ich ein Pflegepferd: <strong className="text-loam font-medium">Benny</strong>. Ich liebte dieses Pferd über alles. Mein Papa wollte ihn mir kaufen, aber ich hatte ja gerade erst angefangen zu reiten.
            </p>
            <p>
              Zwei Jahre später wurde Benny verkauft. Ich war <strong className="text-loam font-medium">am Boden zerstört</strong>.
            </p>
            <p>
              Eines Tages kam ein Brief seiner neuen Besitzerin.
            </p>
            <p>
              Ich erinnere mich noch an den Moment, als ich den Briefumschlag mit den Fotos öffnete. Benny stand in seinem neuen Offenstall mit einem anderen Pferd zusammen, eine große Weide im Hintergrund. Er sah aus wie ein <strong className="text-loam font-medium">vollkommen anderes Pferd</strong>.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-gold pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam italic leading-relaxed">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein Tier, das abgestumpft in seiner Box auf die nächste langweilige Reitstunde wartet.
            </p>
          </blockquote>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ich vermisste ihn ganz schrecklich. Und gleichzeitig war ich vollkommen glücklich, dass es ihm jetzt so viel besser ging.
            </p>
            <p>
              In diesem Moment wusste ich: <strong className="text-loam font-medium">Es geht also auch anders.</strong>
            </p>
            <p>
              Und ich gab mir ein innerliches Versprechen: <strong className="text-loam font-medium">Wenn ich mal ein eigenes Pferd habe, wird es anders.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Wendepunkt Section */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F3F0EB] leading-tight mb-8">
            Nicht mein Denken war falsch. Die Umgebung war falsch für mein Denken.
          </h2>

          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-6">
            Der Wendepunkt kam nicht laut. Er kam leise – als inneres Wissen:
          </p>

          <p className="font-serif text-2xl md:text-3xl text-[#C5A065] italic leading-tight mb-10">
            „Ich will Pferde nicht kontrollieren. Ich will sie wirklich verstehen."
          </p>

          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-8">
            Ich habe angefangen, mich neu auszurichten:
          </p>

          <div className="border-l-2 border-[#C5A065]/50 pl-6 md:pl-8 space-y-4">
            {[
              'Wissen, das Sinn macht.',
              'Fütterung, die stärkt.',
              'Haltung, die atmen lässt.',
              'Training, das Beziehung baut.',
              'Eine innere Haltung, die nicht auf Angst basiert – sondern auf Verbundenheit und Vertrauen.',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-[#EBE6DF]/90 font-sans text-lg font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benny war nur der Anfang + Ramses */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-loam leading-tight mb-8">
            Mein Pflegepferd Benny war nur der Anfang
          </h2>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-12">
            <p>
              Ich bin älter geworden. Mit der Zeit habe ich viele unterschiedliche Pferde geritten und gearbeitet, mehr erlebt und Erfahrungen gesammelt. Das innerliche Versprechen von damals wurde immer konkreter.
            </p>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-4">
            Dann kam Ramses – mein erstes eigenes Pferd.
          </h3>
          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-8">
            Ein Traum ging in Erfüllung. Ein Friese, ganz meiner.
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
            Und gleichzeitig begann damit auch die Realität...
          </p>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Mit Ramses wurde aus meinem Versprechen, das ich mir selbst gegeben hatte, nun tatsächlich Ernst.
            </p>
            <p>
              Und ich merkte schnell: <strong className="text-loam font-medium">Wissen über Pferde allein reicht nicht.</strong>
            </p>
            <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mb-4 mt-8 font-semibold">
              Ich musste auch lernen, mich am Stall durchzusetzen.
            </h4>
            <p>
              Gegen die Stallkönigin, die genau wusste, wie man Pferde zu halten hat. Gegen den Stallbetreiber, der keine Sonderwünsche mochte. Gegen das kollektive „Das haben wir schon immer so gemacht."
            </p>
            <p>
              Aber nicht mit dem Kopf durch die Wand. Ich musste lernen, zu kommunizieren. Zu erklären, warum mir etwas wichtig ist. Menschen mitzunehmen, statt sie vor den Kopf zu stoßen.
            </p>
            <p>
              <strong className="text-loam font-medium">Das war härter als jedes Fachbuch.</strong>
            </p>
            <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mb-4 mt-8 font-semibold">
              Und ich musste lernen, wem ich vertrauen kann – und wem nicht.
            </h4>
            <p>
              Ich habe Tierärzten vertraut, die sich als mittelmäßig herausstellten. Hufschmieden, die mehr Schaden anrichteten als Nutzen. Trainern, deren Methoden nicht zu mir oder meinem Pferd passten.
            </p>
            <p>
              Jeder Fehlschlag kostete <strong className="text-loam font-medium">Geld</strong>. Manche kosteten <strong className="text-loam font-medium">Nerven</strong>. Einige kosteten mein Pferd unnötige <strong className="text-loam font-medium">Schmerzen</strong> – und mich zahllose <strong className="text-loam font-medium">schlaflose Nächte</strong>.
            </p>
            <p>
              Ich habe über die vielen Jahre sicher <strong className="text-loam font-medium">Zehntausende Euro</strong> unnötig ausgegeben – für Tierärzte, Zusätze, Therapeuten, Equipment, Lehrgänge – weil ich damals noch nicht in der Lage war, <strong className="text-loam font-medium">das Wichtige vom Unwichtigen zu unterscheiden.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Glückliche Umstände Section */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-6">
            Dann kamen glückliche Umstände – und plötzlich waren Pferde nicht mehr nur mein Hobby
          </h2>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              2009 begannen Stefan und ich, gemeinsam ein Unternehmen aufzubauen – im Bereich Pferdegesundheit und -ernährung.
            </p>
            <p>
              Was als unternehmerische Idee begann, wurde schnell zu etwas viel Größerem.
            </p>
            <p>
              <strong className="text-white font-medium">15 Jahre Hempura. Tausende Gespräche mit unseren Kooperationspartnern.</strong>
            </p>
            <p>
              Alles Pferdeexperten wie Tierärzten, Therapeuten, Hufschmieden, Trainern – mit denen ich jeden Tag über Gesundheit, Haltung, Training &amp; Fütterung sprach. Nicht oberflächlich, sondern in der Tiefe.
            </p>
            <h4 className="font-serif text-xl md:text-2xl text-white leading-tight mt-10">
              Aber die wichtigsten Gespräche waren die mit Pferdebesitzern wie dir
            </h4>
            <p>
              Tausende Gespräche mit unseren Kunden, nicht selten in genau diesen Momenten: Wenn das Pferd krank ist. Wenn nichts mehr hilft. Wenn die Verzweiflung groß ist. <strong className="text-white font-medium">Ich weiß genau, wie sich das anfühlt.</strong>
            </p>
            <p>
              Diese Gespräche haben etwas in mir geweckt, das im Grunde schon immer da war.
            </p>
            <h4 className="font-serif text-xl md:text-2xl text-white leading-tight mt-10">
              Ich wollte wirklich verstehen
            </h4>
            <p>
              Nicht oberflächlich, nicht „reicht schon" – sondern <strong className="text-white font-medium">in der Tiefe</strong>.
            </p>
            <p>
              Nicht weil ich musste. Sondern weil ich nur so beruhigt sein konnte. Weil ich nur so wusste, dass ich das Richtige für mein Pferd tue. Weil ich dieses nagende Gefühl loswerden wollte, vielleicht doch etwas falsch zu machen.
            </p>
            <p>
              Also fing ich an, neben dem täglichen Arbeiten mit Pferden zu recherchieren. Unermüdlich. Bücher, Studien, Fachliteratur.
            </p>
            <p>
              Und das alles parallel. Recherche. Profi-Gespräche. Und gleichzeitig: Umsetzen, ausprobieren, optimieren, lernen – mit Ramses an meiner Seite.
            </p>
            <p>
              Mit der Zeit lernte ich, <strong className="text-white font-medium">meinem eigenen Bauchgefühl zu vertrauen</strong>. Immer mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Reittherapie Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            16 Jahre Reittherapeutin – Was passiert, wenn man Pferden wirklich zuhört
          </h2>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-12">
            <p>
              Neben unserem Unternehmen Hempura und meinem eigenen Weg im Offenstall mit Ramses, war da noch etwas:
            </p>
            <p>
              Ich habe <strong className="text-loam font-medium">16 Jahre lang als Reittherapeutin</strong> gearbeitet. Diese Arbeit hat mein Verständnis von Pferden grundlegend verändert.
            </p>
            <p>
              Ich habe <strong className="text-loam font-medium">über 200 Menschen begleitet</strong> – Kinder und Erwachsene mit körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen. Menschen, die von anderen Menschen verletzt wurden und bei Pferden <strong className="text-loam font-medium">zum ersten Mal wieder Vertrauen fassen</strong> konnten.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl my-10">
            <Image
              src="/images/reittherapie.png"
              alt="Diana bei der Reittherapie mit Felix"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-12">
            <p>
              Ich habe gesehen, wie Kinder, die kein Wort sprachen, <strong className="text-loam font-medium">mit Pferden kommunizierten</strong>. Wie traumatisierte Erwachsene durch ein Pferd wieder Vertrauen fanden. Wie Pferde sofort zeigten, wenn ein Mensch innerlich unruhig war – <strong className="text-loam font-medium">meist schon bevor der Mensch es überhaupt selbst wusste</strong>.
            </p>
          </div>

          <blockquote className="my-10 bg-loam rounded-xl p-8 md:p-10 text-center">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-relaxed mb-4">
              „Pferde lügen nicht. Sie spiegeln. Und wenn du verstehst, was sie dir zeigen, verstehst du nicht nur dein Pferd – sondern lernst auch dich selbst besser kennen."
            </p>
            <p className="text-[#EBE6DF]/70 font-sans text-base font-light">
              Der Mensch ist immer Teil der Gleichung. Das habe ich in der Reittherapie gelernt. Und das verändert alles zwischen dir und deinem Pferd.
            </p>
          </blockquote>

          <h3 className="font-serif text-2xl text-loam leading-tight mb-6">
            Diese Perspektive geprägt durch meine Reittherapie, unterscheidet mich von normalen Pferdetrainern:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 border border-loam/10">
              <p className="text-loam/60 font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was normale Trainer sagen...
              </p>
              <p className="font-serif text-lg text-loam">
                „Das Pferd ist dominant"
              </p>
            </div>
            <div className="bg-sage/10 rounded-lg p-6 border border-sage/30">
              <p className="text-sage font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was ich zusätzlich sehe...
              </p>
              <p className="font-serif text-lg text-loam">
                Das Pferd spiegelt die Unsicherheit des Menschen
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-loam/10">
              <p className="text-loam/60 font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was normale Trainer sagen...
              </p>
              <p className="font-serif text-lg text-loam">
                „Das Pferd testet dich"
              </p>
            </div>
            <div className="bg-sage/10 rounded-lg p-6 border border-sage/30">
              <p className="text-sage font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was ich zusätzlich sehe...
              </p>
              <p className="font-serif text-lg text-loam">
                Das Pferd sucht Sicherheit
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-loam/10">
              <p className="text-loam/60 font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was normale Trainer sagen...
              </p>
              <p className="font-serif text-lg text-loam">
                „Das ist ein Verhaltensproblem"
              </p>
            </div>
            <div className="bg-sage/10 rounded-lg p-6 border border-sage/30">
              <p className="text-sage font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was ich zusätzlich sehe...
              </p>
              <p className="font-serif text-lg text-loam">
                Das ist eine Beziehungsfrage
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-loam/10">
              <p className="text-loam/60 font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was normale Trainer sagen...
              </p>
              <p className="font-serif text-lg text-loam">
                „Mehr Druck!"
              </p>
            </div>
            <div className="bg-sage/10 rounded-lg p-6 border border-sage/30">
              <p className="text-sage font-sans text-sm font-bold tracking-wide uppercase mb-2">
                Was ich zusätzlich sehe...
              </p>
              <p className="font-serif text-lg text-loam">
                Mehr Klarheit – in dir selbst
              </p>
            </div>
          </div>

          <p className="mt-10 font-serif text-xl md:text-2xl text-[#C5A065] italic text-center">
            „Das Pferd als Spiegel deiner Seele auf dem Weg zu dir selbst."
          </p>
        </div>
      </section>

      {/* Freiheitsdressur Section */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F3F0EB] leading-tight mb-8">
            Die Freiheitsdressur – 5 Jahre hinter den Kulissen
          </h2>

          <div className="space-y-6 text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            <p>
              <strong className="text-[#EBE6DF] font-medium">5 Jahre lang</strong> haben Stefan und ich ein Unternehmen mit einer der bekanntesten Freiheitsdressur-Trainerinnen Europas aufgebaut.
            </p>
            <p>
              Sie stand vor der Kamera und wir haben ihr <strong className="text-[#EBE6DF] font-medium">komplettes Online-Kurs-Business</strong>, ihre Positionierung als Trainerin und das gesamte Projektmanagement aufgebaut und betrieben.
            </p>
            <p>
              Im Kern ging es dabei immer um dieselben Themen: <strong className="text-[#EBE6DF] font-medium">Vertrauen, Freundschaft und feine Kommunikation</strong> zwischen Mensch und Pferd – Prinzipien, die auch meinen eigenen Weg mit Ramses tief geprägt haben.
            </p>
            <p>
              Durch diese Kooperation bekam ich auch noch zusätzlich Einblicke in <strong className="text-[#EBE6DF] font-medium">internationale Pferde-Shows</strong> – und natürlich auch in das, was dort hinter dem Vorhang passiert...
            </p>
            <p>
              All diese Einblicke und neuen Perspektiven haben mein Verständnis von Pferden erweitert – auf eine Weise, die ich vorher nicht für möglich gehalten hätte.
            </p>
            <p>
              Und gleichzeitig habe ich in diesen Jahren <strong className="text-[#EBE6DF] font-medium">meinen ganz eigenen Weg</strong> gefunden.
            </p>
          </div>

          <div className="my-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20 text-center">
            <p className="font-serif text-2xl md:text-3xl text-[#C5A065] italic leading-tight">
              „Echte Partnerschaft entsteht, wenn das Pferd WÄHLT zu bleiben – nicht weil es muss, sondern weil es will."
            </p>
          </div>
        </div>
      </section>

      {/* Warum ich anders schaue Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-2xl md:text-3xl text-loam leading-tight mb-6">
            Warum ich anders schaue
          </h3>

          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-8">
            Wenn ich heute über Pferdehaltung, Training oder Verhalten spreche, bringe ich immer diese dreifache Perspektive mit:
          </p>

          <div className="space-y-8 mb-10">
            <div>
              <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mb-2">
                30+ Jahre mit Pferden – davon 20 Jahre im Offenstall
              </h4>
              <p className="text-loam/80 font-sans text-lg font-light leading-relaxed">
                Was Pferde wirklich brauchen – Fütterung, Haltung, Gesundheit. Die Fehler, die Tierarztrechnungen, die schlaflosen Nächte. Alles selbst erlebt, nicht nur gelesen.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mb-2">
                16 Jahre Reittherapeutin
              </h4>
              <p className="text-loam/80 font-sans text-lg font-light leading-relaxed">
                Was Pferde uns über uns selbst zeigen – und wie die Beziehung zwischen Mensch und Pferd alles verändert.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mb-2">
                15 Jahre Hempura + 5 Jahre Freiheitsdressur
              </h4>
              <p className="text-loam/80 font-sans text-lg font-light leading-relaxed">
                Tausende Gespräche mit Tierärzten, Therapeuten, Trainern und Pferdebesitzern wie dir. Und Einblicke in eine Welt, die man von außen selten sieht.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Das macht mich nicht besser als andere Experten. Aber es macht mich <strong className="text-loam font-medium">anders</strong>.
            </p>
            <p>
              Ich schaue nicht nur auf das Pferd – ich schaue auf das, <strong className="text-loam font-medium">was zwischen Mensch und Pferd passiert</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Was ich glaube Section */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            Was ich glaube
          </h2>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen, nicht das Problem sind – <strong className="text-white font-medium">sondern die Lösung.</strong>
            </p>
            <p>
              Die Lösung für eine <strong className="text-white font-medium">natürliche Haltung</strong>. Für das <strong className="text-white font-medium">Wohlergehen unserer Pferde</strong>.
            </p>
            <p>
              Das Problem sind die, die <strong className="text-white font-medium">NICHT</strong> fragen. Die die Verantwortung unreflektiert abgeben. Die sagen: <span className="italic">„Der Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater, Hufschmied, Sattler wird schon wissen, was er tut."</span>
            </p>
            <p>
              Versteh mich nicht falsch: Diese Menschen sind wichtig. Aber sie ersetzen nicht <strong className="text-white font-medium">deine Verantwortung</strong>. Sie ersetzen nicht <strong className="text-white font-medium">dein Hinschauen</strong>. Sie ersetzen nicht <strong className="text-white font-medium">dein Bauchgefühl</strong>.
            </p>
            <p>
              Ich habe das am eigenen Leib erfahren – Tierärzten vertraut, die falsch lagen. Hufschmieden, die mehr Schaden anrichteten als Nutzen. Es hat mich <strong className="text-white font-medium">Jahre und Zehntausende Euro</strong> gekostet, bis ich gelernt habe, selbst hinzuschauen.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-[#C5A065] pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed">
              Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
            </p>
          </blockquote>

          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht.
            </p>
            <p>
              Du bist nicht „zu pingelig". Du bist nicht „zu kompliziert".
            </p>
            <p>
              <strong className="text-white font-medium">Du schaust hin. Und genau das macht den Unterschied.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Was ich dir geben will Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Was ich dir geben will
          </h2>

          <p className="font-serif text-2xl md:text-3xl text-[#C5A065] mb-8">
            Wissen als Rüstung.
          </p>

          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Alles, was ich in über 30 Jahren gelernt habe – die <strong className="text-loam font-medium">Abkürzungen</strong>, die mir niemand gezeigt hat. Die <strong className="text-loam font-medium">Warnsignale</strong>, die ich erst zu spät erkannt habe. Die <strong className="text-loam font-medium">Fragen</strong>, die ich mir früher hätte stellen sollen.
            </p>
            <p>
              Damit du nicht um <strong className="text-loam font-medium">3 Uhr nachts googelst</strong>, ob das normal ist. Damit du nicht hilflos neben deinem Pferd stehst. Damit du <strong className="text-loam font-medium">selbst entscheiden</strong> kannst – weil du weißt, worauf es ankommt.
            </p>
          </div>

          <h4 className="font-serif text-xl md:text-2xl text-loam leading-tight mt-10 mb-4">
            Und wenn es doch passiert
          </h4>
          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Wenn dein Pferd krank wird, wenn du nicht mehr weiterweißt – dann <strong className="text-loam font-medium">lass ich dich auch nicht allein</strong>.
            </p>
            <p>
              Diagnosen stellen oder Behandlungen empfehlen? Das ist nicht meine Aufgabe. Aber <strong className="text-loam font-medium">Orientierung geben</strong>, wenn sich alles überwältigend anfühlt – das kann ich.
            </p>
          </div>

          <blockquote className="my-10 border-l-4 border-[#C5A065] pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam italic leading-relaxed">
              „Dieser Weg, den ich über 30 Jahre gegangen bin – den musst du nicht alleine gehen. Und du brauchst keine 30 Jahre."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mein Weg – auf einen Blick */}
      <section className="py-16 md:py-20 bg-loam">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight mb-10 text-center">
            Auf einen Blick
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">30+</span>
              <p className="text-[#EBE6DF]/70 font-sans text-sm mt-1">Jahre mit Pferden</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">20</span>
              <p className="text-[#EBE6DF]/70 font-sans text-sm mt-1">Jahre mit Ramses</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">16</span>
              <p className="text-[#EBE6DF]/70 font-sans text-sm mt-1">Jahre Reittherapie</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">15</span>
              <p className="text-[#EBE6DF]/70 font-sans text-sm mt-1">Jahre Hempura</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">200+</span>
              <p className="text-[#EBE6DF]/70 font-sans text-sm mt-1">Menschen begleitet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Echte Partnerschaft - YouTube Video Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-sage font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Einblick
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-4">
            Echte Partnerschaft
          </h2>

          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-8">
            Ein Moment zwischen Ramses und mir – nach 15 Jahren zusammen.
          </p>

          {/* YouTube Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl mb-8">
            <iframe
              src="https://www.youtube.com/embed/RCNm0M_bUS0"
              title="Echte Partnerschaft - Diana und Ramses"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <blockquote className="border-l-4 border-gold pl-6 md:pl-8">
            <p className="font-serif text-xl md:text-2xl text-loam italic leading-relaxed">
              „Echte Partnerschaft entsteht nicht durch Druck – sondern wenn das Pferd wählt zu bleiben."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Das Team hinter Pferdesicht Section */}
      <section className="py-16 md:py-20 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-6">
            Das Team hinter Pferdesicht
          </h2>

          <p className="text-white/80 font-sans text-lg font-light leading-relaxed">
            Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann <strong className="text-white font-medium">Stefan</strong>. Er der Stratege, ich die Umsetzerin. Er sorgt dafür, dass ich mich auf das konzentrieren kann, was ich am besten kann: <strong className="text-white font-medium">Dir das Wissen zu geben, das dein Pferd verdient.</strong>
          </p>
        </div>
      </section>

      {/* Für wen ist Pferdesicht Section */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-loam leading-tight mb-6">
            Für wen ist Pferdesicht?
          </h2>

          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed">
            Für dich, wenn du spürst, dass es einen anderen Weg geben muss. Wenn du <strong className="text-loam font-medium">Wissen willst – nicht Meinungen</strong>. Und wenn du dir <strong className="text-loam font-medium">Unterstützung wünschst</strong> auf diesem Weg – weil es mit dem richtigen Wissen schneller geht und mit weniger Fehlern.
          </p>
        </div>
      </section>

      {/* Das hier ist mein Weg Section */}
      <section className="py-16 md:py-20 bg-loam">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F3F0EB] leading-tight mb-6">
            Das hier ist mein Weg. Vielleicht auch deiner.
          </h2>

          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Ich teile mein Wissen. <strong className="text-[#EBE6DF] font-medium">Ehrlich, offen, regelmäßig.</strong> Über alles, was ich in über 30 Jahren gelernt habe – damit du deinen eigenen Weg mit deinem Pferd gehen kannst.
          </p>

          <p className="font-serif text-2xl text-[#C5A065]">Vertraue deiner Perspektive.</p>
          <p className="text-[#EBE6DF]/70 font-sans text-base mt-4">— Deine Diana von Pferdesicht</p>
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
