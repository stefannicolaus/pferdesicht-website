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

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Finde die Wahrheit für dein Pferd im{" "}
              <span className="italic text-gold-400">Meinungs-Dschungel.</span>
            </h1>

            {/* Subtext with gold border */}
            <div className="border-l-4 border-gold-400 pl-6 mb-10">
              <p className="text-white/90 text-lg leading-relaxed">
                Du bist nicht „pingelig", wenn du Dinge hinterfragst – du bist
                konsequent. Doch dein Weg zur natürlichen Haltung ist gepflastert
                mit widersprüchlichen Informationen. Ich filtere das für dich:
                Fundiert sortiert und im Matsch des Alltags getestet.
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
              Fellwechsel, Anweiden, Parasiten – alle reden gleichzeitig auf dich
              ein. Aber was ist wirklich wichtig für DEIN Pferd? In 2 Minuten
              weißt du es.
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
            wenn es um dein Pferd geht.&rdquo;
          </blockquote>
          <p className="text-loam-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Standard-Antworten werden Individuen niemals gerecht. Was für das
            Pferd deiner Stallkollegin funktioniert, kann für deines der falsche
            Weg sein. Wer nur nach „Schema F" sucht, überhört oft die leisen
            Signale. Denn Pferdehaltung ist kein statischer Zustand, sondern ein
            lebendiger Prozess. Lerne, diese Signale zu lesen und hinzuspüren.
          </p>
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
              <span className="italic text-sage-600">Beziehung schafft Vertrauen.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Block 1 - Experten-Netzwerk */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sage-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10.5v3m0 0v3m0-3h3m-3 0H9"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-sage-600 uppercase tracking-wider">
                  Das Experten-Netzwerk
                </h3>
              </div>
              <p className="text-loam-600 leading-relaxed">
                Mein Wissen ist über 15 Jahre gewachsen. Es basiert auf tausenden
                Gesprächen mit Tierärzten, Therapeuten, Hufschmieden und
                Ernährungsexperten – entstanden aus der direkten Praxis unseres
                Futtermittel-Vertriebs. Ergänzt durch unzählige Stunden intensiver
                Eigenrecherche. Keine Mythen, sondern Fakten, die dir Sicherheit geben.
              </p>
            </div>

            {/* Block 2 - Blick hinter die Kulissen */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sage-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-sage-600 uppercase tracking-wider">
                  Der Blick hinter die Kulissen
                </h3>
              </div>
              <p className="text-loam-600 leading-relaxed">
                Durch Kooperationen durfte ich 5 Jahre lang den bekanntesten Trainern
                der Freiarbeit über die Schulter schauen. Dort habe ich gelernt, was
                Partnerschaft wirklich bedeutet: Eine Verbindung, die hält, wenn das
                Seil fällt. Ein Pferd, das bei dir bleibt – nicht weil es muss, sondern
                weil es sich in jedem Moment freiwillig und voller Vertrauen für dich
                entscheidet.
              </p>
            </div>

            {/* Block 3 - Therapeutische Perspektive */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sage-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-sage-600 uppercase tracking-wider">
                  Die therapeutische Perspektive
                </h3>
              </div>
              <p className="text-loam-600 leading-relaxed">
                16 Jahre Reittherapie haben mich gelehrt: Das Pferd reagiert nie
                grundlos – es spiegelt. Ich habe über 200 Menschen begleitet und dabei
                gesehen, was normale Trainer oft übersehen: Die Beziehung zwischen
                Mensch und Pferd ist keine Einbahnstraße. Wenn du verstehst, warum dein
                Pferd reagiert, findest du die Lösung.
              </p>
            </div>
          </div>

          {/* Link zu Diana's Story */}
          <div className="text-center mt-12">
            <Link
              href="/ueber-diana"
              className="inline-flex items-center gap-2 text-loam-600 hover:text-sage-700 italic"
            >
              Wie ich lernte, meinem Bauchgefühl wieder zu vertrauen – Dianas Story
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
// Test Auto-Deploy Mon Jan 26 07:55:59 EST 2026
// Auto-Deploy Test Mon Jan 26 08:17:15 EST 2026
