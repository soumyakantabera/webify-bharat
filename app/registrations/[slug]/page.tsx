import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { FilingMark } from "@/components/FilingMark";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { BreadcrumbLd } from "@/components/SeoLd";
import { FilingStamp } from "@/components/svg/flows";
import { FeeDonut } from "@/components/viz/FeeDonut";
import { PageHero, SectionHead } from "@/components/tiles";
import { getStage } from "@/lib/offers";
import { pageMetadata } from "@/lib/page-seo";
import { getRegistration, registrationMessage, registrations } from "@/lib/registrations";

export const dynamicParams = false;

export function generateStaticParams() {
  return registrations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`registration:${slug}`);
}

export default async function RegistrationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getRegistration(slug);
  if (!item) notFound();
  const message = registrationMessage(item);
  const label = `Start my ${item.short}`;
  const hasFees = item.ourFee !== "Quoted";

  return (
    <Layout cta={{ title: `Ready to file ${item.short}? Send us a message.`, message, label, webu: "pointing" }}>
      <BreadcrumbLd seoKey={`registration:${item.slug}`} />
      <PageHero
        kicker="Registration"
        title={`${item.name}, filed for you.`}
        sub={item.forWhom}
        cta={<WhatsAppCTA message={message} context="hero" label={label} />}
        visual={
          <div className="reg-detail-art">
            <FilingMark slug={item.slug} mark={item.mark} size={96} />
            <FilingStamp portal={item.portal} className="reg-detail-stamp" />
          </div>
        }
        chips={
          <dl className="reg-fee-strip">
            <div>
              <dt>Our fee</dt>
              <dd className="mono">{item.ourFee}</dd>
            </div>
            <div>
              <dt>Government fee</dt>
              <dd className="mono">{item.govFee}</dd>
            </div>
            {item.includedIn.length ? (
              <div>
                <dt>Included in</dt>
                <dd>{item.includedIn.map((s) => getStage(s)!.name).join(", ")}</dd>
              </div>
            ) : null}
          </dl>
        }
        tone="indigo"
      />

      <section className="section surface-2" id="documents" aria-labelledby="docs-title">
        <div className="container two-col is-top">
          <div>
            <SectionHead kicker="Bring these" id="docs-title" title="Documents checklist." sub="The portal's own list — we don't invent a shorter one." />
            <ul className="doc-checklist">
              {item.documents.map((d, i) => (
                <li key={d} style={{ ["--i" as string]: i }}>
                  <Icon name="ShieldCheck" size={20} /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="not-included">
            <h2 className="h3">What's not included</h2>
            <p>{item.refuse}</p>
            <ul>
              {item.notIncluded.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="portal-link">
              Official portal:{" "}
              <a href={item.portalUrl} target="_blank" rel="noopener noreferrer">
                {item.portal} ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="fees" aria-labelledby="fees-title">
        <div className="container narrow">
          <SectionHead kicker="Fees" id="fees-title" title="Two numbers, never folded together." sub={item.govNote} />
          {hasFees ? <FeeDonut slugs={[item.slug]} /> : <p className="caveat-box">Both fees are quoted after a short chat, before you pay anything.</p>}
          <p className="center-note">
            <Link href="/registrations" className="text-link">
              All filings
            </Link>{" "}
            ·{" "}
            <Link href="/registrations/charges" className="text-link">
              Other charges
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
