import { Fragment, type ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

/**
 * Inline arrow icons that replace the →, ← and ↗ characters in links and
 * running text. Safe in server and client components (direct Phosphor imports).
 */
export function Arw({ dir = "right", flow = false }: { dir?: "right" | "left" | "out"; flow?: boolean }) {
  const P = dir === "left" ? ArrowLeft : dir === "out" ? ArrowUpRight : ArrowRight;
  return <P size="1em" weight="bold" aria-hidden="true" className={`ic-arw ic-arw-${dir}${flow ? " is-flow" : ""}`} />;
}

/** Turns "Order → invoice → books" into text with arrow icons between the steps. */
export function withArrows(text: string, map: (s: string) => ReactNode = (s) => s): ReactNode {
  if (!text.includes("→")) return map(text);
  const parts = text.split(/\s*→\s*/);
  return (
    <Fragment>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i ? <Arw flow /> : null}
          {map(p)}
        </Fragment>
      ))}
    </Fragment>
  );
}
