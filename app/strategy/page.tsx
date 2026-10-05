import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows, Img } from "@/components/collage";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { DecisionTree } from "@/components/svg/flows";
import { COMPASS_CREDIT, COMPASS_FREE_RULE, compassOffers } from "@/lib/compass";
import { pageMetadata } from "@/lib/page-seo";
import { gstNote } from "@/lib/site";
import { WA_MSG, waCompass } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("strategy");

const WHO = [
  { icon: "RocketLaunch", title: "Starting a business and unsure where to begin" },
  { icon: "PlugsConnected", title: "Using five apps that don't talk to each other" },
  { icon: "Kanban", title: "Thinking about a CRM or ERP" },
  { icon: "Target", title: "Spending on ads with no clear results" },
];

const STRIPS = ["/images/snapshots/pricing.webp", "IMG-A01", "IMG-A02"];

const SAMPLE_PHASES = [
  { name: "Foundations", items: ["Registrations and accounts in your name", "Website and payments", "Google Business Profile"] },
  { name: "Systems", items: ["CRM or order desk", "WhatsApp workflows", "Invoicing and dashboard"] },
  { name: "Growth", items: ["Search and local marketing", "Integrations", "New locations or markets"] },
];

export default function Strategy() {
  const gst = gstNote();
  return (
    <Layout cta={{ title: "One session. A clear plan.", message: WA_MSG.strategy, label: "Book a strategy session", webu: "thinking" }}>
      <PageHero
        kicker="Strategy · paid consulting"
        title="Know what to build before you spend a rupee on it."
        sub="A practical plan for your website, payments, software and marketing — including whether Zoho, Odoo, Google, Microsoft or a custom build fits you best."
        cta={<WhatsAppCTA message={WA_MSG.strategy} context="hero" label="Book a strategy session" />}
        visual={<ArchWindows priority slots={["/images/snapshots/work.webp", "/images/snapshots/contact.webp", "IMG-R03"]} />}
      />

      <section className="section" id="who" aria-labelledby="who-title">
        <div className="container">
          <SectionHead kicker="Who it's for" id="who-title" title="Webify Compass is for you if…" />
          <div className="sticker-grid is-four">
            {WHO.map((w) => (
              <StickerCard key={w.title} icon={w.icon} title={w.title} tone="indigo" />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="offers" aria-labelledby="offers-title">
        <div className="container">
          <SectionHead kicker="Three ways to start" id="offers-title" title="Session, audit or roadmap." sub={COMPASS_FREE_RULE} />
          <div className="ticket-row is-three">
            {compassOffers.map((o, i) => (
              <article key={o.slug} className="tier-ticket">
                <Img slot={STRIPS[i]} mask="none" className="tier-strip" width={600} height={150} decorative />
                <div className="tier-body">
                  <h3>{o.name}</h3>
                  <p className="tier-tagline">{o.what}</p>
                  <p className="tier-price">
                    <span className="mono">{o.price}</span>
                    {gst ? <small>{gst}</small> : null}
                  </p>
                  <ul className="mini-chips">
                    <li>{o.deliverable}</li>
                    {COMPASS_CREDIT.compassCreditable ? <li>Credited against your build</li> : null}
                  </ul>
                  <WhatsAppCTA message={waCompass(o.name)} context={`compass-${o.slug}`} label={`Book the ${o.slug}`} />
                </div>
              </article>
            ))}
          </div>
          {COMPASS_CREDIT.compassCreditable ? <p className="center-note"><Icon name="custom:rupee-coin" size={18} /> {COMPASS_CREDIT.line}</p> : null}
        </div>
      </section>

      <section className="burst burst-dusk" id="build-vs-buy" aria-labelledby="bvb-title">
        <div className="container">
          <SectionHead id="bvb-title" title="Build, buy, or build around what you have?" sub="This is the question Compass answers for your business — honestly, including when a ready app is the better choice." align="center" />
          <div className="decision-card">
            <DecisionTree />
          </div>
        </div>
      </section>

      <section className="section" id="sample-roadmap" aria-labelledby="roadmap-title">
        <div className="container">
          <SectionHead kicker="Sample roadmap" id="roadmap-title" title="What a Compass Roadmap looks like." sub="Illustrative only — your roadmap is written for your business, with budget ranges for each phase." />
          <ol className="sample-roadmap">
            {SAMPLE_PHASES.map((p, i) => (
              <li key={p.name}>
                <span className="sample-chip-inline">Sample</span>
                <span className="sr-phase mono">Phase {i + 1}</span>
                <h3>{p.name}</h3>
                <ul className="ticks">{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section surface-2" id="free-vs-paid" aria-labelledby="fvp-title">
        <div className="container">
          <SectionHead kicker="Free vs paid" id="fvp-title" title="What's free, and what Compass adds." />
          <div className="two-cards">
            <div className="sticker-card tone-mehendi">
              <span className="sticker-icon"><Icon name="ChatCircleDots" size={26} /></span>
              <h3>Free: the WhatsApp discovery chat</h3>
              <p>Tell us your business and what&apos;s not working. We&apos;ll tell you honestly where to start — no charge, no obligation.</p>
            </div>
            <div className="sticker-card tone-indigo">
              <span className="sticker-icon"><Icon name="Compass" size={26} /></span>
              <h3>Paid: Webify Compass</h3>
              <p>
                Deeper work — an audit of your setup or a written roadmap with tool choices and budget ranges.
                {COMPASS_CREDIT.compassCreditable ? ` ${COMPASS_CREDIT.line}` : ""}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
