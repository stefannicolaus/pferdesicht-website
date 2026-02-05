'use client'

import { useRouter } from 'next/navigation'
import { QuizForm } from '@/components/quiz'
import type { z } from 'zod'
import type { quizSubmissionSchema } from '@/lib/quiz/schema'

type QuizFormData = z.infer<typeof quizSubmissionSchema>

export default function QuizStartPage() {
  const router = useRouter()

  const handleSubmit = async (data: QuizFormData) => {
    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Quiz-Einreichung fehlgeschlagen')
      }

      const result = await response.json()

      // Weiterleitung zur Ergebnis-Seite mit der Submission-ID
      router.push(`/quiz/ergebnis/${result.id}`)
    } catch (error) {
      console.error('Fehler beim Einreichen des Quiz:', error)
      throw error // Re-throw damit QuizForm den Fehler anzeigen kann
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-loam-800 md:text-4xl">
            Dein persönlicher Frühlings-Check
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-loam-600">
            In nur 3 Minuten erfährst du, worauf du bei deinem Pferd achten
            solltest – individuell und kostenlos.
          </p>
        </div>

        <QuizForm onSubmit={handleSubmit} />
      </div>
    </main>
  )
}
