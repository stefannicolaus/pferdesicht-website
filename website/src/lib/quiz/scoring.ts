import {
  type QuizSubmission,
  type QuizResult,
  type Bucket,
  RASSEN,
  ALTER,
  HALTUNG,
  STOFFWECHSEL,
  WEIDE,
  VORGESCHICHTE,
  ENTWURMUNG,
  HAUPTSORGE,
} from './schema'

// =============================================================================
// SCORING LOGIC - Frühlings-Check Risiko-Bewertung
// =============================================================================

/**
 * Berechnet den Risiko-Score basierend auf den Quiz-Antworten.
 * Höherer Score = höheres Risiko für Frühlingsprobleme (Hufrehe, etc.)
 */
export function calculateRisikoScore(submission: QuizSubmission): number {
  let score = 0

  // Rasse-Score
  const rasseOption = RASSEN.find((r) => r.value === submission.rasse)
  if (rasseOption) score += rasseOption.score

  // Alter-Score
  const alterOption = ALTER.find((a) => a.value === submission.alter)
  if (alterOption) score += alterOption.score

  // Haltung-Score
  const haltungOption = HALTUNG.find((h) => h.value === submission.haltung)
  if (haltungOption) score += haltungOption.score

  // Stoffwechsel-Score
  const stoffwechselOption = STOFFWECHSEL.find(
    (s) => s.value === submission.stoffwechsel
  )
  if (stoffwechselOption) score += stoffwechselOption.score

  // Weide-Score
  const weideOption = WEIDE.find((w) => w.value === submission.weide)
  if (weideOption) score += weideOption.score

  // Vorgeschichte-Score (Mehrfachauswahl - alle Scores addieren)
  if (submission.vorgeschichte && submission.vorgeschichte.length > 0) {
    for (const vorgeschichteValue of submission.vorgeschichte) {
      const vorgeschichteOption = VORGESCHICHTE.find(
        (v) => v.value === vorgeschichteValue
      )
      if (vorgeschichteOption) score += vorgeschichteOption.score
    }
  }

  // Entwurmung-Score
  const entwurmungOption = ENTWURMUNG.find(
    (e) => e.value === submission.entwurmung
  )
  if (entwurmungOption) score += entwurmungOption.score

  // Hauptsorge-Score
  const hauptsorgeOption = HAUPTSORGE.find(
    (h) => h.value === submission.hauptsorge
  )
  if (hauptsorgeOption) score += hauptsorgeOption.score

  return score
}

// =============================================================================
// BUCKET ZUORDNUNG
// =============================================================================

/**
 * Bucket-Schwellenwerte:
 * 🟢 GRÜN: 0-7 Punkte → "Gute Basis"
 * 🟡 GELB: 8-13 Punkte → "Aufmerksamkeit nötig"
 * 🔴 ROT: 14+ Punkte → "Erhöhtes Risiko"
 */
const BUCKET_THRESHOLDS = {
  gruen: { max: 7 },
  gelb: { min: 8, max: 13 },
  rot: { min: 14 },
} as const

export function getBucket(score: number): Bucket {
  if (score <= BUCKET_THRESHOLDS.gruen.max) {
    return 'gruen'
  }
  if (score <= BUCKET_THRESHOLDS.gelb.max) {
    return 'gelb'
  }
  return 'rot'
}

// =============================================================================
// BUCKET LABELS & DESCRIPTIONS
// =============================================================================

const BUCKET_INFO: Record<
  Bucket,
  { label: string; description: string; emoji: string }
> = {
  gruen: {
    label: 'Gute Basis',
    emoji: '🟢',
    description:
      'Dein Pferd hat eine solide Ausgangslage für den Frühling. Mit den richtigen Maßnahmen kannst du die Saison entspannt angehen.',
  },
  gelb: {
    label: 'Aufmerksamkeit nötig',
    emoji: '🟡',
    description:
      'Es gibt einige Risikofaktoren, die du im Auge behalten solltest. Mit gezielter Vorbereitung kannst du Probleme vermeiden.',
  },
  rot: {
    label: 'Erhöhtes Risiko',
    emoji: '🔴',
    description:
      'Dein Pferd gehört zu einer Risikogruppe. Jetzt ist der richtige Zeitpunkt, um aktiv zu werden und vorzubeugen.',
  },
}

export function getBucketLabel(bucket: Bucket): string {
  return BUCKET_INFO[bucket].label
}

export function getBucketDescription(bucket: Bucket): string {
  return BUCKET_INFO[bucket].description
}

export function getBucketEmoji(bucket: Bucket): string {
  return BUCKET_INFO[bucket].emoji
}

export function getBucketInfo(bucket: Bucket) {
  return BUCKET_INFO[bucket]
}

// =============================================================================
// KOMPLETTES QUIZ RESULT
// =============================================================================

/**
 * Berechnet das vollständige Quiz-Ergebnis inkl. Score, Bucket und Labels.
 */
