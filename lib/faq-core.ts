/**
 * Must-include Q&As (content-plan §9.15). Used by the home mini-FAQ now and
 * by /faq in Phase 5. Keys let pages pick specific questions.
 */
export type CoreFaq = { key: string; q: string; a: string; category: FaqCategory };

export type FaqCategory = "custom" | "process" | "payments" | "launch" | "ownership" | "support";

/** FAQ tabs (content-plan §9.15), colour-coded. */
export const FAQ_CATEGORIES: { id: FaqCategory; label: string; tone: string }[] = [
  { id: "custom", label: "Custom work", tone: "rani" },
  { id: "process", label: "Process", tone: "marigold" },
  { id: "payments", label: "Payments", tone: "peacock" },
  { id: "launch", label: "Launch & registrations", tone: "haldi" },
  { id: "ownership", label: "Ownership & tech", tone: "indigo" },
  { id: "support", label: "Support", tone: "mehendi" },
];

export const CORE_FAQS: CoreFaq[] = [
  { key: "templates", category: "custom", q: "Do you use templates?", a: "No. Every design and build is made for your business." },
  { key: "examples", category: "custom", q: "Can I see examples first?", a: "Yes. Message us on WhatsApp and we'll walk you through prototypes close to your business." },
  { key: "own", category: "ownership", q: "What do I own?", a: "Your domain, brand, content, data and business accounts (payment gateway, WhatsApp number, Google/Microsoft/Zoho). The software code stays with us — we deploy, host and maintain it for you, which is why a monthly plan applies." },
  { key: "customers", category: "ownership", q: "Who owns my customer list?", a: "You do. Everyone who orders, books, pays or enquires through your system is saved in your account, in your name — not ours and not an app's. Message them on your own WhatsApp number, and if you ever leave you get a full export." },
  { key: "source", category: "ownership", q: "Do I get the source code?", a: "No. We deliver a live, managed system rather than a code handover. That's how we keep it secure, updated and supported. You can always export your data." },
  { key: "how-pay", category: "payments", q: "How do I pay?", a: "A small setup fee (₹5,000–₹15,000) plus your first month, then monthly. No lock-in. Custom builds use 40% / 40% / 20% on the setup fee." },
  { key: "limits", category: "payments", q: "What happens if I go over my plan's limits?", a: "We message you at 80% with both options — a small add-on or the next stage — and tell you which is cheaper. Nothing is charged without your OK." },
  { key: "downgrade", category: "payments", q: "Can I downgrade?", a: "Yes, any time. Features above the new stage switch off; your data is kept for 30 days." },
  { key: "gateways", category: "payments", q: "Which payment gateways do you set up?", a: "Razorpay or Cashfree for India, Stripe for international customers." },
  { key: "hosting", category: "ownership", q: "Where is it hosted?", a: "On fast, secure cloud hosting that we set up and manage for you." },
  { key: "from-zero", category: "launch", q: "Can you set up a new business from zero?", a: "Yes. Registrations, brand basics, website, payments, WhatsApp and books." },
  { key: "pay-you", category: "payments", q: "How do I pay you?", a: "After you approve a written scope, we share a secure payment link on WhatsApp." },
  { key: "who-files", category: "launch", q: "Who actually files my GST/Udyam/IEC?", a: "We do, using documents and one-time passwords you share; government fees are paid in your name. For UK VAT and EU IOSS we coordinate with a registered overseas agent/intermediary." },
  { key: "not-included", category: "payments", q: "What's not included in your price?", a: "Gateway fees, WhatsApp conversation charges, government fees, ads and domain renewals." },
  { key: "lock-in", category: "ownership", q: "Is there a lock-in?", a: "No long contracts. Monthly plans run month-to-month with 30 days' notice. If you stop, the hosted system is switched off and you receive a full export of your data and content; your domain and accounts stay with you." },
  { key: "prototype-template", category: "custom", q: "Isn't a prototype just a template?", a: "No. A template is the same design sold to everyone. A prototype is our tested starting point that we rebuild for your workflow and brand — it just saves you setup cost." },
  { key: "setup-cost", category: "payments", q: "What does setup cost?", a: "It depends on where we start. Adapting one of our prototypes is the lowest setup cost. A brand-new kind of solution is quoted per scope. CRM/ERP on Zoho, Odoo, Microsoft or Google is custom-priced, with licences billed by the vendor." },
  { key: "tools", category: "custom", q: "Can you work with Zoho, Tally, Odoo, Google or Microsoft?", a: "Yes. We can build around what you use, set it up for you, or build something custom." },
  { key: "crm", category: "custom", q: "Can you build a CRM, ERP or staff portal?", a: "Yes — custom, or on Odoo/Zoho, with role-based access so each person sees only what they should." },
  { key: "white-label", category: "custom", q: "Can it carry our brand instead of yours?", a: "Yes. Everything can be white-labelled in your brand." },
  { key: "reply", category: "support", q: "How fast do you reply?", a: "Within a few hours, 7 days a week, on WhatsApp." },
  { key: "competing", category: "custom", q: "Are you competing with Zoho, Google or Microsoft?", a: "No. We work with them. They make great tools; we choose, set up, customise and connect them for your business — or build custom where they don't fit." },
  { key: "what-is", category: "custom", q: "What exactly is Webify — software or a service?", a: "Both: your own software, built on our platform, and run for you as a service. You use it; we keep it working." },
  { key: "strategy-paid", category: "process", q: "Is the strategy session free?", a: "The first WhatsApp chat is free. Webify Compass (session, audit, roadmap) is paid, deeper work." },
  { key: "guarantee", category: "process", q: "Can you guarantee Google rankings or ChatGPT mentions?", a: "No one honestly can. We do the work that improves your chances and report results every month." },
  { key: "ai-visibility", category: "process", q: "What is AI visibility?", a: "Making sure AI assistants like ChatGPT, Gemini and Perplexity can find clear, correct information about your business when customers ask." },
  { key: "ads-spend", category: "process", q: "Do I pay for ads through you?", a: "Our fee covers managing ads. Ad spend is paid directly to Google or Meta." },
  { key: "start", category: "process", q: "How does a project start?", a: "Message us on WhatsApp with your business type, city and what you need. We ask a few questions, suggest a starting point and send a written scope with the price before any work begins." },
  { key: "approve", category: "process", q: "Do I approve things before you build them?", a: "Yes. You approve the written scope first, then see progress on WhatsApp along the way. Nothing goes live without your OK." },
  { key: "breaks", category: "support", q: "What if something breaks?", a: "Message us on WhatsApp. Keeping the system working is part of your monthly plan — that's why we host and maintain it for you." },
  { key: "changes", category: "support", q: "Can I ask for changes after launch?", a: "Yes. Small updates are part of running your system; bigger new features are scoped and quoted before we start." },
  { key: "remote", category: "support", q: "Do you work outside my city?", a: "Yes. We work fully remote across India over WhatsApp." },
];

export function pickFaqs(keys: string[]) {
  return keys.map((k) => CORE_FAQS.find((f) => f.key === k)!).filter(Boolean);
}
