import { CheckCircle2 } from "lucide-react"

interface ClickTriggersProps {
  triggers?: string[]
  variant?: "light" | "dark" | "inline"
  className?: string
}

const defaultTriggers = ["Kostenlos", "2 Min", "Kein Spam"]

export function ClickTriggers({ triggers = defaultTriggers, variant = "light", className = "" }: ClickTriggersProps) {
  if (variant === "inline") {
    return (
      <p className={`text-center font-sans text-xs text-[#f5f2ed]/60 ${className}`}>
        {triggers.join(" · ")}
      </p>
    )
  }

  const textColor = variant === "light" ? "text-[#f5f2ed]/50" : "text-loam/50"
  const iconColor = variant === "light" ? "text-sage" : "text-sage"

  return (
    <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${textColor} text-[10px] sm:text-xs font-sans ${className}`}>
      {triggers.map((trigger, i) => (
        <span key={i} className="flex items-center gap-1">
          <CheckCircle2 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${iconColor}`} />
          {trigger}
        </span>
      ))}
    </div>
  )
}
