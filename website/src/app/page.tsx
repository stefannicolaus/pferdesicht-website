import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

// Check icons for hero section
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Home() {
  // Get latest blog posts for preview
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION - Fullscreen with gradient */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-koppel.png"
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

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Finde die Wahrheit für dein Pferd im{" "}
              <span className="italic text-gold-400">Meinungs-Dschungel.</span>
            </h1>

            {/* Subtext with gold border */}
            <div className="border-l-4 border-gold-400 pl-6 mb-10">
              <p className="text-white/90 text-lg leading-relaxed">
                Du hinterfragst nicht zu viel – du bist konsequent. Hier bekommst
                du getestete, praxisnahe Informationen zu natürlicher Pferdehaltung.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-loam-900 font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              Frühlings-Check starten
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* Check Icons */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-gold-400" />
                <span>2 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-gold-400" />
                <span>Persönlicher Fahrplan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-gold-400" />
                <span>100% kostenfrei</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUIZ SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-sage-600 uppercase tracking-wider mb-4 block">
              DEIN PERSÖNLICHER FRÜHLINGS-FAHRPLAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-loam-900 mb-6">
              Wie fit ist dein Pferd für den Frühling?
            </h2>
            <p className="text-lg text-loam-600 max-w-2xl mx-auto">
              Fellwechsel, Anweiden, Parasiten – überall liest du etwas anderes.
              Unser Quiz sortiert das für dich.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-paper p-8 rounded-2xl border border-loam-100 text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Risiko-Einschätzung
              </h3>
              <p className="text-loam-600">
                Ampelsystem zeigt dir auf einen Blick: grün, gelb oder rot.
              </p>
            </div>

            <div className="bg-paper p-8 rounded-2xl border border-loam-100 text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Deine Prioritäten
              </h3>
              <p className="text-loam-600">
                Was ist wirklich wichtig für DEIN Pferd? Wir zeigen es dir.
              </p>
            </div>

            <div className="bg-paper p-8 rounded-2xl border border-loam-100 text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Persönlicher Kalender
              </h3>
              <p className="text-loam-600">
                Februar bis Mai: Woche für Woche, was zu tun ist.
              </p>
            </div>
          </div>

          {/* Quiz Meta & CTA */}
          <div className="text-center">
            <p className="text-loam-500 mb-6">
              8 kurze Fragen • Sofort Ergebnis • Report per E-Mail
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Jetzt Quiz starten
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DIANA SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana von Pferdesicht"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-medium text-sage-600 uppercase tracking-wider mb-4 block">
                ÜBER MICH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
                Ich bin Diana.
              </h2>
              <div className="space-y-4 text-loam-600 leading-relaxed">
                <p>
                  Seit über 30 Jahren begleiten mich Pferde. Was als jugendliche
                  Leidenschaft begann, wurde zur Lebensaufgabe: Pferdewissen
                  sortieren, prüfen und verständlich weitergeben.
                </p>
                <p>
                  Ich habe 20 Jahre einen Offenstall geführt, bin seit 16 Jahren
                  Reittherapeutin und habe bei Hempura 15 Jahre lang tausende
                  Gespräche mit Pferdebesitzern geführt.
                </p>
                <p className="font-medium text-loam-900">
                  Ich filtere für dich die Wahrheit im Meinungs-Dschungel.
                </p>
              </div>
              <Link
                href="/ueber-diana"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium mt-8"
              >
                Mehr über mich
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUOTE SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-loam-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed mb-8">
            &ldquo;Es gibt nie nur{" "}
            <span className="italic text-gold-400">die eine richtige Lösung</span>,
            wenn es um dein Pferd geht. Jedes Pferd ist anders. Jede Situation
            ist anders. Deine Aufgabe ist es, hinzuschauen und die Signale zu
            lesen.&rdquo;
          </blockquote>
          <p className="text-gold-400 font-medium">— Diana</p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WISSEN SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-loam-900 mb-6">
              Wissen schafft Gesundheit.
              <br />
              <span className="text-sage-600">Beziehung schafft Vertrauen.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Block 1 */}
            <div>
              <h3 className="font-serif text-2xl text-loam-900 mb-4">
                Das Experten-Netzwerk
              </h3>
              <p className="text-loam-600 leading-relaxed">
                15 Jahre Gespräche mit über 1.000 Tierärzten, Therapeuten,
                Hufschmieden und Ernährungsberatern. Dazu ein Hintergrund im
                Futtermittelvertrieb und jahrelange eigene Recherche. Dieses
                Wissen fließt in jeden Artikel, jeden Guide und jede Empfehlung.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-serif text-2xl text-loam-900 mb-4">
                Der Blick hinter die Kulissen
              </h3>
              <p className="text-loam-600 leading-relaxed">
                5 Jahre habe ich renommierte Freiheitsdressur-Ausbilder
                begleitet und beobachtet. Nicht, um Tricks zu lernen, sondern um
                zu verstehen: Wie entsteht echte Partnerschaft? Die Antwort:
                Durch freiwillige Verbindung auf Basis von Vertrauen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG PREVIEW SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-sage-600 uppercase tracking-wider mb-2 block">
                BLOG
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-loam-900">
                Aktuelle Artikel
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-2"
            >
              Alle Artikel
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-paper rounded-2xl overflow-hidden border border-loam-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Image */}
                  {post.frontmatter.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.frontmatter.image}
                        alt={
                          post.frontmatter.imageAlt || post.frontmatter.title
                        }
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category & Time */}
                    <div className="flex items-center gap-3 text-sm text-loam-500 mb-3">
                      <span className="text-sage-600 font-medium">
                        {post.frontmatter.category}
                      </span>
                      {post.frontmatter.readingTime && (
                        <>
                          <span>•</span>
                          <span>{post.frontmatter.readingTime}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl text-loam-900 mb-2 group-hover:text-sage-700 transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h3>

                    {/* Description */}
                    <p className="text-loam-600 text-sm line-clamp-3 flex-1">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Bereit für den Perspektivwechsel?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Starte mit dem kostenlosen Frühlings-Check und erhalte deinen
            persönlichen Fahrplan für die kommenden Monate.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-sage-700 font-semibold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors text-lg"
          >
            Jetzt Frühlings-Check starten
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
