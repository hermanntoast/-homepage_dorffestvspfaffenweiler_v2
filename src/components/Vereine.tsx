import { vereine } from "../data/mockData";

export default function Vereine() {
  return (
    <section id="vereine" className="py-20 sm:py-28 bg-white/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Unsere Vereine
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Diese Vereine machen das Dorffest möglich
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {vereine.map((verein) => (
            <a
              key={verein.id}
              href={verein.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={verein.logo}
                  alt={verein.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">
                {verein.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {verein.beschreibung}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
