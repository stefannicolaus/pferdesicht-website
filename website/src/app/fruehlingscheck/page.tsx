"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ═══════════════════════════════════════════════════════════════
// PFERDESICHT — SQUEEZE PAGE: FRÜHLINGSCHECK
// ═══════════════════════════════════════════════════════════════
// Deiss-Minimal Pattern (60.34% CR documented)
// Desktop: 2-Spalten (Text+CTA links, Report-Mockup rechts)
// Mobile: Vertikal (Headline → CTA → Mockup)
// ═══════════════════════════════════════════════════════════════

const C = {
  loam: "#2c2a25",
  loamLight: "#3a3833",
  sage: "#78866b",
  sageBg: "#78866b12",
  gold: "#c8a476",
  goldHover: "#d4b48a",
  cream: "#faf8f5",
  creamDark: "#f0ece6",
  paper: "#f5f2ed",
  warm: "#fdfcfa",
  text: "#2c2a25",
  muted: "#6b6560",
  light: "#9a958e",
  border: "#e8e4de",
};

const F = {
  serif: "'EB Garamond', Georgia, serif",
  sans: "'Poppins', 'Helvetica Neue', sans-serif",
};

// ── Hooks ──
function useFade() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" } };
}

function useMedia(query: string) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setM(mq.matches);
    const h = (e: MediaQueryListEvent) => setM(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [query]);
  return m;
}

function AnimCount({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [c, setC] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        let cur = 0;
        const step = end / 120;
        const t = setInterval(() => { cur += step; if (cur >= end) { setC(end); clearInterval(t); } else setC(Math.floor(cur)); }, 16);
      }
    }, { threshold: 0.3 });
    o.observe(el);
    return () => o.disconnect();
  }, [end]);
  return <span ref={ref}>{c}{suffix}</span>;
}

function GrainOverlay() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
      pointerEvents: "none",
    }} />
  );
}

