"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute top-20 md:top-24 lg:top-28 left-0 w-full md:w-[65%] lg:w-[60%] p-5 md:p-8 lg:p-12 z-10">
      {/* KEIN Gradient-Overlay - Text-Shadow für Lesbarkeit auf dunklem Himmel */}

      {/* Badge */}
      <span className="inline-block px-3 py-1.5 bg-sage/90 text-[#f5f2ed] text-[10px] md:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4 md:mb-6 shadow-lg">
        Für Pferdemenschen, die hinschauen
      </span>

      {/* HEADLINE - DOMINANT */}
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#f5f2ed] leading-[1.05] mb-4 md:mb-6 max-w-4xl">
        <span className="drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.8),_0_2px_10px_rgba(0,0,0,0.9)]">
          Jeder sagt mir was anderes.
        </span>
        <br className="hidden sm:block" />
        <span className="italic text-gold drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] [text-shadow:_0_4px_30px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.95)]">
          Und ich weiß nicht mehr, was ich glauben soll.
        </span>
      </h1>

      {/* Subheadline mit Quote-Border */}
      <div className="border-l-2 border-gold/60 pl-4 mb-4 md:mb-6 max-w-2xl">
        {/* Desktop version */}
        <p className="hidden sm:block font-sans text-sm md:text-base lg:text-lg text-[#f5f2ed]/90 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C.
          Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>{" "}
          Also googelst du um 2 Uhr nachts.
        </p>
        {/* Mobile version - shorter */}
        <p className="sm:hidden font-sans text-sm text-[#f5f2ed]/90 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>
        </p>
      </div>

      {/* Personal Note */}
      <p className="font-serif text-sm md:text-base lg:text-lg text-gold italic mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
        Vor 16 Jahren war ich genau da, wo du jetzt bist.
      </p>

      {/* Signature */}
      <p className="font-serif text-xs md:text-sm text-[#f5f2ed]/70 drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
        — Diana
      </p>
    </div>
  )
}
