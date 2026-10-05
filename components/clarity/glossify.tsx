import { cache, Fragment, type ReactNode } from "react";
import { GlossaryChip } from "@/components/clarity";

/**
 * glossify (content-plan §2.0.7, §13): wraps the first use of each technical
 * term on a page in a GlossaryChip. "Seen" terms are tracked per render with
 * React's request-scoped cache, so each term gets one chip per page.
 * Server components only.
 */
const seenOnPage = cache(() => new Set<string>());

const TERMS: [string, RegExp][] = [
  ["AI visibility", /AI visibility/i],
  ["White-label", /white-label(?:led)?/i],
  ["SaaS", /\bSaaS\b/],
  ["PaaS", /\bPaaS\b/],
  ["CRM", /\bCRM\b/],
  ["ERP", /\bERP\b/],
  ["SEO", /\bSEO\b/],
  ["SEM", /\bSEM\b/],
];

export function glossify(node: ReactNode): ReactNode {
  if (typeof node !== "string") return node;
  const seen = seenOnPage();
  const parts: ReactNode[] = [];
  let rest = node;
  for (;;) {
    let best: { term: string; index: number; match: string } | null = null;
    for (const [term, re] of TERMS) {
      if (seen.has(term)) continue;
      const m = re.exec(rest);
      if (m && (!best || m.index < best.index)) best = { term, index: m.index, match: m[0] };
    }
    if (!best) break;
    seen.add(best.term);
    parts.push(rest.slice(0, best.index), <GlossaryChip key={parts.length} term={best.term}>{best.match}</GlossaryChip>);
    rest = rest.slice(best.index + best.match.length);
  }
  if (!parts.length) return node;
  parts.push(rest);
  return <Fragment>{parts}</Fragment>;
}
