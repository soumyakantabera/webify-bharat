import type { ReactNode } from "react";
import { Arw } from "@/components/Glyph";
import { Icon } from "@/components/Icon";
import { asset } from "@/lib/asset";
import { getLogo } from "@/lib/logos";

/**
 * GapTable (content-plan §2.0.2): what already exists (real brand marks),
 * what's missing, and where Webify fits — one colour-coded card per row.
 */
export type GapRow = {
  /** Logo ids from lib/logos.ts; plain strings render as text chips. */
  exists: (string | { label: string; icon: string })[];
  lack: ReactNode;
  fit: string;
  fitIcon: string;
  tone: "rani" | "peacock" | "marigold" | "mehendi" | "indigo";
};

function Exists({ item }: { item: GapRow["exists"][number] }) {
  if (typeof item !== "string") {
    return (
      <li className="gx-chip">
        <Icon name={item.icon} size={18} weight="duotone" /> {item.label}
      </li>
    );
  }
  const logo = getLogo(item);
  if (!logo) return <li className="gx-chip">{item}</li>;
  if (logo.file && logo.wordmark) {
    return (
      <li className="gx-chip is-wordmark">
        <img src={asset(logo.file)} alt={logo.name} height={18} width={64} loading="lazy" decoding="async" />
      </li>
    );
  }
  return (
    <li className="gx-chip">
      {logo.file ? <img src={asset(logo.file)} alt="" height={18} width={18} loading="lazy" decoding="async" /> : null}
      {logo.id === "microsoft-365" ? "Microsoft" : logo.name}
    </li>
  );
}

export function GapTable({ rows }: { rows: GapRow[] }) {
  return (
    <div className="gx-table" role="table" aria-label="What exists, what's missing, and where we fit">
      <div className="gx-head" role="row">
        <span role="columnheader">
          <Icon name="SquaresFour" size={16} weight="bold" /> What already exists
        </span>
        <span role="columnheader">
          <Icon name="PuzzlePiece" size={16} weight="bold" /> What&apos;s missing
        </span>
        <span role="columnheader">
          <Icon name="Sparkle" size={16} weight="bold" /> Where we fit
        </span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={`gx-row tone-${r.tone}`} role="row">
          <ul className="gx-exists" role="cell" aria-label="What already exists">
            {r.exists.map((e) => (
              <Exists key={typeof e === "string" ? e : e.label} item={e} />
            ))}
          </ul>
          <p className="gx-lack" role="cell">
            <span className="gx-lack-ic">
              <Icon name="PuzzlePiece" size={18} weight="duotone" />
            </span>
            <span>{r.lack}</span>
          </p>
          <p className="gx-fit" role="cell">
            <span className="gx-arrow" aria-hidden="true">
              <Arw />
            </span>
            <span className="gx-fit-badge">
              <Icon name={r.fitIcon} size={20} weight="bold" />
              {r.fit}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
