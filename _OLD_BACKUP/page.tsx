import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ============================================ */}
      {/* HERO SECTION - Fullscreen with gradient */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/hero-koppel.png"
            alt="Braunes Pferd mit weißer Blesse im goldenen Licht"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-loam-900/80 via-loam-900/40 to-loam-900/10" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20">
              PERSPEKTIVWECHSEL
            </span>

            {/* Headline - Problem + Lösung Format */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Finde die Wahrheit für dein Pferd im{" "}
              <span className="italic text-gold-400">Meinungs-Dschungel.</span>
            </h1>

            {/* Subheadline - Validierung */}
            <div className="border-l-4 border-gold-400 pl-6 mb-10">
              <p className="text-white/90 text-lg leading-relaxed">
                Du hinterfragst nicht zu viel – du bist konsequent. Hier bekommst du 
                getestete, praxisnahe Informationen zu natürlicher Pferdehaltung.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="#quiz"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-loam-900 font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Frühlings-Check starten
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GASLIGHTING SECTION - "Kennst du das?" */}
      {/* ============================================ */}
      <section className="py-20 bg-loam-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-12 text-center">
            Kennst du das?
          </h2>

          {/* Gaslighting-Sätze als Quotes */}
          <div className="space-y-6 mb-12">
            <blockquote className="border-l-4 border-sage-400 pl-6 py-2 text-loam-700 italic text-lg">
              "Du denkst zu viel."
            </blockquote>

            <blockquote className="border-l-4 border-sage-400 pl-6 py-2 text-loam-700 italic text-lg">
              "Das haben wir schon immer so gemacht."
            </blockquote>

            <blockquote className="border-l-4 border-sage-400 pl-6 py-2 text-loam-700 italic text-lg">
              "Der verarscht dich nur."
            </blockquote>

            <blockquote className="border-l-4 border-sage-400 pl-6 py-2 text-loam-700 italic text-lg">
              "Du bist zu pingelig."
            </blockquote>
          </div>

          {/* Validierung */}
          <div className="text-center">
            <p className="text-2xl text-loam-900 font-medium mb-4">
              Du bist nicht das Problem. Das System ist das Problem.
            </p>
            <p className="text-lg text-loam-600 max-w-2xl mx-auto">
              Wer hinschaut, wird abgestempelt. Dabei ist Aufmerksamkeit genau das, 
              was natürliche Pferdehaltung braucht.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS SECTION - 3 Schichten Modell */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
              Was du hier bekommst
            </h2>
            <p className="text-lg text-loam-600 max-w-2xl mx-auto">
              Wissen, das dir niemand mehr nehmen kann – für jede Situation.
            </p>
          </div>

          {/* 3 Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1: Schicht 1 (Explizit) - Wissen */}
            <div className="bg-loam-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-sage-700" />
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-4">
                Sicherheit in deinen Entscheidungen
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Du willst wissen, dass es deinem Pferd gut geht – nicht nur hoffen. 
                Verstehe die Zusammenhänge von Haltung, Fütterung und Gesundheit, 
                sodass du fundiert entscheiden kannst.
              </p>
            </div>

            {/* Benefit 2: Schicht 2 (Implizit) - Validierung */}
            <div className="bg-loam-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-sage-700" />
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-4">
                Das Ende des nagenden Zweifels
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Dieses Gefühl, vielleicht doch etwas falsch zu machen – es darf 
                aufhören. Lerne zu unterscheiden zwischen unbegründeter Sorge und 
                berechtigter Vorsicht.
              </p>
            </div>

            {/* Benefit 3: Schicht 3 (Unbewusst) - Transformation (NICHT explizit benannt) */}
            <div className="bg-loam-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-sage-700" />
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-4">
                Handlungsfähigkeit statt Überforderung
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Wissen gibt dir die Ruhe, auch in kritischen Momenten klar zu denken. 
                Du wirst nicht perfekt – aber du wirst handlungsfähig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUIZ TEASER */}
      {/* ============================================ */}
      <section id="quiz" className="py-20 bg-loam-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">
            Ist dein Pferd bereit für den Frühling?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            In 2 Minuten weißt du es.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-loam-900 font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Quiz starten
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============================================ */}
      {/* ÜBER DIANA - Kurz */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
                Über Diana
              </h2>
              <p className="text-lg text-loam-700 mb-6 leading-relaxed">
                Ich bin Diana – 30+ Jahre Pferdeerfahrung, 20 Jahre Offenstall-Management, 
                16 Jahre Reittherapeutin. Ich durfte lernen, mich zu behaupten – 
                durch Fehler, teure Tierarztrechnungen und schlaflose Nächte.
              </p>
              <p className="text-lg text-loam-700 mb-8 leading-relaxed">
                Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte.
              </p>
              <Link
                href="/ueber-diana"
                className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800 font-medium"
              >
                Mehr über Diana
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/placeholder-diana.png"
                alt="Diana mit Pferd"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WISSEN PREVIEW */}
      {/* ============================================ */}
      <section className="py-20 bg-loam-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
              Entdecke Wissen
            </h2>
            <p className="text-lg text-loam-600">
              Wissenschaftlich fundiert. Praxisnah erklärt.
            </p>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`/images/placeholder-article-${i}.png`}
                    alt="Artikel Bild"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-loam-900 mb-2">
                    Artikel Titel {i}
                  </h3>
                  <p className="text-loam-600 mb-4">
                    Kurze Beschreibung des Artikels...
                  </p>
                  <Link
                    href={`/wissen/artikel-${i}`}
                    className="text-sage-700 hover:text-sage-800 font-medium inline-flex items-center gap-1"
                  >
                    Weiterlesen
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA to All Articles */}
          <div className="text-center">
            <Link
              href="/wissen"
              className="inline-flex items-center gap-2 border-2 border-loam-900 text-loam-900 hover:bg-loam-900 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Alle Artikel entdecken
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
