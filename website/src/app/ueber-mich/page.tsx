// app/ueber-mich/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Heart, Brain, Shield, Sparkles } from 'lucide-react'

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
              Pferde fand ich schon als kleines Kind toll. Mit 12, als ich anfing zu reiten, war ich vollkommen begeistert – aber gleichzeitig fühlte sich irgendetwas falsch an.
            </p>
            <p className="text-[#EBE6DF]/80 font-sans text-sm md:text-base font-light leading-relaxed">
              Wie wenn dein Bauch dir sagt:
              <br /><br />
              <span className="italic text-[#C5A065]">Da stimmt was nicht</span>
              <br /><br />
              – aber alle um dich herum sagen:
              <br /><br />
              <span className="italic text-[#C5A065]">Stell dich nicht so an.</span>
            </p>
          </div>

          <div className="mt-4 md:mt-10 flex flex-col items-center md:items-start gap-4">
            <div className="bg-transparent md:bg-white/10 md:backdrop-blur-sm md:rounded-lg p-3 md:p-5 border-0 md:border md:border-[#C5A065]/30 text-center">
              {/* Desktop: Voller Text */}
              <p className="hidden md:block text-[#C5A065] font-serif text-lg md:text-xl italic mb-3">
                Ich habe so ziemlich jeden Fehler gemacht, den man machen kann.<br />
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
          
          <p className="text-loam/70 font-sans text-sm leading-relaxed mb-6">
            (Wahrscheinlich von der Person, die beim Ausreiten selbst am meisten Angst hat.)
          </p>
          
          <div className="bg-loam rounded-xl p-8 md:p-10">
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
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
            „So macht man das eben."
          </h2>
          
          <p className="text-white/80 font-sans text-xl font-light leading-relaxed mb-8">
            Vier Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
          </p>
          
          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Lange Zeit dachte ich, ich müsste mich anpassen. So halten wie alle. So füttern wie alle. So reiten wie alle. Einfach mitlaufen.
            </p>
            <p>
              Nicht, weil es sich richtig angefühlt hat – sondern weil ich dachte, ich müsste die Erwartungen der Anderen erfüllen.
            </p>
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
              Mit 12 bekam ich ein Pflegepferd: Benny. Ich liebte dieses Pferd. Mein Papa wollte ihn mir kaufen, aber ich war noch zu jung.
            </p>
            <p>
              Mit 14 wurde Benny verkauft. Ich war am Boden zerstört.
            </p>
            <p>
              Und dann kam ein Brief.
            </p>
            <p>
              Ich erinnere mich noch an den Moment, als ich den Briefumschlag mit den Fotos öffnete. Benny in seinem neuen Offenstall mit einem anderen Pferd zusammen, eine große Weide im Hintergrund. Er sah aus wie ein vollkommen anderes Pferd.
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
              Und ich gab mir ein innerliches Versprechen: Wenn ich mal ein eigenes Pferd habe, wird es anders.
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
          
          <div className="space-y-4">
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Benny war nur der Anfang
          </h2>
          
          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-12">
            <p>
              Ich bin älter geworden. Mit der Zeit habe ich mehr gesehen, mehr erfahren. Das innerliche Versprechen von damals wurde immer konkreter.
            </p>
            <p>
              Und dann kam Ramses.
            </p>
          </div>
          
          <h3 className="font-serif text-2xl md:text-3xl text-loam leading-tight mb-6">
            Dann kam Ramses – mein eigenes Pferd. Und damit die Realität.
          </h3>
          
          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ein Traum ging in Erfüllung. Ein Friese, ganz meiner.
            </p>
            <p>
              Mit dem eigenen Pferd wurde aus dem Versprechen Ernst. Jetzt musste ich es wirklich umsetzen – nicht nur davon träumen.
            </p>
            <p>
              Und ich merkte schnell: Wissen über Pferde allein reicht nicht.
            </p>
            <p>
              <strong className="text-loam font-medium">Ich musste lernen, mich am Stall durchzusetzen.</strong> Gegen die Stallkönigin, die genau wusste, wie man Pferde zu halten hat. Gegen den Stallbetreiber, der keine Sonderwünsche mochte. Gegen das kollektive „Das haben wir schon immer so gemacht."
            </p>
            <p>
              Aber nicht mit dem Kopf durch die Wand. Ich musste lernen, zu kommunizieren. Zu erklären, warum mir etwas wichtig ist. Menschen mitzunehmen, statt sie vor den Kopf zu stoßen.
            </p>
            <p>
              Das war härter als jedes Fachbuch.
            </p>
            <p>
              <strong className="text-loam font-medium">Und ich musste lernen, wem ich vertrauen kann – und wem nicht.</strong> Ich habe Tierärzten vertraut, die sich als mittelmäßig herausstellten. Hufschmieden, die mehr Schaden anrichteten als Nutzen. Trainern, deren Methoden nicht zu meinem Pferd passten.
            </p>
            <p>
              Jeder Fehlschlag kostete Geld. Manche kosteten Nerven. Einige kosteten mein Pferd unnötige Schmerzen.
            </p>
            <p>
              Ich habe Zehntausende Euro unnötig ausgegeben – für Tierärzte, Zusätze, Therapeuten, Equipment, Lehrgänge – weil ich das Wissen damals noch nicht hatte, die Guten von den Schlechten zu unterscheiden.
            </p>
          </div>
        </div>
      </section>

      {/* Glückliche Umstände Section */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
            Dann kamen glückliche Umstände – und alles lief parallel
          </h2>
          
          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Ich wollte es wirklich verstehen. Nicht oberflächlich, nicht „reicht schon" – sondern in der Tiefe.
            </p>
            <p>
              Nicht weil ich musste. Sondern weil ich nur so beruhigt sein konnte. Weil ich nur so wusste, dass ich das Richtige für mein Pferd tue. Weil ich dieses nagende Gefühl loswerden wollte, vielleicht doch etwas falsch zu machen.
            </p>
            <p>
              Also fing ich an zu recherchieren. Unermüdlich. Bücher, Studien, Fachliteratur.
            </p>
            <p>
              Und durch glückliche Umstände – durch die unternehmerischen Tätigkeiten, die Stefan und ich aufbauten – kam noch etwas dazu:
            </p>
            <p>
              <strong className="text-white font-medium">15 Jahre bei Hempura.</strong> Tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden, Trainern – über Gesundheit, Haltung, Fütterung. Nicht oberflächlich, sondern in der Tiefe. Und tausende Gespräche mit Pferdebesitzern in genau diesen Momenten: Wenn das Pferd krank ist. Wenn nichts mehr hilft. Wenn die Verzweiflung groß ist. Ich weiß, wie sich das anfühlt.
            </p>
            <p>
              Und das alles parallel. Recherche. Profi-Gespräche. Und gleichzeitig: Umsetzen, ausprobieren, optimieren, lernen – mit Ramses an meiner Seite.
            </p>
            <p>
              Mit der Zeit lernte ich, meinem eigenen Bauchgefühl zu vertrauen. Immer mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Reittherapie Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Die Reittherapie – Was mich 16 Jahre lang lehrte
          </h2>
          
          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-12">
            <p>
              Parallel zu meinem Offenstall habe ich 16 Jahre lang als Reittherapeutin gearbeitet. Diese Arbeit hat mein Verständnis von Pferden grundlegend verändert.
            </p>
            <p>
              Ich habe über 200 Menschen begleitet – Kinder und Erwachsene mit körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen. Menschen, die von anderen Menschen verletzt wurden und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
            </p>
            <p>
              Ich habe gesehen, wie Kinder, die kein Wort sprachen, mit Pferden kommunizierten. Wie traumatisierte Erwachsene durch ein Pferd wieder Vertrauen fanden. Wie Pferde sofort zeigten, wenn ein Mensch innerlich unruhig war – bevor der Mensch es selbst wusste.
            </p>
          </div>
          
          <blockquote className="my-10 bg-loam rounded-xl p-8 md:p-10">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-relaxed mb-4">
              „Pferde lügen nicht. Sie spiegeln. Und wenn du verstehst, was sie dir zeigen, verstehst du nicht nur dein Pferd – du verstehst auch dich selbst."
            </p>
            <p className="text-[#EBE6DF]/70 font-sans text-base font-light">
              Das Pferd reagiert nie grundlos. Es zeigt uns, was wir noch nicht sehen. Das habe ich in 16 Jahren tausendfach beobachtet.
            </p>
          </blockquote>
          
          <h3 className="font-serif text-2xl text-loam leading-tight mb-6">
            Diese Perspektive unterscheidet mich von normalen Trainern:
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
          
          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mt-8">
            Der Mensch ist immer Teil der Gleichung. Das habe ich in der Reittherapie gelernt. Und das verändert alles.
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
              5 Jahre bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Aufbau des kompletten Online-Business, Kursentwicklung, Projektmanagement. Einblicke in internationale Pferde-Shows und deren Hintergründe.
            </p>
            <p>
              Ich bin dankbar für diese Zeit. Ich habe unglaublich viel gelernt – über Pferde, über Business, über Menschen. Vieles davon prägt mich bis heute.
            </p>
            <p>
              Und gleichzeitig habe ich in diesen Jahren meinen eigenen Weg gefunden.
            </p>
          </div>
          
          <div className="my-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/20">
            <p className="font-serif text-2xl md:text-3xl text-[#C5A065] italic leading-tight">
              „Echte Partnerschaft entsteht, wenn das Pferd WÄHLT zu bleiben – nicht weil es muss, sondern weil es will."
            </p>
          </div>
          
          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed">
            Das ist mein Weg. Nicht besser, nicht schlechter – einfach meiner.
          </p>
        </div>
      </section>

      {/* Warum ich anders schaue Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-8">
            Warum ich anders schaue
          </h2>
          
          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-10">
            Wenn ich heute über Pferdehaltung, Training oder Verhalten spreche, bringe ich immer diese dreifache Perspektive mit:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 md:p-8 border border-loam/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">30+ Jahre Praxis</h3>
              <p className="text-loam/70 font-sans text-sm font-light leading-relaxed">
                Was Pferde körperlich brauchen – Fütterung, Haltung, Gesundheit. Die Fehler, die Tierarztrechnungen, die schlaflosen Nächte.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 border border-loam/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">16 Jahre Reittherapie</h3>
              <p className="text-loam/70 font-sans text-sm font-light leading-relaxed">
                Was Pferde uns über uns selbst zeigen – und wie die Beziehung alles beeinflusst. Das Pferd als Spiegel.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8 border border-loam/10 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">5 Jahre hinter den Kulissen</h3>
              <p className="text-loam/70 font-sans text-sm font-light leading-relaxed">
                Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Ich bin dankbar für das Lernen – und habe meinen eigenen Weg zu echter Partnerschaft gefunden.
              </p>
            </div>
          </div>
          
          <p className="text-loam/80 font-sans text-lg font-light leading-relaxed mb-4">
            Das macht mich nicht besser als andere Experten. Aber es macht mich anders.
          </p>
          
          <p className="font-serif text-xl md:text-2xl text-loam leading-tight">
            <strong>Ich schaue nicht nur auf das Pferd – ich schaue auf das, was zwischen Mensch und Pferd passiert.</strong>
          </p>
        </div>
      </section>

      {/* Was ich glaube Section */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
            Was ich glaube
          </h2>
          
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-8">
            <strong>Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen, nicht das Problem sind – sondern die Lösung.</strong>
          </p>
          
          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed mb-10">
            <p>
              Die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>
            <p>
              Das Problem sind die, die NICHT fragen. Die die Verantwortung unreflektiert abgeben. Die sagen: <span className="italic">„Der Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater, Hufschmied, Sattler wird schon wissen, was er tut."</span>
            </p>
            <p>
              Versteh mich nicht falsch: Diese Menschen sind wichtig. Aber sie ersetzen nicht deine Verantwortung. Sie ersetzen nicht dein Hinschauen. Sie ersetzen nicht dein Bauchgefühl.
            </p>
          </div>
          
          <blockquote className="my-10 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-relaxed">
              „Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig."
            </p>
          </blockquote>
          
          <div className="space-y-4 text-white/90 font-sans text-lg font-light leading-relaxed">
            <p>
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht.
            </p>
            <p>
              Du bist nicht „zu pingelig". Du bist nicht „zu kompliziert".
            </p>
            <p className="font-medium text-white">
              Du schaust hin. Und genau das macht den Unterschied.
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
          
          <p className="font-serif text-2xl text-gold mb-8">
            Wissen als Rüstung.
          </p>
          
          <div className="space-y-6 text-loam/80 font-sans text-lg font-light leading-relaxed mb-10">
            <p>
              Nicht nur Wissen über Pferde – sondern auch das Wissen, das ich auf die harte Tour lernen musste:
            </p>
            <p>
              Wie du erkennst, welchen Experten du vertrauen kannst. Wie du dich am Stall durchsetzt – nicht mit dem Kopf durch die Wand, sondern durch gute Kommunikation. Wie du mit Stallpolitik umgehst, ohne dich verbiegen zu müssen.
            </p>
            <p>
              <strong className="text-loam font-medium">Und dazu meine besondere Perspektive:</strong> Was dein Pferd dir zeigt. Wie die Beziehung zwischen euch alles beeinflusst. Warum Verstehen vor Korrigieren kommt.
            </p>
            <p>
              Damit du nicht mehr blind vertrauen musst. Damit du selbst entscheiden kannst. Damit du die Verantwortung auf Dauer auch tatsächlich tragen kannst – weil du weißt, was du tust.
            </p>
            <p>
              Damit du nicht die teuren Fehler machst, die ich schon gemacht habe. Damit du nicht um 3 Uhr nachts googelst, ob das normal ist. Damit du nicht hilflos neben deinem Pferd stehst und nicht weißt, was du tun sollst.
            </p>
            <p>
              <strong className="text-loam font-medium">Und wenn es doch passiert</strong> – wenn dein Pferd krank wird, wenn du nicht mehr weiterweißt – dann lass ich dich auch nicht allein.
            </p>
            <p>
              Diagnosen stellen oder Behandlungen empfehlen? Das ist nicht meine Aufgabe. Aber Orientierung geben, wenn sich alles überwältigend anfühlt – das kann ich.
            </p>
            <p>
              Ich kann dir zeigen, wie ich in solchen Situationen vorgehe: Welche Fragen ich an wen stelle. Welche Informationen helfen, die Lage einzuschätzen. Wie du dich auf das Gespräch mit dem Tierarzt vorbereitest und welche Informationen wichtig sind, um die Situation besser einschätzen zu können.
            </p>
          </div>
          
          <div className="bg-loam rounded-xl p-8 md:p-10">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-relaxed">
              „Dieser Weg, den ich über 30 Jahre gegangen bin – den musst du nicht alleine gehen. Und du brauchst keine 30 Jahre."
            </p>
          </div>
        </div>
      </section>

      {/* Mein Weg – zusammengefasst Section */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F3F0EB] leading-tight mb-12">
            Mein Weg – zusammengefasst
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">30+</span>
                <span className="block text-[#EBE6DF]/60 text-xs uppercase tracking-wide">Jahre</span>
              </div>
              <div className="border-l-2 border-sage/30 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">Über 30 Jahre mit Pferden</h3>
                <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                  Mit allem, was dazugehört. Die Fehler. Die Tierarztrechnungen. Die schlaflosen Nächte. Aber auch: Die Momente, in denen alles stimmt. Die Ruhe, wenn du weißt, dass es deinem Pferd gut geht.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">16</span>
                <span className="block text-[#EBE6DF]/60 text-xs uppercase tracking-wide">Jahre</span>
              </div>
              <div className="border-l-2 border-sage/30 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">Ausbildung zur Reittherapeutin</h3>
                <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                  Abschluss 2009. 16 Jahre Praxis. Über 200 Menschen begleitet – Kinder und Erwachsene mit körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen. Menschen, die von anderen Menschen verletzt wurden und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">5</span>
                <span className="block text-[#EBE6DF]/60 text-xs uppercase tracking-wide">Jahre</span>
              </div>
              <div className="border-l-2 border-sage/30 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">5 Jahre hinter den Kulissen</h3>
                <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                  Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Ich bin dankbar für diese Zeit und das Lernen – und habe meinen eigenen Weg gefunden: Echte Partnerschaft, bei der das Pferd wählt zu bleiben.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">15</span>
                <span className="block text-[#EBE6DF]/60 text-xs uppercase tracking-wide">Jahre</span>
              </div>
              <div className="border-l-2 border-sage/30 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">15 Jahre bei Hempura</h3>
                <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                  (Vertrieb, Management) – tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden, Trainern. Tausende Fragen von Pferdebesitzern wie dir. Jede einzelne hat mein Verständnis vertieft.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 md:w-20 text-right">
                <span className="font-serif text-3xl md:text-4xl text-[#C5A065]">20</span>
                <span className="block text-[#EBE6DF]/60 text-xs uppercase tracking-wide">Jahre</span>
              </div>
              <div className="border-l-2 border-sage/30 pl-6">
                <h3 className="font-serif text-xl text-white mb-2">Mein eigenes Pferd – Ramses</h3>
                <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed">
                  Mein Friese, seit 20 Jahren an meiner Seite. Mein Lehrmeister, Seelengefährte, und Spiegel meiner Seele. Er hat mich mehr gelehrt als alle Kurse zusammen.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-[#EBE6DF]/70 font-sans text-base font-light leading-relaxed mt-10 italic">
            Und dazwischen: Unermüdliche Recherche. Bücher, Studien, Fachliteratur. Weil ich es wirklich verstehen wollte.
          </p>
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
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
            Das Team hinter Pferdesicht
          </h2>
          
          <div className="space-y-6 text-white/80 font-sans text-lg font-light leading-relaxed">
            <p>
              Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann Stefan.
            </p>
            <p>
              Gemeinsam haben wir in den letzten 20 Jahren mehrere erfolgreiche Projekte in der Pferdewelt aufgebaut – und auch einige außerhalb. Er der Stratege, ich die konsequente Umsetzerin.
            </p>
            <p>
              Er sorgt dafür, dass ich mich auf das konzentrieren kann, was ich am besten kann: Dir das Wissen zu geben, das dein Pferd verdient.
            </p>
          </div>
        </div>
      </section>

      {/* Für wen ist Pferdesicht Section */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loam leading-tight mb-10">
            Für wen ist Pferdesicht?
          </h2>
          
          <div className="space-y-4">
            {[
              'Für dich, wenn du spürst, dass es einen anderen Weg geben muss.',
              'Für dich, wenn du keine Lust mehr hast auf „Das haben wir schon immer so gemacht".',
              'Für dich, wenn du Wissen willst – nicht Meinungen.',
              'Für dich, wenn du bereit bist, hinzuschauen. Auch wenn es unbequem ist.',
              'Und für dich, wenn du dich schon auf den Weg gemacht hast und dir Unterstützung wünschst – weil es mit dem richtigen Wissen schneller geht und mit weniger Fehlern.',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-loam/80 font-sans text-lg font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Das hier ist mein Weg Section */}
      <section className="py-20 md:py-28 bg-loam">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F3F0EB] leading-tight mb-8">
            Das hier ist mein Weg. Vielleicht auch deiner.
          </h2>
          
          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Wenn du spürst, dass du eine andere Art von Pferdewelt willst – sanft, stark, klar, wahrhaftig – mit dem Wohl unserer Pferde im Mittelpunkt – dann bleib hier.
          </p>
          
          <p className="text-[#EBE6DF]/80 font-sans text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Ich teile mein Wissen. Ehrlich, offen, regelmäßig.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              'Über Pferdegesundheit, die nicht kompliziert sein muss.',
              'Über Haltung, die dem Pferd dient – nicht alten Mustern.',
              'Über die Beziehung zwischen Mensch und Pferd.',
              'Über dieses tiefe Gefühl, dass Pferde so viel mehr brauchen als das, was man ihnen oft zugesteht.',
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                <p className="text-[#EBE6DF]/90 font-sans text-sm font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
          
          <blockquote className="mb-12">
            <p className="font-serif text-xl md:text-2xl text-[#C5A065] italic leading-relaxed max-w-3xl mx-auto">
              „Die Pferdebesitzer, die ‚zu viel' fragen, sind nicht das Problem. Sie sind die Lösung für eine natürliche Haltung und das Wohlergehen unserer Pferde."
            </p>
          </blockquote>
          
          <div className="space-y-4 text-[#EBE6DF] font-sans text-lg">
            <p className="font-medium">Deine Fragen und Bedenken sind nicht zu viel.</p>
            <p className="font-medium">Das ist genau das, was unsere Pferde brauchen.</p>
            <p className="font-serif text-2xl text-[#C5A065] mt-6">Vertraue deiner Perspektive.</p>
            <p className="text-[#EBE6DF]/70 mt-4">— Deine Diana von Pferdesicht</p>
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
