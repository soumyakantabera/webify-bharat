import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { FilingMark } from "@/components/FilingMark";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ArchWindows } from "@/components/collage";
import { BreadcrumbLd } from "@/components/SeoLd";
import { FilingStamp } from "@/components/svg/flows";
import { FeeDonut } from "@/components/viz/FeeDonut";
import { PageHero, SectionHead } from "@/components/tiles";
import { getStage } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { registrations, type Registration } from "@/lib/registrations";

export const metadata: Metadata = pageMetadata("registrations");

const ASK = "Hi! I want help with a registration. Which one do I need?";

function FilingTile({ item }: { item: Registration }) {
  return (
    <Link href={`/registrations/${item.slug}`} className="filing-tile">
      <FilingMark slug={item.slug} mark={item.mark} size={52} />
      <span className="filing-tile-name">{item.name}</span>
      <span className="filing-tile-for">{item.forWhom}</span>
      <span className="filing-fees">
        <span>
          <small>Our fee</small>
          <strong className="mono">{item.ourFee}</strong>
          {item.planFee ? <small>Starter clients {item.planFee}</small> : null}
        </span>
        <span>
          <small>Government fee</small>
          <strong className="mono">{item.govFee}</strong>
          <small>paid in your name</small>
        </span>
      </span>
      {item.includedIn.length ? (
        <span className="filing-included">
          <Icon name="ShieldCheck" size={16} /> Our fee included in {item.includedIn.map((s) => getStage(s)!.name).join(" and ")}
        </span>
      ) : (
        <span className="filing-included is-agent">
          <Icon name="GlobeHemisphereWest" size={16} /> Coordinated with a registered agent
        </span>
      )}
      <span className="filing-more">What you need <Arw /></span>
    </Link>
  );
}

export default function RegistrationsPage() {
  return (
    <Layout cta={{ title: "Not sure which filing you need? Ask us.", message: ASK, label: "Ask which filing I need", webu: "pointing" }}>
      <BreadcrumbLd seoKey="registrations" />
      <PageHero
        kicker="Registrations · Webify File"
        title="GST, Udyam, IEC — filed for you."
        sub="Our fee and the government fee shown separately. Government fees are paid in your name."
        cta={<WhatsAppCTA message={ASK} context="hero" label="Ask which filing I need" />}
        visual={
          <div className="reg-hero-art">
            <ArchWindows slots={["/images/snapshots/registrations.webp", "IMG-B07"]} priority />
            <FilingStamp className="reg-hero-stamp" />
          </div>
        }
        tone="indigo"
      />

      <section className="section surface-2" id="filings" aria-labelledby="filings-title">
        <div className="container">
          <SectionHead kicker="India" id="filings-title" title="The filings most businesses need." sub="We prepare and submit using documents and one-time passwords you share. Approval is the department's." />
          <div className="filing-grid">
            {registrations.slice(0, 3).map((r) => (
              <FilingTile key={r.slug} item={r} />
            ))}
          </div>
          <div className="launch-banner">
            <Icon name="RocketLaunch" size={26} />
            <p>
              <strong>Starting from scratch?</strong> Registrations are part of the Launch path — with brand, website, payments and WhatsApp.
            </p>
            <Link href="/solutions/launch" className="text-link">
              See the Launch path <Arw />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="abroad" aria-labelledby="abroad-title">
        <div className="container">
          <SectionHead kicker="Selling abroad" id="abroad-title" title="UK VAT and EU IOSS — only if your own site needs them." sub="Marketplace-only sales are often covered by the marketplace. We coordinate with a registered overseas agent or intermediary; their fee is billed by them." />
          <div className="filing-grid is-two">
            {registrations.slice(3).map((r) => (
              <FilingTile key={r.slug} item={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="fees" aria-labelledby="fees-title">
        <div className="container narrow">
          <SectionHead kicker="Two separate numbers" id="fees-title" title="Our fee, and the government's." />
          <FeeDonut />
          <p className="center-note">
            <Link href="/registrations/charges" className="text-link">
              Other charges outside our fee <Arw />
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
