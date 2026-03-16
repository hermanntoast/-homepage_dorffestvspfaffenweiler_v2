import { sponsoren } from "../data/mockData";

export default function Sponsoren() {
  return (
    <section id="sponsoren" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Unsere Sponsoren
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Danke an alle, die das Dorffest unterstützen!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}
