import { CheckCircle2 } from "lucide-react"

interface BenefitsListProps {
  title?: string
  benefits: string[]
  variant?: "light" | "dark"
  className?: string
}

export function BenefitsList({ title, benefits, variant = "light", className = "" }: BenefitsListProps) {
  const textColor = variant === "light" ? "text-[#f5f2ed]" : "text-loam"
  const textOpacity = variant === "light" ? "text-[#f5f2ed]/90" : "text-loam/80"
  const titleOpacity = variant === "light" ? "text-[#f5f2ed]/70" : "text-loam/60"

  return (
    <div className={className}>
      {title && (
        <p className={`font-sans text-xs ${titleOpacity} font-semibold uppercase tracking-wide mb-3`}>
          {title}
        </p>
      )}
      <ul className="space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span className={`font-sans text-sm ${textOpacity} font-normal`}>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
