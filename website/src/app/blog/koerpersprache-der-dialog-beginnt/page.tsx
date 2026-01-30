"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { BookOpen, Menu, X, Eye, CheckCircle2, ArrowLeft } from "lucide-react"

export default function BlogArticlePage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 4000)
    }
  }

  return (
    <main className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 w-full bg-bg-light/95 backdrop-blur-sm border-b border-gold/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col gap-0 text-loam hover:text-gold transition-colors">
            <span className="text-xl md:text-2xl font-bold tracking-tight italic font-serif">Pferdesicht.com</span>
            <span className="text-[9px] md:text-[10px] font-sans tracking-wider uppercase text-[#C5A065]">
              Vertraue deiner Perspektive
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 font-sans">
            <Link className="text-loam text-sm font-medium tracking-wide hover:text-gold transition-colors" href="/">
              Start
            </Link>
            <Link
              className="text-gold text-sm font-bold tracking-wide border-b-2 border-gold pb-1 transition-colors"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-loam text-sm font-medium tracking-wide hover:text-gold transition-colors"
              href="/ueber-mich"
            >
              Über mich
            </Link>
            <Link className="text-loam text-sm font-medium tracking-wide hover:text-gold transition-colors" href="#">
              Kontakt
            </Link>
          </nav>
          <button
            className="md:hidden p-2 text-loam hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-loam/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute top-0 left-0 right-0 bg-paper border-b border-loam/20 shadow-lg">
              {/* Menu Header mit Close Button */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-loam/10">
                <span className="text-lg font-serif font-medium text-loam">Menü</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-loam" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="px-4 py-6 space-y-1 bg-paper">
                <Link
                  href="/"
                  className="block py-3 text-loam font-medium border-b border-loam/10 hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start
                </Link>
                <Link
                  href="/blog"
                  className="block py-3 text-gold font-bold border-b border-loam/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/ueber-mich"
                  className="block py-3 text-loam font-medium border-b border-loam/10 hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Über mich
                </Link>
                <Link
                  href="/kontakt"
                  className="block py-3 text-loam font-medium hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumb / Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <Link
          href="/blog"
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
                Training & Horsemanship
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-loam mb-6 leading-tight text-balance">
              Körpersprache: Der Dialog beginnt, bevor du sprichst
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-sans text-loam/70 mb-6 leading-relaxed text-pretty">
              Lerne, die feinen Signale zu erkennen, bevor sie zu Problemen werden. Entdecke die nonverbale
              Kommunikation, die das Fundament für eine tiefere Beziehung bildet.
            </p>

            {/* Meta Information */}
            <div className="flex items-center gap-3 text-sm font-sans text-sage mb-8">
              <span>von Lisa</span>
              <span>•</span>
              <span>5 min (1850)</span>
            </div>

            {/* Table of Contents */}
            <div className="bg-white/50 rounded-sm p-6 backdrop-blur-sm border border-loam/10">
              <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-loam mb-4">
                In diesem Artikel:
              </h3>
              <ul className="space-y-2.5 text-sm font-sans text-loam/70">
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Die Strategien der stillen Körpersprache</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Deine Signale verstehen und richtig interpretieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Missverständnisse vermeiden und Vertrauen aufbauen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage mt-0.5">•</span>
                  <span>Praktische Übungen für den Alltag</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <img
              src="/beautiful-brown-horse-standing-in-golden-sunset-fi.jpg"
              alt="Pferd im goldenen Abendlicht"
              className="w-full h-full object-cover warm-film-grain"
              width={600}
              height={800}
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mt-16 space-y-12">
          {/* Opening Paragraph with Drop Cap */}
          <div className="prose prose-lg">
            <p className="text-lg font-serif text-loam/80 leading-relaxed">
              <span className="float-left text-8xl font-serif leading-[0.8] mr-4 mt-2 text-gold">W</span>
              enn du ein Pferd fragst, ob es entspannt ist, wird es dir keine Antwort mit Worten geben können. Aber es
              gibt viel mehr als das. Weil das Pferd, ähnlich wie das Reh und der Hase, kein Raubtier ist und dass es
              dir lieber still zeigt, bevor es lautstark wird: Seine Körpersprache spricht Bände.
            </p>
          </div>

          {/* Section 1: Die Biochemie der Anspannung */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Die Biochemie der Anspannung</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Es ist nicht esoterisch, es ist biologisch: Stress ist messbar, sicht- und spürbar präsentiert. Adrenalin
              kann ein Pferd in wenigen Sekunden vom entspannten Weidedasein in einen fluchtbereiten Zustand versetzen.
              Das führt zu hoher Spannung in der Muskulatur und erhöhter Pulsrate. Auch die nonverbale Sprache, Ohren
              bspw: Eng zusammen: Stress, Streit, Aufmerksamkeit, die Haare am Körper: Flach an, „gefühlt, die Angst
              gibt gestreckt und schwindet und tut innerlich alles zum Einstellen des Selbstverhaltens.
            </p>

            {/* Eye Close-up Image */}
            <figure className="my-8">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg">
                <img
                  src="/extreme-close-up-of-horse-eye-showing-emotion-and-.jpg"
                  alt="Das Pferdeauge zeigt feinste Anzeichen der Anspannung, lange bevor Verhalten sichtbar wird"
                  className="w-full h-full object-cover warm-film-grain"
                  width={800}
                  height={400}
                />
              </div>
              <figcaption className="text-xs font-sans text-sage text-center mt-3 italic">
                Das Pferdeauge zeigt feinste Anzeichen der Anspannung, lange bevor Verhalten sichtbar wird
              </figcaption>
            </figure>
          </section>

          {/* Section 2: Typische Warnzeichen */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Typische nonverbale Warnsignale</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Hier sind drei typische Signale, auf die du achten solltest: Die Ohren sind leicht nach hinten gedreht,
              aber nicht flach angelegt, und die Nüstern sind leicht geöffnet und angespannt – das Pferd nimmt gezielt
              klar „Luft und Witterung auf". Das Kopf-Nicken oder Abwenden des Blicks kann als Beschwichtigungssignal
              auftreten: Diese Ausdruck oder Gesten sind leichte Unsicherheit. Auch die Schweifhaltung verrät viel: Geht
              Schweif im Kreis, und stockt öfter die Laufbewegung, empfindet das Pferd zu großen Druck. Und starres
              Stehen mit einer klaren festen, fast „kalten" Bewegung.
            </p>

            {/* Handler and Horse Image */}
            <figure className="my-8">
              <div className="relative h-80 rounded-sm overflow-hidden shadow-lg">
                <img
                  src="/person-gently-touching-horse-nose-showing-trust-an.jpg"
                  alt="Feine Berührungen schaffen Verständigung zwischen Mensch und Tier"
                  className="w-full h-full object-cover warm-film-grain"
                  width={800}
                  height={400}
                />
              </div>
              <figcaption className="text-xs font-sans text-sage text-center mt-3 italic">
                Feine Berührungen schaffen Verständigung zwischen Mensch und Tier
              </figcaption>
            </figure>
          </section>

          {/* Warning Box - Upgraded to Index Card Style */}
          <aside className="relative bg-[#FAF9F6] border border-[#C8A476] rounded-sm p-8 my-8 shadow-md">
            {/* Pin Icon at top center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-6 h-6 bg-[#C8A476] rounded-full shadow-md flex items-center justify-center">
                <div className="w-2 h-2 bg-loam rounded-full"></div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Eye className="w-6 h-6 text-[#C8A476] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">
                  Wissenschaftlicher Fakt:
                </h3>
                <p className="text-sm font-sans text-loam/70 leading-relaxed">
                  Studien von Forschern wie Konstanze Krüger (HfWU Nürtingen) zeigen, dass Pferde bereits minimale
                  Muskelspannungen und Körperhaltung des Menschen wahrnehmen und daraufhin ihr Verhalten anpassen. Die
                  Anspannung bleibt dem Pferd niemals verborgen. Deine Körpersprache wird längst „gelesen", bevor du zur
                  Longe greifst.
                </p>
              </div>
            </div>
          </aside>

          {/* Quote Section - Dramatized */}
          <blockquote className="relative my-16 py-8 text-center">
            {/* Decorative opening quote mark */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>

            <p className="relative text-3xl md:text-4xl font-serif italic text-loam leading-relaxed mb-6 text-balance px-8">
              Ein Pferd wird nicht erst dann wach, was du sagst. Es hört vor allem, was du fühlst, während du es sagst.
            </p>

            {/* Decorative closing quote mark */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-[#C8A476] opacity-30 leading-none">
              "
            </span>

            <footer className="relative text-sm font-sans uppercase tracking-widest text-sage mt-4">
              — Linda Tellington
            </footer>
          </blockquote>

          {/* Section 3: Praktische Übung */}
          <section>
            <h2 className="text-3xl font-serif italic text-loam mb-6">Praktische Übung: Der 'Body-Scan'</h2>
            <p className="text-base font-sans text-loam/70 leading-relaxed mb-6">
              Gehe zum Pferd ohne Plan. Stelle dich ruhig neben das Pferd. Stelle dich so, dass deine Worte nicht
              notwendig sind. Mach folgende Selbstchecks:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="font-sans font-semibold text-loam">Atmung:</strong>
                  <span className="font-sans text-loam/70">
                    {" "}
                    Ist sie eher kurz, rudimentär gesteuert? Falls ja, verlangsame sie.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="font-sans font-semibold text-loam">Blick:</strong>
                  <span className="font-sans text-loam/70">
                    {" "}
                    Starrst du das Pferd direkt an? Senke den Blick oder lasse ihn schweifen.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="font-sans font-semibold text-loam">Ohren:</strong>
                  <span className="font-sans text-loam/70">
                    {" "}
                    Nicht deine – die des Pferdes. Wohin zeigen sie? Starre sie nicht an, akzeptiere, wohin sie zeigen.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="font-sans font-semibold text-loam">Antwort:</strong>
                  <span className="font-sans text-loam/70">
                    {" "}
                    Warte auf die Reaktion. Nur so spürst du, ob es antwortet.
                  </span>
                </div>
              </li>
            </ul>

            <p className="text-base font-sans text-loam/70 leading-relaxed">
              Nimm dir nach dem Pferd 10 Minuten, die du allein bist, nur zum Beobachten. Soll nicht eine konkrete
              Arbeit sein, die von dir wegläuft, sondern einfach Wahrheit. Siehe die Signale als leises Gefühl.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-loam rounded-sm p-10 md:p-14 my-16 shadow-lg border-2 border-gold/20">
            <div className="max-w-2xl mx-auto">
              {/* Icon & Badge */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-gold" strokeWidth={1.5} />
                <span className="text-xs font-sans uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-sm border border-gold/30">
                  Kostenloser Download
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-4 leading-tight">
                Lerne die <em className="text-gold">leisen Signale</em> zu sehen.
              </h2>

              {/* Value Proposition */}
              <p className="text-base font-sans text-white/90 text-center mb-8 leading-relaxed">
                Lade dir jetzt das bebilderte 12-seitige Booklet herunter:
                <br />
                <strong className="text-white">"Wenn Signale sprechen – und du nicht mehr überhören kannst"</strong>
              </p>

              {/* What's Inside - Bullet Points */}
              <div className="bg-white/10 rounded-sm p-6 mb-8 border border-white/20">
                <p className="text-sm font-sans uppercase tracking-wide text-gold mb-4 text-center font-semibold">
                  Das erwartet dich:
                </p>
                <ul className="space-y-2.5 text-white font-sans text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Die 5 häufigsten Stress- und Schmerzgesichter (bebildert)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Wissenschaftlich fundierte Erklärungen nach tierärztlichen Standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Praxisnahe Checkliste: So erkennst du Warnsignale frühzeitig</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>Sofort anwendbar – ohne Vorkenntnisse</span>
                  </li>
                </ul>
              </div>

              {/* Email Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Deine E-Mail für den sofortigen Download"
                      required
                      className="w-full px-5 py-4 rounded-sm border-2 border-paper/20 bg-paper text-loam font-sans text-base focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder:text-loam/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold text-loam font-sans font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-gold/90 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.4)] hover:scale-[1.02]"
                  >
                    Jetzt kostenfrei herunterladen
                  </button>
                  <p className="text-xs font-sans text-white/70 text-center leading-relaxed">
                    Kein Spam. Wissenschaftlich geprüft. Jederzeit abmeldbar.
                  </p>
                </form>
              ) : (
                <div className="bg-sage/20 rounded-sm p-8 text-center border border-sage/30">
                  <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-4" strokeWidth={2} />
                  <h3 className="text-xl font-serif text-white mb-2">Geschafft!</h3>
                  <p className="text-sm font-sans text-white/90">
                    Schau gleich in dein Postfach – der Download-Link ist unterwegs.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-sage/5 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-loam mb-2">Weiterlesen</h2>
            <p className="text-sm font-sans uppercase tracking-widest text-sage">Ähnliche Artikel</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Related Article 1 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/person-gently-touching-horse-nose-connection.jpg"
                  alt="Vertrauensaufbau"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                  <span>20. MRZ 2025</span>
                </div>
                <h3 className="text-lg font-serif text-loam mb-2 leading-tight group-hover:text-gold transition-colors">
                  Gesunde Knochen: Warum Adern beansprucht werden
                </h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-xs font-bold font-sans uppercase tracking-widest text-sage group-hover:text-loam transition-colors mt-4"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>

            {/* Related Article 2 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/horse-silhouette-at-sunset-peaceful.jpg"
                  alt="Freiarbeit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                  <span>18. MRZ 2025</span>
                </div>
                <h3 className="text-lg font-serif text-loam mb-2 leading-tight group-hover:text-gold transition-colors">
                  Gelassenheit ist trainierbar: Vom Flüchter zum Partner
                </h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-xs font-bold font-sans uppercase tracking-widest text-sage group-hover:text-loam transition-colors mt-4"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>

            {/* Related Article 3 */}
            <article className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/horse-eye-extreme-closeup-showing-trust.jpg"
                  alt="Schmerzgesichter"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 warm-film-grain"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                  <span>15. MRZ 2025</span>
                </div>
                <h3 className="text-lg font-serif text-loam mb-2 leading-tight group-hover:text-gold transition-colors">
                  Augensprache: Schmerzgesichter frühzeitig erkennen
                </h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-xs font-bold font-sans uppercase tracking-widest text-sage group-hover:text-loam transition-colors mt-4"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper border-t border-loam/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl text-loam italic">Pferdesicht.com</span>
              <span className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "#C5A065" }}>
                Vertraue deiner Perspektive
              </span>
            </div>
            <p className="text-sm text-loam/60">Dein vertrauensvoller Begleiter. Authentisch. Fundiert. Modern.</p>
            <div className="flex justify-center gap-6 text-xs uppercase tracking-wider">
              <Link href="/impressum" className="text-loam/60 hover:text-gold transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-loam/60 hover:text-gold transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-loam/60 hover:text-gold transition-colors">
                AGB
              </Link>
            </div>
            <p className="text-xs text-loam/40 flex items-center justify-center gap-1">
              Made with <span className="text-red-800/60">♥</span> for horses.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
