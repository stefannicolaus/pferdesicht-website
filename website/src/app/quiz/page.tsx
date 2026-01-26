"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================
// Types
// ============================================

interface QuizQuestion {
  id: number;
  category: "fellwechsel" | "anweiden" | "parasiten" | "fuetterung";
  question: string;
  answers: {
    text: string;
    points: number;
  }[];
}

interface QuizResult {
  level: "green" | "yellow" | "red";
  title: string;
  description: string;
  recommendations: string[];
}

// ============================================
// Quiz Data - 8 Fragen zum Frühlings-Check
// ============================================

const quizQuestions: QuizQuestion[] = [
  // FELLWECHSEL (2 Fragen)
  {
    id: 1,
    category: "fellwechsel",
    question: "Wie zeigt sich der Fellwechsel bei deinem Pferd aktuell?",
    answers: [
      { text: "Das Fell löst sich gleichmäßig und mein Pferd wirkt fit", points: 0 },
      { text: "Der Fellwechsel zieht sich, mein Pferd ist etwas schlapper", points: 1 },
      { text: "Mein Pferd haart stark, wirkt müde und hat stumpfes Fell", points: 2 },
    ],
  },
  {
    id: 2,
    category: "fellwechsel",
    question: "Unterstützt du den Fellwechsel gezielt mit Zusatzfutter?",
    answers: [
      { text: "Ja, mit Zink, Biotin oder Kräutern", points: 0 },
      { text: "Nein, aber ich überlege es", points: 1 },
      { text: "Nein, ich wusste nicht, dass das sinnvoll ist", points: 2 },
    ],
  },
  // ANWEIDEN (2 Fragen)
  {
    id: 3,
    category: "anweiden",
    question: "Wie gehst du das Anweiden im Frühjahr an?",
    answers: [
      { text: "Langsam steigern: Start mit 10-15 Min, täglich erhöhen", points: 0 },
      { text: "Ich achte drauf, aber nicht streng nach Plan", points: 1 },
      { text: "Mein Pferd kommt direkt auf die Weide, wenn das Gras da ist", points: 2 },
    ],
  },
  {
    id: 4,
    category: "anweiden",
    question: "Kennst du das Hufrehe-Risiko durch Fruktan im Frühlingsgras?",
    answers: [
      { text: "Ja, ich meide kalte Nächte + sonnige Tage für den Weidegang", points: 0 },
      { text: "Ich habe davon gehört, bin aber unsicher", points: 1 },
      { text: "Nein, das ist mir neu", points: 2 },
    ],
  },
  // PARASITEN (2 Fragen)
  {
    id: 5,
    category: "parasiten",
    question: "Wann hast du zuletzt eine Kotprobe deines Pferdes untersuchen lassen?",
    answers: [
      { text: "In den letzten 3 Monaten", points: 0 },
      { text: "Vor mehr als 6 Monaten", points: 1 },
      { text: "Noch nie oder ich entwurme einfach regelmäßig ohne Test", points: 2 },
    ],
  },
  {
    id: 6,
    category: "parasiten",
    question: "Wie handhabst du die Entwurmung?",
    answers: [
      { text: "Selektiv nach Kotproben-Ergebnis", points: 0 },
      { text: "Festes Intervall (z.B. alle 3 Monate) ohne vorherigen Test", points: 1 },
      { text: "Wenn mir einfällt, dass es Zeit wird", points: 2 },
    ],
  },
  // FÜTTERUNG (2 Fragen)
  {
    id: 7,
    category: "fuetterung",
    question: "Wie passt du die Fütterung im Frühjahr an?",
    answers: [
      { text: "Ich reduziere Kraftfutter, wenn das Gras kommt", points: 0 },
      { text: "Ich behalte alles bei wie im Winter", points: 1 },
      { text: "Ich bin unsicher, was ich ändern sollte", points: 2 },
    ],
  },
  {
    id: 8,
    category: "fuetterung",
    question: "Wie gut kennst du den Nährstoffbedarf deines Pferdes?",
    answers: [
      { text: "Ich habe eine Rationsberechnung machen lassen", points: 0 },
      { text: "Ich schätze nach Körpergewicht und Aktivität", points: 1 },
      { text: "Ich füttere nach Gefühl und was andere machen", points: 2 },
    ],
  },
];

// ============================================
// Results based on score
// ============================================

