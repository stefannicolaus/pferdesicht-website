"use client"

export function HeroTextOverlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Text Container - Desktop: vertikal zentriert, Mobile: oben */}
      <div className="absolute top-6 md:top-[3%] left-0 w-full lg:w-[90%] px-5 pt-8 md:pt-0 lg:pr-10 lg:pt-10" style={{ paddingLeft: '100px', maxWidth: 'none' }}>

        {/* Badge - Mobile Version */}
        <span className="inline-flex md:hidden items-center px-4 py-1.5 rounded-full bg-sage text-white text-[10px] font-sans font-bold tracking-widest uppercase mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Badge - Desktop Version */}
        <span className="hidden md:inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold text-[#EBE6DF] text-xs font-sans font-semibold uppercase tracking-widest mb-5 lg:mb-6">
          Für Pferdemenschen, die hinschauen
        </span>

        {/* Headline Cream - große Schrift mit clamp */}
        <h1
          className="font-serif font-medium text-white leading-[1.1] tracking-tight mb-4 md:mb-1 lg:mb-0 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.7)]"
          style={{ fontSize: 'clamp(48px, 8vw, 90px)' }}
        >
          <span className="whitespace-nowrap">Jeder im Stall sagt mir was</span><br />anderes.
        </h1>

        {/* Subheadline Gold Italic - große Schrift mit clamp */}
        <p
          className="font-serif italic font-normal text-gold leading-[1.15] mb-6 md:mb-3 lg:mb-4 max-w-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.9),_0_4px_20px_rgba(0,0,0,0.8)] md:[text-shadow:_0_4px_30px_rgba(0,0,0,0.8)]"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
        >
          <span className="whitespace-nowrap">Und ich weiß schon lange nicht mehr,</span><br /><span className="whitespace-nowrap">was ich glauben soll.</span>
        </p>

        {/* Subheadline mit Border */}
        <div className="border-l-2 border-gold/50 pl-4 md:pl-6 max-w-md lg:max-w-lg mb-8 md:mb-0">
          <p className="text-white md:text-[#EBE6DF]/90 text-sm md:text-base lg:text-lg font-sans font-light leading-relaxed [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.7)] md:[text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]">
            Dein Hufschmied sagt A. Der Tierarzt sagt B. Deine Stallkollegin schwört auf C. Aber dieses Gefühl in dir sagt:{" "}
            <span className="text-gold font-medium">Da stimmt was nicht.</span>
            {" "}Also googelst du um 2 Uhr nachts.
          </p>
        </div>

        {/* CTA Text */}
        <p className="text-gold italic font-serif mt-6 text-base md:text-xl lg:text-2xl leading-relaxed bg-loam/40 px-4 md:px-6 py-2 md:py-3 rounded inline-block [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_2px_10px_rgba(0,0,0,0.7)] md:[text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]">
          Kommt dir das bekannt vor? Dann bist du hier genau richtig.
        </p>
      </div>
    </div>
  )
}
