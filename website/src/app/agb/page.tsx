import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen (AGB) von Pferdesicht für den Kauf digitaler Produkte.",
};

export default function AGBPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-loam-600">
            Stand: Januar 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-pferdesicht space-y-12">
            {/* § 1 Geltungsbereich */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 1 Geltungsbereich
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB")
                gelten für alle Verträge, die zwischen
              </p>
              <div className="bg-paper p-6 rounded-xl border border-loam-100 mb-4">
                <p className="text-loam-700 font-medium mb-2">
                  SDLF Worldwide Solutions LLC
                </p>
                <p className="text-loam-600">
                  3833 Powerline Road Suite 101
                  <br />
                  Fort Lauderdale, FL 33309
                  <br />
                  United States
                  <br />
                  E-Mail: info@pferdesicht.com
                </p>
              </div>
              <p className="text-loam-600 leading-relaxed mb-4">
                (nachfolgend „Anbieter") und dem Kunden (nachfolgend „Kunde")
                über die Website pferdesicht.com geschlossen werden.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Diese AGB gelten ausschließlich. Abweichende, entgegenstehende
                oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden
                nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer
                Geltung ausdrücklich zugestimmt hat.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Verbraucher im Sinne dieser AGB ist jede natürliche Person,
                die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend
                weder ihrer gewerblichen noch ihrer selbständigen beruflichen
                Tätigkeit zugerechnet werden können.
              </p>
            </div>

            {/* § 2 Vertragsgegenstand */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 2 Vertragsgegenstand
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Gegenstand des Vertrages ist der Verkauf digitaler Produkte
                (E-Books, Online-Guides, digitale Kurse) über die Website
                pferdesicht.com.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Die wesentlichen Merkmale der Produkte ergeben sich aus der
                jeweiligen Produktbeschreibung auf der Website.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Die Inhalte dienen ausschließlich der allgemeinen Information
                und ersetzen keine professionelle tierärztliche Beratung.
              </p>
            </div>

            {/* § 3 Vertragsschluss */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 3 Vertragsschluss
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Die Darstellung der Produkte auf der Website stellt kein
                rechtlich bindendes Angebot, sondern eine Aufforderung zur
                Bestellung dar.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Durch Anklicken des Buttons „Jetzt kaufen" oder einer
                vergleichbaren Bezeichnung gibt der Kunde ein verbindliches
                Angebot zum Kauf des betreffenden Produkts ab.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (3) Der Anbieter bestätigt den Eingang der Bestellung
                unverzüglich per E-Mail. Diese Eingangsbestätigung stellt noch
                keine Annahme des Angebots dar.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (4) Der Vertrag kommt zustande, wenn der Anbieter das Angebot
                durch Zusendung des digitalen Produkts oder eines Download-Links
                annimmt.
              </p>
            </div>

            {/* § 4 Preise und Zahlung */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 4 Preise und Zahlung
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Alle auf der Website angegebenen Preise sind Endpreise. Da
                der Anbieter seinen Sitz in den USA hat, fällt keine deutsche
                Umsatzsteuer an.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Die Zahlung erfolgt über die auf der Website angebotenen
                Zahlungsmethoden. Der Kaufpreis ist sofort mit Vertragsschluss
                fällig.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Die Abwicklung der Zahlung erfolgt über externe
                Zahlungsdienstleister. Es gelten zusätzlich deren Allgemeine
                Geschäftsbedingungen.
              </p>
            </div>

            {/* § 5 Lieferung digitaler Inhalte */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 5 Lieferung digitaler Inhalte
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Nach Zahlungseingang erhält der Kunde unverzüglich Zugang zu
                den erworbenen digitalen Inhalten per E-Mail (Download-Link
                und/oder Zugangsdaten).
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Der Kunde ist für die Sicherung der erhaltenen digitalen
                Inhalte selbst verantwortlich. Eine erneute Zustellung nach
                Datenverlust beim Kunden kann nicht garantiert werden.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Systemvoraussetzungen: Zum Öffnen der PDF-Dateien wird ein
                PDF-Reader benötigt (z.B. Adobe Acrobat Reader). Für
                Online-Inhalte ist eine Internetverbindung erforderlich.
              </p>
            </div>

            {/* § 6 Nutzungsrechte */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 6 Nutzungsrechte
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Der Kunde erhält mit Bezahlung ein einfaches, nicht
                übertragbares Nutzungsrecht an den erworbenen digitalen Inhalten
                für den persönlichen Gebrauch.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Eine Weitergabe, Vervielfältigung, Veröffentlichung oder
                gewerbliche Nutzung der Inhalte – auch auszugsweise – ist ohne
                ausdrückliche schriftliche Genehmigung des Anbieters nicht
                gestattet.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Der Ausdruck für den persönlichen Gebrauch ist gestattet.
              </p>
            </div>

            {/* § 7 Widerrufsrecht */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 7 Widerrufsrecht
              </h2>
              <div className="bg-sage-50 p-6 rounded-xl border border-sage-200 mb-6">
                <h3 className="font-serif text-xl text-loam-900 mb-3">
                  Widerrufsbelehrung
                </h3>
                <p className="text-loam-600 leading-relaxed mb-4">
                  <strong className="text-loam-900">Widerrufsrecht:</strong>
                  <br />
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                  Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist
                  beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                </p>
                <p className="text-loam-600 leading-relaxed mb-4">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (SDLF Worldwide
                  Solutions LLC, 3833 Powerline Road Suite 101, Fort Lauderdale,
                  FL 33309, United States, E-Mail: info@pferdesicht.com) mittels
                  einer eindeutigen Erklärung (z.B. ein mit der Post versandter
                  Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu
                  widerrufen, informieren.
                </p>
                <p className="text-loam-600 leading-relaxed">
                  <strong className="text-loam-900">Folgen des Widerrufs:</strong>
                  <br />
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                  Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
                  spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an
                  dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
                  eingegangen ist.
                </p>
              </div>
              <p className="text-loam-600 leading-relaxed">
                <strong className="text-loam-900">14-Tage-Geld-zurück-Garantie:</strong>{" "}
                Unabhängig vom gesetzlichen Widerrufsrecht bieten wir eine
                freiwillige 14-Tage-Geld-zurück-Garantie. Wenn Sie mit dem Produkt
                nicht zufrieden sind, erstatten wir Ihnen den vollen Kaufpreis –
                ohne Wenn und Aber.
              </p>
            </div>

            {/* § 8 Gewährleistung */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 8 Gewährleistung
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Es gelten die gesetzlichen Gewährleistungsrechte.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (2) Der Anbieter haftet nicht für die inhaltliche Richtigkeit,
                Vollständigkeit und Aktualität der bereitgestellten
                Informationen. Die Nutzung der Inhalte erfolgt auf eigene
                Verantwortung des Kunden.
              </p>
            </div>

            {/* § 9 Haftung */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 9 Haftung
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei
                Verletzung wesentlicher Vertragspflichten, deren Erfüllung die
                ordnungsgemäße Durchführung des Vertrages überhaupt erst
                ermöglicht. Die Haftung ist in diesen Fällen auf den
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Die vorstehenden Haftungsbeschränkungen gelten nicht bei
                Verletzung von Leben, Körper und Gesundheit.
              </p>
            </div>

            {/* § 10 Hinweis */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 10 Hinweis zur Tiergesundheit
              </h2>
              <div className="bg-gold-50 p-6 rounded-xl border border-gold-200">
                <p className="text-loam-600 leading-relaxed">
                  Die in den digitalen Produkten enthaltenen Informationen
                  dienen ausschließlich der allgemeinen Aufklärung und
                  Weiterbildung. Sie ersetzen in keinem Fall die Beratung oder
                  Behandlung durch einen Tierarzt. Bei gesundheitlichen Problemen
                  oder Fragen zur Gesundheit Ihres Pferdes wenden Sie sich bitte
                  immer an einen Tierarzt.
                </p>
              </div>
            </div>

            {/* § 11 Schlussbestimmungen */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                § 11 Schlussbestimmungen
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                (1) Es gilt das Recht der Vereinigten Staaten von Amerika unter
                Ausschluss des UN-Kaufrechts, soweit diese Rechtswahl nicht dazu
                führt, dass dem Verbraucher der Schutz entzogen wird, der ihm
                durch zwingende Bestimmungen des Rechts des Staates gewährt wird,
                in dem er seinen gewöhnlichen Aufenthalt hat.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
              <p className="text-loam-600 leading-relaxed">
                (3) Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-paper p-6 rounded-xl border border-loam-100">
              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Fragen zu unseren AGB?
              </h3>
              <p className="text-loam-600 mb-4">
                Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen wenden Sie
                sich bitte an:
              </p>
              <a
                href="mailto:info@pferdesicht.com"
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                info@pferdesicht.com
              </a>
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
