import { BUSINESS, filled, SITE } from "@/lib/site";

/**
 * Legal pages (content-plan §9.17). Plain language, matching the monthly-plan
 * model in lib/offers.ts. Owner TODO §14 #9: have a lawyer review these before
 * launch. Business fields that are still placeholders are left out.
 */
export type LegalSection = { heading: string; body: string[] };
export type LegalDocData = { summary: { icon: string; title: string; text: string }[]; sections: LegalSection[] };

export const legalUpdated = "5 October 2026";

const entity = `${BUSINESS.legalName}${filled(BUSINESS.constitution) ? `, a ${BUSINESS.constitution.toLowerCase()}` : ""}${filled(BUSINESS.address) ? ` at ${BUSINESS.address}` : ""}`;

export const terms: LegalDocData = {
  summary: [
    { icon: "FileText", title: "Scope first", text: "We agree the work in writing before you pay." },
    { icon: "CalendarDots", title: "Month to month", text: "No lock-in. 30 days' notice to stop." },
    { icon: "Key", title: "Yours stays yours", text: "Domain, brand, content, data and accounts." },
    { icon: "Scales", title: "No guarantees", text: "We don't promise rankings, mentions or sales." },
  ],
  sections: [
    {
      heading: "Who you're dealing with",
      body: [`These terms are between you and ${entity}. Write to ${SITE.email} or message us on WhatsApp.`],
    },
    {
      heading: "What we provide",
      body: [
        "We build, host and maintain software for your business — websites, stores, payments, WhatsApp systems, CRM/ERP, dashboards and integrations — and provide registrations, strategy and marketing services where agreed.",
        "What we'll deliver, and its price, is set out in a written scope you approve before any payment.",
      ],
    },
    {
      heading: "Plans and payment",
      body: [
        "Plans have a setup fee and a monthly fee, as shown on the pricing page or in your scope. Annual prepay is charged for ten months and covers twelve.",
        "Custom builds pay the setup fee in three parts: 40% to start, 40% at an agreed milestone and 20% at launch.",
        "We share a secure payment link on WhatsApp after you approve the scope. Taxes apply as shown on your invoice.",
      ],
    },
    {
      heading: "Limits and add-ons",
      body: ["Each stage has limits (users, products, orders, locations). When you reach 80% of a limit we message you with the options — an add-on or the next stage — and which is cheaper. Nothing extra is charged without your OK."],
    },
    {
      heading: "Changing or stopping your plan",
      body: [
        "Monthly plans run month to month. To stop, give us 30 days' notice. You can move to a smaller stage at any time; features above it switch off and the related data is kept for 30 days.",
        "When a plan ends, the hosted system is switched off and you receive a full export of your data and content. Your domain and business accounts stay with you.",
      ],
    },
    {
      heading: "What you own, and what we own",
      body: [
        "You own your domain, brand, content, data and business accounts (payment gateway, WhatsApp number, Google, Microsoft or Zoho).",
        "The software code and our platform stay with us. We deploy, host and maintain them for you, which is why a monthly plan applies. Everything customer-facing can carry your brand.",
      ],
    },
    {
      heading: "Costs billed by others",
      body: ["Payment gateway fees, WhatsApp conversation charges, software licences, government fees, ad spend and domain renewals are billed by those providers, not included in our fees."],
    },
    {
      heading: "Your part",
      body: [
        "Please send accurate information, content, access and documents, and approve work in reasonable time. Delays on either side move dates.",
        "For registrations, we prepare and submit using the documents and one-time passwords you share. Approval, queries and rejections are decided by the department.",
      ],
    },
    {
      heading: "No guarantee of results",
      body: ["We don't guarantee search rankings, mentions by AI assistants, enquiries or sales. Results depend on many things outside the build, including your market, prices and follow-up. We do the work agreed and report honestly on it."],
    },
    {
      heading: "Changes to these terms",
      body: ["If we change these terms we'll update this page and the date above, and tell active clients on WhatsApp about anything significant. These terms are governed by the laws of India."],
    },
  ],
};

