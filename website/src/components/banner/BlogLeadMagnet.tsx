"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface BlogLeadMagnetProps {
  badge?: string
  headline?: string
  questions?: string[]
  questionsIntro?: string
  benefits?: string[]
  ctaText?: string
  ctaHref?: string
  clickTriggers?: string[]
  className?: string
}

const defaultQuestions = [
  "Muss ich jetzt schon ans Anweiden denken?",
  "Wie unterstütze ich den Fellwechsel richtig?",
  "Was sollte ich bei meinem Pferd wirklich priorisieren?",
]

const defaultBenefits = [
  "Risiko-Check für dein Pferd",
  "Die 3 wichtigsten Dinge für deinen Start",
  "Wochen-Kalender Feb–Mai",
]

export function BlogLeadMagnet({
  badge = "Frühling 2026",
  headline = "Dein persönlicher Frühlings-Fahrplan",
  questions = defaultQuestions,
  questionsIntro = "Dieses Quiz ist für dich, wenn du dich fragst:",
  benefits = defaultBenefits,
  ctaText = "Frühlingscheck starten",
  ctaHref = "/quiz",
  clickTriggers = ["Kostenlos", "2 Min", "Kein Spam"],
  className = "",
}: BlogLeadMagnetProps) {
  return (
    <div className={`my-8 sm:my-12 ${className}`}>
      <div className="bg-sage/90 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 max-w-xl mx-auto">
        {/* Badge */}
        <span className="inline-block px-3 py-1.5 bg-loam/20 text-[#f5f2ed] text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4">
          {badge}
        </span>

        {/* Headline */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2ed] mb-4 leading-tight">
          {headline}
        </h3>

        {/* Questions Block - Quote Style */}
        <div className="border-l-2 border-gold/50 pl-4 ml-2 mb-6">
          <p className="font-sans text-sm text-[#f5f2ed]/80 font-medium mb-3">
            {questionsIntro}
          </p>
          <div className="space-y-2">
            {questions.map((question, i) => (
              <p key={i} className="font-sans text-sm sm:text-base text-[#f5f2ed] font-normal leading-relaxed">
                „{question}"
              </p>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <p className="font-sans text-xs text-[#f5f2ed]/70 font-semibold uppercase tracking-wide mb-3">
            Was du bekommst:
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-sans text-sm text-[#f5f2ed]/90 font-normal">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          href={ctaHref}
          className="w-full min-h-[48px] py-4 px-6 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-base rounded transition-colors inline-flex items-center justify-center gap-2"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Click Triggers */}
        <p className="mt-4 text-center font-sans text-xs text-[#f5f2ed]/60">
          {clickTriggers.join(" · ")}
        </p>
      </div>
    </div>
  )
}
