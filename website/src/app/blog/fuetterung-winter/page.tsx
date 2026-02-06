"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Droplets, Flame, Beaker, CheckCircle2 } from "lucide-react"
import { StickyLeadMagnetBanner } from "@/components/sticky-lead-magnet-banner"

export default function FuetterungWinterPage() {
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
              Dein Pferd produziert 24/7 Magensäure. Und du fütterst 3x am Tag.
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Warum Fresspausen gefährlicher sind als du denkst – und was du dagegen tun kannst. Für Box und Offenstall.
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-3 text-sm font-sans text-sage mb-8">
              <span>von Diana</span>
              <span>•</span>
              <span>9 Min. Lesezeit</span>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 rounded-sm p-6 backdrop-blur-sm border border-loam/10">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-loam mb-4">
                In diesem Artikel:
              </h3>
              <ul className="space-y-2.5 text-sm font-sans text-loam/70">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der Moment, in dem mir die Rechnung nicht mehr aufging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Warum dein Pferd eine eingebaute Heizung hat (und wie du sie fütterst)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Das unsichtbare Problem: Was passiert, wenn der Magen leer ist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Wie viel Heu ist eigentlich genug?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Die unterschätzte Gefahr: Wassermangel im Winter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Kraftfutter: Wann es wirklich Sinn macht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der praktische Winter-Fütterungscheck</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/thumbnail-fuetterung.png"
              alt="Pferd frisst entspannt aus Heunetz im Winter"
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
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">„</span>Also bei uns gibt's morgens, mittags und abends Heu, das hat immer gereicht."
            </p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Ich nicke höflich, während in meinem Kopf die Rechnung rattert: Abends 18 Uhr, morgens 7 Uhr. Das sind 13 Stunden. Und dann frage ich mich, ob ich die Einzige bin, der das zu lang vorkommt.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Wahrscheinlich kennst du dieses Gefühl. Du stehst am Stall, hörst, wie andere von ihrer Fütterung erzählen – und irgendetwas in dir sagt: <em>Das kann doch nicht richtig sein.</em> Aber alle anderen machen es so. Seit Jahren. Und ihren Pferden geht es doch gut.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Oder?
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Lass uns heute gemeinsam rechnen. Nicht um jemanden zu verurteilen – sondern damit du verstehst, was in diesen 13 Stunden passiert. Und was du tun kannst, auch wenn du nicht jeden Tag um 23 Uhr noch Heu stopfen willst.
          </p>

          {/* Key Takeaway #1 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #1</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Dein Bauchgefühl trügt dich nicht.</strong> Wenn dir Fütterungspausen zu lang vorkommen, hast du wahrscheinlich recht. Pferde sind Dauerfresser – ihr Verdauungssystem ist auf kontinuierliche Nahrungsaufnahme ausgelegt, nicht auf drei Mahlzeiten am Tag. Dass du genauer hinschaust als andere, macht dich nicht kompliziert – es macht dich aufmerksam.
            </p>
          </aside>

          {/* Section 1: Die eingebaute Heizung */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Die eingebaute Heizung – und wie du sie am Laufen hältst
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Im letzten Beitrag über das <Link href="/blog/pferd-eindecken-winter" className="text-gold hover:underline">Eindecken</Link> habe ich es schon angesprochen: Dein Pferd hat eine eingebaute Heizung. Und die läuft mit Heu, nicht mit Fleece.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber <em>wie</em> funktioniert diese Heizung eigentlich?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Der Schlüssel liegt im Dickdarm – einem beeindruckenden Organ mit etwa 130 Litern Fassungsvermögen. Hier findet die sogenannte mikrobielle Fermentation statt: Milliarden von Bakterien zersetzen die Rohfaser aus dem Heu. Und bei diesem Prozess entsteht nicht nur Energie – sondern auch Wärme.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Stell dir den Dickdarm wie einen Holzofen vor. Solange du regelmäßig Holz nachlegst, bleibt es warm. Aber wenn du einmal am Tag eine riesige Ladung reinwirfst und dann 12 Stunden wartest? Dann wird es zwischendurch kalt. Und der Ofen arbeitet nicht mehr effizient.
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
              <Flame className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Das sagt die Wissenschaft dazu:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Die Fermentation von Raufutter im Dickdarm erzeugt erhebliche Mengen an Wärmeenergie. Bei Kälte steigt der Energiebedarf eines Pferdes um <strong>10 bis 25 Prozent</strong> – dieser Mehrbedarf wird optimal durch zusätzliches Raufutter gedeckt. <em>(Quellen: Hoeveler, GfE-Empfehlungen)</em>
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Das bedeutet: Wenn du willst, dass dein Pferd im Winter warm bleibt, brauchst du im Normalfall keine dickere Decke. Du brauchst einen gleichmäßig gefüllten „Ofen". (Wann Eindecken doch Sinn macht? Die Ausnahmen habe ich dir in meinem <Link href="/blog/pferd-eindecken-winter" className="text-gold hover:underline">Beitrag zum Eindecken →</Link> erklärt.)
          </p>

          {/* Key Takeaway #2 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #2</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Der Dickdarm deines Pferdes arbeitet wie ein Holzofen.</strong> Regelmäßiger Nachschub hält ihn effizient am Laufen. Große Portionen mit langen Pausen dazwischen? Das ist wie einmal am Tag eine riesige Ladung Holz reinwerfen – ineffizient und mit Leerlaufphasen.
            </p>
          </aside>

          {/* Section 2: Das unsichtbare Problem */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Das unsichtbare Problem: Was passiert, wenn der Magen leer ist
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Der Magen deines Pferdes hat ein Problem, von dem die wenigsten wissen:
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Er produziert 24 Stunden am Tag Magensäure. Ununterbrochen. Auch nachts. Auch wenn er leer ist.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Bei uns Menschen ist das anders. Wir produzieren Magensäure vor allem dann, wenn wir essen. Pferde nicht. Ihr Magen ist darauf ausgelegt, ständig etwas zu tun zu haben – weil Wildpferde bis zu 16 Stunden am Tag mit Fressen beschäftigt sind.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Stell dir einen Pool vor, in den ständig Chlor fließt. Solange Wasser drin ist, verteilt sich das Chlor und ist kein Problem. Aber wenn der Pool leer läuft und das Chlor weiter fließt? Dann greift es die Wände an.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Genau das passiert im Pferdemagen. Ohne Nahrung, die die Säure bindet und neutralisiert, greift sie die Magenschleimhaut an. Erst die obere, drüsenlose Schicht – die ist besonders empfindlich. Dann, wenn es länger so geht, auch tiefere Bereiche.
            </p>
          </section>

          {/* Scientific Fact Box - Magengeschwüre */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Beaker className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was ich recherchiert habe (und es beunruhigt):
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Studien zeigen, dass etwa <strong>40 bis 50 Prozent aller Freizeitpferde</strong> Magenprobleme hat – bei Sportpferden sind es rund 60 Prozent, bei Rennpferden sogar bis zu 90 Prozent. Die meisten Fälle bleiben unerkannt, weil die Symptome subtil sind: leichtes Mäkeln beim Fressen, gelegentliches Flehmen, Unruhe beim Satteln. <em>(Quellen: Tierspital Zürich, Pavo, Masterhorse, Kristallkraft)</em>
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
            Die Faustregel, die sich aus der Forschung ergibt: <strong>Fresspausen von mehr als vier Stunden sollten vermieden werden.</strong> Manche Experten sagen sogar: maximal drei Stunden.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Und jetzt rechne nochmal: 18 Uhr bis 7 Uhr. Das sind 13 Stunden.
          </p>

          {/* Key Takeaway #3 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #3</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Dein Pferd produziert rund um die Uhr Magensäure – auch bei leerem Magen.</strong> Ohne Nahrung, die die Säure bindet, greift sie die Magenschleimhaut an. Die 4-Stunden-Regel ist kein übertriebener Perfektionismus, sondern Physiologie.
            </p>
          </aside>

          {/* Section 3: Praktische Lösungen */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              „Ich weiß, das ist im normalen Pensionsstall schwierig..."
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Ja, ist es. Ich kenne die Realität. Die Fütterungszeiten sind vorgegeben. Der Stallbetreiber hat einen Zeitplan. Und du kannst nicht jeden Abend um 23 Uhr noch Heu bringen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              Aber selbst in dieser Situation gibt es Lösungen. Nicht perfekte – aber bessere.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">In der Box</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Das Problem:</strong> Oft 8-10 Stunden Nachtpause. Das Pferd frisst sein Heu in 2-3 Stunden und steht dann mit leerem Magen.
            </p>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du tun könntest:</strong>
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Engmaschige Heunetze (3-5 cm Maschenweite):</strong> Eine Studie der TU München hat gezeigt, dass Heunetze die Fressdauer von 40 auf 86 Minuten pro Kilogramm verlängern – mehr als das Doppelte. Das Pferd ist länger beschäftigt und die Fresspause verkürzt sich automatisch.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Späte Abendfütterung:</strong> Wenn möglich, das letzte Heu so spät wie möglich geben. Jede Stunde, die du nach hinten schiebst, ist eine Stunde weniger Leerlauf.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Gespräch mit dem Stallbetreiber:</strong> Viele sind offener, als man denkt – besonders wenn du erklärst, warum es dir wichtig ist. Vielleicht lässt sich eine Spätrunde organisieren, oder du darfst selbst nochmal vorbeikommen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Stroh als Ergänzung:</strong> Gutes, qualitativ hochwertiges Stroh kann die Fresszeit verlängern. Aber Achtung: Stroh sollte maximal ein Drittel der Gesamtration ausmachen. Zu viel Stroh – besonders bei wenig Bewegung – kann zu Verstopfungskoliken führen. <em>(Quelle: Cavallo.de, Dr. Kathrin Irgang)</em>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Eingeweichte Heucobs:</strong> Eine Handvoll eingeweichte Heucobs am späten Abend gibt zusätzliche Beschäftigung und Flüssigkeit.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Mehrere kleine Heunetze statt eines großen:</strong> Das zwingt das Pferd, zwischen den Stationen zu wechseln, und verlängert die Gesamtfresszeit.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">Im Offenstall</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Das Problem:</strong> Heu wird für die ganze Gruppe bereitgestellt. Manche Pferde fressen zu viel, andere kommen kaum ran. Und nachts kontrolliert niemand, ob noch was da ist.
            </p>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du tun könntest:</strong>
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Zeitgesteuerte Heuraufen:</strong> Falls im Stall vorhanden – die beste Lösung. Sie öffnen automatisch in regelmäßigen Abständen und verhindern sowohl zu lange Pausen als auch Überfütterung.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Mehrere Heustationen:</strong> Rangniedere Pferde trauen sich oft nicht an die Hauptraufe, wenn der Chef dort steht. Mehrere Stationen geben ihnen eine Chance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Heunetze mit unterschiedlichen Maschengrößen:</strong> Engere Maschen für die, die zu schnell fressen; weitere für ältere Pferde oder schlechte Fresser.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Fressstände:</strong> Ermöglichen individuelle Fütterung auch in der Gruppe.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Abstimmung mit Miteinstellern:</strong> Das Thema betrifft alle. Vielleicht lässt sich gemeinsam eine Lösung finden – eine zusätzliche Heuration am späten Abend, ein Rotationssystem, wer wann nachfüllt.
                </span>
              </li>
            </ul>
          </section>

          {/* Key Takeaway #4 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #4</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Perfekte Fütterung ist in den meisten Ställen nicht möglich – aber bessere schon.</strong> Heunetze können die Fressdauer verdoppeln. Ein Gespräch mit dem Stallbetreiber kann Türen öffnen. Und manchmal reicht es, eine Stunde später zu füttern, um aus 13 Stunden Pause 12 zu machen.
            </p>
          </aside>

          {/* Section 4: Wie viel Heu */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Wie viel Heu ist eigentlich genug?
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die Faustregel ist simpel:
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Mindestens 1,5 kg Heu pro 100 kg Körpergewicht pro Tag.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Bei einem 600-kg-Pferd sind das mindestens 9 kg Heu täglich. Im Winter, bei Kälte und ohne Weidegang, eher 10-12 kg.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber Vorsicht: Diese Menge muss über den Tag verteilt sein – nicht in zwei großen Portionen morgens und abends.
            </p>
          </section>

          {/* Rechenbeispiel Box */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <h3 className="text-base font-mono font-bold text-loam mb-4 uppercase tracking-wide">
              Rechenbeispiel:
            </h3>
            <ul className="space-y-2 text-sm font-sans text-loam/70">
              <li>• Pferd: 600 kg Warmblut</li>
              <li>• Heubedarf Winter: ~10 kg/Tag</li>
              <li>• Bei 2 Fütterungen: 5 kg morgens, 5 kg abends</li>
              <li>• Fresszeit bei loser Fütterung: ca. 3-4 Stunden pro Portion</li>
              <li>• Ergebnis: 6-8 Stunden Fressen, 16-18 Stunden Pause</li>
            </ul>
            <p className="text-sm font-sans text-loam/70 mt-4 pt-4 border-t border-loam/10">
              <strong>Mit Heunetzen (Maschenweite 4 cm):</strong><br />
              • Fresszeit: ca. 6-8 Stunden pro Portion<br />
              • Ergebnis: Deutlich kürzere Pausen
            </p>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
            Und was ist mit übergewichtigen Pferden? Hier wird es schwierig. Die Versuchung ist groß, einfach weniger Heu zu geben. Aber: Weniger Heu bedeutet längere Fresspausen bedeutet mehr Magenprobleme.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Die bessere Lösung: Spätes, rohfaserreiches Heu (weniger Zucker, mehr Struktur), engmaschige Heunetze (verlängert die Fresszeit bei gleicher Menge), und – wenn nötig – Bewegung. Aber das ist ein Thema für einen eigenen Beitrag.
          </p>

          {/* Section 5: Wassermangel */}
          <section className="mt-12">
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Die unterschätzte Gefahr: Wassermangel im Winter
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Jetzt kommt etwas, das viele unterschätzen: Wasser.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Im Sommer, wenn dein Pferd auf der Weide steht und frisches Gras frisst, nimmt es einen großen Teil seines Wasserbedarfs über das Futter auf. Gras besteht zu etwa 80 Prozent aus Wasser.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Heu? Nur 10-15 Prozent.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Das bedeutet: Im Winter muss dein Pferd aktiv viel mehr trinken, um auf die gleiche Wassermenge zu kommen. Und genau hier liegt das Problem.
            </p>
          </section>

          {/* Scientific Fact Box - Wasser */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Droplets className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Das sagt die Wissenschaft dazu:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed mb-2">
                  Bei eingeschränktem Wasserzugang steigt das Kolikrisiko um das <strong>2,5-fache</strong>. <em>(Quelle: Ingolf Bender, 2015, zitiert in Carevallo)</em>
                </p>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Pferde, denen temperiertes Wasser (10-15°C) angeboten wird, trinken bis zu <strong>40 Prozent mehr</strong> als bei eiskaltem Wasser. <em>(Quelle: University of Pennsylvania, zitiert in Cavallo.de)</em>
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6 italic">
            Die Selbsttränke macht <em>KLONK</em>. Dein Pferd schaut sie an, als hätte sie es persönlich beleidigt. Und trinkt demonstrativ... nichts.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
            Kennst du das? Manche Pferde mögen das Geräusch nicht. Andere trinken ungern in kleinen Schlucken aus der Schale. Wieder andere trauen sich im Offenstall nicht an die Tränke, weil der Herdenchef dort Wache hält.
          </p>

          <h3 className="text-xl font-serif text-loam mb-4">In der Box</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Selbsttränken kontrollieren: Funktioniert sie? Fließt genug Wasser?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Zusätzlich einen Eimer anbieten – so siehst du auch, wie viel dein Pferd wirklich trinkt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Temperiertes Wasser, wenn möglich (kein heißes, aber auch kein eiskaltes)</span>
            </li>
          </ul>

          <h3 className="text-xl font-serif text-loam mb-4">Im Offenstall</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Mehrere Tränkestellen, damit rangniedere Pferde eine Chance haben</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Tränken täglich auf Funktion und Temperatur prüfen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Bei Frost: regelmäßig kontrollieren, ob sie nicht eingefroren sind</span>
            </li>
          </ul>

          {/* Key Takeaway #5 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #5</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Wassermangel ist im Winter gefährlicher als im Sommer.</strong> Gras hat 80% Wasser, Heu nur 10-15%. Dein Pferd muss aktiv mehr trinken – und tut es oft nicht, wenn das Wasser zu kalt ist oder die Tränke unangenehm. Kolikrisiko steigt bei Wassermangel um das 2,5-fache.
            </p>
          </aside>

          {/* Section 6: Kraftfutter */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Kraftfutter: Wann es wirklich Sinn macht
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Kurze Antwort: Seltener, als die meisten denken.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hochwertiges Heu – in ausreichender Menge und mit guter Mineralversorgung – deckt bei den meisten Freizeitpferden den Erhaltungsbedarf vollständig. Kraftfutter ist kein Grundnahrungsmittel, sondern eine Ergänzung für spezifische Situationen.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Wann Kraftfutter sinnvoll sein kann:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Pferde in regelmäßiger, intensiver Arbeit (nicht: einmal pro Woche Ausritt)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Alte Pferde, die Heu nicht mehr gut verwerten können</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Untergewichtige Pferde im Aufbau</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Säugende Stuten mit erhöhtem Energiebedarf</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Wann Kraftfutter oft überflüssig ist:</strong>
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Freizeitpferde mit leichter Arbeit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Robustrassen und leichtfuttrige Typen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Pferde, die bereits genug Heu bekommen</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed p-4 bg-gold/5 rounded-sm border-l-4 border-gold">
              <strong>Wichtig:</strong> Kraftfutter niemals auf leeren Magen füttern. Immer erst Heu – dann, nach mindestens 30 Minuten, Kraftfutter. Das beugt Magenübersäuerung vor und sorgt für bessere Verdauung.
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
                href="/fruehlingscheck"
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

          {/* Section 7: Fütterungscheck */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Der praktische Winter-Fütterungscheck
            </h2>

            <h3 className="text-xl font-serif text-loam mb-4">Für Boxenpferde</h3>
            <div className="bg-white/50 rounded-sm p-6 mb-8 border border-loam/10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Heunetz mit engen Maschen (3-5 cm) vorhanden?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Späte Abendfütterung möglich (nach 20 Uhr)?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Wassereimer zusätzlich zur Selbsttränke?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Trinkmenge kontrolliert (~30-50 Liter/Tag)?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Gespräch mit Stallbetreiber über Fütterungszeiten?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Stroh als Ergänzung (max. 1/3 der Ration)?</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-serif text-loam mb-4">Für Offenstall-Pferde</h3>
            <div className="bg-white/50 rounded-sm p-6 mb-8 border border-loam/10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Zeitgesteuerte Heuraufe vorhanden/nutzbar?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Mehrere Heustationen für rangniedere Pferde?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Tränken täglich auf Funktion geprüft?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Abstimmung mit Miteinstellern über Fütterung?</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                  <span className="font-sans text-loam/70">Fressverhalten beobachtet (wer kommt ran, wer nicht)?</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Final Section */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Und jetzt?</h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Wenn du bis hierhin mitgerechnet hast, dann weißt du jetzt mehr als die meisten am Stall.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du musst nicht perfekt sein. Du kannst nicht jeden Tag um Mitternacht Heu stopfen. Du kannst nicht alles kontrollieren.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber du rechnest jetzt mit. Du weißt, was in diesen 13 Stunden passiert. Und du hast ein paar Ideen, was du tun könntest.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Vielleicht ist der nächste Schritt ein Gespräch mit deinem Stallbetreiber. Vielleicht ein Heunetz mit engeren Maschen. Vielleicht einfach nur: bewusster hinschauen, wie lange die Pausen wirklich sind.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Die 13 Stunden? Die müssen nicht so bleiben.
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
                  <p className="font-semibold text-loam mb-1">Dein Bauchgefühl</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Wenn dir Fresspausen zu lang vorkommen, trügt es dich nicht. Pferde sind Dauerfresser.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #2
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Die innere Heizung</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Der Dickdarm arbeitet wie ein Holzofen – regelmäßiger Nachschub hält ihn effizient.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #3
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Magensäure 24/7</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Dein Pferd produziert ständig Magensäure. Bei leerem Magen greift sie die Schleimhaut an.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #4
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Praktische Lösungen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Heunetze verdoppeln die Fressdauer. Jede Stunde weniger Pause zählt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #5
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Wassermangel</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Im Winter ist Wassermangel gefährlicher als im Sommer. Kolikrisiko steigt um das 2,5-fache.
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
              Du bist unsicher, wie du die Fütterung in deinem Stall optimieren kannst?{" "}
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
                <span className="font-serif text-loam">Eindecken im Winter: Wann eine Decke wirklich Sinn macht →</span>
              </Link>
              <Link href="/blog/bewegung-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam">Bewegung bei Frost →</span>
              </Link>
            </div>
          </section>

          {/* Quellenangaben */}
          <div className="text-xs font-sans text-loam/50 leading-relaxed border-t border-loam/10 pt-6 mt-8">
            <p className="font-semibold text-loam/70 mb-2">Quellen</p>
            <ul className="space-y-1">
              <li>• GfE (2014): Empfehlungen zur Energie- und Nährstoffversorgung von Pferden. DLG-Verlag, Frankfurt</li>
              <li>• Zeitler-Feicht, M.H. & Walker, J. (2005): Einfluss von Heuraufen auf die Fressdauer bei Pferden. <em>Tierärztliche Praxis Großtiere</em>, 33(5):317-322</li>
              <li>• Luthersson, N. et al. (2009): Risk factors associated with equine gastric ulceration. <em>Acta Veterinaria Scandinavica</em>, 51:42</li>
              <li>• Cymbaluk, N.F. (1990): Cold housing effects on growth and nutrient demand. <em>Journal of Animal Science</em>, 68(11):3152-3162</li>
              <li>• McDonnell, S.M. et al. (1999): Drinking behavior of horses. <em>Equine Veterinary Journal</em>, 31(S28):12-18 — Wasseraufnahme und Temperatur</li>
              <li>• PROVIEH e.V.: 24-Stunden-Heu für Dauerfresser — Zusammenfassung zu Magengeschwür-Prävention</li>
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
