import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über Diana",
  description:
    "Lerne Diana kennen – 30+ Jahre Pferdeerfahrung, Reittherapeutin und Gründerin von Pferdesicht. Evidenzbasiertes Wissen für verantwortungsvolle Pferdebesitzer.",
};

// ============================================
// Page Component
// ============================================

export default function UeberDianaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
                Die Stimme hinter Pferdesicht
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
                Hallo, ich bin Diana.
              </h1>
              <p className="text-xl text-loam-600 leading-relaxed mb-8">
                Heute gebe ich dir die Worte, das Wissen und den Mut, den ich
                damals nicht hatte.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/guides/fruehling"
                  className="tactile-button tactile-button-primary"
                >
                  Meine Guides entdecken
                </Link>
                <Link
                  href="/wissen"
                  className="tactile-button tactile-button-ghost"
                >
                  Zum Wissensbereich
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-sage-200 via-sage-100 to-gold-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-sage-300/50 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-sage-600"
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
                    <p className="text-sage-700 font-medium">Diana</p>
                    <p className="text-sage-600 text-sm">Gründerin & Reittherapeutin</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-200/50 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-sage-200/50 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28 bg-loam-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-wide mb-6">
            Meine Mission
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
            &ldquo;Wissen als Rüstung&rdquo;
          </h2>
          <p className="text-xl text-loam-300 leading-relaxed max-w-2xl mx-auto">
            Ich glaube daran, dass Pferdebesitzer, die &ldquo;zu viele Fragen&rdquo; stellen,
            nicht das Problem sind – sie sind die Lösung für eine bessere,
            natürlichere Pferdehaltung.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Mein Weg
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
              Über 30 Jahre mit Pferden
            </h2>
            <p className="text-lg text-loam-600">
              Mein Wissen stammt nicht aus Büchern allein – es kommt aus
              jahrzehntelanger praktischer Erfahrung, tausenden beobachteten
              Pferden und der ständigen Bereitschaft, dazuzulernen.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "30+",
                label: "Jahre",
                description: "Pferdeerfahrung",
              },
              {
                number: "20",
                label: "Jahre",
                description: "Offenstallmanagement",
              },
              {
                number: "16",
                label: "Jahre",
                description: "Reittherapeutin",
              },
              {
                number: "15",
                label: "Jahre",
                description: "Hempura (Hanfprodukte)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-paper p-8 rounded-2xl border border-loam-100 shadow-soft text-center"
              >
                <div className="font-serif text-5xl text-sage-600 mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-loam-500 uppercase tracking-wide mb-1">
                  {item.label}
                </div>
                <div className="font-medium text-loam-900">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Meine Dreifach-Autorität
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
              Theorie trifft Praxis
            </h2>
            <p className="text-lg text-loam-600">
              Mein Wissen basiert auf drei Säulen, die sich gegenseitig
              ergänzen und verstärken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Praktikerin",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                description:
                  "Jahrzehnte eigene Stallführung, tausende Pferde beobachtet. Ich weiß, was im Alltag funktioniert – und was nicht.",
              },
              {
                title: "Reittherapeutin",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
                description:
                  "Geschulter Blick für Körpersprache und Verhalten. Ich sehe, was andere übersehen – und kann es dir erklären.",
              },
              {
                title: "Freiheitsdressur",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                description:
                  "Kommunikation ohne Zwang als Grundhaltung. Partnerschaft statt Dominanz – das prägt alles, was ich tue.",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-paper p-8 rounded-2xl border border-loam-100 shadow-soft"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-loam-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-loam-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
                Mein Ansatz
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
                Wie ich arbeite
              </h2>
              <div className="space-y-6 text-loam-600">
                <p className="leading-relaxed">
                  Ich erkläre Dinge am liebsten so, wie ich sie meiner Freundin
                  am Küchentisch erklären würde – verständlich, ehrlich und ohne
                  Fachjargon, der mehr verwirrt als hilft.
                </p>
                <p className="leading-relaxed">
                  Meine Inhalte basieren auf <strong className="text-loam-900">Fakten und Studien</strong>,
                  aber ich vergesse nie, dass du keine Wissenschaftlerin sein
                  musst, um dein Pferd gut zu verstehen.
                </p>
                <p className="leading-relaxed">
                  Ich sage dir nicht, was du tun &ldquo;musst&rdquo;. Ich gebe dir das Wissen,
                  damit <strong className="text-loam-900">du selbst entscheiden</strong> kannst – mit Sicherheit statt
                  Unsicherheit.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-sage-50 p-8 lg:p-12 rounded-2xl border border-sage-200">
              <svg
                className="w-12 h-12 text-sage-300 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-2xl lg:text-3xl text-loam-900 leading-relaxed mb-6">
                In meiner Erfahrung ist es nicht das Pferd, das zu kompliziert ist –
                es sind die widersprüchlichen Ratschläge, die uns verunsichern.
              </blockquote>
              <p className="text-sage-700 font-medium">— Diana</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm NOT */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
              Was ich nicht bin
            </h2>
            <p className="text-lg text-loam-600">
              Klarheit darüber, wer ich bin, bedeutet auch Klarheit darüber, wer
              ich nicht bin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                not: "Tierärztin",
                but: "Ich ersetze keine tierärztliche Beratung – ich ergänze sie mit Wissen für den Alltag.",
              },
              {
                not: "Besserwisserin",
                but: "Ich teile meine Erfahrung, ohne anderen ihre abzusprechen.",
              },
              {
                not: "Perfektionistin",
                but: "Ich weiß, dass es im echten Leben keine perfekten Lösungen gibt.",
              },
              {
                not: "Dogmatikerin",
                but: "Offenstall oder Box? Beides kann richtig sein – je nach Situation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-paper p-6 rounded-xl border border-loam-100"
              >
                <p className="font-medium text-loam-900 mb-2">
                  Keine {item.not}
                </p>
                <p className="text-sm text-loam-600">{item.but}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-loam-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Bereit für den Perspektivwechsel?
          </h2>
          <p className="text-xl text-loam-300 mb-10 max-w-2xl mx-auto">
            Starte mit meinem Frühlings-Guide – über 25.000 Wörter
            evidenzbasiertes Wissen zu Anweiden, Fellwechsel, Fütterung und
            Parasiten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/fruehling"
              className="tactile-button tactile-button-gold"
            >
              Zum Frühlings-Guide
            </Link>
            <Link
              href="/wissen"
              className="tactile-button !bg-transparent !text-white !shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.4)] hover:!bg-white/10"
            >
              Kostenlose Artikel lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl text-loam-900 italic mb-4">
            &ldquo;Vertraue deiner Perspektive.&rdquo;
          </p>
          <p className="text-loam-600">— Deine Diana von Pferdesicht</p>
        </div>
      </section>
    </>
  );
}
