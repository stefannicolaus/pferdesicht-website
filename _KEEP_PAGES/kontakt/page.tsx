"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================
// Metadata (exported separately for client component)
// ============================================

// export const metadata = { ... } - moved to layout or handled differently for client components

// ============================================
// Contact Form Component
// ============================================

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200 text-center">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-sage-600"
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
        </div>
        <h3 className="font-serif text-2xl text-loam-900 mb-4">
          Nachricht gesendet!
        </h3>
        <p className="text-loam-600 mb-6">
          Vielen Dank für deine Nachricht. Ich melde mich so schnell wie möglich
          bei dir.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormState({ name: "", email: "", subject: "", message: "" });
          }}
          className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-loam-900 mb-2"
        >
          Dein Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, name: e.target.value }))
          }
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-white border border-loam-200",
            "text-loam-900 placeholder:text-loam-400",
            "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent",
            "transition-shadow"
          )}
          placeholder="Anna Müller"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-loam-900 mb-2"
        >
          Deine E-Mail-Adresse
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, email: e.target.value }))
          }
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-white border border-loam-200",
            "text-loam-900 placeholder:text-loam-400",
            "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent",
            "transition-shadow"
          )}
          placeholder="anna@beispiel.de"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-loam-900 mb-2"
        >
          Betreff
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formState.subject}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, subject: e.target.value }))
          }
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-white border border-loam-200",
            "text-loam-900",
            "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent",
            "transition-shadow"
          )}
        >
          <option value="">Bitte wählen...</option>
          <option value="frage">Allgemeine Frage</option>
          <option value="guide">Frage zu einem Guide</option>
          <option value="zusammenarbeit">Zusammenarbeit</option>
          <option value="feedback">Feedback</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-loam-900 mb-2"
        >
          Deine Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formState.message}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, message: e.target.value }))
          }
          className={cn(
            "w-full px-4 py-3 rounded-lg",
            "bg-white border border-loam-200",
            "text-loam-900 placeholder:text-loam-400",
            "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent",
            "transition-shadow resize-none"
          )}
          placeholder="Schreib mir, was dich beschäftigt..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "tactile-button tactile-button-primary w-full justify-center",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Wird gesendet...
          </span>
        ) : (
          "Nachricht senden"
        )}
      </button>

      <p className="text-xs text-loam-500 text-center">
        Mit dem Absenden akzeptierst du unsere{" "}
        <Link href="/datenschutz" className="underline hover:text-sage-600">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}

// ============================================
// FAQ Item Component
// ============================================

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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

export default function KontaktPage() {
  const faqs = [
    {
      question: "Wie schnell antwortest du auf Nachrichten?",
      answer:
        "Ich bemühe mich, innerhalb von 2-3 Werktagen zu antworten. Bei komplexeren Fragen kann es manchmal etwas länger dauern – aber ich melde mich auf jeden Fall!",
    },
    {
      question: "Bietest du persönliche Beratung an?",
      answer:
        "Aktuell biete ich keine 1:1 Beratungen an. Meine Guides und Artikel sind so konzipiert, dass sie die häufigsten Fragen ausführlich beantworten. Wenn du eine spezifische Frage hast, schreib mir gerne!",
    },
    {
      question: "Kann ich dich für einen Vortrag oder Workshop buchen?",
      answer:
        "Das kommt auf das Thema und den Rahmen an. Schreib mir deine Idee mit allen Details, und ich schaue, ob es passt.",
    },
    {
      question: "Ich habe einen Fehler in einem Guide gefunden. Was tun?",
      answer:
        "Danke fürs aufmerksame Lesen! Schreib mir bitte mit dem genauen Hinweis. Ich korrigiere Fehler schnellstmöglich und bin für jeden Hinweis dankbar.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Kontakt
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 leading-tight mb-6">
              Schreib mir!
            </h1>
            <p className="text-xl text-loam-600 leading-relaxed">
              Du hast eine Frage, Feedback oder möchtest einfach Hallo sagen?
              Ich freue mich, von dir zu hören.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-loam-900 mb-6">
                Nachricht senden
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Direct Contact */}
              <div className="bg-paper p-8 rounded-2xl border border-loam-100 shadow-soft">
                <h3 className="font-serif text-xl text-loam-900 mb-4">
                  Direkt erreichen
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hallo@pferdesicht.com"
                    className="flex items-center gap-4 text-loam-600 hover:text-sage-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-loam-500">E-Mail</p>
                      <p className="font-medium text-loam-900">
                        hallo@pferdesicht.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-sage-50 p-8 rounded-2xl border border-sage-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-loam-900 mb-2">
                      Antwortzeit
                    </h3>
                    <p className="text-sm text-loam-600">
                      Ich antworte in der Regel innerhalb von 2-3 Werktagen.
                      Bei komplexeren Anfragen kann es etwas länger dauern.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-gold-50 p-8 rounded-2xl border border-gold-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-loam-900 mb-2">
                      Wichtiger Hinweis
                    </h3>
                    <p className="text-sm text-loam-600">
                      Bitte beachte, dass ich keine tierärztliche Beratung geben
                      kann. Bei akuten Gesundheitsproblemen wende dich immer
                      zuerst an deinen Tierarzt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Häufige Fragen
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900">
              Bevor du schreibst...
            </h2>
          </div>

          <div className="bg-paper rounded-2xl border border-loam-100 shadow-soft p-6 lg:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-loam-900 mb-6">
            Noch nicht sicher, was du fragen willst?
          </h2>
          <p className="text-lg text-loam-600 mb-8 max-w-2xl mx-auto">
            Stöbere durch meine Artikel und Guides – vielleicht findest du dort
            schon die Antwort, die du suchst.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/wissen"
              className="tactile-button tactile-button-primary"
            >
              Zum Wissensbereich
            </Link>
            <Link
              href="/guides/fruehling"
              className="tactile-button tactile-button-ghost"
            >
              Frühlings-Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
