import { useEffect, useState, useCallback } from "react";

const TITLE = "Dorffest";
const SUBTITLE = "VS-Pfaffenweiler";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [activeTitle, setActiveTitle] = useState<number[]>([]);
  const [activeSub, setActiveSub] = useState<number[]>([]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => setLoaded(true));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pickTwo = (len: number) => {
    const a = Math.floor(Math.random() * len);
    let b = Math.floor(Math.random() * (len - 1));
    if (b >= a) b++;
    return [a, b];
  };

  const pickRandomTitle = useCallback(() => {
    setActiveTitle(pickTwo(TITLE.length));
    setTimeout(() => setActiveTitle([]), 800);
  }, []);

  const pickRandomSub = useCallback(() => {
    setActiveSub(pickTwo(SUBTITLE.length));
    setTimeout(() => setActiveSub([]), 800);
  }, []);

  useEffect(() => {
    const t1 = setInterval(pickRandomTitle, 2000);
    const t2 = setInterval(pickRandomSub, 2500);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, [pickRandomTitle, pickRandomSub]);

  const progress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const opacity = 1 - progress;
  const translateY = -scrollY * 0.4;
  const scale = 1 - progress * 0.15;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content - scrolls up with parallax */}
      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto will-change-transform"
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        {/* Datum */}
        <div
          className={`inline-block mb-8 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-white text-lg sm:text-2xl font-semibold tracking-wide">
            20. & 21. Juni 2026
          </span>
        </div>

        {/* Dorffest */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight tracking-tight mb-6">
          <span
            className={`block text-white transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {TITLE.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-colors duration-500"
                style={{ color: activeTitle.includes(i) ? "#f0c040" : "white" }}
              >
                {char}
              </span>
            ))}
          </span>
          <span
            className={`block whitespace-nowrap text-accent-light transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {SUBTITLE.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-colors duration-500"
                style={{ color: activeSub.includes(i) ? "white" : undefined }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* Beschreibung */}
        <p
          className={`text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          Zwei Tage voller Musik, Genuss und Gemeinschaft.
          Feiern Sie mit uns das Dorffest des Jahres!
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <a
            href="#programm"
            className="px-8 py-4 bg-accent hover:bg-accent-light text-gray-900 font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-accent/25"
          >
            Zum Programm
          </a>
          <a
            href="#gelaende"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl text-lg border border-white/20 transition-all hover:scale-105"
          >
            Geländeplan
          </a>
        </div>

        {/* Mobile/Tablet Klosterbrass Highlight Pill */}
        <a
          href="#programm"
          className={`lg:hidden mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/95 to-accent-light/95 text-gray-900 shadow-xl shadow-accent/30 backdrop-blur-sm border border-white/30 transition-all duration-1000 ease-out hover:scale-105 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1700ms" }}
        >
          <span className="inline-flex items-center gap-1 text-gray-900">
            <span className="eq-bar" />
            <span className="eq-bar" />
            <span className="eq-bar" />
            <span className="eq-bar" />
            <span className="eq-bar" />
          </span>
          <span className="text-sm font-extrabold tracking-wide">
            LIVE: KLOSTERBRASS
          </span>
          <span className="text-xs font-semibold opacity-80">Sa · 20 Uhr</span>
        </a>
      </div>

      {/* Desktop Klosterbrass Floating Sticker */}
      <a
        href="#programm"
        className={`hidden lg:block absolute bottom-16 right-10 xl:right-20 z-20 w-64 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{
          transitionDelay: "1700ms",
          opacity: loaded ? Math.max(1 - scrollY / 400, 0) : 0,
        }}
      >
        <div className="ticket-float relative group">
          {/* Glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-accent/50 via-purple-500/30 to-accent/50 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 group-hover:scale-[1.03] transition-transform duration-500">
            {/* Top stripe */}
            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-red-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500" />
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-white uppercase">
                  Live-Highlight
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-white/60">
                SA 20:00
              </span>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center bg-gradient-to-br from-warm via-white to-warm-dark py-5 px-4">
              <img
                src="/logos/bands/klosterbrass.jpeg"
                alt="Klosterbrass"
                className="max-h-24 w-auto object-contain"
              />
            </div>

            {/* Bottom: equalizer + name */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100">
              <span className="inline-flex items-end gap-1 text-accent">
                <span className="eq-bar" />
                <span className="eq-bar" />
                <span className="eq-bar" />
                <span className="eq-bar" />
                <span className="eq-bar" />
              </span>
              <span className="text-sm font-black text-gray-900 tracking-tight">
                KLOSTERBRASS
              </span>
            </div>
          </div>

          {/* Tape */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-accent/40 -rotate-3 rounded-sm shadow-md" />
        </div>
      </a>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: loaded ? Math.max(1 - scrollY / 200, 0) : 0, transitionDelay: "1800ms" }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
