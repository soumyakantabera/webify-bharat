import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { BazaarStrip } from "@/components/collage";
import { LogoChip } from "@/components/LogoChip";
import { Webu } from "@/components/Webu";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { logosIn, TRADEMARK_DISCLAIMER } from "@/lib/logos";
import { FOOTER_COLUMNS } from "@/lib/nav";
import { BUSINESS, filled, SITE } from "@/lib/site";
import { WA_MSG } from "@/lib/wa";
import type { WebuState } from "@/components/Webu";

/** A page's closing CTA band. Replaces the default pre-footer copy so pages never stack two bands. */
export type CtaBand = {
  title: string;
  accent?: { phrase: string; meaning: string };
  message?: string;
  label?: string;
  webu?: WebuState;
  path?: string;
};

const DEFAULT_BAND: CtaBand = {
  title: "Every business is different. Yours deserves a system built for it.",
  accent: { phrase: "Har business alag hai.", meaning: "every business is different." },
  message: WA_MSG.default,
  webu: "waving",
};

/** Global footer (content-plan §8): pre-footer CTA band, link columns, strips. */
export default function Footer({ cta }: { cta?: CtaBand }) {
  const band = { ...DEFAULT_BAND, ...cta };
  const details = [
    { label: "Legal name", value: BUSINESS.legalName },
    { label: "Constitution", value: BUSINESS.constitution },
    { label: "Address", value: BUSINESS.address },
    { label: "GSTIN", value: BUSINESS.gstin },
    { label: "Udyam", value: BUSINESS.udyam },
    { label: "Phone", value: BUSINESS.phone },
  ].filter((d) => filled(d.value));

  return (
    <>
      <section className="cta-band-v2" data-wa-zone="pre-footer" aria-labelledby="cta-band-title">
        <svg className="wave-top" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 V18 C240 0 480 36 720 18 S1200 0 1440 18 V40 Z" fill="currentColor" />
        </svg>
        <BazaarStrip className="cta-band-bazaar" decorative />
        <div className="container cta-band-inner">
          <Webu state={band.webu ?? "waving"} size={112} className="cta-band-webu" />
          <div className="cta-band-copy">
            <h2 id="cta-band-title">{band.title}</h2>
            {band.accent ? (
              <p className="hinglish">
                {band.accent.phrase} <span>— {band.accent.meaning}</span>
              </p>
            ) : null}
            <div className="cta-band-actions">
              <WhatsAppCTA context="pre-footer" message={band.message} label={band.label} path={band.path} />
              <span className="cta-band-promise">{SITE.replyPromise}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="sf-top">
            <div className="sf-brand">
              <Link href="/" className="sf-logo" aria-label="Webify Bharat home">
                <BrandLogo variant="dark" />
              </Link>
              <p>{SITE.description}</p>
              <p className="sf-promise">{SITE.replyPromise}</p>
            </div>
            <div className="sf-cols">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title} className="sf-col">
                  <h2>{col.title}</h2>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="sf-strip">
            <h2>Payments we set up</h2>
            <ul className="logo-row">
              {logosIn("pay").map((l) => (
                <li key={l.id}>
                  <LogoChip logo={l} />
                </li>
              ))}
            </ul>
          </div>
          <div className="sf-strip">
            <h2>Built on</h2>
            <ul className="logo-row">
              {logosIn("build")
                .filter((l) => l.id === "nextjs" || l.id === "github-pages")
                .map((l) => (
                  <li key={l.id}>
                    <LogoChip logo={l} />
                  </li>
                ))}
            </ul>
          </div>

          {details.length ? (
            <dl className="sf-details">
              {details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </dd>
              </div>
            </dl>
          ) : null}

          <div className="sf-bottom">
            <p>
              Made in Kolkata for all of Bharat · © {new Date().getFullYear()} {BUSINESS.legalName}
            </p>
            <p className="sf-disclaimer">{TRADEMARK_DISCLAIMER}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
