import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-seo";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
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
    "@id": `${BASE}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${BASE}/services/${service.slug}`,
    image: `${BASE}/images/services/${service.image}`,
    provider: {
      "@type": "Organization",
      name: "Webify Bharat",
      url: BASE,
    },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <section className="page-hero">
        <div className="container wrap">
          <div className="page-copy">
            <PageLead icon={service.slug} kicker="Webify Bharat service" />
            <h1>{service.headline}</h1>
            <p className="muted-copy">{service.description}</p>
            <div className="offer-actions">
              <WhatsAppCta href={WA_SERVICES}>Discuss this service</WhatsAppCta>
              <Link className="btn btn-secondary" href="/services">
                All services
              </Link>
            </div>
            <div className="offer-switch">
              {services.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className={item.slug === service.slug ? "is-on" : undefined}
                >
                  {item.title.split("&")[0].trim()}
                </Link>
              ))}
            </div>
          </div>
          <img
            src={`/images/services/${service.image}`}
            alt={service.title}
            width={800}
            height={600}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <SeoChunk pageKey={`service:${service.slug}`} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Comparison
              </div>
              <h2>
                {compare.rentLabel} <span>vs this service.</span>
              </h2>
            </div>
            <p>Papaya is the leak. Teal is what you keep. The bar grows in once, then the cards lift like the rest of the site.</p>
          </div>
          <div className="offer-viz">
            <article className="offer-meter">
              <h3>Where the customer goes</h3>
              {compare.bars.map((bar, i) => (
                <div className="meter-row" key={bar.label}>
                  <div className="meter-label">
                    <span>{bar.label}</span>
                  </div>
                  <div className="meter-track">
                    <div className="meter-fill rent" style={{ width: `${bar.rent}%`, animationDelay: `${i * 0.12}s` }} />
                    <div className="meter-fill own" style={{ width: `${bar.own}%`, animationDelay: `${0.08 + i * 0.12}s` }} />
                  </div>
                  <div className="meter-notes">
                    <span>{bar.rentNote}</span>
                    <span>{bar.ownNote}</span>
                  </div>
                </div>
              ))}
            </article>
            <div className="real-context-photo">
              <img
                src={`/images/real/${service.photo}`}
                alt={`${service.title} in a real Indian business`}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="control-grid" style={{ marginTop: 18 }}>
            <article className="control-card rent">
              <p className="control-kicker">{compare.rentLabel}</p>
              <h3>Rent on people who already wanted you.</h3>
              <ul>
                {compare.vs.map((row) => (
                  <li key={row.they}>{row.they}</li>
                ))}
              </ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">{compare.ownLabel}</p>
              <h3>{service.headline}</h3>
              <ul>
                {compare.vs.map((row) => (
                  <li key={row.you}>{row.you}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> All six services
              </div>
              <h2>
                Same stack. <span>{service.title} is highlighted.</span>
              </h2>
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
                    <td key={item.slug} className={item.slug === service.slug ? "is-current" : undefined}>
                      {row.cells[item.slug]}
                    </td>
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
            <img
              src={`/images/services/${service.image}`}
              alt={service.title}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="real-context-copy">
            <div className="eyebrow">
              <span className="dot" /> In the real business
            </div>
            <h2>{service.story}</h2>
            <div className="values">
              {compare.includes.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> What we build
              </div>
              <h2>
                A system designed around <span>your workflow.</span>
              </h2>
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

      {serviceArticles[service.slug] ? (
        <ArticleBlock article={serviceArticles[service.slug]} />
      ) : null}

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
              <img
                src="/images/real/growth-success.webp"
                alt="Growing Indian business using better digital systems"
                width={640}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
