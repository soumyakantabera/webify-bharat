import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("pricing");

import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Layers,
  Package,
  Rocket,
  Store,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { pricingArticle } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { WhatsAppCta } from "@/components/icons";
import { ecommerceAddons } from "@/lib/ecommerce-addons";
import { registrationChat, registrations } from "@/lib/registrations";
import { plans, WA_PACKAGES } from "@/lib/site";

const planIcons: Record<string, LucideIcon> = {
  Launch: Rocket,
  Growth: TrendingUp,
  Command: Gauge,
};

const addonIcons: Record<string, LucideIcon> = {
  Small: Package,
  Medium: Store,
  Expanding: Layers,
};

const fences: Record<string, string> = {
  Launch: "Up to 5 pages · 1 language · 2 revision rounds · 2–4 weeks if your content is in. Not category leads.",
  Growth: "Launch, plus a gateway on your account · up to 4 WhatsApp flows · 3–5 weeks. KYC can add time.",
  Command: "Growth, plus up to 3 connections · one Monday view · 4–6 weeks. Not an open rebuild.",
  Small: "About 50 products · sits on Launch or Growth · 2 revision rounds. Not a second gateway invoice.",
  Medium: "About 200 products · includes Small. Do not buy both.",
  Expanding: "Multi-category catalogue and one dealer enquiry path · includes Medium. Not a second outlet.",
};

const planSlugs: Record<string, string> = {
  Launch: "launch",
  Growth: "growth",
  Command: "command",
};

const addonSlugs: Record<string, string> = {
  Small: "small",
  Medium: "medium",
  Expanding: "expanding",
};

