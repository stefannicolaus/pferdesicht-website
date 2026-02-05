import type React from "react"
import type { Metadata } from "next"
import { Poppins, EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { StickyQuizBanner } from "@/components/layout/StickyQuizBanner"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
})

export const metadata: Metadata = {
  title: "Pferdesicht.com - Finde die Wahrheit für dein Pferd",
  description: "Fundierte Informationen zur natürlichen Pferdehaltung. Authentisch, fundiert, modern.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${poppins.variable} ${ebGaramond.variable}`}>
      <body className="font-sans antialiased bg-paper text-loam">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyQuizBanner />
        <Analytics />
      </body>
    </html>
  )
}
