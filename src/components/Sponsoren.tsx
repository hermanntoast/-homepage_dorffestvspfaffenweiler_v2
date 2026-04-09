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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sponsoren.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)] p-5 sm:p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:shadow-lg hover:border-gray-200 transition-all hover:-translate-y-0.5"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
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
          </p>
          <a
            href="mailto:info@dorffest-vs-pfaffenweiler.de?subject=Sponsoring%20Dorffest%202026"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Jetzt Kontakt aufnehmen
          </a>
          <p className="text-sm text-gray-400 mt-4">
            info@dorffest-vs-pfaffenweiler.de
          </p>
        </div>
      </div>
    </section>
  );
}
