import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Diana",
  description:
    "Lerne Diana kennen – 30+ Jahre Pferdeerfahrung, Reittherapeutin und Gründerin von Pferdesicht. Fundiertes Wissen, im Alltag getestet.",
};

// ============================================
// Page Component
// ============================================

export default function UeberMichPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-bg-light py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
            Pferdesicht – Vertraue deiner Perspektive.
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
            Über Diana
          </h1>
          <p className="text-xl text-loam-600 leading-relaxed italic">
            Für Pferdemenschen, die hinschauen.
          </p>
        </div>
      </section>

      {/* Intro Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Pferde fand ich schon als kleines Kind toll. Mit 12, als ich anfing zu reiten,
              war ich vollkommen begeistert – aber gleichzeitig fühlte sich irgendetwas falsch an.
            </p>
            <p className="text-lg leading-relaxed mb-6 italic text-loam-700">
              Wie wenn dein Bauch dir sagt: <em>Da stimmt was nicht</em> – aber alle um dich
              herum sagen: <em>Stell dich nicht so an.</em>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Die Pferde standen in Boxen. Den ganzen Tag. Wenn sie rauskamen, gingen sie ab –
              wie Sprungfedern, die zu lange zusammengepresst wurden. Im Winter waren die
              Schulpferde kaum handelbar. Ins Gelände? Einmal im Jahr, wenn überhaupt. Die
              Pferde waren das nicht gewöhnt. Die Reiter hatten Angst. Eine Freundin fiel vom
              Pferd und musste ins Krankenhaus.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich hatte auch Angst. Im Gelände war ich die, die heimlich die Zügel kürzer
              nahm und hoffte, dass es niemand merkt.
            </p>
            <p className="text-lg leading-relaxed">
              Aber ich konnte nicht benennen, was falsch war. Weil alle sagten:
              <strong> Das ist normal. So sind Pferde halt.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Gaslighting Quotes */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8 text-center">
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
                className="bg-paper p-4 rounded-xl border border-loam-200 italic text-loam-700"
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

      {/* "So macht man das" */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-6">
            „So macht man das eben."
          </h2>
          <p className="text-lg text-loam-600 leading-relaxed mb-6">
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

      {/* The Turning Point - Benny */}
      <section className="py-16 lg:py-24 bg-sage-50">
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
            <p className="text-lg leading-relaxed mb-6">
              Zum ersten Mal sah ich ein Pferd, das aussah wie... ein Pferd. Nicht wie ein
              Tier, das abgestumpft in seiner Box auf die nächste langweilige Reitstunde wartet.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich vermisste ihn ganz schrecklich. Und gleichzeitig war ich vollkommen glücklich,
              dass es ihm jetzt so viel besser ging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-sage-200 mt-8">
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

      {/* The Realization */}
      <section className="py-16 lg:py-24">
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
          <ul className="space-y-2 text-lg text-loam-600 mb-6">
            <li>Wissen, das Sinn macht.</li>
            <li>Fütterung, die stärkt.</li>
            <li>Haltung, die atmen lässt.</li>
            <li>Training, das Beziehung baut.</li>
            <li>Eine innere Haltung, die nicht auf Angst basiert – sondern auf Verbundenheit und Vertrauen.</li>
          </ul>
        </div>
      </section>

      {/* Ramses */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sage-600 font-medium uppercase tracking-wide text-sm mb-4">
            Benny war nur der Anfang
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Dann kam Ramses – mein eigenes Pferd. Und damit die Realität.
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Ein Traum ging in Erfüllung. Ein Friese, ganz meiner.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mit dem eigenen Pferd wurde aus dem Versprechen Ernst. Jetzt musste ich es
              wirklich umsetzen – nicht nur davon träumen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Und ich merkte schnell: Wissen über Pferde allein reicht nicht.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Ich musste lernen, mich am Stall durchzusetzen.</strong> Gegen die
              Stallkönigin, die genau wusste, wie man Pferde zu halten hat. Gegen den
              Stallbetreiber, der keine Sonderwünsche mochte. Gegen das kollektive
              „Das haben wir schon immer so gemacht."
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Aber nicht mit dem Kopf durch die Wand. Ich musste lernen, zu kommunizieren.
              Zu erklären, warum mir etwas wichtig ist. Menschen mitzunehmen, statt sie vor
              den Kopf zu stoßen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Das war härter als jedes Fachbuch.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Und ich musste lernen, wem ich vertrauen kann – und wem nicht.</strong>
              Ich habe Tierärzten vertraut, die sich als mittelmäßig herausstellten.
              Hufschmieden, die mehr Schaden anrichteten als Nutzen. Trainern, deren Methoden
              nicht zu meinem Pferd passten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Jeder Fehlschlag kostete Geld. Manche kosteten Nerven. Einige kosteten mein
              Pferd unnötige Schmerzen.
            </p>
            <p className="text-lg leading-relaxed">
              Ich habe Zehntausende Euro unnötig ausgegeben – für Tierärzte, Zusätze,
              Therapeuten, Equipment, Lehrgänge – weil ich das Wissen damals noch nicht hatte,
              die Guten von den Schlechten zu unterscheiden.
            </p>
          </div>
        </div>
      </section>

      {/* Lucky Circumstances */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Dann kamen glückliche Umstände – und alles lief parallel
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Ich wollte es wirklich verstehen. Nicht oberflächlich, nicht „reicht schon" –
              sondern in der Tiefe.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Nicht weil ich musste. Sondern weil ich nur so beruhigt sein konnte. Weil ich
              nur so wusste, dass ich das Richtige für mein Pferd tue. Weil ich dieses nagende
              Gefühl loswerden wollte, vielleicht doch etwas falsch zu machen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Also fing ich an zu recherchieren. Unermüdlich. Bücher, Studien, Fachliteratur.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Und durch glückliche Umstände – durch die unternehmerischen Tätigkeiten, die
              Stefan und ich aufbauten – kam noch etwas dazu:
            </p>
          </div>

          <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200 mb-8">
            <p className="text-lg text-loam-900 font-medium mb-4">15 Jahre bei Hempura.</p>
            <p className="text-loam-600 leading-relaxed">
              Tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden, Trainern – über
              Gesundheit, Haltung, Fütterung. Nicht oberflächlich, sondern in der Tiefe. Und
              tausende Gespräche mit Pferdebesitzern in genau diesen Momenten: Wenn das Pferd
              krank ist. Wenn nichts mehr hilft. Wenn die Verzweiflung groß ist. Ich weiß,
              wie sich das anfühlt.
            </p>
          </div>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Und das alles parallel. Recherche. Profi-Gespräche. Und gleichzeitig: Umsetzen,
              ausprobieren, optimieren, lernen – mit Ramses an meiner Seite.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mit der Zeit lernte ich, meinem eigenen Bauchgefühl zu vertrauen. Immer mehr.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich habe gehört, wie unterschiedlich Experten denken. Wie der eine Tierarzt das
              Gegenteil vom anderen empfiehlt. Wie manche Hufschmiede ihr Handwerk verstehen –
              und andere nicht. Wie Trainer, die von außen brillant wirken, hinter den Kulissen
              ganz anders arbeiten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Und ich habe tausende Fragen von Pferdebesitzern beantwortet. Jede einzelne hat
              mein Verständnis vertieft. Jede hat mir gezeigt, wo die echten Unsicherheiten liegen.
            </p>
          </div>

          <div className="bg-loam-900 p-8 rounded-2xl text-white">
            <p className="text-lg leading-relaxed">
              Diese Kombination – unermüdliche Recherche, tausende Experten-Gespräche, und das
              tägliche Umsetzen mit meinem eigenen Pferd – hat mir etwas gegeben, das kein Kurs
              der Welt vermitteln kann: <strong>Die Fähigkeit zu unterscheiden.</strong> Zwischen
              gut und mittelmäßig. Zwischen fundiert und oberflächlich. Zwischen „klingt gut"
              und „ist gut".
            </p>
          </div>
        </div>
      </section>

      {/* Reittherapie */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Die Reittherapie – Was mich 16 Jahre lang lehrte
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Parallel zu meinem Offenstall habe ich 16 Jahre lang als Reittherapeutin gearbeitet.
              Diese Arbeit hat mein Verständnis von Pferden grundlegend verändert.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich habe über 200 Menschen begleitet – Kinder und Erwachsene mit körperlichen und
              geistigen Behinderungen, Down-Syndrom, ADHS, psychischen Störungen, Lernschwächen.
              Menschen, die von anderen Menschen verletzt wurden und bei Pferden zum ersten Mal
              wieder Vertrauen fassen konnten.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich habe gesehen, wie Kinder, die kein Wort sprachen, mit Pferden kommunizierten.
              Wie traumatisierte Erwachsene durch ein Pferd wieder Vertrauen fanden. Wie Pferde
              sofort zeigten, wenn ein Mensch innerlich unruhig war – bevor der Mensch es selbst wusste.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-sage-200 my-8">
            <p className="text-lg text-loam-900 font-medium mb-4">Was ich gelernt habe:</p>
            <p className="text-loam-600 leading-relaxed mb-4">
              Pferde lügen nicht. Sie spiegeln. Und wenn du verstehst, was sie dir zeigen,
              verstehst du nicht nur dein Pferd – du verstehst auch dich selbst.
            </p>
            <p className="text-loam-600 leading-relaxed">
              Das Pferd reagiert nie grundlos. Es zeigt uns, was wir noch nicht sehen.
              Das habe ich in 16 Jahren tausendfach beobachtet.
            </p>
          </div>

          <p className="text-lg text-loam-900 font-medium mb-6">
            Diese Perspektive unterscheidet mich von normalen Trainern:
          </p>

          <div className="overflow-hidden rounded-xl border border-loam-200">
            <table className="w-full">
              <thead className="bg-loam-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-loam-700">
                    Was normale Trainer sagen...
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-loam-700">
                    Was ich zusätzlich sehe...
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-loam-100 bg-white">
                {[
                  [`„Das Pferd ist dominant"`, "Das Pferd spiegelt die Unsicherheit des Menschen"],
                  [`„Das Pferd testet dich"`, "Das Pferd sucht Sicherheit"],
                  [`„Das ist ein Verhaltensproblem"`, "Das ist eine Beziehungsfrage"],
                  [`„Mehr Druck!"`, "Mehr Klarheit – in dir selbst"],
                ].map(([trainer, diana], index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-loam-600">{trainer}</td>
                    <td className="px-6 py-4 text-sm text-loam-900 font-medium">{diana}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-lg text-loam-600 leading-relaxed mt-8">
            Der Mensch ist immer Teil der Gleichung. Das habe ich in der Reittherapie gelernt.
            Und das verändert alles.
          </p>
        </div>
      </section>

      {/* Freiheitsdressur */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Die Freiheitsdressur – 5 Jahre hinter den Kulissen
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              5 Jahre bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas.
              Aufbau des kompletten Online-Business, Kursentwicklung, Projektmanagement.
              Einblicke in internationale Pferde-Shows und deren Hintergründe.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich bin dankbar für diese Zeit. Ich habe unglaublich viel gelernt – über Pferde,
              über Business, über Menschen. Vieles davon prägt mich bis heute.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Und gleichzeitig habe ich in diesen Jahren meinen eigenen Weg gefunden.
            </p>
          </div>

          <div className="bg-gold-50 p-8 rounded-2xl border border-gold-200">
            <p className="text-xl text-loam-900 font-serif italic">
              Echte Partnerschaft entsteht, wenn das Pferd WÄHLT zu bleiben – nicht weil es
              muss, sondern weil es will.
            </p>
            <p className="text-loam-600 mt-4">
              Das ist mein Weg. Nicht besser, nicht schlechter – einfach meiner.
            </p>
          </div>
        </div>
      </section>

      {/* Why I See Differently */}
      <section className="py-16 lg:py-24 bg-sage-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl mb-8">
            Warum ich anders schaue
          </h2>

          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Wenn ich heute über Pferdehaltung, Training oder Verhalten spreche, bringe ich
            immer diese dreifache Perspektive mit:
          </p>

          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium text-gold-300 mb-2">30+ Jahre Praxis:</p>
              <p className="text-white/90">
                Was Pferde körperlich brauchen – Fütterung, Haltung, Gesundheit. Die Fehler,
                die Tierarztrechnungen, die schlaflosen Nächte.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium text-gold-300 mb-2">16 Jahre Reittherapie:</p>
              <p className="text-white/90">
                Was Pferde uns über uns selbst zeigen – und wie die Beziehung alles beeinflusst.
                Das Pferd als Spiegel.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="font-medium text-gold-300 mb-2">5 Jahre hinter den Kulissen:</p>
              <p className="text-white/90">
                Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Ich bin dankbar
                für das Lernen – und habe meinen eigenen Weg zu echter Partnerschaft gefunden.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Das macht mich nicht besser als andere Experten. Aber es macht mich anders.
            </p>
            <p className="text-xl text-white font-medium">
              Ich schaue nicht nur auf das Pferd – ich schaue auf das, was zwischen Mensch
              und Pferd passiert.
            </p>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Was ich glaube
          </h2>

          <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200 mb-8">
            <p className="text-xl text-loam-900 font-medium leading-relaxed">
              Ich glaube, dass die Pferdebesitzer, die „zu viel" fragen und „zu genau" hinschauen,
              nicht das Problem sind – sondern die Lösung.
            </p>
            <p className="text-loam-600 mt-4">
              Die Lösung für eine natürliche Haltung. Für das Wohlergehen unserer Pferde.
            </p>
          </div>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Das Problem sind die, die NICHT fragen. Die die Verantwortung unreflektiert abgeben.
              Die sagen: <em>„Der Trainer, Stallbesitzer, Tierarzt, Therapeut, Futtermittelberater,
              Hufschmied, Sattler wird schon wissen, was er tut."</em>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Versteh mich nicht falsch: Diese Menschen sind wichtig. Aber sie ersetzen nicht
              deine Verantwortung. Sie ersetzen nicht dein Hinschauen. Sie ersetzen nicht dein Bauchgefühl.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Verantwortung abgeben ist bequem. Aber bequem ist nicht das Gleiche wie richtig.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Wenn du spürst, dass etwas nicht stimmt – dann stimmt wahrscheinlich tatsächlich etwas nicht.
            </p>
            <p className="text-lg leading-relaxed">
              Du bist nicht „zu pingelig". Du bist nicht „zu kompliziert".
              <strong> Du schaust hin. Und genau das macht den Unterschied.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What I Want to Give You */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
            Was ich dir geben will
          </h2>
          <p className="text-2xl text-sage-600 font-serif mb-8">Wissen als Rüstung.</p>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Nicht nur Wissen über Pferde – sondern auch das Wissen, das ich auf die harte
              Tour lernen musste:
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Wie du erkennst, welchen Experten du vertrauen kannst. Wie du dich am Stall
              durchsetzt – nicht mit dem Kopf durch die Wand, sondern durch gute Kommunikation.
              Wie du mit Stallpolitik umgehst, ohne dich verbiegen zu müssen.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Und dazu meine besondere Perspektive:</strong> Was dein Pferd dir zeigt.
              Wie die Beziehung zwischen euch alles beeinflusst. Warum Verstehen vor Korrigieren kommt.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Damit du nicht mehr blind vertrauen musst. Damit du selbst entscheiden kannst.
              Damit du die Verantwortung auf Dauer auch tatsächlich tragen kannst – weil du weißt,
              was du tust.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Damit du nicht die teuren Fehler machst, die ich schon gemacht habe. Damit du
              nicht um 3 Uhr nachts googelst, ob das normal ist. Damit du nicht hilflos neben
              deinem Pferd stehst und nicht weißt, was du tun sollst.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Und wenn es doch passiert</strong> – wenn dein Pferd krank wird, wenn du
              nicht mehr weiterweißt – dann lass ich dich auch nicht allein.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Diagnosen stellen oder Behandlungen empfehlen? Das ist nicht meine Aufgabe. Aber
              Orientierung geben, wenn sich alles überwältigend anfühlt – das kann ich.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ich kann dir zeigen, wie ich in solchen Situationen vorgehe: Welche Fragen ich
              an wen stelle. Welche Informationen helfen, die Lage einzuschätzen. Wie du dich
              auf das Gespräch mit dem Tierarzt vorbereitest und welche Informationen wichtig
              sind, um die Situation besser einschätzen zu können.
            </p>
          </div>

          <div className="bg-loam-900 p-8 rounded-2xl text-white mt-8">
            <p className="text-xl leading-relaxed">
              Dieser Weg, den ich über 30 Jahre gegangen bin – den musst du nicht alleine gehen.
              Und du brauchst keine 30 Jahre.
            </p>
          </div>
        </div>
      </section>

      {/* My Path Summary */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Mein Weg – zusammengefasst
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 bg-sage-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">Über 30 Jahre mit Pferden</p>
                <p className="text-loam-600">
                  Mit allem, was dazugehört. Die Fehler. Die Tierarztrechnungen. Die schlaflosen
                  Nächte. Aber auch: Die Momente, in denen alles stimmt. Die Ruhe, wenn du weißt,
                  dass es deinem Pferd gut geht.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-sage-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">Ausbildung zur Reittherapeutin (Abschluss 2009)</p>
                <p className="text-loam-600">
                  16 Jahre Praxis. Über 200 Menschen begleitet – Kinder und Erwachsene mit
                  körperlichen und geistigen Behinderungen, Down-Syndrom, ADHS, psychischen
                  Störungen, Lernschwächen. Menschen, die von anderen Menschen verletzt wurden
                  und bei Pferden zum ersten Mal wieder Vertrauen fassen konnten.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-sage-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">5 Jahre hinter den Kulissen</p>
                <p className="text-loam-600">
                  Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Ich bin dankbar
                  für diese Zeit und das Lernen – und habe meinen eigenen Weg gefunden: Echte
                  Partnerschaft, bei der das Pferd wählt zu bleiben.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-sage-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">15 Jahre bei Hempura (Vertrieb, Management)</p>
                <p className="text-loam-600">
                  Tausende Gespräche mit Tierärzten, Therapeuten, Hufschmieden, Trainern.
                  Tausende Fragen von Pferdebesitzern wie dir. Jede einzelne hat mein Verständnis vertieft.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-gold-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">Mein eigenes Pferd – Ramses</p>
                <p className="text-loam-600">
                  Mein Friese, seit 20 Jahren an meiner Seite. Mein Lehrmeister, Seelengefährte,
                  und Spiegel meiner Seele. Er hat mich mehr gelehrt als alle Kurse zusammen.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-sage-200 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-medium text-loam-900 mb-1">Und dazwischen:</p>
                <p className="text-loam-600">
                  Unermüdliche Recherche. Bücher, Studien, Fachliteratur. Weil ich es wirklich
                  verstehen wollte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Das Team hinter Pferdesicht
          </h2>

          <div className="prose-pferdesicht">
            <p className="text-lg leading-relaxed mb-6">
              Hinter Pferdesicht steckt nicht nur ich – sondern auch mein Mann Stefan.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Gemeinsam haben wir in den letzten 20 Jahren mehrere erfolgreiche Projekte in
              der Pferdewelt aufgebaut – und auch einige außerhalb. Er der Stratege, ich die
              konsequente Umsetzerin.
            </p>
            <p className="text-lg leading-relaxed">
              Er sorgt dafür, dass ich mich auf das konzentrieren kann, was ich am besten kann:
              Dir das Wissen zu geben, das dein Pferd verdient.
            </p>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-16 lg:py-24">
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
              "Und für dich, wenn du dich schon auf den Weg gemacht hast und dir Unterstützung wünschst – weil es mit dem richtigen Wissen schneller geht und mit weniger Fehlern.",
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

      {/* Final Section */}
      <section className="py-16 lg:py-24 bg-sage-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-6">
            Das hier ist mein Weg. Vielleicht auch deiner.
          </h2>

          <p className="text-lg text-loam-600 leading-relaxed mb-8">
            Wenn du spürst, dass du eine andere Art von Pferdewelt willst – sanft, stark, klar,
            wahrhaftig – mit dem Wohl unserer Pferde im Mittelpunkt – dann bleib hier.
          </p>
          <p className="text-lg text-loam-600 leading-relaxed mb-4">
            Ich teile mein Wissen. Ehrlich, offen, regelmäßig.
          </p>
          <ul className="text-loam-600 space-y-1 mb-8">
            <li>Über Pferdegesundheit, die nicht kompliziert sein muss.</li>
            <li>Über Haltung, die dem Pferd dient – nicht alten Mustern.</li>
            <li>Über die Beziehung zwischen Mensch und Pferd.</li>
            <li>Über dieses tiefe Gefühl, dass Pferde so viel mehr brauchen als das, was man ihnen oft zugesteht.</li>
          </ul>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-16 lg:py-24 bg-loam-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl text-white leading-relaxed mb-6 italic">
            „Die Pferdebesitzer, die ‚zu viel' fragen, sind nicht das Problem. Sie sind die
            Lösung für eine natürliche Haltung und das Wohlergehen unserer Pferde."
          </blockquote>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-loam-700 mb-2">
            Deine Fragen und Bedenken sind nicht zu viel.
          </p>
          <p className="text-lg text-loam-700 mb-2">
            Das ist genau das, was unsere Pferde brauchen.
          </p>
          <p className="text-2xl text-loam-900 font-serif italic mt-8 mb-4">
            „Vertraue deiner Perspektive."
          </p>
          <p className="text-loam-600">— Deine Diana von Pferdesicht</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
            Bereit für den ersten Schritt?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/fruehling"
              className="tactile-button tactile-button-primary"
            >
              Zum Frühlings-Guide
            </Link>
            <Link
              href="/wissen"
              className="tactile-button tactile-button-ghost"
            >
              Zum Blog
            </Link>
            <Link
              href="/quiz"
              className="tactile-button tactile-button-gold"
            >
              Frühlings-Check starten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
