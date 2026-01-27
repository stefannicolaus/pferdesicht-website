"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function UeberMichPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="w-full bg-white">

      {/* Hero Section with Image and Intro */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
          {/* Image - Left Side */}
          <div className="relative overflow-hidden rounded-sm group aspect-square mx-auto lg:mx-0 w-full max-w-[320px]">
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
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A476]/20 pointer-events-none" />
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col justify-start space-y-6">
            <div>
              <p className="text-sage text-xs font-sans font-semibold tracking-widest uppercase mb-4">Über Diana</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-loam mb-6 leading-tight">
                Für Pferdemenschen, die hinschauen.
              </h1>
            </div>

            <div className="space-y-4 text-loam/80 leading-relaxed">
              <p>
                Pferde fand ich schon als kleines Kind toll. Mit 12, als ich anfing zu reiten, war ich vollkommen
                begeistert – aber gleichzeitig fühlte sich irgendetwas falsch an.
              </p>
              <p>
                Wie wenn dein Bauch dir sagt: Da stimmt was nicht – aber alle um dich herum sagen: Stell dich nicht so
                an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="prose prose-lg max-w-none">
          {/* Die Sätze */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">
              Die Sätze, bei denen die wenigsten sich trauen, offen etwas dazu zu sagen
            </h2>
            <p className="text-loam/80 leading-relaxed">Vielleicht kennst du sie auch:</p>
            <div className="space-y-3 bg-sage/5 rounded-sm p-6 border-l-4 border-sage">
              <p className="text-loam/80">„Dann hau da mal drauf."</p>
              <p className="text-loam/80">„Dicke Beine sind normal bei dem."</p>
              <p className="text-loam/80">„Dann reit da halt drüber."</p>
              <p className="text-loam/80">„Der verarscht dich nur."</p>
              <p className="text-loam/80">„Ein Pferd steht nun mal so."</p>
              <p className="text-loam/80">„Das macht man hier schon immer so."</p>
              <p className="text-loam/80">„Du denkst zu viel."</p>
              <p className="text-loam/80">„Das Pferd soll einfach funktionieren."</p>
            </div>
            <p className="text-loam/70 leading-relaxed italic text-lg">
              Und unter all dem liegt dieser eine Satz, den niemand ausspricht – aber viele fühlen: Wenn du anders
              denkst, dann bist DU das Problem.
            </p>
            <p className="text-loam/80 leading-relaxed">Auch ich habe das lange geglaubt.</p>
          </section>

          {/* So macht man das eben */}
          <section className="space-y-4 border-l-4 border-gold pl-6 py-4 mb-12">
            <h3 className="font-serif text-xl sm:text-2xl text-loam">„So macht man das eben."</h3>
            <p className="text-loam/80 leading-relaxed font-semibold">
              Vier Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Lange Zeit dachte ich, ich müsste mich anpassen. So halten wie alle. So füttern wie alle. So reiten wie
              alle. Einfach mitlaufen. Nicht, weil es sich richtig angefühlt hat – sondern weil ich dachte, ich müsste
              die Erwartungen der Anderen erfüllen.
            </p>
          </section>

          {/* Der Wendepunkt - Benny */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">
              Der Moment, der alles verändert hat
            </h2>
            <p className="text-loam/80 leading-relaxed">
              Mit 12 bekam ich ein Pflegepferd: Benny. Ich liebte dieses Pferd. Mein Papa wollte ihn mir kaufen, aber
              ich war noch zu jung. Mit 14 wurde Benny verkauft. Ich war am Boden zerstört.
            </p>
            <p className="text-loam/80 leading-relaxed">Und dann kam ein Brief.</p>
            <p className="text-loam/80 leading-relaxed">
              Ich erinnere mich noch an den Moment, als ich den Briefumschlag mit den Fotos öffnete. Benny in seinem
              neuen Offenstall mit einem anderen Pferd zusammen, eine große Weide im Hintergrund. Er sah aus wie ein
              vollkommen anderes Pferd.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-loam/80 text-lg">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein Tier, das abgestumpft in
              seiner Box auf die nächste langweilige Reitstunde wartet.
            </blockquote>
            <p className="text-loam/80 leading-relaxed">
              Ich vermisste ihn ganz schrecklich. Und gleichzeitig war ich vollkommen glücklich, dass es ihm jetzt so
              viel besser ging. In diesem Moment wusste ich: Es geht also auch anders. Und ich schwor mir: Wenn ich mal
              ein eigenes Pferd habe, wird es anders.
            </p>
          </section>

          {/* Der Wendepunkt - Denken */}
          <section className="space-y-4 bg-accent/5 rounded-sm p-8 border border-accent/10 mb-12">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground">
              Nicht mein Denken war falsch. Die Umgebung war falsch für mein Denken.
            </h3>
            <p className="text-loam/80 leading-relaxed">
              Der Wendepunkt kam nicht laut. Er kam leise – als inneres Wissen: Ich will Pferde nicht kontrollieren. Ich
              will sie wirklich verstehen.
            </p>
            <p className="text-loam/80 leading-relaxed">Ich habe angefangen, mich neu auszurichten:</p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">Wissen, das Sinn macht.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">Fütterung, die stärkt.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">Haltung, die dem Pferd dient – nicht alten Mustern.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">Training, das Beziehung baut.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">
                  Eine innere Haltung, die nicht auf Angst basiert – sondern auf Verbundenheit und Vertrauen.
                </span>
              </li>
            </ul>
          </section>

          {/* Was ich glaube */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">Was ich glaube</h2>
            <p className="text-loam/80 leading-relaxed">
              Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen, nicht das Problem
              sind – sondern die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Das Problem sind die, die NICHT fragen. Die die Verantwortung unreflektiert abgeben. Die sagen: „Der
              Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater, Hufschmied, Sattler wird schon wissen,
              was er tut."
            </p>
            <p className="text-loam/80 leading-relaxed">
              Versteh mich nicht falsch: Diese Menschen sind wichtig. Aber sie ersetzen nicht deine Verantwortung. Sie
              ersetzen nicht dein Hinschauen. Sie ersetzen nicht dein Bauchgefühl.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-loam/80 text-lg">
              Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
            </blockquote>
            <p className="text-loam/80 leading-relaxed">
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht. Du bist
              nicht „zu pingelig". Du bist nicht „zu kompliziert". Du schaust hin. Und genau das macht den Unterschied.
            </p>
          </section>

          {/* Was ich dir geben will */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">
              Was ich dir geben will
            </h2>
            <p className="text-loam/80 leading-relaxed font-semibold">Wissen als Rüstung.</p>
            <p className="text-loam/80 leading-relaxed">
              Damit du nicht mehr blind vertrauen musst. Damit du selbst entscheiden kannst. Damit du die Verantwortung
              auf Dauer auch tatsächlich tragen kannst – weil du weißt, was du tust.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Damit du nicht die teuren Fehler machst, die ich schon gemacht habe. Damit du nicht um 3 Uhr nachts
              googelst, ob das normal ist. Damit du nicht hilflos neben deinem Pferd stehst und nicht weißt, was du tun
              sollst.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Ich habe Zehntausende Euro unnötig ausgegeben – für Tierärzte, Zusätze, Therapeuten, Equipment, Lehrgänge
              – weil ich das Wissen damals noch nicht hatte. Ich möchte dir helfen, dich davor zu bewahren, dasselbe
              Lehrgeld zu bezahlen.
            </p>
          </section>

          {/* Mein Weg */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">Mein Weg</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-loam">Über 30 Jahre mit Pferden</p>
                  <p className="text-loam/80">
                    Mit allem, was dazugehört. Die Fehler. Die Tierarztrechnungen. Die schlaflosen Nächte. Aber auch:
                    Die Momente, in denen alles stimmt. Die Ruhe, wenn du weißt, dass es deinem Pferd gut geht.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-loam">Ausbildung zur Reittherapeutin (Abschluss 2009)</p>
                  <p className="text-loam/80">
                    16 Jahre Praxis. Über 200 Menschen begleitet – Kinder und Erwachsene mit körperlichen und geistigen
                    Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen. Menschen, die von anderen
                    Menschen verletzt wurden und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-loam">Pferde als Lehrer</p>
                  <p className="text-loam/80">
                    Pferde lügen nicht. Sie reagieren. Sie sind Spiegel der Seele. Und sie haben mir mehr über Menschen
                    beigebracht als jedes Psychologie-Buch.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">4.</span>
                <div>
                  <p className="font-semibold text-loam">15 Jahre in der Pferdebranche</p>
                  <p className="text-loam/80">
                    Bei Hempura (Vertrieb, Management) – tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden,
                    Trainern. Tausende Fragen von Pferdebesitzern wie dir. Jede einzelne hat mein Verständnis vertieft.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">5.</span>
                <div>
                  <p className="font-semibold text-loam">5 Jahre hinter den Kulissen</p>
                  <p className="text-loam/80">
                    Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas – Aufbau des kompletten
                    Online-Business, Kursentwicklung, Projektmanagement. Ich habe gesehen, was hinter der Bühne
                    passiert. Das Schöne. Und das nicht so Schöne. Es hat mir gezeigt: Nicht alles, was glänzt, ist
                    Gold. Und nicht alles, was funktioniert, ist gut fürs Pferd.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0 font-bold">6.</span>
                <div>
                  <p className="font-semibold text-loam">Mein eigenes Pferd – seit 20 Jahren</p>
                  <p className="text-loam/80">
                    Ramses, mein Friese, im Offenstall. Er hat mich mehr gelehrt als alle Kurse zusammen.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Das Team */}
          <section className="space-y-4 bg-accent/5 rounded-sm p-8 border border-accent/10 mb-12">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground">Das Team hinter Pferdesicht</h2>
            <p className="text-loam/80 leading-relaxed">
              Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann Stefan. Gemeinsam haben wir in den
              letzten 20 Jahren mehrere erfolgreiche Projekte in der Pferdewelt aufgebaut – und auch einige außerhalb.
            </p>
            <p className="text-loam/80 leading-relaxed">
              Er der Stratege, ich die konsequente Umsetzerin. Er sorgt dafür, dass ich mich auf das konzentrieren kann,
              was ich am besten kann: Dir das Wissen zu geben, das dein Pferd verdient.
            </p>
          </section>

          {/* Für wen ist Pferdesicht */}
          <section className="space-y-6 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-loam leading-tight">
              Für wen ist Pferdesicht?
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">
                  Für dich, wenn du spürst, dass es einen anderen Weg geben muss.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">
                  Für dich, wenn du keine Lust mehr hast auf „Das haben wir schon immer so gemacht".
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">Für dich, wenn du Wissen willst – nicht Meinungen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">
                  Für dich, wenn du bereit bist, hinzuschauen. Auch wenn es unbequem ist.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-foreground/80">
                  Und für dich, wenn du dich schon auf den Weg gemacht hast und dir Unterstützung wünschst – weil es mit
                  dem richtigen Wissen schneller geht und mit weniger Fehlern.
                </span>
              </li>
            </ul>
          </section>

          {/* Abschluss */}
          <section className="space-y-6 border-t border-accent/20 pt-12">
            <p className="text-loam/80 leading-relaxed">Das hier ist mein Weg. Vielleicht auch deiner.</p>
            <p className="text-loam/80 leading-relaxed">
              Wenn du spürst, dass du eine andere Art von Pferdewelt willst – sanft, stark, klar, wahrhaftig – mit dem
              Wohl unserer Pferde im Mittelpunkt – dann bleib hier.
            </p>
            <p className="text-loam/80 leading-relaxed">Ich teile mein Wissen. Ehrlich, offen, regelmäßig.</p>
            <ul className="space-y-2 ml-4">
              <li className="text-loam/80">Über Pferdegesundheit, die nicht kompliziert sein muss.</li>
              <li className="text-loam/80">Über Haltung, die dem Pferd dient – nicht alten Mustern.</li>
              <li className="text-loam/80">Über die Beziehung zwischen Mensch und Pferd.</li>
              <li className="text-loam/80">
                Über dieses tiefe Gefühl, dass Pferde so viel mehr brauchen als das, was man ihnen oft zugesteht.
              </li>
            </ul>

            <blockquote className="border-l-4 border-accent pl-6 py-4">
              <p className="italic text-loam/80 mb-4">
                Die Pferdebesitzer, die „zu viel" fragen, sind nicht das Problem. Sie sind die Lösung für eine
                natürliche Haltung und das Wohlergehen unserer Pferde.
              </p>
              <p className="italic text-loam/80 mb-4">
                Deine Fragen und Bedenken sind nicht zu viel. Das ist genau das, was unsere Pferde brauchen.
              </p>
              <p className="italic text-loam/80 mb-2">Vertraue deiner Perspektive.</p>
              <p className="text-accent font-serif text-lg">— Diana</p>
            </blockquote>
          </section>

          {/* CTA Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-accent/20">
            <Link href="/blog/pferd-eindecken-winter" className="group">
              <div className="bg-gold/10 rounded-sm p-6 transition hover:bg-gold/20 h-full border border-gold/20 hover:border-gold/40">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 font-sans">
                  Kostenlos Herunterladen
                </p>
                <h3 className="font-serif text-2xl text-loam mb-3 font-bold">Winter-Guide</h3>
                <p className="text-loam/70 text-sm font-sans leading-relaxed">
                  So bereitest du dein Pferd perfekt auf den Winter vor – mit wissenschaftlichen Fakten und 20 Jahren
                  Praxiserfahrung.
                </p>
              </div>
            </Link>
            <Link href="/blog" className="group">
              <div className="bg-gold/10 rounded-sm p-6 transition hover:bg-gold/20 h-full border border-gold/20 hover:border-gold/40">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 font-sans">
                  Aktuelle Inhalte
                </p>
                <h3 className="font-serif text-2xl text-loam mb-3 font-bold">Zum Blog</h3>
                <p className="text-loam/70 text-sm font-sans leading-relaxed">
                  Fundierte Artikel über Pferdegesundheit, Haltung und die Beziehung zwischen Mensch und Pferd.
                </p>
              </div>
            </Link>
            <Link href="#newsletter" className="group">
              <div className="bg-gold/10 rounded-sm p-6 transition hover:bg-gold/20 h-full border border-gold/20 hover:border-gold/40">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Wöchentlich</p>
                <h3 className="font-serif text-2xl text-loam mb-3 font-bold">Newsletter</h3>
                <p className="text-loam/70 text-sm font-sans leading-relaxed">
                  Abonniere für wöchentliche Insights, Tipps und exklusive Inhalte für Pferdemenschen.
                </p>
              </div>
            </Link>
          </section>
        </div>
      </article>

      {/* Footer */}
    </main>
  )
}
