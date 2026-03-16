import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programm from "./components/Programm";
import Gelaendeplan from "./components/Gelaendeplan";
import EssenTrinken from "./components/EssenTrinken";
import Vereine from "./components/Vereine";
import Sponsoren from "./components/Sponsoren";
import Galerie from "./components/Galerie";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

type Page = "home" | "impressum" | "datenschutz";

function getPage(): Page {
  const hash = window.location.hash;
  if (hash === "#/impressum") return "impressum";
  if (hash === "#/datenschutz") return "datenschutz";
  return "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  if (page === "impressum") return <><NavbarSimple /><Impressum /></>;
  if (page === "datenschutz") return <><NavbarSimple /><Datenschutz /></>;

  return (
    <div className="relative">
      {/* Fixed background image as separate element - avoids mobile bg-fixed bugs */}
      <div
        className="fixed inset-0 -z-10 bg-cover"
        style={{ backgroundImage: "url(/gelaende1.jpg)", backgroundPosition: "center 70%" }}
      />
      <Navbar />
      <Hero />

      <div className="relative backdrop-blur-2xl bg-white/80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
        <Programm />
        <Gelaendeplan />
        <EssenTrinken />
        <Galerie />
        <Vereine />
        <Sponsoren />
      </div>

      <Footer />
    </div>
  );
}

function NavbarSimple() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16">
          <a href="#" className="font-extrabold text-lg tracking-tight text-primary">
            ← Dorffest VS-Pfaffenweiler
          </a>
        </div>
      </div>
    </nav>
  );
}
