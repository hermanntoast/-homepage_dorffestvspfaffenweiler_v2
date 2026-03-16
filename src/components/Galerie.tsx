import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const bilder = [
  { src: "/galerie/DSC_7700.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_7709.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_7785.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_7786.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_9462.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_9472.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/DSC_9584.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/GOPR0686.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/GOPR0689.jpg", alt: "Dorffest Impressionen" },
  { src: "/galerie/GOPR0695.jpg", alt: "Dorffest Impressionen" },
];

export default function Galerie() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="galerie" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Impressionen
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Eindrücke aus den letzten Jahren
          </p>
        </div>

        {/* Grid */}
        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {bilder.map((bild, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="block w-full overflow-hidden rounded-xl hover:opacity-90 transition-opacity break-inside-avoid"
            >
              <img
                src={bild.src}
                alt={bild.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox via Portal - rendered at document.body to avoid transform issues */}
      {selected !== null && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Schließen"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + bilder.length) % bilder.length);
            }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={bilder[selected].src}
            alt={bilder[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % bilder.length);
            }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2"
            aria-label="Nächstes Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selected + 1} / {bilder.length}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
