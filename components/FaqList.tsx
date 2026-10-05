import type { CoreFaq } from "@/lib/faq-core";
import { glossify } from "@/components/clarity/glossify";

/** Accordion of Q&As using native <details> (keyboard-operable, no JS) + FAQPage JSON-LD. */
export function FaqList({ items, jsonLd = true }: { items: CoreFaq[]; jsonLd?: boolean }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="faq-list">
      {items.map((f) => (
        <details key={f.key} className="faq-row">
          <summary>{glossify(f.q)}</summary>
          <p>{glossify(f.a)}</p>
        </details>
      ))}
      {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /> : null}
    </div>
  );
}
