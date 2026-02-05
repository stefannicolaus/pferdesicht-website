'use client'

import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface QuestionCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function QuestionCard({
  title,
  description,
  children,
  className,
}: QuestionCardProps) {
  return (
    <Card className={cn('border-sage-200 shadow-lg', className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-loam-800 md:text-2xl">
          {title}
        </CardTitle>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
