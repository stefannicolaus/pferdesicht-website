"use client"

import type React from "react"

import { useState } from "react"
import { X, BookOpen, CheckCircle } from "lucide-react"

interface LeadMagnetModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend/service
    console.log("[v0] Lead magnet submission:", email)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setEmail("")
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] rounded-lg max-w-2xl w-full relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-loam/60 hover:text-loam transition-colors">
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 text-center">
          {/* Header Icon and Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen size={24} className="text-gold" strokeWidth={1.5} />
            <span className="text-gold text-xs uppercase tracking-widest font-sans">Kostenloser Download</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-4 leading-relaxed">
            So kommt dein Pferd gesund durch den Winter.
          </h2>

          {/* Subheading */}
          <p className="text-loam/80 font-sans text-sm md:text-base mb-2">
            Lade dir jetzt den kompletten Winter-Guide herunter:
          </p>
          <p className="text-paper font-semibold text-sm md:text-base mb-8">
            "So bereitest du dein Pferd perfekt auf den Winter vor"
          </p>

          {/* Benefits Box */}
          <div className="bg-[#1f1f1f] border border-gold/20 rounded-lg p-8 mb-8 text-left">
            <h3 className="text-gold text-sm uppercase tracking-widest font-sans font-semibold mb-6">
              Das erwartet dich:
            </h3>
            <ul className="space-y-4">
              {[
                "Fütterung im Winter: Warum Heu die beste Heizung ist – und wie viel dein Pferd wirklich braucht",
                "Der Temperatur-Check: Die Methode zum Ausdrucken für den Stall",
                "Eindecken ja oder nein: Meine Entscheidungshilfe mit klaren Kriterien",
                "Bewegung bei Frost: Was du beachten musst für Sehnen und Gelenke",
                "Fell- und Hufpflege: Die Winter-Routine aus 20 Jahren Praxiserfahrung",
                "Die Checkliste: Alles auf einen Blick – zum Abhaken vor dem ersten Frost",
              ].map((benefit, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-paper text-sm font-sans leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <div className="text-center py-4">
              <p className="text-sage text-lg font-semibold">Danke! Überprüfe dein E-Mail-Postfach.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Deine E-Mail für den sofortigen Download"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-paper text-[#2a2a2a] rounded px-4 py-3 font-sans text-sm placeholder:text-loam/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="submit"
                className="w-full bg-gold text-[#2a2a2a] py-3 font-sans font-semibold uppercase tracking-widest text-sm rounded hover:bg-gold/90 transition-colors"
              >
                Jetzt kostenfrei herunterladen
              </button>
            </form>
          )}

          {/* Disclaimer */}
          <p className="text-loam/50 text-xs mt-6 font-sans">Kein Spam. Praxiserprobt. Jederzeit abmeldbar.</p>
        </div>
      </div>
    </div>
  )
}
