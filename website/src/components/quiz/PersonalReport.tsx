'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type QuizSubmission,
  type Bucket,
  RASSEN,
  ALTER,
  HALTUNG,
  STOFFWECHSEL,
  WEIDE,
  VORGESCHICHTE,
  ENTWURMUNG,
} from '@/lib/quiz/schema'
import { AlertTriangle, CheckCircle, Info, Calendar, Leaf, Bug, Utensils } from 'lucide-react'

interface PersonalReportProps {
  submission: QuizSubmission
  bucket: Bucket
  risikoScore: number
}

// Helper: Label für einen Wert finden
function getLabel(options: readonly { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label || value
}

// Bucket-spezifische Empfehlungen
const BUCKET_RECOMMENDATIONS: Record<Bucket, {
  intro: string
  anweiden: string
  fellwechsel: string
  entwurmung: string
  fuetterung: string
}> = {
  gruen: {
    intro: 'hat eine gute Ausgangslage für den Frühling. Mit ein paar einfachen Maßnahmen kannst du die Saison entspannt angehen.',
    anweiden: 'Normales Anweiden über 2-3 Wochen ist ausreichend. Beginne mit 15-30 Minuten täglich und steigere langsam.',
    fellwechsel: 'Der Fellwechsel sollte problemlos verlaufen. Unterstütze mit regelmäßigem Striegeln und achte auf ausreichend Mineralien.',
    entwurmung: 'Eine Kotprobe im Frühjahr gibt dir Sicherheit. Bei niedrigen Werten (<200 EPG) ist keine Behandlung nötig.',
    fuetterung: 'Die Heuration kann ab Mai langsam reduziert werden, wenn gutes Weidegras zur Verfügung steht.',
  },
  gelb: {
    intro: 'hat einige Risikofaktoren, die du im Auge behalten solltest. Mit gezielter Vorbereitung kannst du Probleme vermeiden.',
    anweiden: 'Plane ein kontrolliertes Anweiden über mindestens 4-5 Wochen. Beginne mit 10-15 Minuten und steigere nur alle 3-4 Tage.',
    fellwechsel: 'Beobachte den Fellwechsel genau. Bei Verzögerungen (volles Winterfell im Mai) solltest du einen PPID-Test in Erwägung ziehen.',
    entwurmung: 'Kotproben vor und nach der Weidesaison sind wichtig. Plane die erste Probe für März/April.',
    fuetterung: 'Achte auf qualitativ hochwertiges Heu und ergänze gezielt Zink und Biotin für den Fellwechsel.',
  },
  rot: {
    intro: 'gehört zu einer Risikogruppe und braucht besondere Aufmerksamkeit im Frühling. Jetzt ist der richtige Zeitpunkt, aktiv zu werden.',
    anweiden: 'Ein striktes 7-Wochen-Protokoll ist empfehlenswert. Beginne erst, wenn das Gras mindestens 15cm hoch ist. Vermeide Frostnächte mit sonnigem Folgetag.',
    fellwechsel: 'Ein PPID-Screening im Herbst ist bei älteren Pferden sinnvoll. Verzögerter Fellwechsel kann ein erstes Warnsignal sein.',
    entwurmung: 'Regelmäßige Kotproben (alle 8-12 Wochen) sind wichtig. Besprich das Entwurmungsmanagement mit deinem Tierarzt.',
    fuetterung: 'Reduziere Zucker und Stärke konsequent. Spätschnitt-Heu und kontrollierte Weidezeiten sind essentiell.',
  },
}

// Risiko-spezifische Hinweise
function getRisikoHinweise(submission: QuizSubmission, bucket: Bucket): string[] {
  const hinweise: string[] = []

  // Rasse-spezifisch
  const rasseOption = RASSEN.find(r => r.value === submission.rasse)
  if (rasseOption && rasseOption.score >= 3) {
    hinweise.push(`Als ${rasseOption.label} gehört ${submission.pferdename} zu den Rassen mit "Thrifty Gene" – evolutionär an karge Bedingungen angepasst. Das bedeutet: höhere Empfindlichkeit gegenüber Fruktan und schnellere Gewichtszunahme.`)
  }

  // Alter-spezifisch
  if (submission.alter === 'ueber-20' || submission.alter === '15-20') {
    hinweise.push(`Mit ${getLabel(ALTER, submission.alter)} steigt das Risiko für PPID (Equines Cushing). Ein jährlicher ACTH-Test im Herbst ist empfehlenswert.`)
  }

  // Stoffwechsel
  if (submission.stoffwechsel === 'leichtfuttrig') {
    hinweise.push(`Leichtfuttrige Pferde wie ${submission.pferdename} neigen zu Insulinresistenz. Vermeide abrupte Futterumstellungen und halte die Zuckerzufuhr konstant niedrig.`)
  }

  // Weide
  if (submission.weide === '24h') {
    hinweise.push(`Bei 24-Stunden-Weidegang ist das Fruktan-Risiko am höchsten. Überlege, ob eine kontrollierte Stundenweide – zumindest in der kritischen Anweide-Phase – möglich ist.`)
  }

  // Vorgeschichte
  if (submission.vorgeschichte.includes('hufrehe')) {
    hinweise.push(`Nach einer Hufrehe bleibt ${submission.pferdename} lebenslang gefährdet. Das Anweiden muss besonders vorsichtig erfolgen. Im Zweifel: lieber zu langsam als zu schnell.`)
  }
  if (submission.vorgeschichte.includes('ems')) {
    hinweise.push(`Bei EMS ist die Insulinregulation gestört. Frühlingsgras mit hohem Fruktangehalt kann einen Reheschub auslösen – selbst bei scheinbar "normalem" Verhalten.`)
  }
  if (submission.vorgeschichte.includes('cushing')) {
    hinweise.push(`PPID/Cushing erfordert engmaschige Überwachung. Besprich die Pergolid-Dosierung mit deinem Tierarzt – im Herbst kann eine Anpassung nötig sein.`)
  }
  if (submission.vorgeschichte.includes('kotwasser')) {
    hinweise.push(`Kotwasser kann sich beim Anweiden verschlimmern. Ein langsamer Übergang und probiotische Unterstützung können helfen.`)
  }

  return hinweise
}

// Monatskalender basierend auf Bucket
function getMonatsKalender(bucket: Bucket): { monat: string; aufgaben: string[] }[] {
  const basis = [
    {
      monat: 'Februar/März',
      aufgaben: [
        'Kotprobe für Wurmstatus',
        'Heu-Vorrat prüfen und ggf. nachbestellen',
        'Fellwechsel beobachten',
      ],
    },
    {
      monat: 'April',
      aufgaben: [
        'Mit Anweiden beginnen (wenn Gras >15cm)',
        'Mineralfutter anpassen (Zink, Kupfer)',
        bucket === 'rot' ? 'Blutwerte prüfen lassen' : 'Gewicht dokumentieren',
      ],
    },
    {
      monat: 'Mai',
      aufgaben: [
        'Anweide-Protokoll fortsetzen',
        'Bei verzögertem Fellwechsel: PPID-Test erwägen',
        'Weide auf Giftpflanzen kontrollieren',
      ],
    },
    {
      monat: 'Juni',
      aufgaben: [
        'Zweite Kotprobe',
        'Sommerekzem-Prävention (falls relevant)',
        'Hufpflege intensivieren (Trockenheit)',
      ],
    },
  ]

  return basis
}

export function PersonalReport({ submission, bucket, risikoScore }: PersonalReportProps) {
  const recommendations = BUCKET_RECOMMENDATIONS[bucket]
  const hinweise = getRisikoHinweise(submission, bucket)
  const kalender = getMonatsKalender(bucket)

  const bucketColors = {
    gruen: 'border-green-200 bg-green-50',
    gelb: 'border-amber-200 bg-amber-50',
    rot: 'border-red-200 bg-red-50',
  }

  const bucketTextColors = {
    gruen: 'text-green-800',
    gelb: 'text-amber-800',
    rot: 'text-red-800',
  }

  return (
    <div className="space-y-8">
      {/* Persönliche Einleitung */}
      <Card className={`${bucketColors[bucket]} border-2`}>
        <CardHeader>
          <CardTitle className={`text-xl ${bucketTextColors[bucket]}`}>
            Dein persönlicher Frühlings-Fahrplan für {submission.pferdename}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-loam-700">
            Liebe {submission.vorname}, {submission.pferdename} {recommendations.intro}
          </p>

          {/* Profil-Zusammenfassung */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div><strong>Rasse:</strong> {getLabel(RASSEN, submission.rasse)}</div>
            <div><strong>Alter:</strong> {getLabel(ALTER, submission.alter)}</div>
            <div><strong>Haltung:</strong> {getLabel(HALTUNG, submission.haltung)}</div>
            <div><strong>Stoffwechsel:</strong> {getLabel(STOFFWECHSEL, submission.stoffwechsel)}</div>
            <div><strong>Weide:</strong> {getLabel(WEIDE, submission.weide)}</div>
            <div><strong>Entwurmung:</strong> {getLabel(ENTWURMUNG, submission.entwurmung)}</div>
          </div>
        </CardContent>
      </Card>

      {/* Individuelle Hinweise basierend auf Risikofaktoren */}
      {hinweise.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Was du speziell bei {submission.pferdename} beachten solltest
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hinweise.map((hinweis, index) => (
              <div key={index} className="flex gap-3">
                <Info className="h-5 w-5 shrink-0 text-sage-600 mt-0.5" />
                <p className="text-loam-700">{hinweis}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* User-Kontext einbeziehen */}
      {(submission.vorgeschichteStory || submission.freitext || submission.hauptsorgeDetail) && (
        <Card className="border-sage-200 bg-sage-50">
          <CardHeader>
            <CardTitle className="text-lg text-loam-800">
              Deine Angaben – darauf gehe ich ein
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {submission.vorgeschichteStory && (
              <div>
                <p className="font-medium text-loam-700">Zur Vorgeschichte hast du geschrieben:</p>
                <blockquote className="mt-1 border-l-2 border-sage-300 pl-3 italic text-loam-600">
                  "{submission.vorgeschichteStory}"
                </blockquote>
                <p className="mt-2 text-loam-700">
                  Diese Erfahrung ist wertvoll. Sie zeigt, dass du {submission.pferdename} gut kennst und aufmerksam beobachtest.
                </p>
              </div>
            )}

            {submission.hauptsorgeDetail && (
              <div>
                <p className="font-medium text-loam-700">Zu deiner Hauptsorge:</p>
                <blockquote className="mt-1 border-l-2 border-sage-300 pl-3 italic text-loam-600">
                  "{submission.hauptsorgeDetail}"
                </blockquote>
              </div>
            )}

            {submission.freitext && (
              <div>
                <p className="font-medium text-loam-700">Deine zusätzlichen Anmerkungen:</p>
                <blockquote className="mt-1 border-l-2 border-sage-300 pl-3 italic text-loam-600">
                  "{submission.freitext}"
                </blockquote>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 4 Säulen: Anweiden, Fellwechsel, Entwurmung, Fütterung */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
              <Leaf className="h-5 w-5 text-green-600" />
              Anweiden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-loam-700">{recommendations.anweiden}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
              <CheckCircle className="h-5 w-5 text-sage-600" />
              Fellwechsel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-loam-700">{recommendations.fellwechsel}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
              <Bug className="h-5 w-5 text-amber-600" />
              Entwurmung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-loam-700">{recommendations.entwurmung}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
              <Utensils className="h-5 w-5 text-gold-600" />
              Fütterung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-loam-700">{recommendations.fuetterung}</p>
          </CardContent>
        </Card>
      </div>

      {/* Monats-Kalender */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-loam-800">
            <Calendar className="h-5 w-5 text-loam-600" />
            Dein Frühlings-Kalender für {submission.pferdename}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {kalender.map((monat) => (
              <div key={monat.monat} className="border-l-2 border-gold-300 pl-4">
                <h4 className="font-semibold text-loam-800">{monat.monat}</h4>
                <ul className="mt-1 space-y-1">
                  {monat.aufgaben.map((aufgabe, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-loam-600">
                      <span className="text-gold-500">•</span>
                      {aufgabe}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Abschluss */}
      <Card className="border-loam-200 bg-cream">
        <CardContent className="pt-6">
          <p className="text-center text-loam-700">
            <strong>Vertraue deiner Perspektive.</strong>
            <br />
            <span className="text-sm">
              Du kennst {submission.pferdename} am besten. Dieser Fahrplan gibt dir Orientierung –
              aber dein Bauchgefühl und deine Beobachtungen sind genauso wichtig.
            </span>
          </p>
          <p className="mt-4 text-center text-sm text-loam-500">
            — Deine Diana von Pferdesicht
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
