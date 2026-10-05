import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getPillar } from "@/lib/pillars";
import type { Path } from "@/lib/paths";
import type { Stage } from "@/lib/offers";
import { gstNote } from "@/lib/site";
import { waTier } from "@/lib/wa";

export { FlipCard } from "./FlipCard";

/** Section heading: kicker, H2, optional sub and Hinglish accent (§6.3). */
export function SectionHead({
  kicker,
  title,
  sub,
  accent,
  align = "left",
  id,
  children,
}: {
  kicker?: string;
  title: ReactNode;
  sub?: ReactNode;
  accent?: { phrase: string; meaning: string };
  align?: "left" | "center";
  id?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`sec-head${align === "center" ? " is-center" : ""}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 id={id}>{title}</h2>
      {accent ? (
        <p className="hinglish accent-line">
          {accent.phrase} <span>— {accent.meaning}</span>
        </p>
      ) : null}
      {sub ? <p className="sec-sub">{sub}</p> : null}
      {children}
    </div>
  );
}

/** PathCard (§6.6): colour band, photo, icon, "for you if…", outcomes, pillar chips, CTA. */
export function PathCard({ path, headingLevel = "h3" }: { path: Path; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="path-card" style={{ ["--accent" as string]: `var(${path.colour})` }}>
      <Img slot={path.photo} mask="none" className="path-card-photo" width={600} height={340} />
      <div className="path-card-body">
        <span className="path-card-icon">
          <Icon name={path.icon} size={26} />
        </span>
        <H>
          <Link href={path.href}>{path.name}</Link>
        </H>
        <p className="path-card-if">
          <strong>For you if:</strong> {path.forYouIf}
        </p>
        <ul className="ticks">
          {path.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <ul className="mini-chips" aria-label="Pillars used">
          {path.pillars.map((p) => (
            <li key={p}>{getPillar(p)!.name}</li>
          ))}
        </ul>
        <div className="path-card-actions">
          <WhatsAppCTA message={path.waMessage} context={`path-${path.slug}`} path={path.slug} label={path.cta} />
          <Link href={path.href} className="text-link">
            How it works →
          </Link>
        </div>
      </div>
    </article>
  );
}

/** StickerCard (§6.5 sticker grid): tint background, icon, title, text. */
export function StickerCard({ icon, title, children, tone = "rani" }: { icon?: string; title: ReactNode; children?: ReactNode; tone?: string }) {
  return (
    <div className={`sticker-card tone-${tone}`}>
      {icon ? (
        <span className="sticker-icon">
          <Icon name={icon} size={26} />
        </span>
      ) : null}
      <h3>{title}</h3>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

/** TierTicket (§6.6): monthly price large, setup small, key limits, CTA. */
export function TierTicket({ stage, photo = true }: { stage: Stage; photo?: boolean }) {
  const gst = gstNote();
  return (
    <article className={`tier-ticket${stage.popular ? " is-popular" : ""}`}>
      {stage.popular ? <span className="ribbon-badge">Most chosen</span> : null}
      {photo ? <Img slot={stage.photo} mask="none" className="tier-strip" width={600} height={150} decorative /> : null}
      <div className="tier-body">
        <h3>
          <span aria-hidden="true">{stage.emoji}</span> {stage.name}
        </h3>
        <p className="tier-tagline">{stage.tagline}</p>
        <p className="tier-price">
          {stage.from ? <small className="tier-from">from</small> : null}
          <span className="mono">{stage.monthly.replace(/^from\s+/, "")}</span>
          <small>/month{gst ? ` ${gst}` : ""}</small>
        </p>
        <p className="tier-setup">
          Setup {stage.from ? "from " : ""}<span className="mono">{stage.setup.replace(/^from\s+/, "")}</span>
        </p>
        <ul className="tier-limits">
          {stage.keyLimits.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <WhatsAppCTA message={waTier(stage.name)} context={`tier-${stage.slug}`} label="Get my quote" />
      </div>
    </article>
  );
}

/** PromiseOrb (§6.6): gradient ring, icon, short promise. */
export function PromiseOrb({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="promise-orb">
      <span className="orb-ring">
        <Icon name={icon} size={30} />
      </span>
      <p>{children}</p>
    </div>
  );
}

/** The four promises strip (§2.5). */
export const FOUR_PROMISES = [
  { icon: "custom:tailor-tape", title: "Made for you", text: "No templates, ever." },
  { icon: "Key", title: "Your business stays yours", text: "Your domain, brand, content, data, payment account and WhatsApp number. Leave any day with a full data export." },
  { icon: "custom:rupee-coin", title: "Start small, pay monthly", text: "Setup from ₹5,000, one monthly plan that runs everything, no lock-in, no commission on your own customers." },
  { icon: "ChatCircleDots", title: "Always reachable", text: "We reply within a few hours, 7 days a week." },
];

/**
 * Page hero that passes the five-second test (§2.0.6): page purpose in one
 * line, one visual, one WhatsApp CTA — nothing else competing above the fold.
 */
export function PageHero({
  kicker,
  title,
  sub,
  accent,
  cta,
  visual,
  chips,
  tone = "rani",
}: {
  kicker: string;
  title: ReactNode;
  sub: ReactNode;
  accent?: { phrase: string; meaning: string };
  cta: ReactNode;
  visual: ReactNode;
  chips?: ReactNode;
  tone?: string;
}) {
  return (
    <section className={`page-hero-v2 tone-${tone}`} id="hero" aria-labelledby="page-title">
      <div className="container phv-grid">
        <div className="phv-copy">
          <p className="kicker">{kicker}</p>
          <h1 id="page-title">{title}</h1>
          {accent ? (
            <p className="hinglish accent-line">
              {accent.phrase} <span>— {accent.meaning}</span>
            </p>
          ) : null}
          <p className="hero-sub">{sub}</p>
          <div className="hero-actions">{cta}</div>
          {chips}
        </div>
        <div className="phv-visual">{visual}</div>
      </div>
    </section>
  );
}
