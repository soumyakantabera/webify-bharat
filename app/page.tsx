import Link from "next/link";
import Layout from "@/components/Layout";
import { PageLead } from "@/components/PageIcons";
import { ProcessVisual } from "@/components/ProcessVisual";
import { FaqSection } from "@/components/FaqSection";
import {
  CheckItem,
  IconArrow,
  IconCheck,
  IconKey,
  IconRupee,
  IconUsers,
  WhatsAppCta,
} from "@/components/icons";
import { industries, services, WA_CHAT, WA_CONSULT } from "@/lib/site";
import { getFaq } from "@/lib/faqs";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <PageLead icon="home" kicker="Full control. Zero rupees per lead." />
            <h1>
              Own your customers.
              <br />
              <span>Stop renting them.</span>
            </h1>
            <p>
              Your website, your WhatsApp, your list. No Justdial pack. No Zomato tax on
              the guest who already wants you. No paying Google for the same name twice.
              Enquiries that come through what you own cost you nothing extra per lead.
            </p>
            <div className="hero-actions">
              <WhatsAppCta href={WA_CONSULT}>Book a free consult</WhatsAppCta>
              <a className="btn btn-secondary" href="#control">
                See the difference
              </a>
            </div>
            <div className="trust">
              <div className="trust-item">
                <span className="trust-icon">
                  <IconKey />
                </span>
                <span className="trust-label">Full control</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <IconRupee />
                </span>
                <span className="trust-label">₹0 / lead</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <IconUsers />
                </span>
                <span className="trust-label">You own the list</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <IconCheck />
                </span>
                <span className="trust-label">No commission</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/hero/digital-growth-dashboard.png"
              alt="Webify Bharat digital operations dashboard"
            />
          </div>
        </div>
      </section>

      <section className="section control-section" id="control">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Owned, not rented
              </div>
              <h2>
                Full control. <span>No rupees per lead.</span>
              </h2>
            </div>
            <p>
              When someone finds you on Google, walks in, or WhatsApps your number —
              that customer is yours. You do not pay Justdial, IndiaMART, Zomato or Meta
              for that enquiry.
            </p>
          </div>
          <div className="control-grid">
            <article className="control-card rent">
              <p className="control-kicker">Renting customers</p>
              <h3>Pay every time someone wants you.</h3>
              <ul>
                <li>Zomato / Swiggy take a cut of the order</li>
                <li>Justdial / IndiaMART bill per lead pack</li>
                <li>Google and Meta charge for every click</li>
                <li>They own the relationship — you rent it</li>
              </ul>
            </article>
            <article className="control-card own">
              <p className="control-kicker">Owning customers</p>
              <h3>Your site. Your WhatsApp. ₹0 per lead.</h3>
              <ul>
                <li>Website + Maps + WhatsApp you control</li>
                <li>No extra rupee when a customer messages you</li>
                <li>Your list, your number, your rules</li>
                <li>Pay once to build the system — not per head</li>
              </ul>
            </article>
          </div>
          <p className="control-note">
            You still pay to build and host the system. What you stop paying is a tax on
            every organic customer — no commission, no per-lead bill, no algorithm
            holding the relationship.
          </p>
        </div>
      </section>

      <section className="real-world">
        <div className="container">
          <div className="real-world-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Built around real business
              </div>
              <h2>
                Technology that fits the way <span>you actually work.</span>
              </h2>
            </div>
            <p>
              Not abstract software for abstract companies. We design around shops,
              restaurants, clinics, institutes and growing operations.
            </p>
          </div>
          <div className="photo-strip">
            <Link href="/about" className="photo-card">
              <img
                src="/images/real/business-owner.webp"
                alt="Indian small business owner at her workspace"
              />
              <div className="photo-caption">
                <span>Small business</span>
                <h3>Your business stays at the center.</h3>
                <p>Digital systems should simplify the day, not add another thing to manage.</p>
              </div>
            </Link>
            <Link href="/industries/retail" className="photo-card">
              <img
                src="/images/real/retail.webp"
                alt="Indian retail store owner serving a customer"
              />
              <div className="photo-caption">
                <span>Retail</span>
                <h3>Sell in-store and online.</h3>
                <p>Catalog, payments and customer experience connected.</p>
              </div>
            </Link>
            <Link
              href="/industries/restaurant"
              className="photo-card"
            >
              <img
                src="/images/real/restaurant.webp"
                alt="Indian cafe owner operating his business"
              />
              <div className="photo-caption">
                <span>Restaurant</span>
                <h3>Orders without the chaos.</h3>
                <p>Digital ordering, payments and communication.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Services
              </div>
              <h2>
                One partner for your <span>digital operations.</span>
              </h2>
            </div>
            <p>
              From first website to sophisticated automation and reporting, we build
              systems that can grow with your business.
            </p>
          </div>
          <div className="bento">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`card service-card${service.featured ? " featured" : ""}`}
              >
                <div className="card-media">
                  <img
                    src={`/images/services/${service.image}`}
                    alt={service.title}
                  />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="card-link">
                    Explore service <IconArrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-wrap">
          <div>
            <div className="eyebrow">
              <span className="dot" /> How we work
            </div>
            <h2 className="display-h2">
              Discover. Build.
              <br />
              <span>Automate. Grow.</span>
            </h2>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <h3>Discover</h3>
                  <p>Understand the business, bottlenecks and opportunities.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <h3>Build</h3>
                  <p>Create the right website, workflows and digital foundation.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <h3>Automate</h3>
                  <p>Connect payments, communication and repetitive operations.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div>
                  <h3>Grow</h3>
                  <p>Track performance and continuously improve the system.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="process-image">
            <ProcessVisual />
          </div>
        </div>
      </section>

      <section className="section consultation-section">
        <div className="container real-context">
          <div className="real-context-photo">
            <img
              src="/images/real/consultation.webp"
              alt="Webify Bharat consultant discussing digital operations with a business owner"
            />
          </div>
          <div className="real-context-copy">
            <div className="eyebrow">
              <span className="dot" /> Start with the business problem
            </div>
            <h2>
              Good technology starts with <span>the right conversation.</span>
            </h2>
            <p>
              Before recommending tools, we understand what your team is doing today,
              where customers get stuck and which manual tasks are costing you time.
            </p>
            <div className="values">
              <CheckItem>Understand the workflow</CheckItem>
              <CheckItem>Prioritize the highest impact</CheckItem>
              <CheckItem>Build the right-sized system</CheckItem>
              <CheckItem>Measure the outcome</CheckItem>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Industries
              </div>
              <h2>
                Built for <span>Indian businesses.</span>
              </h2>
            </div>
            <p>
              Practical systems shaped around how real businesses sell, communicate,
              collect money and make decisions.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="industry-card real-photo"
              >
                <img
                  src={`/images/real/${industry.photo}`}
                  alt={industry.title}
                />
                <div className="content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <img
              src="/images/real/business-owner.webp"
              alt="Indian small business owner using Webify Bharat digital systems"
            />
          </div>
          <div>
            <div className="eyebrow">
              <span className="dot" /> Why Webify Bharat
            </div>
            <h2 className="display-h2">
              Full control of the
              <br />
              <span>customer relationship.</span>
            </h2>
            <p className="muted-copy">
              We put the website, WhatsApp, payments and records in your name — so the
              next enquiry does not cost a lead fee, and the next order does not pay an
              aggregator tax.
            </p>
            <div className="values">
              <CheckItem>You own the site, number and list</CheckItem>
              <CheckItem>₹0 extra per organic lead</CheckItem>
              <CheckItem>No marketplace commission on owned orders</CheckItem>
              <CheckItem>One partner, one system</CheckItem>
            </div>
          </div>
        </div>
      </section>

      <FaqSection block={getFaq("home")} />

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <div className="eyebrow" style={{ color: "#70d7cb" }}>
                <span className="dot" /> Own the next customer
              </div>
              <h2>Stop paying for people who already want you.</h2>
              <p>
                Build a website and WhatsApp system you control. Organic enquiries land
                at ₹0 per lead — not as a Justdial bill.
              </p>
              <WhatsAppCta href={WA_CHAT}>Chat on WhatsApp</WhatsAppCta>
            </div>
            <div className="image-wrap cta-real-photo">
              <img
                src="/images/real/growth-success.webp"
                alt="Successful Indian business owner in a growing retail operation"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
