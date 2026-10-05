import { asset } from "@/lib/asset";
import type { Logo } from "@/lib/logos";

/**
 * One ecosystem logo (content-plan §5.6). Brands with a local SVG show their
 * mark in full colour on a small white badge (legible on light and dark
 * sections) next to the name; full wordmarks show alone; the rest are a
 * text chip. Marketplaces stay muted.
 */
export function LogoChip({ logo, showNote = true }: { logo: Logo; showNote?: boolean }) {
  const tone = logo.group === "marketplace" ? "is-muted" : "is-partner";
  return (
    <span className={`logo-chip ${tone}${logo.file ? " has-mark" : ""}`}>
      {logo.file && logo.wordmark ? (
        <span className="logo-badge is-wide">
          <img src={asset(logo.file)} alt={logo.name} height={18} width={72} loading="lazy" decoding="async" />
        </span>
      ) : (
        <>
          {logo.file ? (
            <span className="logo-badge">
              <img src={asset(logo.file)} alt="" height={16} width={16} loading="lazy" decoding="async" />
            </span>
          ) : null}
          <span className="logo-wordmark">{logo.name}</span>
        </>
      )}
      {showNote && logo.note ? <small>({logo.note})</small> : null}
    </span>
  );
}
