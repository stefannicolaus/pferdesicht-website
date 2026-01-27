"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function DatenschutzPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-loam mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-loam/80">
          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">2. Hosting</h2>
            <p className="leading-relaxed">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Vercel</h3>
            <p className="leading-relaxed">
              Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel ist ein
              Service zur Bereitstellung von Webinhalten. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene
              Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="leading-relaxed mt-4">
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Datenschutz</h3>
            <p className="leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="leading-relaxed mt-4">
              SDLF Worldwide Solutions LLC
              <br />
              3833 POWERLINE ROAD SUITE 101
              <br />
              FORT LAUDERDALE, FL 33309
              <br />
              United States
            </p>
            <p className="leading-relaxed mt-4">
              E-Mail:{" "}
              <a href="mailto:info@pferdesicht.com" className="text-gold hover:underline">
                info@pferdesicht.com
              </a>
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Speicherdauer</h3>
            <p className="leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 leading-relaxed">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Kontaktformular und Newsletter</h3>
            <p className="leading-relaxed">
              Wenn Sie uns per Kontaktformular oder Newsletter-Anmeldung Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="leading-relaxed mt-4">
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">5. Ihre Rechte</h2>
            <p className="leading-relaxed">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 leading-relaxed">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung unrichtiger personenbezogener Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO)</li>
              <li>der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@pferdesicht.com" className="text-gold hover:underline">
                info@pferdesicht.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">6. Widerspruch gegen Werbe-E-Mails</h2>
            <p className="leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
    </div>
  )
}
