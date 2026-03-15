import { vereine } from "../data/mockData";

export default function EssenTrinken() {
  return (
    <section id="essen" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Essen & Trinken
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Jeder Verein verwöhnt euch mit eigenen Spezialitäten
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {vereine.map((verein) => (
            <div
              key={verein.id}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-gray-100">
                <img src={verein.logo} alt={verein.name} className="w-10 h-10 object-contain" />
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{verein.name}</h3>
                  <p className="text-xs text-gray-500">{verein.beschreibung}</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4 space-y-3">
                <div>
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2">
                    Essen
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {verein.essen.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-orange-50 text-orange-800 rounded-lg text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
                    Getränke
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {verein.getraenke.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
