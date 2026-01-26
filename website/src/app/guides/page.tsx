import Link from "next/link";
import Image from "next/image";

// ============================================
// Guide Data
// ============================================

const guides = [
  {
    slug: "fruehling",
    title: "Frühlings-Guide",
    subtitle: "für Pferdebesitzer",
    description:
      "Alles, was du über Anweiden, Fellwechsel, Fütterung und Parasiten wissen musst – fundiert recherchiert, im Alltag getestet und verständlich erklärt.",
    price: "47 €",
    modules: 4,
    words: "25.000+",
    topics: ["Fruktan & Anweiden", "Fellwechsel", "Fütterung", "Parasiten"],
    badge: "Bestseller",
    available: true,
  },
  {
    slug: "sommer",
    title: "Sommer-Guide",
    subtitle: "für Pferdebesitzer",
    description:
      "Hitze, Insekten, Weidemanagement und Sommerekzem – so bringst du dein Pferd entspannt durch die heißen Monate.",
    price: "47 €",
    modules: 4,
    words: "20.000+",
    topics: ["Hitzemanagement", "Insektenschutz", "Sommerekzem", "Weide im Sommer"],
    badge: "Bald verfügbar",
    available: false,
  },
  {
    slug: "herbst",
    title: "Herbst-Guide",
    subtitle: "für Pferdebesitzer",
    description:
      "Abweiden, Immunsystem stärken und die richtige Vorbereitung auf den Winter – damit dein Pferd stark in die kalte Jahreszeit startet.",
    price: "47 €",
    modules: 4,
    words: "20.000+",
    topics: ["Abweiden", "Immunsystem", "Fellwechsel Herbst", "Wintervorbereitung"],
    badge: "Bald verfügbar",
    available: false,
  },
  {
    slug: "winter",
    title: "Winter-Guide",
    subtitle: "für Pferdebesitzer",
    description:
      "Eindecken oder nicht? Fütterung bei Kälte, Bewegung im Winter und wie du Matsch und Langeweile meisterst.",
    price: "47 €",
    modules: 4,
    words: "20.000+",
    topics: ["Thermoregulation", "Winterfütterung", "Bewegung", "Haltung im Winter"],
    badge: "Bald verfügbar",
    available: false,
  },
];

// ============================================
// Guide Card Component
// ============================================

function GuideCard({
  guide,
}: {
  guide: (typeof guides)[0];
}) {
  return (
    <div
      className={`relative bg-paper rounded-2xl border overflow-hidden transition-shadow ${
        guide.available
          ? "border-loam-100 shadow-soft hover:shadow-soft-lg"
          : "border-loam-100/50 opacity-75"
      }`}
    >
      {/* Badge */}
      {guide.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              guide.available
                ? "bg-gold-500 text-loam-900"
                : "bg-loam-200 text-loam-600"
            }`}
          >
            {guide.badge}
          </span>
        </div>
      )}

      {/* Cover Image / Placeholder */}
      <div
        className={`aspect-[16/10] flex items-center justify-center ${
          guide.available
            ? "bg-gradient-to-br from-sage-700 to-sage-900"
            : "bg-gradient-to-br from-loam-200 to-loam-300"
        }`}
      >
        <div className="text-center p-6">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
              guide.available ? "bg-sage-600/50" : "bg-loam-400/30"
            }`}
          >
            <svg
              className={`w-7 h-7 ${guide.available ? "text-sage-200" : "text-loam-500"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <p
            className={`text-xs uppercase tracking-wider mb-1 ${
              guide.available ? "text-sage-300" : "text-loam-500"
            }`}
          >
            Pferdesicht
          </p>
          <h3
            className={`font-serif text-xl ${
              guide.available ? "text-white" : "text-loam-600"
            }`}
          >
            {guide.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-loam-900 mb-2">
          {guide.title}
          <span className="block text-base font-sans text-loam-500 font-normal">
            {guide.subtitle}
          </span>
        </h3>
        <p className="text-loam-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {guide.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {guide.topics.map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 bg-sage-50 text-sage-700 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-loam-500 mb-6">
          <span>{guide.modules} Module</span>
          <span>•</span>
          <span>{guide.words} Wörter</span>
        </div>

        {/* CTA */}
        {guide.available ? (
          <Link
            href={`/guides/${guide.slug}`}
            className="flex items-center justify-between w-full px-5 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors"
          >
            <span className="font-medium">Mehr erfahren</span>
            <span className="font-semibold">{guide.price}</span>
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center justify-center w-full px-5 py-3 bg-loam-100 text-loam-400 rounded-full cursor-not-allowed"
          >
            <span>Bald verfügbar</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// Page Component
// ============================================

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-sage-600 uppercase tracking-wider mb-4 block">
            Wissen, das bleibt
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
            Die Pferdesicht{" "}
            <span className="italic">Guide-Bibliothek</span>
          </h1>
          <p className="text-xl text-loam-600 leading-relaxed max-w-2xl mx-auto">
            Fundiert recherchiert, im Alltag getestet, verständlich erklärt.
            Jeder Guide gibt dir das Wissen, um in einer Jahreszeit sicher zu handeln.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 border-b border-loam-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-loam-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sofortiger Zugang</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>PDF-Download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Lebenslange Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14 Tage Geld-zurück</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Guides Section */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
              Warum ein Guide statt Google?
            </h2>
            <p className="text-lg text-loam-600">
              Weil sortiertes Wissen mehr wert ist als 47 offene Tabs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-loam-900 mb-2">Geprüfte Quellen</h3>
              <p className="text-sm text-loam-600">
                Keine Mythen, keine Stallweisheiten – nur Fakten aus verlässlichen Quellen und 30 Jahren Erfahrung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-medium text-loam-900 mb-2">Alles an einem Ort</h3>
              <p className="text-sm text-loam-600">
                Statt stundenlanger Recherche: Ein Guide pro Jahreszeit mit allem, was du wissen musst.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-medium text-loam-900 mb-2">Sofort umsetzbar</h3>
              <p className="text-sm text-loam-600">
                Konkrete Handlungspläne und Checklisten, die du direkt im Stall anwenden kannst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diana Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Diana Portrait */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Diana_Pferdesicht.jpeg"
                  alt="Diana von Pferdesicht"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
                Von mir für dich recherchiert
              </h2>
              <div className="space-y-4 text-loam-600 leading-relaxed">
                <p>
                  Jeder Guide entsteht aus hunderten Stunden Recherche, tausenden
                  Gesprächen mit Experten und 30 Jahren eigener Erfahrung. Ich
                  schreibe so, wie ich es meiner besten Freundin erklären würde.
                </p>
                <p className="font-medium text-loam-900">
                  Mein Ziel: Dir die Sicherheit geben, die du verdienst.
                </p>
              </div>
              <Link
                href="/ueber-diana"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium mt-6"
              >
                Mehr über mich
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16 lg:py-24 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-4">
            Noch unsicher?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Starte mit dem kostenlosen Frühlings-Check
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            In 2 Minuten weißt du, wo du stehst – und welcher Guide dir am meisten hilft.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-sage-700 font-semibold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors text-lg"
          >
            Jetzt Quiz starten
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
