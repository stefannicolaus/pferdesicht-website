import { z } from 'zod'

// =============================================================================
// QUIZ SCHEMA - Frühlings-Check für Pferdebesitzerinnen
// =============================================================================

// Rassen mit Scoring (leichtfuttrige Rassen = höheres Risiko)
export const RASSEN = [
  { value: 'shetland', label: 'Shetlandpony', score: 3 },
  { value: 'welsh', label: 'Welsh Pony', score: 3 },
  { value: 'haflinger', label: 'Haflinger', score: 3 },
  { value: 'norweger', label: 'Fjordpferd / Norweger', score: 3 },
  { value: 'islaender', label: 'Isländer', score: 3 },
  { value: 'tinker', label: 'Tinker / Irish Cob', score: 2 },
  { value: 'friese', label: 'Friese', score: 2 },
  { value: 'quarter', label: 'Quarter Horse', score: 2 },
  { value: 'paint', label: 'Paint Horse', score: 2 },
  { value: 'warmblut', label: 'Warmblut', score: 1 },
  { value: 'vollblut', label: 'Vollblut', score: 1 },
  { value: 'araber', label: 'Araber / Araber-Mix', score: 2 },
  { value: 'reitpony', label: 'Deutsches Reitpony', score: 2 },
  { value: 'sonstige', label: 'Sonstige', score: 1 },
] as const

export const RASSEN_VALUES = RASSEN.map((r) => r.value)

// Alter mit Scoring (ältere Pferde = höheres Risiko)
// PPID/Cushing kann ab 10-12 Jahren beginnen, Risiko steigt ab 15 deutlich
export const ALTER = [
  { value: 'unter-5', label: 'Unter 5 Jahre', score: 0 },
  { value: '5-10', label: '5-10 Jahre', score: 1 },
  { value: '10-15', label: '10-15 Jahre', score: 1 },
  { value: '15-20', label: '15-20 Jahre', score: 2 },
  { value: 'ueber-20', label: 'Über 20 Jahre', score: 3 },
] as const

export const ALTER_VALUES = ALTER.map((a) => a.value)

// Haltungsform
export const HALTUNG = [
  { value: 'offenstall', label: 'Offenstall / Aktivstall', score: 0 },
  { value: 'box-paddock', label: 'Box mit Paddock', score: 1 },
  { value: 'vollpension', label: 'Vollpension (ich entscheide wenig selbst)', score: 2 },
] as const

export const HALTUNG_VALUES = HALTUNG.map((h) => h.value)

// Stoffwechseltyp
export const STOFFWECHSEL = [
  { value: 'leichtfuttrig', label: 'Leichtfuttrig / neigt zu Übergewicht', score: 3 },
  { value: 'normal', label: 'Normal', score: 1 },
  { value: 'schwerfuttrig', label: 'Schwerfuttrig / braucht viel', score: 0 },
] as const

export const STOFFWECHSEL_VALUES = STOFFWECHSEL.map((s) => s.value)

// Weide-Zugang
export const WEIDE = [
  { value: '24h', label: '24h Weide (Herdenverband)', score: 3 },
  { value: 'stundenweide', label: 'Stundenweide (kontrolliert)', score: 1 },
  { value: 'keine', label: 'Keine Weide / nur Paddock', score: 0 },
] as const

export const WEIDE_VALUES = WEIDE.map((w) => w.value)

// Vorgeschichte (Mehrfachauswahl möglich)
export const VORGESCHICHTE = [
  { value: 'hufrehe', label: 'Hufrehe', score: 5 },
  { value: 'ems', label: 'EMS (Equines Metabolisches Syndrom)', score: 4 },
  { value: 'cushing', label: 'Cushing / PPID', score: 3 },
  { value: 'kotwasser', label: 'Kotwasser / Verdauungsprobleme', score: 2 },
  { value: 'allergien', label: 'Allergien / Hautprobleme', score: 1 },
  { value: 'keine', label: 'Keine bekannten Probleme', score: 0 },
] as const

export const VORGESCHICHTE_VALUES = VORGESCHICHTE.map((v) => v.value)

// Entwurmung
export const ENTWURMUNG = [
  { value: 'selektiv', label: 'Selektiv mit Kotproben', score: 0 },
  { value: 'stallplan', label: 'Nach Stallplan (alle X Monate)', score: 1 },
  { value: 'unsicher', label: 'Weiß nicht genau', score: 2 },
] as const

export const ENTWURMUNG_VALUES = ENTWURMUNG.map((e) => e.value)

// Hauptsorge
export const HAUPTSORGE = [
  { value: 'hufrehe', label: 'Hufrehe-Prävention', score: 2 },
  { value: 'fellwechsel', label: 'Fellwechsel-Probleme', score: 1 },
  { value: 'parasiten', label: 'Parasiten / Entwurmung', score: 1 },
  { value: 'fuetterung', label: 'Fütterung im Übergang', score: 1 },
  { value: 'alles', label: 'Alles zusammen – ich brauche einen Überblick', score: 1 },
] as const

export const HAUPTSORGE_VALUES = HAUPTSORGE.map((h) => h.value)

// =============================================================================
// ZOD SCHEMAS
// =============================================================================

// Schema für einzelne Quiz-Schritte
export const quizStep1Schema = z.object({
  pferdename: z
    .string()
    .min(1, 'Wie heißt dein Pferd?')
    .max(50, 'Name ist zu lang'),
})

