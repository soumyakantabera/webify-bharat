import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { RivalBoard } from "@/components/RivalBoard";
import { PageLead } from "@/components/PageIcons";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import { getOffer, offerFamily, offers } from "@/lib/offers";
import { filingsIn } from "@/lib/registrations";
import { waLink } from "@/lib/site";

const BASE = "https://webify-bharat.vercel.app";

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

export default async function OfferPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  const family = offerFamily(offer.kind);
  const chat = waLink(`Hi, I want the ${offer.name} ${offer.kind} (${offer.price} incl. GST)`);
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
            <small>incl. GST</small>
          </div>
          <p className="price-best-for">{offer.bestFor}</p>
          {offer.kind === "package" ? (
            <div className="gift-band">
              <strong>
                {offer.name === "Launch" && "GST and Udyam ride in this price."}
                {offer.name === "Growth" && "GST, Udyam, and IEC ride in this price."}
                {offer.name === "Command" && "Every filing we sell rides in this price."}
              </strong>
              <p>
                Our fee is ₹0. You do not get a second invoice for the paperwork.
                {offer.name !== "Launch" ? " IEC still pays ₹500 to DGFT, in your name." : ""}
                {offer.name === "Command" ? " An EU intermediary, if the shop needs one, is still their bill." : ""}
              </p>
              <div className="filing-pack">
                {filingsIn(offer.name as "Launch" | "Growth" | "Command").map((item) => (
                  <span className={`filing-chip chip-${item.slug}`} key={item.slug}>
                    {item.name.replace(" registration", "").replace(" (import export code)", "").replace(" coordination", "")}
                    <b>in</b>
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          <div className="offer-actions">
            <WhatsAppCta href={chat}>Choose {offer.name}</WhatsAppCta>
            <Link className="btn btn-secondary" href="/pricing">All packages</Link>
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
              <div className="eyebrow"><span className="dot" /> Against their stages</div>
              <h2>
                What the other companies charge you to climb. <span>And why {offer.name} does not.</span>
              </h2>
            </div>
            <p>We are not scoring Launch against Growth. The comparison is the ladder those companies already sell — listing, pack, ads — versus a system you own.</p>
          </div>
          <RivalBoard slug={offer.slug} />
          <div className="control-grid" style={{ marginTop: 18 }}>
            <article className="control-card rent">
              <p className="control-kicker">{offer.rentLabel}</p>
              <h3>Rent on intent you already earned.</h3>
              <ul>{offer.vs.map((row) => <li key={row.they}>{row.they}</li>)}</ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">{offer.ownLabel}</p>
              <h3>{offer.desc}</h3>
              <ul>{offer.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          </div>
          <p className="control-note">{offer.note} Gateway MDR, shipping and WhatsApp conversation charges stay outside the build fee.</p>
        </div>
      </section>

      <section className="section">
        <div className="container process-wrap">
          <div>
            <div className="eyebrow"><span className="dot" /> How {offer.name} ships</div>
            <h2 className="display-h2">Four moves.<br /><span>Then it is yours.</span></h2>
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
            {offer.features.map((feature) => <CheckItem key={feature}>{feature}</CheckItem>)}
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
