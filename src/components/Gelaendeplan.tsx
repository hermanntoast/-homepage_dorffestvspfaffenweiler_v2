import { useState } from "react";
import { gelaendeBereiche, type GelaendeBereich } from "../data/mockData";

const SVG_W = 440;
const SVG_H = 540;

function rotate(b: GelaendeBereich): GelaendeBereich {
  return {
    ...b,
    x: SVG_W - b.x - b.width,
    y: SVG_H - b.y - b.height,
    rotation: b.rotation ? -b.rotation : undefined,
  };
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (current && (current + " " + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function Gelaendeplan() {
  const [active, setActive] = useState<GelaendeBereich | null>(null);
  const bereiche = gelaendeBereiche.filter((b) => b.id !== "huepfburg" && b.id !== "eingang").map(rotate);
  const sitz = rotate(gelaendeBereiche.find((b) => b.id === "sitzflaeche")!);

  return (
    <section id="gelaende" className="py-20 sm:py-28 bg-white/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
            Geländeplan
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Tippe auf einen Bereich, um mehr zu erfahren
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full h-auto"
              style={{ touchAction: "pan-x pan-y" }}
            >
              {/* Background */}
              <rect x="0" y="0" width={SVG_W} height={SVG_H} rx="12" fill="url(#grass)" />
              <defs>
                <pattern id="grass" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#e8f0e0" />
                  <circle cx="5" cy="8" r="1" fill="#d0e0c0" opacity="0.5" />
                  <circle cx="15" cy="4" r="0.7" fill="#d0e0c0" opacity="0.4" />
                  <circle cx="10" cy="16" r="0.8" fill="#d0e0c0" opacity="0.3" />
                </pattern>
              </defs>

              {/* Biergarnituren */}
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 3 }).map((_, col) => (
                  <g key={`bench-${row}-${col}`}>
                    <rect x={sitz.x + 10 + col * 44} y={sitz.y + 12 + row * 26} width={34} height={3} rx="1" fill="#92400e" opacity="0.35" />
                    <rect x={sitz.x + 10 + col * 44} y={sitz.y + 17 + row * 26} width={34} height={2} rx="0.5" fill="#78350f" opacity="0.2" />
                    <rect x={sitz.x + 10 + col * 44} y={sitz.y + 21 + row * 26} width={34} height={3} rx="1" fill="#92400e" opacity="0.35" />
                  </g>
                ))
              )}

              {/* Bereiche */}
              {bereiche.map((b) => {
                const cx = b.x + b.width / 2;
                const cy = b.y + b.height / 2;
                const label = b.verein || b.name;
                const isVertical = b.height > b.width * 1.5;
                // For vertical stands, use height as text space
                const textSpace = isVertical ? b.height : b.width;
                const maxChars = Math.max(Math.floor(textSpace / 5.5), 6);
                const nameLines = wrapText(label, maxChars);
                const descLines = b.beschreibung ? wrapText(b.beschreibung, maxChars + 4) : [];
                const allLines = [...nameLines, ...descLines];
                const lineH = 10;
                const totalH = allLines.length * lineH;
                const startY = cy - totalH / 2 + 7;

                return (
                <g
                  key={b.id}
                  onClick={() => setActive(active?.id === b.id ? null : b)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={label}
                  transform={b.rotation ? `rotate(${b.rotation}, ${cx}, ${cy})` : undefined}
                >
                  <rect
                    x={b.x} y={b.y} width={b.width} height={b.height}
                    rx="6"
                    fill={b.farbe}
                    opacity={active?.id === b.id ? 0.95 : 0.8}
                    stroke={active?.id === b.id ? "#000" : "rgba(255,255,255,0.3)"}
                    strokeWidth={active?.id === b.id ? 2 : 1}
                    className="transition-all duration-200"
                  />
                  <g className="pointer-events-none select-none">
                    {nameLines.map((line, i) => (
                      <text
                        key={`n${i}`}
                        x={cx}
                        y={startY + i * lineH}
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontWeight="700"
                        stroke={b.farbe}
                        strokeWidth="3"
                        paintOrder="stroke"
                      >
                        {line}
                      </text>
                    ))}
                    {descLines.map((line, i) => (
                      <text
                        key={`d${i}`}
                        x={cx}
                        y={startY + (nameLines.length + i) * lineH}
                        textAnchor="middle"
                        fill="white"
                        fontSize="7"
                        opacity="0.85"
                        stroke={b.farbe}
                        strokeWidth="2.5"
                        paintOrder="stroke"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                </g>
                );
              })}

              {/* Hüpfburg Hinweis zwischen KjG und KiGA */}
              <g className="select-none">
                <text x={SVG_W - 60} y={425} textAnchor="middle" fill="#ec4899" fontSize="9" fontWeight="700">
                  Hüpfburg
                </text>
                <path d={`M${SVG_W - 32} 422 L${SVG_W - 15} 422`} stroke="#ec4899" strokeWidth="1.5" markerEnd="url(#arrowPink)" />
                <defs>
                  <marker id="arrowPink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ec4899" />
                  </marker>
                </defs>
              </g>

              {/* Eingang Label */}
              <text x={175} y={SVG_H - 15} textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="700" letterSpacing="1" className="select-none">
                ↓ EINGANG
              </text>
            </svg>
          </div>

          {/* Detail panel */}
          {active && (
            <div className="border-t border-gray-100 p-4 sm:p-5 bg-gray-50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ backgroundColor: active.farbe }} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{active.verein || active.name}</h3>
                  {active.beschreibung && (
                    <p className="text-gray-600 text-sm">{active.beschreibung}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
