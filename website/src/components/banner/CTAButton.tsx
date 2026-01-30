import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "gold" | "gold-dark"
  className?: string
  showArrow?: boolean
}

export function CTAButton({ href, children, variant = "gold", className = "", showArrow = true }: CTAButtonProps) {
  const baseStyles = "w-full min-h-[48px] py-4 px-6 font-sans font-semibold text-base rounded transition-colors inline-flex items-center justify-center gap-2"

  const variantStyles = {
    gold: "bg-gold hover:bg-gold/90 text-loam",
    "gold-dark": "bg-gold hover:bg-[#b8956a] text-white",
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </Link>
  )
}
