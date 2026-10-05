import type { SVGProps } from "react";

/**
 * Custom India icons (content-plan §6.9, §17.3 #4).
 * 24px grid, 2px stroke, round joins, duotone fill at 30%. Uses currentColor.
 * The full set (kirana, scooter, diya, mandi scale…) arrives in Phase 1b.
 */
type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}

export function StampIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M9 3h6l-1 7h-4L9 3Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M5 14h14v3H5z" fill="currentColor" fillOpacity={0.3} />
      <path d="M10 10h4v4h-4zM4 20h16" />
    </Base>
  );
}

export function ChaiCup(props: P) {
  return (
    <Base {...props}>
      <path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M3 21h16M9 3c-1 1.5 1 2.5 0 4M13 3c-1 1.5 1 2.5 0 4" />
    </Base>
  );
}

export function RupeeSlash(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity={0.3} />
      <path d="M9 7h6M9 10h6M9 7c3.5 0 3.5 6 0 6l4 4M5.5 5.5l13 13" />
    </Base>
  );
}

export function TailorTapeIcon(props: P) {
  return (
    <Base {...props}>
      <circle cx="9" cy="10" r="6" fill="currentColor" fillOpacity={0.3} />
      <circle cx="9" cy="10" r="2" />
      <path d="M9 16h12v4H9M13 16v2M16 16v2M19 16v2" />
    </Base>
  );
}

export function UpiArrow(props: P) {
  return (
    <Base {...props}>
      <path d="M7 4 13 12 7 20" fill="currentColor" fillOpacity={0.3} />
      <path d="M12 4l6 8-6 8" />
    </Base>
  );
}