export default function PricingPage() {
  return (
    <Layout>
      <section className="page-hero pricing-hero">
        <div className="container page-copy">
          <PageLead icon="pricing" kicker="Pricing" />
          <h1>
            Start simple.
            <br />
            <span>Build as you grow.</span>
          </h1>
          <p className="muted-copy">
            The number on a shop card is the invoice. 18% GST is already inside it, for the
            fence written under the price. A bigger site is a new number, agreed before you
            pay. Filings are further down. Their government fee is a second number, never
            folded in.
          </p>
        </div>
      </section>

      <SeoChunk pageKey="pricing" />

      <section className="section pricing-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Core packages
              </div>
              <h2>
                Website and digital ops <span>foundations.</span>
              </h2>
            </div>
            <p>
              Launch, Growth and Command cover the site, WhatsApp and payments stack.
              Prices start from ₹9,999 incl. GST. Add e-commerce below when you need a
              catalogue you own.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => {
              const Icon = planIcons[plan.name] ?? Rocket;
              const slug = planSlugs[plan.name];
              return (
                <div
                  className={`price-card${plan.popular ? " popular" : ""}`}
                  key={plan.name}
                >
                  <div className="price-card-top">
                    <div className="price-icon-row">
                      <span className="price-icon" aria-hidden="true">
                        <Icon size={22} strokeWidth={2.2} />
                      </span>
                      {plan.popular ? (
                        <span className="badge">Most popular</span>
                      ) : (
                        <span className="badge badge-soft">Package</span>
                      )}
                    </div>
                    <h2>
                      <Link href={`/pricing/${slug}`}>{plan.name}</Link>
                    </h2>
                    <p className="price-desc">{plan.desc}</p>
                    <div className="price">
                      {plan.price}
                      <small>incl. GST</small>
                    </div>
                    <p className="price-fence">{fences[plan.name]}</p>
                  </div>
                  <ul className="list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="price-card-cta">
                    <Link className="btn btn-secondary price-cta" href={`/pricing/${slug}`}>
                      Compare {plan.name}
                    </Link>
                    <WhatsAppCta href={WA_PACKAGES} className="btn btn-primary price-cta">
                      Choose {plan.name}
                    </WhatsAppCta>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft pricing-section" id="ecommerce-addons">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> E-commerce addons
              </div>
              <h2>
                Own the store.
                <br />
                <span>Three sizes.</span>
              </h2>
            </div>
            <p>
              Add a catalogue on your domain. Keep a marketplace for a stranger’s first
              order. Small, Medium, and Expanding are sized by product count. Every addon
              price includes 18% GST and sits on top of a site.
            </p>
          </div>

          <div className="pricing-grid">
            {ecommerceAddons.map((addon) => {
              const Icon = addonIcons[addon.name] ?? Package;
              const slug = addonSlugs[addon.name];
              return (
                <div
                  className={`price-card price-card-addon${addon.popular ? " popular" : ""}`}
                  key={addon.name}
                >
                  <div className="price-card-top">
                    <div className="price-icon-row">
                      <span className="price-icon price-icon-addon" aria-hidden="true">
                        <Icon size={22} strokeWidth={2.2} />
                      </span>
                      <span className="badge">{addon.tag}</span>
                      {addon.popular ? (
                        <span className="badge badge-hot">Most chosen</span>
                      ) : null}
                    </div>
                    <h2>
                      <Link href={`/pricing/${slug}`}>{addon.name}</Link>
                    </h2>
                    <p className="price-best-for">{addon.bestFor}</p>
                    <p className="price-desc">{addon.desc}</p>
                    <div className="price">
                      {addon.price}
                      <small>incl. GST</small>
                    </div>
                    <p className="price-fence">{fences[addon.name]}</p>
                  </div>
                  <ul className="list">
                    {addon.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="price-note">{addon.note}</p>
                  <div className="price-card-cta">
                    <Link className="btn btn-secondary price-cta" href={`/pricing/${slug}`}>
                      Compare {addon.name}
                    </Link>
                    <WhatsAppCta href={WA_PACKAGES} className="btn btn-primary price-cta">
                      Choose {addon.name}
                    </WhatsAppCta>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="stack-grid">
            <article>
              <strong>₹18,998</strong>
              <span>Launch + Small. Five-page site and about 50 products. Both prices include GST.</span>
            </article>
            <article>
              <strong>₹38,998</strong>
              <span>Growth + Medium. Medium includes Small. Do not buy both. The gateway is the Growth account, not a second invoice.</span>
            </article>
            <article>
              <strong>₹54,998</strong>
              <span>Growth + Expanding. Expanding includes Medium. One dealer enquiry path. Not a second outlet.</span>
            </article>
          </div>
          <p className="pricing-footnote">
            Package and addon build fees include 18% GST. Gateway MDR, shipping partner
            fees and Meta/WhatsApp conversation charges stay outside these build fees — we
            list them on the <Link href="/registrations/charges">additional charges</Link> page. E-commerce addons sit on top of a Launch, Growth or
            Command foundation — not instead of a site.
          </p>
        </div>
      </section>

      <section className="section pricing-section" id="filings">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Filings
              </div>
              <h2>
                Paper, priced apart
                <br />
                <span>from the website.</span>
              </h2>
            </div>
            <p>
              Not a ₹499 mill. Documents checked, one clean refile of the same facts
              included. India has no general VAT for a normal shop. VAT here is the UK
              and the EU only.
            </p>
          </div>
          <div className="pricing-grid filings-grid">
            {registrations.map((item) => (
              <article className="price-card price-card-filing" key={item.slug}>
                <div className="price-card-top">
                  <p className="price-best-for">Filed on {item.portal}</p>
                  <h2>
                    <Link href={`/registrations/${item.slug}`}>{item.name}</Link>
                  </h2>
                  <p className="price-desc">{item.forWhom}</p>
                  <div className="reg-prices">
                    <div>
                      <span>Our fee</span>
                      <strong>{item.ourFee}</strong>
                      <small>incl. GST</small>
                    </div>
                    <div>
                      <span>Government</span>
                      <strong>{item.govFee}</strong>
                      <small>separate</small>
                    </div>
                  </div>
                </div>
                <div className="price-card-cta">
                  <Link className="btn btn-secondary price-cta" href={`/registrations/${item.slug}`}>
                    What you need
                  </Link>
                  <WhatsAppCta href={registrationChat(item)} className="btn btn-primary price-cta">
                    Start filing
                  </WhatsAppCta>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            Hosting, the domain, gateway MDR, a digital signature, and the EU
            intermediary are on the{" "}
            <Link href="/registrations/charges">additional charges</Link> page. They are
            not inside these fees.
          </p>
        </div>
      </section>

      <ArticleBlock article={pricingArticle} />

      <FaqSection block={getFaq("pricing")} />
    </Layout>
  );
}
