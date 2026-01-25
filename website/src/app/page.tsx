import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        badge="PERSPEKTIVWECHSEL"
        headline={`Vertraue deiner\nPerspektive.`}
        subheadline="Heute gebe ich dir die Worte, das Wissen und den Mut, den ich damals nicht hatte. Evidenzbasierte Pferdehaltung für verantwortungsvolle Pferdebesitzerinnen."
        actions={[
          {
            label: "Frühlings-Guide entdecken",
            href: "/guides/fruehling",
            variant: "primary",
          },
          {
            label: "Mehr über Diana",
            href: "/ueber-diana",
            variant: "ghost",
          },
        ]}
      />

      {/* Placeholder sections for demonstration */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Warum Pferdesicht?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-6">
              Du stellst nicht zu viele Fragen.
              <br />
              Du stellst die richtigen.
            </h2>
            <p className="text-lg text-loam-600 leading-relaxed">
              Anna, du bist nicht &quot;zu pingelig&quot;. Du bist genau richtig.
              Hier findest du das sortierte Wissen, das dir hilft, fundierte
              Entscheidungen für dein Pferd zu treffen – ohne Gruppendruck,
              ohne Tradition, ohne Unsicherheit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "30+ Jahre Erfahrung",
                description:
                  "Diana bringt über drei Jahrzehnte praktische Pferdeerfahrung mit – vom Offenstallmanagement bis zur Reittherapie.",
              },
              {
                title: "Evidenzbasiert",
                description:
                  "Keine Mythen, keine Traditionen ohne Fundament. Hier zählen Fakten, Studien und beobachtbare Ergebnisse.",
              },
              {
                title: "Für dich sortiert",
                description:
                  "Schluss mit 47 offenen Tabs. Hier bekommst du strukturiertes Wissen, das du sofort anwenden kannst.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-paper p-8 rounded-2xl border border-loam-100 shadow-soft"
              >
                <h3 className="font-serif text-xl text-loam-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-loam-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
