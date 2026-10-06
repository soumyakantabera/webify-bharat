import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows, Img } from "@/components/collage";
import { PageHero, SectionHead, StickerCard } from "@/components/tiles";
import { DecisionTree } from "@/components/svg/flows";
import { BillingToggle, InfoCard } from "@/components/pricing";
import { ADVISORY_RULES, ADVISORY_START, advisoryAddons, advisoryCompare, advisoryOneOffs, advisoryPlans, COMPASS_CREDIT, COMPASS_FREE_RULE, compassOffers, type AdvisoryPlan } from "@/lib/compass";
import { pageMetadata } from "@/lib/page-seo";
import { gstNote } from "@/lib/site";
import { WA_MSG, waAdvisory, waCompass } from "@/lib/wa";

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

function AdvisoryCard({ plan, gst }: { plan: AdvisoryPlan; gst: string }) {
  return (
    <article className={`stage-card${plan.popular ? " is-popular" : ""}`} id={`advisory-${plan.slug}`}>
      {plan.popular ? <span className="ribbon-badge">Most chosen</span> : null}
      <div className="tier-body">
        <h3>
          <Icon name={plan.icon} size={20} className="stage-ic" /> {plan.name}
        </h3>
        <p className="tier-tagline">{plan.tagline}</p>
        <p className="tier-price price-monthly">
          <span className="mono">{plan.monthly}</span>
          <small>/month{gst ? ` ${gst}` : ""}</small>
        </p>
        <p className="tier-price price-annual">
          <span className="mono">{plan.annual}</span>
          <small>pay 10 months, get 12{gst ? ` · ${gst}` : ""}</small>
        </p>
        <p className="tier-setup">
          {plan.sessions} · {plan.bestFor}
        </p>
        <ul className="ticks">
          {plan.features.map((f) => (
            <li key={f}>{glossify(f)}</li>
          ))}
        </ul>
        <WhatsAppCTA message={waAdvisory(plan.name)} context={`advisory-${plan.slug}`} label={`Start ${plan.name.replace("Compass ", "")}`} />
      </div>
    </article>
  );
}

function CompareCell({ v }: { v: boolean | string }) {
  if (v === true) return <span className="cell-yes" role="img" aria-label="Included"><Icon name="CheckCircle" size={20} weight="fill" /></span>;
  if (v === false) return <span className="cell-no" role="img" aria-label="Not included"><Icon name="Minus" size={18} weight="bold" /></span>;
  return <span className="cell-text">{v}</span>;
}

export default function Strategy() {
  const gst = gstNote();
  return (
    <Layout cta={{ title: "One session. A clear plan.", message: WA_MSG.strategy, label: "Book a strategy session", webu: "thinking" }}>
      <BreadcrumbLd seoKey={"strategy"} />
      <PageHero
        kicker="Strategy · paid consulting"
        title="Know what to build before you spend a rupee on it."
        sub="A practical plan for your website, payments, software and marketing — including whether Zoho, Odoo, Google, Microsoft or a custom build fits you best. Then, if you want it, ongoing help with your numbers, profit and marketing."
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
                  <p className="tier-tagline">{glossify(o.what)}</p>
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

      <section className="section" id="advisory" aria-labelledby="advisory-title">
        <div className="container">
          <SectionHead
            kicker="Ongoing · Compass Advisory"
            id="advisory-title"
            title="Selling well, but not making money? Let's fix that together."
            sub="Your year-end statements, monthly reports, profit review and marketing strategy, with live online sessions to go through it all. One team, every month, yearly or pay as you go."
          />
          <BillingToggle>
            <div className="stage-row is-three">
              {advisoryPlans.map((p) => (
                <AdvisoryCard key={p.slug} plan={p} gst={gst} />
              ))}
            </div>
          </BillingToggle>

          <h3 className="advisory-sub" id="advisory-compare-title">Compare advisory plans</h3>
          <div className="compare-wrap" tabIndex={0} role="region" aria-labelledby="advisory-compare-title">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">What you get</th>
                  {advisoryPlans.map((p) => (
                    <th key={p.slug} scope="col">{p.name.replace("Compass ", "")}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {advisoryCompare.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.cells.map((c, i) => (
                      <td key={i}><CompareCell v={c} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section surface-2" id="pay-as-you-go" aria-labelledby="payg-title">
        <div className="container">
          <SectionHead kicker="Pay as you go" id="payg-title" title="Need it once? Pay once." sub="No plan needed. Order a single piece of work, any time of year." />
          <div className="ticket-row is-three">
            {advisoryOneOffs.map((o) => (
              <article key={o.slug} className="tier-ticket">
                <div className="tier-body">
                  <h3>{o.name}</h3>
                  <p className="tier-tagline">{glossify(o.what)}</p>
                  <p className="tier-price">
                    <span className="mono">{o.price}</span>
                    {gst ? <small>{gst}</small> : null}
                  </p>
                  <ul className="mini-chips">
                    <li>{o.deliverable}</li>
                  </ul>
                  <WhatsAppCTA message={waCompass(o.name)} context={`advisory-${o.slug}`} label={`Order the ${o.name}`} />
                </div>
              </article>
            ))}
          </div>
          <div className="two-cards advisory-start">
            {ADVISORY_START.map((s) => (
              <div key={s.title} className="sticker-card tone-indigo">
                <span className="sticker-icon"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="advisory-addons" aria-labelledby="adv-addons-title">
        <div className="container">
          <SectionHead kicker="Add-ons" id="adv-addons-title" title="Add what your business needs." />
          <table className="addon-table">
            <thead>
              <tr>
                <th scope="col">Add-on</th>
                <th scope="col">Price</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {advisoryAddons.map((a) => (
                <tr key={a.name}>
                  <th scope="row">{a.name}</th>
                  <td className="mono">{a.price}</td>
                  <td>{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="info-grid advisory-rules">
            <InfoCard icon="Scales" title="Straight answers">
              <ul className="ticks">{ADVISORY_RULES.map((r) => <li key={r}>{r}</li>)}</ul>
            </InfoCard>
          </div>
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
                Deeper work — an audit of your setup, a written roadmap with tool choices and budget ranges, or ongoing advisory on your numbers, profit and marketing.
                {COMPASS_CREDIT.compassCreditable ? ` ${COMPASS_CREDIT.line}` : ""}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
