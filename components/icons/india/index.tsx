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

export function RupeeCoin(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity={0.3} />
      <circle cx="12" cy="12" r="6.5" />
      <path d="M9.5 9h5M9.5 11.2h5M9.5 9c2.6 0 2.6 4.4 0 4.4l3 2.6" />
    </Base>
  );
}

export function KiranaShop(props: P) {
  return (
    <Base {...props}>
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9h18v2a2 2 0 0 1-3 1.7 2 2 0 0 1-3 0 2 2 0 0 1-3 0 2 2 0 0 1-3 0A2 2 0 0 1 3 11V9Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M5 13v7h14v-7M10 20v-4h4v4" />
    </Base>
  );
}

export function Scooter(props: P) {
  return (
    <Base {...props}>
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M8.5 17h7l1-5h-6a3 3 0 0 0-3 3" fill="currentColor" fillOpacity={0.3} />
      <path d="M16.5 12 15 5h3M10 12V9h3" />
    </Base>
  );
}

export function Diya(props: P) {
  return (
    <Base {...props}>
      <path d="M12 3c2 2.5 2 5 0 6.5C10 8 10 5.5 12 3Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M3 13h18c-1 4-4.5 6-9 6s-8-2-9-6Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M8 13c1-1.5 2.5-2.5 4-2.5s3 1 4 2.5M10 21h4" />
    </Base>
  );
}

export function RangoliDot(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 3c2 3 2 4 0 6-2-2-2-3 0-6ZM12 21c-2-3-2-4 0-6 2 2 2 3 0 6ZM3 12c3-2 4-2 6 0-2 2-3 2-6 0ZM21 12c-3 2-4 2-6 0 2-2 3-2 6 0Z" fill="currentColor" fillOpacity={0.3} />
      <circle cx="5.5" cy="5.5" r="1" fill="currentColor" />
      <circle cx="18.5" cy="5.5" r="1" fill="currentColor" />
      <circle cx="5.5" cy="18.5" r="1" fill="currentColor" />
      <circle cx="18.5" cy="18.5" r="1" fill="currentColor" />
    </Base>
  );
}

export function GstStamp(props: P) {
  return (
    <Base {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor" fillOpacity={0.3} transform="rotate(-8 12 12)" />
      <rect x="5" y="8" width="14" height="8" rx="2" transform="rotate(-8 12 12)" />
      <path d="M8.5 13.2l1.2-.2M12 12.6l2.8-.4" transform="rotate(-8 12 12)" />
    </Base>
  );
}

export function UdyamBadge(props: P) {
  return (
    <Base {...props}>
      <path d="M12 2.5l2.4 1.8 3-.2.9 2.9 2.4 1.8-1 2.8 1 2.8-2.4 1.8-.9 2.9-3-.2L12 21.5l-2.4-1.8-3 .2-.9-2.9-2.4-1.8 1-2.8-1-2.8 2.4-1.8.9-2.9 3 .2Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </Base>
  );
}

export function MandiScale(props: P) {
  return (
    <Base {...props}>
      <path d="M12 3v17M7 20h10M4 6h16" />
      <path d="M6 6l-3 7h6L6 6ZM18 6l-3 7h6l-3-7Z" fill="currentColor" fillOpacity={0.3} />
    </Base>
  );
}

export function AutoRickshaw(props: P) {
  return (
    <Base {...props}>
      <path d="M4 16V9a4 4 0 0 1 4-4h6l4 5h1a2 2 0 0 1 2 2v4H4Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M14 5v5h4M9 10h5" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="18" cy="17.5" r="2" />
    </Base>
  );
}

export function BahiKhata(props: P) {
  return (
    <Base {...props}>
      <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" fill="currentColor" fillOpacity={0.3} />
      <path d="M5 18a2 2 0 0 1 2-2h12M9 8h6M9 11h4M5 4v14" />
      <path d="M12 2v4" />
    </Base>
  );
}

export function BridgeIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M2 16h20M4 16v4M20 16v4" />
      <path d="M4 16c3-6 13-6 16 0" fill="currentColor" fillOpacity={0.3} />
      <path d="M8 12.6V16M12 11.5V16M16 12.6V16" />
    </Base>
  );
}

/** Registry used by components/Icon.tsx and the /brand icon grid. */
export const INDIA_ICONS = {
  stamp: StampIcon,
  chai: ChaiCup,
  "rupee-slash": RupeeSlash,
  "rupee-coin": RupeeCoin,
  "tailor-tape": TailorTapeIcon,
  "upi-arrow": UpiArrow,
  kirana: KiranaShop,
  scooter: Scooter,
  diya: Diya,
  "rangoli-dot": RangoliDot,
  "gst-stamp": GstStamp,
  "udyam-badge": UdyamBadge,
  "mandi-scale": MandiScale,
  "auto-rickshaw": AutoRickshaw,
  "bahi-khata": BahiKhata,
  bridge: BridgeIcon,
} as const;
