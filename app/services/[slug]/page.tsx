import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-seo";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { ComparisonChart, FamilyChart } from "@/components/ComparisonChart";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { serviceArticles } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import { getServiceCompare, serviceMatrix } from "@/lib/service-compare";
import { getService, serviceFeatures, services, WA_CHAT, WA_SERVICES } from "@/lib/site";

const BASE = "https://webify-bharat.vercel.app";

const serviceScores: Record<string, Record<string, number>> = {
  websites: { Ownership: 92, "Leak closed": 80, "Package fit": 70 },
  ecommerce: { Ownership: 88, "Leak closed": 84, "Package fit": 60 },
  payments: { Ownership: 86, "Leak closed": 90, "Package fit": 78 },
  whatsapp: { Ownership: 94, "Leak closed": 82, "Package fit": 75 },
  analytics: { Ownership: 74, "Leak closed": 70, "Package fit": 85 },
  compliance: { Ownership: 72, "Leak closed": 76, "Package fit": 68 },
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
  const metricNames = Object.keys(serviceScores[service.slug] ?? {});
  const metrics = metricNames.map((label) => ({
    label,
    points: services.map((item) => ({
      name: item.title.split("&")[0].trim(),
      href: `/services/${item.slug}`,
      value: serviceScores[item.slug]?.[label] ?? 0,
      note: item.description,
      current: item.slug === service.slug,
    })),
  }));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${BASE}/services/${service.slug}`,
    image: `${BASE}/images/services/${service.image}`,
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
              <Link className="btn btn-secondary" href="/services">All services</Link>
            </div>
            <div className="offer-switch">
              {services.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className={item.slug === service.slug ? "is-on" : undefined}>
                  {item.title.split("&")[0].trim()}
                </Link>
              ))}
            </div>
          </div>
          <img src={`/images/services/${service.image}`} alt={service.title} width={800} height={600} fetchPriority="high" decoding="async" />
        </div>
      </section>

      <SeoChunk pageKey={`service:${service.slug}`} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> Comparison</div>
              <h2>{compare.rentLabel} <span>vs this service.</span></h2>
            </div>
            <p>Hover a row to pin the note. Toggle a series off. Click another service to open its chart.</p>
          </div>
          <div className="offer-viz">
            <ComparisonChart title="Where the customer goes" rentLabel={compare.rentLabel} ownLabel={service.title.split("&")[0].trim()} rows={compare.bars} />
            <FamilyChart title="All six services" metrics={metrics} />
          </div>
          <div className="control-grid" style={{ marginTop: 18 }}>
            <article className="control-card rent">
              <p className="control-kicker">{compare.rentLabel}</p>
              <h3>Rent on people who already wanted you.</h3>
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

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> All six services</div>
              <h2>Same stack. <span>{service.title} is highlighted.</span></h2>
            </div>
          </div>
          <table className="offer-matrix">
            <thead>
              <tr>
                <th> </th>
                {services.map((item) => (
                  <th key={item.slug} className={item.slug === service.slug ? "is-current" : undefined}>
                    <Link href={`/services/${item.slug}`}>{item.title.split("&")[0].trim()}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceMatrix.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {services.map((item) => (
                    <td key={item.slug} className={item.slug === service.slug ? "is-current" : undefined}>{row.cells[item.slug]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container real-context">
          <div className="real-context-photo">
            <img src={`/images/real/${service.photo}`} alt={`${service.title} in a real Indian business`} width={800} height={600} loading="lazy" decoding="async" />
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
            {serviceFeatures.map((feature, index) => (
              <div className="feature" key={feature}>
                <div className="icon">{index + 1}</div>
                <h3>{feature}</h3>
                <p>Configured to be clear, maintainable and ready for the next stage of growth.</p>
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
              <img src="/images/real/growth-success.webp" alt="Growing Indian business using better digital systems" width={640} height={400} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
