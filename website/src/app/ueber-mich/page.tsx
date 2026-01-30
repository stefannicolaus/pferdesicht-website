"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, BookOpen, Wrench, ClipboardCheck, FileText, ArrowRight } from "lucide-react"

export default function UeberMichPage() {
  return (
    <main className="w-full bg-white">

      {/* ============================================
          SECTION 1: HERO - Emotionaler mit CTA
          Framework: Above the Fold CTA + Click Triggers
          ============================================ */}
      <section className="w-full bg-[#faf8f5] py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="flex flex-col justify-start space-y-6 order-2 lg:order-1">
              <div>
                <p className="text-sage text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">Über Diana</p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-loam mb-4 leading-tight">
                  Vor 16 Jahren stand ich genau da, wo du jetzt bist.
                </h1>
              </div>

              <p className="text-loam/80 text-lg leading-relaxed">
                Mit diesem nagenden Gefühl: <em>Da stimmt doch was nicht.</em> Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-base tracking-wide uppercase rounded-sm shadow-lg transition-colors"
                >
                  Mach den Frühlingscheck
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-loam/50 text-sm font-sans mt-3">
                  ✓ 8 Fragen · ✓ 2 Minuten · ✓ Kostenlos
                </p>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative overflow-hidden rounded-sm group aspect-square mx-auto lg:mx-0 w-full max-w-[400px] order-1 lg:order-2">
              <img
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana - Gründerin von Pferdesicht"
                className="w-full h-full object-cover object-top filter sepia-[.15] saturate-[.85] contrast-[.95] transition duration-700 group-hover:scale-105 group-hover:filter-none"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E')",
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="w-full">

        {/* ============================================
            SECTION 2: GASLIGHTING QUOTES (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-8">
            Die Sätze, bei denen die wenigsten sich trauen, offen etwas dazu zu sagen
          </h2>
          <p className="text-loam/80 leading-relaxed mb-6">Vielleicht kennst du sie auch:</p>
          <div className="space-y-3 bg-sage/5 rounded-sm p-6 border-l-4 border-sage mb-8">
            <p className="text-loam/80 italic">"Dann hau da mal drauf."</p>
            <p className="text-loam/80 italic">"Dicke Beine sind normal bei dem."</p>
            <p className="text-loam/80 italic">"Dann reit da halt drüber."</p>
            <p className="text-loam/80 italic">"Der verarscht dich nur."</p>
            <p className="text-loam/80 italic">"Ein Pferd steht nun mal so."</p>
            <p className="text-loam/80 italic">"Das macht man hier schon immer so."</p>
            <p className="text-loam/80 italic">"Du denkst zu viel."</p>
            <p className="text-loam/80 italic">"Das Pferd soll einfach funktionieren."</p>
          </div>
          <p className="text-loam/70 leading-relaxed italic text-lg mb-4">
            Und unter all dem liegt dieser eine Satz, den niemand ausspricht – aber viele fühlen: <strong className="text-loam">Wenn du anders denkst, dann bist DU das Problem.</strong>
          </p>
          <p className="text-loam/80 leading-relaxed">Auch ich habe das lange geglaubt.</p>
        </section>

        {/* ============================================
            SECTION 3: TRIPLE-TRUST (NEU)
            Framework: Emotional + Intellektuell + Praktisch
            ============================================ */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam text-center mb-12">
              Warum ich anders schaue als die meisten
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Karte 1: Emotional */}
              <div className="bg-white p-6 rounded-sm border border-loam/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Emotional</h3>
                <p className="text-sage text-sm font-medium mb-3">Ich war auch mal da, wo du jetzt bist</p>
                <p className="text-loam/70 text-sm leading-relaxed">
                  30+ Jahre mit Pferden – mit allen Fehlern, Tierarztrechnungen und schlaflosen Nächten. Ich weiß, wie sich dieses nagende Gefühl anfühlt.
                </p>
              </div>

              {/* Karte 2: Intellektuell */}
              <div className="bg-white p-6 rounded-sm border border-loam/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Intellektuell</h3>
                <p className="text-sage text-sm font-medium mb-3">Fakten statt Stallgassen-Mythen</p>
                <p className="text-loam/70 text-sm leading-relaxed">
                  Fundiert recherchiert, verständlich erklärt – ohne dass du Tiermedizin studieren musst.
                </p>
              </div>

              {/* Karte 3: Praktisch */}
              <div className="bg-white p-6 rounded-sm border border-loam/10 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Praktisch</h3>
                <p className="text-sage text-sm font-medium mb-3">Im Stall getestet</p>
                <p className="text-loam/70 text-sm leading-relaxed">
                  20 Jahre eigener Offenstall. 16 Jahre Reittherapie. Tausende Gespräche mit Pferdebesitzern wie dir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: DIE KURATORIN (NEU)
            Framework: Diana's Versprechen
            ============================================ */}
        <section className="w-full bg-[#faf8f5] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam mb-8">
              Ich sortiere für dich, was stimmt – und was nicht.
            </h2>

            <div className="space-y-6 text-loam/80 text-lg leading-relaxed">
              <p>
                Du bist nicht uninformiert. Du bist <em>überinformiert</em>. 20 Tabs offen, jeder sagt was anderes, und am Ende weißt du weniger als vorher.
              </p>
              <p>
                Ich habe 30 Jahre gebraucht, um zu lernen, was funktioniert und was nicht. Diese 30 Jahre musst du nicht selbst gehen.
              </p>
              <p className="text-loam font-medium">
                <span className="text-sage">Das stimmt.</span> Das ist Mythos. Und <span className="text-sage">SO</span> machst du es praktisch – das ist mein Versprechen an dich.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: ORIGIN STORY / BENNY (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-8">
            Der Moment, der alles verändert hat
          </h2>
          <div className="space-y-6 text-loam/80 leading-relaxed">
            <p>
              Mit 12 bekam ich ein Pflegepferd: Benny. Ich liebte dieses Pferd. Mein Papa wollte ihn mir kaufen, aber ich war noch zu jung. Mit 14 wurde Benny verkauft. Ich war am Boden zerstört.
            </p>
            <p>Und dann kam ein Brief.</p>
            <p>
              Ich erinnere mich noch an den Moment, als ich den Briefumschlag mit den Fotos öffnete. Benny in seinem neuen Offenstall mit einem anderen Pferd zusammen, eine große Weide im Hintergrund. Er sah aus wie ein vollkommen anderes Pferd.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-loam/80 text-lg">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein Tier, das abgestumpft in seiner Box auf die nächste langweilige Reitstunde wartet.
            </blockquote>
            <p>
              Ich vermisste ihn ganz schrecklich. Und gleichzeitig war ich vollkommen glücklich, dass es ihm jetzt so viel besser ging. In diesem Moment wusste ich: <strong className="text-loam">Es geht also auch anders.</strong>
            </p>
            <p>
              Und ich gab mir ein innerliches Versprechen: Wenn ich mal ein eigenes Pferd habe, wird es anders.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 6: "SO MACHT MAN DAS EBEN" (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="border-l-4 border-gold pl-6 py-4">
            <h3 className="font-serif text-xl sm:text-2xl text-loam mb-4">"So macht man das eben."</h3>
            <p className="text-loam/80 leading-relaxed font-semibold mb-4">
              Vier Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Lange Zeit dachte ich, ich müsste mich anpassen. So halten wie alle. So füttern wie alle. So reiten wie alle. Einfach mitlaufen. Nicht, weil es sich richtig angefühlt hat – sondern weil ich dachte, ich müsste die Erwartungen der Anderen erfüllen.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 7: WENDEPUNKT (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-sage/5 rounded-sm p-8 border border-sage/10">
            <h3 className="font-serif text-xl sm:text-2xl text-loam mb-6">
              Nicht mein Denken war falsch. Die Umgebung war falsch für mein Denken.
            </h3>
            <p className="text-loam/80 leading-relaxed mb-6">
              Der Wendepunkt kam nicht laut. Er kam leise – als inneres Wissen: <strong className="text-loam">Ich will Pferde nicht kontrollieren. Ich will sie wirklich verstehen.</strong>
            </p>
            <p className="text-loam/80 leading-relaxed mb-4">Ich habe angefangen, mich neu auszurichten:</p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span className="text-loam/80">Wissen, das Sinn macht.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span className="text-loam/80">Fütterung, die stärkt.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span className="text-loam/80">Haltung, die dem Pferd dient – nicht alten Mustern.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span className="text-loam/80">Training, das Beziehung baut.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span className="text-loam/80">Eine innere Haltung, die nicht auf Angst basiert – sondern auf Verbundenheit und Vertrauen.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============================================
            SECTION 8: WAS ICH GLAUBE (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-8">Was ich glaube</h2>
          <div className="space-y-6 text-loam/80 leading-relaxed">
            <p>
              <strong className="text-loam">Ich glaube, dass die Pferdebesitzer, die "zu viel" fragen und "zu genau" hinschauen, nicht das Problem sind – sondern die Lösung.</strong>
            </p>
            <p>
              Die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>
            <p>
              Das Problem sind die, die NICHT fragen. Die die Verantwortung unreflektiert abgeben. Die sagen: "Der Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater, Hufschmied, Sattler wird schon wissen, was er tut."
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-loam/80 text-lg">
              Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
            </blockquote>
            <p>
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht. Du bist nicht "zu pingelig". Du bist nicht "zu kompliziert". <strong className="text-loam">Du schaust hin. Und genau das macht den Unterschied.</strong>
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 9: WAS ICH DIR GEBEN WILL (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-8">
            Was ich dir geben will
          </h2>
          <div className="space-y-6 text-loam/80 leading-relaxed">
            <p className="font-semibold text-loam text-lg">Wissen als Rüstung.</p>
            <p>
              Nicht nur Wissen über Pferde – sondern auch das Wissen, das ich auf die harte Tour lernen musste: Wie du erkennst, welchen Experten du vertrauen kannst. Wie du dich am Stall durchsetzt – nicht mit dem Kopf durch die Wand, sondern durch gute Kommunikation. Wie du mit Stallpolitik umgehst, ohne dich verbiegen zu müssen.
            </p>
            <p>
              Damit du nicht die teuren Fehler machst, die ich schon gemacht habe. Damit du nicht um 3 Uhr nachts googelst, ob das normal ist. Damit du nicht hilflos neben deinem Pferd stehst und nicht weißt, was du tun sollst.
            </p>
            <p>
              <strong className="text-loam">Dieser Weg, den ich über 30 Jahre gegangen bin – den musst du nicht alleine gehen. Und du brauchst keine 30 Jahre.</strong>
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 10: MEIN WEG - TIMELINE (Umgebaut)
            ============================================ */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-12">Mein Weg</h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-sage/30" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">30+ Jahre</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl text-loam mb-2">Mit Pferden</h3>
                    <p className="text-loam/70 leading-relaxed">
                      Die Fehler. Die Tierarztrechnungen. Die schlaflosen Nächte. Aber auch: Die Momente, in denen alles stimmt. Die Ruhe, wenn du weißt, dass es deinem Pferd gut geht.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">20 Jahre</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl text-loam mb-2">Eigener Offenstall</h3>
                    <p className="text-loam/70 leading-relaxed">
                      Bei Hempura – mit Ramses, meinem Friesen, an meiner Seite.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">16 Jahre</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl text-loam mb-2">Reittherapeutin</h3>
                    <p className="text-loam/70 leading-relaxed">
                      Über 200 Menschen begleitet – Kinder und Erwachsene mit körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen. Menschen, die von anderen Menschen verletzt wurden und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">15 Jahre</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl text-loam mb-2">In der Pferdebranche</h3>
                    <p className="text-loam/70 leading-relaxed">
                      Bei Hempura (Vertrieb, Management) – tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden, Trainern. Tausende Fragen von Pferdebesitzern wie dir. Jede einzelne hat mein Verständnis vertieft.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <span className="inline-block bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">5 Jahre</span>
                  </div>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl text-loam mb-2">Hinter den Kulissen</h3>
                    <p className="text-loam/70 leading-relaxed">
                      Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Ich habe gesehen, was hinter der Bühne passiert. Das Schöne. Und das nicht so Schöne. Es hat mir gezeigt: Nicht alles, was glänzt, ist Gold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 11: RAMSES (NEU)
            ============================================ */}
        <section className="w-full bg-[#faf8f5] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Bild - Links */}
              <div className="bg-gray-200 rounded-lg shadow-lg aspect-square flex items-center justify-center">
                <p className="text-gray-500 font-sans text-sm">Bild folgt</p>
              </div>

              {/* Text - Rechts */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-loam mb-6">Ramses – mein Spiegel</h2>
                <div className="space-y-4 text-loam/80 leading-relaxed">
                  <p>
                    Ein Friese, Anfang 20, seit über 15 Jahren an meiner Seite.
                  </p>
                  <p>
                    Sanft, gutmütig, geduldig, sensibel und sehr intelligent. Als Therapiepferd ausgebildet hat er mir mehr über Menschen beigebracht als jedes Psychologie-Buch.
                  </p>
                  <p>
                    Er ist mein Lehrmeister, mein Seelengefährte – und der perfekte Spiegel. Wenn ich innerlich unruhig bin, zeigt er es mir. Wenn ich klar bin, ist er es auch.
                  </p>
                </div>
                <blockquote className="border-l-4 border-gold pl-6 py-4 mt-6">
                  <p className="text-loam/80 italic">
                    "Das Pferd als Spiegel deiner Seele auf dem Weg zu dir selbst."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 12: VIDEO (NEU)
            ============================================ */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-loam text-center mb-8">Echte Partnerschaft</h2>

            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/RCNm0M_bUS0"
                title="Diana und Ramses"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-loam/60 text-lg text-center mt-6">
              Echte Partnerschaft entsteht nicht durch Druck – sondern wenn das Pferd wählt zu bleiben.
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION 13: TEAM (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-sage/5 rounded-sm p-8 border border-sage/10">
            <h2 className="font-serif text-xl sm:text-2xl text-loam mb-6">Das Team hinter Pferdesicht</h2>
            <div className="space-y-4 text-loam/80 leading-relaxed">
              <p>
                Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann Stefan. Gemeinsam haben wir in den letzten 20 Jahren mehrere erfolgreiche Projekte in der Pferdewelt aufgebaut – und auch einige außerhalb.
              </p>
              <p>
                Er der Stratege, ich die konsequente Umsetzerin. Er sorgt dafür, dass ich mich auf das konzentrieren kann, was ich am besten kann: Dir das Wissen zu geben, das dein Pferd verdient.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 14: FÜR WEN IST PFERDESICHT (Behalten)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight mb-8">
            Für wen ist Pferdesicht?
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✓</span>
              <span className="text-loam/80">Für dich, wenn du spürst, dass es einen anderen Weg geben muss.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✓</span>
              <span className="text-loam/80">Für dich, wenn du keine Lust mehr hast auf "Das haben wir schon immer so gemacht".</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✓</span>
              <span className="text-loam/80">Für dich, wenn du Wissen willst – nicht Meinungen.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✓</span>
              <span className="text-loam/80">Für dich, wenn du bereit bist, hinzuschauen. Auch wenn es unbequem ist.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold flex-shrink-0">✓</span>
              <span className="text-loam/80">
                Und für dich, wenn du dich schon auf den Weg gemacht hast und dir Unterstützung wünschst – weil es mit dem richtigen Wissen schneller geht und mit weniger Fehlern.
              </span>
            </li>
          </ul>
        </section>

        {/* ============================================
            SECTION 15: FINAL CTA CARDS (NEU)
            ============================================ */}
        <section className="w-full bg-[#faf8f5] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Karte 1: Frühlings-Guide */}
              <div className="bg-white p-6 rounded-sm border border-loam/10 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Frühlings-Guide</h3>
                <p className="text-loam/70 text-sm leading-relaxed mb-6 flex-grow">
                  Anweiden, Fellwechsel, Parasiten – alles an einem Ort. Fundiert recherchiert, verständlich erklärt.
                </p>
                <Link
                  href="/guides/fruehling"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
                >
                  Zum Guide
                </Link>
                <p className="text-loam/50 text-xs font-sans text-center mt-3">
                  47 € · Sofort-Zugang · 14 Tage Garantie
                </p>
              </div>

              {/* Karte 2: Kostenloser Frühlingscheck */}
              <div className="bg-white p-6 rounded-sm border border-sage/20 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Kostenloser Frühlingscheck</h3>
                <p className="text-loam/70 text-sm leading-relaxed mb-6 flex-grow">
                  8 Fragen zu deinem Pferd. Dein persönlicher Report – abgestimmt auf eure Situation.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-sage hover:bg-sage/90 text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
                >
                  Quiz starten
                </Link>
                <p className="text-loam/50 text-xs font-sans text-center mt-3">
                  ✓ Kostenlos · ✓ 2 Minuten
                </p>
              </div>

              {/* Karte 3: Zum Blog */}
              <div className="bg-white p-6 rounded-sm border border-loam/10 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-full bg-loam/5 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-loam/60" />
                </div>
                <h3 className="font-serif text-xl text-loam mb-2">Zum Blog</h3>
                <p className="text-loam/70 text-sm leading-relaxed mb-6 flex-grow">
                  Fundierte Artikel über Pferdegesundheit, Haltung und die Beziehung zwischen Mensch und Pferd.
                </p>
                <Link
                  href="/wissen"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-loam/10 hover:bg-loam/20 text-loam font-sans font-bold text-sm tracking-wide uppercase rounded-sm transition-colors"
                >
                  Artikel lesen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 16: ABSCHLUSS-ZITAT (Angepasst)
            ============================================ */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="border-t border-loam/10 pt-12">
            <p className="text-loam/80 leading-relaxed mb-6">Das hier ist mein Weg. Vielleicht auch deiner.</p>
            <p className="text-loam/80 leading-relaxed mb-6">
              Wenn du spürst, dass du eine andere Art von Pferdewelt willst – sanft, stark, klar, wahrhaftig – mit dem Wohl unserer Pferde im Mittelpunkt – dann bleib hier.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-4 mt-8">
              <p className="text-loam/80 italic text-lg mb-4">
                "Die Pferdebesitzer, die 'zu viel' fragen, sind nicht das Problem. Sie sind die Lösung."
              </p>
              <p className="text-loam/80 italic mb-4">
                Vertraue deiner Perspektive.
              </p>
              <p className="text-gold font-serif text-lg">— Deine Diana</p>
            </blockquote>
          </div>
        </section>

      </article>
    </main>
  )
}
