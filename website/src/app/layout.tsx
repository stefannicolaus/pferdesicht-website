import type { Metadata } from "next";
import { EB_Garamond, Poppins } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pferdesicht – Fundiertes Wissen für dein Pferd",
    template: "%s | Pferdesicht",
  },
  description:
    "Wissen als Rüstung: Diana hilft dir, fundierte Entscheidungen für dein Pferd zu treffen. Recherchiert, sortiert und im Alltag getestet.",
  keywords: [
    "Pferdehaltung",
    "Pferdefütterung",
    "Offenstall",
    "Reittherapie",
    "Pferdewissen",
    "DACH",
  ],
  authors: [{ name: "Diana", url: "https://pferdesicht.com" }],
  creator: "Pferdesicht",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Pferdesicht",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${ebGaramond.variable} ${poppins.variable} antialiased bg-paper`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
