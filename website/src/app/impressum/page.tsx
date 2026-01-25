import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Pferdesicht.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 mb-4">
            Impressum
          </h1>
          <p className="text-loam-600">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-pferdesicht">
            {/* Anbieter */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                Anbieter
              </h2>
              <div className="bg-paper p-6 rounded-xl border border-loam-100">
                <p className="text-loam-700 font-medium mb-2">
                  SDLF Worldwide Solutions LLC
                </p>
                <p className="text-loam-600">
                  3833 Powerline Road Suite 101
                  <br />
                  Fort Lauderdale, FL 33309
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                Kontakt
              </h2>
              <p className="text-loam-600">
                <strong className="text-loam-900">E-Mail:</strong>{" "}
                <a
                  href="mailto:info@pferdesicht.com"
                  className="text-sage-600 hover:text-sage-700"
                >
                  info@pferdesicht.com
                </a>
              </p>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="bg-paper p-6 rounded-xl border border-loam-100">
                <p className="text-loam-700 font-medium mb-2">Diana</p>
                <p className="text-loam-600">
                  SDLF Worldwide Solutions LLC
                  <br />
                  3833 Powerline Road Suite 101
                  <br />
                  Fort Lauderdale, FL 33309
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl text-loam-900 mb-6">
                Haftungsausschluss
              </h2>

              {/* Haftung für Inhalte */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-loam-900 mb-3">
                  Haftung für Inhalte
                </h3>
                <p className="text-loam-600 leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich.
                </p>
              </div>

              {/* Haftung für Links */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-loam-900 mb-3">
                  Haftung für Links
                </h3>
                <p className="text-loam-600 leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              {/* Urheberrecht */}
              <div>
                <h3 className="font-serif text-xl text-loam-900 mb-3">
                  Urheberrecht
                </h3>
                <p className="text-loam-600 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </div>

            {/* Hinweis */}
            <div className="bg-gold-50 p-6 rounded-xl border border-gold-200">
              <p className="text-sm text-loam-600">
                <strong className="text-loam-900">Hinweis:</strong> Die Inhalte
                dieser Website dienen ausschließlich der allgemeinen Information
                und ersetzen keine professionelle tierärztliche Beratung. Bei
                gesundheitlichen Problemen Ihres Pferdes wenden Sie sich bitte
                immer an einen Tierarzt.
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-loam-100">
            <Link
              href="/"
              className="text-sage-600 hover:text-sage-700 inline-flex items-center gap-2"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
