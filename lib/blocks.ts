/**
 * The 11 building blocks (content-plan §2.4, §9.7, §12).
 * Replaces the old `services` list in lib/site.ts. Every block is tailored per
 * client; copy must never present a block as a boxed product.
 */

export type BlockSlug =
  | "site"
  | "store"
  | "pay"
  | "chat"
  | "pulse"
  | "ledger"
  | "file"
  | "desk"
  | "team"
  | "workspace"
  | "connect";

export type BlockGroup = "sell" | "talk" | "run" | "see";

/** Filter chips on the Systems hub (content-plan §9.6). */
export type BlockFilter = "sell" | "pay" | "talk" | "track" | "comply" | "connect";

export const BLOCK_FILTERS: { id: BlockFilter | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sell", label: "Sell" },
  { id: "pay", label: "Get paid" },
  { id: "talk", label: "Talk" },
  { id: "track", label: "Track" },
  { id: "comply", label: "Comply" },
  { id: "connect", label: "Connect" },
];

export type Block = {
  slug: BlockSlug;
  name: string;
  short: string;
  /** CSS custom property name, e.g. "--peacock". */
  colour: string;
  /** Phosphor icon name, or "custom:<id>" for components/icons/india. */
  icon: string;
  group: BlockGroup;
  /** "Becomes, for you" line (§2.4). */
  becomes: string;
  oneLiner: string;
  /** Tailoring example (§2.4). */
  example: string;
  headline: string;
  capabilities: string[];
  tailoredFor: { business: string; how: string }[];
  /** Key into lib/channels.ts. */
  channelSlug?: string;
  includedFrom?: "starter" | "business" | "command";
  /** Image slot id from lib/images.ts. */
  photo: string;
  /** Signature SVG component name (§6.10). */
  svg: string;
  waMessage: string;
  filter: BlockFilter;
  /** "Works best with" neighbours (§9.7 #5). */
  related: BlockSlug[];
  /** Pricing note parts (§9.7 #6). Amounts come from lib/offers.ts add-ons. */
  pricing: { included: string; addon?: { slug: string; on: string } };
  faqs: { q: string; a: string }[];
};

export const BLOCK_GROUPS: { id: BlockGroup; label: string; slugs: BlockSlug[] }[] = [
  { id: "sell", label: "Sell & get paid", slugs: ["site", "store", "pay"] },
  { id: "talk", label: "Talk", slugs: ["chat"] },
  { id: "run", label: "Run the business", slugs: ["desk", "team", "workspace", "ledger", "file"] },
  { id: "see", label: "See & connect", slugs: ["pulse", "connect"] },
];

