"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Gradient-Overlay für Lesbarkeit */}
      {/* Mobile: deutlich stärker für helles Bild */}
      <div className="absolute inset-0 bg-gradient-to-b from-loam/90 via-loam/60 to-transparent md:bg-gradient-to-r md:from-loam/80 md:via-loam/40 md:to-loam/10" />

      {/* Text Container */}
      <div className="absolute top-6 lg:top-8 left-0 w-full lg:w-[90%] px-5 pt-8 lg:p-10 xl:p-12">

        {/* Badge - Mobile Version */}
        <span className="inline-flex md:hidden items-center px-4 py-1.5 rounded-full bg-sage text-white text-[10px] font-sans font-bold tracking-widest uppercase mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Badge - Desktop Version */}
        <span className="hidden md:inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold text-[#EBE6DF] text-xs font-sans font-semibold uppercase tracking-widest mb-5 lg:mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Headline Cream - verstärkter Schatten für Mobile */}
        <h1 className="font-serif text-[2.5rem] md:text-5xl lg:text-7xl xl:text-8xl font-medium text-white leading-[1.1] md:leading-[1.08] tracking-tight mb-4 md:mb-2 lg:mb-0 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.7)]">
          Jeder im Stall sagt mir was anderes.
        </h1>

        {/* Headline Gold Italic - verstärkter Schatten für Mobile */}
        <p className="font-serif italic text-[1.5rem] md:text-[2.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-normal text-gold leading-tight md:leading-[1.08] mb-6 md:mb-6 lg:mb-12 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.8)]">
          Und ich weiß schon lange nicht mehr, was ich glauben soll.
        </p>

        {/* Subheadline mit Border - verstärkter Schatten für Mobile */}
        <div className="border-l-2 border-gold/50 pl-4 md:pl-6 max-w-md lg:max-w-lg mb-8 md:mb-0">
          <p className="text-white md:text-[#EBE6DF]/90 text-base md:text-lg lg:text-xl font-sans font-light leading-relaxed [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.7)] md:[text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]">
            Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C. Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>
            {" "}Also googelst du um 2 Uhr nachts.
          </p>
        </div>
      </div>
    </div>
  )
}
