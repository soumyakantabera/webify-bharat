import Link from "next/link";
import type { LegalSection } from "@/lib/legal";
import { legalUpdated } from "@/lib/legal";

export function LegalDoc({
  kicker,
  title,
  lede,
  sections,
}: {
  kicker: string;
  title: string;
  lede: string;
  sections: LegalSection[];
}) {
  return (
    <article className="legal-doc">
      <p className="eyebrow">
        <span className="dot" /> {kicker}
      </p>
      <h1>{title}</h1>
      <p className="muted-copy">{lede}</p>
      <p className="legal-updated">Last updated {legalUpdated}.</p>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <nav className="legal-links" aria-label="Other policies">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/refund">Refunds</Link>
      </nav>
    </article>
  );
}