export const blocks: Block[] = [
  {
    slug: "site",
    name: "Webify Site",
    short: "Site",
    colour: "--peacock",
    icon: "Globe",
    group: "sell",
    becomes: "Your website, designed from scratch",
    oneLiner: "Built for you to be found, trusted and messaged.",
    example: "Clinic: doctor timings. Mandi trader: daily rate board.",
    headline: "Your front door, designed for your customers.",
    capabilities: ["Custom design", "Mobile-first", "Local SEO", "Maps", "Regional touches", "WhatsApp button", "Speed", "Blog"],
    tailoredFor: [
      { business: "Clinic", how: "Doctor timings, services and a booking button on the first screen." },
      { business: "Kirana", how: "Today's offers, delivery area and a WhatsApp order button." },
      { business: "Coaching", how: "Batches, results you're allowed to share and an admission enquiry." },
      { business: "Exporter", how: "A catalogue buyers abroad can read, with an enquiry in their timezone." },
    ],
    channelSlug: "site",
    includedFrom: "starter",
    photo: "IMG-B01",
    svg: "SearchResultMock",
    waMessage: "Hi! I'm interested in Webify Site for my business.",
    filter: "sell",
    related: ["store", "chat", "pulse"],
    pricing: { included: "Included in every plan, from Starter" },
    faqs: [
      { q: "Is the website a template?", a: "No. It's designed for your business, your customers and your brand — even when we start from one of our tested prototypes." },
      { q: "Can I change things myself?", a: "Small changes are covered by the change hours in your monthly plan — just message us on WhatsApp. If you update often (menus, offers, prices), we can build you a simple editing screen." },
      { q: "Will it show up on Google?", a: "Every plan includes the SEO and AI-ready basics and your Google Business Profile. Rankings take time and no one can honestly guarantee them; Reach Search is the ongoing work if you want it." },
    ],
  },
  {
    slug: "store",
    name: "Webify Store",
    short: "Store",
    colour: "--rani",
    icon: "ShoppingBag",
    group: "sell",
    becomes: "Your catalogue, ordering or dealer portal",
    oneLiner: "Built for you to take orders on your own terms.",
    example: "Kirana: repeat-order list. Manufacturer: dealer price tiers.",
    headline: "Your catalogue. Your rules. No landlord.",
    capabilities: ["Catalogue", "Categories", "Variants", "Pincode check", "Order desk", "Dealer tiers", "Shiprocket"],
    tailoredFor: [
      { business: "Kirana", how: "A repeat-order list regulars can reorder from in two taps." },
      { business: "Boutique", how: "Sizes, colours and a try-at-home request." },
      { business: "Manufacturer", how: "Dealer logins that see their own price tier." },
      { business: "Cloud kitchen", how: "A direct-order menu for regulars, alongside the apps." },
    ],
    channelSlug: "store",
    includedFrom: "business",
    photo: "IMG-B02",
    svg: "MockScreen",
    waMessage: "Hi! I'm interested in Webify Store for my business.",
    filter: "sell",
    related: ["pay", "chat", "ledger"],
    pricing: { included: "Included from Business", addon: { slug: "small-store", on: "Starter" } },
    faqs: [
      { q: "Do I have to leave Amazon, Flipkart or Zomato?", a: "No. Keep them for new customers. Your own store is for regulars and repeat orders, so they don't pay a commission every time." },
      { q: "How many products can I list?", a: "Business includes 100 products and Command 1,000; more are charged per 100 a month, only after you approve. On Starter, a small store of up to 50 products is an add-on." },
      { q: "Can dealers see their own prices?", a: "Yes. Dealer logins with their own price tier are a common build for manufacturers and traders." },
    ],
  },
  {
    slug: "pay",
    name: "Webify Pay",
    short: "Pay",
    colour: "--peacock",
    icon: "CreditCard",
    group: "sell",
    becomes: "Payment flows into your bank",
    oneLiner: "Built for you to get paid into a business account, cleanly.",
    example: "Razorpay/Cashfree for India, Stripe for overseas buyers, deposits, part-payments.",
    headline: "Money that lands where it should.",
    capabilities: ["UPI", "Cards", "Netbanking", "Payment links", "Deposits / part-pay", "Stripe international", "Refunds", "Reconciliation"],
    tailoredFor: [
      { business: "Clinic", how: "Consultation fee at booking, refunds if the slot moves." },
      { business: "Restaurant", how: "Table deposits and direct-order payments." },
      { business: "Exporter", how: "Stripe checkout so overseas buyers pay by card." },
      { business: "Coaching", how: "Fee instalments with automatic reminders." },
    ],
    channelSlug: "pay",
    includedFrom: "business",
    photo: "IMG-B03",
    svg: "MoneyPath",
    waMessage: "Hi! I'm interested in Webify Pay for my business.",
    filter: "pay",
    related: ["ledger", "store", "chat"],
    pricing: { included: "Included from Business", addon: { slug: "payments", on: "Starter" } },
    faqs: [
      { q: "Whose account does the money go to?", a: "Yours. The gateway account is in your business name and settles to your bank; we help with the KYC paperwork." },
      { q: "What does the gateway charge?", a: "Gateway fees are set and billed by the provider (Razorpay, Cashfree or Stripe), separately from our plan." },
      { q: "Can customers abroad pay me?", a: "Yes, through Stripe. It's included in Command and available as an add-on on Starter and Business." },
    ],
  },
  {
    slug: "chat",
    name: "Webify Chat",
    short: "Chat",
    colour: "--mehendi",
    icon: "ChatCircleDots",
    group: "talk",
    becomes: "WhatsApp workflows on your number",
    oneLiner: "Built for you to answer, book and remind on WhatsApp.",
    example: "Restaurant: menu + table booking. Coaching: fee reminders.",
    headline: "Your WhatsApp, working while you sleep.",
    capabilities: ["Your number", "Auto-replies", "Menus", "Bookings", "Reminders", "Opt-in broadcasts", "Human handoff"],
    tailoredFor: [
      { business: "Restaurant", how: "Menu, table booking and order status on WhatsApp." },
      { business: "Clinic", how: "Appointment confirmations and reminders the day before." },
      { business: "Coaching", how: "Fee reminders and class updates to parents." },
      { business: "Real estate", how: "Site-visit booking and follow-ups." },
    ],
    channelSlug: "chat",
    includedFrom: "business",
    photo: "IMG-B04",
    svg: "ChatFlow",
    waMessage: "Hi! I'm interested in Webify Chat for my business.",
    filter: "talk",
    related: ["site", "desk", "pay"],
    pricing: { included: "WhatsApp Business API included from Business", addon: { slug: "wa-api", on: "Starter" } },
    faqs: [
      { q: "Will it use my existing number?", a: "Yes — your number, not ours. Moving a number to the WhatsApp Business API changes how it works in the regular app, so we explain exactly what changes before we move it." },
      { q: "Are WhatsApp messages free?", a: "WhatsApp's conversation charges are billed separately by Meta or the provider, not by us." },
      { q: "Can a person still reply?", a: "Always. Automations handle the routine questions and hand anything unusual to you or your staff." },
    ],
  },
  {
    slug: "pulse",
    name: "Webify Pulse",
    short: "Pulse",
    colour: "--indigo",
    icon: "ChartLineUp",
    group: "see",
    becomes: "A dashboard of your numbers",
    oneLiner: "Built for you to see the 3–5 numbers you actually ask about.",
    example: "The 3–5 numbers the owner actually asks about.",
    headline: "The numbers you'd ask your manager for.",
    capabilities: ["Enquiries", "Collections", "Stuck orders", "Weekly ₹ view", "WhatsApp events", "Your metrics"],
    tailoredFor: [
      { business: "Retail", how: "Sales by day and what's running low." },
      { business: "Manufacturer", how: "Orders in production and pending dispatch." },
      { business: "Multi-outlet", how: "Each outlet side by side." },
      { business: "Coaching", how: "Enquiries, admissions and fees due." },
    ],
    channelSlug: "pulse",
    includedFrom: "business",
    photo: "IMG-B05",
    svg: "OwnerDashboard",
    waMessage: "Hi! I'm interested in Webify Pulse for my business.",
    filter: "track",
    related: ["desk", "ledger", "connect"],
    pricing: { included: "Basic dashboard from Business, advanced on Command, custom on Custom" },
    faqs: [
      { q: "What numbers will I see?", a: "The three to five numbers you actually ask about — for example enquiries, collections and what's stuck. We agree them in your written scope." },
      { q: "Where does the data come from?", a: "From your own system — orders, payments and WhatsApp — so you don't have to type anything twice." },
      { q: "Do I need Desk or Ledger first?", a: "No. Pulse can start with what you have and grow as you add blocks." },
    ],
  },
  {
    slug: "ledger",
    name: "Webify Ledger",
    short: "Ledger",
    colour: "--haldi",
    icon: "Receipt",
    group: "run",
    becomes: "GST invoices, payment matching, CA export",
    oneLiner: "Built for you to invoice and reconcile without the month-end panic.",
    example: "Invoice auto-created from every payment.",
    headline: "Calm filing weeks.",
    capabilities: ["GST invoices", "Payment matching", "Due reminders", "CA export", "Expense notes"],
    tailoredFor: [
      { business: "Retail", how: "An invoice for every UPI payment, matched automatically." },
      { business: "Manufacturer", how: "Dealer invoices with the right GST split." },
      { business: "Services", how: "Retainer invoices and due reminders." },
      { business: "Exporter", how: "Export invoices your CA can file from." },
    ],
    channelSlug: "ledger",
    includedFrom: "command",
    photo: "IMG-B06",
    svg: "InvoiceFan",
    waMessage: "Hi! I'm interested in Webify Ledger for my business.",
    filter: "comply",
    related: ["pay", "connect", "file"],
    pricing: { included: "Included in Command", addon: { slug: "ledger", on: "Business" } },
    faqs: [
      { q: "Do you replace my CA?", a: "No. We work alongside your CA. Ledger gives them clean records — an invoice for every payment — so filing isn't a reconstruction." },
      { q: "Does it work with Tally?", a: "Yes. With Webify Connect, invoices and payments can flow into Tally or Zoho Books." },
      { q: "Which plan includes it?", a: "Command includes it. On Business it's a monthly add-on." },
    ],
  },
  {
    slug: "file",
    name: "Webify File",
    short: "File",
    colour: "--marigold",
    icon: "custom:stamp",
    group: "run",
    becomes: "Registrations — we file them for you",
    oneLiner: "Built for you to get legal before you get loud.",
    example: "GST, Udyam, IEC filed by us; UK VAT & EU IOSS coordinated with a registered overseas agent/intermediary.",
    headline: "Get legal before you get loud.",
    capabilities: ["GST", "Udyam", "IEC", "UK VAT", "EU IOSS", "Document checklist"],
    tailoredFor: [
      { business: "New founder", how: "GST and Udyam in the right order for your business." },
      { business: "Exporter", how: "IEC, plus UK VAT / EU IOSS through a registered agent." },
      { business: "Home business", how: "Going formal without the paperwork maze." },
      { business: "Growing firm", how: "A new entity or branch registered properly." },
    ],
    includedFrom: "business",
    photo: "IMG-B07",
    svg: "FilingStamp",
    waMessage: "Hi! I'm interested in Webify File for my business.",
    filter: "comply",
    related: ["ledger", "workspace", "site"],
    pricing: { included: "Our GST and Udyam filing fee is included in Business; Command adds IEC" },
    faqs: [
      { q: "Who actually files the registration?", a: "We do, using documents and one-time passwords you share. Government fees are paid in your name." },
      { q: "What do filings cost on their own?", a: "Our fee and the government fee are always separate lines — see the registrations page for each filing. Clients on a monthly plan pay a lower filing fee." },
      { q: "Can you do UK VAT or EU IOSS?", a: "We coordinate them with a registered overseas agent or intermediary. They're quoted per case, and the agent's fees are separate." },
    ],
  },
  {
    slug: "desk",
    name: "Webify Desk",
    short: "Desk",
    colour: "--indigo",
    icon: "Kanban",
    group: "run",
    becomes: "Your CRM or ERP — leads, customers, orders, stock, follow-ups",
    oneLiner: "Built for you to track every lead, order and follow-up your way.",
    example: "Coaching: admissions pipeline. Manufacturer: orders, production and dispatch.",
    headline: "A CRM or ERP that works the way you do.",
    capabilities: ["Leads & follow-ups", "Customers", "Quotes & orders", "Stock", "Production / dispatch", "Reports", "Custom, or on Odoo / Zoho / Microsoft / Google"],
    tailoredFor: [
      { business: "Coaching", how: "An admissions pipeline from enquiry to enrolled." },
      { business: "Manufacturer", how: "Orders, production and dispatch on one board." },
      { business: "Real estate", how: "Site visits and follow-ups per buyer." },
      { business: "Trader", how: "Dealer orders, credit and dues." },
    ],
    includedFrom: "command",
    photo: "IMG-B09",
    svg: "PipelineBoard",
    waMessage: "Hi! I'd like a custom CRM/ERP for my business. Can we discuss?",
    filter: "track",
    related: ["team", "chat", "pulse"],
    pricing: { included: "Desk Lite from Business; full CRM/ERP on Command", addon: { slug: "desk-lite", on: "Starter" } },
    faqs: [
      { q: "Custom, or Zoho / Odoo?", a: "Whichever fits. We build custom, adapt our prototype, or configure Odoo or Zoho — and tell you the licence costs up front." },
      { q: "Can you move my Excel or Tally data in?", a: "Yes. Data migration is a one-time add-on, quoted on the size of your data." },
      { q: "Can staff see only their own leads?", a: "Yes. Role-based access is part of every Desk build." },
    ],
  },
  {
    slug: "team",
    name: "Webify Team",
    short: "Team",
    colour: "--mehendi",
    icon: "UsersThree",
    group: "run",
    becomes: "Employee portal, HR and role-based access",
    oneLiner: "Built for you to give each person exactly the access they need.",
    example: "Attendance, leave, tasks; staff see only what their role allows.",
    headline: "Your team sees what they need. Nothing more.",
    capabilities: ["Staff login", "Roles & permissions", "Attendance", "Leave", "Tasks", "Documents", "Restricted data views", "Audit log"],
    tailoredFor: [
      { business: "Factory", how: "Shift attendance and supervisor-only views." },
      { business: "Clinic chain", how: "Each branch sees its own patients and schedule." },
      { business: "Coaching staff", how: "Teachers see their batches; accounts see fees." },
      { business: "Retail outlets", how: "Outlet staff see their stock, not the whole business." },
    ],
    includedFrom: "command",
    photo: "IMG-B10",
    svg: "AccessLayers",
    waMessage: "Hi! I need an employee portal with role-based access for my team.",
    filter: "track",
    related: ["desk", "workspace", "connect"],
    pricing: { included: "Included in Command", addon: { slug: "team", on: "Business" } },
    faqs: [
      { q: "Can staff see only what they need?", a: "Yes. Each role sees only its own data and screens; the owner sees everything." },
      { q: "What happens when someone leaves?", a: "Their login is switched off the same day — by you, or by us on WhatsApp — and their records stay with the business." },
      { q: "Does it handle attendance and leave?", a: "Yes, along with tasks and documents. We include only what your team will actually use." },
    ],
  },
  {
    slug: "workspace",
    name: "Webify Workspace",
    short: "Workspace",
    colour: "--marigold",
    icon: "Briefcase",
    group: "run",
    becomes: "Business email, docs, drive and calendars",
    oneLiner: "Built for you to run email and files in your business name.",
    example: "Google Workspace or Microsoft 365 set up, or our own stack if you don't need either.",
    headline: "Business email and files, set up properly.",
    capabilities: ["Domain email", "Shared drive", "Calendars", "Google Workspace or Microsoft 365 or our own stack", "Migration from personal Gmail", "Access for staff"],
    tailoredFor: [
      { business: "New business", how: "Email on your domain from day one." },
      { business: "Growing team", how: "Shared drives and calendars per team." },
      { business: "Exporter", how: "Professional email buyers abroad trust." },
      { business: "Any office", how: "Moving off personal Gmail without losing mail." },
    ],
    includedFrom: "starter",
    photo: "IMG-B11",
    svg: "WorkspaceMock",
    waMessage: "Hi! I need business email and docs set up (Google / Microsoft / your stack).",
    filter: "connect",
    related: ["team", "site", "connect"],
    pricing: { included: "Business email setup is ₹0 in every plan; licences are billed by Google or Microsoft" },
    faqs: [
      { q: "Google Workspace or Microsoft 365?", a: "Whichever fits how you work — or our own stack if you don't need either. Licences are billed by Google or Microsoft." },
      { q: "Can you move my old Gmail?", a: "Yes. Mailbox migration is a small one-time add-on per mailbox." },
      { q: "Will staff get their own email?", a: "Yes, on your domain, with shared drives and calendars set up by team." },
    ],
  },
  {
    slug: "connect",
    name: "Webify Connect",
    short: "Connect",
    colour: "--dusk",
    icon: "PlugsConnected",
    group: "see",
    becomes: "The integration layer tying everything to your existing tools",
    oneLiner: "Built for you to make the tools you already use talk to each other.",
    example: "Tally, Zoho, Odoo, Shiprocket, Google Sheets, webhooks.",
    headline: "Everything talks to everything.",
    capabilities: ["Webhooks", "APIs", "Tally", "Zoho", "Odoo", "Google Sheets", "Microsoft 365", "Shiprocket", "Custom integrations"],
    tailoredFor: [
      { business: "Manufacturer", how: "Orders flow into Tally without re-typing." },
      { business: "Distributor", how: "Dealer orders sync to dispatch." },
      { business: "Multi-outlet", how: "Every outlet reports into one sheet or dashboard." },
      { business: "Retail", how: "Online orders push to Shiprocket automatically." },
    ],
    includedFrom: "command",
    photo: "IMG-B08",
    svg: "ConnectHub",
    waMessage: "Hi! I'm interested in Webify Connect for my business.",
    filter: "connect",
    related: ["desk", "ledger", "pulse"],
    pricing: { included: "3 integrations included in Command", addon: { slug: "integration", on: "Business" } },
    faqs: [
      { q: "Which tools can you connect?", a: "Tally, Zoho, Odoo, Google Sheets, Microsoft 365, Shiprocket, WhatsApp and anything with an API or webhooks." },
      { q: "What if the other tool changes?", a: "Monitoring and fixes are part of your monthly plan, so a broken connection is our problem, not yours." },
      { q: "Do I have to replace my tools?", a: "No. Connect keeps the tools you already use and makes them talk to each other." },
    ],
  },
];

export const BLOCK_REPEAT_LINE = "Eleven blocks. Endless combinations. One is yours.";

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}
