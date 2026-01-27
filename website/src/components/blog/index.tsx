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
    <aside className="bg-sage rounded-lg overflow-hidden my-12">
      {/* Top Section */}
      <div className="p-8 md:p-10 text-center">
        <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold mb-4">
          Dein persönlicher Frühlings-Fahrplan
        </p>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
          Wie fit ist dein Pferd<br />für den <span className="italic">Frühling</span>?
        </h3>
        <p className="text-sm font-sans text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
          Fellwechsel, Anweiden, Parasiten – alle reden gleichzeitig auf dich ein. Aber was ist wirklich wichtig für DEIN Pferd? In 2 Minuten weißt du es.
        </p>
        <a href="/quiz" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold/90 font-semibold uppercase tracking-wider text-sm rounded transition-colors w-full md:w-auto" style={{ color: "#2c2a25" }}>
          Quiz starten <span className="ml-1">→</span>
        </a>
        <div className="flex items-center justify-center gap-6 mt-6 text-xs font-sans text-white/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> 8 kurze Fragen
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Sofort Ergebnis
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Report per E-Mail
          </span>
        </div>
      </div>
      
      {/* Bottom Section - Was du bekommst */}
      <div className="bg-[#6B7A5E] p-8 md:p-10">
        <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/70 mb-6 font-semibold">
          Was du bekommst:
        </p>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-white text-base mb-0.5">Risiko-Einschätzung</p>
              <p className="font-sans text-white/60 text-sm">Deine persönliche Ampel: Grün, Gelb oder Rot</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-white text-base mb-0.5">Deine Prioritäten</p>
              <p className="font-sans text-white/60 text-sm">Was jetzt wichtig ist – und was warten kann</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📅</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-white text-base mb-0.5">Persönlicher Kalender</p>
              <p className="font-sans text-white/60 text-sm">Wochen-Plan Februar bis Mai – zum Abhaken</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

interface SummaryItem {
  title: string;
  text: string;
}

interface SummaryBoxProps {
  items: SummaryItem[];
}

export function SummaryBox({ items }: SummaryBoxProps) {
  return (
    <aside className="bg-white border-2 border-gold/30 rounded-sm p-8 my-12 shadow-lg">
      <h3 className="text-2xl font-serif text-loam text-center mb-8">Zusammenfassung: Die 5 Key Takeaways</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-gold/20 rounded-full flex-shrink-0 text-xs font-bold text-loam">
              #{index + 1}
            </span>
            <p className="text-sm font-sans text-loam/80 leading-relaxed pt-1">
              <strong className="text-loam">{item.title}:</strong> {item.text}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm font-serif italic text-sage mt-8">— Diana, Pferdesicht</p>
    </aside>
  );
}
