import { Arw } from "@/components/Glyph";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { ChatFlow, ConnectHub, FilingStamp, InvoiceFan } from "@/components/svg/flows";
import { MoneyPath } from "@/components/svg/MoneyPath";
import { MockScreen, OwnerDashboard, PipelineBoard, SearchResultMock, WorkspaceMock } from "@/components/svg/mocks";
import { AccessLayers } from "@/components/svg/positioning";
import { addons } from "@/lib/offers";
import type { Block, BlockSlug } from "@/lib/blocks";
import { glossify } from "@/components/clarity/glossify";

export { BlockFilterGrid } from "./BlockFilterGrid";
export { RentOwnStepper } from "./RentOwnStepper";

/** BlockTile (content-plan §6.6): icon, name, "Built for you to…", two tailoring chips. */
export function BlockTile({ block, photo = false, headingLevel = "h3" }: { block: Block; photo?: boolean; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={`/systems/${block.slug}`} className={`block-tile${photo ? " has-photo" : ""}`} style={{ ["--accent" as string]: `var(${block.colour})` }}>
      {photo ? <Img slot={block.photo} mask="none" className="block-tile-photo" width={600} height={400} decorative /> : null}
      <span className="block-tile-icon">
        <Icon name={block.icon} size={28} />
      </span>
      <H className="block-tile-name">{block.name}</H>
      <span className="block-tile-line">{glossify(block.oneLiner)}</span>
      <span className="block-tile-chips">
        {block.capabilities.slice(0, 2).map((c) => (
          <span key={c}>{c}</span>
        ))}
      </span>
      <span className="block-tile-more" aria-hidden="true">
        Explore <Arw />
      </span>
    </Link>
  );
}

/** The signature SVG for each block page hero (§9.7 table). */
export function BlockSignature({ slug }: { slug: BlockSlug }) {
  switch (slug) {
    case "site":
      return <SearchResultMock query="clinic near me" />;
    case "store":
      return <MockScreen variant="retail" />;
    case "pay":
      return <MoneyPath />;
    case "chat":
      return <ChatFlow />;
    case "pulse":
      return <OwnerDashboard />;
    case "ledger":
      return <InvoiceFan />;
    case "file":
      return <FilingStamp />;
    case "desk":
      return <PipelineBoard />;
    case "team":
      return <AccessLayers />;
    case "workspace":
      return <WorkspaceMock />;
    case "connect":
      return <ConnectHub />;
  }
}

/** Photo for a "tailored for" business (§16.4: flip fronts use the matching industry photo). */
export function businessPhoto(business: string): string | null {
  const b = business.toLowerCase();
  const map: [RegExp, string][] = [
    [/clinic/, "IMG-I-CLI-1"],
    [/kirana|retail/, "IMG-I-RET-1"],
    [/boutique/, "/images/snapshots/market-textile.webp"],
    [/coaching/, "IMG-I-EDU-2"],
    [/export/, "IMG-I-EXP-1"],
    [/manufactur|factory/, "IMG-I-MFG-1"],
    [/restaurant|kitchen/, "IMG-I-RES-2"],
    [/real estate/, "IMG-I-RE-1"],
    [/trader|distributor/, "IMG-I-MFG-2"],
    [/multi-outlet/, "/images/snapshots/market-electronics.webp"],
    [/founder|new business/, "IMG-P02"],
    [/home business/, "/images/snapshots/blog.webp"],
    [/team|office|services|growing/, "IMG-B11"],
  ];
  return map.find(([re]) => re.test(b))?.[1] ?? null;
}

/** Pricing note for a block, with add-on amounts read from lib/offers.ts (§9.7 #6). */
export function blockPricingNote(block: Block) {
  const addon = block.pricing.addon ? addons.find((a) => a.slug === block.pricing.addon!.slug) : undefined;
  return {
    included: block.pricing.included,
    addon: addon ? `On ${block.pricing.addon!.on}: ${addon.name} add-on, ${addon.price}${addon.kind === "monthly" && !/\//.test(addon.price) ? " a month" : ""}.` : null,
  };
}

/** Honeycomb of capability hexes (§6.5). */
export function Honeycomb({ items, accent = "--indigo" }: { items: string[]; accent?: string }) {
  return (
    <ul className="honeycomb" style={{ ["--accent" as string]: `var(${accent})` }}>
      {items.map((i) => (
        <li key={i}>
          <span>{glossify(i)}</span>
        </li>
      ))}
    </ul>
  );
}
