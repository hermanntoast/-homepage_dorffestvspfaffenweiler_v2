export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Dorffest VS-Pfaffenweiler</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              20. & 21. Juni 2026<br />
              Bolzplatz VS-Pfaffenweiler<br />
              78052 Villingen-Schwenningen
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Links</h3>
            <div className="space-y-2">
              <a href="#programm" className="block text-gray-400 text-sm hover:text-white transition-colors">Programm</a>
              <a href="#gelaende" className="block text-gray-400 text-sm hover:text-white transition-colors">Geländeplan</a>
              <a href="#essen" className="block text-gray-400 text-sm hover:text-white transition-colors">Essen & Trinken</a>
              <a href="#vereine" className="block text-gray-400 text-sm hover:text-white transition-colors">Vereine</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Kontakt</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vereinsgemeinschaft<br />
              Dorffest VS-Pfaffenweiler<br />
              E-Mail: info@dorffest-vs-pfaffenweiler.de
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Vereinsgemeinschaft Dorffest VS-Pfaffenweiler. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="#/impressum" className="text-gray-500 text-sm hover:text-white transition-colors">Impressum</a>
            <a href="#/datenschutz" className="text-gray-500 text-sm hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
