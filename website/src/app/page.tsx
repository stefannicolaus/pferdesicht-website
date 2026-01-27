import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
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
            <h1 className="font-serif text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Finde DEINE Perspektive im<br />
              <span className="italic text-gold-400">Meinungs-Dschungel.</span>
            </h1>

            {/* Subheadline - Validierung */}
            <div className="border-l-4 border-gold-400 pl-6 mb-10">
              <p className="text-white/90 text-lg leading-relaxed">
                Du bist nicht „pingelig", wenn du Dinge hinterfragst – du bist konsequent. Doch dein Weg zur natürlichen Haltung ist gepflastert mit widersprüchlichen Informationen. Ich filtere das für dich: Fundiert sortiert und im Matsch des Alltags getestet.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="#quiz"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-loam-900 font-medium px-10 py-5 rounded-xl transition-colors"
            >
              Frühlings-Check starten
              <ChevronRight className="w-5 h-5" />
            </Link>

            {/* Trust Badges */}
            <div className="flex gap-6 text-white/80 text-sm mt-6">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white/60 rounded-full"></span>
                <span>2 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white/60 rounded-full"></span>
                <span>Persönlicher Fahrplan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white/60 rounded-full"></span>
                <span>100% kostenfrei</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GASLIGHTING SECTION - "Kennst du das?" */}
      {/* ============================================ */}
      <section className="py-20 bg-loam-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12 text-center">
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
            <p className="text-2xl text-white font-medium mb-4">
              Du bist nicht das Problem. Das System ist das Problem.
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Was du hier bekommst
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
              <h3 className="font-serif text-xl text-white mb-4">
                Sicherheit in deinen Entscheidungen
              </h3>
              <p className="text-white/90 leading-relaxed">
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
              <h3 className="font-serif text-xl text-white mb-4">
                Das Ende des nagenden Zweifels
              </h3>
              <p className="text-white/90 leading-relaxed">
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
              <h3 className="font-serif text-xl text-white mb-4">
                Handlungsfähigkeit statt Überforderung
              </h3>
              <p className="text-white/90 leading-relaxed">
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
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-medium px-10 py-5 rounded-lg transition-colors"
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
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
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
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Entdecke Wissen
            </h2>
            <p className="text-lg text-white/90">
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
                  <h3 className="font-serif text-xl text-white mb-2">
                    Artikel Titel {i}
                  </h3>
                  <p className="text-white/90 mb-4">
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
              className="inline-flex items-center gap-2 border-2 border-loam-900 text-white hover:bg-loam-900 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Alle Artikel entdecken
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
