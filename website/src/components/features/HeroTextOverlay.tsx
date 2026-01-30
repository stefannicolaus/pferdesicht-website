"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-0 w-full md:w-[65%] lg:w-[62%] xl:w-[58%] p-5 md:p-6 lg:p-8 xl:p-10 z-10">
      {/* KEIN Gradient-Overlay - Text-Shadow für Lesbarkeit auf dunklem Himmel */}

      {/* Badge */}
      <span className="inline-block px-3 py-1.5 bg-sage/90 text-cream text-[10px] md:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4 md:mb-5 shadow-lg">
        Für Pferdemenschen, die hinschauen
      </span>

      {/* HEADLINE GROUP - Großer Abstand nach unten */}
      <div className="mb-12 lg:mb-16">
        {/* Zeile 1: Cream */}
        <h1 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] text-cream leading-[1.12] max-w-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.8),_0_2px_10px_rgba(0,0,0,0.9)]">
          Jeder sagt mir was anderes.
        </h1>
        {/* Zeile 2+: Gold Italic, DEUTLICH GRÖSSER (25-30%) */}
        <p className="font-serif italic text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] text-gold leading-[1.05] max-w-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.95)]">
          Und ich weiß nicht mehr, was ich glauben soll<span className="text-gold">.</span>
        </p>
      </div>

      {/* Subheadline mit 3px Quote-Border - KEIN Personal Note/Signature danach */}
      <div className="border-l-[3px] border-gold/50 pl-5 max-w-lg lg:max-w-xl">
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
    </div>
  )
}
