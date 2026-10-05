import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoUiLayer } from "@/components/collage";
import { PillarChips } from "@/components/clarity";
import { BeforeAfter } from "@/components/slides/BeforeAfter";
import { TabbedShowcase } from "@/components/slides/TabbedShowcase";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { BlockStack } from "@/components/svg/BlockStack";
import { ConnectHub } from "@/components/svg/flows";
import { RentVsOwnChart } from "@/components/viz/RentVsOwnChart";
import { PLAN_STAGES } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { getPath } from "@/lib/paths";
import { gstNote } from "@/lib/site";
import { getTrade, SHOWCASE_TRADES } from "@/lib/trades";

export const metadata: Metadata = pageMetadata("organise");

const PAINS = [
  { icon: "custom:upi-arrow", title: "Payments on a personal QR", text: "Shop money and pocket money share one history." },
  { icon: "ChatCircleDots", title: "Orders lost in WhatsApp", text: "The tenth message buries the first order." },
  { icon: "custom:rupee-slash", title: "Paying for leads who already know you", text: "Directories bill you for people who searched your name." },
  { icon: "FileText", title: "Excel nobody updates", text: "The sheet is right until Tuesday." },
  { icon: "custom:gst-stamp", title: "GST week panic", text: "Invoices rebuilt from screenshots every month." },
  { icon: "Key", title: "Five logins, no answers", text: "Every tool has a number; none has the answer." },
];

const DAY = [
  { time: "9:00", before: "Scroll WhatsApp for last night's orders", after: "Orders waiting in one list" },
  { time: "11:30", before: "Ask staff who has paid", after: "Payments matched to orders automatically" },
  { time: "2:00", before: "Re-type a GST invoice from a screenshot", after: "Invoice created with the payment" },
  { time: "6:00", before: "Forget to follow up a quote", after: "Reminder goes out on WhatsApp" },
  { time: "9:00 pm", before: "Guess how the week went", after: "Your numbers on one screen" },
];

const TAILOR = [
  { title: "We sit with your team", text: "We watch how you sell, collect and follow up — at your counter, on your phones — before we design anything.", photo: "/images/snapshots/services.webp" },
  { title: "We design for your counter, not a demo", text: "Screens your staff can use between customers, on the phones they already have.", photo: "/images/snapshots/work.webp" },
  { title: "We connect what you already use", text: "Tally, Zoho, Google Sheets, your WhatsApp number — kept, and made to talk to each other.", photo: "" },
];

export default function Organise() {
  const path = getPath("organise")!;
  const stageOpts = PLAN_STAGES.map((s) => ({ slug: s.slug, name: s.name, setup: s.setupAmount, monthly: s.monthlyAmount }));
  return (
    <Layout cta={{ title: "Show us how you work. We'll show you what we'd build.", message: path.waMessage, label: path.cta, webu: "pointing", path: "organise" }}>
      <BreadcrumbLd seoKey={"organise"} />
      <PageHero
        kicker="Organise"
        title="Your business already works. Let's make your tools work the same way."
        sub="We map how you sell, collect and follow up — then build one system around it."
        cta={<WhatsAppCTA message={path.waMessage} context="hero" path="organise" label={path.cta} />}
        chips={<PillarChips pillars={["strategy", "systems", "care"]} optional={["strategy"]} />}
        visual={<PhotoUiLayer slot="IMG-P01" priority stickers={[{ text: "Order missed? Not any more ✅" }, { text: "Payment matched to invoice" }]} />}
      />

      <section className="section" id="pains" aria-labelledby="pains-title">
        <div className="container">
          <SectionHead kicker="Sound familiar?" id="pains-title" title="The six leaks we fix most often." />
          <div className="sticker-grid">
            {PAINS.map((p) => (
              <StickerCard key={p.title} icon={p.icon} title={p.title} tone="rani">
                {p.text}
              </StickerCard>
            ))}
          </div>
        </div>
      </section>

      <section className="burst burst-dusk" id="before-after" aria-labelledby="ba-title">
        <div className="container">
          <SectionHead id="ba-title" title="An owner's day — today, and with a custom system." sub="Drag the handle to compare." align="center" />
          <BeforeAfter
            before={
              <div className="ba-day">
                <ul>{DAY.map((d) => <li key={d.time}><span className="mono">{d.time}</span> {d.before}</li>)}</ul>
              </div>
            }
            after={
              <div className="ba-day is-after">
                <ul>{DAY.map((d) => <li key={d.time}><span className="mono">{d.time}</span> {d.after}</li>)}</ul>
              </div>
            }
          />
        </div>
      </section>

      <section className="section" id="tailor" aria-labelledby="tailor-title">
        <div className="container">
          <SectionHead kicker="How we tailor" id="tailor-title" title="Built around how you work — not how software expects you to." />
          <div className="zigzag">
            {TAILOR.map((t, i) => (
              <article key={t.title} className="zz-row" style={{ ["--accent" as string]: "var(--rani)" }}>
                {i === 2 ? <ConnectHub className="zz-photo zz-svg" /> : <Img slot={t.photo} mask="arch" className="zz-photo" width={600} height={760} />}
                <div className="zz-copy">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="combinations" aria-labelledby="combo-title">
        <div className="container">
          <SectionHead kicker="Typical combinations" id="combo-title" title="What we'd build for businesses like yours." />
          <TabbedShowcase
            label="Business type"
            tabs={SHOWCASE_TRADES.map((slug) => {
              const t = getTrade(slug)!;
              return {
                id: slug,
                label: (
                  <>
                    <Icon name={t.icon} size={20} /> {t.name}
                  </>
                ),
                panel: (
                  <div className="showcase-panel">
                    <BlockStack highlight={t.blocks} label={`Blocks for ${t.name}`} />
                    <div>
                      <h3>For this business we&apos;d…</h3>
                      <ul className="ticks">{t.organise.map((o) => <li key={o}>{o}</li>)}</ul>
                      <p className="caveat">Starting points. Yours will be different.</p>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </div>
      </section>

      <section className="section" id="rent-vs-own" aria-labelledby="rvo-title">
        <div className="container">
          <SectionHead kicker="Rent + Own" id="rvo-title" title="What do the apps cost you on customers who already know you?" sub="Keep marketplaces and directories for new customers. Compare what your regulars cost there with a channel of your own." />
          <RentVsOwnChart stages={stageOpts} gstNote={gstNote()} />
        </div>
      </section>
    </Layout>
  );
}
