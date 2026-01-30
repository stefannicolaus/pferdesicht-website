"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { CheckCircle2, ArrowLeft, Sparkles, Droplets, AlertTriangle, Shield } from "lucide-react"
import { StickyLeadMagnetBanner } from "@/components/sticky-lead-magnet-banner"

export default function FellHufWinterPage() {
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
                "name": "Sollte ich mein Pferd im Winter täglich bürsten?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nein, intensives tägliches Bürsten kann die schützende Talgschicht des Winterfells entfernen. Grobes Abbürsten reicht – den Rest erledigt das Pferd selbst. Die Talgschicht macht das Fell wasserabweisend und lässt Schmutz von allein abfallen."
                }
              },
              {
                "@type": "Question",
                "name": "Ist Huffett im Winter notwendig?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bei gesunden Hufen unter normalen Bedingungen ist Huffett meist unnötig. Der Huf reguliert Feuchtigkeit selbst – Huffett versiegelt ihn in beide Richtungen und kann diese natürliche Funktion stören. Sinnvoll kann es bei chronisch nassen Paddocks oder sehr abrasiven Böden sein."
                }
              },
              {
                "@type": "Question",
                "name": "Wie entsteht Strahlfäule wirklich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Strahlfäule entsteht nicht durch Matsch allein, sondern durch die Kombination von dauerhafter Feuchtigkeit, Ammoniak aus Kot und Urin, mangelnder Bewegung und fehlenden Trockenphasen. Regelmäßiges Abäppeln (2-3x täglich) ist die effektivste Vorbeugung."
                }
              },
              {
                "@type": "Question",
                "name": "Sollte ich die Beine meines Pferdes nach dem Paddock abspritzen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nicht unbedingt. Nicht Nässe ist das Problem, sondern fehlende Trockenphasen. Matsch, der von selbst abtrocknet und abfällt, ist oft besser als tägliches Abspritzen, wenn die Beine danach nicht vollständig trocknen können."
                }
              },
              {
                "@type": "Question",
                "name": "Was verursacht Mauke bei Pferden?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mauke wird hauptsächlich durch chronische Feuchtigkeit ohne Trockenphasen, Ammoniak aus Kot und Urin sowie ein geschwächtes Immunsystem verursacht. Pferde mit Fesselbehang sind anfälliger, weil der Behang ein feucht-warmes Mikroklima schafft."
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
            "headline": "Strahlfäule, Mauke, kaputtes Fell: Was du im Winter wirklich gegen Matsch tun kannst",
            "description": "Was dein Pferd im Matsch wirklich braucht, welche Pflege-Routinen überflüssig sind – und warum weniger oft mehr ist. Für Box und Offenstall.",
            "image": "https://pferdesicht.com/images/thumbnail-fellwechsel-v3.png",
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03",
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
              "@id": "https://pferdesicht.com/blog/fell-huf-winter"
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
                Pflege
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-loam mb-6 leading-tight text-balance">
              Strahlfäule, Mauke, kaputtes Fell: Was du im Winter wirklich gegen Matsch tun kannst
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Was dein Pferd im Matsch wirklich braucht, welche Pflege-Routinen überflüssig sind – und warum weniger oft mehr ist. Für Box und Offenstall.
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-3 text-sm font-sans text-sage mb-8">
              <span>von Diana</span>
              <span>•</span>
              <span>9 Min. Lesezeit</span>
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
                  <span>Winterfell bürsten: Die Wahrheit über die Talgschicht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Huffett: Was der Huf wirklich braucht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Strahlfäule: Die echte Gefahr im Matsch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Nasse Beine und Mauke: Was sinnvoll ist – und was nicht</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Nützliche Tipps – und was du dir sparen kannst</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/thumbnail-fellwechsel-v3.png"
              alt="Pferd steht im matschigen Winterpaddock"
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
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">E</span>s ist Februar. Der Paddock ist eine einzige Matschlandschaft. Die Hufe deines Pferdes verschwinden bei jedem Schritt knöcheltief im Schlamm. Und während du dort stehst und zusiehst, geht in deinem Kopf die Checkliste los:
            </p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Strahlfäule checken. Hufe säubern. Huffett auftragen. Beine abspritzen? Oder lieber trocknen lassen? Und das Fell – soll ich bürsten oder zerstöre ich damit die Fettschicht?
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Kennst du dieses Gefühl, wenn du mehr Fragen als Antworten hast – und jeder im Stall es anders macht?
          </p>

          <div className="bg-sage/10 rounded-sm p-6 my-8 italic text-loam/70 font-sans">
            <p className="mb-2">„Ich fette die Hufe jeden Tag ein."</p>
            <p className="mb-2">„Ich wasche die Beine nach jedem Paddockgang ab."</p>
            <p>„Bürsten im Winter? Niemals! Das zerstört die Fettschicht!"</p>
          </div>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Und du stehst dazwischen und fragst dich: Was davon stimmt eigentlich? Was hilft wirklich – und was ist gut gemeinte Gewohnheit, die vielleicht mehr schadet als nützt?
          </p>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Lass uns das heute gemeinsam sortieren, damit du weißt, worauf es wirklich ankommt. Und worauf nicht.
          </p>

          {/* Key Takeaway #1 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #1</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Dein Pferd hat ein eingebautes Pflegesystem.</strong> Das Winterfell schützt sich selbst – mit einer Talgschicht, die Wasser abweist und Schmutz abperlen lässt. Deine Aufgabe ist nicht, dieses System zu optimieren. Sondern es nicht zu sabotieren.
            </p>
          </aside>

          {/* Section 1: Winterfell bürsten */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Winterfell bürsten: Die Wahrheit über die Talgschicht
            </h2>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das Winterfell deines Pferdes ist mehr als nur eine dicke Haarschicht. Es ist ein ausgeklügeltes Schutzsystem – mit einer Talgschicht (Sebum), die das Fell wasserabweisend macht.
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Die Talgschicht schützt das Fell vor Nässe. Zu intensives Bürsten entfernt sie jedoch.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Stell dir das so vor: Diese Fettschicht ist wie eine unsichtbare Regenjacke. Sie sorgt dafür, dass Wasser abperlt, anstatt ins Fell einzudringen. Und sie hat noch eine zweite Funktion: Schmutz haftet an der Fettschicht, nicht an der Haut. Wenn dein Pferd sich bewegt, fällt der getrocknete Schmutz von selbst ab.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Das Problem: Wenn du jeden Tag intensiv bürstest – mit harten Bürsten, viel Druck, gründlich bis auf die Haut – entfernst du genau diese Schutzschicht. Das Fell verliert seine Wasserabweisung. Und du musst noch mehr bürsten, weil der Schmutz jetzt tiefer eindringt.
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
              <Sparkles className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was du tun könntest:
                </h3>
                <ul className="text-sm font-sans text-loam/70 leading-relaxed space-y-2">
                  <li>• Groben Schmutz mit einer weichen Bürste entfernen</li>
                  <li>• Nur die Bereiche, wo die Ausrüstung anliegt, gründlicher reinigen: Sattellage, Sattelgurtlage, Kopf, Beine</li>
                  <li>• Den Rest in Ruhe lassen</li>
                  <li>• Warten, bis der Schlamm getrocknet ist – dann fällt er oft von selbst ab</li>
                </ul>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Offenstallpferde sehen oft aus wie Schlammmonster. Und das ist okay – außer sie haben eine Decke an. Dann musst du die Stellen unter der Decke sauber halten, damit nichts scheuert. (Wann eine Decke überhaupt sinnvoll ist, habe ich im <Link href="/blog/pferd-eindecken-winter" className="text-gold hover:underline">Beitrag übers Eindecken</Link> erklärt.)
          </p>

          <p className="text-xl font-serif text-loam/90 leading-relaxed my-8 text-center italic py-4">
            Du kämpfst nicht gegen Schmutz. Du arbeitest mit einem Fell, das sich selbst reinigt – wenn du es lässt.
          </p>

          {/* Key Takeaway #2 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #2</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Intensives Bürsten kann mehr schaden als nützen.</strong> Die Talgschicht braucht mehrere Tage bis Wochen, um sich zu regenerieren. In dieser Zeit ist das Fell weniger geschützt. Im Winter gilt: Grob abbürsten reicht. Den Rest erledigt das Pferd selbst.
            </p>
          </aside>

          {/* Section 2: Huffett */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Huffett: Was der Huf wirklich braucht
            </h2>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hier wird es kontrovers. Und ja, ich war selbst mal in der Fraktion „viel Fett hilft viel".
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Heute? Die Hufe meines Pferdes haben seit vielen Jahren weder Huffett noch Huföl gesehen. Und ich habe keinen Unterschied bemerkt. Nur in meinem Geldbeutel.
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Huffett auf nasse Hufe ist wie Nagellack auf nasse Fingernägel – sieht gut aus, hält aber nicht.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Was ich erst im Laufe der Zeit und durch die Beschäftigung mit dem Thema verstanden habe: Der Huf ist wie ein Schwamm. Er nimmt Feuchtigkeit auf UND gibt sie ab. Das ist ein natürlicher Regulationsmechanismus. Huffett versiegelt den Huf – in beide Richtungen.
            </p>
          </section>

          {/* Scientific Fact Box - Huffett */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was ich in der Praxis beobachtet habe:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Die meisten Huffette basieren auf Mineralöl. Sie bilden einen Film auf dem Huf, der die Poren verschließt. Bei bereits trockenen Hufen kann das kontraproduktiv sein: Der Huf kann keine Feuchtigkeit mehr aufnehmen – und trocknet noch weiter aus. Viele Hufpfleger und Barhuf-Experten empfehlen daher: Nur bei konkretem Bedarf fetten, nicht routinemäßig.
                </p>
              </div>
            </div>
          </aside>

          {/* Humor Element */}
          <blockquote className="relative my-12 py-8 text-center">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
            <p className="relative text-2xl md:text-3xl font-serif italic text-loam leading-relaxed mb-4 text-balance px-8">
              Huffett-Industrie: „Benutze mich täglich!"
            </p>
            <p className="relative text-2xl md:text-3xl font-serif italic text-loam leading-relaxed text-balance px-8">
              Der Huf: „Wer hat dich gefragt?"
            </p>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>
          </blockquote>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
            Ich will nicht sagen, dass Huffett nie sinnvoll ist. Es gibt Situationen, in denen es Sinn machen kann:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Bei chronisch nassen Paddocks – als Schutzschicht VOR dem Aufenthalt im Matsch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Bei Boxenpferden, die auf ammoniakhaltigem Einstreu stehen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span className="font-sans text-loam/70">Bei sehr rauen, grobkörnigen Sandböden, die das Hufhorn stark abreiben</span>
            </li>
          </ul>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Aber: Als tägliche Routine nach dem Putzen? Bei gesunden Hufen unter normalen Bedingungen? Da tust du deinem Pferd und deinem Geldbeutel einen Gefallen, wenn du es einfach weglässt.
          </p>

          {/* Huffett Table */}
          <div className="my-8 overflow-hidden rounded-sm border border-loam/20">
            <div className="bg-sage/20 px-6 py-3">
              <h4 className="font-mono font-bold text-loam text-sm uppercase tracking-wide">Wann Huffett tatsächlich Sinn macht</h4>
            </div>
            <div className="divide-y divide-loam/10">
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-white">
                <span className="font-sans text-loam/70 text-sm">Gesunde Hufe, normale Bedingungen</span>
                <span className="font-sans text-loam font-semibold text-sm">Nein</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-sage/5">
                <span className="font-sans text-loam/70 text-sm">Nach dem Putzen als „Pflege"</span>
                <span className="font-sans text-loam font-semibold text-sm">Nein</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-white">
                <span className="font-sans text-loam/70 text-sm">Chronisch nasser Paddock (vor dem Rausgehen)</span>
                <span className="font-sans text-gold font-semibold text-sm">Kann helfen</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-sage/5">
                <span className="font-sans text-loam/70 text-sm">Sehr raue, grobkörnige Sandböden</span>
                <span className="font-sans text-gold font-semibold text-sm">Situativ sinnvoll</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-white">
                <span className="font-sans text-loam/70 text-sm">Für Turniere/Optik</span>
                <span className="font-sans text-loam/50 font-semibold text-sm italic">Wenn&apos;s schön aussehen soll</span>
              </div>
            </div>
          </div>

          {/* Key Takeaway #3 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #3</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Huffett versiegelt den Huf in beide Richtungen.</strong> Das verhindert nicht nur, dass Feuchtigkeit eindringt – es verhindert auch, dass der Huf natürlich regulieren kann. Bei gesunden Hufen unter normalen Bedingungen: Geld sparen, Huf in Ruhe lassen.
            </p>
          </aside>

          {/* Section 3: Strahlfäule */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Strahlfäule: Die echte Gefahr im Matsch
            </h2>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Jetzt kommen wir zu etwas, das wirklich wichtig ist.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Strahlfäule entsteht nicht einfach durch Matsch. Wenn das so wäre, hätte jedes Offenstallpferd im Winter Strahlfäule. Die meisten haben sie nicht.
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed mb-6 text-center italic py-4">
              Strahlfäule entsteht häufig durch die Kombination mehrerer Faktoren – meist nicht durch Matsch allein.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Hier ist das Trio der Ursachen:
            </p>

            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-xs font-bold text-loam">1</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Dauerhaft feuchte Hufe</strong> (Matsch, nasses Einstreu im Unterstand)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-xs font-bold text-loam">2</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Mangelnde Bewegung</strong> (Hufmechanismus funktioniert nicht richtig)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold/20 rounded-full flex-shrink-0 text-xs font-bold text-loam">3</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Keine Trockenphasen</strong> (Huf kann nicht abtrocknen, keine trockenen Bereiche auf dem Paddock)</span>
              </li>
            </ol>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Und ein vierter Faktor, den viele unterschätzen: <strong className="text-loam">Ammoniak.</strong>
            </p>
          </section>

          {/* Scientific Fact Box - Ammoniak */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Was dabei im Huf passiert:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Ammoniak entsteht, wenn Bakterien Kot und Urin zersetzen. Ammoniak ist gut wasserlöslich – in feuchter Umgebung bildet es eine Lauge, die das Hufhorn direkt angreift und aufweicht. In das geschädigte Horn können dann die Fäulnisbakterien eindringen.
                </p>
              </div>
            </div>
          </aside>

          <p className="text-base font-sans text-loam/70 leading-relaxed mb-8">
            Ich habe Strahlfäule vermehrt bei Boxenpferden beobachtet, wo zu wenig gemistet wurde und das Einstreu nicht häufig genug gewechselt wurde. So standen die Pferde viel auf nassem, ammoniakhaltigem Einstreu. Das war keine Frage des Matsches – es war eine Frage der Hygiene.
          </p>

          {/* Box vs Offenstall */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif text-loam mb-4">Pferde aus der Box</h3>
              <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
                <strong className="text-loam">Das Risiko:</strong> Wenn die Box nicht regelmäßig gemistet wird, steht das Pferd stundenlang auf uringetränktem Einstreu. Ammoniak greift das Hufhorn an.
              </p>
              <p className="text-base font-sans text-loam/70 leading-relaxed mb-2">
                <strong className="text-loam">Was du tun könntest:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Auf saubere, trockene Einstreu achten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Je nachdem wie lange dein Pferd in der Box steht: Nasse Stellen mehrmals täglich entfernen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Bei Matratzen-Einstreu kritisch sein – darunter sammelt sich oft Feuchtigkeit</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif text-loam mb-4">Pferde im Offenstall</h3>
              <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
                <strong className="text-loam">Das Risiko:</strong> Matschige Bereiche, in denen sich Kot und Urin sammeln – besonders vor dem Unterstand, an der Tränke, an Futterstellen.
              </p>
              <p className="text-base font-sans text-loam/70 leading-relaxed mb-2">
                <strong className="text-loam">Was du tun könntest:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Regelmäßig abäppeln (2-3x täglich macht einen messbaren Unterschied!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Trockene Bereiche schaffen, auf die sich das Pferd zurückziehen kann</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-loam/70">Kritische Stellen mit Paddockplatten oder Schotter befestigen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Takeaway #4 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #4</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Strahlfäule ist keine „Matsch-Krankheit".</strong> Sie entsteht durch das Zusammenspiel von Feuchtigkeit, Ammoniak, mangelnder Bewegung und fehlenden Trockenphasen. 2-3x täglich abäppeln macht den Unterschied.
            </p>
          </aside>

          {/* Diana's Friesen Story */}
          <div className="bg-sage/10 rounded-sm p-8 my-12 border-l-4 border-sage">
            <p className="text-base font-sans text-loam/80 leading-relaxed mb-4">
              Ich habe einen Friesen, der früher regelmäßig Mauke bekam. Im alten Stall war das „normal" – fast alle Pferde hatten das. Erst nach ein paar Jahren im neuen Offenstall fiel mir auf: keine Mauke mehr. Was war anders?
            </p>
            <p className="text-base font-sans text-loam/80 leading-relaxed mb-4">
              Die Lösung war simpel: Im alten Stall wurde 1x am Tag abgeäppelt. Im Winter, bei matschigem oder gefrorenem Boden, oft noch seltener. Im neuen Stall? Konsequent 2-3x täglich.
            </p>
            <p className="text-lg font-serif italic text-loam">
              Bessere Hygiene. Das war alles.
            </p>
          </div>

          {/* Section 4: Mauke */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Nasse Beine und Mauke: Was sinnvoll ist – und was nicht
            </h2>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6 italic">
              „Nach dem Paddock immer die Beine abspritzen und trockenreiben!"
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Kennst du diesen Ratschlag? Er klingt logisch. Schlamm ab, Beine trocken, Problem gelöst.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Aber hier ist die Sache: <strong className="text-loam">Nicht Nässe ist das Problem, sondern dauerhaft feuchte Haut.</strong>
            </p>
          </section>

          {/* Abspritzen Table */}
          <div className="my-8 overflow-hidden rounded-sm border border-loam/20">
            <div className="bg-sage/20 px-6 py-3">
              <h4 className="font-mono font-bold text-loam text-sm uppercase tracking-wide">Wann Abspritzen Sinn macht – und wann nicht</h4>
            </div>
            <div className="divide-y divide-loam/10">
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-white">
                <span className="font-sans text-loam/70 text-sm">Matsch, der von selbst abtrocknen würde</span>
                <span className="font-sans text-loam font-semibold text-sm">Lieber warten</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-sage/5">
                <span className="font-sans text-loam/70 text-sm">Dicke Krusten, die die Haut reizen</span>
                <span className="font-sans text-gold font-semibold text-sm">Vorsichtig abspülen</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-white">
                <span className="font-sans text-loam/70 text-sm">Vor dem Eindecken (Fell muss trocken sein)</span>
                <span className="font-sans text-gold font-semibold text-sm">Aber dann vollständig trocknen lassen</span>
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 py-3 bg-sage/5">
                <span className="font-sans text-loam/70 text-sm">Täglich nach dem Paddock „weil man das so macht"</span>
                <span className="font-sans text-loam font-semibold text-sm">Meist unnötig</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-serif text-loam mb-4">Was Mauke wirklich verursacht</h3>
          <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
            Die häufigsten Auslöser:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-loam/70"><strong className="text-loam">Chronische Feuchtigkeit</strong> ohne Trockenphasen</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-loam/70"><strong className="text-loam">Ammoniak</strong> aus Kot und Urin</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="font-sans text-loam/70"><strong className="text-loam">Geschwächtes Immunsystem</strong></span>
            </li>
          </ul>

          <p className="text-base font-sans text-loam/70 leading-relaxed">
            Pferde mit viel Fesselbehang (Friesen, Tinker, Kaltblüter) sind anfälliger – nicht weil der Behang „schmutzig" ist, sondern weil er ein feucht-warmes Mikroklima schafft, in dem Bakterien gedeihen.
          </p>

          {/* Key Takeaway #5 */}
          <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">Key Takeaway #5</p>
            <p className="text-base font-sans text-loam leading-relaxed">
              <strong>Nicht Nässe ist das Problem – sondern fehlende Trockenphasen.</strong> Tägliches Abspritzen kann mehr schaden als nützen, wenn die Beine danach nicht vollständig trocknen. Matsch, der von selbst abtrocknet und abfällt, ist oft die bessere Lösung.
            </p>
          </aside>

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

          {/* Section 5: Nützliche Tipps */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">
              Nützliche Tipps – und was du dir sparen kannst
            </h2>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Was wäre, wenn 80% deiner Winter-Pflegeroutine überflüssig wäre – und die restlichen 20% das Einzige, was wirklich zählt?
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-4">
              Hier sind die 20%:
            </p>

            <ol className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold rounded-full flex-shrink-0 text-xs font-bold text-white">1</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Regelmäßig abäppeln</strong> – 2-3x täglich, besonders im Winter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold rounded-full flex-shrink-0 text-xs font-bold text-white">2</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Trockene Rückzugsbereiche</strong> schaffen – ob Box oder Offenstall</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold rounded-full flex-shrink-0 text-xs font-bold text-white">3</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">Hufe regelmäßig auskratzen</strong> – Schmutz raus, Strahl kontrollieren</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-gold rounded-full flex-shrink-0 text-xs font-bold text-white">4</span>
                <span className="font-sans text-loam/70"><strong className="text-loam">In Ruhe lassen</strong>, was funktioniert – das Fell, die Hufe, das System</span>
              </li>
            </ol>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Der Rest? Kannst du dir oft sparen.
            </p>

            <p className="text-xl font-serif text-loam/90 leading-relaxed my-8 text-center italic py-4">
              „Ein bisschen Matsch hat noch keinem Pferd geschadet." – Stimmt. Aber chronische Nässe ist kein bisschen Matsch.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Der Unterschied liegt im Detail: in den Trockenphasen, in der Hygiene, in dem, was du NICHT tust.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Dein Pferd hat ein von der Natur eingebautes System, das sich lange bewährt hat. Fell, das sich selbst reinigt. Hufe, die Feuchtigkeit regulieren. Eine Haut, die sich an wechselnde Bedingungen anpasst.
            </p>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Deine Aufgabe ist nicht, dieses System zu verbessern. Sondern die Bedingungen zu schaffen, unter denen es funktionieren kann. Und das ist eine gute Nachricht. Denn es bedeutet: Du musst nicht in allen Bereichen mehr tun, wenn es um die Fell- und Hufpflege im Winter geht. Du darfst auch an bestimmten Stellen mit ruhigem Gewissen mal weniger tun. Du darfst der Evolution deines Pferdes vertrauen, die das meiste schon für dich erledigt hat.
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
                  <p className="font-semibold text-loam mb-1">Eingebautes Schutzsystem</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Das Winterfell hat eine Talgschicht, die schützt und selbst reinigt. Nicht optimieren – nicht sabotieren.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #2
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Weniger bürsten</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Intensives Bürsten entfernt die Schutzschicht. Im Winter: Grob abbürsten reicht.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #3
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Huffett hinterfragen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Versiegelt in beide Richtungen. Bei gesunden Hufen meist unnötig – manchmal kontraproduktiv.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #4
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Strahlfäule = Hygiene</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Entsteht durch Feuchtigkeit + Ammoniak + mangelnde Bewegung. 2-3x täglich abäppeln macht den Unterschied.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gold/20 rounded-full flex-shrink-0 text-sm font-bold text-loam">
                  #5
                </span>
                <div>
                  <p className="font-semibold text-loam mb-1">Trockenphasen statt Abspritzen</p>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    Nicht Nässe ist das Problem, sondern fehlende Trockenphasen. Matsch darf trocknen und abfallen.
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
              Du hast Fragen zur Fell- oder Hufpflege?{" "}
              <Link href="/kontakt" className="text-gold hover:underline">
                Schreib mir eine Nachricht →
              </Link>
            </p>
          </div>

          {/* Related Posts */}
          <section className="mt-12 mb-8">
            <h3 className="text-xl font-serif text-loam mb-6">Das könnte dich auch interessieren:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/pferd-eindecken-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam">Eindecken im Winter →</span>
              </Link>
              <Link href="/blog/fuetterung-winter" className="p-4 bg-sage/10 rounded-lg hover:bg-sage/20 transition-colors">
                <span className="font-serif text-loam">Fütterung im Winter →</span>
              </Link>
            </div>
          </section>

          {/* Quellen */}
          <div className="text-xs font-sans text-loam/50 leading-relaxed border-t border-loam/10 pt-6 mt-8">
            <p className="font-semibold text-loam/70 mb-2">Quellen</p>
            <ul className="space-y-1">
              <li>• Praktische Erfahrungen aus 20 Jahren Pferdehaltung (Box- und Offenstallhaltung)</li>
              <li>• Austausch mit Hufpflegern und Barhuf-Experten</li>
              <li>• Veterinärmedizinische Grundlagen zur Hufphysiologie</li>
              <li>• Beobachtungen zur Strahlfäule- und Mauke-Prävention in verschiedenen Haltungsformen</li>
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
