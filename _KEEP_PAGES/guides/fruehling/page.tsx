"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ============================================
// Module Data
// ============================================

const modules = [
  {
    number: "01",
    title: "Fruktan & Anweiden",
    description:
      "Verstehe, was Fruktan wirklich ist, wann es gefährlich wird und wie du dein Pferd sicher auf die Weide bringst – ohne Panik, mit Plan.",
    topics: [
      "Was ist Fruktan und wie entsteht es?",
      "Risikofaktoren richtig einschätzen",
      "Der sichere Anweide-Plan",
      "Weidegras-Management im Jahresverlauf",
    ],
  },
  {
    number: "02",
    title: "Fellwechsel",
    description:
      "Der Fellwechsel ist eine Höchstleistung für den Pferdekörper. Lerne, wie du erkennst, ob dein Pferd Unterstützung braucht – und wie du sie gibst.",
    topics: [
      "Die Physiologie des Fellwechsels",
      "Anzeichen für Probleme erkennen",
      "Sinnvolle Unterstützung (und was Unsinn ist)",
      "Stoffwechsel und Fellwechsel",
    ],
  },
  {
    number: "03",
    title: "Fütterung im Frühjahr",
    description:
      "Die Futterumstellung im Frühjahr birgt Risiken. Hier erfährst du, wie du Verdauungsprobleme vermeidest und den Übergang sanft gestaltest.",
    topics: [
      "Von Heu zu Gras: Der richtige Übergang",
      "Mineralstoffversorgung anpassen",
      "Kraftfutter im Frühjahr – ja oder nein?",
      "Spezialfälle: Cushing, EMS, Hufrehe-Pferde",
    ],
  },
  {
    number: "04",
    title: "Parasiten & Entwurmung",
    description:
      "Schluss mit blindem Entwurmen nach Kalender. Lerne den modernen Ansatz der selektiven Entwurmung – fundiert recherchiert und im Stall bewährt.",
    topics: [
      "Welche Parasiten sind wirklich relevant?",
      "Kotproben richtig nutzen",
      "Selektive vs. strategische Entwurmung",
      "Resistenzen vermeiden",
    ],
  },
];

// ============================================
// FAQ Data
// ============================================

const faqs = [
  {
    question: "Für wen ist der Frühlings-Guide geeignet?",
    answer:
      "Der Guide ist für alle Pferdebesitzer gedacht, die fundiertes Wissen suchen – egal ob Anfänger oder erfahren. Die Inhalte sind verständlich erklärt und im Stall-Alltag getestet. Besonders profitieren Besitzer von Pferden mit Stoffwechselproblemen oder erhöhtem Hufrehe-Risiko.",
  },
  {
    question: "Wie erhalte ich Zugang nach dem Kauf?",
    answer:
      "Nach dem Kauf erhältst du sofort eine E-Mail mit deinem persönlichen Zugangslink. Du kannst den Guide online lesen oder als PDF herunterladen – wie es dir lieber ist.",
  },
  {
    question: "Kann ich den Guide auch ausdrucken?",
    answer:
      "Ja! Du erhältst eine druckoptimierte PDF-Version, die du komplett oder modulweise ausdrucken kannst. Perfekt zum Mitnehmen in den Stall.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, du hast 14 Tage Zeit, den Guide zu testen. Wenn er nicht das Richtige für dich ist, erstatte ich dir den vollen Kaufpreis – ohne Wenn und Aber.",
  },
  {
    question: "Wie unterscheidet sich der Guide von den kostenlosen Artikeln?",
    answer:
      "Die kostenlosen Artikel geben dir einen guten Überblick. Der Guide geht viel tiefer: über 25.000 Wörter strukturiertes Wissen, konkrete Handlungspläne, Checklisten und alle vier Frühjahrsthemen an einem Ort – statt verstreuter Informationen.",
  },
  {
    question: "Wird der Guide aktualisiert?",
    answer:
      "Ja! Wenn sich relevante neue Erkenntnisse ergeben, aktualisiere ich den Guide. Als Käufer hast du dauerhaften Zugang zu allen Updates.",
  },
];

