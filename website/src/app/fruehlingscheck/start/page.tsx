'use client'

import { useRouter } from 'next/navigation'
import { QuizForm } from '@/components/quiz/QuizForm'
import Link from 'next/link'
import Image from 'next/image'

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
      <div className="mx-auto max-w-3xl px-4 py-3 md:py-4">
        <Link
          href="/fruehlingscheck"
          className="inline-flex items-center gap-1 text-sm text-sage font-medium hover:text-loam transition-colors mb-3 bg-sage/10 px-3 py-1.5 rounded-full"
        >
          ← Zurück
        </Link>

        <div className="text-center mb-4">
          {/* Diana Avatar */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-gold/30">
              <Image
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana von Pferdesicht"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="font-sans text-sm text-loam">
              <span className="font-medium">Diana</span>
              <span className="text-loam/60"> von Pferdesicht</span>
            </p>
          </div>

          <h1 className="font-serif text-xl md:text-2xl text-loam mb-2 leading-tight">
            Fellwechsel, Anweiden, Parasiten —{' '}
            <span className="text-sage">was zählt bei deinem Pferd?</span>
          </h1>
          <p className="text-loam/60 font-sans text-sm max-w-md mx-auto">
            8 Fragen · Ampelsystem · Persönlicher Fahrplan
          </p>
        </div>

        <QuizForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