// ── CTA Button ──
function CTA({ children, full, sub, triggers, light }: { children: React.ReactNode; full?: boolean; sub?: string; triggers?: string[]; light?: boolean }) {
  const [h, setH] = useState(false);
  const router = useRouter();
  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => router.push("/fruehlingscheck/start")}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          background: h ? C.goldHover : C.gold,
          color: C.loam, border: "none", borderRadius: "6px",
          padding: "16px 36px", fontSize: "16px",
          fontFamily: F.sans, fontWeight: 600, cursor: "pointer",
          transition: "all 0.25s ease",
          transform: h ? "translateY(-1px)" : "none",
          boxShadow: h ? "0 6px 20px rgba(200,164,118,0.35)" : "0 3px 10px rgba(200,164,118,0.18)",
          width: full ? "100%" : "auto", letterSpacing: "0.01em",
        }}
      >{children}</button>
      {sub && <p style={{ fontFamily: F.sans, fontSize: "12px", color: light ? C.light : C.muted, marginTop: "8px" }}>{sub}</p>}
      {triggers && (
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "10px", flexWrap: "wrap" }}>
          {triggers.map((t, i) => (
            <span key={i} style={{ fontFamily: F.sans, fontSize: "11px", color: light ? "#9a958e" : C.light }}>✓ {t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════
function Hero() {
  const isMobile = useMedia("(max-width: 768px)");

  const subheadline = (
    <div>
      <p style={{
        fontFamily: F.sans, fontSize: isMobile ? "14px" : "17px",
        color: C.muted, lineHeight: 1.6, margin: "0",
        maxWidth: isMobile ? "none" : "500px",
      }}>
        <span style={{ color: C.gold, fontWeight: 500 }}>8 Fragen.</span>{" "}
        Persönliche Auswertung mit{" "}
        <span style={{ color: C.gold, fontWeight: 500 }}>Ampelsystem.</span>{" "}
        Dein Frühlings-Fahrplan — sortiert nach{" "}
        <span style={{ color: C.gold, fontWeight: 500 }}>Dringlichkeit.</span>
      </p>
      <p style={{
        fontFamily: F.sans, fontSize: "12px", color: C.light,
        margin: isMobile ? "8px 0 0" : "10px 0 0",
      }}>
        Inkl. Hufrehe-Risiko · Cushing-Einordnung · Fruktan-Ampel
      </p>
    </div>
  );

  const ctaBlock = (
    <div>
      <CTA triggers={["Kostenlos", "Keine E-Mail vorher nötig", "Sofort Ergebnis"]}>
        Jetzt Frühlingscheck starten →
      </CTA>
      <p style={{
        fontFamily: F.sans, fontSize: "12px", color: C.light,
        marginTop: isMobile ? "12px" : "24px", textAlign: "center",
      }}>
        Bereits <strong style={{ color: C.muted }}><AnimCount end={847} /></strong> Pferdebesitzerinnen haben den Check gemacht
      </p>
    </div>
  );

  return (
    <section style={{
      background: C.cream,
      padding: isMobile ? "48px 20px 36px" : "0 48px",
      textAlign: isMobile ? "center" : "left",
      minHeight: isMobile ? "auto" : "100vh",
      display: "flex",
      alignItems: isMobile ? "center" : "flex-start",
      justifyContent: "center",
      paddingTop: isMobile ? "48px" : "max(44px, 4vh)",
    }}>
      {isMobile ? (
        <div style={{ maxWidth: "640px", width: "100%" }}>
          <p style={{
            fontFamily: F.sans, fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: C.sage, margin: "0 0 10px",
          }}>Kostenloser Frühlingscheck · 2 Minuten</p>

          <h1 style={{
            fontFamily: F.serif, fontSize: "26px", fontWeight: 400,
            lineHeight: 1.18, color: C.text, margin: "0 0 12px",
          }}>
            Fellwechsel, Anweiden, Parasiten, Fütterung —{" "}
            <span style={{ color: C.sage }}>finde heraus, was bei deinem Pferd jetzt wirklich zählt.</span>
          </h1>

          <div style={{ marginBottom: "20px" }}>{subheadline}</div>
          {ctaBlock}
          <div style={{ marginTop: "28px" }}>
            <div style={{
              display: "flex", justifyContent: "center",
              gap: "16px", flexWrap: "wrap", marginBottom: "20px",
            }}>
              {[
                { icon: "✉️", label: "Persönliches Anschreiben" },
                { icon: "🚦", label: "Ampel-Auswertung" },
                { icon: "📅", label: "4-Wochen-Plan" },
                { icon: "🖨️", label: "Zum Ausdrucken" },
              ].map((b, i) => (
                <div key={i} style={{ textAlign: "center", minWidth: "70px" }}>
                  <span style={{ fontSize: "20px", display: "block", marginBottom: "4px" }}>{b.icon}</span>
                  <span style={{ fontFamily: F.sans, fontSize: "11px", color: C.muted, lineHeight: 1.3 }}>{b.label}</span>
                </div>
              ))}
            </div>
            <ReportMockup isMobile />
          </div>
        </div>
      ) : (
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "48px",
          maxWidth: "1120px", width: "100%", margin: "0 auto",
          paddingTop: "max(24px, 3vh)",
        }}>
          <div style={{ flex: "1 1 55%", minWidth: 0 }}>
            <p style={{
              fontFamily: F.sans, fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: C.sage, margin: "0 0 14px",
            }}>Kostenloser Frühlingscheck · 2 Minuten</p>

            <h1 style={{
              fontFamily: F.serif, fontSize: "clamp(30px, 3.5vw, 44px)",
              fontWeight: 400, lineHeight: 1.18,
              color: C.text, margin: "0 0 16px",
            }}>
              Fellwechsel, Anweiden, Parasiten, Fütterung —{" "}
              <span style={{ color: C.sage }}>finde heraus, was bei deinem Pferd jetzt wirklich zählt.</span>
            </h1>

            <div style={{ marginBottom: "24px" }}>{subheadline}</div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "28px" }}>
              {[
                { icon: "✉️", label: "Persönliches Anschreiben" },
                { icon: "🚦", label: "Ampel-Auswertung" },
                { icon: "📅", label: "4-Wochen-Plan" },
                { icon: "🖨️", label: "Zum Ausdrucken" },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "16px" }}>{b.icon}</span>
                  <span style={{ fontFamily: F.sans, fontSize: "12px", color: C.muted }}>{b.label}</span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "left" }}>{ctaBlock}</div>
          </div>

          <div style={{ flex: "0 0 420px", maxWidth: "420px" }}>
            <ReportMockup isMobile={false} />
          </div>
        </div>
      )}
    </section>
  );
}

