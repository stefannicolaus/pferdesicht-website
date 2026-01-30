"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Shield, Brain, Heart, Sparkles, X, CheckCircle2 } from "lucide-react"
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

      {/* ============================================ */}
      {/* HERO SECTION - Flexibles Grid mit fixer Box-Breite */}
      {/* ============================================ */}
      <section className="relative h-[85vh] min-h-[600px]">
        {/* Desktop: 1fr + 380px Grid */}
        <div className="hidden lg:grid lg:grid-cols-[3fr_2fr] h-full">
          {/* Links: Bild mit Text-Overlay */}
          <div className="relative">
            <Image
              src="/images/heroes/hero-herde-realistic.png"
              alt="Pferde im Offenstall bei Sonnenuntergang"
              fill
              priority
              className="object-cover warm-film-grain"
              sizes="calc(100vw - 380px)"
            />
            <HeroTextOverlay />
          </div>

          {/* Rechts: Lead Magnet Box (380px fix) */}
          <div>
            <HeroLeadMagnetBox />
          </div>
        </div>

        {/* Tablet/Mobile: Gestapelt */}
        <div className="lg:hidden">
          {/* Hero Bild mit Overlay - MEHR HÖHE für Text oben */}
          <div className="relative min-h-[70vh] md:min-h-[60vh]">
            <Image
              src="/images/heroes/hero-herde-mobile.png"
              alt="Pferde auf der Koppel im goldenen Abendlicht"
              fill
              priority
              className="object-cover object-top warm-film-grain"
              sizes="100vw"
            />
            <HeroTextOverlay />
          </div>

          {/* Lead Magnet Box */}
          <HeroLeadMagnetBox />
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
                Vielleicht kennst du diese Sätze. Im Stall. Von Trainern. Manchmal sogar von Tierärzten.
              </p>
              
              <p className="text-loam/75 font-sans font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                Ich hab sie alle gehört. Und weißt du was? Meistens lag ich trotzdem richtig.
              </p>
              
              <div className="bg-loam rounded-sm p-5 sm:p-6 md:p-8">
                <p className="font-serif text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  Wenn du hinschaust und fragst, machst du nichts falsch.{" "}
                  <span className="text-gold font-medium">Du machst genau das Richtige.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUOTE CARDS SECTION */}
      {/* ============================================ */}
      <section className="py-8 sm:py-12 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl md:text-2xl font-serif text-loam text-center mb-6">
            Die Sätze, bei denen du innerlich die Augen verdrehst.
          </h3>
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
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="text-sage font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              WAS DU HIER FINDEST
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-loam mb-3 sm:mb-4">
              Sortiertes Wissen. Kein Meinungs-Chaos.
            </h2>
            <p className="text-loam/70 font-sans font-light text-sm sm:text-base">
              Keine Wundermittel. Keine 5 Tipps. Sondern das, was ich in 16 Jahren gelernt habe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
                iconBg: "bg-sage/10",
                title: "Orientierung im Chaos",
                description: "Was ist Fakt? Was ist Mythos? Ich sag dir, was stimmt - und wenn ich nicht sicher bin, sag ich das auch.",
              },
              {
                icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />,
                iconBg: "bg-gold/10",
                title: "Antworten, die halten",
                description: "Wenn die Stallkollegin fragt: Warum machst du das so? - hast du eine fundierte Antwort.",
              },
              {
                icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
                iconBg: "bg-sage/10",
                title: "Hilfe, wenns kompliziert wird",
                description: "Dein Pferd zeigt Symptome und alle sagen was anderes? Ich zeig dir, wie ich vorgehe.",
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-[#faf8f5] rounded-sm p-5 sm:p-6 md:p-8 border border-loam/5 text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${benefit.iconBg} flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-loam/10`}>
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-loam mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-loam/70 font-sans font-light leading-relaxed text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
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
              <span className="inline-block px-3 py-1.5 bg-loam/20 text-[#f5f2ed] text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4">
                Frühling 2026
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4 sm:mb-6 leading-tight">
                Der Frühling kommt. <span className="italic text-[#d4b896]">Und damit ein paar Fragen.</span>
              </h2>

              {/* Questions Block - Quote Style */}
              <div className="border-l-2 border-gold/50 pl-4 ml-2 mb-6 text-left">
                <p className="font-sans text-sm text-[#f5f2ed]/80 font-medium mb-3">
                  Vielleicht fragst du dich gerade:
                </p>
                <div className="space-y-2">
                  {[
                    "Muss ich jetzt schon ans Anweiden denken?",
                    "Wie unterstütze ich den Fellwechsel richtig?",
                    "Was sollte ich bei meinem Pferd wirklich priorisieren?",
                  ].map((question, i) => (
                    <p key={i} className="font-sans text-sm sm:text-base text-[#f5f2ed] font-normal leading-relaxed">
                      „{question}"
                    </p>
                  ))}
                </div>
              </div>

              <p className="text-[#f5f2ed]/85 text-sm sm:text-base font-sans font-light leading-relaxed">
                8 Fragen zu deinem Pferd. Dein persönlicher Frühjahrs-Report - abgestimmt auf eure Situation.
              </p>
            </div>

            {/* Right: CTA Card */}
            <div className="bg-loam/90 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 shadow-lg">
              {/* Benefits */}
              <p className="font-sans text-xs text-[#f5f2ed]/70 font-semibold uppercase tracking-wide mb-4">
                Was du bekommst:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Risiko-Check für dein Pferd",
                  "Die 3 wichtigsten Dinge für deinen Start",
                  "Wochen-Kalender Feb–Mai",
                  "Ehrliche Einschätzung ohne Einhorn-Quatsch",
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
                Kostenlos · 2 Min · Kein Spam
              </p>
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
              
              <div className="space-y-3 max-w-[320px] mx-auto lg:mx-0">
                {[
                  { num: "30", text: "Jahre mit Pferden. Die Fehler, die Tierarztrechnungen, die schlaflosen Nächte - und die Momente, in denen alles stimmt." },
                  { num: "16", text: "Jahre Reittherapie. Über 200 Menschen begleitet. Gelernt, was Pferde uns zeigen, wenn wir hinschauen." },
                  { num: "15", text: "Jahre Gespräche mit Experten. Tierärzte, Therapeuten, Hufschmiede, Trainer. Tausende Fragen. Tausende Antworten." },
                  { num: "5", text: "Jahre hinter den Kulissen. Bei einer der bekanntesten Freiheitsdressur-Trainerinnen Europas. Gelernt, wie echte Verbindung entsteht - wenn das Pferd wählt zu bleiben." },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-sm p-4 shadow-sm border-l-4 border-gold/50 flex gap-4 items-start">
                    <div className="text-3xl sm:text-4xl font-light text-gold flex-shrink-0 leading-none">{item.num}</div>
                    <div className="text-xs sm:text-sm text-loam/75 font-sans leading-relaxed">{item.text}</div>
                  </div>
                ))}
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
                  Ich weiß, wie es sich anfühlt, wenn alle was anderes sagen - und du nachts wach liegst 
                  und googelst.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-loam/85 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Ich hab das jahrelang gemacht. Und dabei richtig viel Geld für Tierärzte, Zusätze 
                  und Behandlungen ausgegeben, die nicht geholfen haben.
                </p>
                
                <p>
                  Bei Hempura habe ich tausende Gespräche mit Pferdebesitzern geführt - 
                  und mit den Experten, die wirklich Ahnung haben.
                </p>
                
                <p className="text-loam font-medium text-sm sm:text-base md:text-lg">
                  Heute teile ich das, was ich gelernt habe - damit du nicht dieselben Fehler machst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PHILOSOPHY SECTION */}
      {/* ============================================ */}
      <section className="py-14 sm:py-20 md:py-28 bg-loam relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-5 sm:mb-8">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
          </div>
          <blockquote className="font-serif text-gold text-xl sm:text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-4 sm:mb-6">
            &quot;Wer nur nach Schema F sucht, überhört oft die leisen Signale.&quot;
          </blockquote>
          <p className="text-[#EBE6DF]/80 text-sm sm:text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Dein Pferd ist kein Lehrbuch-Pferd. Was für andere funktioniert, 
            kann für deines der falsche Weg sein.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
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
                quote: "Bei dir hab ich endlich verstanden, wer wann Recht hat.",
                author: "Martina, Niedersachsen",
              },
              {
                transformation: "Nächte zu Ruhe",
                quote: "Ich hab aufgehört, nachts zu googeln. Das allein war es wert.",
                author: "Julia, Österreich",
              },
              {
                transformation: "Hilflos zu Handlungsfähig",
                quote: "Alle sagten: Das ist halt so. War es nicht.",
                author: "Sandra, Bayern",
              },
              {
                transformation: "Unsicher zu Selbstbewusst",
                quote: "Ich stell jetzt Fragen beim Tierarzt. Und versteh die Antworten.",
                author: "Birgit, Schweiz",
              },
              {
                transformation: "Überfordert zu Orientiert",
                quote: "Endlich sagt mir jemand: Das ist Fakt, das ist Meinung, das ist Mythos.",
                author: "Kathrin, NRW",
              },
              {
                transformation: "Außenseiter zu Ansprechpartner",
                quote: "Meine Stallkolleginnen fragen jetzt mich.",
                author: "Anja, Brandenburg",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#faf8f5] rounded-sm p-5 sm:p-6 flex flex-col border border-loam/5">
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
              Hör auf zu googeln. <span className="italic text-gold">Fang an zu verstehen.</span>
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
      <div className="fixed bottom-0 left-0 right-0 bg-loam/95 backdrop-blur-sm border-t border-white/10 p-3 z-50 md:hidden safe-area-bottom">
        <Link 
          href="/quiz" 
          className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3.5 bg-gold text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm tactile-button"
        >
          Frühlingscheck starten
          <ArrowRight className="w-4 h-4" />
        </Link>
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
