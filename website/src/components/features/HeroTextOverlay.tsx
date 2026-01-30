"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute bottom-0 left-0 w-full lg:w-2/3 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10">
      {/* Gradient Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-loam/95 via-loam/75 to-transparent -z-10" />

      {/* Badge */}
      <span className="inline-block px-3 py-1.5 bg-sage/80 text-[#f5f2ed] text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-3 sm:mb-4">
        Für Pferdemenschen, die hinschauen
      </span>

      {/* Headline */}
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f5f2ed] mb-3 sm:mb-4 max-w-2xl leading-tight">
        Jeder sagt mir was anderes.{" "}
        <span className="block sm:inline italic text-gold">
          Und ich weiß nicht mehr, was ich glauben soll.
        </span>
      </h1>

      {/* Subheadline - Quote Style */}
      <div className="border-l-2 border-gold/50 pl-3 sm:pl-4 mb-4 sm:mb-6 max-w-xl">
        {/* Desktop version */}
        <p className="hidden sm:block font-sans text-sm sm:text-base md:text-lg text-[#f5f2ed]/90 leading-relaxed">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C.
          Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>{" "}
          Also googelst du um 2 Uhr nachts.
        </p>
        {/* Mobile version - shorter */}
        <p className="sm:hidden font-sans text-sm text-[#f5f2ed]/90 leading-relaxed">
          Dein Hufschmied sagt A. Der Tierarzt sagt B. Aber dieses Gefühl in dir sagt:{" "}
          <span className="text-gold font-medium">Da stimmt was nicht.</span>
        </p>
      </div>

      {/* Personal Note */}
      <p className="font-serif text-sm sm:text-base md:text-lg text-gold/90 italic mb-1 sm:mb-2">
        Vor 16 Jahren war ich genau da, wo du jetzt bist.
      </p>

      {/* Signature */}
      <p className="font-serif text-xs sm:text-sm text-[#f5f2ed]/70">
        — Diana
      </p>
    </div>
  )
}
