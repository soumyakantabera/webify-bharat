/** Five ways we build (content-plan §2.4a). The route changes where we start — and the setup cost. */
export type BuildRoute = { slug: string; name: string; when: string; line: string; cost: string; icon: string; photo: string; href: string };

export const BUILD_ROUTES: BuildRoute[] = [
  { slug: "prototype", name: "Adapt our prototype / existing stack", when: "Your need is close to something we've already built.", line: "Our proven base, rebuilt around you.", cost: "Lowest — starts at plan price", icon: "Lightning", photo: "IMG-A02", href: "/prototypes" },
  { slug: "scratch", name: "From scratch", when: "A unique workflow, or you want no third-party licence costs.", line: "Designed and coded only for you.", cost: "Quoted per scope", icon: "Ruler", photo: "IMG-B09", href: "/how-we-work" },
  { slug: "open-source", name: "On open source", when: "Standard ERP/CRM needs with custom screens on top (Odoo, ERPNext).", line: "Proven core. Your workflow on top.", cost: "Custom pricing", icon: "PuzzlePiece", photo: "IMG-B10", href: "/integrations#by-job" },
  { slug: "budget", name: "Budget route", when: "Tight budget, standard needs — configured Zoho / Odoo apps.", line: "Ready apps, set up properly for you.", cost: "Custom pricing + vendor licence", icon: "PiggyBank", photo: "IMG-N01", href: "/integrations#budget-route" },
  { slug: "your-tools", name: "On what you already use", when: "You're on Google Workspace, Microsoft 365, Zoho or Tally.", line: "We build around your tools, not over them.", cost: "Custom pricing + vendor licence", icon: "PlugsConnected", photo: "IMG-B11", href: "/integrations" },
];

export const WHITE_LABEL_LINE = "Your brand or ours — every route can be white-labelled in your branding.";
