"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sun, Brain, Zap } from "lucide-react"
import { StickyLeadMagnetBanner } from "@/components/sticky-lead-magnet-banner"

export default function WinterverhaltenPage() {
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
                Verhalten & Psychologie
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-loam mb-6 leading-tight text-balance">
              Dein Pferd steht im Dezember nur noch rum? Das ist kein Winterblues – das ist Millionen Jahre alte Intelligenz.
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Warum dein Pferd im Winter träger wirkt, beim Reiten aber plötzlich explodiert – und was das mit dem Licht zu tun hat, nicht mit seinem Charakter.
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
                  <span>Warum mein 25-jähriger Wallach im Winter zum "Hengst" wird</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Was das Licht mit dem Verhalten deines Pferdes zu tun hat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der Energiesparmodus: Kein Bug, sondern 25 Millionen Jahre Überlebensstrategie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Warum die Energie nicht weg ist – sondern nur umgeleitet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Was das für dein Training bedeutet (Box & Offenstall)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der Perspektivwechsel, der alles verändert</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/thumbnail-gesundheit-v2.png"
              alt="Pferd döst entspannt im winterlichen Paddock – Energiesparmodus aktiv"
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
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">M</span>ein Wallach ist normalerweise ein Energiesparmodell. Er steht gerne rum, döst vor sich hin, bewegt sich nur, wenn es unbedingt sein muss. Aber ab Dezember? Da wird er zum Hengst beim Spazierengehen. Obwohl er schon Mitte zwanzig ist.
            </p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Jahrelang dachte ich, das liegt an mir. An der Jahreszeit. Daran, dass im Winter oft die Bodenverhältnisse die Arbeit erschweren. Ich habe mir Sorgen gemacht: Ist er unterfordert? Braucht er mehr Bewegung? Stimmt etwas nicht mit ihm?
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Wahrscheinlich kennst du dieses Gefühl. Du stehst am Paddock, beobachtest dein Pferd, wie es stundenlang einfach nur steht. Wie es sich kaum bewegt. Und dann holst du es zum Reiten – und plötzlich hast du ein völlig anderes Tier unter dir. Eines, das tänzelt, guckt, sich aufbaut.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed italic">
            „Der versucht dich nur auszutesten", sagt dann vielleicht jemand am Stall. „Der ist unterfordert." Oder: „Der braucht mehr Arbeit."
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Heute weiß ich: Das Verhalten meines Wallachs hat biologische Gründe – keine bösen Absichten. Und je mehr ich darüber gelernt habe, desto mehr hat sich mein Blick auf das „Winter-Verhalten" verändert.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Lass uns gemeinsam hinschauen.
          </p>

          {/* Key Takeaway #1 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #1</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Dein Pferd verhält sich im Winter anders – aber nicht, weil es dich ärgern will oder unterfordert ist. Es folgt einem uralten biologischen Programm, das sein Überleben gesichert hat. Das zu verstehen verändert alles: deinen Blick, deine Erwartungen, dein Training.
            </p>
          </aside>

          {/* Section 1: Das Licht */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Das Licht steuert mehr, als du denkst
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hier kommt etwas, das mich wirklich überrascht hat:
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Nicht die Temperatur sagt deinem Pferd, dass Winter ist – das Licht tut es. Der Fellwechsel beginnt im Juni, nicht im November.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Ja, du hast richtig gelesen. <em>Juni</em>. Mitten im Sommer, wenn wir schwitzend über die Hitze stöhnen, beginnt dein Pferd bereits, sich auf den Winter vorzubereiten.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Stell dir vor, dein Körper wüsste, dass Winter kommt – bevor du den Kalender anschaust. Genau das kann dein Pferd. Es hat im Juni schon angefangen, sich vorzubereiten, während du noch im T-Shirt am Stall standest.
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
              <Sun className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was ich recherchiert habe (und es hat meinen Blick verändert):
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Die Zirbeldrüse im Gehirn deines Pferdes registriert die Tageslichtlänge über das Auge. Ab der Sommersonnenwende am 21. Juni – wenn die Tage wieder kürzer werden – sendet sie ein Signal: „Winter kommt." Das Hormon Melatonin wird vermehrt ausgeschüttet. Und dieses Melatonin steuert nicht nur den Fellwechsel, sondern auch den Schlaf-Wach-Rhythmus, die Fortpflanzung – und das Aktivitätsniveau.
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
            Im Winter, wenn die Tage kurz sind, ist der Melatoninspiegel im Körper deines Pferdes dauerhaft höher als im Sommer. Und Melatonin macht müde. Träge. Ruhiger.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Das Auge registriert die Tageslichtlänge und sendet Signale an den Körper. Dein Pferd passt sich an – nicht weil es faul ist, sondern weil es auf ein System hört, das seit 25 Millionen Jahren funktioniert.
          </p>

          {/* Key Takeaway #2 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #2</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Die Zirbeldrüse deines Pferdes reagiert auf die Tageslichtlänge – nicht auf die Temperatur. Mehr Dunkelheit = mehr Melatonin = weniger Aktivität. Das ist keine Laune, das ist Biochemie.
            </p>
          </aside>

          {/* Section 2: Energiesparmodus */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Der Energiesparmodus: 25 Millionen Jahre Überlebensstrategie
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Wildpferde haben nicht den Luxus von Heunetzen, Kraftfutter und Winterdecken. Für sie bedeutete Winter: weniger Futter, härtere Bedingungen, höhere Gefahr. Jede Kalorie zählte.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Was macht ein kluges Tier in dieser Situation? Es spart Energie.
            </p>
          </section>

          {/* Scientific Fact Box - Przewalski */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Das sagt die Wissenschaft dazu:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Forscher der Veterinärmedizinischen Universität Wien haben Przewalski-Pferde über zwei Jahre beobachtet und ihre Herzfrequenz als Indikator für den Energieverbrauch gemessen. Das Ergebnis: Die Herzfrequenz sank im Winter auf durchschnittlich <strong>44 Schläge pro Minute</strong> – im Frühjahr stieg sie auf <strong>89 Schläge</strong>. Ein Unterschied von mehr als 100 Prozent. Die Wildpferde schalten im Winter in eine Art „Stand-by-Modus" – unabhängig davon, wie viel Futter verfügbar ist. Dieses Muster ist genetisch verankert und zeigt sich auch bei domestizierten Pferden in naturnaher Haltung. <em>(Arnold, Ruf & Kuntz, 2006)</em>
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
            Lebhaftes Laufen, Buckeln und sonstiges frisches Verhalten verbrennt wertvolle Kalorien. Deshalb ist das keine Strategie, die Pferde nutzen, um sich bei Kälte warm zu halten. Stattdessen sparen sie Energie, stehen zusammen, suchen Schutz.
          </p>

          <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
            Ein Pferd, das im Winter auf dem Paddock viel döst, ist nicht depressiv – es ist effizient.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            25 Millionen Jahre Evolution. 200 Jahre Boxenhaltung. Wer hat hier wen nicht verstanden?
          </p>

          {/* Key Takeaway #3 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #3</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Reduzierte Aktivität im Winter ist kein Defizit – sie ist eine evolutionär sinnvolle Strategie. Dein Pferd folgt einem uralten Programm zur Energieeinsparung. Das „faule" Verhalten auf dem Paddock ist genau das, was die Evolution vorgesehen hat.
            </p>
          </aside>

          {/* Section 3: Chaos beim Reiten */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Aber warum dann das Chaos beim Reiten?
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Wenn mein Pferd im Energiesparmodus ist – warum explodiert es dann manchmal bei der Arbeit?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die Antwort hat mich überrascht:
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Die Energie ist nicht weg – sie wird nur nicht mehr auf dem Paddock verschwendet.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Dein Pferd spart Energie, wo es kann. Es steht rum, döst, bewegt sich minimal. Aber die Energie, die es nicht verbraucht, verschwindet nicht einfach. Sie ist da – aufgestaut, bereit, abgerufen zu werden.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Und dann kommst du. Holst es aus seiner Ruhe. Bringst es in eine Situation, die Aufmerksamkeit erfordert. Und plötzlich ist all diese aufgestaute Energie da.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Dazu kommt: Im Winter sind die Tage kurz. Dein Pferd steht mehr, bewegt sich weniger, hat weniger Input. Wenn du es dann holst, ist alles neu, alles aufregend, alles ein potenzieller Auslöser.
            </p>
          </section>

          {/* Humor Box */}
          <aside className="bg-sage/10 rounded-sm p-6 my-8 border border-sage/20">
            <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
              Das Aktivitätslevel deines Pferdes im Dezember auf dem Paddock:
            </h3>
            <p className="text-sm font-sans text-loam/70 leading-relaxed italic">
              Bewegt sich nur, wenn das Heu am anderen Ende liegt. Oder wenn eine Plastiktüte im Wind flattert – dann allerdings mit Lichtgeschwindigkeit.
            </p>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Auf dem Paddock ruhig, in der Arbeit energiegeladen. Das ist kein Widerspruch – das ist derselbe Mechanismus.
          </p>

          {/* Key Takeaway #4 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #4</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Die Energie ist nicht weg – sie wird umgeleitet. Dein Pferd spart auf dem Paddock, um im Ernstfall reagieren zu können. Wenn du es holst, ist der „Ernstfall" da – und die gespeicherte Energie wird freigesetzt.
            </p>
          </aside>

          {/* Section 4: Training */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Was das für dein Training bedeutet
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
              Wenn du verstehst, was im Winter im Körper deines Pferdes passiert, kannst du dein Training anpassen. Nicht weil etwas „falsch" ist – sondern weil du mit dem System arbeitest, statt dagegen.
            </p>

            <h3 className="text-xl font-serif text-loam mb-4">🌳 Pferde im Offenstall</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Offenstallpferde zeigen den Energiesparmodus besonders deutlich. Sie haben die Möglichkeit, sich frei zu bewegen – und entscheiden sich oft dagegen. Das ist normal.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was das bedeutet:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Die reduzierte Aktivität ist physiologisch sinnvoll</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Die „Faulheit" auf dem Paddock ist keine Unterforderung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Beim Training kann mehr Energie da sein, als du erwartest</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du beachten könntest:</strong>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Längere Aufwärmphase einplanen:</strong> Nach langen Ruhephasen brauchen Pferde mehr Aufwärmzeit. Die Gelenke sind weniger „geschmiert", die Muskulatur weniger durchblutet. Im <Link href="/blog/bewegung-winter" className="text-gold hover:underline">Beitrag über Bewegung im Winter →</Link> habe ich das ausführlich erklärt.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Erwartungen anpassen:</strong> Dein Pferd ist nicht faul, wenn es im Winter weniger motiviert wirkt. Es folgt seinem biologischen Rhythmus.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Aufgestaute Energie einkalkulieren:</strong> Wenn du weißt, dass die Energie nicht weg ist, kannst du dich darauf vorbereiten. Beginne ruhig, gib deinem Pferd Zeit anzukommen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Kopfarbeit statt Auspowern:</strong> Überschüssige Energie lässt sich nicht einfach „weglongieren". Was wirklich hilft: Konzentration auf wechselnde Aufgaben. Bodenarbeit, kleine Übungen, Dinge, die dein Pferd zum Mitdenken bringen. Das beschäftigt den Kopf – und ein beschäftigter Kopf hat weniger Kapazität für Aufregung.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">📦 Pferde aus der Box</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Boxenpferde haben eine doppelte Herausforderung: Der biologische Energiesparmodus trifft auf Bewegungsmangel durch die Haltung.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was das bedeutet:</strong>
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Die natürliche Reaktion (weniger Aktivität) trifft auf erzwungene Inaktivität</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Das kann zu noch mehr aufgestauter Energie führen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Gleichzeitig fehlt der Input – alles wird aufregender</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Was du beachten könntest:</strong>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Tägliche Bewegung, auch wenn kurz:</strong> Lieber 15 Minuten führen als gar nichts. Das baut Spannung ab und gibt Input.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Vor dem Reiten Zeit geben:</strong> Lass dein Pferd erst mal schauen, sich orientieren. Nach Stunden in der Box ist draußen alles interessant.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Kopfarbeit statt Auspowern:</strong> Überschüssige Energie lässt sich nicht einfach „weglongieren". Was wirklich hilft: Konzentration auf wechselnde Aufgaben. Bodenarbeit, kleine Übungen, Dinge, die dein Pferd zum Mitdenken bringen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Kontrolliert ankommen lassen:</strong> Geführte Bewegung vor dem Reiten kann helfen – aber nicht als „Auspowern", sondern als Ankommen.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-serif text-loam mb-4">Für beide: Der Perspektivwechsel</h3>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die wichtigste Erkenntnis ist diese: Das Verhalten hat Gründe. Biologische, nachvollziehbare Gründe.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Wenn dein Pferd im Winter auf dem Paddock nur rumsteht und beim Reiten „spinnt", dann ist das keine schlechte Erziehung. Kein Charakterfehler. Kein Zeichen, dass du etwas falsch machst.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Es ist ein Pferd, das einem uralten Rhythmus folgt – in einer modernen Welt, die diesen Rhythmus oft vergessen hat.
            </p>
          </section>

          {/* Key Takeaway #5 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #5</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Das Winter-Verhalten ist kein Problem, das du lösen musst – es ist ein System, das du verstehen kannst. Längere Aufwärmzeit, angepasste Erwartungen, Verständnis für die aufgestaute Energie: Damit arbeitest du immer MIT deinem Pferd, nicht dagegen.
            </p>
          </aside>

          {/* Section 5: Der Blick */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Der Blick, der alles verändert
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Früher stand ich im Winter am Paddock und machte mir Sorgen. Ist er unterfordert? Stimmt etwas nicht? Mache ich etwas falsch?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Heute stehe ich da und sehe etwas anderes: Ein Pferd, das genau das tut, wofür es gebaut wurde. Das Energie spart, wenn Energie knapp sein könnte. Das auf sein System hört.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das Verhalten hat sich nicht geändert. Aber mein Blick darauf.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Und vielleicht ist das der wichtigste Punkt: Wenn du weißt, warum dein Pferd sich so verhält, ändert sich nicht das Verhalten – aber dein Umgang damit. Deine Erwartungen. Dein Gefühl dabei. Du hörst auf, gegen etwas zu kämpfen, das gar kein Problem ist.
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
              Was du jetzt mitnehmen kannst
            </h2>
            
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du bist vermutlich hier gelandet, weil du dir Fragen stellst, die andere nicht stellen. Weil du nicht einfach akzeptierst: „Der ist halt so im Winter."
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das ist gut. Das ist genau richtig.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Jetzt hast du hoffentlich einige neue Tipps an der Hand: Das träge Verhalten auf dem Paddock und die Energie beim Reiten sind zwei Seiten derselben Medaille. Dein Pferd spart nicht, weil es faul ist – sondern weil es klug ist. Die Energie ist nicht weg – sie wird nur anders verteilt.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Mit diesem Wissen kannst du beginnen, dir weniger unnötige Gedanken zu machen. Aufhören, scheinbar gegen etwas ankämpfen zu müssen. Anfangen, mit deinem Pferd zu arbeiten – nicht gegen sein System.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Dass du diese Fragen stellst und hinterfragst, zeigt echtes Engagement. Es geht darum, bewusst und aufmerksam mit deinem Pferd zu arbeiten – nicht um blinde Akzeptanz. Diese Herangehensweise macht den Unterschied.
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
                  <p className="font-semibold text-loam mb-1">Verhalten verstehen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Das Winter-Verhalten folgt einem biologischen Programm – nicht schlechter Erziehung oder Unterforderung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #2
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Licht steuert</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Die Zirbeldrüse reagiert auf Tageslichtlänge. Mehr Dunkelheit = mehr Melatonin = weniger Aktivität.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #3
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Energiesparmodus</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Reduzierte Aktivität ist evolutionär sinnvoll – 25 Millionen Jahre alte Überlebensstrategie.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #4
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Energie umgeleitet</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Die Energie ist nicht weg, sondern aufgestaut. Beim Reiten wird sie freigesetzt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #5
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Training anpassen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Längere Aufwärmzeit, angepasste Erwartungen – mit dem System arbeiten, nicht dagegen.
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
              Du fragst dich, ob das Winter-Verhalten deines Pferdes normal ist?{" "}
              <Link href="/kontakt" className="text-gold hover:underline">
                Schreib mir →
              </Link>
            </p>
          </div>

          {/* Related Posts */}
          <section className="mt-12 mb-8">
            <h3 className="text-xl font-serif text-loam mb-6">Mehr zum Thema:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/bewegung-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam text-sm">Bewegung im Winter: Aufwärmen und Bodenverhältnisse →</span>
              </Link>
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
              <li>• Arnold, W., Ruf, T., Kuntz, R. (2006): Seasonal adjustment of energy budget in a large wild mammal, the Przewalski horse. <em>Journal of Experimental Biology</em>, 209(22):4566-4573</li>
              <li>• Kuntz, R. et al. (2006): Seasonal adjustments of energy budgets in free ranging Przewalski horses. <em>Journal of Experimental Biology</em>, 209(22):4557-4565</li>
              <li>• Dr. med. vet. Gabriele Volker: Funktion der Epiphyse bei Hund, Katze und Pferd (loadmedical.com)</li>
              <li>• 360gradpferd.de: Wann beginnt der Fellwechsel beim Pferd?</li>
              <li>• VTG Tiergesundheit: Einfluss von Licht auf die Pferdegesundheit</li>
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
