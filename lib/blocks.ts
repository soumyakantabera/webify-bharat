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
    example: "Coaching: admissions pipeline. Manufacturer: orders → production → dispatch.",
    headline: "A CRM or ERP that works the way you do.",
    capabilities: ["Leads & follow-ups", "Customers", "Quotes & orders", "Stock", "Production / dispatch", "Reports", "Custom, or on Odoo / Zoho / Microsoft / Google"],
    tailoredFor: [
      { business: "Coaching", how: "An admissions pipeline from enquiry to enrolled." },
      { business: "Manufacturer", how: "Orders → production → dispatch on one board." },
      { business: "Real estate", how: "Site visits and follow-ups per buyer." },
      { business: "Trader", how: "Dealer orders, credit and dues." },
    ],
    includedFrom: "command",
    photo: "IMG-B09",
    svg: "PipelineBoard",
    waMessage: "Hi! I'd like a custom CRM/ERP for my business. Can we discuss?",
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
  },
];

export const BLOCK_REPEAT_LINE = "Eleven blocks. Endless combinations. One is yours.";

export function getBlock(slug: string) {
  return blocks.find((b) => b.slug === slug);
}
