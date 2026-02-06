'use client'

import { useRouter } from 'next/navigation'
import { QuizForm } from '@/components/quiz/QuizForm'
import Link from 'next/link'

export default function QuizStartPage() {
  const router = useRouter()

  const handleSubmit = async (data: Record<string, unknown>) => {
    const res = await fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Quiz-Submission fehlgeschlagen')
    }

    const result = await res.json()
    router.push(`/fruehlingscheck/ergebnis/${result.id}`)
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/fruehlingscheck"
          className="inline-flex items-center gap-1 text-sm text-loam/60 hover:text-loam transition-colors mb-8"
        >
          ← Zurück
        </Link>

        <div className="text-center mb-10">
          <p className="text-xs font-sans uppercase tracking-widest text-sage mb-3 font-semibold">
            Kostenloser Frühlingscheck · 2 Minuten
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-loam mb-3 leading-tight">
            Fellwechsel, Anweiden, Parasiten, Fütterung —{' '}
            <span className="text-sage">finde heraus, was bei deinem Pferd jetzt wirklich zählt.</span>
          </h1>
          <p className="text-loam/70 font-sans text-base max-w-xl mx-auto mb-4">
            <span className="text-gold font-medium">8 Fragen.</span>{' '}
            Persönliche Auswertung mit{' '}
            <span className="text-gold font-medium">Ampelsystem.</span>{' '}
            Dein Frühlings-Fahrplan — sortiert nach{' '}
            <span className="text-gold font-medium">Dringlichkeit.</span>
          </p>
          <p className="text-loam/50 font-sans text-sm mb-6">
            Inkl. Hufrehe-Risiko · Cushing-Einordnung · Fruktan-Ampel
          </p>
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            {[
              { icon: '✉️', label: 'Persönliches Anschreiben' },
              { icon: '🚦', label: 'Ampel-Auswertung' },
              { icon: '📅', label: '4-Wochen-Plan' },
              { icon: '🖨️', label: 'Zum Ausdrucken' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-base">{b.icon}</span>
                <span className="font-sans text-xs text-loam/60">{b.label}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-loam/10 pt-6">
            <p className="text-loam/60 font-sans text-sm max-w-lg mx-auto">
              Beantworte die Fragen ehrlich — es gibt kein Richtig oder Falsch.
              Je genauer deine Angaben, desto persönlicher dein Report.
            </p>
          </div>
        </div>

        <QuizForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
