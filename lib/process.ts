/**
 * How we work (content-plan §3, §9.5).
 */
export type ProcessStop = {
  name: string;
  what: string;
  get: string;
  colour: string;
  icon: string;
  photo?: string;
};

export const PROCESS_STOPS: ProcessStop[] = [
  { name: "Hello on WhatsApp", what: "You message us.", get: "A real person replies.", colour: "--wa", icon: "ChatCircleDots", photo: "IMG-R01" },
  { name: "Chai-pe-charcha", what: "A free discovery chat or call.", get: "Clarity on the real problem.", colour: "--rani", icon: "custom:chai" },
  { name: "Prototype walkthrough", what: "We show prototypes close to your business.", get: "See before you commit.", colour: "--indigo", icon: "Flask", photo: "IMG-R03" },
  { name: "Measure", what: "We map your workflow.", get: "A one-page workflow map.", colour: "--haldi", icon: "Ruler", photo: "IMG-B09" },
  { name: "Scope & price", what: "Blocks, timeline, setup and monthly price.", get: "A written scope on WhatsApp.", colour: "--marigold", icon: "FileText" },
  { name: "Kick-off", what: "Setup + first month via a payment link on WhatsApp (Custom builds: 40/40/20).", get: "Your start date is locked.", colour: "--peacock", icon: "Link" },
  { name: "Design", what: "A custom design in your brand.", get: "A clickable preview.", colour: "--rani", icon: "PaintBrush", photo: "IMG-B06" },
  { name: "Build", what: "Blocks built; payments, WhatsApp and GST wired.", get: "A private preview link.", colour: "--indigo", icon: "Wrench" },
  { name: "Revise", what: "Feedback rounds agreed in the scope.", get: "A version you're happy with.", colour: "--haldi", icon: "PencilSimpleLine" },
  { name: "Launch", what: "Domain live, payments tested, team trained.", get: "A live system + walkthrough video.", colour: "--mehendi", icon: "RocketLaunch", photo: "IMG-R04" },
  { name: "Care & grow", what: "Your monthly plan: hosting, backups, fixes, change hours, improvements. Move up a stage as you grow.", get: "A partner, not a handover PDF.", colour: "--peacock", icon: "Lifebuoy", photo: "IMG-R05" },
];

/**
 * Typical durations per path (§9.5 #3, §14 #3). Owner to fill week ranges.
 * MiniGantt stays hidden until `published` is true — never show placeholders.
 */
export const TYPICAL_TIMELINES = {
  published: false,
  label: "Typical — depends on scope",
  rows: [
    { path: "Launch", phases: [{ name: "Registrations", weeks: "[[ ]]" }, { name: "Brand & site", weeks: "[[ ]]" }, { name: "Payments live", weeks: "[[ ]]" }] },
    { path: "Organise", phases: [{ name: "Measure", weeks: "[[ ]]" }, { name: "Build", weeks: "[[ ]]" }, { name: "Launch", weeks: "[[ ]]" }] },
    { path: "Grow", phases: [{ name: "Plan", weeks: "[[ ]]" }, { name: "Build", weeks: "[[ ]]" }, { name: "Launch", weeks: "[[ ]]" }] },
  ],
} as const;

/** What we need from you (§9.5 #4). */
export const NEEDS_FROM_YOU = ["Logo", "Photos", "Product or service list", "Payment KYC documents", "Bank details"];

/** Launch checklist (§9.3 #2). */
export const LAUNCH_CHECKLIST: { item: string; block?: string }[] = [
  { item: "Registrations — GST, Udyam, IEC if exporting", block: "file" },
  { item: "Name, logo and brand basics" },
  { item: "Domain + business email", block: "workspace" },
  { item: "Custom website or store", block: "site" },
  { item: "Payment gateway account + KYC help (Razorpay/Cashfree, Stripe for abroad)", block: "pay" },
  { item: "WhatsApp Business number + workflows", block: "chat" },
  { item: "Google Business Profile + Maps" },
  { item: "Invoicing from day one", block: "ledger" },
  { item: "Owner dashboard", block: "pulse" },
];

/** Launch countdown day cards (§9.3 #3). Durations depend on approvals, so none are shown. */
export const LAUNCH_STEPS = ["Chat", "Registrations filed", "Brand ready", "Site preview", "Payments live", "Launch day"];
