import { Check, MessageCircle, ShieldCheck } from "lucide-react";

type Shot = {
  images: [string, string, string];
  alt: string;
  pill: string;
  kicker: string;
  figure: string;
  note: string;
  points: string[];
  footer: string;
  badge: string;
  badgeSub: string;
};

const SHOTS: Record<string, Shot> = {
  services: {
    images: ["/images/snapshots/services.webp", "/images/snapshots/contact.webp", "/images/snapshots/work.webp"],
    alt: "A shop owner with her website and WhatsApp open",
    pill: "You own it",
    kicker: "Extra per organic lead",
    figure: "₹0",
    note: "After the site is yours",
    points: ["You own the URL and the list", "WhatsApp and UPI, your login", "GST is already in the card"],
    footer: "WhatsApp · +91 83360 97642",
    badge: "GST",
    badgeSub: "IN",
  },
  pricing: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/services.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking a single price card",
    pill: "One invoice",
    kicker: "Packages start at",
    figure: "₹9,999",
    note: "incl. 18% GST",
    points: ["Launch includes GST and Udyam", "Growth adds IEC", "A portal fee stays in your name"],
    footer: "No per-lead fee after delivery",
    badge: "18%",
    badgeSub: "GST",
  },
  registrations: {
    images: ["/images/snapshots/registrations.webp", "/images/snapshots/legal.webp", "/images/snapshots/pricing.webp"],
    alt: "A person preparing a business filing",
    pill: "Two bills",
    kicker: "GST filing from",
    figure: "₹4,999",
    note: "incl. GST · portal fee separate",
    points: ["Our fee and the department’s fee", "₹0 when it rides with a package", "We are not the portal"],
    footer: "Udyam from ₹2,499",
    badge: "₹0",
    badgeSub: "IN",
  },
  charges: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/registrations.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking what is not in the price",
    pill: "Named first",
    kicker: "Not in the card",
    figure: "Extra",
    note: "Quoted before you pay",
    points: ["Hosting, domain, gateway", "WhatsApp conversation charges", "A department receipt stays theirs"],
    footer: "Nothing folded into the card",
    badge: "2",
    badgeSub: "BILLS",
  },
  cities: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/services.webp", "/images/snapshots/work.webp"],
    alt: "A shopkeeper in the doorway of a city shop",
    pill: "Your city",
    kicker: "For a name people search",
    figure: "Local",
    note: "Not a directory lead",
    points: ["Every state capital", "Directories stay optional", "You keep the customer"],
    footer: "WhatsApp · +91 83360 97642",
    badge: "IN",
    badgeSub: "CITY",
  },
  blog: {
    images: ["/images/snapshots/blog.webp", "/images/snapshots/contact.webp", "/images/snapshots/services.webp"],
    alt: "Someone writing a short business guide",
    pill: "A short read",
    kicker: "Written for an owner",
    figure: "Guide",
    note: "No promise of more sales",
    points: ["Websites, payments, WhatsApp", "The work, not a slogan", "Then you decide"],
    footer: "Same facts as the pricing page",
    badge: "0",
    badgeSub: "HYPE",
  },
  work: {
    images: ["/images/snapshots/work.webp", "/images/snapshots/cities.webp", "/images/snapshots/services.webp"],
    alt: "Two people reviewing the day's orders",
    pill: "The system",
    kicker: "Not a mockup",
    figure: "Live",
    note: "Until a client says we can show it",
    points: ["Orders, chat, and the ledger", "A format, not a fake case", "You keep the login"],
    footer: "Illustrative until approved",
    badge: "YOU",
    badgeSub: "OWN",
  },
  contact: {
    images: ["/images/snapshots/contact.webp", "/images/snapshots/services.webp", "/images/snapshots/blog.webp"],
    alt: "A shop owner and a consultant talking",
    pill: "Same day",
    kicker: "Then we talk",
    figure: "5",
    note: "lines is enough to start",
    points: ["A site, a filing, or both", "WhatsApp +91 83360 97642", "Business hours, not a bot"],
    footer: "webifybharat@gmail.com",
    badge: "WA",
    badgeSub: "NOW",
  },
  legal: {
    images: ["/images/snapshots/legal.webp", "/images/snapshots/registrations.webp", "/images/snapshots/contact.webp"],
    alt: "Reading the terms of the work",
    pill: "After delivery",
    kicker: "What you pay for",
    figure: "Output",
    note: "Not a rise in sales",
    points: ["The site, the filing, or the note", "No refund once that is handed over", "Kolkata · sole proprietorship"],
    footer: "webifybharat@gmail.com",
    badge: "NO",
    badgeSub: "REFUND",
  },
  missing: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/blog.webp", "/images/snapshots/contact.webp"],
    alt: "A shopkeeper outside a city shop",
    pill: "Not on this URL",
    kicker: "This page",
    figure: "404",
    note: "The link may be old",
    points: ["Go home", "Or write to us", "Nothing else was here"],
    footer: "WhatsApp · +91 83360 97642",
    badge: "?",
    badgeSub: "GONE",
  },
};

const ICONS = [Check, ShieldCheck, MessageCircle];

export function HeroShot({
  kind = "services",
  kicker,
  figure,
  note,
  points,
  footer,
  pill,
}: {
  kind?: string;
  kicker?: string;
  figure?: string;
  note?: string;
  points?: string[];
  footer?: string;
  pill?: string;
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
          <span className="hero-shot-badge">
            <strong>{shot.badge}</strong>
            <small>{shot.badgeSub}</small>
          </span>
          <p className="hero-shot-pill">
            <i />
            {pill ?? shot.pill}
          </p>
          <p className="hero-shot-kicker">{kicker ?? shot.kicker}</p>
          <p className="hero-shot-figure">
            {figure ?? shot.figure}
          </p>
          <p className="hero-shot-note">{note ?? shot.note}</p>
          <ul>
            {rows.map((line, index) => {
              const Icon = ICONS[index] ?? Check;
              return (
                <li key={line}>
                  <span>
                    <Icon size={15} strokeWidth={2.4} aria-hidden />
                  </span>
                  {line}
                </li>
              );
            })}
          </ul>
          <p className="hero-shot-foot">{footer ?? shot.footer}</p>
        </div>
      </div>
    </aside>
  );
}
