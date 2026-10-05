import { useId } from "react";

/**
 * Patterns & dividers (content-plan §6.10 #21, §17.3 #5).
 * Tileable, drawn in currentColor, decorative (aria-hidden). Set colour and
 * opacity from CSS — sections use them at 4–6% opacity for quiet texture.
 */

type FillProps = { className?: string; style?: React.CSSProperties; size?: number };

function Fill({ className, style, size, tile, children }: FillProps & { tile: number; children: React.ReactNode }) {
  const id = useId().replace(/:/g, "");
  const s = size ?? tile;
  return (
    <svg className={`pattern-fill${className ? ` ${className}` : ""}`} style={style} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={`p${id}`} width={s} height={s} patternUnits="userSpaceOnUse" viewBox={`0 0 ${tile} ${tile}`}>
          {children}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#p${id})`} />
    </svg>
  );
}

/** Rangoli dot-grid: dots with a tiny four-petal flower every other cell. */
export function RangoliDotGrid(props: FillProps) {
  return (
    <Fill tile={32} {...props}>
      <g fill="currentColor">
        <circle cx="4" cy="4" r="1.6" />
        <circle cx="20" cy="20" r="1.6" />
        <path d="M20 4.5c1.4 1.6 1.4 2.4 0 3.5-1.4-1.1-1.4-1.9 0-3.5ZM20 11.5c-1.4-1.6-1.4-2.4 0-3.5 1.4 1.1 1.4 1.9 0 3.5ZM16.5 8c1.6-1.4 2.4-1.4 3.5 0-1.1 1.4-1.9 1.4-3.5 0ZM23.5 8c-1.6 1.4-2.4 1.4-3.5 0 1.1-1.4 1.9-1.4 3.5 0Z" opacity="0.8" />
      </g>
    </Fill>
  );
}

/** Jaali lattice: interlocking arches like a carved stone screen. */
export function JaaliLattice(props: FillProps) {
  return (
    <Fill tile={40} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0 20 Q10 0 20 20 T40 20" />
        <path d="M0 20 Q10 40 20 20 T40 20" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="0" cy="0" r="3" />
        <circle cx="40" cy="0" r="3" />
        <circle cx="0" cy="40" r="3" />
        <circle cx="40" cy="40" r="3" />
      </g>
    </Fill>
  );
}

/** Block-print border: a repeating hand-stamped motif along a strip. */
export function BlockPrintBorder({ className, height = 24 }: { className?: string; height?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`block-print${className ? ` ${className}` : ""}`} aria-hidden="true" width="100%" height={height}>
      <defs>
        <pattern id={`bp${id}`} width={height * 1.5} height={height} patternUnits="userSpaceOnUse" viewBox="0 0 36 24">
          <g fill="currentColor">
            <path d="M18 3c3 3 3 6 0 9-3-3-3-6 0-9ZM18 21c-3-3-3-6 0-9 3 3 3 6 0 9Z" />
            <path d="M9 12c3-3 6-3 9 0-3 3-6 3-9 0ZM27 12c-3 3-6 3-9 0 3-3 6-3 9 0Z" opacity="0.6" />
            <circle cx="0" cy="12" r="2" />
            <circle cx="36" cy="12" r="2" />
            <rect y="0" width="36" height="1.5" />
            <rect y="22.5" width="36" height="1.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#bp${id})`} />
    </svg>
  );
}

/** Paisley corner ornament — place in a section corner, rotate for other corners. */
export function PaisleyCorner({ className, size = 120 }: { className?: string; size?: number }) {
  return (
    <svg className={`paisley-corner${className ? ` ${className}` : ""}`} viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M8 8c40 0 70 20 70 52 0 20-16 32-32 32-14 0-24-10-24-22 0-10 8-18 18-18 8 0 14 6 14 13" />
        <path d="M8 8c0 30 8 60 30 84" />
        <circle cx="54" cy="66" r="4" fill="currentColor" />
        <path d="M86 40c10-6 20-4 26 4M84 72c12 2 20 10 22 20M30 100c4 8 12 12 20 12" />
      </g>
    </svg>
  );
}

/** Marigold garland: a swag of flowers between two hooks. */
export function MarigoldGarland({ className, count = 13 }: { className?: string; count?: number }) {
  const pts = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    return { x: 10 + t * 380, y: 10 + Math.sin(Math.PI * t) * 34 };
  });
  return (
    <svg className={`marigold-garland${className ? ` ${className}` : ""}`} viewBox="0 0 400 64" aria-hidden="true">
      <path d="M10 10 Q200 78 390 10" fill="none" stroke="#4F8A10" strokeWidth="2" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="8" fill={i % 3 === 1 ? "#FFB400" : "#FF6B00"} />
          <circle cx={p.x} cy={p.y} r="3.2" fill={i % 3 === 1 ? "#FF6B00" : "#FFB400"} />
        </g>
      ))}
    </svg>
  );
}

/** Wave divider between sections. `color` should match the next section's background. */
export function WaveDivider({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg className={`wave-divider${className ? ` ${className}` : ""}`} viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true" style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <path d="M0 48V22C180 2 360 2 540 18S900 44 1080 30 1320 6 1440 18V48Z" fill="currentColor" />
    </svg>
  );
}

/** Kolam line: a continuous looping line drawn around dots. */
export function KolamLine({ className, loops = 8 }: { className?: string; loops?: number }) {
  const w = loops * 40;
  let d = "M0 20";
  for (let i = 0; i < loops; i++) {
    const x = i * 40;
    d += ` C${x + 10} 0 ${x + 30} 0 ${x + 30} 20 S${x + 50} 40 ${x + 40} 20`;
  }
  return (
    <svg className={`kolam-line${className ? ` ${className}` : ""}`} viewBox={`0 0 ${w} 40`} preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: loops }, (_, i) => (
        <circle key={i} cx={i * 40 + 20} cy="20" r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
}

/** Jaali band divider (§6.10 #21). */
export function JaaliBand({ className }: { className?: string }) {
  return (
    <div className={`jaali-band${className ? ` ${className}` : ""}`} aria-hidden="true">
      <JaaliLattice />
    </div>
  );
}

export const PATTERNS = { RangoliDotGrid, JaaliLattice };
