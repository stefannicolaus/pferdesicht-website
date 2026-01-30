"use client"

import type React from "react"
import Image from "next/image"

import { ArrowRight, Shield, Brain, Heart, Menu, Sparkles, X, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PferdesichtPage() {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false)
  const [heroSubmitted, setHeroSubmitted] = useState(false)
  const [isSecuritySubmitted, setIsSecuritySubmitted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setHeroSubmitted(true)
    setTimeout(() => {
      setIsHeroModalOpen(false)
      setHeroSubmitted(false)
    }, 3000)
  }

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSecuritySubmitted(true)
    setTimeout(() => {
      setIsSecuritySubmitted(false)
    }, 5000)
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-paper-grain" />

      {/* Hero Section - NEU: VOC-basierte Headline */}
      <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        <Image
          src="/hero-koppel.png"
          alt="Brown horse with white blaze in golden hour paddock"
          fill
          priority
          className="object-cover object-[75%_center] warm-film-grain"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-loam/80 via-loam/40 to-loam/10" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold text-[#EBE6DF] text-xs font-sans font-bold tracking-widest uppercase mb-6 md:mb-8">
              FÜR PFERDEMENSCHEN, DIE HINSCHAUEN
            </div>
            {/* NEU: VOC-basierte Headline aus Storybook */}
            <h1 className="text-[#F3F0EB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 md:mb-8 font-serif hero-text-shadow">
              Was, wenn dein Bauchgefühl bei deinem Pferd{" "}
              <span className="italic text-[#C5A065] font-normal">die ganze Zeit richtig war</span>?
            </h1>
            {/* NEU: Validierungs-Subheadline */}
            <p className="text-[#EBE6DF]/90 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-8 md:mb-12 border-l-2 border-gold/50 pl-4 md:pl-6">
              Im Meinungs-Dschungel sagt jeder was anderes. Ich habe das für dich sortiert – 
              fundiert recherchiert, im Alltag getestet. Für Box und Offenstall.
            </p>
            <div className="flex flex-col gap-4 font-sans">
              <Link
                href="/quiz"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-[#b8956a] text-white text-base font-bold tracking-wide rounded-sm tactile-button inline-flex items-center justify-center gap-2 shadow-xl transition-colors"
              >
                Frühlings-Check starten
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[#EBE6DF]/80 text-xs font-sans">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                  2 Minuten
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                  Persönlicher Fahrplan
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                  100% kostenfrei
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEU: GASLIGHTING SECTION - "Kennst du das?" */}
      {/* ============================================ */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sage font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              KENNST DU DAS?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-loam leading-tight">
              Im Stall bist du „die Komplizierte".
            </h2>
          </div>

          {/* Gaslighting Zitate */}
          <div className="space-y-6 mb-12">
            <blockquote className="border-l-4 border-gold/50 pl-6 py-2 text-loam/80 italic text-lg md:text-xl font-serif">
              „Du denkst zu viel."
            </blockquote>
            <blockquote className="border-l-4 border-gold/50 pl-6 py-2 text-loam/80 italic text-lg md:text-xl font-serif">
              „Das ist halt so."
            </blockquote>
            <blockquote className="border-l-4 border-gold/50 pl-6 py-2 text-loam/80 italic text-lg md:text-xl font-serif">
              „Das haben wir schon immer so gemacht."
            </blockquote>
            <blockquote className="border-l-4 border-gold/50 pl-6 py-2 text-loam/80 italic text-lg md:text-xl font-serif">
              „Du bist zu pingelig."
            </blockquote>
          </div>

          {/* Validierung */}
          <div className="text-center bg-white rounded-sm p-8 md:p-10 shadow-sm border border-loam/5">
            <p className="text-xl md:text-2xl text-loam font-serif font-medium mb-2">
              Du bist nicht zu pingelig. Du schaust hin.
            </p>
            <p className="text-lg md:text-xl text-sage font-serif font-medium mb-4">
              Und genau das macht den Unterschied.
            </p>
            <p className="text-loam/70 text-base md:text-lg font-sans font-light">
              <strong className="text-loam">Hier bist du richtig.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEU: 3-SCHICHTEN BENEFITS SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sage font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              WAS DU HIER FINDEST
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-loam leading-tight">
              Wissen als Rüstung.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schicht 1: Explizit - Sicherheit */}
            <div className="bg-[#faf8f5] rounded-sm p-8 border border-loam/5">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">
                Sicherheit in deinen Entscheidungen
              </h3>
              <p className="text-loam/70 font-sans font-light leading-relaxed">
                Wenn die Stallkollegin fragt „Warum machst du das so?" – 
                hast du eine Antwort. Eine fundierte.
              </p>
            </div>

            {/* Schicht 2: Implizit - Ende des Zweifels */}
            <div className="bg-[#faf8f5] rounded-sm p-8 border border-loam/5">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">
                Das Ende des nagenden Zweifels
              </h3>
              <p className="text-loam/70 font-sans font-light leading-relaxed">
                Kein nächtliches Googeln mehr. Keine widersprüchlichen Ratschläge. 
                Endlich Klarheit, der du vertrauen kannst.
              </p>
            </div>

            {/* Schicht 3: Unbewusst - Handlungsfähigkeit */}
            <div className="bg-[#faf8f5] rounded-sm p-8 border border-loam/5">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl text-loam mb-3">
                Handlungsfähig, wenn es zählt
              </h3>
              <p className="text-loam/70 font-sans font-light leading-relaxed">
                Wenn dein Pferd dich braucht, stehst du nicht hilflos daneben. 
                Du weißt, was zu tun ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section - Sage Background */}
      <section className="py-20 md:py-24 bg-sage relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <span className="text-white/90 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                DEIN PERSÖNLICHER FRÜHLINGS-FAHRPLAN
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-[1.1] text-balance">
                In 2 Minuten weißt du, wo dein Pferd <span className="italic">Unterstützung</span> braucht.
              </h2>
              <p className="text-white/85 text-lg font-sans font-light leading-relaxed mb-8">
                Fellwechsel, Anweiden, Parasiten – ich zeige dir, was bei DEINEM Pferd jetzt Priorität hat.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <Link
                  href="/quiz"
                  className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm tactile-button inline-flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  Mein Risiko-Check starten
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-white/60 text-xs font-sans flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    8 kurze Fragen
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Sofort Ergebnis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Report per E-Mail
                  </span>
                </p>
              </div>
            </div>
            {/* Right Column - Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-8 border border-white/20">
              <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-6">Was du bekommst:</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-1">Risiko-Einschätzung</h4>
                    <p className="text-white/70 text-sm font-sans">Deine persönliche Ampel: Grün, Gelb oder Rot</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-1">Deine Prioritäten</h4>
                    <p className="text-white/70 text-sm font-sans">Was jetzt wichtig ist – und was warten kann</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-lg">📅</span>
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-1">Persönlicher Kalender</h4>
                    <p className="text-white/70 text-sm font-sans">Wochen-Plan Februar bis Mai – zum Abhaken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ich bin Diana Section */}
      <section className="py-20 md:py-24 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg ring-4 ring-sage/20">
            <img
              src="/images/Diana_Pferdesicht.jpeg"
              alt="Diana - Gründerin von Pferdesicht"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-loam mb-4">Ich bin Diana.</h2>
          <p className="text-loam/80 text-lg font-sans font-light leading-relaxed mb-8 max-w-xl mx-auto">
            30 Jahre habe ich gebraucht. Du nicht. Ich filtere für dich die Wahrheit im Meinungs-Dschungel – 
            damit du die Fehler nicht machst, die ich schon gemacht habe.
          </p>
          <Link
            href="/ueber-mich"
            className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase hover:text-[#b8956a] transition-colors"
          >
            Mehr über mich
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-bg-light relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-loam mb-8 leading-tight text-balance">
            Es gibt nie nur die eine <span className="italic text-sage">richtige Lösung</span>,<br />
            wenn es um Dein Pferd geht.
          </h2>
          <div className="relative">
            <p className="text-loam/80 text-lg md:text-xl font-sans font-light leading-loose max-w-2xl mx-auto text-pretty">
              Standard-Antworten werden Individuen niemals gerecht. Was für das Pferd deiner Stallkollegin funktioniert,
              kann für deines der falsche Weg sein. Wer nur nach „Schema F" sucht, überhört oft die leisen Signale. Denn
              Pferdehaltung ist kein statischer Zustand, sondern ein lebendiger Prozess. Lerne, diese Signale zu lesen
              und hinzuspüren.
            </p>
            <div className="w-24 h-px bg-gold/40 mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Knowledge Section - 3 Säulen: Experten + Reittherapie + Freiheitsdressur */}
      <section className="py-24 bg-bg-light border-b border-loam/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-loam text-center mb-20 leading-tight text-balance">
            Wissen schafft Gesundheit.
            <br />
            <span className="italic text-sage">Beziehung schafft Vertrauen.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Säule 1: Experten-Netzwerk */}
            <div className="flex flex-col items-start p-8 bg-white rounded-sm shadow-sm">
              <div className="w-12 h-12 rounded-full border border-sage/30 flex items-center justify-center text-sage mb-6 bg-sage/5">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-loam mb-4">
                Das Experten-Netzwerk
              </h3>
              <p className="font-sans font-light text-loam/80 leading-relaxed">
                Du bekommst das Wissen aus <span className="font-semibold text-loam">15 Jahren</span> Gesprächen 
                mit Tierärzten, Therapeuten und Hufschmieden – ohne jeden selbst fragen zu müssen.
              </p>
            </div>

            {/* Säule 2: Reittherapie-Perspektive */}
            <div className="flex flex-col items-start p-8 bg-white rounded-sm shadow-sm">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6 bg-gold/5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-loam mb-4">
                Die Reittherapie-Perspektive
              </h3>
              <p className="font-sans font-light text-loam/80 leading-relaxed">
                Wenn dein Pferd sich „komisch" verhält, zeige ich dir, was es dir sagen will. 
                <span className="font-semibold text-loam"> 16 Jahre</span> haben mich gelehrt: Pferde lügen nicht – sie spiegeln.
              </p>
            </div>

            {/* Säule 3: Echte Partnerschaft */}
            <div className="flex flex-col items-start p-8 bg-white rounded-sm shadow-sm">
              <div className="w-12 h-12 rounded-full border border-sage/30 flex items-center justify-center text-sage mb-6 bg-sage/5">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-loam mb-4">
                Echte Partnerschaft
              </h3>
              <p className="font-sans font-light text-loam/80 leading-relaxed">
                Ich zeige dir, wie Verbindung aussieht – nicht weil dein Pferd muss, 
                sondern weil es sich für dich entscheidet.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
              className="inline-flex items-center gap-2 text-sage font-serif text-xl italic hover:text-loam transition-colors border-b border-sage/30 hover:border-loam/30 pb-1"
              href="/ueber-mich"
            >
              Wie ich lernte, meinem Bauchgefühl wieder zu vertrauen – Dianas Story
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <Link href="/blog/eindecken-winter" className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/thumbnails/thumbnail-training.png"
                    alt="Pferd galoppiert frei in der Arena"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-sans font-bold tracking-widest text-loam uppercase backdrop-blur-sm">
                    Training
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-sans text-sage mb-4">
                    <span>8 Min Lesezeit</span>
                  </div>
                  <h3 className="text-2xl font-serif text-loam mb-3 leading-tight group-hover:text-gold transition-colors">
                    Dein Pferd produziert 24/7 Magensäure. Und du fütterst 3x am Tag.
                  </h3>
                  <p className="text-sm font-sans text-gray-500 mb-6 line-clamp-2">
                    Wann eine Decke wirklich Sinn macht – und wann du deinem Pferd damit mehr
                    schadest als hilfst. Faktenbasiert und aus 20 Jahren Praxiserfahrung.
                  </p>
                  <span className="text-xs font-bold font-sans uppercase tracking-widest border-b border-gold/50 pb-1 text-loam group-hover:border-gold transition-colors">
                    Beitrag lesen
                  </span>
                </div>
              </Link>
            </article>

            {/* Card 2 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <Link href="/blog/fuetterung-winter" className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/thumbnails/thumbnail-winter-v3.png"
                    alt="Haflinger mit dickem Winterfell im Schnee"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-sans font-bold tracking-widest text-loam uppercase backdrop-blur-sm">
                    Gesundheit & Haltung
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-sans text-sage mb-4">
                    <span>8 Min Lesezeit</span>
                  </div>
                  <h3 className="text-2xl font-serif text-loam mb-3 leading-tight group-hover:text-gold transition-colors">
                    Dein Pferd produziert 24/7 Magensäure. Und du fütterst 3x am Tag.
                  </h3>
                  <p className="text-sm font-sans text-gray-500 mb-6 line-clamp-2">
                    Wann eine Decke wirklich Sinn macht und warum Heu die beste Heizung ist. Faktenbasiert aus 20 Jahren
                    Erfahrung.
                  </p>
                  <span className="text-xs font-bold font-sans uppercase tracking-widest border-b border-gold/50 pb-1 text-loam group-hover:border-gold transition-colors">
                    Beitrag lesen
                  </span>
                </div>
              </Link>
            </article>

            {/* Card 3 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <Link href="/blog/bewegung-winter" className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/thumbnails/thumbnail-mindset.png"
                    alt="Inniger Moment zwischen Mensch und Pferd"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-sans font-bold tracking-widest text-loam uppercase backdrop-blur-sm">
                    Mindset
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-sans text-sage mb-4">
                    <span>12 Min Lesezeit</span>
                  </div>
                  <h3 className="text-2xl font-serif text-loam mb-3 leading-tight group-hover:text-gold transition-colors">
                    Alle wärmen 10 Minuten auf. Im Sommer wie im Winter.
                  </h3>
                  <p className="text-sm font-sans text-gray-500 mb-6 line-clamp-2">
                    Warum kalte Sehnen ein Risiko sind und was dein Pferd im Winter wirklich braucht.
                  </p>
                  <span className="text-xs font-bold font-sans uppercase tracking-widest border-b border-gold/50 pb-1 text-loam group-hover:border-gold transition-colors">
                    Beitrag lesen
                  </span>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}

      {isHeroModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsHeroModalOpen(false)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-sm shadow-2xl p-10 relative animate-in zoom-in-95 duration-200 border-2 border-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsHeroModalOpen(false)}
              className="absolute top-4 right-4 text-loam/60 hover:text-loam transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>

            {!heroSubmitted ? (
              <>
                <div className="flex items-center justify-center mb-6">
                  <Shield className="w-16 h-16 text-gold" />
                </div>
                <h3 className="text-3xl font-serif text-loam mb-4 text-center font-bold leading-tight">
                  Ist dein Pferd <span className="italic text-sage font-normal">wirklich entspannt</span>?
                </h3>
                <p className="text-loam font-sans text-base leading-relaxed mb-6 text-center">
                  Lade dir die kostenlose Stress-Checkliste herunter und lerne, die subtilen Zeichen zu erkennen, bevor
                  aus kleinen Signalen große Probleme werden.
                </p>

                <form onSubmit={handleHeroSubmit} className="w-full space-y-4">
                  <input
                    type="email"
                    placeholder="Deine E-Mail für den Download"
                    required
                    className="w-full py-3.5 px-4 bg-paper border-2 border-loam/20 focus:border-gold text-loam placeholder-loam/50 focus:outline-none font-sans text-base rounded-sm transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-gold hover:bg-[#b08e58] text-loam font-sans font-bold text-sm tracking-widest uppercase rounded-sm tactile-button transition-colors"
                  >
                    Ja, ich will Sicherheit
                  </button>
                  <p className="text-center text-xs text-loam/60 font-sans">
                    Kostenlos &amp; 100% Spam-frei. Abmeldung jederzeit.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="w-20 h-20 text-sage" />
                </div>
                <h3 className="text-3xl font-serif text-loam mb-3 font-bold">Sicherheit zuerst</h3>
                <p className="text-lg font-serif italic text-gold mb-6">Weil genaues Hinsehen der beste Schutz ist.</p>
                <div className="bg-paper rounded-sm p-6 mb-6 text-left">
                  <p className="text-loam font-sans text-base leading-relaxed mb-4">
                    Stress ist der unsichtbare Feind der Pferdegesundheit. Lerne ihn frühzeitig zu erkennen, bevor er
                    krank macht.
                  </p>
                  <p className="text-loam font-sans text-base leading-relaxed">
                    Diese Checkliste ist dein tägliches Werkzeug, um dein Bauchgefühl mit Fakten zu bestätigen.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left bg-sage/10 rounded-sm p-4 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-loam font-sans">
                    <span className="font-semibold">Postfach prüfen:</span> Die Checkliste wartet bereits auf dich
                  </p>
                </div>
                <p className="text-center text-xs text-loam/60 font-sans">
                  Falls du nichts siehst, prüfe bitte auch deinen Spam-Ordner.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {isSecuritySubmitted && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 md:p-12 relative shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-loam mb-4">
                Perfekt! Deine Checkliste ist unterwegs.
              </h3>
              <p className="text-lg text-loam/80 font-sans leading-relaxed">
                Prüfe gleich dein Postfach. In wenigen Minuten erhältst du den Download-Link zu deiner kostenlosen
                Stress-Checkliste.
              </p>
            </div>

            <div className="bg-sage/10 border-l-4 border-sage p-6 mb-6">
              <h4 className="font-serif text-xl font-bold text-loam mb-3">Was dich in der Checkliste erwartet:</h4>
              <ul className="space-y-2 text-loam/80 font-sans">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>5 eindeutige Stress-Signale, die du täglich checken kannst</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Bebilderte Anleitungen nach tierärztlichen Standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Sofort umsetzbare Maßnahmen für den Stall-Alltag</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Wissenschaftlich fundiert – verständlich erklärt</span>
                </li>
              </ul>
            </div>

            <div className="bg-gold/10 border border-gold/30 p-4 text-center">
              <p className="text-sm text-loam/70 font-sans">
                <strong className="text-loam">Datenschutz:</strong> Deine E-Mail wird niemals weitergegeben. Du kannst
                dich jederzeit mit einem Klick abmelden.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