function getResult(score: number): QuizResult {
  if (score <= 2) {
    return {
      level: "green",
      title: "Sehr gut vorbereitet!",
      description:
        "Du hast den Frühling im Griff. Dein Pferd ist in guten Händen – du achtest auf die wichtigen Details und handelst vorausschauend.",
      recommendations: [
        "Weiter so mit der gezielten Fellwechsel-Unterstützung",
        "Behalte dein Anweide-Protokoll bei",
        "Die selektive Entwurmung ist der goldene Standard",
        "Dein Fütterungsmanagement ist durchdacht",
      ],
    };
  } else if (score <= 5) {
    return {
      level: "yellow",
      title: "Gute Basis, aber Optimierungspotenzial",
      description:
        "Du machst vieles richtig, aber an einigen Stellen fehlt dir vielleicht noch das Wissen oder die Sicherheit. Das ist normal – und genau dafür bin ich da.",
      recommendations: [
        "Fellwechsel: Gezielte Mineralstoff-Gabe kann Wunder wirken",
        "Anweiden: Ein fester Plan schützt vor Hufrehe",
        "Parasiten: Eine Kotprobe kostet weniger als eine Wurmkur",
        "Fütterung: Weniger ist im Frühjahr oft mehr",
      ],
    };
  } else {
    return {
      level: "red",
      title: "Hier lohnt sich ein genauerer Blick",
      description:
        "Keine Sorge – dass du hier bist, zeigt ja, dass du hinschaust. In meinem Frühlings-Guide erkläre ich dir Schritt für Schritt, worauf es wirklich ankommt.",
      recommendations: [
        "Fellwechsel verstehen: Warum dein Pferd jetzt Unterstützung braucht",
        "Anweiden ohne Risiko: Der 4-Wochen-Fahrplan",
        "Entwurmung neu denken: Selektiv statt Schema F",
        "Fütterung anpassen: Was dein Pferd im Frühjahr wirklich braucht",
      ],
    };
  }
}

// ============================================
// Category Labels
// ============================================

const categoryLabels: Record<QuizQuestion["category"], string> = {
  fellwechsel: "Fellwechsel",
  anweiden: "Anweiden",
  parasiten: "Parasiten",
  fuetterung: "Fütterung",
};

// ============================================
// Component: Progress Bar
// ============================================

