import { sponsoren } from "../data/mockData";

export default function Sponsoren() {
  const hatSponsoren = sponsoren.length > 0;

  return (
    <section id="sponsoren" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Sponsoren
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {hatSponsoren
              ? "Danke an alle, die das Dorffest unterstützen!"
              : "Unterstützen Sie das Dorffest VS-Pfaffenweiler!"}
          </p>
        </div>

        {hatSponsoren && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 mb-12">
            {sponsoren.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                title={sponsor.name}
                className="group relative flex flex-col items-center justify-center aspect-[4/3] p-5 sm:p-6 rounded-2xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.05)] ring-1 ring-gray-100 hover:shadow-[0_20px_50px_rgba(15,23,42,0.18)] hover:ring-primary/20 transition-all duration-300 hover:scale-[1.08] focus-within:scale-[1.08] hover:z-10 overflow-hidden"
              >
                {/* Logo */}
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-20 sm:max-h-24 w-auto object-contain transition-all duration-500 ease-out group-hover:-translate-y-2 group-focus-within:-translate-y-2"
                />

                {/* Name ribbon */}
                <div
                  className="pointer-events-none absolute bottom-0 inset-x-0 px-3 py-2.5 text-center bg-gradient-to-t from-white via-white/95 to-white/0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 ease-out"
                >
                  <span className="block text-xs sm:text-sm font-semibold tracking-wide text-gray-900">
                    {sponsor.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 sm:p-10">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Werden Sie Sponsor!
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Sie möchten das Dorffest VS-Pfaffenweiler unterstützen und Ihr Unternehmen
            in der Region sichtbar machen? Wir freuen uns über jede Unterstützung!
            Alle Infos zu Bannerwerbung, Spenden und Konditionen finden Sie in unserem Anschreiben.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/sponsoring-anschreiben.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Sponsoring-Anschreiben (PDF)
            </a>
            <a
              href="mailto:info@dorffest-vs-pfaffenweiler.de?subject=Sponsoring%20Dorffest%202026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-primary/30 text-primary hover:bg-primary/5 font-semibold rounded-xl transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontakt aufnehmen
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            info@dorffest-vs-pfaffenweiler.de
          </p>
        </div>
      </div>
    </section>
  );
}
