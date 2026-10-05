import Link from "next/link";
import { glossify } from "@/components/clarity/glossify";
import { Img } from "@/components/collage";
import { StickerCard } from "@/components/tiles";
import { legalUpdated, type LegalDocData } from "@/lib/legal";

const TONES = ["rani", "peacock", "haldi", "mehendi"];

const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Legal page (content-plan §9.17): summary tiles, sticky TOC, "last updated", plain-language sections. */
export function LegalDoc({ kicker, title, lede, doc }: { kicker: string; title: string; lede: string; doc: LegalDocData }) {
  return (
    <>
      <section className="legal-hero" aria-labelledby="page-title">
        <div className="container legal-hero-grid">
          <div>
            <p className="kicker">{kicker}</p>
            <h1 id="page-title">{title}</h1>
            <p className="hero-sub">{lede}</p>
            <p className="legal-updated">Last updated {legalUpdated}.</p>
          </div>
          <Img slot="/images/snapshots/legal.webp" mask="rounded" className="legal-photo" width={420} height={300} alt="Documents on a desk" />
        </div>
      </section>
      <section className="section surface-2" aria-label="In short">
        <div className="container">
          <div className="sticker-grid is-four">
            {doc.summary.map((s, i) => (
              <StickerCard key={s.title} icon={s.icon} title={s.title} tone={TONES[i % TONES.length]}>
                {s.text}
              </StickerCard>
            ))}
          </div>
        </div>
      </section>
      <div className="container post-layout legal-layout">
        <aside className="post-toc" aria-label="Contents">
          <p className="post-toc-title">Contents</p>
          <ol>
            {doc.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${anchor(s.heading)}`}>{s.heading}</a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="post-body legal-doc">
          {doc.sections.map((s) => (
            <section key={s.heading} id={anchor(s.heading)}>
              <h2>{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p}>{glossify(p)}</p>
              ))}
            </section>
          ))}
          <nav className="legal-links" aria-label="Other policies">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/refund">Cancellations & refunds</Link>
          </nav>
        </article>
      </div>
    </>
  );
}
