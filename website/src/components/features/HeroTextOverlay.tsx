"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Subtiler Gradient-Overlay für Lesbarkeit - von links nach rechts auslaufend */}
      <div className="absolute inset-0 bg-gradient-to-r from-loam/60 via-loam/30 to-transparent" />

      {/* Text Container */}
      <div className="relative h-full flex flex-col justify-center w-full md:w-[65%] lg:w-[62%] xl:w-[58%] p-5 md:p-6 lg:p-8 xl:p-10">

        {/* Badge */}
        <span className="inline-block self-start px-3 py-1.5 bg-sage/90 text-white text-[10px] md:text-xs font-sans font-semibold uppercase tracking-widest rounded mb-4 md:mb-5 shadow-lg">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* HEADLINE GROUP - Großer Abstand nach unten */}
        <div className="mb-10 lg:mb-14">
          {/* Zeile 1: Weiß wie in Vorlage */}
          <h1 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] text-white leading-[1.12] max-w-none">
            Jeder sagt mir was anderes.
          </h1>
          {/* Zeile 2+: Gold Italic, DEUTLICH GRÖSSER */}
          <p className="font-serif italic text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] text-gold leading-[1.05] max-w-none">
            Und ich weiß nicht mehr, was ich glauben soll.
          </p>
        </div>

        {/* Subheadline mit Quote-Border */}
        <div className="border-l-[3px] border-gold/60 pl-5 max-w-lg lg:max-w-xl">
          {/* Desktop version */}
          <p className="hidden sm:block font-sans text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
            Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C.
            Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>{" "}
            Also googelst du um 2 Uhr nachts.
          </p>
          {/* Mobile version - shorter */}
          <p className="sm:hidden font-sans text-sm text-white/90 leading-relaxed">
            Dein Hufschmied sagt A. Der Tierarzt sagt B. Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
