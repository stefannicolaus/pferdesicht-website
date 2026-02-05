'use client'

import { cn } from '@/lib/utils'
import type { Bucket } from '@/lib/quiz/schema'
import { getBucketInfo } from '@/lib/quiz/scoring'

interface BucketResultProps {
  bucket: Bucket
  pferdename: string
  risikoScore: number
  className?: string
}

const bucketStyles: Record<Bucket, { bg: string; border: string; text: string }> = {
  gruen: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
  },
  gelb: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
  },
  rot: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
  },
}

export function BucketResult({
  bucket,
  pferdename,
  risikoScore,
  className,
}: BucketResultProps) {
  const bucketInfo = getBucketInfo(bucket)
  const styles = bucketStyles[bucket]

  return (
    <div
      className={cn(
        'rounded-xl border-2 p-6 text-center',
        styles.bg,
        styles.border,
        className
      )}
    >
      <div className="mb-4 text-5xl">{bucketInfo.emoji}</div>

      <h2 className={cn('text-2xl font-bold', styles.text)}>
        {bucketInfo.label}
      </h2>

      <p className="mt-2 text-lg text-loam-700">
        Ergebnis für <span className="font-semibold">{pferdename}</span>
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2">
        <span className="text-sm text-loam-600">Risiko-Score:</span>
        <span className={cn('text-lg font-bold', styles.text)}>
          {risikoScore} Punkte
        </span>
      </div>

      <p className="mt-6 text-loam-600">{bucketInfo.description}</p>
    </div>
  )
}
