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
    <div className="h-full bg-sage flex flex-col justify-center p-5 sm:p-6 lg:p-8">
      {/* Badge */}
      <span className="inline-block self-start px-3 py-1.5 bg-loam/30 text-[#f5f2ed] text-xs font-sans font-semibold uppercase tracking-widest rounded mb-3 sm:mb-4">
        Frühling 2026
      </span>

      {/* Headline */}
      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#f5f2ed] mb-2 sm:mb-3 leading-tight">
        Dein persönlicher Frühlings-Fahrplan
      </h2>

      {/* Subheadline */}
      <p className="font-sans text-sm lg:text-base text-[#f5f2ed]/85 font-light leading-relaxed mb-4 sm:mb-5">
        Fellwechsel, Anweiden, Parasiten - finde heraus, worauf du bei deinem Pferd achten solltest.
      </p>

      {/* Questions Block - Quote Style */}
      <div className="border-l-2 border-gold/50 pl-4 mb-5 sm:mb-6">
        <p className="font-sans text-xs text-[#f5f2ed]/70 font-medium uppercase tracking-wide mb-2">
          Dieses Quiz ist für dich, wenn du dich fragst:
        </p>
        <div className="space-y-1.5">
          {questions.map((question, index) => (
            <p
              key={index}
              className="font-sans text-sm text-[#f5f2ed] font-normal leading-relaxed"
            >
              „{question}"
            </p>
          ))}
        </div>
      </div>

      {/* Benefits Block with Icons */}
      <div className="mb-5 sm:mb-6">
        <p className="font-sans text-xs text-[#f5f2ed]/70 font-semibold uppercase tracking-wide mb-3">
          Was du bekommst:
        </p>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="font-sans text-sm text-[#f5f2ed] font-medium">
                  {benefit.title}
                </p>
                <p className="font-sans text-xs text-[#f5f2ed]/70">
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
        className="w-full min-h-[48px] py-4 px-6 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-base rounded transition-colors flex items-center justify-center gap-2"
      >
        Frühlingscheck starten
        <ArrowRight className="w-5 h-5" />
      </Link>

      {/* Click Triggers */}
      <p className="mt-3 text-center font-sans text-xs text-[#f5f2ed]/60">
        Kostenlos · 2 Min · Kein Spam
      </p>
    </div>
  )
}
