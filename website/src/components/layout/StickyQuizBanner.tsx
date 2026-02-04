"use client";

import Link from "next/link";

export function StickyQuizBanner() {
  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#5f6b54] p-4 md:hidden z-50">
        <Link href="/quiz" className="block text-center">
          <span className="block text-[#c8a476] text-xs mb-1">
            Meine Frühlingsvorbereitung
          </span>
          <span className="block text-white font-semibold">
            Zeig mir, worauf ich achten sollte →
          </span>
        </Link>
        <p className="text-white/60 text-xs text-center mt-2">
          Kostenlos · 2 Minuten · Report per E-Mail
        </p>
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 bg-[#5f6b54] z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#c8a476] text-sm font-medium">
              Dein persönlicher Frühlings-Fahrplan
            </span>
            <span className="text-white/60 text-sm">
              Kostenlos · 2 Minuten · Report per E-Mail
            </span>
          </div>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c8a476] text-white rounded-full hover:bg-[#b8946a] transition-colors font-medium text-sm"
          >
            Zeig mir, worauf ich achten sollte
            <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StickyQuizBanner;
