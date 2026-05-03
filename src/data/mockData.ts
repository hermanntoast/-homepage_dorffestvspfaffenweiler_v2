export interface Verein {
  id: number;
  name: string;
  beschreibung: string;
  logo: string;
  website: string;
  essen: string[];
  getraenke: string[];
  angebot?: string[];
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export interface ProgrammPunkt {
  id: number;
  zeit: string;
  titel: string;
  beschreibung: string;
  ort: string;
  tag: "samstag" | "sonntag";
  typ: "auftritt" | "band" | "programm";
  logo?: string;
}

export interface GanztaegigPunkt {
  id: number;
  von: string;
  bis: string;
  titel: string;
  beschreibung?: string;
  ort?: string;
  tag: "samstag" | "sonntag";
  icon: string;
}

export interface GelaendeBereich {
  id: string;
  name: string;
  beschreibung: string;
  verein?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  farbe: string;
  rotation?: number;
}

export const vereine: Verein[] = [
  {
    id: 1,
    name: "KjG Pfaffenweiler",
    beschreibung: "Katholische junge Gemeinde",
    logo: "/logos/vereine/kjg.png",
    website: "https://www.kjg-pfaffenweiler.de",
    essen: ["Pommes", "Grill- & Currywurst", "Burger", "Steak", "Striebele", "Crepes"],
    getraenke: ["Alkoholfreie Getränke", "Bar (Samstag ab 18 Uhr)"],
  },
  {
    id: 2,
    name: "FC Pfaffenweiler",
    beschreibung: "Fußballclub",
    logo: "/logos/vereine/fc.png",
    website: "https://www.fcpfaffenweiler.de/",
    essen: ["Bratwürste mit Brot", "Kartoffelsalat"],
    getraenke: ["Fürstenberg Biere", "Wein / Schorle", "Alkoholfreie Getränke"],
  },
  {
    id: 3,
    name: "Narrenverein Wolfbach-Rolli",
    beschreibung: "Narrenzunft",
    logo: "/logos/vereine/narrenverein.png",
    website: "https://www.wolfbachrolli.org/",
    essen: ["Süßigkeiten", "Knabberzeug"],
    getraenke: ["Wein-Slushi", "Slushi", "Alkoholfreie Getränke"],
  },
  {
    id: 4,
    name: "Judo Pfaffenweiler",
    beschreibung: "Judosportclub",
    logo: "/logos/vereine/judo.png",
    website: "https://www.jsc-74-pfaffenweiler.de/",
    essen: ["Wurstsalat", "Wurstsalatwecken", "Käsespätzle", "Waffeln"],
    getraenke: ["Aperol", "Lillet", "Hirsch Bier", "Now Saft Schorle"],
  },
  {
    id: 5,
    name: "Musik- & Trachtenkapelle + Kirchenchor",
    beschreibung: "Musik- & Trachtenkapelle",
    logo: "/logos/vereine/mut.png",
    website: "#",
    essen: ["Cevapcici im Wecken", "Gebackener Camembert im Wecken"],
    getraenke: ["Alkoholfreie Getränke", "Flaschenbier", "Weinschorle (Bollegued)"],
  },
  {
    id: 6,
    name: "Tennisclub Pfaffenweiler",
    beschreibung: "Tennisclub",
    logo: "/logos/vereine/tennis.png",
    website: "https://www.tc-1980-pfaffenweiler.de/",
    essen: ["Heiße Sandwiches", "Antipastiteller"],
    getraenke: ["Wein", "Veneziano", "Sommerschorle"],
  },
  {
    id: 7,
    name: "Landfrauen Pfaffenweiler",
    beschreibung: "Landfrauen",
    logo: "/logos/vereine/landfrauen.png",
    website: "https://wolfbachbienen.jimdofree.com/aktuelles/",
    essen: ["Kuchen", "Salatbowl", "Beilagensalat", "Flammkuchen (3 Sorten)"],
    getraenke: ["Kaffee"],
  },
  {
    id: 8,
    name: "Schule / Kita",
    beschreibung: "Grundschule & Kindertagesstätte",
    logo: "/logos/vereine/kita.png",
    website: "https://www.villingen-schwenningen.de/bildung-soziales/kindertagesbetreuung/kitafinder/einrichtung/staedtische-kindertagesstaette-pfaffenweiler/",
    essen: ["Candy Bar", "Eis", "Popcorn"],
    getraenke: ["Kindercocktails", "Alkoholfreier Aperol"],
  },
];

export const sponsoren: Sponsor[] = [
  { id: 1, name: "BaarFoot", logo: "/logos/sponsoren/Logo_BaarFoot.png", website: "#" },
  { id: 2, name: "Luxcode", logo: "/logos/sponsoren/Logo_luxcode.png", website: "https://luxcode.io" },
  { id: 3, name: "Heyn", logo: "/logos/sponsoren/Logo_Heyn.png", website: "#" },
  // { id: 4, name: "Kettner", logo: "/logos/sponsoren/Logo_Kettner.png", website: "#" },
  // { id: 3, name: "Volksbank", logo: "/logos/sponsoren/Logo_VoBa.png", website: "#" },
  // { id: 4, name: "Merz", logo: "/logos/sponsoren/Logo_Merz.png", website: "#" },
  // { id: 5, name: "Neininger", logo: "/logos/sponsoren/Logo_Neininger.png", website: "#" },
  // { id: 6, name: "Fliesenleger", logo: "/logos/sponsoren/Logo_Fliesenleger.jpg", website: "#" },
  // { id: 7, name: "JF", logo: "/logos/sponsoren/JF_Logo_Neutral.jpg", website: "#" },
  // { id: 8, name: "RG", logo: "/logos/sponsoren/Logo_rg.png", website: "#" },
  // { id: 9, name: "Huonker", logo: "/logos/sponsoren/Logo_Huonker.jpg", website: "#" },
  // { id: 10, name: "Herrmann", logo: "/logos/sponsoren/Logo_Herrmann.jpeg", website: "#" },
  // { id: 11, name: "Schultz", logo: "/logos/sponsoren/Logo_Schultz.png", website: "#" },
  // { id: 12, name: "Hummel", logo: "/logos/sponsoren/Logo_Hummel.png", website: "#" },
  // { id: 13, name: "Andris", logo: "/logos/sponsoren/Logo_Andris.png", website: "#" },
  // { id: 14, name: "Kieninger", logo: "/logos/sponsoren/Logo_Kieninger.jpg", website: "#" },
  // { id: 15, name: "ASPO", logo: "/logos/sponsoren/Logo_ASPO.jpg", website: "#" },
  // { id: 16, name: "Luxcode", logo: "/logos/sponsoren/Logo_luxcode.png", website: "https://luxcode.io" },
];

export const programm: ProgrammPunkt[] = [
  // Samstag
  { id: 1, zeit: "14:00", titel: "Festbeginn", beschreibung: "", ort: "Festgelände", tag: "samstag", typ: "programm" },
  { id: 2, zeit: "14:30", titel: "Fassanstich mit Freibier", beschreibung: "Offizieller Start des Dorffestes", ort: "Bühne", tag: "samstag", typ: "programm" },
  { id: 3, zeit: "15:00", titel: "Fanfarenzug der Glonki Gilde", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "auftritt" },
  { id: 4, zeit: "15:30", titel: "Midi Glonkinchen der Glonki Gilde", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "auftritt" },
  { id: 5, zeit: "15:45", titel: "Auftritt Kindertagesstätte Pfaffenweiler", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "auftritt" },
  { id: 6, zeit: "16:15", titel: "Tanz-AG der Grundschule Pfaffenweiler", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "auftritt" },
  { id: 7, zeit: "16:45", titel: "Auftritt der Grundschule Pfaffenweiler", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "auftritt" },
  { id: 8, zeit: "17:30", titel: "Mini Disco", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "programm" },
  { id: 9, zeit: "20:00", titel: "Klosterbrass", beschreibung: "", ort: "Bühne", tag: "samstag", typ: "band", logo: "/logos/bands/klosterbrass.jpeg" },
  { id: 10, zeit: "21:30", titel: "Disko", beschreibung: "Musikalischer Ausklang über die KjG", ort: "Bühne", tag: "samstag", typ: "programm" },
  // Sonntag
  { id: 11, zeit: "11:00", titel: "Festbeginn", beschreibung: "", ort: "Festgelände", tag: "sonntag", typ: "programm" },
  { id: 12, zeit: "11:30", titel: "Frühschoppen mit den Schwarzwaldschlawinern", beschreibung: "", ort: "Bühne", tag: "sonntag", typ: "band", logo: "/logos/bands/schwarzwaldschlawiner.jpeg" },
  { id: 13, zeit: "14:00", titel: "Villinger Alphörner", beschreibung: "", ort: "Bühne", tag: "sonntag", typ: "auftritt" },
  { id: 14, zeit: "14:30", titel: "Musik- & Trachtenkapelle Pfaffenweiler", beschreibung: "", ort: "Bühne", tag: "sonntag", typ: "auftritt" },
  { id: 15, zeit: "16:15", titel: "Parcours", beschreibung: "", ort: "Bühne", tag: "sonntag", typ: "auftritt" },
  { id: 16, zeit: "17:00", titel: "Line Dance „Wolf Creek Liners“", beschreibung: "Line Dance Gruppe aus Pfaffenweiler", ort: "Bühne", tag: "sonntag", typ: "auftritt" },
];

export const ganztaegig: GanztaegigPunkt[] = [
  // Samstag
  { id: 1, von: "14:00", bis: "16:45", titel: "Spielestationen", beschreibung: "Spaß für die Kleinen", tag: "samstag", icon: "🎲" },
  { id: 2, von: "14:00", bis: "18:00", titel: "Kinderschminken", beschreibung: "Bunte Gesichter für alle Kinder", tag: "samstag", icon: "🎨" },
  // Sonntag
  { id: 3, von: "12:00", bis: "16:00", titel: "Manne und seine Gartenfestspiele", beschreibung: "Unterhaltung auf dem Festgelände", tag: "sonntag", icon: "🎪" },
  { id: 4, von: "14:00", bis: "16:00", titel: "Kinderspielzeugflohmarkt", beschreibung: "Pausenhof Grundschule Pfaffenweiler", tag: "sonntag", icon: "🧸" },
];

// Geländeplan basierend auf dem offiziellen Stellplan
// Gesamtfläche ca. 40m breit x 50m hoch
// Skala: 10px = 1m, ViewBox 440x540 (40m + 4m Rand, 50m + 4m Rand)
// Links: 24m breit, 3m Durchgang, Rechts: 13m breit
export const gelaendeBereiche: GelaendeBereich[] = [
  // Oben links – KJG (25m lang × 10m breit)
  { id: "kjg", name: "KjG", beschreibung: "Katholische junge Gemeinde", verein: "KjG Pfaffenweiler", x: 20, y: 20, width: 200, height: 80, farbe: "#16a34a", rotation: 4 },

  // Oben Mitte – Eingang (3m Durchgang)
  { id: "eingang", name: "Eingang", beschreibung: "Haupteingang", x: 275, y: 30, width: 30, height: 50, farbe: "#64748b" },

  // Oben rechts – Grillhütte NV (8m × 4m)
  { id: "grillhuette", name: "Narrenverein", beschreibung: "Narrenzunft", verein: "Narrenverein Wolfbach-Rolli", x: 320, y: 20, width: 80, height: 40, farbe: "#ea580c" },

  // Links – KiGA/Schule (6m hoch × 3m breit)
  { id: "kiga", name: "Schule/Kita", beschreibung: "Grundschule & Kindertagesstätte", verein: "Schule / Kita", x: 20, y: 140, width: 30, height: 60, farbe: "#a855f7" },

  // Links – FC-Stand (15m hoch × 7m breit)
  { id: "fc", name: "FC", beschreibung: "Fußballclub", verein: "FC Pfaffenweiler", x: 20, y: 220, width: 70, height: 150, farbe: "#2563eb" },

  // Links unten – Hüpfburg (8m × 8m, hinter den Ständen)
  { id: "huepfburg", name: "Hüpfburg", beschreibung: "Hüpfburg 8×8 m für Kinder", x: 20, y: 130, width: 5, height: 80, farbe: "#ec4899" },

  // Mitte – Sitzfläche (14m breit × 20m hoch)
  { id: "sitzflaeche", name: "Sitzfläche", beschreibung: "Biergarnituren", x: 140, y: 180, width: 140, height: 200, farbe: "#d97706" },

  // Rechts – MuT + Kirchenchor (10m hoch × 6m breit)
  { id: "mut", name: "MuT", beschreibung: "Musik- & Trachtenkapelle", verein: "Musik- & Trachtenkapelle + Kirchenchor", x: 340, y: 80, width: 60, height: 100, farbe: "#16a34a" },

  // Rechts – Tennis (7m hoch × 3m breit)
  { id: "tennis", name: "Tennis", beschreibung: "Tennisclub", verein: "Tennisclub Pfaffenweiler", x: 350, y: 200, width: 70, height: 45, farbe: "#0891b2" },

  // Rechts – Landfrauen (18m hoch × 5m breit)
  { id: "landfrauen", name: "Landfrauen", beschreibung: "Landfrauen", verein: "Landfrauen Pfaffenweiler", x: 350, y: 250, width: 70, height: 180, farbe: "#be185d" },

  // Unten links – JUDO (12m hoch × 6m breit)
  { id: "judo", name: "Judo", beschreibung: "Judosportclub", verein: "Judo Pfaffenweiler", x: 20, y: 390, width: 60, height: 120, farbe: "#7c3aed" },

  // Unten Mitte – Bühne (12m breit × 4m hoch)
  { id: "buehne", name: "Bühne", beschreibung: "Bühne", x: 140, y: 470, width: 160, height: 60, farbe: "#dc2626" },
];
