import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="inline-block mb-8 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
          <span className="text-white text-lg sm:text-2xl font-semibold tracking-wide">
            20. & 21. Juni 2026
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight tracking-tight mb-6">
          Dorffest
          <span className="block text-accent-light">VS-Pfaffenweiler</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Zwei Tage voller Musik, Genuss und Gemeinschaft.
          Feiern Sie mit uns das Dorffest des Jahres!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(1 - scrollY / 200, 0) }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
