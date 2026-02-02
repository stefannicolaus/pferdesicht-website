"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Shield, Brain, Heart, Sparkles, X, CheckCircle2, Check } from "lucide-react"
import { HeroTextOverlay } from "@/components/features/HeroTextOverlay"
import { HeroLeadMagnetBox } from "@/components/features/HeroLeadMagnetBox"

export default function PferdesichtPage() {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false)
  const [heroSubmitted, setHeroSubmitted] = useState(false)

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setHeroSubmitted(true)
    setTimeout(() => {
      setIsHeroModalOpen(false)
      setHeroSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Texture Overlay - low z-index to stay behind modals/menus */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05] bg-paper-grain" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] lg:h-[85vh] lg:min-h-[600px]">
        {/* Hintergrundbild - Desktop */}
        <Image
          src="/images/heroes/hero-herde-simple.png"
          alt="Pferde im Offenstall"
          fill
          priority
          className="hidden md:block object-cover object-[center_70%]"
          sizes="100vw"
        />
        {/* Hintergrundbild - Mobile */}
        <Image
          src="/images/heroes/hero-mobile.jpg"
          alt="Pferde im Offenstall"
          fill
          priority
          className="md:hidden object-cover object-bottom"
          sizes="100vw"
        />

        {/* Gradient-Overlay für bessere Lesbarkeit - volle Breite */}
        <div className="absolute inset-0 bg-gradient-to-b from-loam/90 via-loam/60 to-transparent md:bg-gradient-to-r md:from-loam/80 md:via-loam/40 md:to-loam/10" />

        {/* Content Layer ÜBER dem Bild */}
        <div className="absolute inset-0">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-[65fr_35fr] h-full">
            <div className="relative">
              <HeroTextOverlay />
            </div>
            <div className="relative">
              <HeroLeadMagnetBox />
            </div>
          </div>

          {/* Mobile: Gestapelt */}
          <div className="lg:hidden h-full flex flex-col">
            <div className="relative flex-1">
              <HeroTextOverlay />
            </div>
            <HeroLeadMagnetBox />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GASLIGHTING SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/thumbnails/thumbnail-mindset.png"
                alt="Inniger Moment zwischen Mensch und Pferd"
                fill
                className="object-cover warm-film-grain"
              />
            </div>
            
            <div className="order-2 lg:order-1">
              <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                DAS KENNST DU VIELLEICHT
              </span>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam leading-tight mb-4 sm:mb-6">
                &quot;Du denkst zu viel.&quot; Mein Lieblingssatz.{" "}
                <span className="block sm:inline italic text-sage">Gleich nach &quot;Das haben wir schon immer so gemacht.&quot;</span>
              </h2>
              
              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Vielleicht kommen dir diese Sätze bekannt vor.
              </p>
              
              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Ich hab sie alle gehört. Z.B. bei einer Tierärztin, die sagte: &apos;Dicke Beine sind normal bei dem.&apos;
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Spoiler: Waren sie nicht.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Und das ist nur eines von unzähligen Beispielen aus meinen 30 Jahren die ich mit Pferden verbringe.
              </p>

              <p className="text-loam/75 font-sans font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                Aber weißt du was? Auch wenn alle anderen mir was anderes erzählt haben – meistens war mein Bauchgefühl trotzdem richtig.
              </p>
              
              <div className="bg-loam rounded-sm p-5 sm:p-6 md:p-8">
                <p className="font-serif text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  Wenn du hinschaust und hinterfragst, machst du nichts falsch.{" "}
                  <span className="text-gold font-medium">Du machst genau das Richtige.</span>
                </p>
              </div>

              <p className="text-loam/75 font-sans font-light leading-relaxed mt-5 sm:mt-6 text-sm sm:text-base italic">
                Das nagende Gefühl, vielleicht doch etwas zu übersehen? Es ist der beste Schutz für dein Pferd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUOTE CARDS SECTION */}
      {/* ============================================ */}
      <section className="py-8 sm:py-12 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl md:text-2xl font-serif text-loam text-center mb-2">
            Die Sätze, bei denen du innerlich die Augen verdrehst.
          </h3>
          <p className="text-sm md:text-base font-sans text-loam/60 text-center mb-6">
            (Und bei denen du dich vielleicht manchmal fragst, ob du die Einzige bist die so tickt.)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Das ist halt so.",
              "Du bist zu pingelig.",
              "Der verarscht dich nur.",
              "Das Pferd soll funktionieren.",
            ].map((quote, i) => (
              <div key={i} className="bg-white rounded-sm p-4 sm:p-5 border-l-4 border-gold/40 shadow-sm">
                <p className="font-serif text-loam/70 text-sm italic">&quot;{quote}&quot;</p>
              </div>
            ))}
          </div>

          {/* Hidden Pain Point */}
          <p className="text-center text-loam/75 font-sans text-sm mt-8 mb-4">
            Und unter all diesen Sätzen liegt einer, den niemand ausspricht – aber den du trotzdem zwischen den Zeilen raushörst:
          </p>

          <div className="bg-loam rounded-sm p-5 sm:p-6 max-w-md mx-auto">
            <p className="font-serif text-gold text-base sm:text-lg italic text-center">
              „Wenn du anders denkst, bist DU das Problem."
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] md:bg-[center_15%] bg-scroll md:bg-fixed"
          style={{ backgroundImage: "url('/horse-standing-peaceful-at-sunset-golden-hour-medi.jpg')" }}
        />
        {/* Cream Overlay */}
        <div className="absolute inset-0 bg-[#faf8f5]/70" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              WAS DU HIER FINDEST
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam mb-3 sm:mb-4">
              Sortiertes Wissen. Schluss mit dem Meinungs-Chaos.
            </h2>
            <p className="text-loam/70 font-sans font-light text-sm sm:text-base">
              Kein Hype &apos;5 Tipps die dein Leben verändern werden&apos; – sondern das, was ich im Laufe der Zeit gelernt habe. Und was mich vermutlich inzwischen mehrere Zehntausende Euro Lehrgeld gekostet hat. (Das darf mein Mann nicht wissen 😅)
            </p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white/90 rounded-sm p-6 border border-loam/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center border border-loam/10">
                  <Shield className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-loam">Orientierung im Chaos</h3>
              </div>
              <p className="text-loam/70 font-sans font-light leading-relaxed text-sm sm:text-base">
                &apos;4x im Jahr entwurmen&apos; – Mythos.<br/>
                &apos;Das Gras hat jetzt alles, Mineralfutter kann weg&apos; – wenn&apos;s so einfach wäre.<br/>
                Ich sag dir, was stimmt. Und wenn ich nicht sicher bin, sag ich das auch.
              </p>
              <p className="text-sage font-sans font-medium italic text-sm mt-3">→ Die Ruhe, nicht mehr raten zu müssen.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/90 rounded-sm p-6 border border-loam/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-loam/10">
                  <Heart className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-loam">Antworten, die dir helfen</h3>
              </div>
              <p className="text-loam/70 font-sans font-light leading-relaxed text-sm sm:text-base">
                &apos;Warum weidest du über 7 Wochen an?&apos; – Weil Darmbakterien Zeit brauchen, sich umzustellen.<br/>
                &apos;Warum steht der ohne Decke draußen?&apos; – Weil ein Pferd mit intaktem Fell normalerweise locker bis -5°C ohne klarkommt.<br/>
                Fundierte Antworten. Für deinen nächsten Stall-Smalltalk.
              </p>
              <p className="text-sage font-sans font-medium italic text-sm mt-3">→ Ruhig und sachlich erklären können.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/90 rounded-sm p-6 border border-loam/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center border border-loam/10">
                  <Brain className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-loam">Hilfe, wenns mal komplizierter wird</h3>
              </div>
              <p className="text-loam/70 font-sans font-light leading-relaxed text-sm sm:text-base">
                Der Tierarzt sagt A. Die Therapeutin sagt B. Google sagt: Panik.<br/><br/>
                Ich zeig dir, wie ich vorgehe, wie ich entscheide und wem ich vertraue.
              </p>
              <p className="text-sage font-sans font-medium italic text-sm mt-3">→ Handlungsfähig, auch wenn es brennt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUIZ SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-sage relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <span className="text-gold font-sans text-xs font-semibold uppercase tracking-widest mb-4 block">
                Dein persönlicher Frühlings-Fahrplan
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6 sm:mb-8 leading-tight">
                Fellwechsel, Anweiden, Parasiten – was ist jetzt wichtig für <span className="italic">DEIN</span> Pferd?
              </h2>

              {/* CTA Button */}
              <Link
                href="/quiz"
                className="min-h-[48px] py-4 px-8 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-sm uppercase tracking-wide rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                Quiz starten
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Click Triggers */}
              <p className="mt-4 font-sans text-sm text-[#f5f2ed]/70">
                Kostenlos · 2 Minuten · Report per E-Mail
              </p>
            </div>

            {/* Right: Benefits Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              {/* Benefits Header */}
              <p className="font-sans text-sm text-[#f5f2ed] font-semibold uppercase tracking-wide mb-6">
                Was du bekommst:
              </p>

              <ul className="space-y-4">
                {[
                  "8 kurze Fragen zu deinem Pferd",
                  "Persönliche Risiko-Ampel: Grün, Gelb oder Rot",
                  "Wochen-Kalender Februar bis Mai",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-sans text-base text-[#f5f2ed] font-normal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DIANA SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
            
            <div className="lg:col-span-2 text-center lg:text-left">
              <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                ÜBER MICH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-loam mb-4 sm:mb-6">Ich bin Diana.</h2>
              
              <div className="relative w-48 sm:w-64 md:w-72 lg:w-full max-w-[280px] aspect-[3/4] rounded-sm overflow-hidden shadow-lg ring-4 ring-sage/20 mb-5 sm:mb-6 mx-auto lg:mx-0">
                <Image
                  src="/images/Diana_Pferdesicht.jpeg"
                  alt="Diana - Gründerin von Pferdesicht"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <Link 
                href="/ueber-mich" 
                className="inline-flex items-center gap-2 mt-5 sm:mt-6 text-gold font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-[#b8956a] transition-colors min-h-[44px]"
              >
                Meine ganze Geschichte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white rounded-sm p-5 sm:p-6 md:p-8 border-l-4 border-gold mb-5 sm:mb-6 shadow-sm">
                <p className="font-serif text-loam text-base sm:text-lg md:text-xl italic leading-relaxed">
                  Ich weiß, wie es sich anfühlt, wenn alle was anderes sagen – und du dich allein gelassen fühlst mit deinen Fragen.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-loam/85 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Mein erstes eigenes Pferd – Ramses. Der Hufschmied, den alle empfohlen haben. Nach einem Jahr: Hufprobleme, die es vorher nicht gab. Drei Hufschmiede später wusste ich: Der erste hatte keine Ahnung – aber ich hatte keinen Vergleich.
                </p>
                
                <p>
                  Mein Mann Stefan und ich haben 15 Jahre lang Hempura betrieben – ein natürliches Zusatzfutter aus Nutzhanf für Pferde. In dieser Zeit habe ich mit ca. 2.500 unterschiedlichen Experten (unsere Kooperationspartner) gesprochen: Tierärzte, Therapeuten, Hufschmiede, Trainer. Alle mit anderen Ansätzen, anderen Überzeugungen. Manche widersprachen sich komplett. Das hat mich gezwungen, selbst zu denken. Mir eine eigene Meinung zu bilden. Heute weiß ich: Diese Perspektive ist mein wertvollstes Werkzeug.
                </p>
                
                <p className="text-loam font-medium text-sm sm:text-base md:text-lg">
                  Dabei hab ich eins gelernt: Je mehr ich lerne und verstehe, umso weniger muss ich auf das Prinzip Hoffnung vertrauen.
                </p>
              </div>

              {/* Stats 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { num: "30", text: "Jahre mit Pferden. Ich zeige dir die Abkürzung." },
                  { num: "16", text: "Jahre Reittherapie. Ich durfte lernen, was Pferde zeigen, wenn wir wirklich hinschauen." },
                  { num: "2.500", text: "Experten-Gespräche. Ich weiß inzwischen, wer wirklich hilft – und wer nur gut klingt. Diesen Blick gebe ich an dich weiter." },
                  { num: "5", text: "Jahre Zusammenarbeit mit einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Wenn zwischen Pferd & Mensch echtes Vertrauen da ist, wird alles leichter. Am Boden. Im Sattel. Im ganzen Miteinander." },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-sm p-4 shadow-sm border-l-4 border-gold/50 flex gap-4 items-start">
                    <div className="text-3xl sm:text-4xl font-light text-gold flex-shrink-0 leading-none">{item.num}</div>
                    <div className="text-xs sm:text-sm text-loam/75 font-sans leading-relaxed">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] md:bg-[center_15%] bg-scroll md:bg-fixed"
          style={{ backgroundImage: "url('/horse-standing-peaceful-at-sunset-golden-hour-medi.jpg')" }}
        />
        {/* Cream Overlay */}
        <div className="absolute inset-0 bg-[#faf8f5]/70" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              STIMMEN
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam">
              Was andere sagen.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                transformation: "Chaos zu Klarheit",
                quote: "Ich bin mit drei verschiedenen Diagnosen zu Diana gekommen. Sie hat mir nicht gesagt, wer Recht hat – sondern wie ich das selbst herausfinde. Das war mehr wert als die ganzen Behandlungen zusammen.",
                author: "Martina, Niedersachsen",
              },
              {
                transformation: "Nächte zu Ruhe",
                quote: "Ich schlaf wieder durch. Klingt banal, ist es aber nicht.",
                author: "Julia, Österreich",
              },
              {
                transformation: "Hilflos zu Handlungsfähig",
                quote: "Drei Jahre hab ich mir anhören müssen: 'Dicke Beine sind bei dem halt normal.' Waren sie nicht. Ich brauchte nur jemanden, der mir zeigt, worauf ich achten muss.",
                author: "Sandra, Bayern",
              },
              {
                transformation: "Unsicher zu Selbstbewusst",
                quote: "Letzte Woche hat mein Tierarzt ein Medikament empfohlen. Ich hab nachgefragt, warum genau das. Er war überrascht – aber hat's erklärt. Früher hätt ich einfach ja gesagt.",
                author: "Birgit, Schweiz",
              },
              {
                transformation: "Überfordert zu Orientiert",
                quote: "Endlich sagt mir jemand: Das ist Fakt, das ist Meinung, das ist Mythos.",
                author: "Kathrin, NRW",
              },
              {
                transformation: "Außenseiter zu Ansprechpartner",
                quote: "Neulich kam eine Stallkollegin zu mir: 'Du kennst dich doch aus – was würdest du bei Kotwasser machen?' Das wär vor einem Jahr undenkbar gewesen.",
                author: "Anja, Brandenburg",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white/90 rounded-sm p-5 sm:p-6 flex flex-col border border-loam/5">
                <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3">
                  {t.transformation}
                </span>
                <blockquote className="font-serif text-loam/85 italic leading-relaxed flex-grow mb-3 sm:mb-4 text-sm sm:text-base">
                  &quot;{t.quote}&quot;
                </blockquote>
                <p className="text-loam/50 text-xs sm:text-sm font-sans pt-2 sm:pt-3 border-t border-loam/10">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG PREVIEW SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              IM BLOG
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam">
              Sortiertes Wissen. Frisch für dich.
            </h2>
            <p className="text-loam/70 font-sans font-light text-sm sm:text-base max-w-2xl mx-auto mt-3 sm:mt-4">
              Hier schreibe ich über das, was mich gerade beschäftigt. Und über die Fragen, die ich am häufigsten höre.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                image: "/images/thumbnails/thumbnail-training.png",
                tag: "Fellwechsel",
                title: "Was wirklich passiert, wenn dein Pferd sein Fell verliert",
                meta: "8 Min Lesezeit",
                href: "/blog/fellwechsel",
              },
              {
                image: "/images/thumbnails/thumbnail-winter-v3.png",
                tag: "Anweiden",
                title: "Anweiden ohne schlaflose Nächte",
                meta: "10 Min Lesezeit",
                href: "/blog/anweiden",
              },
              {
                image: "/images/thumbnails/thumbnail-mindset.png",
                tag: "Parasiten",
                title: "Warum 4x im Jahr entwurmen so 1980 ist",
                meta: "12 Min Lesezeit",
                href: "/blog/parasiten",
              },
            ].map((post, i) => (
              <article key={i} className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
                <Link href={post.href} className="block">
                  <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-loam uppercase backdrop-blur-sm">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-sans text-sage mb-2 sm:mb-3">
                      <span>{post.meta}</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-serif text-loam mb-2 sm:mb-3 leading-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-bold font-sans uppercase tracking-widest border-b border-gold/50 pb-1 text-loam group-hover:border-gold transition-colors">
                      Weiterlesen
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gold font-sans font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-[#b8956a] transition-colors min-h-[44px]"
            >
              Alle Artikel lesen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-loam">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-[#f5f2ed] text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4">
              Frühling 2026
            </span>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
              Vertrau nicht dem Zufall. <span className="italic text-gold">Vertrau deinem Wissen.</span>
            </h2>
          </div>

          {/* Centered CTA Card */}
          <div className="bg-sage/30 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 max-w-xl mx-auto">
            {/* Questions Block - Quote Style */}
            <div className="border-l-2 border-gold/50 pl-4 ml-2 mb-6">
              <p className="font-sans text-sm text-[#f5f2ed]/80 font-medium mb-3">
                Noch unsicher? Diese Fragen klären wir gemeinsam:
              </p>
              <div className="space-y-2">
                {[
                  "Was ist bei meinem Pferd wirklich dran?",
                  "Womit sollte ich jetzt anfangen?",
                ].map((question, i) => (
                  <p key={i} className="font-sans text-sm sm:text-base text-[#f5f2ed] font-normal leading-relaxed">
                    „{question}"
                  </p>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-6">
              {[
                "Dein persönlicher Frühjahrs-Report",
                "Abgestimmt auf eure Situation",
                "In nur 2 Minuten",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-sans text-sm text-[#f5f2ed]/90 font-normal">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/quiz"
              className="w-full min-h-[48px] py-4 px-6 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-base rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              Frühlingscheck starten
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Click Triggers */}
            <p className="mt-4 text-center font-sans text-xs text-[#f5f2ed]/60">
              Kostenlos · Persönlich · Kein Spam
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STICKY MOBILE CTA */}
      {/* ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-loam/95 backdrop-blur-sm border-t border-white/10 pt-3 pb-5 px-4 z-50 md:hidden safe-area-bottom">
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm tactile-button"
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
            Personalisiert
          </span>
        </div>
      </div>

      <div className="h-20 md:hidden" />

      {/* ============================================ */}
      {/* MODAL */}
      {/* ============================================ */}
      {isHeroModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-sm shadow-2xl p-6 sm:p-8 md:p-10 relative animate-in zoom-in-95 duration-200 border-2 border-gold/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsHeroModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-loam/60 hover:text-loam transition-colors z-10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Schliessen"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {!heroSubmitted ? (
              <>
                <div className="flex items-center justify-center mb-5 sm:mb-6">
                  <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-gold" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-loam mb-3 sm:mb-4 text-center font-bold leading-tight">
                  Ist dein Pferd <span className="italic text-sage font-normal">wirklich entspannt</span>?
                </h3>
                <p className="text-loam font-sans text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 text-center">
                  Lade dir die kostenlose Stress-Checkliste herunter.
                </p>

                <form onSubmit={handleHeroSubmit} className="w-full space-y-3 sm:space-y-4">
                  <input
                    type="email"
                    placeholder="Deine E-Mail"
                    required
                    className="w-full py-3 sm:py-3.5 px-4 bg-paper border-2 border-loam/20 focus:border-gold text-loam placeholder-loam/50 focus:outline-none font-sans text-sm sm:text-base rounded-sm transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-6 sm:px-8 min-h-[48px] bg-gold hover:bg-[#b08e58] text-white font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm tactile-button transition-colors"
                  >
                    Ja, ich will Sicherheit
                  </button>
                  <p className="text-center text-[10px] sm:text-xs text-loam/60 font-sans">
                    Kostenlos und 100% Spam-frei.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <div className="flex justify-center mb-5 sm:mb-6">
                  <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-sage" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-loam mb-2 sm:mb-3 font-bold">Sicherheit zuerst</h3>
                <p className="text-base sm:text-lg font-serif italic text-gold mb-4 sm:mb-6">Weil genaues Hinsehen der beste Schutz ist.</p>
                <p className="text-xs sm:text-sm text-loam/60 font-sans">
                  Prüf dein Postfach!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
