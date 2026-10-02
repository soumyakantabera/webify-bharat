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
    images: ["/images/snapshots/services.webp", "/images/snapshots/contact.webp", "/images/snapshots/work.webp"],
    alt: "A shop owner with her website and WhatsApp open",
    kicker: "Extra per organic lead",
    figure: "₹0",
    note: "After the site is yours",
    points: ["You own the URL and the list", "WhatsApp and UPI, your login", "GST is already in the card"],
    footer: "WhatsApp · +91 83360 97642",
  },
  pricing: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/services.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking a single price card",
    kicker: "Packages start at",
    figure: "₹9,999",
    note: "incl. 18% GST",
    points: ["Launch includes GST and Udyam", "Growth adds IEC", "A portal fee stays in your name"],
    footer: "No per-lead fee after delivery",
  },
  registrations: {
    images: ["/images/snapshots/registrations.webp", "/images/snapshots/legal.webp", "/images/snapshots/pricing.webp"],
    alt: "A person preparing a business filing",
    kicker: "GST filing from",
    figure: "₹4,999",
    note: "incl. GST · portal fee separate",
    points: ["Our fee and the department’s fee", "₹0 when it rides with a package", "We are not the portal"],
    footer: "Udyam from ₹2,499",
  },
  charges: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/registrations.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking what is not in the price",
    kicker: "Not in the card",
    figure: "Extra",
    note: "Quoted before you pay",
    points: ["Hosting, domain, gateway", "WhatsApp conversation charges", "A department receipt stays theirs"],
    footer: "Nothing folded into the card",
  },
  cities: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/services.webp", "/images/snapshots/work.webp"],
    alt: "A shopkeeper in the doorway of a city shop",
    kicker: "For a name people search",
    figure: "Local",
    note: "Not a directory lead",
    points: ["Every state capital", "Directories stay optional", "You keep the customer"],
    footer: "WhatsApp · +91 83360 97642",
  },
  blog: {
    images: ["/images/snapshots/blog.webp", "/images/snapshots/contact.webp", "/images/snapshots/services.webp"],
    alt: "Someone writing a short business guide",
    kicker: "Written for an owner",
    figure: "Guide",
    note: "No promise of more sales",
    points: ["Websites, payments, WhatsApp", "The work, not a slogan", "Then you decide"],
    footer: "Same facts as the pricing page",
  },
  work: {
    images: ["/images/snapshots/work.webp", "/images/snapshots/cities.webp", "/images/snapshots/services.webp"],
    alt: "Two people reviewing the day's orders",
    kicker: "Not a mockup",
    figure: "Live",
    note: "Until a client says we can show it",
    points: ["Orders, chat, and the ledger", "A format, not a fake case", "You keep the login"],
    footer: "Illustrative until approved",
  },
  contact: {
    images: ["/images/snapshots/contact.webp", "/images/snapshots/services.webp", "/images/snapshots/blog.webp"],
    alt: "A shop owner and a consultant talking",
    kicker: "Then we talk",
    figure: "5 lines",
    note: "is enough to start",
    points: ["A site, a filing, or both", "WhatsApp +91 83360 97642", "Business hours, not a bot"],
    footer: "webifybharat@gmail.com",
  },
  legal: {
    images: ["/images/snapshots/legal.webp", "/images/snapshots/registrations.webp", "/images/snapshots/contact.webp"],
    alt: "Reading the terms of the work",
    kicker: "What you pay for",
    figure: "Output",
    note: "Not a rise in sales",
    points: ["The site, the filing, or the note", "No refund once that is handed over", "Kolkata · sole proprietorship"],
    footer: "webifybharat@gmail.com",
  },
  missing: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/blog.webp", "/images/snapshots/contact.webp"],
    alt: "A shopkeeper outside a city shop",
    kicker: "This page",
    figure: "404",
    note: "The link may be old",
    points: ["Go home", "Or write to us", "Nothing else was here"],
    footer: "WhatsApp · +91 83360 97642",
  },
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
  const rows = points?.length ? points.slice(0, 3) : shot.points;

  return (
    <aside className="hero-shot" aria-label={`Summary: ${figure ?? shot.figure}`}>
      <div className="hero-shot-frame">
        <div className="hero-shot-collage">
          {shot.images.map((src, index) => (
            <img
              key={src + index}
              src={src}
              alt={index === 0 ? shot.alt : ""}
              width={1600}
              height={1200}
            />
          ))}
        </div>
        <div className="hero-shot-card">
          <p className="hero-shot-kicker">{kicker ?? shot.kicker}</p>
          <p className="hero-shot-figure">{figure ?? shot.figure}</p>
          <p className="hero-shot-note">{note ?? shot.note}</p>
          <ul>
            {rows.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="hero-shot-foot">{footer ?? shot.footer}</p>
        </div>
      </div>
    </aside>
  );
}
