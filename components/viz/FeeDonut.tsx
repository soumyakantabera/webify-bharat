import { registrations } from "@/lib/registrations";

const num = (s: string) => Number(s.replace(/[^\d]/g, "")) || 0;

/**
 * FeeDonut (content-plan §6.11): our fee vs government fee for the filings a
 * new business usually needs, with real fees from lib/registrations.ts.
 * Gateway fees are billed by the provider, so they're listed, not charted.
 */
export function FeeDonut({ slugs = ["gst", "udyam", "iec"] }: { slugs?: string[] }) {
  const items = registrations.filter((r) => slugs.includes(r.slug));
  const ours = items.reduce((t, r) => t + num(r.ourFee), 0);
  const govt = items.reduce((t, r) => t + num(r.govFee), 0);
  const total = ours + govt || 1;
  const r = 70;
  const c = 2 * Math.PI * r;
  const govtLen = (govt / total) * c;
  return (
    <div className="fee-donut">
      <svg viewBox="0 0 200 200" className="wb-svg fee-donut-svg" role="img" aria-label={`Our fee ₹${ours.toLocaleString("en-IN")}, government fees ₹${govt.toLocaleString("en-IN")}`}>
        <circle cx="100" cy="100" r={r} fill="none" stroke="#2B1E6B" strokeWidth="28" />
        <circle cx="100" cy="100" r={r} fill="none" stroke="#FFB400" strokeWidth="28" strokeDasharray={`${Math.max(govtLen, 3)} ${c}`} transform="rotate(-90 100 100)" />
        <text x="100" y="96" textAnchor="middle" fontSize="12" fill="#4A4458">Filings shown</text>
        <text x="100" y="116" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1B1030">{items.map((i) => i.short).join(" · ")}</text>
      </svg>
      <dl className="fee-legend">
        <div>
          <dt><span className="dot" style={{ background: "var(--indigo)" }} /> Our fee</dt>
          <dd className="mono">₹{ours.toLocaleString("en-IN")}</dd>
        </div>
        <div>
          <dt><span className="dot" style={{ background: "var(--haldi)" }} /> Government fees (paid in your name)</dt>
          <dd className="mono">₹{govt.toLocaleString("en-IN")}</dd>
        </div>
        <div>
          <dt><span className="dot is-hollow" /> Payment gateway fees</dt>
          <dd>Billed by the provider</dd>
        </div>
      </dl>
      <ul className="fee-rows">
        {items.map((i) => (
          <li key={i.slug}>
            <strong>{i.name}</strong> — our fee <span className="mono">{i.ourFee}</span>
            {i.planFee ? <> (plan clients <span className="mono">{i.planFee}</span>)</> : null}, government fee <span className="mono">{i.govFee}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
