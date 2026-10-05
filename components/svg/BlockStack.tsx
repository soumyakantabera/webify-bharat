import Link from "next/link";
import { Icon } from "@/components/Icon";
import { blocks, type BlockSlug } from "@/lib/blocks";

/**
 * BlockStack (content-plan §6.10 #2): the 11 blocks as a stack of bricks.
 * `highlight` lights up the blocks a business would combine; the rest fade.
 */
export function BlockStack({
  highlight,
  compact = false,
  label = "The 11 Webify building blocks",
}: {
  highlight?: BlockSlug[];
  compact?: boolean;
  label?: string;
}) {
  const on = highlight && highlight.length ? new Set(highlight) : null;
  return (
    <ul className={`block-stack${compact ? " is-compact" : ""}`} aria-label={label}>
      {blocks.map((b, i) => {
        const lit = !on || on.has(b.slug);
        return (
          <li
            key={b.slug}
            className={`block-brick${lit ? " is-lit" : " is-dim"}`}
            style={{ ["--brick" as string]: `var(${b.colour})`, ["--i" as string]: i }}
          >
            <Link href={`/systems/${b.slug}`} className="block-brick-link">
              <span className="block-brick-icon">
                <Icon name={b.icon} size={compact ? 18 : 22} />
              </span>
              <span className="block-brick-name">{b.short}</span>
              {on && lit ? <span className="sr-only"> (included)</span> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
