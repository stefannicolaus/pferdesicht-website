"use client"

import Link from "next/link"
import { Target, BarChart3, Calendar, Sparkles, ArrowRight } from "lucide-react"

const questions = [
  "Muss ich jetzt schon ans Anweiden denken?",
  "Braucht mein Pferd extra Mineralfutter?",
  "Wie unterstütze ich den Fellwechsel richtig?",
  "Womit sollte ich jetzt wirklich anfangen?",
]

const benefits = [
  {
    icon: Target,
    title: "Risiko-Einschätzung",
    description: "Abgestimmt auf Rasse, Alter und Haltung deines Pferdes",
  },
  {
    icon: BarChart3,
    title: "Deine Top-3-Prioritäten",
    description: "Was bei EUCH jetzt wirklich zählt",
  },
  {
    icon: Calendar,
    title: "Persönlicher Wochen-Plan",
    description: "Februar bis Mai - für eure Situation",
  },
  {
    icon: Sparkles,
    title: "Ehrliche Einschätzung",
    description: "Kein Einhorn-Quatsch, sondern das, was du wissen musst",
  },
]

export function HeroLeadMagnetBox() {
  return (
    <div className="h-full bg-sage flex flex-col justify-center p-5 lg:p-6 xl:p-8 shadow-[-8px_0_30px_rgba(0,0,0,0.3)]">
      {/* Badge */}
      <span className="inline-block self-start px-3 py-1.5 bg-loam/30 text-cream text-[10px] lg:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-3 lg:mb-4">
        Frühling 2026
      </span>

      {/* Headline */}
      <h2 className="font-serif text-xl lg:text-2xl xl:text-[1.75rem] text-cream mb-2 lg:mb-3 leading-tight">
        Dein persönlicher Frühlings-Fahrplan
      </h2>

      {/* Subheadline */}
      <p className="font-sans text-xs lg:text-sm text-cream/80 font-light leading-relaxed mb-4 lg:mb-5">
        Fellwechsel, Anweiden, Parasiten - finde heraus, worauf du bei deinem Pferd achten solltest.
      </p>

      {/* Questions Block - Quote Style */}
      <div className="border-l-[3px] border-gold/50 pl-3 lg:pl-4 mb-5 lg:mb-6">
        <p className="font-sans text-[10px] lg:text-xs text-cream/60 font-semibold uppercase tracking-wide mb-2">
          Dieses Quiz ist für dich, wenn du dich fragst:
        </p>
        <div className="space-y-1 lg:space-y-1.5">
          {questions.map((question, index) => (
            <p
              key={index}
              className="font-sans text-xs lg:text-sm text-cream font-normal leading-relaxed"
            >
              „{question}"
            </p>
          ))}
        </div>
      </div>

      {/* Benefits Block with Icons */}
      <div className="mb-5 lg:mb-6">
        <p className="font-sans text-[10px] lg:text-xs text-cream/60 font-semibold uppercase tracking-wide mb-2 lg:mb-3">
          Was du bekommst:
        </p>
        <div className="space-y-2 lg:space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 lg:gap-3">
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gold" />
              </div>
              <div>
                <p className="font-sans text-xs lg:text-sm text-cream font-medium leading-tight">
                  {benefit.title}
                </p>
                <p className="font-sans text-[10px] lg:text-xs text-cream/60 leading-tight">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/quiz"
        className="w-full py-3 lg:py-4 px-5 lg:px-6 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-sm lg:text-base rounded transition-colors flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(200,164,118,0.4)]"
      >
        Frühlingscheck starten
        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
      </Link>

      {/* Click Triggers */}
      <p className="mt-2 lg:mt-3 text-center font-sans text-[10px] lg:text-xs text-cream/50">
        Kostenlos · 2 Min · Kein Spam
      </p>
    </div>
  )
}