export const privacy: LegalDocData = {
  summary: [
    { icon: "ChatCircleDots", title: "Only what we need", text: "What you send us to reply and do the work." },
    { icon: "LockKey", title: "Never sold", text: "We don't sell or rent your data." },
    { icon: "HandHeart", title: "Your consent", text: "Withdraw it any time; ask us to correct or delete." },
    { icon: "Scales", title: "DPDP Act", text: "Handled under India's data protection law." },
  ],
  sections: [
    {
      heading: "Who is responsible",
      body: [`${entity} is the data fiduciary for personal data collected through this website and our WhatsApp conversations. Contact: ${SITE.email}.`],
    },
    {
      heading: "What we collect",
      body: [
        "What you send us: your name, phone number, city, business details and what you need. For registrations, the documents the portal requires.",
        "Basic, privacy-friendly website analytics (pages visited, buttons clicked) to improve the site. We don't buy contact lists.",
      ],
    },
    {
      heading: "Why we use it, and your consent",
      body: [
        "We use your data to reply to you, scope and deliver the work you ask for, invoice you and meet legal obligations. By messaging us you consent to this use under the Digital Personal Data Protection Act, 2023.",
        "You can withdraw consent at any time by messaging us. We'll stop processing, except where the law requires us to keep records.",
      ],
    },
    {
      heading: "WhatsApp communications",
      body: [
        "Conversations happen on WhatsApp, which is operated by Meta under its own terms and privacy policy. We message you about your enquiry, project and account.",
        "We send offers or updates only if you've opted in, and you can opt out at any time by replying STOP or telling us.",
      ],
    },
    {
      heading: "Who else sees it",
      body: [
        "Service providers who help us run the work — website hosting, WhatsApp, payment gateways and the software tools in your scope — under their own data protection terms.",
        "Government portals, when we file a registration you asked for. We never sell your data.",
      ],
    },
    {
      heading: "How long we keep it",
      body: ["For as long as your project, plan, invoices or legal obligations need it. Then we delete it or make it anonymous."],
    },
    {
      heading: "Your rights",
      body: ["You can ask what data we hold about you, ask us to correct or erase it, nominate someone to act for you, and raise a grievance. Message us on WhatsApp or email us; we'll respond as the DPDP Act requires."],
    },
    {
      heading: "Your customers' data",
      body: ["When we run a system for your business, your customers' data belongs to your business. We process it only to run your system, and you can export it any time."],
    },
  ],
};

export const refund: LegalDocData = {
  summary: [
    { icon: "CalendarDots", title: "Stop any month", text: "30 days' notice; no lock-in." },
    { icon: "FileText", title: "Fees are for work", text: "Not refunded once that work has started." },
    { icon: "Wrench", title: "We fix our misses", text: "If it doesn't match the scope, we correct it." },
    { icon: "Receipt", title: "Third-party money", text: "Paid to others stays with them." },
  ],
  sections: [
    {
      heading: "Cancelling a monthly plan",
      body: [
        "Give us 30 days' notice on WhatsApp or email. Your plan runs until the end of that notice period, then the hosted system is switched off and you receive a full export of your data and content.",
        "Annual prepay terms, including cancellation, are set out in your written scope.",
      ],
    },
    {
      heading: "When fees aren't refunded",
      body: [
        "Setup fees and monthly fees pay for work and running costs. Once that work has started or that month has begun, they aren't refunded.",
        "A quiet month after launch, or results that didn't meet hopes, is not a reason for a refund — we don't guarantee rankings, mentions or sales.",
      ],
    },
    {
      heading: "What we do instead",
      body: ["If something we delivered doesn't match the agreed scope, tell us and we'll correct it. A missing page in the scope gets built; an error we made in a filing gets fixed."],
    },
    {
      heading: "Money paid to others",
      body: ["Government fees, gateway fees, WhatsApp charges, licences, ad spend and domain fees are paid to those providers. We can't refund money that was never ours, though we'll help you ask them where possible."],
    },
    {
      heading: "Before we start",
      body: ["If you don't want to go ahead, tell us before we start the work in your scope."],
    },
  ],
};
