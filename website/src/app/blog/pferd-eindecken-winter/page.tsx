"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Thermometer, CheckCircle2, ArrowLeft, Heart } from "lucide-react"
import { StickyLeadMagnetBanner } from "@/components/sticky-lead-magnet-banner"
import { Disclaimer } from "@/components/Disclaimer"

export default function PferdEindeckenWinterPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-paper">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Bei welcher Temperatur friert ein Pferd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Wohlfühltemperatur eines gesunden, erwachsenen Pferdes liegt zwischen -5°C und +15°C. Pferde beginnen erst unter -5°C mit aktiver Wärmeproduktion. Wenn Menschen frieren, fühlt sich das Pferd oft gerade wohl."
                }
              },
              {
                "@type": "Question",
                "name": "Wann sollte ich mein Pferd eindecken?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eindecken ist die Ausnahme, nicht die Regel. Legitime Gründe sind: geschorenes Fell, alte oder kranke Pferde (z.B. Cushing), Pferde in der Haltungsumstellung, oder untergewichtige Pferde. Gesunde Pferde mit intaktem Winterfell brauchen in der Regel keine Decke."
                }
              },
              {
                "@type": "Question",
                "name": "Wie prüfe ich ob mein Pferd friert?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Der 10-Sekunden-Flanken-Check: Lege deine flache Hand auf die Flanke oder hinter das Schulterblatt, unter das Fell. Warm und trocken bedeutet alles in Ordnung. Ohren und Beine sind keine geeigneten Indikatoren für die Körpertemperatur."
                }
              },
              {
                "@type": "Question",
                "name": "Warum ist Heu wichtig für die Wärmeregulation beim Pferd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Fermentation von Raufutter im Blinddarm erzeugt erhebliche Wärmeenergie. Ein Pferd mit ausreichend Heu produziert seine eigene innere Heizung. Bei Kälte steigt der Energiebedarf um bis zu 20% - dieser wird optimal durch zusätzliches Raufutter gedeckt, nicht durch Decken."
                }
              },
              {
                "@type": "Question",
                "name": "Schadet eine Pferdedecke dem Winterfell?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, eine Decke drückt die Haare platt und zerstört damit die isolierende Luftschicht - die natürliche Daunenjacke des Pferdes. Ein Pferd mit Decke ist oft schlechter geschützt als eines ohne, weil sein eigenes Thermoregulationssystem nicht mehr funktionieren kann."
                }
              }
            ]
          })
        }}
      />
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "0 Grad am Stall: Dein Pferd döst entspannt. Du googlest panisch 'Pferd eindecken'.",
            "description": "Wann eine Decke wirklich Sinn macht - und wann du deinem Pferd damit mehr schadest als hilfst. Faktenbasiert und aus 20 Jahren Praxiserfahrung.",
            "image": "https://pferdesicht.com/images/heroes/hero-pferd-winter-schnee-v4.png",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "author": {
              "@type": "Person",
              "name": "Diana",
              "description": "Reittherapeutin mit 30 Jahren Pferdeerfahrung",
              "url": "https://pferdesicht.com/ueber-mich"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Pferdesicht",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pferdesicht.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pferdesicht.com/blog/pferd-eindecken-winter"
            }
          })
        }}
      />
      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".key-takeaway", "h1", ".scientific-fact"]
            }
          })
        }}
      />

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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-loam mb-6 leading-tight text-balance">
              0 Grad am Stall: Dein Pferd döst entspannt. Du googlest panisch „Pferd eindecken".
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Wann eine Decke wirklich Sinn macht – und wann du deinem Pferd damit mehr schadest als hilfst.
              Faktenbasiert und aus 20 Jahren Praxiserfahrung.
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-3 text-sm font-sans text-sage mb-8">
              <span>von Diana</span>
              <span>•</span>
              <span>8 min (2100)</span>
            </div>

            {/* Author Box */}
            <div className="flex items-center gap-4 p-4 bg-sage/10 rounded-lg mb-8">
              <Image src="/images/Diana_Pferdesicht.jpeg" alt="Diana" width={60} height={60} className="rounded-full object-cover" />
              <div>
                <p className="font-semibold text-loam font-sans">Diana</p>
                <p className="text-sm text-loam/60 font-sans">30 Jahre Pferdeerfahrung · Reittherapeutin · Pferdesicht Gründerin</p>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 rounded-sm p-6 backdrop-blur-sm border border-loam/10">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-loam mb-4">
                In diesem Artikel:
              </h3>
              <ul className="space-y-2.5 text-sm font-sans text-loam/70">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der Moment, der mein Denken verändert hat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Die Wohlfühltemperatur deines Pferdes (Spoiler: Sie überrascht dich)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Warum das Winterfell ein Meisterwerk ist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der Mythos vom frierenden Pferd</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Wann Eindecken tatsächlich Sinn macht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Der 10-Sekunden-Check für den Stall</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/heroes/hero-pferd-winter-schnee-v4.png"
              alt="Schwarzes Pferd im verschneiten Paddock bei Morgendämmerung"
              fill
              priority
              className="object-cover warm-film-grain"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mt-16 space-y-12">
          {/* Opening Paragraph with Drop Cap */}
          <div className="prose prose-lg">
            <p className="text-lg font-serif text-loam/80 leading-relaxed">
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">E</span>s ist 6:30 Uhr,
              minus 2 Grad, und ich stehe mit meinem dampfenden Kaffee am Paddock. Vor mir steht mein Wallach – Raureif
              auf dem Fell, entspannt kauend, die Augen halb geschlossen. Und ich? Ich friere mir die Finger ab. Genau
              in diesem Moment hat es bei mir Klick gemacht: Ich projiziere mein Kälteempfinden auf mein Pferd.
            </p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Vielleicht kennst du das: Du stehst am Stall, es ist kalt, und in deinem Kopf rattert es: „Soll ich
            eindecken? Die anderen haben alle Decken drauf. Aber irgendwas fühlt sich falsch an. Was, wenn er friert?
            Was, wenn ich ihm schade?"
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Dieses Gedankenkarussell kenne ich nur zu gut. Und ich weiß auch, wie es sich anfühlt, wenn am Stall jemand
            sagt: „Also ICH würde bei dem Wetter nie ohne Decke…" – und du dich plötzlich fragst, ob du eine schlechte
            Pferdebesitzerin bist.
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            (Wahrscheinlich von der Person, die bei 10 Grad plus selbst noch Handschuhe und Schal trägt. Aber das nur am Rande.)
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Lass uns heute gemeinsam aufräumen. Mit Fakten. Mit meinen 20 Jahren Erfahrung. Und mit dem, was ich auf die
            harte Tour lernen musste.
          </p>

          {/* Key Takeaway #1 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #1</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Dein Kälteempfinden ≠ das Kälteempfinden deines Pferdes. Wenn du frierst, fühlt sich dein Pferd
              wahrscheinlich gerade pudelwohl. Die Wohlfühltemperatur eines gesunden Pferdes beginnt dort, wo unsere
              längst aufgehört hat: bei -5°C.
            </p>
          </aside>

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Was ich gerne früher gewusst hätte: Pferde sind keine Menschen in Fellmänteln
            </h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hier kommt die unbequeme Wahrheit, die mir damals niemand gesagt hat:
            </p>
            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Die Wohlfühltemperatur eines gesunden, erwachsenen Pferdes liegt zwischen -5°C und +15°C.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Ja, du hast richtig gelesen. Minus fünf.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Zum Vergleich: Unsere menschliche Komfortzone liegt bei etwa 18-22°C. Das bedeutet, wenn wir anfangen zu
              frieren, fängt unser Pferd gerade erst an, sich wohlzufühlen.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das bedeutet: <strong>Wenn wir anfangen zu frieren, fängt unser Pferd gerade erst an, sich wohlzufühlen.</strong> Wir lösen also ein Problem, das gar nicht existiert.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Lass das mal sacken: Dein Pferd fühlt sich bei Temperaturen am wohlsten, bei denen du längst die Heizung aufdrehst.
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
              <Thermometer className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Wissenschaftlicher Fakt:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Die thermoneutrale Zone des Pferdes – der Temperaturbereich, in dem es keine zusätzliche Energie zur
                  Wärmeregulation aufwenden muss – liegt laut veterinärmedizinischen Studien bei -5°C bis +25°C für
                  adulte Pferde mit intaktem Winterfell. Bei Temperaturen unter -5°C beginnt erst die aktive
                  Wärmeproduktion.
                </p>
              </div>
            </div>
          </aside>

          {/* Quote */}
          <blockquote className="relative my-16 py-8 text-center">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
            <p className="relative text-3xl md:text-4xl font-serif italic text-loam leading-relaxed mb-6 text-balance px-8">
              Der ursprüngliche Lebensraum der Wildvorfahren unserer Hauspferde waren verschiedenartige Steppenlandschaften. Charakteristisch für derartige Landschaften ist, dass es tagsüber sehr heiß wird, in der Nacht stark abkühlt und es so zu großen Temperaturschwankungen innerhalb von 24 Stunden kommt. An derartige Witterungsverhältnisse ist das Pferd über mindestens 25 Millionen Jahre angepasst.
            </p>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
            <footer className="relative text-sm font-sans uppercase tracking-widest text-sage mt-4">
              — Dr. Miriam Baumgartner, TU München (PM-Forum, 2020)
            </footer>
          </blockquote>

          <figure className="my-12">
            <img
              src="/images/temperaturempfinden-mensch-vs-pferd.jpg"
              alt="Temperaturvergleich: Wohlfühlzone Mensch vs. Pferd - Infografik zeigt thermoneutrale Zone des Pferdes zwischen -5°C und +25°C"
              className="w-full h-auto rounded-sm border-2 border-gold/30"
            />
            <figcaption className="text-center text-sm text-loam/60 mt-4 italic">
              Abb. 1: Vergleich der Temperaturwohlfühlzonen: Während der Mensch unter +15°C zu frieren beginnt, befindet
              sich das Pferd in seiner thermoneutralen Zone. Unter -15°C erhöht sich der Energiebedarf des Pferdes
              deutlich.
            </figcaption>
          </figure>

          {/* Section 2: Das Winterfell */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Die geniale Ingenieursleistung: Das Pferdefell
            </h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Was passiert eigentlich im Winter mit dem Fell deines Pferdes?
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Stell dir einen Wintermantel vor, der sich selbst aufplustern kann. Der dicker wird, wenn es kälter wird. Der Regen abperlen lässt, ohne dass du ihn imprägnieren musst. Und der sich in Echtzeit an die Temperatur anpasst — ganz ohne App.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das ist das Winterfell deines Pferdes.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das Winterfell deines Pferdes ist ein Meisterwerk der Evolution:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Die Haare stellen sich auf und bilden eine isolierende Luftschicht (wie eine natürliche Daunenjacke)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Talg macht das Fell wasserabweisend – Regen perlt ab, die Unterwolle bleibt trocken
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Das Unterhautfettgewebe dient als zusätzliche Isolierung und Energiereserve
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Die Piloarrektion (Aufstellen der Haare) wird über das vegetative Nervensystem gesteuert und reagiert
                  in Echtzeit auf Temperaturveränderungen
                </span>
              </li>
            </ul>

            <figure className="my-8">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/images/content/pferd-fell-textur.png"
                  alt="Nahaufnahme Winterfell mit Gegenlicht zeigt isolierende Luftschicht"
                  fill
                  className="object-cover warm-film-grain"
                />
              </div>
              <figcaption className="text-xs font-sans text-sage text-center mt-3 italic">
                Die aufgestellten Haare bilden eine isolierende Luftschicht – die natürliche Daunenjacke deines Pferdes
              </figcaption>
            </figure>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Und jetzt kommt der Punkt, den viele nicht wissen: Wenn du eine Decke auf ein Pferd legst, ist das wie eine Daunenjacke, die jemand mit einem Vakuumierer zusammenpresst. Die Haare werden plattgedrückt. Die isolierende Luftschicht? Weg. Die natürliche Thermoregulation? Gestört.
            </p>
          </section>

          {/* Key Takeaway #2 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #2</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Eine Decke ersetzt nicht die natürliche Isolation – sie zerstört sie. Durch das Plattdrücken der Haare
              wird die isolierende Luftschicht eliminiert. Ein Pferd mit Decke ist oft schlechter geschützt als eines
              ohne, weil sein eigenes System nicht mehr funktionieren kann.
            </p>
          </aside>

          {/* Section 3: Der Mythos */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Der Mythos, der mich am meisten Nerven gekostet hat
            </h2>
            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic">
              „Mein Pferd zittert – es friert!"
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Diesen Satz habe ich so oft gehört. Und ja, auch ich bin früher in Panik verfallen, wenn ich das gesehen
              habe.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber hier ist die Sache: Zittern ist ein aktiver Wärmeproduktionsmechanismus.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Die Muskelkontraktionen erzeugen Wärme. Das ist keine Schwäche – das ist das System, das perfekt
              funktioniert.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du zitterst ja auch, wenn du aus dem warmen Bett in den kalten Flur gehst. Und niemand ruft dann den Notarzt. Dein Körper produziert Wärme. Genau wie der deines Pferdes.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Solange dein Pferd:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Zugang zu einem Unterstand hat (Schutz vor Wind und Nässe)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">
                  Ausreichend Raufutter bekommt (die Verdauung von Heu produziert enorme Wärme!)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-loam/70">Sich frei bewegen kann</span>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              …ist kurzzeitiges Zittern bei Kälteeinbruch völlig normal und kein Grund zur Sorge.
            </p>
          </section>

          {/* Scientific Fact Box 2 */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Wissenschaftlicher Fakt:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Die Fermentation von Raufutter im Blinddarm des Pferdes erzeugt erhebliche Mengen an Wärmeenergie. Ein
                  Pferd, das ausreichend Heu zur Verfügung hat, produziert durch die Verdauung seine eigene „innere
                  Heizung". Studien zeigen, dass der Energiebedarf eines Pferdes bei Kälte um bis zu 20% steigt – dieser
                  Mehrbedarf wird optimal durch zusätzliches Raufutter gedeckt, nicht durch Decken.
                </p>
              </div>
            </div>
          </aside>

          <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
            Die Heizung deines Pferdes läuft mit Heu. Nicht mit Fleece.
          </p>
          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Wenn du also willst, dass dein Pferd warm bleibt, gib ihm mehr Heu — nicht mehr Decken. Die beste Investition in kalten Nächten ist ein voller Heunetz, kein voller Deckenschrank.
          </p>

          {/* Key Takeaway #3 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #3</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Heu ist die beste Heizung. Die Verdauung von Raufutter erzeugt Wärme von innen. Ein Pferd mit ausreichend
              Heu, Bewegungsfreiheit und Unterstand hat alles, was es zur Thermoregulation braucht – ganz ohne Decke.
            </p>
          </aside>

          {/* Section 4: Wann macht es Sinn */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Wann macht Eindecken tatsächlich Sinn?</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Ich bin keine Dogmatikerin. Es gibt Situationen, in denen eine Decke absolut berechtigt ist:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-loam mb-2">1. Geschorene Pferde</h3>
                <p className="text-base font-sans text-loam/70 leading-relaxed">
                  Wenn du das Winterfell entfernt hast (z.B. weil dein Pferd im Training stark schwitzt), hast du die
                  natürliche Isolation zerstört. Dann musst du sie ersetzen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-loam mb-2">2. Alte oder kranke Pferde</h3>
                <p className="text-base font-sans text-loam/70 leading-relaxed">
                  Pferde mit Stoffwechselproblemen (z.B. Cushing — eine hormonelle Erkrankung älterer Pferde), sehr alte Pferde oder Pferde mit chronischen
                  Erkrankungen können Schwierigkeiten haben, ihre Körpertemperatur zu regulieren.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-loam mb-2">3. Pferde in der Umstellungsphase</h3>
                <p className="text-base font-sans text-loam/70 leading-relaxed">
                  Ein Pferd, das sein Leben lang in der warmen Box stand und plötzlich in den Offenstall kommt? Das
                  braucht Zeit zur Anpassung – und in der Übergangsphase eventuell Unterstützung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-loam mb-2">4. Untergewichtige Pferde</h3>
                <p className="text-base font-sans text-loam/70 leading-relaxed">
                  Fehlt die Fettschicht als Isolation und Energiereserve, kann Eindecken übergangsweise sinnvoll sein,
                  bis das Pferd wieder im Normalgewicht ist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-loam mb-2">5. Anhaltende Nässe + Wind</h3>
                <p className="text-base font-sans text-loam/70 leading-relaxed">
                  Mit trockener Kälte kommen Pferde hervorragend klar — selbst bei -15°C. <strong>Die Kombination aus Dauerregen und kaltem Wind ist eine andere Geschichte.</strong> Ist das Fell einmal komplett durchnässt, sind die Regulationsfunktionen außer Kraft gesetzt. Dann hilft eine Regendecke — aber sie ersetzt keinen Unterstand.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-serif italic text-loam mb-6">Wenn du eindeckst: Die wichtigsten Regeln</h3>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hast du dich fürs Eindecken entschieden, gibt es ein paar Dinge, die du im Blick behalten solltest:
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Temperaturschwankungen beachten:</strong> Was nachts bei -5°C passt, kann mittags bei +12°C in der Sonne zur Sauna werden. Behalte die Tagestemperaturen im Auge und deck entsprechend um — oder wähle eine dünnere Decke für mildere Tage.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              <strong className="text-loam">Deckendicke anpassen:</strong> Eine 300g-Decke ist keine Allzweckwaffe. Bei Temperaturen um den Gefrierpunkt reicht oft eine Regendecke oder leichte Übergangsdecke. Die dicke Winterdecke kommt erst bei echtem Dauerfrost zum Einsatz.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed">
              <strong className="text-loam">Einmal angefangen, durchziehen:</strong> Hier kommt der Punkt, den viele nicht bedenken: Wenn du früh in der Saison mit dem Eindecken beginnst, baut dein Pferd nicht mehr das volle Winterfell auf. Die Rezeptoren in der Haut bekommen das Signal „Ist ja warm genug" — und das Fellwachstum wird gedrosselt. Das bedeutet: Wer eindeckt, muss diesen Winter durchziehen. Ein Hin und Her schadet mehr als es nützt.
            </p>
          </section>

          {/* Key Takeaway #4 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #4</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Eindecken ist die Ausnahme, nicht die Regel. Es gibt fünf legitime Gründe: geschorenes Fell,
              Alter/Krankheit, Haltungsumstellung, Untergewicht oder anhaltende Nässe mit Wind. In allen anderen Fällen vertraust du besser dem
              System, das die Evolution über Millionen Jahre perfektioniert hat.
            </p>
          </aside>

          {/* Quiz Box - After ~60% of content */}
          <aside className="bg-sage rounded-sm py-12 px-8 my-16 shadow-lg">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                DEIN PERSÖNLICHER FRÜHLINGS-FAHRPLAN
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                Unsicher, ob dein Pferd eine Decke braucht?
              </h3>
              <p className="text-white/90 font-sans text-base mb-6">
                8 Fragen. 2 Minuten. Klarheit für den Winter.
              </p>
              <div className="flex flex-col gap-3 mb-8 text-left max-w-sm mx-auto">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-sans text-sm">Deine persönliche Risiko-Einschätzung</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-sans text-sm">Die Prioritäten für DEIN Pferd</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-sans text-sm">Einen persönlichen Frühlings-Kalender</span>
                </div>
              </div>
              <Link
                href="/fruehlingscheck"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wider uppercase rounded-sm transition-colors"
              >
                Quiz starten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-white/60 text-xs font-sans mt-4 flex flex-wrap items-center justify-center gap-3">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8 kurze Fragen
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kostenlos
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Report per E-Mail
                </span>
              </p>
            </div>
          </aside>

          {/* Section 5: Der Check */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Der 10-Sekunden-Check für den Stall</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Vergiss die Ohren (die sind immer kühler – normale Durchblutung). Vergiss die Beine.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Leg deine flache Hand auf die Flanke oder hinter das Schulterblatt, unter das Fell.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Warm und trocken?</strong> Alles gut. Dein Pferd reguliert perfekt.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="font-sans text-loam/70">
                  <strong className="text-loam">Kalt und klamm?</strong> Hier lohnt sich ein genauerer Blick auf die
                  Gesamtsituation.
                </span>
              </li>
            </ul>

            <figure className="my-8">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/images/content/flanken-check-hand.png"
                  alt="Hand prüft Temperatur an Pferdeflanke"
                  fill
                  className="object-cover warm-film-grain"
                />
              </div>
              <figcaption className="text-xs font-sans text-loam/60 mt-4 italic">
                Der Temperatur-Check an der Flanke gibt dir in 10 Sekunden Sicherheit
              </figcaption>
            </figure>

            <p className="text-base font-sans text-loam/70 leading-relaxed mt-8 mb-4">
              Und noch ein Zeichen, das mir damals niemand gesagt hat:
            </p>
            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Wenn Schnee auf dem Fell deines Pferdes liegen bleibt — ohne zu schmelzen — dann funktioniert die Pferdeheizung einwandfrei.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Die Isolation ist so gut, dass keine Körperwärme nach außen dringt. Schmilzt der Schnee sofort? Dann verliert dein Pferd Wärme und du solltest genauer hinschauen.
            </p>
          </section>

          {/* Quote 2 */}
          <blockquote className="relative my-16 py-8 text-center">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
            <p className="relative text-3xl md:text-4xl font-serif italic text-loam leading-relaxed mb-6 text-balance px-8">
              Die Körperkerntemperatur eines Pferdes lässt sich am zuverlässigsten an Stellen mit dünner Haut und guter
              Durchblutung prüfen – hinter dem Schulterblatt oder an der Flanke. Ohren und Beine sind keine geeigneten
              Indikatoren.
            </p>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
            <footer className="relative text-sm font-sans uppercase tracking-widest text-sage mt-4">
              — Dr. med. vet. Tanja Warter
            </footer>
          </blockquote>

          {/* Key Takeaway #5 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #5</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              Der Flanken-Check ersetzt das Rätselraten. Hand unter das Fell, hinter das Schulterblatt oder an die
              Flanke. Warm und trocken = alles gut. Dieser Check dauert 10 Sekunden und gibt dir echte Sicherheit statt
              Bauchgefühl.
            </p>
          </aside>

          {/* Final Message */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Was du wirklich brauchst</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Du bist nicht „zu pingelig", wenn du dir Gedanken machst. Du bist eine verantwortungsvolle
              Pferdebesitzerin, die das Beste für ihr Pferd will.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber ich möchte, dass du aufhörst, dich von der Meinung anderer verunsichern zu lassen. Dass du aufhörst,
              dein menschliches Kälteempfinden auf dein Pferd zu übertragen.
            </p>
            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Stattdessen möchte ich, dass du weißt. Nicht rätst. Weißt.
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
                  <p className="font-semibold text-loam mb-1">Temperaturwahrnehmung</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Dein Kälteempfinden ≠ das Kälteempfinden deines Pferdes. Die Wohlfühlzone beginnt bei -5°C.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #2
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Natürliche Isolation</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Eine Decke ersetzt nicht die natürliche Isolation — sie zerstört sie durch das Plattdrücken der Haare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #3
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Innere Wärme</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Heu ist die beste Heizung. Die Verdauung von Raufutter wärmt von innen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #4
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Ausnahmen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Eindecken ist die Ausnahme (geschoren, alt/krank, Umstellung, untergewichtig, Nässe+Wind), nicht die Regel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #5
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Sicherheit</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Der Flanken-Check ersetzt das Rätselraten. 10 Sekunden für echte Gewissheit.
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

          {/* Footer Message */}
          <div className="text-center text-sm font-sans text-loam/60 leading-relaxed space-y-2">
            <p>
              Du bist unsicher, ob dein Pferd zu den Ausnahmen gehört?{" "}
              <Link href="#" className="text-gold hover:underline">
                Schreib mir eine Nachricht →
              </Link>
            </p>
            <p>
              Mehr zum Thema:{" "}
              <Link href="/wissen" className="text-gold hover:underline">
                Alle Beiträge zur artgerechten Haltung
              </Link>
            </p>
          </div>

          {/* Related Posts */}
          <section className="mt-12 mb-8">
            <h3 className="text-xl font-serif text-loam mb-6">Das könnte dich auch interessieren:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/fellwechsel" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam">Fellwechsel verstehen →</span>
              </Link>
              <Link href="/blog/winterfuetterung" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam">Winterfütterung: Mehr Heu, weniger Sorgen →</span>
              </Link>
            </div>
          </section>

          {/* Quellen */}
          <div className="text-xs font-sans text-loam/50 leading-relaxed border-t border-loam/10 pt-6 mt-8">
            <p className="font-semibold text-loam/70 mb-2">Quellen</p>
            <ul className="space-y-1">
              <li>Cymbaluk, N. F., & Christison, G. I. (1990): Environmental effects on thermoregulation and nutrition of horses. <em>Veterinary Clinics of North America: Equine Practice</em></li>
              <li>Morgan, K. (1996): Thermoneutral zone and critical temperatures of horses. <em>Journal of Thermal Biology</em></li>
              <li>Ousey, J.C. et al. (1992): Thermoregulation and hair coat insulation. <em>Equine Veterinary Journal</em></li>
              <li>PM-Forum Digital (2020): Thermoregulation beim Pferd — Scheren oder wachsen lassen?</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <Disclaimer level={2} variant="article" />
        </div>
      </article>

      {/* Sticky Lead Magnet Banner */}
      <StickyLeadMagnetBanner />
    </main>
  )
}
