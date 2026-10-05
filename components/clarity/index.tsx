import { useId, type ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { GLOSSARY } from "@/lib/brand";
import { getPillar } from "@/lib/pillars";
import type { PillarSlug } from "@/lib/paths";

/**
 * Clarity components (content-plan §2.0): plain-words glossary chips,
 * "we are / we're not" strip, and pillar chips.
 */

const GLOSS: Record<string, string> = Object.fromEntries(GLOSSARY.map((g) => [g.term.toLowerCase(), g.plain]));
GLOSS["sem"] = GLOSS["sem / ads"];
GLOSS["ads"] = GLOSS["sem / ads"];

/** A technical term with its plain-words meaning on hover, focus or tap (§2.0.7). */
export function GlossaryChip({ term, children }: { term: string; children?: ReactNode }) {
  const id = `g${useId().replace(/:/g, "")}`;
  const plain = GLOSS[term.toLowerCase()];
  if (!plain) return <>{children ?? term}</>;
  return (
    <span className="gloss" tabIndex={0} aria-describedby={id}>
      {children ?? term}
      <span className="gloss-tip" role="tooltip" id={id}>
        <strong>{term}:</strong> {plain}
      </span>
    </span>
  );
}

/** §2.0.3 — what we are / what we're not. */
export const WE_ARE: { are: string; arent: string }[] = [
  { are: "Your software and marketing team, reachable on WhatsApp", arent: "Another app you have to learn alone" },
  { are: "Builders who work with Zoho, Odoo, Google, Microsoft, Tally", arent: "A replacement or rival for those tools" },
  { are: "Custom: every system made for one business", arent: "A template shop" },
  { are: "A partner who stays (Care)", arent: "A build-and-disappear agency" },
  { are: "Honest about costs (licences, ad spend, govt fees shown separately)", arent: "A “free” offer with hidden fees" },
];

export function WeAreStrip({ rows = 5, aside }: { rows?: number; aside?: [ReactNode, ReactNode] }) {
  return (
    <div className={`we-are${aside ? "" : " no-aside"}`}>
      {aside ? <div className="we-are-aside">{aside[0]}</div> : null}
      <div className="we-are-col is-are">
        <h3>
          <Icon name="ShieldCheck" size={20} /> We are
        </h3>
        <ul>{WE_ARE.slice(0, rows).map((r) => <li key={r.are}>{r.are}</li>)}</ul>
      </div>
      <div className="we-are-col is-not">
        <h3>
          <Icon name="X" size={18} weight="bold" /> We&apos;re not
        </h3>
        <ul>{WE_ARE.slice(0, rows).map((r) => <li key={r.arent}>{r.arent}</li>)}</ul>
      </div>
      {aside ? <div className="we-are-aside">{aside[1]}</div> : null}
    </div>
  );
}

/** "Pillars used" chips under path heroes (§9.2–9.4 #0). */
export function PillarChips({ pillars, optional = [] }: { pillars: PillarSlug[]; optional?: PillarSlug[] }) {
  return (
    <ul className="pillar-chips" aria-label="What we'll do for you">
      {pillars.map((slug) => {
        const p = getPillar(slug)!;
        return (
          <li key={slug} style={{ ["--accent" as string]: `var(${p.colour})` }}>
            <Link href={p.href}>
              <Icon name={p.icon} size={16} />
              {p.name}
              {optional.includes(slug) ? <small>(optional)</small> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
