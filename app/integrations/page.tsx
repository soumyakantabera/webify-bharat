import Link from "next/link";
import type { Metadata } from "next";
import { glossify } from "@/components/clarity/glossify";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { LogoChip } from "@/components/LogoChip";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoUiLayer } from "@/components/collage";
import { GlossaryChip } from "@/components/clarity";
import { PageHero, SectionHead } from "@/components/tiles";
import { AccessLayers, FiveRoutes, WhiteLabelSwap } from "@/components/svg/positioning";
import { BUILD_ROUTES, WHITE_LABEL_LINE } from "@/lib/build-routes";
import { getLogo, type Logo } from "@/lib/logos";
import { pageMetadata } from "@/lib/page-seo";
import { WA_MSG, waTool } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("integrations");

const BY_JOB: { job: string; icon: string; ids: string[]; extra?: string[] }[] = [
  { job: "Accounting", icon: "Receipt", ids: ["tally", "zoho", "odoo"], extra: ["Zoho Books"] },
  { job: "CRM / ERP", icon: "Kanban", ids: ["zoho", "odoo", "erpnext"], extra: ["Microsoft Dynamics (on request)"] },
  { job: "Office", icon: "Briefcase", ids: ["google-workspace", "microsoft-365"] },
  { job: "Payments", icon: "CreditCard", ids: ["razorpay", "cashfree", "stripe"] },
  { job: "Chat", icon: "ChatCircleDots", ids: ["whatsapp"] },
  { job: "Shipping", icon: "Boat", ids: ["shiprocket"] },
];

export default function Integrations() {
  return (
    <Layout cta={{ title: "Tell us what you use today.", message: waTool("Zoho / Tally / Odoo / Google / Microsoft"), label: "Ask about my tools", webu: "pointing" }}>
      <BreadcrumbLd seoKey={"integrations"} />
      <PageHero
        kicker="Integrations"
        title="Keep Tally, Zoho or Google. We join them into one system."
        sub="No starting over: we connect what you already use — Zoho, Odoo, Tally, Google Workspace, Microsoft 365 — or build only for you."
        cta={<WhatsAppCTA message={waTool("Zoho / Tally / Odoo / Google / Microsoft")} context="hero" label="Ask about my tools" />}
        visual={<PhotoUiLayer slot="IMG-N01" priority stickers={[{ text: "Tally and Zoho synced" }, { text: "Order → invoice → books" }]} />}
      />

      <section className="burst burst-peacock" id="five-ways" aria-labelledby="five-title">
        <div className="container">
          <SectionHead id="five-title" title="Five ways we build — one system at the end." sub="The route changes where we start, and the setup cost. Not who it's for." align="center" />
          <div className="routes-card"><FiveRoutes /></div>
          <div className="route-grid">
            {BUILD_ROUTES.map((r) => (
              <Link key={r.slug} href={r.href} className="route-tile link-card">
                <Img slot={r.photo} mask="none" className="route-thumb" width={400} height={200} decorative />
                <div className="route-body">
                  <span className="route-icon"><Icon name={r.icon} size={22} /></span>
                  <h3>{r.name}</h3>
                  <p>{glossify(r.when)}</p>
                  <span className="cost-chip">{r.cost}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="by-job" aria-labelledby="job-title">
        <div className="container">
          <SectionHead kicker="Works with" id="job-title" title="The tools we build on and connect, by job." sub="Shown only to indicate compatibility — we're not an official partner unless stated." />
          <div className="job-grid">
            {BY_JOB.map((j) => (
              <div key={j.job} className="job-card">
                <h3><Icon name={j.icon} size={20} /> {j.job}</h3>
                <ul className="logo-row">
                  {j.ids.map((id) => getLogo(id)).filter((l): l is Logo => Boolean(l)).map((l) => (
                    <li key={l.id}><LogoChip logo={l} showNote={false} /></li>
                  ))}
                  {j.extra?.map((e) => <li key={e}><span className="logo-chip is-partner"><span className="logo-wordmark">{e}</span></span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="budget-route" aria-labelledby="budget-title">
        <div className="container">
          <SectionHead kicker="The budget route" id="budget-title" title="Ready apps, configured for you." sub="Standard needs and a tight budget? We set up Zoho or Odoo properly instead of building from scratch." />
          <div className="two-cards">
            <div className="sticker-card tone-peacock">
              <span className="sticker-icon"><Icon name="Wrench" size={26} /></span>
              <h3>What we do</h3>
              <ul className="ticks">
                <li>Choose and set up the right apps</li>
                <li>Import your data from Excel or Tally</li>
                <li>Add the custom fields and screens you need</li>
                <li>Train your staff and stay on for support</li>
              </ul>
            </div>
            <div className="sticker-card tone-haldi">
              <span className="sticker-icon"><Icon name="custom:rupee-coin" size={26} /></span>
              <h3>What the vendor bills</h3>
              <ul className="ticks">
                <li>Licences, at the vendor&apos;s own price</li>
                <li>Billed by Zoho, Odoo, Google or Microsoft directly</li>
                <li>Shown separately in your written scope</li>
              </ul>
            </div>
          </div>
          <p className="center-note"><WhatsAppCTA message={WA_MSG.budget} context="budget-route" variant="ghost" label="Show me the budget route" /></p>
        </div>
      </section>

      <section className="section" id="white-label" aria-labelledby="wl-title">
        <div className="container split">
          <WhiteLabelSwap />
          <div>
            <SectionHead kicker={WHITE_LABEL_LINE} id="wl-title" title="Your logo on everything we build — or ours. Your choice." sub={<><GlossaryChip term="White-label">White-labelling</GlossaryChip> is free on every plan.</>} />
          </div>
        </div>
      </section>

      <section className="section surface-2" id="data" aria-labelledby="data-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Data & access" id="data-title" title="Your data stays yours — and only the right people see it." />
            <ul className="ticks">
              <li>Role-based access: each person sees only what their role allows</li>
              <li>Automated backups for every business database</li>
              <li>Export your data any time — and in full if you leave</li>
              <li>Your domain, payment account and WhatsApp number stay in your name</li>
            </ul>
          </div>
          <AccessLayers />
        </div>
      </section>
    </Layout>
  );
}
