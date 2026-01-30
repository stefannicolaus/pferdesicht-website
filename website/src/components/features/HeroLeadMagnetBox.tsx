"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  {
    title: "Klarheit",
    description: "Du weißt, was bei DEINEM Pferd jetzt zählt"
  },
  {
    title: "Prioritäten",
    description: "Die 3 Dinge, mit denen du anfangen solltest"
  },
  {
    title: "Zeitplan",
    description: "Woche für Woche – Februar bis Mai"
  },
]

export function HeroLeadMagnetBox() {
  return (
    <div className="h-full bg-sage flex flex-col justify-center p-6 lg:p-8 xl:p-10">

      {/* Badge */}
      <span className="inline-block self-start px-3 py-1.5 bg-loam/20 text-cream/90 text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
        Frühling 2026
      </span>

      {/* Headline */}
      <h2 className="font-serif text-2xl lg:text-3xl text-cream leading-tight mb-3">
        Dein persönlicher Frühlings-Fahrplan
      </h2>

      {/* Subheadline */}
      <p className="text-cream/80 text-sm lg:text-base mb-6">
        8 Fragen zu deinem Pferd. 2 Minuten.
        <br />Dein Plan für die nächsten Wochen.
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-cream/20 mb-6" />

      {/* Benefits - simplified */}
      <div className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-cream font-medium">{benefit.title}</span>
              <p className="text-cream/70 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="/quiz"
        className="w-full bg-gold hover:bg-gold/90 text-loam font-semibold py-4 px-6 rounded-md flex items-center justify-center gap-2 transition-colors shadow-lg"
      >
        Frühlingscheck starten
        <ArrowRight className="w-5 h-5" />
      </Link>

      {/* Click Triggers */}
      <p className="text-center text-cream/50 text-xs mt-4">
        Kostenlos · 2 Min · Kein Spam
      </p>
    </div>
  )
}
