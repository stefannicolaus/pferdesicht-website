"use client";

import { ReactNode } from "react";
import { Heart, CheckCircle2 } from "lucide-react";

interface KeyTakeawayProps {
  number: number;
  children: ReactNode;
}

export function KeyTakeaway({ number, children }: KeyTakeawayProps) {
  return (
    <aside className="bg-gold/5 border-l-4 border-gold p-6 my-8">
      <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2 font-semibold">
        Key Takeaway #{number}
      </p>
      <div className="text-base font-sans text-loam leading-relaxed">{children}</div>
    </aside>
  );
}

export function ScientificFact({ children }: { children: ReactNode }) {
  return (
    <aside className="relative bg-[#FAF9F6] border border-gold rounded-sm p-8 my-8 shadow-md">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <div className="w-6 h-6 bg-gold rounded-full shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-loam rounded-full"></div>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Heart className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-base font-mono font-bold text-loam mb-3 uppercase tracking-wide">Wissenschaftlicher Fakt:</h3>
          <div className="text-sm font-sans text-loam/70 leading-relaxed">{children}</div>
        </div>
      </div>
    </aside>
  );
}

export function ExpertQuote({ author, children }: { author: string; children: ReactNode }) {
  return (
    <blockquote className="relative my-16 py-8 text-center">
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-serif text-gold opacity-30 leading-none">"</span>
      <p className="relative text-2xl md:text-3xl font-serif italic text-loam leading-relaxed mb-6 text-balance px-8">{children}</p>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-serif text-gold opacity-30 leading-none">"</span>
      <footer className="relative text-sm font-sans uppercase tracking-widest text-sage mt-4">— {author}</footer>
    </blockquote>
  );
}

export function QuizCTA() {
  return (
    <aside className="bg-sage rounded-sm p-8 my-12 text-center">
      <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2">Dein persönlicher Frühlings-Fahrplan</p>
      <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Wie fit ist dein Pferd für den Frühling?</h3>
      <p className="text-sm font-sans text-white/80 mb-6">In 2 Minuten bekommst du:</p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center justify-center gap-2 text-sm font-sans text-white/90"><CheckCircle2 className="w-4 h-4 text-gold" />Deine persönliche Risiko-Einschätzung</li>
        <li className="flex items-center justify-center gap-2 text-sm font-sans text-white/90"><CheckCircle2 className="w-4 h-4 text-gold" />Die Prioritäten für DEIN Pferd</li>
        <li className="flex items-center justify-center gap-2 text-sm font-sans text-white/90"><CheckCircle2 className="w-4 h-4 text-gold" />Einen persönlichen Frühlings-Kalender</li>
      </ul>
      <a href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 text-white font-medium uppercase tracking-wide rounded-sm transition-colors">Quiz starten →</a>
      <p className="text-xs font-sans text-white/60 mt-4">✓ 8 kurze Fragen · ✓ Kostenlos · ✓ Report per E-Mail</p>
    </aside>
  );
}
