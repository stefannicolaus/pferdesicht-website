'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { PersonalReport } from '@/components/quiz/PersonalReport'
import type { QuizSubmission, Bucket } from '@/lib/quiz/schema'
import { Loader2 } from 'lucide-react'

interface QuizResultData {
  id: string
  createdAt: string
  data: {
    submission: QuizSubmission
    risikoScore: number
    bucket: Bucket
    bucketLabel: string
    bucketDescription: string
  }
}

export default function ErgebnisPage() {
  const params = useParams()
  const id = params.id as string
  const [result, setResult] = useState<QuizResultData | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch(`/api/quiz/submit?id=${id}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setResult(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchResult()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-gold mx-auto mb-4" />
          <p className="font-sans text-loam/60">Dein Report wird geladen...</p>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="font-serif text-2xl text-loam mb-4">
            Report nicht gefunden
          </h1>
          <p className="font-sans text-loam/60 mb-6">
            Dieser Report existiert nicht mehr oder der Link ist ungültig.
            Starte den Check einfach erneut.
          </p>
          <Link
            href="/fruehlingscheck"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 text-loam font-sans font-semibold text-sm rounded transition-colors"
          >
            Check erneut starten
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/fruehlingscheck"
            className="inline-flex items-center gap-1 text-sm text-loam/60 hover:text-loam transition-colors"
          >
            ← Zurück
          </Link>
          <Link
            href="/fruehlingscheck/start"
            className="text-sm text-sage hover:text-sage/80 transition-colors"
          >
            Check erneut starten
          </Link>
        </div>

        <PersonalReport
          submission={result.data.submission}
          bucket={result.data.bucket}
          risikoScore={result.data.risikoScore}
        />
      </div>
    </div>
  )
}
