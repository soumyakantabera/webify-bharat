import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows } from "@/components/collage";
import { FaqList } from "@/components/FaqList";
import { BillingToggle, CompareTable, InfoCard, MoveUpBar, ScopeEstimator, StageCard } from "@/components/pricing";
import { TabbedShowcase } from "@/components/slides/TabbedShowcase";
import { PageHero, SectionHead } from "@/components/tiles";
import { RentVsOwnChart } from "@/components/viz/RentVsOwnChart";
import { advisoryPlans, COMPASS_CREDIT, compassOffers } from "@/lib/compass";
import { pickFaqs } from "@/lib/faq-core";
import { addons, ANNUAL_RULE, COMMITMENT_RULE, OVER_LIMIT_RULE, OWNERSHIP_LINE, PARTNER_SETUP, PAYMENT_TERMS, PLAN_STAGES, PRICING_MODEL_LINE, stages, THIRD_PARTY_COSTS } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { paths } from "@/lib/paths";
import { CARE_LINE } from "@/lib/pillars";
import { reachPlans } from "@/lib/reach";
import { gstNote } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("pricing");

const CARE = ["Hosting, SSL and uptime monitoring", "Security updates and backups", "Fixes when something breaks", "Change hours every month (1 / 3 / 6 by stage)", "Support on WhatsApp — replies within a few hours, 7 days", "Improvements as your business grows"];