function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-loam-500 mb-2">
        <span>Frage {current} von {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-loam-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-sage-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// ============================================
// Component: Question Card
// ============================================

function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelect: (points: number) => void;
}) {
  return (
    <div className="animate-fade-in">
      {/* Category Badge */}
      <span className="inline-block bg-sage-100 text-sage-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        {categoryLabels[question.category]}
      </span>

      {/* Question */}
      <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8 leading-snug">
        {question.question}
      </h2>

      {/* Answers */}
      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onSelect(answer.points)}
            className={cn(
              "w-full text-left p-5 rounded-xl border-2 transition-all duration-200",
              "hover:border-sage-400 hover:bg-sage-50",
              selectedAnswer === answer.points
                ? "border-sage-500 bg-sage-50 ring-2 ring-sage-200"
                : "border-loam-200 bg-white"
            )}
          >
            <div className="flex items-start gap-4">
              {/* Radio Circle */}
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5",
                  "flex items-center justify-center transition-colors",
                  selectedAnswer === answer.points
                    ? "border-sage-500 bg-sage-500"
                    : "border-loam-300"
                )}
              >
                {selectedAnswer === answer.points && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                )}
              </div>
              {/* Answer Text */}
              <span className="text-loam-700 leading-relaxed">{answer.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Component: Result Card
// ============================================

function ResultCard({
  result,
  score,
  onEmailSubmit,
  email,
  setEmail,
  isSubmitting,
  isSubmitted,
}: {
  result: QuizResult;
  score: number;
  onEmailSubmit: (e: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
}) {
  const colors = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-500",
      badge: "bg-green-100 text-green-700",
    },
    yellow: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "text-amber-500",
      badge: "bg-amber-100 text-amber-700",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-500",
      badge: "bg-red-100 text-red-700",
    },
  };

  const colorScheme = colors[result.level];

  return (
    <div className="animate-fade-in">
      {/* Result Badge */}
      <div className="text-center mb-8">
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6",
            colorScheme.badge
          )}
        >
          {result.level === "green" && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {result.level === "yellow" && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
          {result.level === "red" && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {score} von 16 Punkten
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-loam-900 mb-4">
          {result.title}
        </h2>
        <p className="text-lg text-loam-600 max-w-2xl mx-auto leading-relaxed">
          {result.description}
        </p>
      </div>

      {/* Recommendations */}
      <div className={cn("rounded-2xl p-6 sm:p-8 mb-10", colorScheme.bg, "border", colorScheme.border)}>
        <h3 className="font-serif text-xl text-loam-900 mb-4">
          Deine persönlichen Empfehlungen:
        </h3>
        <ul className="space-y-3">
          {result.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className={cn("w-5 h-5 mt-0.5 flex-shrink-0", colorScheme.icon)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-loam-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Opt-In */}
      {!isSubmitted ? (
        <div className="bg-loam-900 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-white mb-3">
            Deinen persönlichen Report per E-Mail
          </h3>
          <p className="text-loam-300 mb-6 max-w-md mx-auto">
            Ich schicke dir deine Auswertung mit detaillierten Tipps für jede Kategorie – kostenlos.
          </p>

          <form onSubmit={onEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail-Adresse"
                required
                className={cn(
                  "flex-1 px-5 py-3.5 rounded-full",
                  "bg-white/10 border border-white/20",
                  "text-white placeholder:text-loam-400",
                  "focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                )}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "px-6 py-3.5 bg-gold-500 text-loam-900 font-semibold rounded-full",
                  "hover:bg-gold-400 transition-colors",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  "Absenden"
                )}
              </button>
            </div>
            <p className="text-loam-400 text-sm mt-4">
              Kein Spam, versprochen. Du kannst dich jederzeit abmelden.
            </p>
          </form>
        </div>
      ) : (
        <div className="bg-sage-600 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-white mb-3">
            Perfekt, dein Report ist unterwegs!
          </h3>
          <p className="text-white/90 mb-6">
            Schau in dein Postfach – und vergiss nicht, auch im Spam-Ordner nachzuschauen.
          </p>
        </div>
      )}

      {/* CTA to Guide */}
      <div className="text-center mt-10 pt-10 border-t border-loam-200">
        <p className="text-loam-600 mb-4">
          Du willst es ganz genau wissen?
        </p>
        <Link
          href="/guides/fruehling"
          className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          Zum Frühlings-Guide
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ============================================
// Main Quiz Page Component
// ============================================

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestionData = quizQuestions[currentQuestion];
  const totalScore = answers.reduce((sum: number, a) => sum + (a ?? 0), 0);

  const handleAnswerSelect = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual implementation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Send to email service (e.g., ConvertKit, Mailchimp)
    console.log("Email submitted:", email, "Score:", totalScore);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const result = getResult(totalScore);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-sage-600 uppercase tracking-wider mb-4 block">
            Frühlings-Check
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-loam-900 leading-tight mb-4">
            Wie fit ist dein Pferd{" "}
            <span className="italic">für den Frühling?</span>
          </h1>
          <p className="text-lg text-loam-600">
            8 kurze Fragen – in 2 Minuten weißt du, wo du stehst.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-10">
                <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
              </div>

              {/* Question */}
              <div className="bg-paper rounded-2xl border border-loam-100 p-6 sm:p-10 shadow-soft">
                <QuestionCard
                  question={currentQuestionData}
                  selectedAnswer={answers[currentQuestion]}
                  onSelect={handleAnswerSelect}
                />

                {/* Navigation */}
                <div className="flex justify-between mt-10 pt-6 border-t border-loam-100">
                  <button
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors",
                      currentQuestion === 0
                        ? "text-loam-300 cursor-not-allowed"
                        : "text-loam-600 hover:text-loam-900 hover:bg-loam-100"
                    )}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Zurück
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === null}
                    className={cn(
                      "flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors",
                      answers[currentQuestion] === null
                        ? "bg-loam-100 text-loam-400 cursor-not-allowed"
                        : "bg-sage-600 text-white hover:bg-sage-700"
                    )}
                  >
                    {currentQuestion === totalQuestions - 1 ? "Auswertung anzeigen" : "Weiter"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Result */
            <div className="bg-paper rounded-2xl border border-loam-100 p-6 sm:p-10 shadow-soft">
              <ResultCard
                result={result}
                score={totalScore}
                onEmailSubmit={handleEmailSubmit}
                email={email}
                setEmail={setEmail}
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
              />
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      {!showResult && (
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-loam-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Keine Daten gespeichert</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>2 Minuten</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% kostenfrei</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
