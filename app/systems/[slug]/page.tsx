import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-seo";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { RentOwnBoard } from "@/components/RentOwnBoard";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { serviceArticles } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import { getServiceCompare } from "@/lib/service-compare";
import { getService, services, WA_CHAT, WA_SERVICES } from "@/lib/site";

const BASE = "https://webify-bharat.vercel.app";

const buildSteps: Record<string, { title: string; detail: string }[]> = {
  site: [
    { title: "Page map", detail: "Up to five pages. Home, what you sell, contact, and the two that match the trade." },
    { title: "One language", detail: "The language the counter already uses. A second language is a quoted extra." },
    { title: "WhatsApp click", detail: "Opens the number you already answer. Not a new inbox we own." },
    { title: "Maps link", detail: "Google Business Profile points at your URL. The pin is still free, and still yours." },
    { title: "Two revision rounds", detail: "After that, changes are a written extra, not a surprise." },
    { title: "Go-live list", detail: "Domain login in your name, form tested, no promise of a ranking or a lead count." },
  ],
  store: [
    { title: "SKU cap", detail: "Small is about 50. Medium is about 200. Past that, the number moves first." },
    { title: "Your catalogue", detail: "Products live on your domain. A marketplace can stay for the first stranger." },
    { title: "Checkout", detail: "Uses the gateway account from Growth if you already have it. Not a second invoice." },
    { title: "WhatsApp handoff", detail: "The order can land in the chat your staff already open." },
    { title: "Pincode honesty", detail: "Medium states zones before payment. We do not invent a courier rate." },
    { title: "Dealer path", detail: "Only Expanding. One enquiry path. Not a second outlet and not stock software." },
  ],
  pay: [
    { title: "Your account", detail: "Razorpay, Cashfree, or PayU in the business name. Not our merchant ID." },
    { title: "UPI and cards", detail: "The methods that account already supports. MDR is their rate." },
    { title: "Settlement", detail: "Shop money lands in the business account, not a personal QR history." },
    { title: "Refund path", detail: "A failed or returned payment is a record, not a screenshot." },
    { title: "Invoice line", detail: "A GST-ready invoice option. We are not your CA." },
    { title: "What is outside", detail: "MDR, and any WhatsApp conversation charge, stay off the build fee." },
  ],
  chat: [
    { title: "Your number", detail: "The chat stays on the phone the shop already uses." },
    { title: "Four flows", detail: "On Growth: hours, status, a reminder, and one you name. Not an unlimited bot." },
    { title: "A person", detail: "Odd cases go to a human. The bot does not pretend to be the doctor." },
    { title: "Business app or API", detail: "The free app when it is enough. API only when you ask, with Meta’s charges named." },
    { title: "Staff", detail: "Who answers is written down. Not a shared handset with no owner." },
    { title: "No lead pack", detail: "This does not buy enquiries. It answers the ones you already get." },
  ],
  pulse: [
    { title: "Three numbers", detail: "Enquiries, collections, and what is stuck. Not a forty-tile board." },
    { title: "One Monday view", detail: "Command joins up to three systems into that view." },
    { title: "Source", detail: "The site and the gateway you own. Not a rented dashboard login." },
    { title: "No vanity", detail: "We do not show a sample revenue chart as if it were yours." },
    { title: "Who looks", detail: "The owner, on Monday. Not a report nobody opens." },
    { title: "Outside", detail: "A data warehouse, and ads reporting, are a different quote." },
  ],
  ledger: [
    { title: "Invoice habit", detail: "GST-ready invoices from the checkout. Not a return filing." },
    { title: "A drawer, sorted", detail: "Bills in one place the accountant can open." },
    { title: "We are not the CA", detail: "Registration filings are a separate page, with the government fee shown." },
    { title: "GST, Udyam, IEC", detail: "Those have their own prices. They are not bundled into a website." },
    { title: "Due dates", detail: "A reminder of what you told us. Not legal advice." },
    { title: "Your login", detail: "The GST portal stays in your name. We do not keep the only access." },
  ],
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`service:${slug}`);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const compare = getServiceCompare(slug);
  if (!service || !compare) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/systems/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${BASE}/systems/${service.slug}`,
    image: `${BASE}${service.image}`,
    provider: { "@type": "Organization", name: "Webify Bharat", url: BASE },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
            <PageLead icon={service.slug} kicker="Webify Bharat service" />
            <h1>{service.headline}</h1>
            <p className="muted-copy">{service.description}</p>
            <div className="offer-actions">
              <WhatsAppCta href={WA_SERVICES}>Discuss this service</WhatsAppCta>
              <Link className="btn btn-secondary" href="/systems">All services</Link>
            </div>
            <div className="offer-switch">
              {services.map((item) => (
                <Link key={item.slug} href={`/systems/${item.slug}`} className={item.slug === service.slug ? "is-on" : undefined}>
                  {item.title.split("&")[0].trim()}
                </Link>
              ))}
            </div>
          </div>
          <img src={asset(service.image)} alt={service.title} width={800} height={600} fetchPriority="high" decoding="async" />
        </div>
      </section>

      <SeoChunk pageKey={`service:${service.slug}`} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> Against their stages</div>
              <h2>How the other options get more expensive. <span>Why this does not.</span></h2>
            </div>
            <p>Not a chart of our own services against each other. Their product ladder — free, then a pack, then ads — versus work that stays on your side.</p>
          </div>
          <RentOwnBoard slug={service.slug} />
          <div className="control-grid" style={{ marginTop: 18 }}>
            <article className="control-card rent">
              <p className="control-kicker">{compare.rentLabel}</p>
              <h3>What you keep paying them for.</h3>
              <ul>{compare.vs.map((row) => <li key={row.they}>{row.they}</li>)}</ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">{compare.ownLabel}</p>
              <h3>{service.headline}</h3>
              <ul>{compare.vs.map((row) => <li key={row.you}>{row.you}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container real-context">
          <div className="real-context-photo">
            <img src={asset(`/images/real/${service.photo}`)} alt="" width={800} height={600} loading="lazy" decoding="async" />
            <p className="staged-note">Staged. Not a customer.</p>
          </div>
          <div className="real-context-copy">
            <div className="eyebrow"><span className="dot" /> In the real business</div>
            <h2>{service.story}</h2>
            <div className="values">
              {compare.includes.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> What we build</div>
              <h2>A system designed around <span>your workflow.</span></h2>
            </div>
          </div>
          <div className="feature-grid">
            {buildSteps[service.slug].map((step, index) => (
              <div className="feature" key={step.title}>
                <div className="icon">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceArticles[service.slug] ? <ArticleBlock article={serviceArticles[service.slug]} /> : null}
      <FaqSection block={getFaq(`service:${service.slug}`)} />

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Want this without the rent?</h2>
              <p>{service.description}</p>
              <WhatsAppCta href={WA_CHAT}>Talk to an expert</WhatsAppCta>
            </div>
            <div className="cta-photo">
              <img src={asset("/images/real/growth-success.webp")} alt="Growing Indian business using better digital systems" width={640} height={400} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
