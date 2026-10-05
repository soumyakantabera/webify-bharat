import { Arw } from "@/components/Glyph";
import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { BreadcrumbLd } from "@/components/SeoLd";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Img, PhotoUiLayer } from "@/components/collage";
import { GlossaryChip } from "@/components/clarity";
import { FaqList } from "@/components/FaqList";
import { PageHero, SectionHead } from "@/components/tiles";
import { ReachFunnel } from "@/components/svg/flows";
import { AiAnswerMock, ReportMock, SearchResultMock } from "@/components/svg/mocks";
import { pageMetadata } from "@/lib/page-seo";
import { REACH_HUB_FAQS, REACH_WHY, reachServices } from "@/lib/reach";
import { WA_MSG } from "@/lib/wa";

export const metadata: Metadata = pageMetadata("marketing");

const LOOK = [
  { icon: "MagnifyingGlass", title: "Google search", text: "People search for what you sell, and for your name.", photo: "IMG-P02", href: "/marketing/seo" },
  { icon: "MapPin", title: "Maps", text: "“Near me” searches show the map before anything else.", photo: "IMG-I-RET-1", href: "/marketing/local" },
  { icon: "DeviceMobile", title: "Instagram & Facebook", text: "Where people browse, compare and ask friends.", photo: "IMG-B04", href: "/marketing/ads" },
  { icon: "Sparkle", title: "AI assistants", text: "More customers now ask ChatGPT-style tools to recommend a business.", photo: "IMG-H03", href: "/marketing/ai-visibility" },
];

export default function MarketingHub() {
  return (
    <Layout cta={{ title: "Tell us where you want to be found.", message: WA_MSG.marketing, label: "Help me get found", webu: "pointing" }}>
      <BreadcrumbLd seoKey={"marketing"} />
      <PageHero
        kicker="Marketing · Webify Reach"
        tone="marigold"
        title="Get found where your customers look — Google, maps, ads and AI."
        sub="Get found, then keep them: every enquiry lands on your WhatsApp and in your own customer list — not a directory's."
        cta={<WhatsAppCTA message={WA_MSG.marketing} context="hero" label="Help me get found" />}
        visual={
          <PhotoUiLayer slot="IMG-B01" priority stickers={[{ text: "New enquiry from Maps" }]}>
            <div className="sig-art"><SearchResultMock /></div>
          </PhotoUiLayer>
        }
      />

      <section className="section" id="where" aria-labelledby="where-title">
        <div className="container">
          <SectionHead kicker="Where customers look" id="where-title" title="Four places customers decide." sub={REACH_WHY} />
          <div className="look-grid">
            {LOOK.map((l) => (
              <Link key={l.title} href={l.href} className="look-tile link-card">
                <Img slot={l.photo} mask="none" className="look-photo" crop="50% 80%" width={500} height={320} decorative />
                <div>
                  <h3><Icon name={l.icon} size={20} /> {l.title}</h3>
                  <p>{l.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-2" id="services" aria-labelledby="services-title">
        <div className="container">
          <SectionHead kicker="Five Reach services" id="services-title" title="Pick one, or combine them." sub="Search (SEO), ads (SEM), local maps, AI visibility and WhatsApp campaigns — run for you, reported monthly." />
          <div className="reach-bento">
            {reachServices.map((r) => (
              <Link key={r.slug} href={`/marketing/${r.slug}`} className={`reach-tile${r.slug === "ai-visibility" ? " is-featured" : ""}`} style={{ ["--accent" as string]: `var(${r.colour})` }}>
                {r.slug === "ai-visibility" ? <span className="new-badge">New</span> : null}
                <span className="reach-tile-icon"><Icon name={r.icon} size={26} /></span>
                <span className="reach-tile-kicker">{r.short}</span>
                <span className="reach-tile-title">{r.promise}</span>
                {r.slug === "ai-visibility" ? <span className="reach-tile-mock"><AiAnswerMock /></span> : null}
                <span className="block-tile-more" aria-hidden="true">Explore <Arw /></span>
              </Link>
            ))}
          </div>
          <div className="caveat-box" role="note">
            <Icon name="HandHeart" size={22} />
            <p>
              <strong>The honest part:</strong> no one can guarantee Google rankings or AI mentions. We do the work that improves your chances and report results every month. Ad spend is paid directly to Google or Meta.
            </p>
          </div>
        </div>
      </section>

      <section className="burst burst-dusk" id="ai-visibility" aria-labelledby="ai-title">
        <div className="container split">
          <div>
            <SectionHead id="ai-title" title="What is AI visibility?" />
            <ol className="ai-steps">
              <li><strong>AI assistants read the web.</strong> When someone asks for a recommendation, they look for businesses they can describe confidently.</li>
              <li><strong>They trust clear, consistent information.</strong> The same name, address, hours and services everywhere — in structured form.</li>
              <li><strong>We make yours clear and answer-ready.</strong> Structured data, llms.txt, consistent listings and FAQ-style content.</li>
            </ol>
            <p className="caveat">No one can guarantee AI mentions. We improve the signals these tools use — and check how you appear every month.</p>
            <WhatsAppCTA message={WA_MSG.aiVisibility} context="ai-visibility" label="Check my AI visibility" />
          </div>
          <div className="ai-mock-card"><AiAnswerMock /></div>
        </div>
      </section>

      <section className="section" id="connects" aria-labelledby="connects-title">
        <div className="container">
          <SectionHead kicker="Joined up" id="connects-title" title="Marketing that lands in your own system, not a spreadsheet." sub="Ads, search and AI bring people to your site; they message you on WhatsApp; the enquiry lands in your CRM and shows up on your dashboard." />
          <div className="funnel-card"><ReachFunnel /></div>
        </div>
      </section>

      <section className="section surface-2" id="pay-for" aria-labelledby="pay-title">
        <div className="container">
          <SectionHead kicker="What you pay for" id="pay-title" title="Our fee, and what goes straight to the platforms." />
          <div className="two-cards">
            <div className="sticker-card tone-marigold">
              <span className="sticker-icon"><Icon name="custom:rupee-coin" size={26} /></span>
              <h3>Our monthly fee — from ₹8,000</h3>
              <p>Business plans include Local Lite; Command includes AI Basic. Stop any time with 30 days&apos; notice.</p>
            </div>
            <div className="sticker-card tone-indigo">
              <span className="sticker-icon"><Icon name="Target" size={26} /></span>
              <h3>Ad spend — paid to Google or Meta directly</h3>
              <p>We never mark up your ad spend. WhatsApp and Meta message charges are billed by them too.</p>
            </div>
          </div>
          <p className="center-note"><Link href="/pricing#reach" className="text-link">See all Reach plans <Arw /></Link></p>
        </div>
      </section>

      <section className="section" id="report" aria-labelledby="report-title">
        <div className="container split">
          <div>
            <SectionHead kicker="Every month" id="report-title" title="A short report you'll actually read." sub={<>Enquiries by source, top searches and map views — and what we&apos;ll do next. Covers <GlossaryChip term="SEO" />, ads and <GlossaryChip term="AI visibility" />.</>} />
          </div>
          <ReportMock />
        </div>
      </section>

      <section className="section surface-2" id="faq" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHead kicker="Poochho — ask us" id="faq-title" title="Marketing questions, answered." />
          <FaqList items={REACH_HUB_FAQS.map((f) => ({ ...f, category: "process" as const }))} />
        </div>
      </section>
    </Layout>
  );
}
