import { Arw } from "@/components/Glyph";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { getBlock } from "@/lib/blocks";
import type { DayMoment, IndustryPage } from "@/lib/industries";

/** Industry hub tile (§9.8): photo card with the industry colour band. */
export function IndustryTile({ ind, headingLevel = "h3" }: { ind: IndustryPage; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={`/industries/${ind.slug}`} className="industry-tile" style={{ ["--accent" as string]: `var(${ind.colour})` }}>
      <Img slot={ind.photo} mask="none" className="industry-tile-photo" width={600} height={380} crop={ind.tileCrop?.crop} zoom={ind.tileCrop?.zoom} />
      <span className="industry-tile-band" aria-hidden="true" />
      <span className="industry-tile-body">
        <span className="industry-tile-icon">
          <Icon name={ind.icon} size={22} />
        </span>
        <H className="industry-tile-name">{ind.name}</H>
        <span className="industry-tile-line">{ind.oneLine}</span>
        <span className="industry-tile-stack">{ind.stack.map((b) => getBlock(b)?.short).join(" · ")}</span>
        <span className="industry-tile-more">See how we'd build it <Arw /></span>
      </span>
    </Link>
  );
}

/** One slide of "A day in your [shop]" (§9.8 #2). */
export function DaySlide({ moment, accent }: { moment: DayMoment; accent: string }) {
  const block = getBlock(moment.block);
  return (
    <article className="day-slide" style={{ ["--accent" as string]: `var(${accent})` }}>
      <p className="day-time mono">{moment.time}</p>
      <p className="day-scene">{moment.scene}</p>
      {block ? (
        <Link href={`/systems/${block.slug}`} className="day-block">
          <Icon name={block.icon} size={18} /> {moment.helps} helps here <Arw />
        </Link>
      ) : null}
    </article>
  );
}
