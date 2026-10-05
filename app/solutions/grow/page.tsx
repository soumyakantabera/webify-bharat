import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoUiLayer } from "@/components/collage";
import { PillarChips } from "@/components/clarity";
import { TabbedShowcase } from "@/components/slides/TabbedShowcase";
import { FlipCard, PageHero, SectionHead } from "@/components/tiles";
import { GrowthTree, ReachFunnel } from "@/components/svg/flows";
import { OwnerDashboard } from "@/components/svg/mocks";
import { RentVsOwnChart } from "@/components/viz/RentVsOwnChart";
import { PLAN_STAGES } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { getPath } from "@/lib/paths";
import { reachServices } from "@/lib/reach";
import { gstNote } from "@/lib/site";
import { getTrade, SHOWCASE_TRADES } from "@/lib/trades";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("grow");

const MOVES = [
  { cls: "g-2x2", title: "Direct ordering", text: "Move regulars off aggregator commission — keep the apps for new customers.", photo: "/images/snapshots/market-counter.webp", icon: "ShoppingBag" },
  { cls: "g-2x1", title: "Sell abroad", text: "Stripe, multi-currency checkout, UK VAT / EU IOSS through a registered agent.", photo: "IMG-H05", icon: "GlobeHemisphereWest" },
  { cls: "", title: "Dealer / B2B portal", text: "Each dealer sees their own prices.", icon: "Factory" },
  { cls: "", title: "Automation", text: "Reminders, follow-ups, payment links.", icon: "Lightning" },
  { cls: "", title: "Owner dashboard", text: "The 3–5 numbers you actually ask about.", icon: "ChartLineUp" },
  { cls: "", title: "New city or branch", text: "Pages and listings for every location.", icon: "MapPin" },
  { cls: "g-2x1", title: "Integrations", text: "Tally, Zoho, Shiprocket and Google Sheets, connected.", photo: "IMG-B08", icon: "PlugsConnected" },
];

const RENT_OWN = [
  { id: "food", front: "Food delivery apps", keep: "Keep them for new diners who find you there.", own: "Give regulars a direct-order menu and WhatsApp ordering.", photo: "/images/snapshots/market-spice.webp" },
  { id: "market", front: "Marketplaces", keep: "Keep them for first orders from strangers.", own: "Bring repeat buyers to your own store with your own prices.", photo: "/images/snapshots/market-electronics.webp" },
  { id: "directory", front: "Directories & lead apps", keep: "Keep a listing where it still brings new enquiries.", own: "Let people who search your name land on your site and your WhatsApp.", photo: "/images/snapshots/market-mandi.webp" },
];

export default function Grow() {
  const path = getPath("grow")!;
  const stageOpts = PLAN_STAGES.map((s) => ({ slug: s.slug, name: s.name, setup: s.setupAmount, monthly: s.monthlyAmount }));
  return (
    <Layout cta={{ title: "Tell us what's working. We'll build what's next.", message: path.waMessage, label: path.cta, webu: "pointing", path: "grow" }}>
      <BreadcrumbLd seoKey={"grow"} />
      <PageHero
        kicker="Grow"
        tone="mehendi"
        title="You've got customers. Let's get you more — and keep more of what they pay."
        sub="Direct ordering, dealer portals, international payments, automation and marketing — built on top of what already sells."
        cta={<WhatsAppCTA message={path.waMessage} context="hero" path="grow" label={path.cta} />}
        chips={<PillarChips pillars={["marketing", "systems", "strategy"]} />}
        visual={<PhotoUiLayer slot="IMG-P03" priority stickers={[{ text: "New order from Dubai ✅" }, { text: "Dealer reorder placed" }]} />}
      />

      <section className="section" id="moves" aria-labelledby="moves-title">
        <div className="container">
          <div className="moves-head">
            <SectionHead kicker="Growth moves" id="moves-title" title="Pick the next branch to grow." />
            <GrowthTree className="moves-tree" />
          </div>
          <div className="growth-bento">
            {MOVES.map((m) => (
              <article key={m.title} className={`gb-cell ${m.cls}${m.photo ? " has-photo" : ""}`}>
                {m.photo ? <Img slot={m.photo} mask="none" className="gb-photo" width={800} height={600} decorative /> : null}
                <div className="gb-body">
                  <Icon name={m.icon} size={26} />
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="burst burst-mehendi" id="rent-vs-own" aria-labelledby="rvo-title">
        <div className="container">
          <SectionHead id="rvo-title" title="Keep the apps for new customers. Own the channel for regulars." sub="Put in your own numbers to see what a year of commission on regulars costs." align="center" />
          <RentVsOwnChart stages={stageOpts} gstNote={gstNote()} />
          <div className="flip-grid is-three">
            {RENT_OWN.map((r) => (
              <FlipCard
                key={r.id}
                id={`grow-${r.id}`}
                label={r.front}
                flipLabel="Rent + Own"
                front={
                  <>
                    <Img slot={r.photo} mask="none" tone="mehendi" className="flip-photo" width={400} height={260} decorative />
                    <span className="flip-title">{r.front}</span>
                  </>
                }
                back={
                  <>
                    <span className="flip-title">{r.front}</span>
                    <span className="flip-sub">Rent</span>
                    <span className="flip-quote">{r.keep}</span>
                    <span className="flip-sub">Own</span>
                    <span className="flip-quote">{r.own}</span>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="dashboard" aria-labelledby="dash-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Webify Pulse" id="dash-title" title="See the week on one screen." sub="Enquiries, collections and what's stuck — the numbers you'd ask your manager for." />
            <Link href="/systems/pulse" className="text-link">About Webify Pulse →</Link>
          </div>
          <OwnerDashboard />
        </div>
      </section>

      <section className="section surface-2" id="get-found" aria-labelledby="found-title">
        <div className="container">
          <SectionHead kicker="Get found everywhere" id="found-title" title="Growth starts with being found — on Google, maps, ads and AI assistants." sub="Search (SEO), ads (SEM), local maps, AI visibility and WhatsApp campaigns." />
          <div className="split">
            <Img slot="IMG-B01" mask="rounded" width={800} height={600} />
            <div>
              <ReachFunnel />
              <ul className="reach-chips">
                {reachServices.map((r) => (
                  <li key={r.slug} style={{ ["--accent" as string]: `var(${r.colour})` }}>
                    <Link href={`/marketing/${r.slug}`}>
                      <Icon name={r.icon} size={18} /> {r.short}
                    </Link>
                  </li>
                ))}
              </ul>
              <WhatsAppCTA message={WA_MSG.marketing} context="get-found" label="Help me get found" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="by-type" aria-labelledby="bytype-title">
        <div className="container">
          <SectionHead kicker="By business type" id="bytype-title" title="Grow moves for businesses like yours." />
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
                    <Img slot={t.photo} mask="rounded" width={600} height={420} />
                    <div>
                      <h3>Next moves we often build</h3>
                      <ul className="ticks">{t.grow.map((g) => <li key={g}>{g}</li>)}</ul>
                      <p className="caveat">Starting points. Yours will be different.</p>
                    </div>
                  </div>
                ),
              };
            })}
          />
        </div>
      </section>
    </Layout>
  );
}
