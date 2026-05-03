import { useEffect, useState } from "react";

export default function Plakat() {
  const [zoom, setZoom] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  const handleShare = async () => {
    const title = "Dorffest VS-Pfaffenweiler 2026";
    const text =
      "🎉 Dorffest VS-Pfaffenweiler – 20. & 21. Juni 2026!\n" +
      "Zwei Tage Live-Musik, leckeres Essen aus allen Vereinen, Kinderprogramm und gute Laune.\n" +
      "Alle Infos hier:";
    const url = "https://dorffest-vs-pfaffenweiler.de";

    try {
      // Versuche Plakat als Datei mitzuschicken
      const response = await fetch("/plakat.jpeg");
      const blob = await response.blob();
      const file = new File([blob], "Dorffest-Pfaffenweiler-2026.jpeg", { type: blob.type });

      const dataWithFile = { title, text, url, files: [file] };
      if (navigator.canShare && navigator.canShare(dataWithFile)) {
        await navigator.share(dataWithFile);
        return;
      }
    } catch {
      // Fall-through: Bild konnte nicht geladen oder geteilt werden
    }

    try {
      await navigator.share({ title, text, url });
    } catch {
      // Vom Nutzer abgebrochen – ignorieren
    }
  };

  return (
    <section id="plakat" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Plakat */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Tape decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-accent/40 rotate-[-2deg] rounded-sm shadow-md z-10" />

              <button
                onClick={() => setZoom(true)}
                className="block w-full transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 cursor-zoom-in"
                aria-label="Plakat vergrößert anzeigen"
              >
                <div className="relative bg-white p-3 sm:p-4 rounded-lg shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/plakat.jpeg"
                    alt="Dorffest VS-Pfaffenweiler 2026 Plakat"
                    className="w-full h-auto rounded-md"
                    loading="lazy"
                  />
                  <div className="absolute inset-3 sm:inset-4 rounded-md ring-1 ring-black/5 pointer-events-none" />
                </div>
              </button>

              {/* Bottom shadow */}
              <div className="absolute -bottom-4 left-6 right-6 h-6 bg-black/20 blur-xl rounded-full -z-10" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent-dark text-xs font-bold tracking-widest uppercase mb-5">
              Save the Date
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-5 leading-tight">
              Das Plakat zum Fest
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hängt es auf, teilt es weiter — und seid am{" "}
              <span className="font-bold text-primary">20. & 21. Juni 2026</span>{" "}
              dabei, wenn ganz Pfaffenweiler zusammenkommt.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                <span className="text-gray-700">Zwei Tage Live-Musik & Auftritte</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                <span className="text-gray-700">Kulinarisches aus allen Pfaffenweiler Vereinen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                <span className="text-gray-700">Kinderprogramm, Spiele & Flohmarkt</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="/plakat.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Plakat herunterladen
              </a>
              {canShare ? (
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-semibold rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Teilen
                </button>
              ) : (
                <a
                  href="#programm"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-semibold rounded-xl transition-all hover:scale-105"
                >
                  Zum Programm
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {zoom && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setZoom(false)}
        >
          <button
            onClick={() => setZoom(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-colors"
            aria-label="Schließen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src="/plakat.jpeg"
            alt="Dorffest VS-Pfaffenweiler 2026 Plakat"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
