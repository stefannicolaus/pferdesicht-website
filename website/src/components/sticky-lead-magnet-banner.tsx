"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function StickyLeadMagnetBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-loam border-t border-gold/30 z-50 py-3 px-4 md:py-4 md:px-6 shadow-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-xl flex-shrink-0" role="img" aria-label="Target">🎯</span>
          <div className="flex-1 min-w-0">
            <p className="text-white font-sans text-sm md:text-base leading-tight">
              <span className="hidden sm:inline">Wie fit ist dein Pferd für den Frühling? Persönlicher Fahrplan in 2 Minuten</span>
              <span className="sm:hidden">Dein Frühlings-Fahrplan</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/quiz"
            className="bg-gold hover:bg-[#b8956a] text-white px-5 md:px-6 py-2.5 font-sans font-bold uppercase tracking-wider text-xs md:text-sm rounded-sm transition-colors whitespace-nowrap inline-flex items-center gap-2"
          >
            Quiz starten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            onClick={handleDismiss}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Banner schließen"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