function AddonTable({ kind }: { kind: "monthly" | "one-time" }) {
  return (
    <table className="addon-table">
      <thead>
        <tr>
          <th scope="col">Add-on</th>
          {kind === "monthly" ? <th scope="col">Available on</th> : null}
          <th scope="col">{kind === "monthly" ? "Monthly" : "Price"}</th>
        </tr>
      </thead>
      <tbody>
        {addons
          .filter((a) => a.kind === kind)
          .map((a) => (
            <tr key={a.slug}>
              <th scope="row">{a.name}</th>
              {kind === "monthly" ? <td>{a.availableOn}</td> : null}
              <td className="mono">{a.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default function Pricing() {
  const gst = gstNote();
  return (
    <Layout cta={{ title: "Tell us roughly what you need. We'll send an exact quote.", accent: { phrase: "Seedha hisaab.", meaning: "straight accounts." }, message: WA_MSG.default, webu: "pointing" }}>
      <BreadcrumbLd seoKey={"pricing"} />
      <PageHero
        kicker="Pricing"
        tone="rani"
        title="One flat monthly fee — not a cut of every order."
        sub={`Setup from ₹5,000. Plans from ₹3,000/month. No cap on orders or customers, no lock-in, and third-party costs shown separately.${gst ? ` Prices ${gst}.` : ""}`}
        accent={{ phrase: "Seedha hisaab.", meaning: "straight accounts." }}
        cta={<WhatsAppCTA context="hero" label="Get my quote" />}
        visual={<ArchWindows priority slots={["/images/snapshots/pricing.webp"]} />}
      />

      <section className="section" id="plans" aria-labelledby="plans-title">
        <div className="container">
          <SectionHead kicker="Four stages" id="plans-title" title={PRICING_MODEL_LINE} sub={`${COMMITMENT_RULE} ${ANNUAL_RULE}`} />
          <BillingToggle>
            <div className="stage-row">
              {stages.map((s) => (
                <StageCard key={s.slug} stage={s} />
              ))}
            </div>
          </BillingToggle>
          {PARTNER_SETUP.published ? <p className="partner-strip">{PARTNER_SETUP.line}</p> : null}
        </div>
      </section>

      <section className="section surface-2" id="compare" aria-labelledby="compare-title">
        <div className="container">
          <SectionHead kicker="Compare" id="compare-title" title="Everything in each stage." sub="Features stack as you move right. Limits grow too — and cost less per unit on bigger stages." />
          <CompareTable />
        </div>
      </section>

      <section className="section" id="move-up" aria-labelledby="moveup-title">
        <div className="container narrow">
          <SectionHead kicker="When to move up" id="moveup-title" title="Over a limit? We'll tell you which is cheaper." sub={OVER_LIMIT_RULE} />
          <MoveUpBar />
        </div>
      </section>

      <section className="section surface-2" id="addons" aria-labelledby="addons-title">
        <div className="container">
          <SectionHead kicker="Add-ons" id="addons-title" title="Unlock a feature without changing stage." />
          <TabbedShowcase
            label="Add-on type"
            orientation="horizontal"
            tabs={[
              { id: "monthly", label: "Monthly add-ons", panel: <AddonTable kind="monthly" /> },
              { id: "one-time", label: "One-time add-ons", panel: <AddonTable kind="one-time" /> },
            ]}
          />
        </div>
      </section>

      <section className="section" id="care" aria-labelledby="care-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Webify Care" id="care-title" title="Care is built into every plan." sub={`${CARE_LINE} It's never sold separately.`} />
          </div>
          <ul className="care-list">
            {CARE.map((c) => (
              <li key={c}>
                <Icon name="Lifebuoy" size={20} /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section surface-2" id="reach" aria-labelledby="reach-title">
        <div className="container">
          <SectionHead kicker="Marketing · Webify Reach" id="reach-title" title="Reach plans, monthly." sub="Ad spend and message charges are paid to the platforms directly. Stop with 30 days' notice." />
          <table className="addon-table">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Setup</th>
                <th scope="col">Monthly</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {reachPlans.map((p) => (
                <tr key={p.name}>
                  <th scope="row">{p.name}</th>
                  <td className="mono">{p.setup}</td>
                  <td className="mono">{p.monthly}</td>
                  <td>{p.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="compass-strip">
            <div>
              <h3><Icon name="Compass" size={22} /> Strategy · Webify Compass</h3>
              <p>
                {compassOffers.map((o) => `${o.name.replace("Compass ", "")} ${o.price}`).join(" · ")}. {COMPASS_CREDIT.compassCreditable ? COMPASS_CREDIT.line : ""} The first WhatsApp chat is always free.
              </p>
              <p>
                Ongoing advisory — year-end statements, profit review, marketing strategy and a free weekly live meeting: {advisoryPlans.map((p) => `${p.name.replace("Compass ", "")} ${p.monthly}/month`).join(" · ")}. Pay-as-you-go work too.
              </p>
            </div>
            <Link href="/strategy" className="text-link">About Compass <Arw /></Link>
          </div>
        </div>
      </section>

      <section className="section" id="terms" aria-labelledby="terms-title">
        <div className="container">
          <SectionHead kicker="No surprises" id="terms-title" title="What's extra, what you own, how you pay." />
          <div className="info-grid">
            <InfoCard icon="Receipt" title="What's extra">
              <p>Always billed separately by the provider:</p>
              <ul className="ticks">{THIRD_PARTY_COSTS.map((t) => <li key={t}>{t}</li>)}</ul>
            </InfoCard>
            <InfoCard icon="Key" title="What you own">
              <p>{OWNERSHIP_LINE}</p>
              <p>Leave any day: you get a full export of your data and content, and the hosted system is switched off.</p>
            </InfoCard>
            <InfoCard icon="CalendarCheck" title="Payment terms">
              <ul className="ticks">{PAYMENT_TERMS.map((t) => <li key={t}>{t}</li>)}</ul>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="burst burst-peacock" id="estimator" aria-labelledby="est-title">
        <div className="container">
          <SectionHead id="est-title" title="Estimate your scope." sub="Rough numbers are fine. We recommend the cheapest stage for what you need — then send you an exact quote on WhatsApp." align="center" />
          <ScopeEstimator paths={paths.map((p) => ({ slug: p.slug, name: p.name, suggestedTier: p.suggestedTier }))} gstNote={gst} />
        </div>
      </section>

      <section className="section" id="rent-vs-own" aria-labelledby="rvo-title">
        <div className="container">
          <SectionHead kicker="Commission calculator" id="rvo-title" title="What do apps cost you on regulars?" sub="Keep marketplaces for new customers. Compare a year of commission on your regulars with a channel of your own." />
          <RentVsOwnChart stages={PLAN_STAGES.map((s) => ({ slug: s.slug, name: s.name, setup: s.setupAmount, monthly: s.monthlyAmount }))} gstNote={gst} />
        </div>
      </section>

      <section className="section surface-2" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title="Pricing questions, answered." />
          <FaqList items={pickFaqs(["how-pay", "setup-cost", "limits", "downgrade", "not-included", "lock-in", "source", "own"])} />
        </div>
      </section>
    </Layout>
  );
}
