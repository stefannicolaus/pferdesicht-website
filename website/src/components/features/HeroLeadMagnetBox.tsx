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
    <div className="hidden md:flex h-full items-center justify-center p-4 lg:p-6">
      <div className="bg-sage rounded-xl p-6 lg:p-8 shadow-2xl max-w-sm">

        {/* Badge */}
        <span className="inline-block px-3 py-1.5 bg-loam/30 text-white text-[11px] font-sans font-semibold uppercase tracking-wide rounded mb-4">
          Frühling 2026
        </span>

        {/* Headline */}
        <h2 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-3">
          Dein persönlicher Frühlings-Fahrplan
        </h2>

        {/* Subheadline */}
        <p className="text-white text-sm lg:text-base mb-6">
          8 Fragen zu deinem Pferd. 2 Minuten.<br />
          Dein Plan für die nächsten Wochen.
        </p>

        {/* Inner Box with Benefits */}
        <div className="bg-white/10 rounded-lg p-5 mb-6">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">
                    {benefit.title}
                  </span>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/quiz"
          className="w-full bg-gold hover:bg-[#b8956a] text-white font-bold tracking-wide py-4 px-8 rounded-sm uppercase flex items-center justify-center gap-2 transition-colors shadow-lg"
        >
          Frühlingscheck starten
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Click Triggers */}
        <div className="flex items-center justify-center gap-4 mt-4 text-white/70 text-xs">
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            Kostenlos
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            2 Min
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3" />
            Personalisiert
          </span>
        </div>
      </div>
    </div>
  )
}
