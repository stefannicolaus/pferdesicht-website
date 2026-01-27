"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function ImpressumPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-loam mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-loam/80">
          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              SDLF Worldwide Solutions LLC
              <br />
              3833 POWERLINE ROAD SUITE 101
              <br />
              FORT LAUDERDALE, FL 33309
              <br />
              United States
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail:{" "}
              <a href="mailto:info@pferdesicht.com" className="text-gold hover:underline">
                info@pferdesicht.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="leading-relaxed">
              Diana
              <br />
              SDLF Worldwide Solutions LLC
              <br />
              3833 POWERLINE ROAD SUITE 101
              <br />
              FORT LAUDERDALE, FL 33309
              <br />
              United States
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-loam mb-4">Haftungsausschluss</h2>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Haftung für Inhalte</h3>
            <p className="leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
              Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Haftung für Links</h3>
            <p className="leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-serif text-xl text-loam mb-3 mt-6">Urheberrecht</h3>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
    </div>
  )
}
