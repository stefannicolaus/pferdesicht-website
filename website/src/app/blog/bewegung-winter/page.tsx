"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Thermometer, Clock, AlertTriangle } from "lucide-react"
import { StickyLeadMagnetBanner } from "@/components/sticky-lead-magnet-banner"

export default function BewegungWinterPage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <Link
          href="/wissen"
          className="inline-flex items-center gap-2 text-sm font-sans text-sage hover:text-loam transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </Link>
      </div>

      {/* Hero Section */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Content */}
          <div>
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 bg-sage/20 rounded-full mb-6">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-sage">
                Gesundheit & Haltung
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-loam mb-6 leading-tight text-balance">
              Alle wärmen 10 Minuten auf. Im Sommer wie im Winter.
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Warum kalte Sehnen ein Risiko sind, wann gefrorener Boden gefährlich wird — und was dein Pferd im Winter wirklich braucht. Für Box und Offenstall.
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-3 text-sm font-sans text-sage mb-8">
              <span>von Diana</span>
              <span>•</span>
              <span>10 Min. Lesezeit</span>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 rounded-sm p-6 backdrop-blur-sm border border-loam/10">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-loam mb-4">
                In diesem Artikel:
              </h3>
              <ul className="space-y-2.5 text-sm font-sans text-loam/70">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Das Gefühl, das keiner ausspricht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Was in den ersten 20 Minuten wirklich passiert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Warum die Sommer-Routine im Winter nicht funktioniert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Gefrorener Boden: Wann Reitplatz und Paddock zur Stolperfalle werden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Nasses Fell, kalte Luft: Warum die Abschwitzdecke Pflicht ist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Nicht reiten ≠ nichts tun</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/thumbnail-haltung.png"
              alt="Pferd steht im winterlichen Paddock mit Reif — bereit für Bewegung"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mt-16 space-y-8">
          {/* Opening Paragraph */}
          <div className="prose prose-lg">
            <p className="text-lg font-serif text-loam/80 leading-relaxed">
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">D</span>as muss über 20 Jahre her sein. Ich war noch jung, und relativ frisch im Reitstall — und es war nicht so, dass jemand etwas Falsches gesagt hätte. Es war dieses Gefühl beim Zuschauen: Wie die Pferde in den ersten Trabminuten noch steif liefen. Wie manche sich beim Angaloppieren verspannten. Ich dachte mir: Das kann doch nicht richtig sein. Aber ich sagte nichts — wer bin ich schon, das zu kritisieren?
            </p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Zehn Minuten Schritt, dann antraben. Im Juli wie im Januar. Das war die Routine. Alle machten es so.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Aber je länger ich beobachtete, desto mehr Fragen hatte ich. Warum laufen manche Pferde in den ersten Minuten so stockig? Warum verspannen sie sich beim ersten Galopp? Und warum redet niemand darüber?
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Vielleicht kennst du dieses Gefühl: Wie wenn dein Bauch dir sagt <em>Da stimmt was nicht</em> — aber alle um dich herum sagen: <em>Stell dich nicht so an.</em> Oder noch schlimmer: <em>„Du denkst zu viel."</em>
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Heute weiß ich: Mein Gefühl hatte recht. Nicht mein Denken war falsch — das Umfeld war einfach nicht bereit für meine Fragen.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Und vielleicht geht es dir genauso. Du stehst im Stall, beobachtest, wie die anderen nach ein paar Schrittrunden losreiten, und irgendetwas in dir sagt: Das kann nicht reichen. Nicht bei diesen Temperaturen.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed italic">
            Nur weil es alle so machen, heißt das nicht, dass es richtig ist.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Lass uns gemeinsam anschauen, was in den ersten Minuten wirklich passiert — damit du beim nächsten Mal ein paar gute Argumente mehr hast. Für dich. Und für dein Pferd.
          </p>

          {/* Key Takeaway #1 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #1</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Dein Gefühl trügt dich nicht.</strong> Wenn dir die Aufwärmphase im Winter zu kurz vorkommt, hast du wahrscheinlich recht. Was im Sommer funktioniert, reicht bei Kälte oft nicht aus. Dass du genauer hinschaust als andere, macht dich nicht übervorsichtig — es macht dich aufmerksam.
            </p>
          </aside>

          {/* Section 1: Aufwärmen */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Aufwärmen beim Pferd: Was in den ersten 20 Minuten passiert
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Stell dir vor, du stehst morgens auf, es ist kalt, und jemand sagt: „Jetzt sofort einen Sprint!" Dein Körper würde protestieren. Deine Muskeln sind steif, deine Gelenke fühlen sich an wie eingerostet.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Deinem Pferd geht es nicht anders.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              In den ersten Minuten der Bewegung passiert eine ganze Menge im Körper — und vieles davon braucht Zeit:
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Die Gelenkflüssigkeit</strong> muss sich verteilen. Sie ist das „Schmiermittel" in den Gelenken und sorgt dafür, dass Bewegungen geschmeidig ablaufen. In der Sportphysiologie spricht man davon, dass dieser Prozess etwa 20 Minuten dauert, bis er vollständig abgeschlossen ist. Vorher arbeiten die Gelenke sozusagen „trocken".
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Die Sehnen</strong> müssen auf Temperatur kommen. Anders als Muskeln, die sich stark dehnen können, sind Sehnen nur minimal elastisch — in der Fachliteratur ist von etwa drei bis fünf Prozent die Rede. Bei Kälte sind sie noch steifer.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Und hier kommt der entscheidende Punkt:
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Kalte Sehnen sind wie kalte Gummibänder — sie reißen leichter, als sie sich dehnen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Tierärzte und Physiotherapeuten weisen immer wieder darauf hin: Ein Kaltstart — also intensive Belastung ohne ausreichende Aufwärmphase — kann zu Muskelfaser- oder Sehnenrissen führen. Auch Knorpelschäden sind möglich, weil die Gelenke noch nicht ausreichend „geschmiert" sind.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Was in Sekunden passiert, braucht Monate zur Heilung — wenn es überhaupt vollständig heilt.
            </p>
          </section>

          {/* Scientific Fact Box */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was die Fachpresse dazu sagt:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  In einem Artikel der Zeitschrift <em>Cavallo</em> wird erklärt, dass gerade in der kalten Jahreszeit die Aufwärmphase verlängert werden sollte — auf mindestens 15, besser 20 Minuten im Schritt. Denn auch Pferde bewegen sich bei Kälte weniger, und die Durchblutung der Gliedmaßen ist reduziert.
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Das bedeutet nicht, dass du jetzt 45 Minuten Schritt reiten musst. Aber es bedeutet: Die zehn Minuten, die im Sommer vielleicht ausreichen, sind im Winter zu wenig.
          </p>

          {/* Key Takeaway #2 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #2</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Dein Pferd braucht Zeit zum Warmwerden — von innen.</strong> Die Gelenkflüssigkeit verteilt sich erst nach etwa 20 Minuten vollständig. Sehnen sind bei Kälte steifer und weniger elastisch. Was im Sommer reicht, ist im Winter oft zu kurz.
            </p>
          </aside>

          {/* Section 2: Sommer vs Winter */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Sommer-Routine im Winter? Das ist wie Sommerreifen auf Eis.
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Im <Link href="/blog/pferd-eindecken-winter" className="text-gold hover:underline">Beitrag über das Eindecken</Link> haben wir gesehen, dass Pferde evolutionär hervorragend an Kälte angepasst sind. Das stimmt — für die Thermoregulation.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber es bedeutet nicht, dass ihre Sehnen und Gelenke ohne Aufwärmen belastbar sind.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              Der Unterschied zwischen Sommer und Winter liegt nicht nur in der Temperatur. Er liegt auch darin, wie viel sich dein Pferd bewegt, bevor du es holst.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">📦 Pferde aus der Box</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Ein Pferd, das seit Stunden in der Box steht, ist nicht nur „kalt" — es ist steif. Die Durchblutung in den Beinen ist reduziert, die Gelenke sind ungeschmiert, die Sehnen unelastisch.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was das bedeutet:</strong> Pferde aus der Box brauchen im Winter eine längere Aufwärmphase. Rechne mit 20 bis 30 Minuten Schritt, bevor du an Trab oder gar Galopp denkst. Ja, das klingt nach viel. Aber es ist die Zeit, die der Körper braucht, um sicher zu gehen, dass sich dein Pferd nicht unnötig verletzt.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du tun könntest:</strong>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Vor dem Aufsitzen führen:</strong> 10 Minuten an der Hand gehen — das Pferd kann sich ohne Reitergewicht lockern
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Handarbeit einbauen:</strong> Seitengänge im Schritt, Übertreten, Volten — das aktiviert ohne zu belasten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Nicht langweilen:</strong> Schritt muss nicht öde sein. Bahnfiguren, Pylonen, Stangen im Schritt — das geht auch beim Aufwärmen
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">🌳 Pferde im Offenstall</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Ein Pferd aus dem Offenstall hat einen Vorteil: Es bewegt sich den ganzen Tag. Es ist nicht so steif wie ein Boxenpferd.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Aber „vorgewärmt" bedeutet nicht „belastungsbereit". Auch ein Offenstallpferd schlendert bei Kälte eher, als dass es trabt. Die Gelenke sind besser durchblutet als bei einem Boxenpferd — aber die Sehnen brauchen trotzdem ihre Aufwärmzeit.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was das bedeutet:</strong> 15 bis 20 Minuten Schritt sind auch für Offenstallpferde sinnvoll. Weniger als bei Boxenpferden, aber mehr als im Sommer.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du tun könntest:</strong>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Die Schrittphase nutzen:</strong> Dein Pferd ist mental wacher als ein Boxenpferd — nutze das für Konzentrations- und Gehorsamkeitsübungen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Nicht überschätzen:</strong> „Der steht ja draußen" ist kein Freifahrtschein für kurzes Aufwärmen
                </span>
              </li>
            </ul>
          </section>

          {/* Key Takeaway #3 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #3</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Im Winter braucht dein Pferd länger zum Aufwärmen als im Sommer.</strong> Pferde aus der Box, die seit Stunden stehen, brauchen 20-30 Minuten. Pferde im Offenstall sind vorgewärmt, aber nicht belastbar — rechne mit 15-20 Minuten. Beide brauchen mehr Zeit als im Sommer.
            </p>
          </aside>

          {/* Section 3: Gefrorener Boden */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Gefrorener Boden: Wann Reitplatz und Paddock zur Stolperfalle werden
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Es war einer dieser Dezembermorgen, an denen der Boden aussah wie eine Mondlandschaft aus Eis. Die Hufabdrücke vom Vortag — steinhart gefroren. Ich stand am Reitplatz und fragte mich: Reiten? Longieren? Oder lieber gar nicht?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die gute Nachricht: Harter Boden an sich ist nicht das Problem. In der Fachpresse wird sogar beschrieben, dass das Reiten auf ebenen, harten Böden — wie asphaltierten Wegen — Sehnen und Bänder stärken kann. Dieser Effekt wird sogar bei Rehapferden genutzt.
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Das Problem ist nicht die Härte. Das Problem ist die Unebenheit.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">Auf dem Reitplatz: Training bei Frost</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Gefrorene Hufabdrücke werden zu Stolperfallen. Matsch, der gestern noch nachgab, ist heute eine Buckelpiste aus Beton. Und wenn dein Pferd auf dieser Buckelpiste umknickt oder sich vertritt, sind Sehnen, Bänder und Gelenke in Gefahr.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Eine Sehnenverletzung bedeutet nicht nur Schmerzen für dein Pferd — sondern oft Monate Boxenruhe, Reha und die bange Frage: Wird alles wieder wie vorher?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Deine Entscheidungshilfe für den Reitplatz:</strong>
            </p>

            {/* Decision Table */}
            <div className="bg-white/50 rounded-sm p-6 mb-8 border border-loam/10">
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-loam/10">
                  <span className="text-sage font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-loam">Eben + gefroren</p>
                    <p className="text-sm text-loam/70">Vorsichtig möglich. Schritt, evtl. leichter Trab. Keine engen Wendungen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-loam/10">
                  <span className="text-red-500 font-bold">✗</span>
                  <div>
                    <p className="font-semibold text-loam">Uneben + gefroren</p>
                    <p className="text-sm text-loam/70">Nicht reiten, nicht longieren.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-500 font-bold">⚠</span>
                  <div>
                    <p className="font-semibold text-loam">Tauwetter auf gefrorenem Untergrund</p>
                    <p className="text-sm text-loam/70">Besonders gefährlich! Die obere Schicht taut, darunter ist es spiegelglatt.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Bevor der Frost kommt — Reitplatz vorbereiten:</strong> Wenn Minusgrade angekündigt sind, lohnt es sich, den Reitplatz vorher glattzuziehen — mit Schlepper, Bagger oder notfalls von Hand die größten Löcher einebnen. Was heute noch weicher Matsch ist, wird morgen eine Buckelpiste aus Beton. Einmal gefroren, lässt sich nichts mehr korrigieren.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">Auf dem Paddock: Auch ohne Training ein Risiko</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du reitest nicht auf dem Paddock — aber dein Pferd lebt dort. Und Pferde bewegen sich auch ohne dich: Sie spielen, rennen, erschrecken sich, tragen Konflikte in der Herde aus. Alles Situationen, in denen sie schnell reagieren müssen — und in denen gefrorene Unebenheiten genauso gefährlich sind wie auf dem Reitplatz.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Das Risiko ist dasselbe:</strong> Gefrorene Hufabdrücke werden zu Stolperfallen. Ein Pferd, das im Spiel plötzlich wendet oder vor etwas erschrickt, kann auf einer Buckelpiste genauso umknicken wie unter dem Reiter.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              <strong className="text-loam">Bevor der Frost kommt — Paddock vorbereiten:</strong> Auch den Paddock vor dem ersten Frost glattziehen. Besonders die Stellen, an denen die Pferde viel laufen: am Tor, an der Tränke, an den Futterstellen. Zehn Minuten mit der Schaufel heute können dir später viel Sorge ersparen.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">Glatter Boden: Das unterschätzte Risiko</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Und noch etwas, das oft vergessen wird: Gefrorener Boden kann auch GLATT sein — besonders bei Tauwetter oder wenn eine dünne Eisschicht auf der Oberfläche liegt. Dann rutschen die Hufe weg, bevor dein Pferd überhaupt stolpern kann.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              <strong className="text-loam">Der Selbst-Test:</strong> Bevor du dein Pferd auf den Paddock lässt oder den Reitplatz betrittst — kurz selbst drauftreten. Wenn du rutschst, rutscht dein Pferd auch.
            </p>
          </section>

          {/* Key Takeaway #4 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #4</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Nicht die Kälte ist das Problem — sondern der Boden.</strong> Gefrorene Hufabdrücke werden zu Stolperfallen — auf dem Reitplatz UND auf dem Paddock. Wenn Frost kommt: vorher glattziehen. Wenn es aussieht wie eine Mondlandschaft: Heute kein Training. Und auch auf dem Paddock aufpassen — dein Pferd bewegt sich dort auch ohne dich.
            </p>
          </aside>

          {/* Section 4: Reithalle */}
          <section>
            <h3 className="text-xl font-serif text-loam mb-4">Und in der Reithalle?</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Wenn du eine Reithalle zur Verfügung hast, hast du das Problem mit Regen und Matsch nicht. Aber auch Hallenböden können gefrieren — besonders bei schlecht isolierten Hallen oder wenn die Tore lange offen stehen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du tun könntest:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Boden regelmäßig abziehen:</strong> Auch in der Halle entstehen Unebenheiten durch die tägliche Nutzung
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Magnesiumchlorid im Boden:</strong> Hält den Boden bis -10°C frostfrei und verbessert die Trittsicherheit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Tore geschlossen halten:</strong> Reduziert das Einfrieren, besonders über Nacht
                </span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die Halle ist ein Privileg im Winter — aber kein Freifahrtschein, den Boden zu ignorieren.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed italic">
              Und wenn jemand sagt: „Ach, in der Halle ist das doch egal" — dann hast du jetzt ein paar gute Argumente an der Hand, warum es eben nicht egal ist.
            </p>
          </section>

          {/* Section 5: Abschwitzdecke */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Nasses Fell, kalte Luft: Warum die Abschwitzdecke Pflicht ist
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Im <Link href="/blog/fuetterung-winter" className="text-gold hover:underline">Beitrag über die Fütterung</Link> haben wir gesehen, dass die „Heizung" deines Pferdes mit Heu läuft. Aber Bewegung erzeugt auch Wärme — und im Winter kann das zum Problem werden.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das dicke Winterfell ist fantastisch für die Isolation. Aber es hat einen Nachteil: Dein Pferd kommt schneller ins Schwitzen als im Sommer. Und nasses Fell isoliert nicht mehr.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Das Risiko:</strong> Ein nassgeschwitztes Pferd, das in die Kälte kommt, kühlt aus. Die Folgen können Verspannungen, Muskelprobleme oder sogar Erkältungen sein.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Und das gilt für <strong>beide Haltungsformen</strong>:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Box:</strong> Die meisten Boxen sind nicht beheizt. Ein nasses Pferd kühlt auch dort aus.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Offenstall:</strong> Zurück in die Kälte — noch kritischer, wenn Wind dazukommt.</span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">Der Hand-Check: So weißt du, wann die Decke runter kann</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Nach dem Training im Winter ist die Abschwitzdecke Pflicht — egal ob Box oder Offenstall.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              So prüfst du, ob die Decke runter kann:
            </p>

            <div className="bg-sage/10 rounded-sm p-6 mb-8 border border-sage/20">
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">1</span>
                  <span className="font-sans text-loam/70">Hand unter die Decke schieben, ans Fell fassen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">2</span>
                  <span className="font-sans text-loam/70"><strong className="text-loam">Fell trocken?</strong> → Decke kann runter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">3</span>
                  <span className="font-sans text-loam/70"><strong className="text-loam">Fell noch klamm?</strong> → Decke bleibt drauf</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">4</span>
                  <span className="font-sans text-loam/70"><strong className="text-loam">Decke selbst durchnässt?</strong> → Wechseln oder abnehmen — eine nasse Decke isoliert nicht mehr</span>
                </li>
              </ol>
            </div>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Zeitrahmen:</strong> Rechne mit 15 bis 30 Minuten, je nach Schweißmenge und Außentemperatur. Bei sehr nassgeschwitzten Pferden kann es länger dauern.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              <strong className="text-loam">Nach dem Abnehmen:</strong> Den getrockneten Schweiß ausbürsten. Sonst verklebt das Fell und die Isolationsfunktion ist eingeschränkt.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">Training anpassen statt hinterher reparieren</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Die beste Lösung ist natürlich, es gar nicht erst so weit kommen zu lassen:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Schrittpausen einbauen:</strong> Nicht durchgängig in höheren Gangarten arbeiten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Intensität dosieren:</strong> Lieber kürzer und weniger schweißtreibend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Trockenreiten einplanen:</strong> Mindestens 10-15 Minuten Schritt am Ende</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Wer sein Pferd schert, muss sowieso eindecken — das haben wir beim <Link href="/blog/pferd-eindecken-winter" className="text-gold hover:underline">Thema Thermoregulation</Link> besprochen. Aber auch ungeschorene Pferde brauchen nach dem Training Unterstützung beim Trocknen.
            </p>
          </section>

          {/* Key Takeaway #5 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #5</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Nasses Fell im Winter ist ein Problem — egal ob Box oder Offenstall.</strong> Die Abschwitzdecke ist Pflicht nach dem Training. Der Check: Hand unters Fell. Trocken? Fertig. Klamm? Drauf lassen. Decke durchnässt? Wechseln.
            </p>
          </aside>

          {/* Section 6: Nicht reiten */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Nicht reiten ≠ nichts tun. Warum Spazierengehen Training ist.
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Manchmal ist die klügste Entscheidung im Winter: heute kein Training auf dem Reitplatz.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das bedeutet nicht, dass dein Pferd sich nicht bewegen darf. Es bedeutet nur, dass du eine andere Form wählst — eine, die weniger Risiko birgt.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              <strong className="text-loam">Spazierengehen</strong> ist die unterschätzte Alternative. Eine Stunde gemeinsam durch den Wald, auf ebenen Wegen, im Schritt. Das ist Bewegung. Das ist Beziehungsarbeit. Und für Pferde aus der Box oft mehr, als sie sonst an einem Wintertag bekommen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Mit kleinen Übungen zwischendurch — Anhalten, Rückwärtsrichten, seitliches Übertreten — wird der Spaziergang zum echten Training. Dein Pferd muss aufmerksam sein, auf dich achten, mitdenken. Das ist oft anspruchsvoller als eine halbe Stunde in der Bahn.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              <strong className="text-loam">Bodenarbeit</strong> ist eine weitere Option, falls du Zugang zu einer Halle hast. Seitengänge an der Hand, Stangenarbeit im Schritt, Konzentrations- und Gehorsamkeitsübungen — all das geht ohne Reitergewicht und ohne Risiko durch schwierige Bodenverhältnisse.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">📦 Pferde aus der Box</h3>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-2"><strong className="text-loam">Was du tun könntest:</strong></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Spazierengehen auf befestigten Wegen (mit kleinen Übungen)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Bodenarbeit in der Halle (falls vorhanden)</span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">🌳 Pferde im Offenstall</h3>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-2"><strong className="text-loam">Was du tun könntest:</strong></p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Die Paddock-Bewegung „reicht" an manchen Tagen — wenn der Boden es zulässt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Ergänzend: Spaziergang außerhalb des Paddocks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Bei kritischen Bodenverhältnissen: Bewegung auf befestigten Flächen</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Am Anfang fühlte ich mich schlecht, wenn ich sagte: „Heute reiten wir nicht." Als würde ich etwas verpassen. Als wäre ich faul.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Heute weiß ich: Auch Spazierengehen und Bodenarbeit sind Training — nicht nur Reiten. Und manchmal die klügere Wahl. Die klügste Entscheidung kostet manchmal nichts — außer etwas Geduld.
            </p>
          </section>

          {/* Quiz CTA Box */}
          <aside className="bg-sage rounded-sm py-12 px-8 my-16 shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                DEIN PERSÖNLICHER FRÜHJAHRS-FAHRPLAN
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                Wie fit ist dein Pferd für den Frühling?
              </h3>
              <p className="text-white/90 font-sans text-base mb-6">
                8 Fragen zu deinem Pferd. Dein persönlicher Report – abgestimmt auf eure Situation.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wider uppercase rounded-sm transition-colors"
              >
                Quiz starten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-white/60 text-xs font-sans mt-4">
                ✓ Kostenlos · ✓ Persönlich · ✓ Kein Spam
              </p>
            </div>
          </aside>

          {/* Final Section */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Was wirklich zählt
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du bist vermutlich hier gelandet, weil du nicht einfach machst, was alle machen — sondern verstehen willst, warum.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das Gefühl, das du hattest, als du die anderen beim Aufwärmen beobachtet hast — es war richtig. Dein Pferd braucht im Winter mehr Zeit. Mehr Vorsicht. Mehr Aufmerksamkeit für den Boden unter seinen Hufen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du musst nicht perfekt sein. Du kannst nicht jedes Risiko ausschließen. Aber du kannst hinschauen. Du kannst Fragen stellen. Du kannst sagen: „Heute nicht" — und dich gut dabei fühlen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Und wenn du dadurch auch nur ein einziges Mal verhinderst, dass sich dein Pferd verletzt — dann hat sich das Hinschauen mehr als gelohnt.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Jetzt hast du ein paar gute Argumente mehr, um deine Haltung zu begründen. Stück für Stück erweiterst du deinen Horizont, verstehst mehr Zusammenhänge. Das ist ein Prozess — und du bist mittendrin.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Du schaust hin. Und genau das macht den Unterschied.
            </p>
          </section>

          {/* Final Summary Box */}
          <aside className="bg-white border-2 border-gold/30 rounded-sm p-8 my-16 shadow-lg">
            <h3 className="text-2xl font-serif text-loam text-center mb-8">Zusammenfassung: Die 5 Key Takeaways</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #1
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Dein Gefühl</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Wenn dir die Aufwärmphase zu kurz vorkommt, hast du wahrscheinlich recht.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #2
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Aufwärmen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Gelenkflüssigkeit braucht ~20 Min. Kalte Sehnen sind wie kalte Gummibänder.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #3
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Box vs. Offenstall</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Pferde aus der Box: 20-30 Min. Pferde im Offenstall: 15-20 Min. Beide mehr als im Sommer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #4
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Gefrorener Boden</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Nicht die Kälte ist gefährlich, sondern unebener gefrorener Boden — auf Reitplatz UND Paddock.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #5
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Schwitzen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Abschwitzdecke ist Pflicht. Hand-Check: Trocken? Fertig. Klamm? Drauf lassen.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Signatur */}
          <div className="text-center my-12">
            <p className="text-lg font-serif italic text-loam mb-2">Vertraue deiner Perspektive.</p>
            <p className="text-sm font-sans text-sage">— Diana, Pferdesicht</p>
          </div>

          {/* Contact & Related */}
          <div className="text-center text-sm font-sans text-loam/60 leading-relaxed space-y-2 mb-8">
            <p>
              Du bist unsicher, wie du dein Pferd im Winter sicher bewegen kannst?{" "}
              <Link href="/kontakt" className="text-gold hover:underline">
                Schreib mir →
              </Link>
            </p>
          </div>

          {/* Related Posts */}
          <section className="mt-12 mb-8">
            <h3 className="text-xl font-serif text-loam mb-6">Mehr zum Thema:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/pferd-eindecken-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam text-sm">Eindecken im Winter: Wann eine Decke wirklich Sinn macht →</span>
              </Link>
              <Link href="/blog/fuetterung-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam text-sm">Fütterung im Winter: Warum Heu die beste Heizung ist →</span>
              </Link>
            </div>
          </section>

          {/* Quellenangaben */}
          <div className="text-xs font-sans text-loam/50 leading-relaxed border-t border-loam/10 pt-6 mt-8">
            <p className="font-semibold text-loam/70 mb-2">Quellen</p>
            <ul className="space-y-1">
              <li>• Cavallo.de: Pferd aufwärmen — darauf sollten Reiter im Winter achten</li>
              <li>• Mein Pferd: Richtig aufwärmen im Winter / Winterböden und Reiten</li>
              <li>• Tierwelt.ch: Pferde schonend aufwärmen</li>
              <li>• Diverse veterinärmedizinische Ratgeber zu Sehnengesundheit und Gelenkflüssigkeit</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="text-xs font-sans text-loam/50 leading-relaxed italic border-t border-loam/10 pt-6 mt-8">
            Hinweis: Dieser Beitrag ersetzt keine tierärztliche Beratung.
          </div>
        </div>
      </article>

      {/* Sticky Lead Magnet Banner */}
      <StickyLeadMagnetBanner />
    </main>
  )
}
