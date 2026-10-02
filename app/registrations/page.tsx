import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";
import { WhatsAppCta } from "@/components/icons";
import { registrations } from "@/lib/registrations";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "GST, Udyam, IEC, UK VAT and EU IOSS filings",
  description:
    "Registration filings for Indian businesses. Government fee and our fee are two numbers. GST ₹4,999, Udyam ₹2,499, IEC ₹4,999 plus ₹500 DGFT. 18% GST is inside our fee.",
};

const chat = waLink("Hi, I want to ask about a registration filing.");

export default function RegistrationsPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container page-copy">
          <PageLead icon="registrations" kicker="Registrations" />
          <h1>
            The paper, filed properly.
            <br />
            <span>Not a ₹499 mill.</span>
          </h1>
          <p className="muted-copy">
            Documents checked, one clean refile of the same facts included, and the
            government fee shown on its own line. We are not the department. India has
            no general VAT registration for a normal shop — GST replaced it. VAT here
            means the UK and the EU only.
          </p>
          <div className="offer-actions">
            <WhatsAppCta href={chat}>Ask which filing you need</WhatsAppCta>
            <Link className="btn btn-secondary" href="/registrations/charges">
              Additional charges
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> India</div>
              <h2>GST, Udyam, and the export code.</h2>
            </div>
            <p>Our fee includes 18% GST. The portal fee, if any, is extra and receipted to you.</p>
          </div>
          <div className="pricing-grid">
            {registrations.slice(0, 3).map((item) => (
              <RegCard key={item.slug} slug={item.slug} name={item.name} ourFee={item.ourFee} govFee={item.govFee} portal={item.portal} forWhom={item.forWhom} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot" /> Selling abroad</div>
              <h2>UK VAT and EU IOSS. Only if your own site needs them.</h2>
            </div>
            <p>Marketplace-only sales are often covered by the marketplace. Do not buy a registration you do not need.</p>
          </div>
          <div className="pricing-grid">
            {registrations.slice(3).map((item) => (
              <RegCard key={item.slug} slug={item.slug} name={item.name} ourFee={item.ourFee} govFee={item.govFee} portal={item.portal} forWhom={item.forWhom} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function RegCard({
  slug,
  name,
  ourFee,
  govFee,
  portal,
  forWhom,
}: {
  slug: string;
  name: string;
  ourFee: string;
  govFee: string;
  portal: string;
  forWhom: string;
}) {
  return (
    <article className="price-card">
      <div className="price-card-top">
        <p className="price-best-for">Filed on {portal}</p>
        <h2>
          <Link href={`/registrations/${slug}`}>{name}</Link>
        </h2>
        <p className="price-desc">{forWhom}</p>
        <div className="reg-prices">
          <div>
            <span>Our fee</span>
            <strong>{ourFee}</strong>
            <small>incl. GST</small>
          </div>
          <div>
            <span>Government</span>
            <strong>{govFee}</strong>
            <small>separate</small>
          </div>
        </div>
      </div>
      <div className="price-card-cta">
        <Link className="btn btn-secondary price-cta" href={`/registrations/${slug}`}>
          What you need
        </Link>
        <Link className="btn btn-primary price-cta" href="/registrations/charges">
          Extra charges
        </Link>
      </div>
    </article>
  );
}
