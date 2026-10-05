import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PhotoBento, PolaroidCluster } from "@/components/collage";
import { PillarChips } from "@/components/clarity";
import { LaunchCountdown } from "@/components/slides/LaunchCountdown";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { LaunchRocket } from "@/components/svg/flows";
import { FeeDonut } from "@/components/viz/FeeDonut";
import { ReadinessMeter } from "@/components/viz/ReadinessMeter";
import { getBlock } from "@/lib/blocks";
import { pageMetadata } from "@/lib/page-seo";
import { getPath } from "@/lib/paths";
import { LAUNCH_CHECKLIST, LAUNCH_STEPS } from "@/lib/process";

export const metadata: Metadata = pageMetadata("launch");

const SIX = [
  { icon: "PaintBrush", title: "Designer" },
  { icon: "Wrench", title: "Developer" },
  { icon: "CreditCard", title: "Gateway setup" },
  { icon: "ChatCircleDots", title: "WhatsApp vendor" },
  { icon: "MagnifyingGlass", title: "SEO person" },
  { icon: "EnvelopeSimple", title: "IT / email setup" },
];

const WHO = ["First-time founders", "Home businesses going formal", "New exporters", "New branches or franchises", "Side-projects turning real"];

export default function Launch() {
  const path = getPath("launch")!;
  return (
    <Layout cta={{ title: "Tell us your idea.", accent: { phrase: "Chalo, shuru karein.", meaning: "let's get started." }, message: path.waMessage, label: path.cta, webu: "celebrating", path: "launch" }}>
      <PageHero
        kicker="Launch"
        tone="marigold"
        title="From idea to open-for-business. We set up all of it."
        sub="Registrations, brand, website, payments, WhatsApp and books — ready on launch day."
        cta={<WhatsAppCTA message={path.waMessage} context="hero" path="launch" label={path.cta} />}
        chips={<PillarChips pillars={["strategy", "systems", "marketing", "care"]} />}
        visual={
          <PolaroidCluster
            items={[
              { slot: "IMG-P02", caption: "the idea" },
              { slot: "IMG-B07", caption: "registered" },
              { slot: "IMG-B11", caption: "open for business" },
            ]}
          />
        }
      />

      <section className="section" id="checklist" aria-labelledby="checklist-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Launch checklist" id="checklist-title" title="Everything a new business needs to be live and legal." sub="Tick what you already have — the rest is what we set up for you." />
            <LaunchRocket className="launch-rocket" />
          </div>
          <ReadinessMeter
            items={LAUNCH_CHECKLIST.map((c, i) => ({
              id: String(i),
              label: c.item,
              chip: c.block ? <span className="block-chip">{getBlock(c.block)?.name}</span> : undefined,
            }))}
          />
        </div>
      </section>

      <section className="burst burst-marigold" id="countdown" aria-labelledby="countdown-title">
        <div className="container">
          <SectionHead id="countdown-title" title="From first chat to launch day." sub="How long each step takes depends on government approvals and your documents — we say so honestly in your written scope." align="center" />
          <LaunchCountdown steps={LAUNCH_STEPS} />
        </div>
      </section>

      <section className="section" id="one-team" aria-labelledby="one-team-title">
        <div className="container">
          <SectionHead kicker="One team instead of six" id="one-team-title" title="Six vendors to chase — or one team on WhatsApp." />
          <div className="six-to-one">
            <div className="sticker-grid is-six">
              {SIX.map((s) => (
                <StickerCard key={s.title} icon={s.icon} title={s.title} tone="marigold" />
              ))}
            </div>
            <span className="six-arrow" aria-hidden="true">→</span>
            <div className="one-card">
              <Icon name="UsersThree" size={40} />
              <strong>Webify Bharat</strong>
              <span>One team, one WhatsApp chat, one written scope.</span>
            </div>
          </div>
          <p className="caveat center-note">We work alongside your CA — we don&apos;t replace them.</p>
        </div>
      </section>

      <section className="section surface-2" id="who" aria-labelledby="who-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Who it's for" id="who-title" title="Starting something? This is for you." />
            <ul className="who-chips">
              {WHO.map((w) => (
                <li key={w}>
                  <Icon name="RocketLaunch" size={18} /> {w}
                </li>
              ))}
            </ul>
          </div>
          <PhotoBento cells={[{ slot: "IMG-H04" }, { slot: "IMG-P02", alt: "A new founder planning" }, { slot: "/images/snapshots/registrations.webp", alt: "Registration paperwork" }]} />
        </div>
      </section>

      <section className="section" id="fees" aria-labelledby="fees-title">
        <div className="container">
          <SectionHead kicker="Fee transparency" id="fees-title" title="Our fee and the government's fee — always on separate lines." sub="Government fees are paid in your name. Payment gateway fees are billed by the provider." />
          <FeeDonut />
        </div>
      </section>
    </Layout>
  );
}
