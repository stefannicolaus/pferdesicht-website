'use client'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
  className?: string
}

export function QuizProgress({
  currentStep,
  totalSteps,
  className,
}: QuizProgressProps) {
  const progress = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Frage {currentStep} von {totalSteps}
        </span>
        <span className="font-medium text-sage-700">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 bg-sage-100" />
    </div>
  )
}
