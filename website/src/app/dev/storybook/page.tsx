"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { Monitor, Tablet, Smartphone, ChevronRight, Layout } from "lucide-react";

// Funnel Components
import {
  LeadMagnetBox,
  ProduktTeaser,
  PricingCard,
  PricingSection,
  NewsletterSignup,
} from "@/components/funnel";

// Blog Components
import {
  KeyTakeaway,
  ScientificFact,
  ExpertQuote,
  QuizCTA,
  SummaryBox,
} from "@/components/blog";

// Template Previews
import { HomepagePreview } from "./_templates/HomepagePreview";
import { LandingPagePreview } from "./_templates/LandingPagePreview";
import { BlogArticlePreview } from "./_templates/BlogArticlePreview";

// Block in production
if (process.env.NODE_ENV === "production") {
  notFound();
}

type Viewport = "desktop" | "tablet" | "mobile";

interface ComponentDemo {
  name: string;
  isTemplate?: boolean;
  variants: {
    name: string;
    render: () => React.ReactNode;
  }[];
}

interface Category {
  name: string;
  icon?: React.ReactNode;
  components: ComponentDemo[];
}

const categories: Category[] = [
  {
    name: "Funnel",
    components: [
      {
        name: "LeadMagnetBox",
        variants: [
          {
            name: "default",
            render: () => (
              <LeadMagnetBox
                title="Dein Frühlings-Fahrplan"
                description="Anweiden, Fellwechsel, Parasiten – alles auf einen Blick. Hol dir die kostenlose Checkliste."
                leadMagnetName="Frühlings-Checkliste PDF"
                benefits={[
                  "Wochen-Plan Februar bis Mai",
                  "Checkliste zum Abhaken",
                  "Tierarzt-Fragen vorbereitet",
                ]}
                href="#"
                variant="default"
              />
            ),
          },
          {
            name: "floating",
            render: () => (
              <div className="max-w-xs">
                <LeadMagnetBox
                  title="Gratis Checkliste"
                  description="Der perfekte Start in die Weidesaison."
                  leadMagnetName="PDF Guide"
                  benefits={[
                    "Schritt-für-Schritt Anleitung",
                    "Druckbare Checkliste",
                    "Bonus-Tipps",
                  ]}
                  href="#"
                  variant="floating"
                />
              </div>
            ),
          },
          {
            name: "inline-compact",
            render: () => (
              <LeadMagnetBox
                title="Kostenlose Checkliste"
                description=""
                leadMagnetName="Frühlings-Guide PDF"
                ctaText="Download"
                href="#"
                variant="inline-compact"
              />
            ),
          },
          {
            name: "exit-intent",
            render: () => (
              <div className="flex justify-center">
                <LeadMagnetBox
                  title="Vergiss deine Checkliste nicht!"
                  description="Hol dir den kostenlosen Frühlings-Fahrplan und starte entspannt in die Weidesaison."
                  leadMagnetName="Frühlings-Checkliste"
                  benefits={[
                    "Anweiden ohne Kolik-Risiko",
                    "Fellwechsel optimal unterstützen",
                    "Entwurmung richtig planen",
                  ]}
                  href="#"
                  variant="exit-intent"
                  onClose={() => alert("Close clicked")}
                />
              </div>
            ),
          },
        ],
      },
      {
        name: "ProduktTeaser",
        variants: [
          {
            name: "default",
            render: () => (
              <div className="max-w-sm">
                <ProduktTeaser
                  title="Frühlings-Guide"
                  description="Anweiden, Fellwechsel, Parasiten – in 5 Modulen zum Experten für die Weidesaison."
                  price="47"
                  originalPrice="67"
                  badge="5 Module"
                  features={[
                    "Über 2 Stunden Video-Content",
                    "Druckbare Checklisten",
                    "Lebenslanger Zugang",
                  ]}
                  href="#"
                  variant="default"
                />
              </div>
            ),
          },
          {
            name: "featured",
            render: () => (
              <ProduktTeaser
                title="Der komplette Frühlings-Guide"
                description="Alles was du wissen musst, um dein Pferd sicher durch Fellwechsel und Anweiden zu bringen. Fundiert recherchiert, praxisnah erklärt."
                price="47"
                originalPrice="67"
                badge="Bestseller"
                features={[
                  "5 umfassende Video-Module",
                  "Druckbare Checklisten & Kalender",
                  "Bonus: Tierarzt-Fragen Vorlage",
                  "Lebenslanger Zugang & Updates",
                ]}
                href="#"
                variant="featured"
              />
            ),
          },
          {
            name: "with-preview",
            render: () => (
              <div className="max-w-sm">
                <ProduktTeaser
                  title="Frühlings-Guide"
                  description="Der komplette Kurs für die Weidesaison."
                  price="47"
                  badge="5 Module"
                  features={[
                    "Video-Lektionen",
                    "Arbeitsblätter",
                    "Community-Zugang",
                    "Zertifikat",
                  ]}
                  href="#"
                  variant="with-preview"
                />
              </div>
            ),
          },
          {
            name: "minimal",
            render: () => (
              <div className="max-w-md space-y-3">
                <ProduktTeaser
                  title="Frühlings-Guide"
                  price="47"
                  originalPrice="67"
                  badge="5 Module"
                  description=""
                  href="#"
                  variant="minimal"
                />
                <ProduktTeaser
                  title="Winter-Guide"
                  price="37"
                  badge="3 Module"
                  description=""
                  href="#"
                  variant="minimal"
                />
              </div>
            ),
          },
        ],
      },
      {
        name: "PricingCard",
        variants: [
          {
            name: "default",
            render: () => (
              <div className="max-w-xs">
                <PricingCard
                  title="Basis"
                  subtitle="Für den Einstieg"
                  price="27"
                  features={[
                    "2 Video-Module",
                    "PDF-Checkliste",
                    "Email-Support",
                  ]}
                  href="#"
                />
              </div>
            ),
          },
          {
            name: "highlighted",
            render: () => (
              <div className="max-w-xs">
                <PricingCard
                  title="Komplett"
                  subtitle="Alles was du brauchst"
                  price="47"
                  originalPrice="67"
                  variant="highlighted"
                  features={[
                    "5 Video-Module",
                    "Alle Checklisten",
                    "Bonus: Tierarzt-Fragen",
                    "Community-Zugang",
                    "Lebenslange Updates",
                  ]}
                  href="#"
                />
              </div>
            ),
          },
          {
            name: "with-guarantee",
            render: () => (
              <div className="max-w-xs">
                <PricingCard
                  title="Premium"
                  subtitle="Rundum-Sorglos"
                  price="97"
                  variant="with-guarantee"
                  features={[
                    "Alles aus Komplett",
                    "1:1 Beratungscall (30 Min)",
                    "Individuelle Auswertung",
                    "Prioritäts-Support",
                  ]}
                  href="#"
                />
              </div>
            ),
          },
          {
            name: "PricingSection (Grid)",
            render: () => (
              <PricingSection>
                <PricingCard
                  title="Basis"
                  subtitle="Für den Einstieg"
                  price="27"
                  features={[
                    "2 Video-Module",
                    "PDF-Checkliste",
                    "Email-Support",
                  ]}
                />
                <PricingCard
                  title="Komplett"
                  subtitle="Alles was du brauchst"
                  price="47"
                  originalPrice="67"
                  variant="highlighted"
                  features={[
                    "5 Video-Module",
                    "Alle Checklisten",
                    "Bonus: Tierarzt-Fragen",
                    "Community-Zugang",
                  ]}
                />
                <PricingCard
                  title="Premium"
                  price="97"
                  variant="with-guarantee"
                  features={[
                    "Alles aus Komplett",
                    "1:1 Beratungscall",
                    "Individuelle Auswertung",
                  ]}
                />
              </PricingSection>
            ),
          },
        ],
      },
      {
        name: "NewsletterSignup",
        variants: [
          {
            name: "default",
            render: () => (
              <NewsletterSignup
                onSubmit={async (email) => {
                  await new Promise((r) => setTimeout(r, 1000));
                  console.log("Subscribed:", email);
                }}
              />
            ),
          },
          {
            name: "minimal",
            render: () => (
              <div className="max-w-md">
                <NewsletterSignup variant="minimal" />
              </div>
            ),
          },
          {
            name: "with-benefit",
            render: () => (
              <NewsletterSignup
                variant="with-benefit"
                benefitName="Frühjahrs-Checkliste PDF"
                title="Hol dir die Checkliste"
                description="Plus: Regelmäßige Tipps für dein Pferd – recherchiert, sortiert und praxisnah."
                onSubmit={async (email) => {
                  await new Promise((r) => setTimeout(r, 1000));
                  console.log("Subscribed:", email);
                }}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    name: "Blog",
    components: [
      {
        name: "KeyTakeaway",
        variants: [
          {
            name: "default",
            render: () => (
              <KeyTakeaway number={1}>
                Pferde können ihre Körpertemperatur durch das Aufstellen der Fellhaare
                regulieren – aber nur, wenn das Fell trocken ist.
              </KeyTakeaway>
            ),
          },
        ],
      },
      {
        name: "ScientificFact",
        variants: [
          {
            name: "default",
            render: () => (
              <ScientificFact>
                Eine Studie der Universität Gießen (2019) zeigte, dass Pferde mit
                natürlichem Fellwechsel eine um 23% bessere Thermoregulation aufwiesen
                als geschorene Pferde bei Temperaturen unter 5°C.
              </ScientificFact>
            ),
          },
        ],
      },
      {
        name: "ExpertQuote",
        variants: [
          {
            name: "default",
            render: () => (
              <ExpertQuote author="Dr. Christina Fritz, Tierärztin">
                Das Pferd ist ein Lauftier, das sich über Millionen Jahre an
                wechselnde Klimabedingungen angepasst hat.
              </ExpertQuote>
            ),
          },
        ],
      },
      {
        name: "QuizCTA",
        variants: [
          {
            name: "default",
            render: () => <QuizCTA />,
          },
        ],
      },
      {
        name: "SummaryBox",
        variants: [
          {
            name: "default",
            render: () => (
              <SummaryBox
                items={[
                  {
                    title: "Langsam anweiden",
                    text: "Starte mit 15 Minuten und steigere täglich um 15 Minuten.",
                  },
                  {
                    title: "Fellwechsel unterstützen",
                    text: "Regelmäßiges Putzen fördert die Durchblutung.",
                  },
                  {
                    title: "Parasiten im Blick",
                    text: "Kotprobe vor der Entwurmung – nicht blind entwurmen.",
                  },
                  {
                    title: "Mineralfutter anpassen",
                    text: "Im Frühjahr steigt der Zink-Bedarf deutlich.",
                  },
                  {
                    title: "Bewegung beibehalten",
                    text: "Auch bei Weidegang braucht dein Pferd Training.",
                  },
                ]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    name: "Templates",
    icon: <Layout className="w-4 h-4" />,
    components: [
      {
        name: "Homepage",
        isTemplate: true,
        variants: [
          {
            name: "default",
            render: () => <HomepagePreview />,
          },
        ],
      },
      {
        name: "LandingPage",
        isTemplate: true,
        variants: [
          {
            name: "G18-Guide Verkaufsseite",
            render: () => <LandingPagePreview />,
          },
        ],
      },
      {
        name: "BlogArticle",
        isTemplate: true,
        variants: [
          {
            name: "Artikel mit Sidebar",
            render: () => <BlogArticlePreview />,
          },
        ],
      },
    ],
  },
];

export default function StorybookPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [activeComponent, setActiveComponent] = useState(categories[0].components[0].name);
  const [activeVariant, setActiveVariant] = useState(0);
  const [viewport, setViewport] = useState<Viewport>("desktop");

  const category = categories.find((c) => c.name === activeCategory);
  const component = category?.components.find((c) => c.name === activeComponent);
  const variant = component?.variants[activeVariant];
  const isTemplate = component?.isTemplate ?? false;

  const viewportWidths: Record<Viewport, string> = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px",
  };

  const handleCategoryChange = (categoryName: string) => {
    const cat = categories.find((c) => c.name === categoryName);
    setActiveCategory(categoryName);
    if (cat && cat.components.length > 0) {
      setActiveComponent(cat.components[0].name);
      setActiveVariant(0);
    }
  };

  const handleComponentChange = (componentName: string) => {
    setActiveComponent(componentName);
    setActiveVariant(0);
  };

  return (
    <div className="min-h-screen bg-loam/5 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-loam/10 flex-shrink-0 overflow-y-auto relative">
        <div className="p-4 border-b border-loam/10">
          <h1 className="text-lg font-serif font-semibold text-loam">Pferdesicht</h1>
          <p className="text-xs font-sans text-loam/50">Component Library</p>
        </div>

        <nav className="p-2 pb-20">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-2">
              <button
                onClick={() => handleCategoryChange(cat.name)}
                className={`w-full text-left px-3 py-2 text-sm font-sans font-semibold rounded transition-colors flex items-center gap-2 ${
                  activeCategory === cat.name
                    ? "bg-sage/10 text-sage"
                    : "text-loam/70 hover:bg-loam/5"
                }`}
              >
                {cat.icon}
                {cat.name}
                {cat.name === "Templates" && (
                  <span className="ml-auto text-xs bg-gold/20 text-gold px-1.5 py-0.5 rounded">
                    Page
                  </span>
                )}
              </button>

              {activeCategory === cat.name && (
                <div className="ml-2 mt-1 space-y-0.5">
                  {cat.components.map((comp) => (
                    <button
                      key={comp.name}
                      onClick={() => handleComponentChange(comp.name)}
                      className={`w-full text-left px-3 py-1.5 text-sm font-sans rounded flex items-center gap-1 transition-colors ${
                        activeComponent === comp.name
                          ? "bg-sage text-white"
                          : "text-loam/60 hover:bg-loam/5"
                      }`}
                    >
                      <ChevronRight className="w-3 h-3" />
                      {comp.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Dev Badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-yellow-100 border border-yellow-300 rounded px-3 py-2 text-xs font-sans text-yellow-800">
            🚧 Dev Only – nicht in Production
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-loam/10 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-serif text-loam">{activeComponent}</h2>
              {isTemplate && (
                <span className="text-xs bg-sage/10 text-sage px-2 py-0.5 rounded-full font-sans">
                  Full Page
                </span>
              )}
            </div>
            <p className="text-xs font-sans text-loam/50">
              {category?.name} • {component?.variants.length} Variante(n)
            </p>
          </div>

          {/* Viewport Switcher */}
          <div className="flex items-center gap-1 bg-loam/5 rounded-lg p-1">
            <button
              onClick={() => setViewport("desktop")}
              className={`p-2 rounded transition-colors ${
                viewport === "desktop" ? "bg-white shadow-sm text-sage" : "text-loam/50 hover:text-loam"
              }`}
              title="Desktop"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport("tablet")}
              className={`p-2 rounded transition-colors ${
                viewport === "tablet" ? "bg-white shadow-sm text-sage" : "text-loam/50 hover:text-loam"
              }`}
              title="Tablet (768px)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport("mobile")}
              className={`p-2 rounded transition-colors ${
                viewport === "mobile" ? "bg-white shadow-sm text-sage" : "text-loam/50 hover:text-loam"
              }`}
              title="Mobile (375px)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Variant Tabs */}
        {component && component.variants.length > 1 && (
          <div className="bg-white border-b border-loam/10 px-6 py-2 flex gap-2 overflow-x-auto">
            {component.variants.map((v, index) => (
              <button
                key={v.name}
                onClick={() => setActiveVariant(index)}
                className={`px-4 py-1.5 text-sm font-sans rounded-full transition-colors whitespace-nowrap ${
                  activeVariant === index
                    ? "bg-sage text-white"
                    : "bg-loam/5 text-loam/70 hover:bg-loam/10"
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        )}

        {/* Preview Area */}
        <div className={`flex-1 overflow-auto flex justify-center ${isTemplate ? "p-0" : "p-6"}`}>
          {isTemplate ? (
            // Template Preview: Full width, scrollable
            <div
              className="bg-white transition-all duration-300 overflow-y-auto h-full"
              style={{
                width: viewportWidths[viewport],
                maxWidth: "100%",
              }}
            >
              {variant?.render()}
            </div>
          ) : (
            // Component Preview: Contained
            <div
              className="bg-[#f3f0eb] rounded-lg shadow-inner p-8 transition-all duration-300"
              style={{
                width: viewportWidths[viewport],
                maxWidth: "100%",
              }}
            >
              {variant?.render()}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <footer className="bg-white border-t border-loam/10 px-6 py-3 text-xs font-sans text-loam/50 flex items-center justify-between">
          <span>
            Viewport: {viewport} ({viewportWidths[viewport]})
          </span>
          <span>
            {activeComponent} / {variant?.name}
          </span>
        </footer>
      </main>
    </div>
  );
}
