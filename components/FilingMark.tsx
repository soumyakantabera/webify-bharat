import { useId } from "react";

export function FilingMark({
  slug,
  size = 40,
}: {
  slug: string;
  mark?: string;
  size?: number;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <span className={`mark mark-${slug}`} style={{ width: size, height: size }} aria-hidden>
      <Logo slug={slug} id={id} />
    </span>
  );
}

function Logo({ slug, id }: { slug: string; id: string }) {
  if (slug === "udyam") return <Udyam id={id} />;
  if (slug === "iec") return <Iec id={id} />;
  if (slug === "uk-vat") return <UkVat id={id} />;
  if (slug === "eu-vat") return <EuIoss id={id} />;
  return <Gst id={id} />;
}

function plate(id: string, from: string, to: string) {
  return (
    <linearGradient id={id} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor={from} />
      <stop offset="1" stopColor={to} />
    </linearGradient>
  );
}

function Gst({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%">
      <defs>{plate(id, "#3dca86", "#0b6b45")}</defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
      <circle cx="32" cy="33" r="16" fill="#fff" />
      <path d="M23 28h18M23 33h18" stroke="#0d6b45" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M28 28v5c5 0 9 2.2 9 6.5S33 46 28 46" stroke="#0d6b45" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Udyam({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%">
      <defs>{plate(id, "#ffb15a", "#c2410c")}</defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
      <path d="M12 42V30l20-12 20 12v12H12z" fill="#fff" />
      <rect x="28" y="32" width="8" height="10" rx="1.2" fill="#c2410c" />
      <rect x="18" y="30" width="6" height="5" rx="1" fill="#c2410c" />
      <rect x="40" y="30" width="6" height="5" rx="1" fill="#c2410c" />
    </svg>
  );
}

function Iec({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%">
      <defs>{plate(id, "#8b8cff", "#3730a3")}</defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
      <rect x="14" y="24" width="26" height="20" rx="3.5" fill="#fff" />
      <path d="M14 32h26M22 24v20M32 24v20" stroke="#3730a3" strokeWidth="1.8" />
      <path
        d="M42 16h12M50 12l6 4-6 4"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UkVat({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%">
      <defs>{plate(id, "#7eb6ef", "#1d4e89")}</defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
      <circle cx="32" cy="32" r="16" fill="#fff" />
      <path d="M37 25c0-4-3-7-7.2-7-3.6 0-6.2 2.2-7 5.2" stroke="#1d4e89" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M24 30h13M24 36h15M29 25v16" stroke="#1d4e89" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function EuIoss({ id }: { id: string }) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = ((-90 + i * 30) * Math.PI) / 180;
    return { x: 32 + 18 * Math.cos(a), y: 32 + 18 * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%">
      <defs>{plate(id, "#f3a0ad", "#9f3040")}</defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
      {stars.map((star) => (
        <path
          key={`${star.x}-${star.y}`}
          fill="#fff"
          transform={`translate(${star.x} ${star.y}) scale(0.55)`}
          d="M0-4.2 1.1-1.3 4.2-1.3 1.7.7 2.6 3.8 0 1.9-2.6 3.8-1.7.7-4.2-1.3-1.1-1.3z"
        />
      ))}
    </svg>
  );
}
