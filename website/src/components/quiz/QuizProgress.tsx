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
    <div className={cn('space-y-1', className)}>
      <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
        <span>Frage {currentStep} von {totalSteps}</span>
        <span>·</span>
        <span className="text-sage">{progress}%</span>
      </div>
      <Progress value={progress} className="h-1 bg-sage/20" />
    </div>
  )
}
