import { NextResponse } from 'next/server'
import { quizSubmissionSchema } from '@/lib/quiz/schema'
import { getQuizResult } from '@/lib/quiz/scoring'
import { randomUUID } from 'crypto'

// Next.js 16: API-Route als dynamisch markieren
export const dynamic = 'force-dynamic'

// Temporärer In-Memory-Speicher (wird durch Supabase ersetzt)
// In Produktion: Supabase oder andere Datenbank verwenden
const quizSubmissions = new Map<
  string,
  {
    id: string
    createdAt: Date
    data: ReturnType<typeof getQuizResult>
  }
>()

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validierung mit Zod
    const parseResult = quizSubmissionSchema.safeParse(body)

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: 'Validierungsfehler',
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const submission = parseResult.data

    // Quiz-Ergebnis berechnen (Score + Bucket)
    const quizResult = getQuizResult(submission)

    // ID generieren und speichern
    const id = randomUUID()
    const createdAt = new Date()

    quizSubmissions.set(id, {
      id,
      createdAt,
      data: quizResult,
    })

    // TODO: Hier später Supabase Integration
    // await supabase.from('quiz_submissions').insert({
    //   id,
    //   email: submission.email,
    //   pferdename: submission.pferdename,
    //   ...submission,
    //   risiko_score: quizResult.risikoScore,
    //   bucket: quizResult.bucket,
    // })

    // TODO: Hier später Webhook an Systeme.io
    // await sendToSysteme({
    //   email: submission.email,
    //   firstName: submission.vorname,
    //   pferdename: submission.pferdename,
    //   bucket: quizResult.bucket,
    //   reportUrl: `https://pferdesicht.com/quiz/ergebnis/${id}`,
    //   risikoScore: quizResult.risikoScore,
    // })

    console.log('Quiz-Submission gespeichert:', {
      id,
      pferdename: submission.pferdename,
      email: submission.email,
      risikoScore: quizResult.risikoScore,
      bucket: quizResult.bucket,
    })

    return NextResponse.json({
      success: true,
      id,
      risikoScore: quizResult.risikoScore,
      bucket: quizResult.bucket,
      bucketLabel: quizResult.bucketLabel,
    })
  } catch (error) {
    console.error('Fehler bei Quiz-Submission:', error)
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    )
  }
}

// GET-Endpoint zum Abrufen eines Quiz-Ergebnisses (für die Ergebnis-Seite)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID erforderlich' }, { status: 400 })
  }

  const submission = quizSubmissions.get(id)

  if (!submission) {
    return NextResponse.json(
      { error: 'Quiz-Ergebnis nicht gefunden' },
      { status: 404 }
    )
  }

  return NextResponse.json(submission)
}
