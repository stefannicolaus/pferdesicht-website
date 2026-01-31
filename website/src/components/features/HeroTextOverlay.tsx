"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Gradient-Overlay für Lesbarkeit */}
      {/* Mobile: deutlich stärker für helles Bild */}
      <div className="absolute inset-0 bg-gradient-to-b from-loam/90 via-loam/60 to-transparent md:bg-gradient-to-r md:from-loam/80 md:via-loam/40 md:to-loam/10" />

      {/* Text Container - Desktop: vertikal zentriert, Mobile: oben */}
      <div className="absolute top-6 md:top-[8%] left-0 w-full lg:w-[55%] px-5 pt-8 md:pt-0 lg:p-10 xl:p-12">

        {/* Badge - Mobile Version */}
        <span className="inline-flex md:hidden items-center px-4 py-1.5 rounded-full bg-sage text-white text-[10px] font-sans font-bold tracking-widest uppercase mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Badge - Desktop Version */}
        <span className="hidden md:inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold text-[#EBE6DF] text-xs font-sans font-semibold uppercase tracking-widest mb-5 lg:mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Headline Cream - responsive Größen für alle Viewports */}
        <h1 className="font-serif text-[2.5rem] md:text-4xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] md:leading-[1.08] tracking-tight mb-4 md:mb-1 lg:mb-0 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.7)]">
          Jeder im Stall sagt mir was anderes.
        </h1>

        {/* Headline Gold Italic - responsive Größen */}
        <p className="font-serif italic text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-normal text-gold leading-tight md:leading-[1.08] mb-6 md:mb-3 lg:mb-4 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.8)]">
          Und ich weiß schon lange nicht mehr, was ich glauben soll.
        </p>

        {/* Subheadline mit Border */}
        <div className="border-l-2 border-gold/50 pl-4 md:pl-6 max-w-md lg:max-w-lg mb-8 md:mb-0">
          <p className="text-white md:text-[#EBE6DF]/90 text-sm md:text-base lg:text-lg font-sans font-light leading-relaxed [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.7)] md:[text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]">
            Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C. Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>
            {" "}Also googelst du um 2 Uhr nachts.
          </p>
        </div>
      </div>
    </div>
  )
}