export const quizStep2Schema = z.object({
  rasse: z.enum(RASSEN_VALUES as [string, ...string[]], {
    error: 'Bitte wähle eine Rasse aus',
  }),
})

export const quizStep3Schema = z.object({
  alter: z.enum(ALTER_VALUES as [string, ...string[]], {
    error: 'Bitte wähle das Alter aus',
  }),
})

export const quizStep4Schema = z.object({
  haltung: z.enum(HALTUNG_VALUES as [string, ...string[]], {
    error: 'Bitte wähle die Haltungsform aus',
  }),
  haltungKontext: z.string().max(500).optional(),
})

export const quizStep5Schema = z.object({
  stoffwechsel: z.enum(STOFFWECHSEL_VALUES as [string, ...string[]], {
    error: 'Bitte wähle den Stoffwechseltyp aus',
  }),
  stoffwechselKontext: z.string().max(500).optional(),
})

export const quizStep6Schema = z.object({
  weide: z.enum(WEIDE_VALUES as [string, ...string[]], {
    error: 'Bitte wähle den Weide-Zugang aus',
  }),
  weideKontext: z.string().max(500).optional(),
})

export const quizStep7Schema = z.object({
  vorgeschichte: z
    .array(z.enum(VORGESCHICHTE_VALUES as [string, ...string[]]))
    .min(1, 'Bitte wähle mindestens eine Option'),
  vorgeschichteStory: z.string().max(1000).optional(),
})

export const quizStep8Schema = z.object({
  entwurmung: z.enum(ENTWURMUNG_VALUES as [string, ...string[]], {
    error: 'Bitte wähle eine Option aus',
  }),
  entwurmungKontext: z.string().max(500).optional(),
})

export const quizStep9Schema = z.object({
  hauptsorge: z.enum(HAUPTSORGE_VALUES as [string, ...string[]], {
    error: 'Bitte wähle deine Hauptsorge aus',
  }),
  hauptsorgeDetail: z.string().max(500).optional(),
})

export const quizStep10Schema = z.object({
  freitext: z
    .string()
    .max(2000, 'Maximal 2000 Zeichen')
    .optional(),
})

// E-Mail Opt-In (letzter Schritt)
export const emailOptInSchema = z.object({
  email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein'),
  vorname: z.string().min(1, 'Bitte gib deinen Vornamen ein').max(50),
  datenschutz: z
    .boolean()
    .refine((val) => val === true, 'Bitte stimme der Datenschutzerklärung zu'),
})

// =============================================================================
// KOMPLETTES QUIZ SCHEMA
// =============================================================================

export const quizSubmissionSchema = z.object({
  // Pflichtfelder mit deutschen Fehlermeldungen
  pferdename: z
    .string()
    .min(1, 'Bitte gib den Namen deines Pferdes ein')
    .max(50, 'Der Name ist zu lang (maximal 50 Zeichen)'),
  rasse: z.enum(RASSEN_VALUES as [string, ...string[]], {
    error: 'Bitte wähle eine Rasse aus',
  }),
  alter: z.enum(ALTER_VALUES as [string, ...string[]], {
    error: 'Bitte wähle das Alter aus',
  }),
  haltung: z.enum(HALTUNG_VALUES as [string, ...string[]], {
    error: 'Bitte wähle die Haltungsform aus',
  }),
  stoffwechsel: z.enum(STOFFWECHSEL_VALUES as [string, ...string[]], {
    error: 'Bitte wähle den Stoffwechseltyp aus',
  }),
  weide: z.enum(WEIDE_VALUES as [string, ...string[]], {
    error: 'Bitte wähle den Weide-Zugang aus',
  }),
  vorgeschichte: z
    .array(z.enum(VORGESCHICHTE_VALUES as [string, ...string[]]))
    .min(1, 'Bitte wähle mindestens eine Option aus'),
  entwurmung: z.enum(ENTWURMUNG_VALUES as [string, ...string[]], {
    error: 'Bitte wähle eine Option aus',
  }),
  hauptsorge: z.enum(HAUPTSORGE_VALUES as [string, ...string[]], {
    error: 'Bitte wähle deine Hauptsorge aus',
  }),

  // Optionale Kontext-Felder
  haltungKontext: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  stoffwechselKontext: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  weideKontext: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  vorgeschichteStory: z.string().max(1000, 'Maximal 1000 Zeichen').optional(),
  entwurmungKontext: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  hauptsorgeDetail: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  freitext: z.string().max(2000, 'Maximal 2000 Zeichen').optional(),

  // Lead-Daten
  email: z
    .string()
    .min(1, 'Bitte gib deine E-Mail-Adresse ein')
    .email('Bitte gib eine gültige E-Mail-Adresse ein'),
  vorname: z
    .string()
    .min(1, 'Bitte gib deinen Vornamen ein')
    .max(50, 'Maximal 50 Zeichen'),
  datenschutz: z
    .boolean()
    .refine((val) => val === true, 'Bitte stimme der Datenschutzerklärung zu'),
})

// =============================================================================
// TYPES
// =============================================================================

export type QuizSubmission = z.infer<typeof quizSubmissionSchema>

export type Bucket = 'gruen' | 'gelb' | 'rot'

export interface QuizResult {
  submission: QuizSubmission
  risikoScore: number
  bucket: Bucket
  bucketLabel: string
  bucketDescription: string
}
