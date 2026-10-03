type Shot = {
  images: [string, string, string];
  alt: string;
  kicker: string;
  figure: string;
  note: string;
  points: string[];
  footer: string;
};

const SHOTS: Record<string, Shot> = {
  services: {
    images: ["/images/snapshots/market-mandi.webp", "/images/snapshots/market-textile.webp", "/images/snapshots/market-spice.webp"],
    alt: "Traders in an Indian vegetable wholesale market",
    kicker: "Extra per organic lead",
    figure: "₹0",
    note: "After the site is yours",
    points: ["You own the URL and the list", "WhatsApp and UPI, your login", "GST is already in the card"],
    footer: "WhatsApp · +91 83360 97642",
  },
  pricing: {
    images: ["/images/snapshots/market-electronics.webp", "/images/snapshots/market-grain.webp", "/images/snapshots/market-textile.webp"],
    alt: "A buyer at an Indian electronics wholesale counter",
    kicker: "Packages start at",
    figure: "₹9,999",
    note: "One invoice for the whole card",
    points: ["Launch includes GST and Udyam", "Growth adds IEC", "A portal fee stays in your name"],
    footer: "No per-lead fee after delivery",
  },
  registrations: {
    images: ["/images/snapshots/market-spice.webp", "/images/snapshots/market-mandi.webp", "/images/snapshots/market-flower.webp"],
    alt: "Sacks being weighed in an Indian spice godown",
    kicker: "GST filing from",
    figure: "₹4,999",
    note: "incl. GST · portal fee separate",
    points: ["Our fee and the department’s fee", "₹0 when it rides with a package", "We are not the portal"],
    footer: "Udyam from ₹2,499",
  },
  charges: {
    images: ["/images/snapshots/market-grain.webp", "/images/snapshots/market-electronics.webp", "/images/snapshots/market-spice.webp"],
    alt: "Rice sacks moving through an Indian wholesale yard",
    kicker: "Not in the card",
    figure: "Extra",
    note: "Quoted before you pay",
    points: ["Hosting, domain, gateway", "WhatsApp conversation charges", "A department receipt stays theirs"],
    footer: "Nothing folded into the card",
  },
  cities: {
    images: ["/images/snapshots/market-flower.webp", "/images/snapshots/market-mandi.webp", "/images/snapshots/market-grain.webp"],
    alt: "A flower wholesale market before sunrise",
    kicker: "For a name people search",
    figure: "Local",
    note: "Not a directory lead",
    points: ["Every state capital", "Directories stay optional", "You keep the customer"],
    footer: "WhatsApp · +91 83360 97642",
  },
  blog: {
    images: ["/images/snapshots/market-textile.webp", "/images/snapshots/market-flower.webp", "/images/snapshots/market-electronics.webp"],
    alt: "Cloth rolls in an Indian textile wholesale lane",
    kicker: "Written for an owner",
    figure: "Guide",
    note: "No promise of more sales",
    points: ["Websites, payments, WhatsApp", "The work, not a slogan", "Then you decide"],
    footer: "Same facts as the pricing page",
  },
  work: {
    images: ["/images/snapshots/market-counter.webp", "/images/snapshots/market-textile.webp", "/images/snapshots/market-mandi.webp"],
    alt: "A shop owner at his own wholesale counter",
    kicker: "Not a mockup",
    figure: "Live",
    note: "Until a client says we can show it",
    points: ["Orders, chat, and the ledger", "A format, not a fake case", "You keep the login"],
    footer: "Illustrative until approved",
  },
  contact: {
    images: ["/images/snapshots/market-mandi.webp", "/images/snapshots/market-flower.webp", "/images/snapshots/market-textile.webp"],
    alt: "A trader in an Indian wholesale market",
    kicker: "Then we talk",
    figure: "5 lines",
    note: "is enough to start",
    points: ["A site, a filing, or both", "WhatsApp +91 83360 97642", "Business hours, not a bot"],
    footer: "webifybharat@gmail.com",
  },
  legal: {
    images: ["/images/snapshots/market-spice.webp", "/images/snapshots/market-electronics.webp", "/images/snapshots/market-grain.webp"],
    alt: "A spice wholesale godown in India",
    kicker: "What you pay for",
    figure: "Output",
    note: "Not a rise in sales",
    points: ["The site, the filing, or the note", "No refund once that is handed over", "Kolkata · sole proprietorship"],
    footer: "webifybharat@gmail.com",
  },
  missing: {
    images: ["/images/snapshots/market-flower.webp", "/images/snapshots/market-grain.webp", "/images/snapshots/market-textile.webp"],
    alt: "An Indian wholesale market lane",
    kicker: "This page",
    figure: "404",
    note: "The link may be old",
    points: ["Go home", "Or write to us", "Nothing else was here"],
    footer: "WhatsApp · +91 83360 97642",
  },
};

const BADGES: Record<string, { badge: string; sub: string }> = {
  services: { badge: "₹0", sub: "EXTRA" },
  pricing: { badge: "ONE", sub: "BILL" },
  registrations: { badge: "2", sub: "FEES" },
  charges: { badge: "SEEN", sub: "FIRST" },
  cities: { badge: "YOUR", sub: "CITY" },
  blog: { badge: "0", sub: "HYPE" },
  work: { badge: "YOU", sub: "OWN" },
  contact: { badge: "WA", sub: "CHAT" },
  legal: { badge: "NO", sub: "REFUND" },
  missing: { badge: "?", sub: "LOST" },
};

export function HeroShot({
  kind = "services",
  kicker,
  figure,
  note,
  points,
  footer,
}: {
  kind?: string;
  kicker?: string;
  figure?: string;
  note?: string;
  points?: string[];
  footer?: string;
}) {
  const shot = SHOTS[kind] ?? SHOTS.services;
  const mark = BADGES[kind] ?? BADGES.services;
  const rows = points?.length ? points.slice(0, 3) : shot.points;

  return (
    <aside className="hero-shot" aria-label={`Summary: ${figure ?? shot.figure}`}>
      <div className="hero-shot-frame">
        <div className="hero-shot-collage">
          {shot.images.map((src, index) => (
            <img
              key={src + index}
              className={`hero-shot-photo hero-shot-photo-${["a", "b", "c"][index]}`}
              src={src}
              alt={index === 0 ? shot.alt : ""}
              width={1600}
              height={1200}
            />
          ))}
        </div>
        <span className="hero-shot-badge" aria-hidden="true">
          <span className="hero-shot-disc">
            <strong>{mark.badge}</strong>
            <small>{mark.sub}</small>
          </span>
        </span>
        <div className="hero-shot-card">
          <div className="hero-shot-slip">
            <div className="hero-shot-body">
              <p className="hero-shot-kicker">{kicker ?? shot.kicker}</p>
              <p className="hero-shot-figure">{figure ?? shot.figure}</p>
              <p className="hero-shot-note">{note ?? shot.note}</p>
              <ul className="hero-shot-lines">
                {rows.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <p className="hero-shot-foot">{footer ?? shot.footer}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
