"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function AGBPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-loam mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-loam/80">
          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">1. Geltungsbereich</h2>
            <p className="leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen, die über Pferdesicht.com angeboten
              werden. Betreiber der Website ist SDLF Worldwide Solutions LLC, 3833 POWERLINE ROAD SUITE 101, FORT
              LAUDERDALE, FL 33309, United States.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">2. Vertragsschluss</h2>
            <p className="leading-relaxed">
              Die Darstellung der Produkte und Leistungen auf unserer Website stellt kein rechtlich bindendes Angebot,
              sondern eine Aufforderung zur Bestellung dar. Durch das Absenden einer Bestellung geben Sie ein bindendes
              Angebot zum Vertragsschluss ab.
            </p>
            <p className="leading-relaxed mt-4">
              Der Vertragsschluss erfolgt durch unsere Auftragsbestätigung per E-Mail, in der wir den Eingang Ihrer
              Bestellung bestätigen und Details zur Leistungserbringung mitteilen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">3. Leistungsumfang</h2>
            <p className="leading-relaxed">
              Pferdesicht.com bietet Informationen, Ratgeber und digitale Produkte rund um das Thema Pferdehaltung und
              Pferdegesundheit. Die angebotenen Inhalte dienen der allgemeinen Information und ersetzen keine
              tierärztliche Beratung oder Behandlung.
            </p>
            <p className="leading-relaxed mt-4">
              Alle Informationen und Empfehlungen auf dieser Website wurden nach bestem Wissen und Gewissen erstellt.
              Eine Garantie für die Vollständigkeit, Richtigkeit und letzte Aktualität kann jedoch nicht übernommen
              werden.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">4. Preise und Zahlungsbedingungen</h2>
            <p className="leading-relaxed">
              Die angegebenen Preise sind Endpreise inklusive der gesetzlichen Mehrwertsteuer. Bei kostenpflichtigen
              digitalen Produkten wird der Preis vor Abschluss der Bestellung klar ausgewiesen.
            </p>
            <p className="leading-relaxed mt-4">
              Die Zahlung erfolgt über die auf der Website angegebenen Zahlungsmethoden. Der Zugang zu digitalen
              Produkten wird nach vollständigem Zahlungseingang gewährt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">5. Lieferung digitaler Produkte</h2>
            <p className="leading-relaxed">
              Digitale Produkte (z.B. E-Books, PDFs, Guides) werden per E-Mail oder Download-Link zur Verfügung
              gestellt. Die Lieferung erfolgt unmittelbar nach Zahlungseingang.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">6. Widerrufsrecht</h2>
            <p className="leading-relaxed">
              Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Das Widerrufsrecht erlischt bei digitalen Inhalten
              vorzeitig, wenn Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der
              Widerrufsfrist beginnen, und Sie Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit
              Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">7. Urheberrecht und Nutzungsrechte</h2>
            <p className="leading-relaxed">
              Alle Inhalte auf Pferdesicht.com, einschließlich Texte, Bilder, Grafiken und digitale Produkte, sind
              urheberrechtlich geschützt. Die Nutzung ist ausschließlich für den persönlichen, nicht-kommerziellen
              Gebrauch gestattet.
            </p>
            <p className="leading-relaxed mt-4">
              Eine Weitergabe, Vervielfältigung oder Veröffentlichung der Inhalte ist ohne ausdrückliche schriftliche
              Genehmigung nicht gestattet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">8. Haftungsbeschränkung</h2>
            <p className="leading-relaxed">
              Wir haften nicht für Schäden, die durch die Anwendung der auf dieser Website bereitgestellten
              Informationen entstehen. Die Informationen ersetzen keine professionelle tierärztliche Beratung.
            </p>
            <p className="leading-relaxed mt-4">
              Bei leicht fahrlässiger Verletzung nicht vertragswesentlicher Pflichten ist die Haftung ausgeschlossen.
              Dies gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">9. Newsletter und E-Mail-Kommunikation</h2>
            <p className="leading-relaxed">
              Wenn Sie sich für unseren Newsletter anmelden, verwenden wir Ihre E-Mail-Adresse ausschließlich für den
              Versand von Informationen über unsere Leistungen, Produkte und Inhalte. Sie können sich jederzeit vom
              Newsletter abmelden.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">10. Streitbeilegung</h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              finden.
            </p>
            <p className="leading-relaxed mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">11. Änderungen der AGB</h2>
            <p className="leading-relaxed">
              Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Version ist auf
              unserer Website einsehbar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">12. Schlussbestimmungen</h2>
            <p className="leading-relaxed">
              Es gilt das Recht der Vereinigten Staaten. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-loam/20">
            <p className="text-sm text-loam/60">Stand: Dezember 2025</p>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  )
}
