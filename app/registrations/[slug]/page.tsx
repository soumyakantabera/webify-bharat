import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";
import { WhatsAppCta } from "@/components/icons";
import { getRegistration, registrationChat, registrations } from "@/lib/registrations";

export function generateStaticParams() {
  return registrations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getRegistration(slug);
  if (!item) return {};
  return {
    title: `${item.name} — ${item.ourFee} incl. GST, government fee ${item.govFee}`,
    description: `${item.forWhom} Filed on ${item.portal}. ${item.govNote}`,
  };
}

export default async function RegistrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getRegistration(slug);
  if (!item) notFound();

  return (
    <Layout>
      <section className="page-hero offer-hero">
        <div className="container page-copy">
          <PageLead icon="registrations" kicker="Registration" />
          <h1>
            {item.name}
            <br />
            <span>Filed on {item.portal}. We are not the department.</span>
          </h1>
          <p className="muted-copy">{item.forWhom}</p>
          <div className="reg-prices reg-prices-hero">
            <div>
              <span>Our fee</span>
              <strong>{item.ourFee}</strong>
              <small>incl. 18% GST</small>
            </div>
            <div>
              <span>Government</span>
              <strong>{item.govFee}</strong>
              <small>not inside our fee</small>
            </div>
          </div>
          <div className="gift-band">
            <strong>Our fee is ₹0 with {item.ridesWith}.</strong>
            <p>
              {item.ourFee} is only if you want the filing and no website.{" "}
              {item.govFee === "₹0"
                ? "The portal does not charge either."
                : `The government line stays ${item.govFee}, paid to them, not marked up.`}
            </p>
          </div>
          <div className="offer-actions">
            <WhatsAppCta href={registrationChat(item)}>Start {item.name}</WhatsAppCta>
            <Link className="btn btn-secondary" href="/registrations/charges">Additional charges</Link>
          </div>
          <div className="offer-switch">
            {registrations.map((other) => (
              <Link key={other.slug} href={`/registrations/${other.slug}`} className={other.slug === item.slug ? "is-on" : undefined}>
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="control-grid">
            <article className="control-card rent">
              <p className="control-kicker">Bring these</p>
              <h3>The portal asks for this. We do not invent a shorter list.</h3>
              <ul>
                {item.documents.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">We will not pretend</p>
              <h3>{item.refuse}</h3>
              <ul>
                {item.notIncluded.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="control-note">
            Often a few working days after the portal has a complete file. KYC and a
            department query can take longer. Approval is theirs, not ours.{" "}
            <Link href="/registrations">All filings</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
