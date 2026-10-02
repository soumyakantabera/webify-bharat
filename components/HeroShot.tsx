type Shot = {
  images: [string, string, string];
  alt: string;
  title: string;
  lines: string[];
};

const SHOTS: Record<string, Shot> = {
  services: {
    images: ["/images/snapshots/services.webp", "/images/snapshots/contact.webp", "/images/snapshots/work.webp"],
    alt: "A shop owner with her website and WhatsApp open",
    title: "Site, chat, and checkout.",
    lines: ["You own the URL and the list", "No fee on an organic enquiry", "GST is already in the card"],
  },
  pricing: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/services.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking a single price card",
    title: "One invoice. GST inside.",
    lines: ["Launch includes GST and Udyam", "Growth adds IEC", "A portal fee stays in your name"],
  },
  registrations: {
    images: ["/images/snapshots/registrations.webp", "/images/snapshots/legal.webp", "/images/snapshots/pricing.webp"],
    alt: "A person preparing a business filing",
    title: "The paper, filed once.",
    lines: ["Our fee and the department's fee are separate", "Launch carries GST and Udyam", "We are not the portal"],
  },
  charges: {
    images: ["/images/snapshots/pricing.webp", "/images/snapshots/registrations.webp", "/images/snapshots/legal.webp"],
    alt: "An owner checking what is not in the price",
    title: "Two bills. Both named.",
    lines: ["Hosting, domain, gateway, WhatsApp", "A department receipt stays theirs", "Quoted before you pay"],
  },
  cities: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/services.webp", "/images/snapshots/work.webp"],
    alt: "A shopkeeper in the doorway of a city shop",
    title: "Your city. Your front door.",
    lines: ["For people who already search your name", "Directories stay optional", "Every state capital"],
  },
  blog: {
    images: ["/images/snapshots/blog.webp", "/images/snapshots/contact.webp", "/images/snapshots/services.webp"],
    alt: "Someone writing a short business guide",
    title: "A short answer. Then the work.",
    lines: ["Websites, payments, WhatsApp", "Written for an owner", "No promise of more sales"],
  },
  work: {
    images: ["/images/snapshots/work.webp", "/images/snapshots/cities.webp", "/images/snapshots/services.webp"],
    alt: "Two people reviewing the day's orders",
    title: "The system, not a mockup.",
    lines: ["Orders, chat, and the ledger", "Shown as a format until a client agrees", "You keep the login"],
  },
  contact: {
    images: ["/images/snapshots/contact.webp", "/images/snapshots/services.webp", "/images/snapshots/blog.webp"],
    alt: "A shop owner and a consultant talking",
    title: "Five lines. Then we talk.",
    lines: ["WhatsApp +91 83360 97642", "Same day in business hours", "A site, a filing, or both"],
  },
  legal: {
    images: ["/images/snapshots/legal.webp", "/images/snapshots/registrations.webp", "/images/snapshots/contact.webp"],
    alt: "Reading the terms of the work",
    title: "Delivery is the output.",
    lines: ["Not a rise in sales", "No refund after delivery", "Kolkata, sole proprietorship"],
  },
  missing: {
    images: ["/images/snapshots/cities.webp", "/images/snapshots/blog.webp", "/images/snapshots/contact.webp"],
    alt: "A shopkeeper outside a city shop",
    title: "This page is not here.",
    lines: ["The link may be old", "Go home, or write to us", "Nothing else was on this URL"],
  },
};

export function HeroShot({
  kind = "services",
  title,
  lines,
}: {
  kind?: string;
  title?: string;
  lines?: string[];
}) {
  const shot = SHOTS[kind] ?? SHOTS.services;
  const heading = title ?? shot.title;
  const points = lines?.length ? lines : shot.lines;

  return (
    <aside className="hero-shot" aria-label={`Summary: ${heading}`}>
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
        <div className="hero-shot-polaroid">
          <span className="hero-shot-tape" aria-hidden />
          <div className="hero-shot-copy">
            <strong>{heading}</strong>
            <ul>
              {points.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <em>Webify Bharat</em>
          </div>
        </div>
      </div>
    </aside>
  );
}
