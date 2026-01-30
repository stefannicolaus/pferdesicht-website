"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Subtiler Gradient-Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-loam/60 via-loam/30 to-transparent" />

      {/* Text Container */}
      <div className="absolute top-6 lg:top-8 left-0 w-full lg:w-[90%] p-6 lg:p-10 xl:p-12">

        {/* Badge - NUR Desktop */}
        <span className="hidden lg:inline-block px-4 py-2 bg-transparent border border-gold text-white text-[11px] font-sans font-semibold uppercase tracking-[0.1em] rounded mb-5 lg:mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Headline Cream */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal text-white leading-[1.08] tracking-tight mb-2 lg:mb-0 max-w-none [text-shadow:_0_4px_30px_rgba(0,0,0,0.7)]">
          Jeder im Stall sagt mir was anderes.
        </h1>

        {/* Headline Gold */}
        <p className="font-serif italic text-3xl sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.75rem] xl:text-[4.25rem] font-normal text-gold leading-[1.08] mb-6 lg:mb-12 max-w-none [text-shadow:_0_4px_30px_rgba(0,0,0,0.8)]">
          Und ich weiß schon lange nicht mehr, was ich glauben soll.
        </p>

        {/* Subheadline - MOBILE + DESKTOP */}
        <div className="border-l-[3px] border-gold/50 pl-4 lg:pl-5 max-w-md lg:max-w-lg">
          <p className="font-sans text-base lg:text-[17px] font-normal text-white/85 leading-relaxed [text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]">
            Dein Hufschmied sagt A. Der Tierarzt sagt B.
            <span className="hidden sm:inline"> Deine Stallkollegin schwört auf C.</span>
            {" "}Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>
            <span className="hidden sm:inline">{" "}Also googelst du um 2 Uhr nachts.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
