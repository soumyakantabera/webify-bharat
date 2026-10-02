import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-seo";
export const metadata: Metadata = pageMetadata("pricing");

import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  CreditCard,
  Gauge,
  Layers,
  MapPin,
  MessageCircle,
  Package,
  Rocket,
  ScrollText,
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
import { HeroShot } from "@/components/HeroShot";
import { FilingMark } from "@/components/FilingMark";
import { ecommerceAddons } from "@/lib/ecommerce-addons";
import { filingsIn, registrationChat, registrations } from "@/lib/registrations";
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
  Small: "You add the products. One page. Scroll, pay by link, chat the order.",
  Medium: "You load the catalogue. Categories, pincode before pay, today’s orders.",
  Expanding: "You manage the lines. One dealer path · includes Medium.",
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
        <div className="container wrap">
          <div className="page-copy">
          <PageLead icon="pricing" kicker="Pricing" />
          <h1>
            One price.
            <br />
            <span>The site and the paper.</span>
          </h1>
          <p className="muted-copy">
            The number on a shop card is the invoice. 18% GST is already inside it.
            Launch carries GST and Udyam. Growth adds IEC. Command carries every filing.
            A portal receipt, if the department charges one, stays in your name.
          </p>
          </div>
          <HeroShot kind="pricing" />
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
                Pick a package. <span>The filings come with it.</span>
              </h2>
            </div>
            <p>
              The paperwork rides with the package. Launch carries GST and Udyam. Growth
              adds IEC. Command carries every filing we sell, including UK VAT and EU
              IOSS. Our fee is inside the card. A government receipt, if there is one,
              stays in your name.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => {
              const Icon = planIcons[plan.name] ?? Rocket;
              const slug = planSlugs[plan.name];
              return (
                <div
                  className={`price-card tone-${slug}${plan.popular ? " popular" : ""}`}
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
                  <div className="filing-pack" aria-label={`Filings included with ${plan.name}`}>
                    {filingsIn(plan.name as "Launch" | "Growth" | "Command").map((item) => (
                      <span className="filing-slot" key={item.slug}>
                        <FilingMark slug={item.slug} mark={item.mark} />
                        <em>{item.short}</em>
                      </span>
                    ))}
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
                A page, <span>or a shop.</span>
              </h2>
            </div>
            <p>
              The extra ₹2,000 is not a longer list. It is categories, a pincode before
              payment, and an order desk.
            </p>
          </div>

          <div className="pair" aria-label="Small compared with Medium">
            <article className="pair-card pair-page">
              <header>
                <div>
                  <p>Small</p>
                  <h3>A page.</h3>
                </div>
                <strong>₹999</strong>
              </header>
              <p className="price-managed">We manage from ₹1,999</p>
              <ul>
                <li><span className="tile tile-green"><ScrollText size={18} /></span>They scroll one list</li>
                <li><span className="tile tile-green"><MessageCircle size={18} /></span>The order is a WhatsApp message</li>
                <li><span className="tile tile-green"><CreditCard size={18} /></span>They pay with a UPI link</li>
                <li><span className="tile tile-green"><MapPin size={18} /></span>Delivery is answered in chat</li>
              </ul>
              <Link href="/pricing/small">See Small</Link>
            </article>
            <div className="pair-orb">
              <strong>
                <span className="pair-plus">+</span>₹2,000
              </strong>
              <span>buys a shop, not more rows</span>
            </div>
            <article className="pair-card pair-shop">
              <header>
                <div>
                  <p>Medium</p>
                  <h3>A shop.</h3>
                </div>
                <strong>₹2,999</strong>
              </header>
              <p className="price-managed">We manage from ₹4,999</p>
              <ul>
                <li><span className="tile tile-mango"><Store size={18} /></span>They open a category</li>
                <li><span className="tile tile-mango"><ClipboardList size={18} /></span>Today’s orders on one screen</li>
                <li><span className="tile tile-mango"><CreditCard size={18} /></span>A gateway, if Growth is underneath</li>
                <li><span className="tile tile-mango"><MapPin size={18} /></span>The pincode shows before they pay</li>
              </ul>
              <Link href="/pricing/medium">See Medium</Link>
            </article>
          </div>
          <p className="stage-more">Expanding is Medium plus one dealer enquiry. Not a bigger Small.</p>

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
                      <small>you manage · incl. GST</small>
                    </div>
                    <p className="price-managed">We manage from {addon.managed}</p>
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
              <strong>₹10,998</strong>
              <span>Launch + Small. The site, plus a list you keep up to date.</span>
            </article>
            <article>
              <strong>₹22,998</strong>
              <span>Growth + Medium. Categories and a daily order list. Medium includes Small.</span>
            </article>
            <article>
              <strong>₹26,998</strong>
              <span>Growth + Expanding. Adds the dealer path. Expanding includes Medium.</span>
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
                Buy the filing alone,
                <br />
                <span>or let the package carry it.</span>
              </h2>
            </div>
            <p>
              Same desk either way. Take a package and our filing fee drops to zero.
              The portal still gets its own receipt. IEC is ₹500 to DGFT. The EU
              intermediary, if you need one, is still their invoice.
            </p>
          </div>
          <div className="pricing-grid filings-grid">
            {registrations.map((item) => (
              <article className={`price-card price-card-filing tone-${item.slug}`} key={item.slug}>
                <div className="price-card-top">
                  <div className="filing-head">
                    <FilingMark slug={item.slug} mark={item.mark} size={48} />
                    <p className="price-best-for">Filed on {item.portal}</p>
                  </div>
                  <h2>
                    <Link href={`/registrations/${item.slug}`}>{item.name}</Link>
                  </h2>
                  <p className="price-desc">{item.forWhom}</p>
                  <div className="reg-prices">
                    <div>
                      <span>Alone</span>
                      <strong className="fee-was">{item.ourFee}</strong>
                      <small>filing only</small>
                    </div>
                    <div className="fee-in">
                      <span>With {item.ridesWith}</span>
                      <strong>₹0</strong>
                      <small>included</small>
                    </div>
                  </div>
                  <p className="portal-fee">Portal fee {item.govFee}. Not marked up.</p>
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
