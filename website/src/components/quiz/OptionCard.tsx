'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface OptionCardProps {
  label: string
  selected: boolean
  onClick: () => void
  type?: 'radio' | 'checkbox'
  className?: string
}

export function OptionCard({
  label,
  selected,
  onClick,
  type = 'radio',
  className,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left transition-all',
        'hover:border-sage-400 hover:bg-sage-50',
        'focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2',
        selected
          ? 'border-gold-500 bg-gold-50'
          : 'border-sage-200 bg-white',
        className
      )}
    >
      {/* Indicator */}
      <div
        className={cn(
          'flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-colors',
          type === 'radio' ? 'rounded-full' : 'rounded',
          selected
            ? 'border-loam bg-loam text-white'
            : 'border-sage-300 bg-white'
        )}
      >
        {selected && <Check className="h-3 w-3" strokeWidth={3} />}
      </div>

      {/* Label */}
      <span
        className={cn(
          'text-base transition-colors',
          selected ? 'font-medium text-loam-800' : 'text-loam-700'
        )}
      >
        {label}
      </span>
    </button>
  )
}
