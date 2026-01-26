"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================
// Types
// ============================================

interface Answer {
  value: string;
  label: string;
  points?: number;
  contextTrigger?: {
    question: string;
    placeholder: string;
  };
  bucket?: "A" | "B" | "C" | "D";
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

// ============================================
// Quiz Data
// ============================================

const questions: Question[] = [
  {
    id: 1,
    question: "Wie ist dein Pferd untergebracht?",
    answers: [
      { value: "offenstall", label: "Offenstall / Aktivstall" },
      { value: "box-paddock", label: "Box mit Paddock" },
      {
        value: "vollpension",
        label: "Vollpension (entscheide wenig selbst)",
        contextTrigger: {
          question: "Wie viel Einfluss hast du auf Fütterung und Weidegang?",
          placeholder: "z.B. Kann ich beim Anweiden mitreden? Wer entscheidet über die Fütterung?"
        }
      },
    ],
  },
  {
    id: 2,
    question: "Wie würdest du dein Pferd beschreiben?",
    answers: [
      {
        value: "leichtfuttrig",
        label: "Leichtfuttrig",
        points: 3,
        contextTrigger: {
          question: "Neigt dein Pferd zu Gewichtsproblemen?",
          placeholder: "z.B. Wird schnell rund, hat Fettpolster am Mähnenkamm..."
        }
      },
      { value: "normal", label: "Normal" },
      { value: "schwerfuttrig", label: "Schwerfuttrig" },
    ],
  },
  {
    id: 3,
    question: "Hat dein Pferd eine Vorgeschichte mit...",
    answers: [
      {
        value: "ems-cushing",
        label: "EMS / Cushing",
        points: 5,
        contextTrigger: {
          question: "Magst du mir kurz erzählen, was passiert ist?",
          placeholder: "z.B. Wann diagnostiziert? Wie wird es behandelt?"
        }
      },
      {
        value: "hufrehe",
        label: "Hufrehe",
        points: 4,
        contextTrigger: {
          question: "Magst du mir kurz erzählen, was passiert ist?",
          placeholder: "z.B. Wann war der letzte Schub? Welche Auslöser?"
        }
      },
      {
        value: "kolik",
        label: "Kolik",
        points: 1,
        contextTrigger: {
          question: "Magst du mir kurz erzählen, was passiert ist?",
          placeholder: "z.B. Wie oft? Gab es erkennbare Auslöser?"
        }
      },
      { value: "nichts", label: "Nein, nichts davon" },
    ],
  },
  {
    id: 4,
    question: "Wie alt ist dein Pferd?",
    answers: [
      { value: "unter-10", label: "Unter 10 Jahre" },
      { value: "10-18", label: "10–18 Jahre" },
      {
        value: "ueber-18",
        label: "Über 18 Jahre",
        points: 2,
        contextTrigger: {
          question: "Gibt es altersbedingte Besonderheiten?",
          placeholder: "z.B. Zahnprobleme, Stoffwechsel, Beweglichkeit..."
        }
      },
    ],
  },
  {
    id: 5,
    question: "Wie ist dein Weide-Zugang?",
    answers: [
      { value: "24h", label: "24h Weide", points: 3 },
      {
        value: "stundenweide",
        label: "Stundenweide",
        points: 1,
        contextTrigger: {
          question: "Wie läuft das Anweiden bei euch ab?",
          placeholder: "z.B. Wer entscheidet? Gibt es einen Plan?"
        }
      },
      {
        value: "keine",
        label: "Keine eigene Weide",
        contextTrigger: {
          question: "Wie handhabst du die Frühlingsfütterung ohne Weide?",
          placeholder: "z.B. Gibt es Alternativen? Bekommst du Heu von Frühlingswiesen?"
        }
      },
    ],
  },
  {
    id: 6,
    question: "Was ist deine GRÖSSTE Sorge im Frühling?",
    answers: [
      { value: "anweiden", label: "Anweiden – will keine Hufrehe riskieren", bucket: "A" },
      { value: "fellwechsel", label: "Fellwechsel – Pferd kommt nicht in Gang", bucket: "B" },
      { value: "parasiten", label: "Parasiten – unsicher wegen Entwurmung", bucket: "C" },
      { value: "alles", label: "Alles zusammen – brauche Überblick", bucket: "D" },
    ],
  },
  {
    id: 7,
    question: "Wie lange hast du schon ein Pferd?",
    answers: [
      { value: "unter-2", label: "Unter 2 Jahre" },
      { value: "2-10", label: "2–10 Jahre" },
      { value: "ueber-10", label: "Über 10 Jahre" },
    ],
  },
  {
    id: 8,
    question: "Was beschreibt dich am besten?",
    answers: [
      { value: "google", label: "Ich google viel, aber finde widersprüchliche Infos" },
      { value: "stallnachbarn", label: "Ich verlasse mich auf Stallnachbarn" },
      { value: "wissenschaft", label: "Ich will wissenschaftlich fundierte Antworten" },
      { value: "handlung", label: "Ich brauche konkrete Handlungsschritte" },
    ],
  },
];

// ============================================
// Component
// ============================================

export default function QuizPage() {
  const [step, setStep] = useState<"landing" | "quiz" | "email" | "complete">("landing");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contextAnswers, setContextAnswers] = useState<Record<number, string>>({});
  const [showContextTrigger, setShowContextTrigger] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate total points
  const calculatePoints = (): number => {
    let points = 0;
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const answer = question?.answers.find(a => a.value === answerValue);
      if (answer?.points) {
        points += answer.points;
      }
    });
    return points;
  };

  // Get bucket from question 6
  const getBucket = (): string => {
    const answer = questions[5].answers.find(a => a.value === answers[6]);
    return answer?.bucket || "D";
  };

  // Get risk level
  const getRiskLevel = (): { level: string; color: string; message: string } => {
    const points = calculatePoints();
    if (points <= 2) {
      return {
        level: "Grün",
        color: "text-green-600",
        message: "Du bist gut vorbereitet! Mit ein paar gezielten Tipps wird der Frühling entspannt."
      };
    } else if (points <= 5) {
      return {
        level: "Gelb",
        color: "text-yellow-600",
        message: "Es gibt einige Punkte, auf die du achten solltest. Dein persönlicher Fahrplan hilft dir dabei."
      };
    } else {
      return {
        level: "Rot",
        color: "text-red-600",
        message: "Bei deinem Pferd ist besondere Vorsicht geboten. Der Fahrplan zeigt dir, worauf du achten musst."
      };
    }
  };

  // Handle answer selection
  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));

    // Check for context trigger
    const question = questions.find(q => q.id === questionId);
    const answer = question?.answers.find(a => a.value === value);

    if (answer?.contextTrigger) {
      setShowContextTrigger(questionId);
    } else {
      setShowContextTrigger(null);
      // Auto-advance after short delay
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          setStep("email");
        }
      }, 300);
    }
  };

  // Handle context answer and continue
  const handleContextContinue = () => {
    setShowContextTrigger(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep("email");
    }
  };

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would send data to your backend:
    // - answers
    // - contextAnswers
    // - email
    // - firstName
    // - calculatePoints()
    // - getBucket()

    console.log("Quiz submission:", {
      answers,
      contextAnswers,
      email,
      firstName,
      points: calculatePoints(),
      bucket: getBucket(),
    });

    setIsSubmitting(false);
    setStep("complete");
  };

  // Get current question's selected answer for context trigger
  const getCurrentContextTrigger = () => {
    if (showContextTrigger === null) return null;
    const question = questions.find(q => q.id === showContextTrigger);
    const answer = question?.answers.find(a => a.value === answers[showContextTrigger]);
    return answer?.contextTrigger;
  };

  // ============================================
  // Render: Landing Page
  // ============================================
  if (step === "landing") {
    return (
      <div className="min-h-screen bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-sage-600 font-medium mb-4">Kostenloser Frühlings-Check</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 mb-6">
              Welcher Frühlings-Typ bist du?
            </h1>
            <p className="text-xl text-loam-600">
              8 Fragen – dein persönlicher Frühlings-Fahrplan per E-Mail
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft-lg border border-loam-100 mb-8">
            <h2 className="font-serif text-xl text-loam-900 mb-6">Das bekommst du:</h2>
            <div className="space-y-4">
              {[
                { icon: "🎯", text: "Auf deine Situation zugeschnitten" },
                { icon: "✅", text: "Sofort umsetzbare Tipps" },
                { icon: "💬", text: "Kein Fachchinesisch – verständlich erklärt" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-loam-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep("quiz")}
              className="tactile-button tactile-button-primary text-lg px-8 py-4"
            >
              Quiz starten
            </button>
            <p className="text-sm text-loam-500 mt-4">
              Dauert nur 2 Minuten • Kostenlos
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // Render: Quiz Questions
  // ============================================
  if (step === "quiz") {
    const question = questions[currentQuestion];
    const contextTrigger = getCurrentContextTrigger();

    return (
      <div className="min-h-screen bg-bg-light">
        {/* Progress Bar */}
        <div className="sticky top-0 bg-white border-b border-loam-100 z-10">
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => {
                  if (showContextTrigger !== null) {
                    setShowContextTrigger(null);
                  } else if (currentQuestion > 0) {
                    setCurrentQuestion(prev => prev - 1);
                  } else {
                    setStep("landing");
                  }
                }}
                className="text-loam-500 hover:text-loam-700 flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück
              </button>
              <span className="text-sm text-loam-600 font-medium">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="h-2 bg-loam-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage-500 transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-2xl mx-auto px-4 py-12">
          {!showContextTrigger ? (
            <div key={currentQuestion}>
              <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8 text-center">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.answers.map((answer) => (
                  <button
                    key={answer.value}
                    onClick={() => handleAnswer(question.id, answer.value)}
                    className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                      answers[question.id] === answer.value
                        ? "border-sage-500 bg-sage-50"
                        : "border-loam-200 bg-white hover:border-sage-300 hover:bg-sage-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        answers[question.id] === answer.value
                          ? "border-sage-500 bg-sage-500"
                          : "border-loam-300"
                      }`}>
                        {answers[question.id] === answer.value && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-loam-800">{answer.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Context Trigger */
            <div key={`context-${currentQuestion}`}>
              <div className="bg-sage-50 rounded-2xl p-6 mb-6">
                <p className="text-sage-700 text-sm mb-2">Du hast gewählt:</p>
                <p className="text-loam-900 font-medium">
                  {question.answers.find(a => a.value === answers[question.id])?.label}
                </p>
              </div>

              <h3 className="font-serif text-xl text-loam-900 mb-4">
                {contextTrigger?.question}
              </h3>
              <p className="text-loam-500 text-sm mb-4">
                Optional – hilft mir, deinen Fahrplan noch besser anzupassen
              </p>

              <textarea
                value={contextAnswers[question.id] || ""}
                onChange={(e) => setContextAnswers(prev => ({
                  ...prev,
                  [question.id]: e.target.value
                }))}
                placeholder={contextTrigger?.placeholder}
                className="w-full h-32 p-4 border border-loam-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-none"
              />

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleContextContinue}
                  className="flex-1 tactile-button tactile-button-ghost"
                >
                  Überspringen
                </button>
                <button
                  onClick={handleContextContinue}
                  className="flex-1 tactile-button tactile-button-primary"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============================================
  // Render: Email Capture
  // ============================================
  if (step === "email") {
    const risk = getRiskLevel();

    return (
      <div className="min-h-screen bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
              Geschafft!
            </h1>
            <p className="text-lg text-loam-600">
              Dein Quiz-Ergebnis ist fertig.
            </p>
          </div>

          {/* Preview Result */}
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-loam-100 mb-8">
            <p className="text-sm text-loam-500 mb-2">Dein Risiko-Level:</p>
            <p className={`text-2xl font-serif font-medium ${risk.color} mb-4`}>
              {risk.level}
            </p>
            <p className="text-loam-600">
              {risk.message}
            </p>
          </div>

          {/* Email Form */}
          <div className="bg-white rounded-2xl p-8 shadow-soft-lg border border-loam-100">
            <h2 className="font-serif text-xl text-loam-900 mb-2 text-center">
              Wohin darf ich deinen persönlichen Frühlings-Fahrplan schicken?
            </h2>
            <p className="text-loam-500 text-sm text-center mb-6">
              Basierend auf deinen Antworten – individuell für dich erstellt.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-loam-700 mb-1">
                  Vorname
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Dein Vorname"
                  className="w-full px-4 py-3 border border-loam-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-loam-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="deine@email.de"
                  className="w-full px-4 py-3 border border-loam-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full tactile-button tactile-button-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird erstellt...
                  </span>
                ) : (
                  "Fahrplan per E-Mail erhalten"
                )}
              </button>

              <p className="text-xs text-loam-500 text-center">
                Kein Spam. Du kannst dich jederzeit abmelden.
                <br />
                <Link href="/datenschutz" className="underline hover:text-loam-700">
                  Datenschutz
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // Render: Complete
  // ============================================
  if (step === "complete") {
    return (
      <div className="min-h-screen bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 py-16 lg:py-24 text-center">
          <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
            Check dein Postfach!
          </h1>
          <p className="text-lg text-loam-600 mb-2">
            Dein persönlicher Frühlings-Fahrplan ist unterwegs zu:
          </p>
          <p className="text-loam-900 font-medium mb-8">{email}</p>

          <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-medium text-loam-900 mb-2">Was jetzt passiert:</h3>
            <ul className="space-y-2 text-loam-600">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">1.</span>
                <span>Du bekommst sofort deinen Frühlings-Fahrplan per E-Mail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">2.</span>
                <span>In den nächsten Tagen: Vertiefende Tipps zu deinem Schwerpunkt-Thema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">3.</span>
                <span>Wöchentlich: Fundiertes Wissen für Pferdemenschen, die hinschauen</span>
              </li>
            </ul>
          </div>

          <p className="text-loam-500 text-sm mb-8">
            Keine E-Mail bekommen? Schau im Spam-Ordner nach oder schreib mir an hallo@pferdesicht.com
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wissen" className="tactile-button tactile-button-ghost">
              Zum Blog
            </Link>
            <Link href="/" className="tactile-button tactile-button-primary">
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
