"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute top-16 md:top-[4.5rem] lg:top-20 left-0 w-full md:w-[62%] lg:w-[58%] xl:w-[55%] p-5 md:p-6 lg:p-8 xl:p-10 z-10">
      {/* KEIN Gradient-Overlay - Text-Shadow für Lesbarkeit auf dunklem Himmel */}

      {/* Badge */}
      <span className="inline-block px-3 py-1.5 bg-sage/90 text-cream text-[10px] md:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-3 md:mb-4 shadow-lg">
        Für Pferdemenschen, die hinschauen
      </span>

      {/* HEADLINE GROUP - Großer Abstand nach unten: mb-10 lg:mb-12 (40-48px) */}
      <div className="mb-10 lg:mb-12">
        {/* Zeile 1: Cream, groß */}
        <h1 className="font-serif text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] text-cream leading-[1.08] max-w-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.8),_0_2px_10px_rgba(0,0,0,0.9)]">
          Jeder sagt mir was anderes.
        </h1>
        {/* Zeile 2+: Gold Italic, 10-15% GRÖSSER als Cream */}
        <p className="font-serif italic text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] text-gold leading-[1.08] max-w-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.95)]">
          Und ich weiß nicht mehr, was ich glauben soll<span className="text-gold">.</span>
        </p>
      </div>

      {/* Subheadline mit 3px Quote-Border */}
      <div className="border-l-[3px] border-gold/50 pl-5 mb-4 md:mb-5 max-w-md lg:max-w-lg">
        {/* Desktop version */}
        <p className="hidden sm:block font-sans text-sm md:text-base lg:text-lg text-cream/90 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C.
          Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>{" "}
          Also googelst du um 2 Uhr nachts.
        </p>
        {/* Mobile version - shorter */}
        <p className="sm:hidden font-sans text-sm text-cream/90 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>
        </p>
      </div>

      {/* Personal Note */}
      <p className="font-serif text-sm md:text-base lg:text-lg text-gold italic mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
        Vor 16 Jahren war ich genau da, wo du jetzt bist.
      </p>

      {/* Signature */}
      <p className="font-serif text-xs md:text-sm text-cream/70 drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
        — Diana
      </p>
    </div>
  )
}
