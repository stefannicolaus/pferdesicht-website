import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Pferdesicht – Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 mb-4">
            Datenschutzerklärung
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
            {/* Einleitung */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Allgemeine Hinweise
              </h3>
              <p className="text-loam-600 leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-loam-600 leading-relaxed mb-4">
                <strong className="text-loam-900">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="text-loam-600 leading-relaxed mb-4">
                <strong className="text-loam-900">
                  Wie erfassen wir Ihre Daten?
                </strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
                ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="text-loam-600 leading-relaxed">
                <strong className="text-loam-900">
                  Wofür nutzen wir Ihre Daten?
                </strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>

            {/* Verantwortliche Stelle */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                2. Verantwortliche Stelle
              </h2>
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
                </p>
                <p className="text-loam-600 mt-4">
                  <strong className="text-loam-900">E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@pferdesicht.com"
                    className="text-sage-600 hover:text-sage-700"
                  >
                    info@pferdesicht.com
                  </a>
                </p>
              </div>
              <p className="text-loam-600 leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z.B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                3. Hosting
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Externes Hosting
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern des
                Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
                eine Website generiert werden, handeln. Das externe Hosting
                erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden und im Interesse einer
                sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter.
              </p>
            </div>

            {/* Allgemeine Hinweise */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Datenschutz
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Hinweis zur Datenweitergabe in die USA
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Auf unserer Website sind unter anderem Tools von Unternehmen mit
                Sitz in den USA eingebunden. Wenn diese Tools aktiv sind, können
                Ihre personenbezogenen Daten an die US-Server der jeweiligen
                Unternehmen weitergegeben werden. Wir weisen darauf hin, dass die
                USA kein sicherer Drittstaat im Sinne des EU-Datenschutzrechts
                sind. Wir sind bemüht, entsprechende Garantien für den
                Datenschutz bei der Übermittlung zu gewährleisten.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Recht auf Datenübertragbarkeit
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit an uns wenden.
              </p>
            </div>

            {/* Datenerfassung */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                5. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Kontaktformular
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
                den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
                geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung
                dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                auf unserem berechtigten Interesse an der effektiven Bearbeitung
                der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Anfrage per E-Mail
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive
                aller daraus hervorgehenden personenbezogenen Daten (Name,
                Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
                Ihre Einwilligung weiter.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Newsletter
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen
                möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
                Informationen, welche uns die Überprüfung gestatten, dass Sie der
                Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang
                des Newsletters einverstanden sind. Weitere Daten werden nicht
                bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden
                wir ausschließlich für den Versand der angeforderten
                Informationen und geben diese nicht an Dritte weiter. Sie können
                Ihre Einwilligung zur Speicherung der Daten und deren Nutzung zum
                Newsletter-Versand jederzeit widerrufen, etwa über den
                &quot;Abmelden&quot;-Link im Newsletter.
              </p>
            </div>

            {/* Plugins und Tools */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                6. Plugins und Tools
              </h2>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Google Fonts (lokales Hosting)
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Google Fonts, die lokal installiert sind. Eine
                Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
            </div>

            {/* eCommerce */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                7. eCommerce und Zahlungsanbieter
              </h2>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Verarbeitung von Daten (Kunden- und Vertragsdaten)
              </h3>
              <p className="text-loam-600 leading-relaxed mb-6">
                Wir erheben, verarbeiten und nutzen personenbezogene Daten nur,
                soweit sie für die Begründung, inhaltliche Ausgestaltung oder
                Änderung des Rechtsverhältnisses erforderlich sind
                (Bestandsdaten). Personenbezogene Daten über die Inanspruchnahme
                dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen
                wir nur, soweit dies erforderlich ist, um dem Nutzer die
                Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
              </p>

              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Zahlungsdienste
              </h3>
              <p className="text-loam-600 leading-relaxed">
                Wir binden Zahlungsdienste von Drittunternehmen auf unserer
                Website ein. Wenn Sie einen Kauf bei uns tätigen, werden Ihre
                Zahlungsdaten (z.B. Name, Zahlungssumme, Kontoverbindung,
                Kreditkartennummer) vom Zahlungsdienstleister zum Zwecke der
                Zahlungsabwicklung verarbeitet. Für diese Transaktionen gelten
                die jeweiligen Vertrags- und Datenschutzbestimmungen der
                jeweiligen Anbieter.
              </p>
            </div>

            {/* Ihre Rechte */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-4">
                8. Ihre Rechte
              </h2>
              <p className="text-loam-600 leading-relaxed mb-4">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside text-loam-600 space-y-2 mb-4">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung oder Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
              </ul>
              <p className="text-loam-600 leading-relaxed">
                Sie haben zudem das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren.
              </p>
            </div>

            {/* Kontakt Datenschutz */}
            <div className="bg-sage-50 p-6 rounded-xl border border-sage-200">
              <h3 className="font-serif text-xl text-loam-900 mb-3">
                Fragen zum Datenschutz?
              </h3>
              <p className="text-loam-600 mb-4">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
                eine E-Mail:
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
