import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { ComparisonChart, FamilyChart } from "@/components/ComparisonChart";
import { PageLead } from "@/components/PageIcons";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import {
  addonMatrix,
  getOffer,
  offerFamily,
  offers,
  packageMatrix,
  type CompareCell,
} from "@/lib/offers";
import { waLink } from "@/lib/site";

const BASE = "https://webify-bharat.vercel.app";

const familyScores: Record<string, Record<string, number>> = {
  launch: { Fit: 55, Payments: 15, Automation: 35, Support: 40 },
  growth: { Fit: 88, Payments: 90, Automation: 85, Support: 72 },
  command: { Fit: 100, Payments: 100, Automation: 95, Support: 100 },
  small: { Fit: 60, Catalogue: 50, Ops: 30, Dealers: 8 },
  medium: { Fit: 86, Catalogue: 80, Ops: 75, Dealers: 20 },
  expanding: { Fit: 100, Catalogue: 100, Ops: 95, Dealers: 90 },
};

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return {};
  const title = `${offer.name} ${offer.kind} ${offer.price} incl. GST | Webify Bharat`;
  const description = `${offer.lead} Starting ${offer.price} including 18% GST.`;
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/pricing/${offer.slug}` },
  };
}

function Cell({ value }: { value: CompareCell }) {
  if (value === "yes") return <span className="cell-yes">Yes</span>;
  if (value === "no") return <span className="cell-no">\u2014</span>;
  return <span>{value}</span>;
}

export default async function OfferPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  const family = offerFamily(offer.kind);
  const matrix = offer.kind === "package" ? packageMatrix : addonMatrix;
  const chat = waLink(`Hi, I want the ${offer.name} ${offer.kind} (${offer.price} incl. GST)`);
  const metricNames = Object.keys(familyScores[offer.slug] ?? {});
  const metrics = metricNames.map((label) => ({
    label,
    points: family.map((item) => ({
      name: item.name,
      href: `/pricing/${item.slug}`,
      value: familyScores[item.slug]?.[label] ?? 0,
      note: item.bestFor,
      current: item.slug === offer.slug,
    })),
  }));
  const ld = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${offer.name} ${offer.kind}`,
    description: offer.lead,
    url: `${BASE}/pricing/${offer.slug}`,
    priceCurrency: "INR",
    price: offer.price.replace(/[^\d]/g, ""),
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Webify Bharat", url: BASE },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="page-hero offer-hero">
        <div className="container page-copy">
          <PageLead icon="pricing" kicker={offer.kind === "package" ? "Package" : "E-commerce addon"} />
          <h1>
            {offer.headline}
            <br />
            <span>{offer.accent}</span>
          </h1>
          <p className="muted-copy">{offer.lead}</p>
          <div className="offer-price">
            {offer.price}
            <small>starting \u00b7 incl. GST</small>
          </div>
          <p className="price-best-for">{offer.bestFor}</p>
          <div className="offer-actions">
            <WhatsAppCta href={chat}>Choose {offer.name}</WhatsAppCta>
            <Link className="btn btn-secondary" href="/pricing">
              All packages
            </Link>
          </div>
          <div className="offer-switch">
            {family.map((item) => (
              <Link key={item.slug} href={`/pricing/${item.slug}`} className={item.slug === offer.slug ? "is-on" : undefined}>
                {item.name} {item.price}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Comparison
              </div>
              <h2>
                {offer.rentLabel} <span>vs {offer.name}.</span>
              </h2>
            </div>
            <p>Hover a row to pin the note. Toggle papaya or teal to hide a series. Click a sibling bar to open that page.</p>
          </div>
          <div className="offer-viz">
            <ComparisonChart title="Where the money and the customer go" rentLabel={offer.rentLabel} ownLabel={offer.name} rows={offer.bars} />
            <FamilyChart title="Compare the family" metrics={metrics} />
          </div>
          <div className="control-grid" style={{ marginTop: 18 }}>
            <article className="control-card rent">
              <p className="control-kicker">{offer.rentLabel}</p>
              <h3>Rent on intent you already earned.</h3>
              <ul>
                {offer.vs.map((row) => (
                  <li key={row.they}>{row.they}</li>
                ))}
              </ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">{offer.ownLabel}</p>
              <h3>{offer.desc}</h3>
              <ul>
                {offer.vs.map((row) => (
                  <li key={row.you}>{row.you}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="control-note">{offer.note} Gateway MDR, shipping and WhatsApp conversation charges stay outside the build fee.</p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Side by side
              </div>
              <h2>
                {offer.kind === "package" ? "Launch, Growth, Command." : "Small, Medium, Expanding."} <span>{offer.name} is highlighted.</span>
              </h2>
            </div>
          </div>
          <table className="offer-matrix">
            <thead>
              <tr>
                <th> </th>
                {family.map((item) => (
                  <th key={item.slug} className={item.slug === offer.slug ? "is-current" : undefined}>
                    <Link href={`/pricing/${item.slug}`}>{item.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {family.map((item) => (
                    <td key={item.slug} className={item.slug === offer.slug ? "is-current" : undefined}>
                      <Cell value={row.cells[item.slug]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container process-wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> How {offer.name} ships
            </div>
            <h2 className="display-h2">
              Four moves.
              <br />
              <span>Then it is yours.</span>
            </h2>
            <div className="steps">
              {offer.steps.map((step, index) => (
                <div className="step" key={step.title}>
                  <div className="step-num">{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="values">
            {offer.features.map((feature) => (
              <CheckItem key={feature}>{feature}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Start with {offer.name}.</h2>
              <p>{offer.price} incl. GST to build. Not a fee on the next organic customer.</p>
              <WhatsAppCta href={chat}>Chat about {offer.name}</WhatsAppCta>
            </div>
            <div className="image-wrap cta-real-photo">
              <img src="/images/real/growth-success.webp" alt="Indian business owner after setting up an owned website and UPI" width={640} height={400} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
