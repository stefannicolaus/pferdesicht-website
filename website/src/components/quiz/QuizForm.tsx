'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { QuizProgress } from './QuizProgress'
import { QuestionCard } from './QuestionCard'
import { OptionCard } from './OptionCard'
import {
  RASSEN,
  ALTER,
  HALTUNG,
  STOFFWECHSEL,
  WEIDE,
  VORGESCHICHTE,
  ENTWURMUNG,
  HAUPTSORGE,
  quizSubmissionSchema,
} from '@/lib/quiz/schema'

// Kombiniertes Schema für das gesamte Formular inkl. E-Mail Opt-In
const fullQuizSchema = quizSubmissionSchema

type QuizFormData = z.infer<typeof fullQuizSchema>

interface QuizFormProps {
  onSubmit: (data: QuizFormData) => Promise<void>
}

const TOTAL_STEPS = 11 // 10 Fragen + E-Mail Opt-In

export function QuizForm({ onSubmit }: QuizFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<QuizFormData>({
    resolver: zodResolver(fullQuizSchema),
    defaultValues: {
      pferdename: '',
      rasse: undefined,
      alter: undefined,
      haltung: undefined,
      haltungKontext: '',
      stoffwechsel: undefined,
      stoffwechselKontext: '',
      weide: undefined,
      weideKontext: '',
      vorgeschichte: [],
      vorgeschichteStory: '',
      entwurmung: undefined,
      entwurmungKontext: '',
      hauptsorge: undefined,
      hauptsorgeDetail: '',
      freitext: '',
      email: '',
      vorname: '',
      datenschutz: false,
    },
    mode: 'onChange',
  })

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await form.trigger(fieldsToValidate as (keyof QuizFormData)[])

    if (isValid) {
      if (currentStep < TOTAL_STEPS) {
        setCurrentStep((prev) => prev + 1)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async (data: QuizFormData) => {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Fehler beim Absenden',
        description:
          'Dein Quiz konnte nicht gesendet werden. Bitte versuche es erneut.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Gibt die zu validierenden Felder für jeden Schritt zurück
  function getFieldsForStep(step: number): string[] {
    switch (step) {
      case 1:
        return ['pferdename']
      case 2:
        return ['rasse']
      case 3:
        return ['alter']
      case 4:
        return ['haltung']
      case 5:
        return ['stoffwechsel']
      case 6:
        return ['weide']
      case 7:
        return ['vorgeschichte']
      case 8:
        return ['entwurmung']
      case 9:
        return ['hauptsorge']
      case 10:
        return [] // Freitext ist optional
      case 11:
        return ['email', 'vorname', 'datenschutz']
      default:
        return []
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {/* Step 1: Pferdename */}
          {currentStep === 1 && (
            <QuestionCard
              title="Wie heißt dein Pferd?"
              description="So können wir den Report persönlich gestalten."
            >
              <FormField
                control={form.control}
                name="pferdename"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="z.B. Cookie, Blitz, Luna..."
                        className="text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
          )}

          {/* Step 2: Rasse */}
          {currentStep === 2 && (
            <QuestionCard
              title={`Welche Rasse ist ${form.watch('pferdename') || 'dein Pferd'}?`}
              description="Manche Rassen neigen mehr zu Stoffwechselproblemen."
            >
              <FormField
                control={form.control}
                name="rasse"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Rasse auswählen..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {RASSEN.map((rasse) => (
                          <SelectItem key={rasse.value} value={rasse.value}>
                            {rasse.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
          )}

          {/* Step 3: Alter */}
          {currentStep === 3 && (
            <QuestionCard
              title={`Wie alt ist ${form.watch('pferdename') || 'dein Pferd'}?`}
              description="Das Alter beeinflusst den Stoffwechsel erheblich."
            >
              <FormField
                control={form.control}
                name="alter"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid gap-3">
                        {ALTER.map((option) => (
                          <OptionCard
                            key={option.value}
                            label={option.label}
                            selected={field.value === option.value}
                            onClick={() => field.onChange(option.value)}
                          />
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </QuestionCard>
          )}

          {/* Step 4: Haltung */}
          {currentStep === 4 && (
            <QuestionCard
              title="In welcher Haltungsform lebt dein Pferd?"
              description="Die Haltung beeinflusst, wie viel Kontrolle du hast."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="haltung"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {HALTUNG.map((option) => (
                            <OptionCard
                              key={option.value}
                              label={option.label}
                              selected={field.value === option.value}
                              onClick={() => field.onChange(option.value)}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="haltungKontext"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Möchtest du etwas ergänzen? (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. besondere Umstände, Stallwechsel geplant..."
                          className="resize-none"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 5: Stoffwechsel */}
          {currentStep === 5 && (
            <QuestionCard
              title={`Wie würdest du ${form.watch('pferdename') || 'dein Pferd'} einschätzen?`}
              description="Leichtfuttrige Pferde brauchen besondere Aufmerksamkeit."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="stoffwechsel"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {STOFFWECHSEL.map((option) => (
                            <OptionCard
                              key={option.value}
                              label={option.label}
                              selected={field.value === option.value}
                              onClick={() => field.onChange(option.value)}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stoffwechselKontext"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Gibt es etwas, das dich beunruhigt? (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. nimmt schnell zu, Speckpolster..."
                          className="resize-none"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 6: Weide */}
          {currentStep === 6 && (
            <QuestionCard
              title="Wie ist der Weide-Zugang geregelt?"
              description="Im Frühling ist das besonders wichtig."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="weide"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {WEIDE.map((option) => (
                            <OptionCard
                              key={option.value}
                              label={option.label}
                              selected={field.value === option.value}
                              onClick={() => field.onChange(option.value)}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weideKontext"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Wie wird bei euch angeweidet? (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. langsam steigern, erst ab Mai..."
                          className="resize-none"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 7: Vorgeschichte */}
          {currentStep === 7 && (
            <QuestionCard
              title={`Hat ${form.watch('pferdename') || 'dein Pferd'} eine relevante Vorgeschichte?`}
              description="Mehrfachauswahl möglich. Das hilft uns, Risiken besser einzuschätzen."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="vorgeschichte"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {VORGESCHICHTE.map((option) => {
                            const isChecked = field.value?.includes(option.value)
                            return (
                              <OptionCard
                                key={option.value}
                                label={option.label}
                                selected={isChecked}
                                type="checkbox"
                                onClick={() => {
                                  if (isChecked) {
                                    field.onChange(
                                      field.value?.filter((v) => v !== option.value) || []
                                    )
                                  } else {
                                    // "Keine" schließt andere aus
                                    if (option.value === 'keine') {
                                      field.onChange(['keine'])
                                    } else {
                                      const newValue = field.value?.filter(
                                        (v) => v !== 'keine'
                                      ) || []
                                      field.onChange([...newValue, option.value])
                                    }
                                  }
                                }}
                              />
                            )
                          })}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vorgeschichteStory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Erzähl uns mehr über die Geschichte (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. wann war der letzte Reheschub, welche Behandlung..."
                          className="resize-none"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 8: Entwurmung */}
          {currentStep === 8 && (
            <QuestionCard
              title="Wie handhabst du die Entwurmung?"
              description="Das sagt viel über deinen Ansatz bei der Pferdegesundheit."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="entwurmung"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {ENTWURMUNG.map((option) => (
                            <OptionCard
                              key={option.value}
                              label={option.label}
                              selected={field.value === option.value}
                              onClick={() => field.onChange(option.value)}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="entwurmungKontext"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Gibt es etwas Besonderes? (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. letzte Kotprobe, Stallvorgaben..."
                          className="resize-none"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 9: Hauptsorge */}
          {currentStep === 9 && (
            <QuestionCard
              title="Was ist deine größte Sorge für den Frühling?"
              description="Darauf werden wir besonders eingehen."
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="hauptsorge"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-3">
                          {HAUPTSORGE.map((option) => (
                            <OptionCard
                              key={option.value}
                              label={option.label}
                              selected={field.value === option.value}
                              onClick={() => field.onChange(option.value)}
                            />
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hauptsorgeDetail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">
                        Was genau macht dir Sorgen? (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="z.B. letztes Jahr hatte ich Panik beim Anweiden..."
                          className="resize-none"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Step 10: Freitext */}
          {currentStep === 10 && (
            <QuestionCard
              title="Gibt es noch etwas, das ich wissen sollte?"
              description="Hier ist Platz für alles, was du mir mitteilen möchtest."
            >
              <FormField
                control={form.control}
                name="freitext"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. besondere Umstände, Fragen, Wünsche für den Report..."
                        className="resize-none"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <p className="text-xs text-muted-foreground">
                      Optional, aber je mehr ich weiß, desto persönlicher wird dein Report.
                    </p>
                  </FormItem>
                )}
              />
            </QuestionCard>
          )}

          {/* Step 11: E-Mail Opt-In */}
          {currentStep === 11 && (
            <QuestionCard
              title="Fast geschafft!"
              description={`Wohin dürfen wir den persönlichen Frühlings-Fahrplan für ${form.watch('pferdename') || 'dein Pferd'} schicken?`}
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="vorname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dein Vorname</FormLabel>
                      <FormControl>
                        <Input placeholder="Dein Vorname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deine E-Mail-Adresse</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="deine@email.de"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="datenschutz"
                  render={({ field }) => (
                    <FormItem className="rounded-md border border-sage-200 p-4">
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal leading-relaxed cursor-pointer">
                          Ich stimme der{' '}
                          <a
                            href="/datenschutz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage underline hover:text-sage/80"
                          >
                            Datenschutzerklärung
                          </a>{' '}
                          zu und möchte den kostenlosen Frühlings-Fahrplan sowie wertvolle Tipps von Diana erhalten.
                        </FormLabel>
                      </div>
                      <FormMessage className="mt-2 ml-7" />
                    </FormItem>
                  )}
                />
              </div>
            </QuestionCard>
          )}

          {/* Navigation Buttons */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2 bg-sage/10 border-sage/30 text-sage hover:bg-sage/20 hover:text-sage disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Button>

            {currentStep < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 bg-gold hover:bg-gold/90 text-loam font-semibold px-6"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 bg-gold hover:bg-gold/90 text-loam font-semibold px-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Report wird erstellt...
                  </>
                ) : (
                  'Meinen Report anfordern'
                )}
              </Button>
            )}
          </div>

          {/* Progress - below buttons */}
          <QuizProgress
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            className="mt-6"
          />
        </form>
      </Form>
    </div>
  )
}
