import { asset } from "@/lib/asset";
import type { Logo } from "@/lib/logos";

/**
 * One ecosystem logo (content-plan §5.6). Uses the local SVG when the owner
 * has added it; otherwise a text wordmark chip. Partners render greyscale at
 * rest and colour on hover; marketplaces stay greyscale.
 */
export function LogoChip({ logo, showNote = true }: { logo: Logo; showNote?: boolean }) {
  const tone = logo.group === "marketplace" ? "is-muted" : "is-partner";
  return (
    <span className={`logo-chip ${tone}`}>
      {logo.file ? (
        <img src={asset(logo.file)} alt={logo.name} height={24} width={80} loading="lazy" decoding="async" />
      ) : (
        <span className="logo-wordmark">{logo.name}</span>
      )}
      {showNote && logo.note ? <small>({logo.note})</small> : null}
    </span>
  );
}
