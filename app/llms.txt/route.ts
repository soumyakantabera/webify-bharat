import { blocks } from "@/lib/blocks";
import { SITE_URL } from "@/lib/site-url";
import { cities } from "@/lib/cities";
import { industryPages } from "@/lib/industries";
import { THIRD_PARTY_COSTS, stages } from "@/lib/offers";
import { publishedPosts } from "@/lib/posts";
import { reachServices } from "@/lib/reach";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const BASE = SITE_URL;

/** llms.txt (content-plan §13): "custom-built" positioning, routes and block names, generated from site data. */
export function GET() {
  const lines = [
    "# Webify Bharat",
    "",
    `> ${SITE.description}`,
    "",
    "Webify Bharat builds custom software for Indian businesses — no templates — and runs it for them as a managed service on a monthly plan. It works alongside tools like Zoho, Odoo, Google, Microsoft, Tally and Razorpay, choosing, setting up, customising and connecting them, or building custom where they don't fit. Clients own their domain, brand, content, data and business accounts. Work happens fully remote over WhatsApp, from Kolkata, across India.",
    "",
    "## Four pillars",
    `- Strategy (Webify Compass): ${BASE}/strategy`,
    `- Systems — eleven building blocks: ${BASE}/systems`,
    `- Marketing (Webify Reach): ${BASE}/marketing`,
    "- Care: hosting, updates and support on every monthly plan",
    "",
    "## The eleven building blocks",
    ...blocks.map((b) => `- ${b.name} — ${b.becomes}: ${BASE}/systems/${b.slug}`),
    "",
    "## Marketing services",
    ...reachServices.map((r) => `- ${r.name} — ${r.short}: ${BASE}/marketing/${r.slug}`),
    "",
    "## Pricing (INR; setup fee + monthly plan; month to month, no lock-in)",
    ...stages.map((s) => `- ${s.name}: ${s.monthly}/month, setup ${s.setup} — ${s.tagline} Best for: ${s.bestFor}. ${BASE}/pricing/${s.slug}`),
    `- Not included (billed by providers): ${THIRD_PARTY_COSTS.join(", ")}.`,
    `- Pricing and estimator: ${BASE}/pricing`,
    "",
    "## Industries",
    ...industryPages.map((i) => `- ${i.name}: ${BASE}/industries/${i.slug}`),
    "",
    "## Other pages",
    `- Three paths — Launch, Organise, Grow: ${BASE}/what-we-do`,
    `- How we work: ${BASE}/how-we-work`,
    `- Prototype Room (eight prototypes, walkthroughs on WhatsApp): ${BASE}/prototypes`,
    `- Integrations: ${BASE}/integrations`,
    `- Registrations (GST, Udyam, IEC; UK VAT and EU IOSS via a registered agent): ${BASE}/registrations`,
    `- Cities (${cities.length}): ${BASE}/cities`,
    `- FAQ: ${BASE}/faq`,
    `- About: ${BASE}/about`,
    `- Contact: ${BASE}/contact`,
    "",
    "## Guides",
    ...publishedPosts.map((p) => `- ${p.title}: ${BASE}/blog/${p.slug}`),
    "",
    "## Honesty notes",
    "- No guaranteed search rankings or AI-assistant mentions.",
    "- No testimonials or client results are published until clients agree.",
    `- Contact: WhatsApp via the website, or ${SITE.email}. ${SITE.replyPromise}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
