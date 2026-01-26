import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Diana",
  description:
    "Lerne Diana kennen – 30+ Jahre Pferdeerfahrung, Reittherapeutin und Gründerin von Pferdesicht. Fundiertes Wissen, im Alltag getestet.",
};

export default function UeberMichPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo */}
          <div className="flex justify-center mb-10">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-soft-lg">
              <Image
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana - Gründerin von Pferdesicht"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-sage-600 font-medium mb-2">Diana</p>
            <p className="text-loam-500 text-sm mb-6">Gründerin von Pferdesicht</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-loam-900 mb-8">
              Für Pferdemenschen, die hinschauen.
            </h1>
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-loam-700 leading-relaxed mb-6">
              Pferde fand ich schon als kleines Kind toll. Mit 12, als ich anfing zu reiten,
              war ich vollkommen begeistert – aber gleichzeitig fühlte sich irgendetwas falsch an.
            </p>
            <p className="text-lg text-loam-600 leading-relaxed italic mb-6">
              Wie wenn dein Bauch dir sagt: Da stimmt was nicht – aber alle um dich
              herum sagen: Stell dich nicht so an.
            </p>
            <p className="text-lg text-loam-700 leading-relaxed mb-6">
              Die Pferde standen in Boxen. Den ganzen Tag. Wenn sie rauskamen, gingen sie ab –
              wie Sprungfedern, die zu lange zusammengepresst wurden. Im Winter waren die
              Schulpferde kaum handelbar. Ins Gelände? Einmal im Jahr, wenn überhaupt.
            </p>
            <p className="text-lg text-loam-700 leading-relaxed">
              Aber ich konnte nicht benennen, was falsch war. Weil alle sagten:
              <strong> Das ist normal. So sind Pferde halt.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Gaslighting Quotes */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4 text-center">
            Die Sätze, bei denen die wenigsten sich trauen, offen etwas dazu zu sagen
          </h2>
          <p className="text-loam-600 mb-8 text-center">Vielleicht kennst du sie auch:</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              `„Dann hau da mal drauf."`,
              `„Dicke Beine sind normal bei dem."`,
              `„Dann reit da halt drüber."`,
              `„Der verarscht dich nur."`,
              `„Ein Pferd steht nun mal so."`,
              `„Das macht man hier schon immer so."`,
              `„Du denkst zu viel."`,
              `„Das Pferd soll einfach funktionieren."`,
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-bg-light p-4 rounded-xl border border-loam-200 italic text-loam-700"
              >
                {quote}
              </div>
            ))}
          </div>

          <p className="text-sm text-loam-500 text-center mb-8">
            (Wahrscheinlich von der Person, die beim Ausreiten selbst am meisten Angst hat.)
          </p>

          <div className="bg-loam-900 p-8 rounded-2xl text-center">
            <p className="text-loam-300 mb-4">
              Und unter all dem liegt dieser eine Satz, den niemand ausspricht – aber viele fühlen:
            </p>
            <p className="text-xl text-white font-medium">
              Wenn du anders denkst, dann bist DU das Problem.
            </p>
            <p className="text-loam-400 mt-4">
              Auch ich habe das lange geglaubt.
            </p>
          </div>
        </div>
      </section>

      {/* "So macht man das eben" */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-6">
            „So macht man das eben."
          </h2>
          <p className="text-lg text-loam-700 leading-relaxed mb-6">
            Vier Worte, die vermutlich mehr Pferde krank gemacht haben als jede Krankheit.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Lange Zeit dachte ich, ich müsste mich anpassen. So halten wie alle. So füttern
            wie alle. So reiten wie alle. Einfach mitlaufen.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed">
            Nicht, weil es sich richtig angefühlt hat – sondern weil ich dachte, ich müsste
            die Erwartungen der Anderen erfüllen.
          </p>
        </div>
      </section>

      {/* Der Moment - Benny */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Der Moment, der alles verändert hat
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Mit 12 bekam ich ein Pflegepferd: Benny. Ich liebte dieses Pferd. Mein Papa
              wollte ihn mir kaufen, aber ich war noch zu jung.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mit 14 wurde Benny verkauft. Ich war am Boden zerstört.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Und dann kam ein Brief.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich erinnere mich noch an den Moment, als ich den Briefumschlag mit den Fotos
              öffnete. Benny in seinem neuen Offenstall mit einem anderen Pferd zusammen,
              eine große Weide im Hintergrund. Er sah aus wie ein vollkommen anderes Pferd.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-medium text-loam-900">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein
              Tier, das abgestumpft in seiner Box auf die nächste langweilige Reitstunde wartet.
            </p>
          </div>

          <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200 mt-8">
            <p className="text-lg text-loam-900 font-medium mb-4">
              In diesem Moment wusste ich: Es geht also auch anders.
            </p>
            <p className="text-loam-600">
              Und ich gab mir ein innerliches Versprechen: Wenn ich mal ein eigenes Pferd habe,
              wird es anders.
            </p>
          </div>
        </div>
      </section>

      {/* Nicht mein Denken war falsch */}
      <section className="py-16 lg:py-20 bg-sage-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Nicht mein Denken war falsch. Die Umgebung war falsch für mein Denken.
          </h2>

          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Der Wendepunkt kam nicht laut. Er kam leise – als inneres Wissen:
          </p>
          <p className="text-xl text-loam-900 font-medium mb-8">
            Ich will Pferde nicht kontrollieren. Ich will sie wirklich verstehen.
          </p>

          <p className="text-lg text-loam-600 leading-relaxed mb-4">
            Ich habe angefangen, mich neu auszurichten:
          </p>
          <div className="space-y-3">
            {[
              "Wissen, das Sinn macht.",
              "Fütterung, die stärkt.",
              "Haltung, die atmen lässt.",
              "Training, das Beziehung baut.",
              "Eine innere Haltung, die nicht auf Angst basiert – sondern auf Verbundenheit und Vertrauen.",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-sage-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-loam-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ich glaube */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Was ich glaube
          </h2>

          <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200 mb-8">
            <p className="text-xl text-loam-900 font-medium leading-relaxed mb-4">
              Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen,
              nicht das Problem sind – sondern die Lösung.
            </p>
            <p className="text-loam-600">
              Die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>
          </div>

          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Das Problem sind die, die NICHT fragen. Die die Verantwortung unreflektiert abgeben.
          </p>

          <p className="text-lg text-loam-700 leading-relaxed font-medium">
            Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
          </p>
        </div>
      </section>

      {/* Was ich dir geben will */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
            Was ich dir geben will
          </h2>
          <p className="text-2xl text-sage-600 font-serif mb-8">Wissen als Rüstung.</p>

          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Nicht nur Wissen über Pferde – sondern auch das Wissen, das ich auf die harte
            Tour lernen musste:
          </p>
          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Wie du erkennst, welchen Experten du vertrauen kannst. Wie du dich am Stall
            durchsetzt – nicht mit dem Kopf durch die Wand, sondern durch gute Kommunikation.
            Wie du mit Stallpolitik umgehst, ohne dich verbiegen zu müssen.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed mb-6">
            Damit du nicht die teuren Fehler machst, die ich schon gemacht habe. Damit du
            nicht um 3 Uhr nachts googelst, ob das normal ist.
          </p>

          <div className="bg-loam-900 p-8 rounded-2xl text-white mt-8">
            <p className="text-xl leading-relaxed">
              Dieser Weg, den ich über 30 Jahre gegangen bin – den musst du nicht alleine gehen.
              Und du brauchst keine 30 Jahre.
            </p>
          </div>
        </div>
      </section>

      {/* Mein Weg - 6 Points */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-10 text-center">
            Mein Weg
          </h2>

          <div className="space-y-8">
            {[
              {
                num: 1,
                title: "Über 30 Jahre mit Pferden",
                text: "Mit allem, was dazugehört. Die Fehler. Die Tierarztrechnungen. Die schlaflosen Nächte.",
                gold: false,
              },
              {
                num: 2,
                title: "Ausbildung zur Reittherapeutin (Abschluss 2009)",
                text: "16 Jahre Praxis. Über 200 Menschen begleitet.",
                gold: false,
              },
              {
                num: 3,
                title: "Pferde als Lehrer",
                text: "Pferde lügen nicht. Sie reagieren. Sie sind Spiegel der Seele.",
                gold: false,
              },
              {
                num: 4,
                title: "15 Jahre in der Pferdebranche",
                text: "Bei Hempura (Vertrieb, Management) – tausende Gespräche.",
                gold: false,
              },
              {
                num: 5,
                title: "5 Jahre hinter den Kulissen",
                text: "Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas.",
                gold: false,
              },
              {
                num: 6,
                title: "Mein eigenes Pferd – seit 20 Jahren",
                text: "Ramses, mein Friese, im Offenstall.",
                gold: true,
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${item.gold ? 'bg-gold-500' : 'bg-sage-600'} text-white flex items-center justify-center font-medium`}>
                  {item.num}
                </div>
                <div>
                  <p className="font-medium text-loam-900 text-lg mb-1">{item.title}</p>
                  <p className="text-loam-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-6">
            Das Team hinter Pferdesicht
          </h2>
          <p className="text-lg text-loam-600 leading-relaxed mb-4">
            Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann Stefan.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed mb-4">
            Gemeinsam haben wir in den letzten 20 Jahren mehrere erfolgreiche Projekte in
            der Pferdewelt aufgebaut – und auch einige außerhalb. Er der Stratege, ich die
            konsequente Umsetzerin.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed">
            Er sorgt dafür, dass ich mich auf das konzentrieren kann, was ich am besten kann:
            Dir das Wissen zu geben, das dein Pferd verdient.
          </p>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Für wen ist Pferdesicht?
          </h2>
          <div className="space-y-4">
            {[
              "Für dich, wenn du spürst, dass es einen anderen Weg geben muss.",
              `Für dich, wenn du keine Lust mehr hast auf „Das haben wir schon immer so gemacht".`,
              "Für dich, wenn du Wissen willst – nicht Meinungen.",
              "Für dich, wenn du bereit bist, hinzuschauen. Auch wenn es unbequem ist.",
              "Und für dich, wenn du dich schon auf den Weg gemacht hast und dir Unterstützung wünschst.",
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-sage-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-loam-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-20 bg-loam-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl text-white leading-relaxed italic">
            „Die Pferdebesitzer, die ‚zu viel' fragen, sind nicht das Problem.
            Sie sind die Lösung für eine natürliche Haltung und das Wohlergehen unserer Pferde."
          </blockquote>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-loam-700 mb-2">
            Deine Fragen und Bedenken sind nicht zu viel.
          </p>
          <p className="text-lg text-loam-700 mb-8">
            Das ist genau das, was unsere Pferde brauchen.
          </p>
          <p className="text-2xl text-loam-900 font-serif italic mb-4">
            „Vertraue deiner Perspektive."
          </p>
          <p className="text-loam-600">— Deine Diana von Pferdesicht</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Winter Guide */}
            <div className="bg-white p-6 rounded-2xl border border-loam-200 text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">Winter-Guide</h3>
              <p className="text-loam-600 text-sm mb-4">Kostenlos herunterladen</p>
              <Link href="/guides/winter" className="text-sage-600 font-medium hover:text-sage-700">
                Jetzt holen →
              </Link>
            </div>

            {/* Blog */}
            <div className="bg-white p-6 rounded-2xl border border-loam-200 text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">Blog</h3>
              <p className="text-loam-600 text-sm mb-4">Aktuelle Beiträge lesen</p>
              <Link href="/wissen" className="text-sage-600 font-medium hover:text-sage-700">
                Zum Blog →
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-white p-6 rounded-2xl border border-loam-200 text-center">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">Newsletter</h3>
              <p className="text-loam-600 text-sm mb-4">Wöchentlich neues Wissen</p>
              <button className="text-sage-600 font-medium hover:text-sage-700">
                Anmelden →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