// ============================================
// FAQ Item Component
// ============================================

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-loam-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg"
      >
        <span className="font-medium text-loam-900 pr-4">{question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-loam-400 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-loam-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ============================================
// Page Component
// ============================================

export default function FruehlingGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-loam-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,134,107,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,164,118,0.3),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider bg-gold-500/20 border border-gold-500/30 text-gold-300">
                  Der komplette Frühjahrs-Ratgeber
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Frühlings-Guide
                <span className="block text-gold-400">für Pferdebesitzer</span>
              </h1>
              <p className="text-xl text-loam-300 leading-relaxed mb-8">
                Alles, was du über Anweiden, Fellwechsel, Fütterung und
                Parasiten wissen musst – fundiert recherchiert, im Alltag
                getestet und verständlich erklärt.
              </p>

              {/* Key Points */}
              <ul className="space-y-3 mb-10">
                {[
                  "4 Module mit über 25.000 Wörtern",
                  "Fundiert recherchiert, verständlich erklärt",
                  "Konkrete Handlungspläne und Checklisten",
                  "14 Tage Geld-zurück-Garantie",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-loam-200">
                    <svg
                      className="w-5 h-5 text-sage-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="tactile-button tactile-button-gold text-lg px-8 py-4">
                  Jetzt kaufen – 47 €
                </button>
                <span className="text-sm text-loam-400">
                  Einmalzahlung, lebenslanger Zugang
                </span>
              </div>
            </div>

            {/* Product Mockup */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-sage-800 to-sage-900 rounded-2xl shadow-2xl overflow-hidden border border-sage-700/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 bg-sage-700/50 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-sage-300"
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
                  <p className="text-sage-300 text-sm uppercase tracking-wider mb-2">
                    Pferdesicht
                  </p>
                  <h3 className="font-serif text-3xl text-white mb-4">
                    Frühlings-Guide
                  </h3>
                  <p className="text-sage-400 text-sm">
                    4 Module • 25.000+ Wörter
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
            Kennst du das?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left mt-12">
            {[
              "Du hast 20 Tabs offen, aber immer noch keine klare Antwort.",
              "Im Stall sagt jeder was anderes – und du weißt nicht, wem du glauben sollst.",
              "Du hast Angst, beim Anweiden etwas falsch zu machen.",
              "Die Entwurmungs-Empfehlungen widersprechen sich komplett.",
            ].map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-paper p-6 rounded-xl border border-loam-100"
              >
                <div className="w-8 h-8 bg-loam-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-loam-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-loam-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
            Die Lösung
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
            Ein Guide, der Klarheit schafft
          </h2>
          <p className="text-xl text-loam-600 leading-relaxed max-w-2xl mx-auto">
            Statt verstreuter Informationen bekommst du alles an einem Ort –
            sortiert, fundiert und so erklärt, dass du es wirklich verstehst und
            anwenden kannst.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Was drin steckt
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900">
              4 Module, über 25.000 Wörter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div
                key={module.number}
                className="bg-paper p-8 rounded-2xl border border-loam-100 shadow-soft"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl font-serif text-sage-300">
                    {module.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-loam-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-loam-600">{module.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {module.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-loam-700"
                    >
                      <svg
                        className="w-4 h-4 text-sage-500 flex-shrink-0"
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
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
              Was du bekommst
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                title: "Fundiert recherchiert",
                description:
                  "Für dich sortiert und geprüft – keine Mythen, keine Traditionen ohne Fundament, sondern Wissen aus 30 Jahren Erfahrung.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                ),
                title: "Praxisnah",
                description:
                  "Konkrete Handlungspläne und Checklisten, die du direkt im Stall umsetzen kannst.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Umfassend",
                description:
                  "Über 25.000 Wörter in 4 Modulen – alles, was du für einen entspannten Frühling brauchst.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                ),
                title: "PDF-Download",
                description:
                  "Lade den Guide als PDF herunter und lies ihn offline – perfekt zum Ausdrucken für den Stall.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                ),
                title: "Updates inklusive",
                description:
                  "Wenn sich neue Erkenntnisse ergeben, bekommst du alle Aktualisierungen kostenlos.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                ),
                title: "14 Tage Garantie",
                description:
                  "Nicht zufrieden? Volle Rückerstattung innerhalb von 14 Tagen – ohne Fragen.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-sage-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="font-medium text-loam-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-loam-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-paper p-8 lg:p-12 rounded-2xl border border-loam-100 shadow-soft">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-16 h-16 text-sage-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-2">
                  Von deiner Expertin
                </p>
                <h3 className="font-serif text-2xl text-loam-900 mb-4">
                  Diana – 30+ Jahre Pferdeerfahrung
                </h3>
                <p className="text-loam-600 leading-relaxed mb-4">
                  Als Reittherapeutin und langjährige Offenstall-Betreiberin
                  weiß ich, welche Fragen im Frühjahr wirklich wichtig sind. In
                  diesem Guide teile ich mein gesammeltes Wissen – verständlich,
                  ehrlich und ohne Schnickschnack.
                </p>
                <Link
                  href="/ueber-diana"
                  className="text-sage-600 font-medium hover:text-sage-700 inline-flex items-center gap-1"
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-loam-900 p-8 lg:p-12 rounded-2xl text-center">
            <p className="text-gold-400 text-sm font-medium uppercase tracking-wide mb-4">
              Einmalzahlung, lebenslanger Zugang
            </p>
            <div className="mb-6">
              <span className="font-serif text-6xl text-white">47 €</span>
            </div>
            <p className="text-loam-300 mb-8 max-w-md mx-auto">
              Alle 4 Module, über 25.000 Wörter, PDF-Download, alle zukünftigen
              Updates – für weniger als ein Hufschmied-Besuch.
            </p>
            <button className="tactile-button tactile-button-gold text-lg px-10 py-4 mb-6">
              Jetzt kaufen
            </button>
            <p className="text-sm text-loam-400">
              14 Tage Geld-zurück-Garantie • Sofortiger Zugang
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Noch Fragen?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900">
              Häufige Fragen zum Guide
            </h2>
          </div>

          <div className="bg-paper rounded-2xl border border-loam-100 shadow-soft p-6 lg:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
            Bereit für einen entspannten Frühling?
          </h2>
          <p className="text-xl text-loam-600 mb-10 max-w-2xl mx-auto">
            Hol dir das Wissen, das dir Sicherheit gibt – und deinem Pferd einen
            gesunden Start in die Weidesaison.
          </p>
          <button className="tactile-button tactile-button-primary text-lg px-10 py-4">
            Jetzt Frühlings-Guide kaufen – 47 €
          </button>
        </div>
      </section>
    </>
  );
}
