import { Icon } from "@/components/Icon";
import { MockScreen } from "@/components/svg/mocks";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getBlock } from "@/lib/blocks";
import { getLogo } from "@/lib/logos";
import type { Prototype } from "@/lib/prototypes";
import { waPrototype } from "@/lib/wa";

/**
 * PrototypeTeaser (content-plan §6.6, §9.10): illustrated concept view,
 * what it shows, which tools it works with, and a private walkthrough on
 * WhatsApp. Never links to the prototype itself.
 */
export function PrototypeTeaser({ proto }: { proto: Prototype }) {
  return (
    <article className={`proto-teaser kind-${proto.kind}`}>
      <div className="proto-art">
        <span className="concept-chip">Concept view</span>
        <MockScreen variant={proto.image} />
      </div>
      <div className="proto-body">
        <h3>{proto.name}</h3>
        <ul className="mini-chips" aria-label="What it shows">
          {proto.shows.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="proto-blocks">
          {proto.blocks.map((b) => getBlock(b)?.short).join(" · ")}
        </p>
        <p className="proto-works">
          <span>Works with</span> {proto.worksWith.map((w) => getLogo(w)?.name ?? w).join(" · ")}
        </p>
        <p className="proto-lock">
          <Icon name="LockKey" size={18} /> Walkthrough on WhatsApp
        </p>
        <WhatsAppCTA message={waPrototype(proto.name)} context={`prototype-${proto.slug}`} label="Show me this prototype" />
      </div>
    </article>
  );
}