// ── Report Mockup ──
function ReportMockup({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{
      background: C.warm, border: `1px solid ${C.border}`,
      borderRadius: "12px", padding: isMobile ? "18px 14px" : "28px 30px",
      maxWidth: "460px", margin: "0 auto", textAlign: "left",
      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        marginBottom: "14px", paddingBottom: "12px",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "8px",
          background: `${C.sage}18`, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "18px", flexShrink: 0,
        }}>🐴</div>
        <div>
          <p style={{ fontFamily: F.serif, fontSize: "15px", fontWeight: 500, color: C.text, margin: 0, lineHeight: 1.2 }}>
            Dante's Frühlings-Fahrplan
          </p>
          <p style={{ fontFamily: F.sans, fontSize: "10px", color: C.light, margin: "2px 0 0" }}>
            Erstellt am 14. März 2025 · Pferdesicht Frühlingscheck
          </p>
        </div>
      </div>

      <div style={{
        background: C.cream, borderRadius: "8px",
        padding: "12px 14px", marginBottom: "12px",
        borderLeft: `3px solid ${C.sage}`,
      }}>
        <p style={{
          fontFamily: F.serif, fontSize: "13px", fontStyle: "italic",
          color: C.text, margin: 0, lineHeight: 1.5,
        }}>
          „Liebe Anna, du hast angegeben, dass Dante ein Isländer ist und
          im Frühling oft sehr lange braucht, bis das Winterfell raus ist.
          Das ist bei Robustpferden normal — aber es gibt zwei Punkte,
          auf die du <span style={{ fontWeight: 500 }}>bei seiner Rasse besonders</span> achten solltest..."
        </p>
      </div>

      <p style={{
        fontFamily: F.sans, fontSize: "10px", fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: C.sage, margin: "0 0 6px",
      }}>Deine Prioritäten</p>
      {[
        { s: "🔴", t: "Anweiden — Risikogruppe, Fruktan-Protokoll nötig" },
        { s: "🟡", t: "Fellwechsel — beobachten, bei Robustpferden später normal" },
        { s: "🟢", t: "Parasiten — entspannen, Kotprobe ab April sinnvoll" },
      ].map((r, i) => (
        <div key={i} style={{
          display: "flex", gap: "8px", alignItems: "center",
          padding: "5px 0",
          borderBottom: i < 2 ? `1px solid ${C.creamDark}` : "none",
        }}>
          <span style={{ fontSize: "12px" }}>{r.s}</span>
          <span style={{ fontFamily: F.sans, fontSize: isMobile ? "11px" : "12px", color: C.text, lineHeight: 1.4 }}>{r.t}</span>
        </div>
      ))}

      <div style={{ marginTop: "12px" }}>
        <p style={{
          fontFamily: F.sans, fontSize: "10px", fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.sage, margin: "0 0 8px",
        }}>Dein 4-Wochen-Plan</p>

        {!isMobile && (
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
            {["KW 12", "KW 13", "KW 14", "KW 15"].map((w, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center", padding: "4px 0" }}>
                <span style={{ fontFamily: F.sans, fontSize: "9px", fontWeight: 600, color: i < 2 ? C.muted : `${C.muted}60` }}>{w}</span>
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <>
            {[
              { emoji: "🔴", label: "Anweiden", cells: [
                { text: "Weide prüfen, Fruktan-Tabelle anlegen", active: true },
                { text: "15 Min/Tag starten, Hufe kontrollieren", active: true },
                { text: "Auf 30 Min steigern...", active: false },
                { text: "Freies Grasen bei...", active: false },
              ]},
              { emoji: "🟡", label: "Fellwechsel", cells: [
                { text: "Foto-Doku starten, Bürsten-Routine", active: true },
                { text: "Vergleich Woche 1, Zink prüfen", active: true },
                { text: "Falls kein Fortschritt...", active: false },
                { text: "Tierarzt-Check wenn...", active: false },
              ]},
            ].map((row, ri) => (
              <div key={ri} style={{ background: C.cream, borderRadius: "6px", padding: "10px 12px", marginBottom: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px" }}>{row.emoji}</span>
                  <span style={{ fontFamily: F.sans, fontSize: "11px", fontWeight: 500, color: C.text }}>{row.label}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {row.cells.map((cell, i) => (
                    <div key={i} style={{
                      flex: 1, borderRadius: "4px", padding: "6px 5px",
                      background: cell.active ? C.warm : C.creamDark,
                      border: `1px solid ${cell.active ? C.border : "transparent"}`,
                      filter: cell.active ? "none" : "blur(2.5px)",
                      opacity: cell.active ? 1 : 0.45,
                    }}>
                      <span style={{ fontFamily: F.sans, fontSize: "9px", color: cell.active ? C.text : C.muted, lineHeight: 1.35, display: "block" }}>{cell.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ position: "relative" }}>
              <div style={{ background: C.cream, borderRadius: "6px", padding: "10px 12px", filter: "blur(3px)", opacity: 0.35, userSelect: "none", pointerEvents: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px" }}>🟢</span>
                  <span style={{ fontFamily: F.sans, fontSize: "11px", fontWeight: 500, color: C.text }}>Parasiten & Fütterung</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["Kotprobe einschicken", "Ergebnis auswerten", "Mineralfutter anpassen", "Weide-Mineralien"].map((t, i) => (
                    <div key={i} style={{ flex: 1, borderRadius: "4px", padding: "6px 5px", background: C.creamDark }}>
                      <span style={{ fontFamily: F.sans, fontSize: "9px", color: C.muted, lineHeight: 1.35, display: "block" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(transparent 20%, ${C.warm})`, borderRadius: "6px" }} />
            </div>
          </>
        )}

        {isMobile && (
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[
              { emoji: "🔴", label: "Anweiden", cells: [
                { w: "KW 12", text: "Weide prüfen, Fruktan-Tabelle", active: true },
                { w: "KW 13", text: "15 Min/Tag, Hufe kontrollieren", active: true },
                { w: "KW 14", text: "Auf 30 Min steigern...", active: false },
                { w: "KW 15", text: "Freies Grasen bei...", active: false },
              ]},
              { emoji: "🟡", label: "Fellwechsel", cells: [
                { w: "KW 12", text: "Foto-Doku, Bürsten-Routine", active: true },
                { w: "KW 13", text: "Vergleich Woche 1, Zink", active: true },
                { w: "KW 14", text: "Falls kein Fortschritt...", active: false },
                { w: "KW 15", text: "Tierarzt-Check wenn...", active: false },
              ]},
            ].map((row, ri) => (
              <div key={ri} style={{ background: C.cream, borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px" }}>{row.emoji}</span>
                  <span style={{ fontFamily: F.sans, fontSize: "11px", fontWeight: 600, color: C.text }}>{row.label}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                  {row.cells.map((cell, i) => (
                    <div key={i} style={{
                      borderRadius: "4px", padding: "5px 7px",
                      background: cell.active ? C.warm : C.creamDark,
                      border: `1px solid ${cell.active ? C.border : "transparent"}`,
                      filter: cell.active ? "none" : "blur(2px)",
                      opacity: cell.active ? 1 : 0.4,
                    }}>
                      <span style={{ fontFamily: F.sans, fontSize: "8px", fontWeight: 600, color: C.sage, display: "block", marginBottom: "1px" }}>{cell.w}</span>
                      <span style={{ fontFamily: F.sans, fontSize: "10px", color: C.text, lineHeight: 1.3, display: "block" }}>{cell.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ position: "relative" }}>
              <div style={{ background: C.cream, borderRadius: "6px", padding: "10px 12px", filter: "blur(3px)", opacity: 0.3, userSelect: "none", pointerEvents: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px" }}>🟢</span>
                  <span style={{ fontFamily: F.sans, fontSize: "11px", fontWeight: 600, color: C.text }}>Parasiten & Fütterung</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                  {["Kotprobe einschicken", "Ergebnis abwarten", "Mineralfutter prüfen", "Weide-Mineralien"].map((t, i) => (
                    <div key={i} style={{ borderRadius: "4px", padding: "5px 7px", background: C.creamDark }}>
                      <span style={{ fontFamily: F.sans, fontSize: "10px", color: C.muted }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(transparent 10%, ${C.warm})`, borderRadius: "6px" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAINPOINTS
// ═══════════════════════════════════════════════════════════════
function Painpoints() {
  const f = useFade();
  const f2 = useFade();
  const isMobile = useMedia("(max-width: 768px)");
  const items = [
    { q: "Ist das noch normaler Fellwechsel — oder stimmt was nicht?", d: "April, und dein Pferd sieht aus wie ein explodiertes Sofa. Alle Warmblüter glänzen schon. Cushing — oder einfach normal?", tag: "Fellwechsel" },
    { q: "Darf mein Pferd jetzt auf die Weide — oder riskiere ich Hufrehe?", d: "Frostnacht, Sonnentag, kurzes Gras. Drei Faktoren, drei Meinungen im Stall. Was zählt bei deinem Pferd?", tag: "Fruktan & Anweiden" },
    { q: "Kotprobe oder Wurmkur — was ist jetzt dran?", d: "Die Stallbesitzerin sagt 4x im Jahr. Dein Tierarzt sagt selektiv. Im Internet: Resistenzen. Wem glaubst du?", tag: "Parasiten" },
    { q: "Braucht mein Pferd jetzt Kräuter, Mineralfutter — oder gar nichts?", d: "Heu 6 Monate alt. Frühjahrskur 80€. Die Nachbarin schwört auf Mariendistel. Aber was braucht dein Pferd wirklich?", tag: "Fütterung" },
    { q: "Was mache ich WANN — und was kann warten?", d: "Anweiden, Kotprobe, Schmied, Fellwechsel beobachten, Mineralfutter — alles gleichzeitig? Oder gibt's eine Reihenfolge?", tag: "Timing" },
  ];

  return (
    <section style={{ background: C.paper, padding: isMobile ? "48px 20px" : "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div ref={f.ref} style={f.style}>
          <h2 style={{ fontFamily: F.serif, fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 400, color: C.text, textAlign: "center", margin: "0 0 8px" }}>
            Kommt dir das bekannt vor?
          </h2>
          <p style={{ fontFamily: F.sans, fontSize: "15px", color: C.muted, textAlign: "center", margin: "0 0 44px", lineHeight: 1.6 }}>
            Der Frühling stellt fünf Fragen gleichzeitig. Und im Stall bekommst du auf jede vier verschiedene Antworten.
          </p>
        </div>
        <div ref={f2.ref} style={f2.style}>
          {items.map((p, i) => (
            <div key={i} style={{ background: C.warm, borderRadius: "8px", padding: "24px 24px 20px", marginBottom: "14px", borderLeft: `3px solid ${C.sage}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "6px" }}>
                <h3 style={{ fontFamily: F.serif, fontSize: "18px", fontWeight: 500, color: C.text, margin: 0, lineHeight: 1.3, flex: 1 }}>{p.q}</h3>
                <span style={{ fontFamily: F.sans, fontSize: "10px", fontWeight: 600, color: C.sage, background: C.sageBg, padding: "3px 10px", borderRadius: "100px", whiteSpace: "nowrap" }}>{p.tag}</span>
              </div>
              <p style={{ fontFamily: F.sans, fontSize: "13.5px", color: C.muted, margin: 0, lineHeight: 1.55 }}>{p.d}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: F.serif, fontSize: "20px", fontStyle: "italic", color: C.text, textAlign: "center", marginTop: "40px", lineHeight: 1.4 }}>
          Fünf Themen. Fünf verschiedene Sorgen.
        </p>
        <p style={{ fontFamily: F.sans, fontSize: "14px", color: C.muted, textAlign: "center", marginTop: "4px" }}>
          Der Frühlingscheck sortiert, was bei <em>deinem</em> Pferd jetzt zählt.
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// GASLIGHTING
// ═══════════════════════════════════════════════════════════════
function Gaslighting() {
  const f = useFade();
  const isMobile = useMedia("(max-width: 768px)");
  const quotes = [
    { t: "Hat der Cushing?", who: "Stallgassen-Diagnose", sub: "Jedes Pferd, das im April noch haart." },
    { t: "Bei meinem war das nie so.", who: "Die Vergleicherin", sub: "Ihr Warmblut vs. dein Isländer." },
    { t: "Da musst du sofort den TA rufen!", who: "Die Panik-Macherin", sub: "Bei jedem Haarbüschel." },
    { t: "Das ist doch nur Fellwechsel.", who: "Die Abwinklerin", sub: "Findet, du stellst dich an." },
  ];

  return (
    <section style={{ background: C.creamDark, padding: isMobile ? "48px 20px" : "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div ref={f.ref} style={f.style}>
          <h2 style={{ fontFamily: F.serif, fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 400, color: C.text, textAlign: "center", margin: "0 0 8px" }}>
            Vier Stimmen in der Stallgasse.{" "}
            <span style={{ color: C.sage }}>Keine davon kennt dein Pferd.</span>
          </h2>
          <p style={{ fontFamily: F.sans, fontSize: "14px", color: C.muted, textAlign: "center", margin: "0 0 40px", lineHeight: 1.6 }}>
            Alle meinen es gut. Aber was für ihr Pferd stimmt, kann für deins falsch sein.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {quotes.map((q, i) => (
              <div key={i} style={{
                background: C.warm, borderRadius: "8px", padding: "20px",
                borderTop: `3px solid ${C.gold}40`,
              }}>
                <p style={{ fontFamily: F.serif, fontSize: "18px", fontStyle: "italic", color: C.text, margin: "0 0 8px", lineHeight: 1.35 }}>
                  „{q.t}"
                </p>
                <p style={{ fontFamily: F.sans, fontSize: "11px", fontWeight: 600, color: C.gold, margin: "0 0 2px" }}>{q.who}</p>
                <p style={{ fontFamily: F.sans, fontSize: "12px", color: C.light, margin: 0 }}>{q.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SOLUTION
// ═══════════════════════════════════════════════════════════════
function Solution() {
  const f = useFade();
  const f2 = useFade();
  const isMobile = useMedia("(max-width: 768px)");
  const steps = [
    { n: "01", t: "8 kurze Fragen", d: "Rasse, Haltung, aktuelle Beobachtungen — keine Fachbegriffe nötig." },
    { n: "02", t: "Persönliche Ampel-Auswertung", d: "Rot, Gelb, Grün — du siehst sofort, was dringend ist und was warten kann." },
    { n: "03", t: "Dein 4-Wochen-Fahrplan", d: "Woche für Woche: Was tun, worauf achten, wann zum Tierarzt — sortiert nach deinem Pferd." },
  ];

  return (
    <section style={{ background: C.warm, padding: isMobile ? "48px 20px" : "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div ref={f.ref} style={f.style}>
          <h2 style={{ fontFamily: F.serif, fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 400, color: C.text, textAlign: "center", margin: "0 0 8px" }}>
            In 2 Minuten weißt du,{" "}
            <span style={{ color: C.sage }}>was bei deinem Pferd jetzt zählt.</span>
          </h2>
          <p style={{ fontFamily: F.sans, fontSize: "14px", color: C.muted, textAlign: "center", margin: "0 0 44px", lineHeight: 1.6 }}>
            Kein allgemeiner Ratgeber. Sondern eine Auswertung, die zu deinem Pferd passt.
          </p>
        </div>
        <div ref={f2.ref} style={f2.style}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: "20px", alignItems: "flex-start",
              marginBottom: i < 2 ? "32px" : 0,
              paddingBottom: i < 2 ? "32px" : 0,
              borderBottom: i < 2 ? `1px solid ${C.border}` : "none",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: `${C.sage}15`, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontFamily: F.sans, fontSize: "14px", fontWeight: 600, color: C.sage }}>{s.n}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: F.serif, fontSize: "19px", fontWeight: 500, color: C.text, margin: "0 0 6px" }}>{s.t}</h3>
                <p style={{ fontFamily: F.sans, fontSize: "14px", color: C.muted, margin: 0, lineHeight: 1.55 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// DIANA
// ═══════════════════════════════════════════════════════════════
function Diana() {
  const f = useFade();
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <section style={{ background: C.loam, padding: isMobile ? "48px 20px" : "72px 24px", position: "relative" }}>
      <GrainOverlay />
      <div ref={f.ref} style={{ ...f.style, maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: C.loamLight, border: `2px solid ${C.sage}40`, margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>👩‍🌾</div>
        <p style={{ fontFamily: F.sans, fontSize: "12px", fontWeight: 500, color: C.sage, textAlign: "center", marginBottom: "24px" }}>Diana · Pferdesicht</p>
        <blockquote style={{ fontFamily: F.serif, fontSize: "clamp(16px, 2.2vw, 19px)", color: C.cream, lineHeight: 1.6, textAlign: "center", margin: "0 0 24px" }}>
          „Mein Wallach Ramses hat drei Fellwechsel gebraucht, bis ich verstanden hab,
          worauf es ankommt. 1.500€ Tierarzt. Nicht weil ich dumm war — sondern weil mir
          niemand gesagt hat, worauf ich achten soll."
        </blockquote>
        <p style={{ fontFamily: F.sans, fontSize: "14px", color: "#b8b3ab", textAlign: "center", lineHeight: 1.6, margin: "0 0 28px" }}>
          Diesen Check habe ich gebaut, damit du das schneller weißt als ich.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "36px", flexWrap: "wrap" }}>
          {[
            { n: 30, s: "+", l: "Jahre Erfahrung" },
            { n: 20, s: "+", l: "Jahre Offenstall" },
            { n: 16, s: "", l: "Jahre Therapeutin" },
          ].map((x, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: F.serif, fontSize: "26px", color: C.gold }}><AnimCount end={x.n} suffix={x.s} /></div>
              <div style={{ fontFamily: F.sans, fontSize: "11px", color: "#8a857e", marginTop: "2px" }}>{x.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FINAL CTA
// ═══════════════════════════════════════════════════════════════
function FinalCTA() {
  const f = useFade();
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <section style={{ background: C.cream, padding: isMobile ? "48px 20px 64px" : "80px 24px 100px" }}>
      <div ref={f.ref} style={{ ...f.style, maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: F.serif, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 400, color: C.text, margin: "0 0 14px", lineHeight: 1.3 }}>
          Du fragst nicht zu viel.{" "}
          <span style={{ color: C.sage }}>Du schaust genau richtig hin.</span>
        </h2>
        <p style={{ fontFamily: F.sans, fontSize: "15px", color: C.muted, lineHeight: 1.65, margin: "0 0 36px" }}>
          8 Fragen. 2 Minuten. Dein persönlicher Frühlings-Fahrplan —
          nicht was die Stallgasse sagt. Sondern was stimmt.
        </p>
        <CTA triggers={["Kostenlos", "Keine E-Mail vorher nötig", "Sofort Ergebnis"]}>
          Jetzt kostenlos starten →
        </CTA>
        <p style={{ fontFamily: F.sans, fontSize: "11px", color: C.light, marginTop: "20px" }}>🔒 Deine Antworten bleiben anonym</p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// STICKY CTA (Mobile)
// ═══════════════════════════════════════════════════════════════
function Sticky() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const h = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShow(pct > 0.2 && pct < 0.92);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
      background: C.warm, borderTop: `1px solid ${C.creamDark}`,
      padding: `10px 16px calc(10px + env(safe-area-inset-bottom, 0px))`,
      transform: show ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.35s ease",
      boxShadow: "0 -3px 16px rgba(0,0,0,0.05)",
    }}>
      <button onClick={() => router.push("/fruehlingscheck/start")} style={{
        width: "100%", background: C.gold, color: C.loam, border: "none",
        borderRadius: "6px", padding: "13px", fontSize: "14px",
        fontFamily: F.sans, fontWeight: 600, cursor: "pointer",
      }}>Frühlingscheck starten →</button>
      <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginTop: "5px" }}>
        {["Kostenlos", "2 Min", "Sofort"].map((t, i) => (
          <span key={i} style={{ fontFamily: F.sans, fontSize: "10px", color: C.light }}>✓ {t}</span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════
export default function SqueezePage() {
  return (
    <div style={{ minHeight: "100vh", background: C.cream }}>
      <Hero />
      <Painpoints />
      <Gaslighting />
      <Solution />
      <Diana />
      <FinalCTA />
      <Sticky />
    </div>
  );
}
