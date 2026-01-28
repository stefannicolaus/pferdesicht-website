"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadMagnetBox, ProduktTeaser, NewsletterSignup } from "@/components/funnel";
import { KeyTakeaway, ScientificFact, ExpertQuote, QuizCTA, SummaryBox } from "@/components/blog";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

export function BlogArticlePreview() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />

      {/* Article Header */}
      <article>
        <header className="py-12 md:py-16 bg-gradient-to-b from-sage/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-sans text-loam/60 mb-6">
              <a href="#" className="hover:text-sage">Wissen</a>
              <ChevronRight className="w-3 h-3" />
              <a href="#" className="hover:text-sage">Fütterung</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-loam">Anweiden</span>
            </nav>

            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-sage/10 text-sage text-xs font-sans font-semibold uppercase tracking-wider rounded mb-4">
              Fütterung
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-loam leading-tight mb-6">
              Anweiden ohne Risiko: Der komplette Guide für die Weidesaison
            </h1>

            <p className="text-lg font-sans text-loam/70 mb-8 leading-relaxed max-w-3xl">
              Fruktan, Hufrehe, Kolik – die Angst vor dem Anweiden ist groß.
              Hier erfährst du, wie du dein Pferd sicher auf die Weide bringst.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-loam/60">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Diana
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15. März 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 Min. Lesezeit
              </span>
            </div>
          </div>
        </header>

        {/* Article Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Hero Image Placeholder */}
              <div className="aspect-[16/9] bg-sage/10 rounded-lg flex items-center justify-center mb-8 not-prose">
                <span className="text-sage/40 text-sm font-sans">Artikel-Bild</span>
              </div>

              <p className="text-lg font-sans text-loam/80 leading-relaxed">
                Der Frühling kommt und mit ihm die Frage: <strong>Wann darf mein Pferd endlich wieder auf die Weide?</strong>
                Diese Frage beschäftigt jedes Jahr tausende Pferdebesitzer – und die Antworten, die man im Internet findet,
                sind oft widersprüchlich und verunsichernd.
              </p>

              <p className="font-sans text-loam/80 leading-relaxed">
                In diesem Artikel zeige ich dir, was die Wissenschaft zum Thema Anweiden sagt,
                räume mit Mythen auf und gebe dir einen konkreten Plan an die Hand.
              </p>

              <KeyTakeaway number={1}>
                Das Anweiden sollte langsam erfolgen: Starte mit 15 Minuten und steigere täglich um
                maximal 15 Minuten. So hat der Darm Zeit, sich anzupassen.
              </KeyTakeaway>

              <h2 className="text-2xl font-serif text-loam mt-12 mb-4">
                Was ist Fruktan und warum ist es relevant?
              </h2>

              <p className="font-sans text-loam/80 leading-relaxed">
                Fruktan ist ein Speicherkohlenhydrat, das Gräser bilden, wenn sie Photosynthese betreiben,
                aber nicht wachsen können. Das passiert vor allem bei niedrigen Temperaturen und
                gleichzeitig viel Sonnenschein.
              </p>

              <ScientificFact>
                Studien zeigen, dass der Fruktangehalt im Gras zwischen 5% und 35% der Trockenmasse
                schwanken kann – abhängig von Temperatur, Sonneneinstrahlung und Jahreszeit.
                Die höchsten Werte werden im Frühjahr gemessen.
              </ScientificFact>

              <p className="font-sans text-loam/80 leading-relaxed">
                Aber keine Panik: Nicht jedes Pferd reagiert gleich empfindlich auf Fruktan.
                Entscheidend ist die Gesamtmenge an Zucker und Stärke, die dein Pferd über den Tag aufnimmt.
              </p>

              <ExpertQuote author="Dr. Christina Fritz, Tierärztin">
                Die Gefahr liegt nicht im Fruktan allein, sondern in der plötzlichen Umstellung
                der Darmflora. Ein langsames Anweiden ist der beste Schutz.
              </ExpertQuote>

              <h2 className="text-2xl font-serif text-loam mt-12 mb-4">
                Der sichere Anweide-Plan
              </h2>

              <p className="font-sans text-loam/80 leading-relaxed">
                Hier ist mein bewährter Plan für sicheres Anweiden:
              </p>

              <div className="not-prose my-8">
                <LeadMagnetBox
                  title="Anweide-Plan zum Ausdrucken"
                  description="Hol dir den kompletten Plan als PDF – mit Wochen-Kalender und Checkliste."
                  leadMagnetName="Anweide-Kalender PDF"
                  benefits={[
                    "Wochen-Plan zum Abhaken",
                    "Wetter-Checkliste",
                    "Notfall-Zeichen erkennen",
                  ]}
                  href="#"
                  variant="inline-compact"
                />
              </div>

              <ol className="space-y-4 my-8">
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 text-sage font-semibold">1</span>
                  <div>
                    <strong className="text-loam">Woche 1-2:</strong>
                    <span className="text-loam/70"> 15-30 Minuten täglich, idealerweise nachmittags</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 text-sage font-semibold">2</span>
                  <div>
                    <strong className="text-loam">Woche 3-4:</strong>
                    <span className="text-loam/70"> 1-2 Stunden täglich</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 text-sage font-semibold">3</span>
                  <div>
                    <strong className="text-loam">Woche 5-6:</strong>
                    <span className="text-loam/70"> Halbtags, dann ganztags</span>
                  </div>
                </li>
              </ol>

              <KeyTakeaway number={2}>
                Bei Frost in der Nacht und Sonnenschein am Tag solltest du das Anweiden
                auf den späten Nachmittag verschieben oder ganz aussetzen.
              </KeyTakeaway>

              <h2 className="text-2xl font-serif text-loam mt-12 mb-4">
                Fazit
              </h2>

              <p className="font-sans text-loam/80 leading-relaxed">
                Anweiden muss keine Angstpartie sein. Mit dem richtigen Plan und etwas Geduld
                bringst du dein Pferd sicher auf die Weide.
              </p>

              <div className="not-prose my-12">
                <SummaryBox
                  items={[
                    { title: "Langsam starten", text: "15 Minuten am ersten Tag, täglich um 15 Min steigern." },
                    { title: "Tageszeit beachten", text: "Nachmittags ist der Fruktangehalt oft niedriger." },
                    { title: "Wetter checken", text: "Frost + Sonne = erhöhtes Risiko." },
                    { title: "Pferd beobachten", text: "Kotsetzverhalten und Hufe täglich kontrollieren." },
                    { title: "Heu weiter füttern", text: "Nicht abrupt auf nur Gras umstellen." },
                  ]}
                />
              </div>

              <div className="not-prose">
                <QuizCTA />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Sticky Container */}
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Author Box */}
                <div className="bg-white border border-loam/10 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-sage/20 rounded-full flex items-center justify-center">
                      <User className="w-7 h-7 text-sage" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-loam">Diana</p>
                      <p className="text-xs font-sans text-loam/60">Gründerin Pferdesicht</p>
                    </div>
                  </div>
                  <p className="text-sm font-sans text-loam/70 leading-relaxed">
                    30+ Jahre Pferdeerfahrung. Ich gebe dir das Wissen, das ich damals gebraucht hätte.
                  </p>
                </div>

                {/* Lead Magnet */}
                <LeadMagnetBox
                  title="Gratis Checkliste"
                  description="Der perfekte Start in die Weidesaison."
                  leadMagnetName="PDF Guide"
                  benefits={[
                    "Schritt-für-Schritt",
                    "Druckbar",
                    "Sofort starten",
                  ]}
                  href="#"
                  variant="floating"
                />

                {/* Related Product */}
                <ProduktTeaser
                  title="Frühlings-Guide"
                  description="Der komplette Kurs"
                  price="47"
                  badge="5 Module"
                  variant="minimal"
                  href="#"
                />

                {/* Newsletter */}
                <div className="bg-sage/5 border border-sage/10 rounded-lg p-5">
                  <p className="text-sm font-serif text-loam mb-3">Newsletter</p>
                  <NewsletterSignup variant="minimal" buttonText="→" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
