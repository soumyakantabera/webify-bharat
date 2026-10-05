import Link from "next/link";
import { cities } from "@/lib/cities";

/**
 * IndiaDotMap (content-plan §6.10 #15, §17.3 #9): a simplified outline of India
 * with one clickable dot per city in lib/cities.ts. Dots pulse west → east.
 * The outline is deliberately coarse — a recognisable shape, not a survey map.
 */

const project = (lat: number, lng: number) => ({ x: (lng - 67.5) * 9.3 + 6, y: (37.6 - lat) * 10 + 6 });

// Simplified boundary (lat, lng), clockwise from Kutch.
const OUTLINE: [number, number][] = [
  [23.6, 68.3], [24.3, 68.8], [24.4, 70.8], [25.3, 70.6], [26.6, 70.1], [27.8, 70.6], [28.4, 71.9], [29.5, 73.3],
  [30.4, 73.9], [31.0, 74.5], [32.4, 74.6], [32.9, 74.1], [33.6, 73.9], [34.6, 73.9], [35.5, 74.6], [36.9, 75.3],
  [36.1, 76.9], [35.6, 78.0], [35.3, 79.6], [34.3, 79.2], [33.1, 79.5], [32.4, 78.6], [31.4, 78.8], [30.9, 79.6],
  [30.2, 81.0], [29.5, 80.3], [28.8, 80.6], [28.2, 82.2], [27.4, 83.6], [27.0, 84.6], [26.6, 85.9], [26.4, 87.4],
  [26.4, 88.1], [27.2, 88.0], [28.1, 88.8], [27.1, 88.9], [26.8, 89.8], [26.8, 91.8], [27.6, 92.1], [28.2, 93.4],
  [29.3, 94.9], [29.0, 96.2], [28.2, 97.4], [27.2, 96.9], [26.4, 95.6], [25.2, 94.7], [23.9, 93.6], [22.6, 93.4],
  [21.9, 92.7], [22.9, 92.3], [24.2, 92.2], [24.0, 91.6], [23.2, 91.2], [24.2, 91.4], [25.1, 92.2], [25.2, 90.0],
  [25.9, 89.8], [26.3, 89.1], [26.5, 88.6], [25.6, 88.1], [24.9, 88.4], [24.2, 88.7], [22.9, 88.9], [21.7, 89.0],
  [21.6, 87.6], [20.6, 86.9], [19.6, 85.4], [18.3, 84.0], [17.2, 82.5], [16.3, 81.4], [15.6, 80.3], [14.3, 80.1],
  [13.1, 80.3], [11.7, 79.8], [10.3, 79.8], [9.3, 79.1], [8.1, 77.6], [8.7, 76.8], [10.2, 76.1], [11.8, 75.4],
  [13.4, 74.7], [15.0, 74.0], [16.4, 73.4], [18.2, 72.9], [19.8, 72.7], [21.0, 72.8], [22.3, 72.6], [21.7, 72.1],
  [20.8, 70.9], [21.6, 69.5], [22.4, 69.0], [23.0, 68.6],
];

const OUTLINE_D =
  OUTLINE.map(([lat, lng], i) => {
    const p = project(lat, lng);
    return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
  }).join(" ") + "Z";

export function IndiaDotMap({
  active,
  compact = false,
  className,
  linkDots = true,
}: {
  /** Highlight one city slug. */
  active?: string;
  /** Mini version for menus: smaller dots, no labels. */
  compact?: boolean;
  className?: string;
  linkDots?: boolean;
}) {
  const minLng = Math.min(...cities.map((c) => c.lng));
  const maxLng = Math.max(...cities.map((c) => c.lng));
  const andaman = project(12.3, 92.8);
  const nicobar = project(8.0, 93.6);
  const lakshadweep = project(10.6, 72.6);
  return (
    <svg
      viewBox="0 0 296 330"
      className={`wb-svg india-map${compact ? " is-compact" : ""}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={`Map of India with the ${cities.length} cities we serve, fully remote over WhatsApp`}
    >
      <path d={OUTLINE_D} className="india-land" />
      <ellipse cx={andaman.x} cy={andaman.y} rx="3" ry="14" className="india-land" />
      <ellipse cx={nicobar.x} cy={nicobar.y} rx="2" ry="7" className="india-land" />
      <circle cx={lakshadweep.x} cy={lakshadweep.y} r="2" className="india-land" />
      {cities.map((c) => {
        const p = project(c.lat, c.lng);
        const delay = ((c.lng - minLng) / (maxLng - minLng)) * 2.4;
        const dot = (
          <g className={`india-dot${active === c.slug ? " is-active" : ""}`} style={{ ["--d" as string]: `${delay.toFixed(2)}s` }}>
            <circle cx={p.x} cy={p.y} r={compact ? 7 : 10} className="india-dot-pulse" />
            <circle cx={p.x} cy={p.y} r={compact ? 2.6 : 3.6} className="india-dot-core" />
            {!compact ? (
              <text x={p.x} y={p.y - 9} textAnchor="middle" className="india-dot-label">
                {c.name}
              </text>
            ) : null}
          </g>
        );
        return linkDots ? (
          <Link key={c.slug} href={`/cities/${c.slug}`} aria-label={c.name}>
            <title>{c.name}</title>
            {dot}
          </Link>
        ) : (
          <g key={c.slug}>
            <title>{c.name}</title>
            {dot}
          </g>
        );
      })}
    </svg>
  );
}
