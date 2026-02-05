'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BucketResult } from '@/components/quiz/BucketResult'
import { PersonalReport } from '@/components/quiz/PersonalReport'
import type { QuizResult } from '@/lib/quiz/schema'

interface QuizSubmissionResponse {
  id: string
  createdAt: string
  data: QuizResult
}

export default function QuizErgebnisPage() {
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<QuizSubmissionResponse | null>(null)

  useEffect(() => {
    async function fetchResult() {
      try {
        const response = await fetch(`/api/quiz/submit?id=${id}`)

        if (!response.ok) {
          if (response.status === 404) {
            setError('Quiz-Ergebnis nicht gefunden')
          } else {
            setError('Fehler beim Laden des Ergebnisses')
          }
          return
        }

        const data = await response.json()
        setResult(data)
      } catch (err) {
        setError('Netzwerkfehler')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchResult()
    }
  }, [id])

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sage-50 to-white">
        <div className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-sage-600" />
          <p className="mt-4 text-lg text-loam-600">
            Dein persönlicher Report wird erstellt...
          </p>
        </div>
      </main>
    )
  }

  if (error || !result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sage-50 to-white">
        <Card className="mx-4 max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-red-600">
              {error || 'Etwas ist schiefgelaufen'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-loam-600">
              Das Quiz-Ergebnis konnte nicht geladen werden.
            </p>
            <Button asChild>
              <Link href="/quiz/start">Quiz erneut starten</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    )
  }

  const { submission, risikoScore, bucket } = result.data

  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-50 to-white pb-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-loam-800 md:text-4xl">
            Dein Frühlings-Check ist fertig!
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-loam-600">
            Hier ist dein persönlicher Report für {submission.pferdename}
          </p>
        </div>

        {/* Bucket Result */}
        <div className="mx-auto max-w-xl">
          <BucketResult
            bucket={bucket}
            pferdename={submission.pferdename}
            risikoScore={risikoScore}
            className="mb-8"
          />
        </div>

        {/* Hinweis bei "Sonstige" Rasse */}
        {submission.rasse === 'sonstige' && (
          <div className="mx-auto mb-8 max-w-xl rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-800">
              <strong>Hinweis zur Rasse:</strong> Du hast „Sonstige" ausgewählt.
              Falls {submission.pferdename} zu den leichtfuttrigen Rassen gehört
              (z.B. Connemara, Lewitzer, Criollo, Freiberger), solltest du die
              Empfehlungen im Report besonders ernst nehmen – auch wenn dein
              Score das nicht direkt widerspiegelt.
            </p>
          </div>
        )}

        {/* PERSONAL REPORT */}
        <div className="mx-auto mt-12 max-w-3xl">
          <PersonalReport
            submission={submission}
            bucket={bucket}
            risikoScore={risikoScore}
          />
        </div>

        {/* CTA zum G18 */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="border-gold-200 bg-gradient-to-br from-gold-50 to-cream">
            <CardHeader>
              <CardTitle className="text-center text-xl text-loam-800">
                Möchtest du noch tiefer einsteigen?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-loam-600">
                Im G18 Frühlings-Guide erfährst du alles im Detail: die Wissenschaft hinter dem Fruktan,
                woran du PPID früh erkennst, und wie du {submission.pferdename} optimal durch den Frühling begleitest.
              </p>
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gold-500 text-loam-900 hover:bg-gold-600"
              >
                <Link href="/produkte/g18-fruehlingsguide">
                  Zum G18 Frühlings-Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
