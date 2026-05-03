import { useState } from "react";
import { programm, ganztaegig } from "../data/mockData";

const typColors = {
  band: "bg-purple-100 text-purple-800",
  auftritt: "bg-blue-100 text-blue-800",
  programm: "bg-green-100 text-green-800",
};

const typLabels = {
  band: "Live-Musik",
  auftritt: "Auftritt",
  programm: "Programm",
};

export default function Programm() {
  const [tag, setTag] = useState<"samstag" | "sonntag">("samstag");
  const filtered = programm.filter((p) => p.tag === tag);
  const filteredGanztaegig = ganztaegig.filter((p) => p.tag === tag);
  const hatProgramm = programm.length > 0;

  return (
    <section id="programm" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Programm
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Zwei Tage volles Programm mit Live-Bands, Auftritten und Unterhaltung
          </p>
        </div>

        {hatProgramm ? (
          <>
            {/* Day toggle */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setTag("samstag")}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    tag === "samstag"
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Samstag, 20. Juni
                </button>
                <button
                  onClick={() => setTag("sonntag")}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    tag === "sonntag"
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Sonntag, 21. Juni
                </button>
              </div>
            </div>

            {/* Ganztägige Programmpunkte */}
            {filteredGanztaegig.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">
                  Den ganzen Tag über
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredGanztaegig.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border border-amber-200/60 rounded-xl px-4 py-3 shadow-sm"
                    >
                      <div className="text-3xl">{p.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <h4 className="font-bold text-gray-900 leading-tight">{p.titel}</h4>
                        </div>
                        <p className="text-xs text-amber-700 font-semibold mt-0.5">
                          {p.von} – {p.bis} Uhr
                        </p>
                        {p.beschreibung && (
                          <p className="text-xs text-gray-600 mt-0.5">{p.beschreibung}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gray-200" />

              <div className="space-y-6">
                {filtered.map((punkt) => {
                  const isFestbeginn = punkt.titel === "Festbeginn";

                  if (isFestbeginn) {
                    return (
                      <div key={punkt.id} className="relative flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg bg-accent">
                            {punkt.zeit}
                          </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-accent/15 to-accent/5 border-2 border-accent/30 rounded-xl p-4 sm:p-5">
                          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
                            {punkt.titel}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {punkt.beschreibung}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                  <div key={punkt.id} className="relative flex gap-4 sm:gap-6">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-md ${
                          punkt.typ === "band"
                            ? "bg-purple-500"
                            : punkt.typ === "auftritt"
                            ? "bg-blue-500"
                            : "bg-primary"
                        }`}
                      >
                        {punkt.zeit}
                      </div>
                    </div>

                    <div className="flex-1 bg-gray-50 rounded-xl p-4 sm:p-5 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start gap-4">
                        {punkt.logo && (
                          <img
                            src={punkt.logo}
                            alt={punkt.titel}
                            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg bg-white border border-gray-200 shadow-sm p-1"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              {punkt.titel}
                            </h3>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                typColors[punkt.typ]
                              }`}
                            >
                              {typLabels[punkt.typ]}
                            </span>
                          </div>
                          {punkt.beschreibung && (
                            <p className="text-gray-600 text-sm mb-1">
                              {punkt.beschreibung}
                            </p>
                          )}
                          <p className="text-gray-400 text-xs font-medium">
                            {punkt.ort}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 rounded-2xl p-8 sm:p-10">
            <div className="text-4xl mb-4">🎶</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Programm wird noch geplant
            </h3>
            <p className="text-gray-600 mb-2 leading-relaxed">
              Das Programm für das Dorffest 2026 wird gerade zusammengestellt.
              Freut euch auf Live-Musik, Auftritten, Kinderprogramm und vieles mehr!
            </p>
            <p className="text-gray-500 text-sm">
              Schaut bald wieder vorbei — es lohnt sich!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
