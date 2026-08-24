import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { CheckItem, WhatsAppCta } from "@/components/icons";
import { getService, serviceFeatures, services, WA_CHAT, WA_SERVICES } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service?.title ?? "Services" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <Layout>
      <section className="page-hero">
        <div className="container wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> Webify Bharat service
            </div>
            <h1>{service.title}</h1>
            <p className="muted-copy">
              {service.description} We combine practical implementation with clean
              design and measurable business outcomes.
            </p>
            <WhatsAppCta href={WA_SERVICES}>Discuss this service</WhatsAppCta>
          </div>
          <img src={`/images/services/${service.image}`} alt={service.title} />
        </div>
      </section>

      <section className="section">
        <div className="container real-context">
          <div className="real-context-photo">
            <img
              src={`/images/real/${service.photo}`}
              alt={`${service.title} in a real business setting`}
            />
          </div>
          <div className="real-context-copy">
            <div className="eyebrow">
              <span className="dot" /> In the real business
            </div>
            <h2>{service.headline}</h2>
            <p>{service.story}</p>
            <div className="values">
              <CheckItem>Less manual work</CheckItem>
              <CheckItem>Better customer experience</CheckItem>
              <CheckItem>Clearer visibility</CheckItem>
              <CheckItem>Ready to scale</CheckItem>
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
            <p>
              No generic package dump. We map the customer journey and operational
              process first, then build the right stack around it.
            </p>
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

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Want to see what this could look like for your business?</h2>
              <p>Share your current setup and what you want to improve.</p>
              <WhatsAppCta href={WA_CHAT}>Talk to an expert</WhatsAppCta>
            </div>
            <div className="cta-photo">
              <img
                src="/images/real/growth-success.webp"
                alt="Growing Indian business using better digital systems"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