export function getQuizResult(submission: QuizSubmission): QuizResult {
  const risikoScore = calculateRisikoScore(submission)
  const bucket = getBucket(risikoScore)
  const bucketInfo = getBucketInfo(bucket)

  return {
    submission,
    risikoScore,
    bucket,
    bucketLabel: bucketInfo.label,
    bucketDescription: bucketInfo.description,
  }
}

// =============================================================================
// RISIKOFAKTOREN-ANALYSE
// =============================================================================

export interface Risikofaktor {
  kategorie: string
  wert: string
  score: number
  istHochrisiko: boolean
}

/**
 * Gibt eine detaillierte Auflistung aller Risikofaktoren zurück.
 * Nützlich für die Report-Generierung und Visualisierung.
 */
export function analyzeRisikofaktoren(
  submission: QuizSubmission
): Risikofaktor[] {
  const faktoren: Risikofaktor[] = []

  // Rasse
  const rasseOption = RASSEN.find((r) => r.value === submission.rasse)
  if (rasseOption) {
    faktoren.push({
      kategorie: 'Rasse',
      wert: rasseOption.label,
      score: rasseOption.score,
      istHochrisiko: rasseOption.score >= 3,
    })
  }

  // Alter
  const alterOption = ALTER.find((a) => a.value === submission.alter)
  if (alterOption) {
    faktoren.push({
      kategorie: 'Alter',
      wert: alterOption.label,
      score: alterOption.score,
      istHochrisiko: alterOption.score >= 3,
    })
  }

  // Haltung
  const haltungOption = HALTUNG.find((h) => h.value === submission.haltung)
  if (haltungOption) {
    faktoren.push({
      kategorie: 'Haltung',
      wert: haltungOption.label,
      score: haltungOption.score,
      istHochrisiko: haltungOption.score >= 2,
    })
  }

  // Stoffwechsel
  const stoffwechselOption = STOFFWECHSEL.find(
    (s) => s.value === submission.stoffwechsel
  )
  if (stoffwechselOption) {
    faktoren.push({
      kategorie: 'Stoffwechsel',
      wert: stoffwechselOption.label,
      score: stoffwechselOption.score,
      istHochrisiko: stoffwechselOption.score >= 3,
    })
  }

  // Weide
  const weideOption = WEIDE.find((w) => w.value === submission.weide)
  if (weideOption) {
    faktoren.push({
      kategorie: 'Weide-Zugang',
      wert: weideOption.label,
      score: weideOption.score,
      istHochrisiko: weideOption.score >= 3,
    })
  }

  // Vorgeschichte (Mehrfachauswahl)
  if (submission.vorgeschichte && submission.vorgeschichte.length > 0) {
    for (const vorgeschichteValue of submission.vorgeschichte) {
      const vorgeschichteOption = VORGESCHICHTE.find(
        (v) => v.value === vorgeschichteValue
      )
      if (vorgeschichteOption) {
        faktoren.push({
          kategorie: 'Vorgeschichte',
          wert: vorgeschichteOption.label,
          score: vorgeschichteOption.score,
          istHochrisiko: vorgeschichteOption.score >= 3,
        })
      }
    }
  }

  // Entwurmung
  const entwurmungOption = ENTWURMUNG.find(
    (e) => e.value === submission.entwurmung
  )
  if (entwurmungOption) {
    faktoren.push({
      kategorie: 'Entwurmung',
      wert: entwurmungOption.label,
      score: entwurmungOption.score,
      istHochrisiko: entwurmungOption.score >= 2,
    })
  }

  // Hauptsorge
  const hauptsorgeOption = HAUPTSORGE.find(
    (h) => h.value === submission.hauptsorge
  )
  if (hauptsorgeOption) {
    faktoren.push({
      kategorie: 'Hauptsorge',
      wert: hauptsorgeOption.label,
      score: hauptsorgeOption.score,
      istHochrisiko: hauptsorgeOption.score >= 2,
    })
  }

  return faktoren
}

/**
 * Gibt nur die Hochrisiko-Faktoren zurück (für Report-Highlights).
 */
export function getHochrisikoFaktoren(
  submission: QuizSubmission
): Risikofaktor[] {
  return analyzeRisikofaktoren(submission).filter((f) => f.istHochrisiko)
}

/**
 * Berechnet den maximalen theoretischen Score (für Prozent-Anzeige).
 */
export function getMaxPossibleScore(): number {
  // Max Rasse (3) + Max Alter (3) + Max Haltung (2) + Max Stoffwechsel (3) +
  // Max Weide (3) + Max Vorgeschichte (alle außer 'keine': 5+4+3+2+1=15) +
  // Max Entwurmung (2) + Max Hauptsorge (2) = 33
  return 33
}

/**
 * Gibt den Risiko-Score als Prozentsatz zurück.
 */
export function getRisikoScorePercent(score: number): number {
  return Math.round((score / getMaxPossibleScore()) * 100)
}
