import { Icon } from "@/components/Icon";
import { MockScreen } from "@/components/svg/mocks";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getBlock } from "@/lib/blocks";
import { getLogo } from "@/lib/logos";
import type { Prototype } from "@/lib/prototypes";
import { waPrototype } from "@/lib/wa";
import { glossify } from "@/components/clarity/glossify";

/**
 * PrototypeTeaser (content-plan §6.6, §9.10): illustrated concept view,
 * what it shows, which tools it works with, and a private walkthrough on
 * WhatsApp. Never links to the prototype itself.
 */
const GROUP: Record<Prototype["group"], { label: string; icon: string; tone: string }> = {
  sell: { label: "Sell", icon: "ShoppingBag", tone: "--rani" },
  book: { label: "Bookings", icon: "CalendarCheck", tone: "--peacock" },
  teach: { label: "Education", icon: "GraduationCap", tone: "--marigold" },
  make: { label: "Manufacturing", icon: "Factory", tone: "--mehendi" },
  export: { label: "Export", icon: "GlobeHemisphereWest", tone: "--indigo" },
  manage: { label: "CRM / ERP", icon: "Kanban", tone: "--indigo" },
  team: { label: "Team", icon: "UsersThree", tone: "--peacock" },
};

export function PrototypeTeaser({ proto }: { proto: Prototype }) {
  const g = GROUP[proto.group];
  return (
    <article className={`proto-teaser kind-${proto.kind}`} style={{ ["--accent" as string]: `var(${g.tone})` }}>
      <div className="proto-art">
        <span className="concept-chip">
          <Icon name="PencilSimpleLine" size={14} weight="bold" /> Concept view
        </span>
        <MockScreen variant={proto.image} />
      </div>
      <div className="proto-body">
        <p className="proto-group">
          <Icon name={g.icon} size={16} weight="bold" /> {g.label}
        </p>
        <h3>{glossify(proto.name)}</h3>
        <ul className="mini-chips" aria-label="What it shows">
          {proto.shows.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="proto-meta">
          <span className="proto-meta-label">Built from</span>
          <ul className="proto-blocks" aria-label="Built from">
            {proto.blocks.map((b) => {
              const block = getBlock(b);
              return block ? (
                <li key={b}>
                  <Icon name={block.icon} size={15} weight="bold" /> {block.short}
                </li>
              ) : null;
            })}
          </ul>
          <span className="proto-meta-label">Works with</span>
          <ul className="proto-works" aria-label="Works with">
            {proto.worksWith.map((w) => (
              <li key={w}>{getLogo(w)?.name ?? w}</li>
            ))}
          </ul>
        </div>
        <div className="proto-foot">
          <WhatsAppCTA message={waPrototype(proto.name)} context={`prototype-${proto.slug}`} label="Show me this prototype" />
          <p className="proto-lock">
            <Icon name="LockKey" size={16} weight="bold" /> Private walkthrough on WhatsApp
          </p>
        </div>
      </div>
    </article>
  );
}
