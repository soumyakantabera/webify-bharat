import type { ReactNode } from "react";

/** Shared colours and frames for UI mocks (content-plan §17.3 #10). Generic UI, no third-party branding. */
export const C = {
  ink: "#1B1030",
  ink2: "#4A4458",
  muted: "#6F6A7A",
  line: "#E7E2DA",
  surface: "#FBFAF7",
  surface2: "#F4F1EA",
  rani: "#E6007E",
  haldi: "#FFB400",
  peacock: "#00A6A6",
  indigo: "#2B1E6B",
  marigold: "#FF6B00",
  mehendi: "#4F8A10",
  wa: "#25D366",
  raniT: "#FDE6F2",
  haldiT: "#FFF4D6",
  peacockT: "#DDF5F5",
  indigoT: "#ECE9F6",
  marigoldT: "#FFEBDD",
  mehendiT: "#E9F2DE",
};

/** A grey text placeholder line. */
export function Bar({ x, y, w, h = 6, fill = C.line }: { x: number; y: number; w: number; h?: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />;
}

export function Label({ x, y, children, size = 10, weight = 700, fill = C.ink, anchor = "start" }: { x: number; y: number; children: ReactNode; size?: number; weight?: number; fill?: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
      {children}
    </text>
  );
}

type FrameProps = { children: ReactNode; label: string; className?: string };

/** Phone frame: content area is 180 × 380 at (10, 10). */
export function PhoneFrame({ children, label, className }: FrameProps) {
  return (
    <svg viewBox="0 0 200 400" className={`wb-svg mock-phone${className ? ` ${className}` : ""}`} role="img" aria-label={label}>
      <rect x="0" y="0" width="200" height="400" rx="30" fill={C.ink} />
      <rect x="10" y="10" width="180" height="380" rx="22" fill="#fff" />
      <rect x="78" y="16" width="44" height="8" rx="4" fill={C.ink} />
      <g transform="translate(10 10)">{children}</g>
    </svg>
  );
}

/** Laptop frame: content area is 440 × 270 at (20, 16). */
export function LaptopFrame({ children, label, className }: FrameProps) {
  return (
    <svg viewBox="0 0 480 320" className={`wb-svg mock-laptop${className ? ` ${className}` : ""}`} role="img" aria-label={label}>
      <rect x="10" y="4" width="460" height="294" rx="14" fill={C.ink} />
      <rect x="20" y="16" width="440" height="270" rx="6" fill="#fff" />
      <path d="M0 300h480l-14 16H14Z" fill="#CFC8BC" />
      <rect x="205" y="300" width="70" height="5" rx="2.5" fill="#B8B0A3" />
      <g transform="translate(20 16)">{children}</g>
    </svg>
  );
}

/** Browser chrome bar for laptop mocks. */
export function BrowserBar({ title }: { title: string }) {
  return (
    <g>
      <rect width="440" height="24" fill={C.surface2} />
      <circle cx="12" cy="12" r="3.5" fill="#FF8A80" />
      <circle cx="24" cy="12" r="3.5" fill="#FFD180" />
      <circle cx="36" cy="12" r="3.5" fill="#B9F6CA" />
      <rect x="60" y="6" width="220" height="12" rx="6" fill="#fff" />
      <Label x={70} y={15} size={8} weight={600} fill={C.muted}>{title}</Label>
    </g>
  );
}

/** "Sample data" chip — mandatory on any mock showing numbers (§13). */
export function SampleChip({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="62" height="16" rx="8" fill={C.haldiT} stroke={C.haldi} />
      <Label x={x + 31} y={y + 11} size={8} anchor="middle">Sample data</Label>
    </g>
  );
}
