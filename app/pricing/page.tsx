import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("pricing");

import Layout from "@/components/Layout";
import { SeoChunk } from "@/components/SeoChunk";
import { ArticleBlock } from "@/components/ArticleBlock";
import { pricingArticle } from "@/lib/seo-copy";
import { PageLead } from "@/components/PageIcons";
import { FaqSection } from "@/components/FaqSection";
import { getFaq } from "@/lib/faqs";
import { WhatsAppCta } from "@/components/icons";
import { ecommerceAddons } from "@/lib/ecommerce-addons";
import { plans, WA_PACKAGES } from "@/lib/site";

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
            Clear starting points for common needs. Final scope depends on your actual
            business workflow and integrations. GST usually extra — ask on the proposal.
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
              Add e-commerce below when you need a catalogue you own.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                className={`price-card${plan.popular ? " popular" : ""}`}
                key={plan.name}
              >
                <div className="price-card-top">
                  {plan.popular ? (
                    <div className="badge-row">
                      <span className="badge">Most popular</span>
                    </div>
                  ) : (
                    <div className="badge-row badge-row-spacer" aria-hidden="true">
                      <span className="badge badge-ghost">Package</span>
                    </div>
                  )}
                  <h2>{plan.name}</h2>
                  <p className="price-desc">{plan.desc}</p>
                  <div className="price">
                    {plan.price}
                    <small> starting</small>
                  </div>
                </div>
                <ul className="list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="price-card-cta">
                  <WhatsAppCta href={WA_PACKAGES} className="btn btn-primary price-cta">
                    Choose {plan.name}
                  </WhatsAppCta>
                </div>
              </div>
            ))}
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
              Add a catalogue and checkout on your domain so repeat buyers skip Amazon and
              Flipkart fee stacks. Small, Medium or Expanding — pick by product count and
              ops, not by marketplace ambition.
            </p>
          </div>

          <div className="pricing-grid">
            {ecommerceAddons.map((addon) => (
              <div
                className={`price-card price-card-addon${addon.popular ? " popular" : ""}`}
                key={addon.name}
              >
                <div className="price-card-top">
                  <div className="badge-row">
                    <span className="badge">{addon.tag}</span>
                    {addon.popular ? <span className="badge badge-hot">Most chosen</span> : null}
                  </div>
                  <h2>{addon.name}</h2>
                  <p className="price-best-for">{addon.bestFor}</p>
                  <p className="price-desc">{addon.desc}</p>
                  <div className="price">
                    {addon.price}
                    <small> starting · addon</small>
                  </div>
                </div>
                <ul className="list">
                  {addon.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="price-note">{addon.note}</p>
                <div className="price-card-cta">
                  <WhatsAppCta href={WA_PACKAGES} className="btn btn-primary price-cta">
                    Discuss {addon.name} e-commerce
                  </WhatsAppCta>
                </div>
              </div>
            ))}
          </div>

          <p className="pricing-footnote">
            Gateway MDR, shipping partner fees and Meta/WhatsApp conversation charges stay
            outside these build fees. We list them on the proposal. E-commerce addons sit on
            top of a Launch, Growth or Command foundation — not instead of a site.
          </p>
        </div>
      </section>

      <ArticleBlock article={pricingArticle} />

      <FaqSection block={getFaq("pricing")} />
    </Layout>
  );
}
