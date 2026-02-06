"use client";

import { cn } from "@/lib/utils";

type DisclaimerLevel = 1 | 2 | 3;

const disclaimerTexts: Record<DisclaimerLevel, string> = {
  1: "Dieser Beitrag ersetzt keine tierärztliche Beratung. Er soll dir helfen, informierte Entscheidungen für dein Pferd zu treffen. Dass du dich damit beschäftigst, zeigt: Du schaust genau hin – und das ist der erste Schritt.",
  2: "Die Inhalte basieren auf aktuellen Erkenntnissen und langjähriger Praxis, ersetzen aber keine tierärztliche Diagnose oder Behandlung. Sie sollen dir helfen, informierte Fragen zu stellen und fundierte Entscheidungen für dein Pferd zu treffen. Dass du hier bist, zeigt: Du übernimmst Verantwortung – und genau das ist der beste Schutz für dein Pferd.",
  3: "Dieser Beitrag ersetzt keine tierärztliche Diagnose oder Behandlung. Er soll dir helfen, Zusammenhänge zu verstehen, informierte Fragen zu stellen und die bestmögliche Entscheidung für dein Pferd zu treffen. Bei akuten Symptomen: Bitte sofort den Tierarzt rufen. Dass du dich vorbereitest und informierst, macht dich zur besten Anwältin deines Pferdes."
};

interface DisclaimerProps {
  level?: DisclaimerLevel;
  className?: string;
  variant?: "footer" | "article" | "inline";
}

export function Disclaimer({ level = 2, className, variant = "article" }: DisclaimerProps) {
  const baseStyles = "font-sans leading-relaxed";

  const variantStyles = {
    footer: "text-[0.72rem] text-loam-500 border-t border-loam/10 pt-4 mt-4",
    article: "text-xs text-loam/50 italic border-t border-loam/10 pt-6 mt-8",
    inline: "text-sm text-loam/60 italic py-4"
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {disclaimerTexts[level]}
    </div>
  );
}

export default Disclaimer;
