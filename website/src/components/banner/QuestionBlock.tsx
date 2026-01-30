import type React from "react"

interface QuestionBlockProps {
  intro?: string
  questions: string[]
  className?: string
}

export function QuestionBlock({ intro, questions, className = "" }: QuestionBlockProps) {
  return (
    <div className={`border-l-2 border-gold/50 pl-4 ml-2 ${className}`}>
      {intro && (
        <p className="font-sans text-sm text-[#f5f2ed]/80 font-medium mb-3">
          {intro}
        </p>
      )}
      <div className="space-y-2">
        {questions.map((question, i) => (
          <p key={i} className="font-sans text-sm sm:text-base text-[#f5f2ed] font-normal leading-relaxed">
            „{question}"
          </p>
        ))}
      </div>
    </div>
  )
}
