import Link from "next/link";
import { glossify } from "@/components/clarity/glossify";
import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { quoteStage } from "@/lib/estimator";
import { featureRows, limitRows, stages, type FeatureCell, type FeatureGroup, type LimitValue, type Stage } from "@/lib/offers";
import { gstNote } from "@/lib/site";
import { waTier } from "@/lib/wa";

export { BillingToggle } from "./BillingToggle";
export { ScopeEstimator } from "./ScopeEstimator";

/** Stage card (§10.8 #3): monthly large, setup small, 6 features, 4 limits, CTA. Shows annual price when toggled. */
export function StageCard({ stage }: { stage: Stage }) {
  const gst = gstNote();
  const monthly = stage.monthly.replace(/^from\s+/, "");
  return (
    <article className={`stage-card${stage.popular ? " is-popular" : ""}`} id={`stage-${stage.slug}`}>
      {stage.popular ? <span className="ribbon-badge">Most chosen</span> : null}
      <Img slot={stage.photo} mask="none" className="tier-strip" width={600} height={150} decorative />
      <div className="tier-body">
        <h3>
          <Icon name={stage.icon} size={20} className="stage-ic" /> <Link href={`/pricing/${stage.slug}`}>{stage.name}</Link>
        </h3>
        <p className="tier-tagline">{stage.tagline}</p>
        <p className="tier-price price-monthly">
          {stage.from ? <small className="tier-from">from</small> : null}
          <span className="mono">{monthly}</span>
          <small>/month{gst ? ` ${gst}` : ""}</small>
        </p>
        <p className="tier-price price-annual">
          <span className="mono">{stage.annual}</span>
          {stage.from ? null : <small>pay 10 months, get 12{gst ? ` · ${gst}` : ""}</small>}
        </p>
        <p className="tier-setup">
          Setup {stage.from ? "from " : ""}
          <span className="mono">{stage.setup.replace(/^from\s+/, "")}</span> · {stage.bestFor}
        </p>
        <ul className="ticks">
          {stage.keyFeatures.map((f) => (
            <li key={f}>{glossify(f)}</li>
          ))}
        </ul>
        <ul className="tier-limits">
          {stage.keyLimits.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <WhatsAppCTA message={waTier(stage.name)} context={`stage-${stage.slug}`} label="Get my quote" />
      </div>
    </article>
  );
}

function Cell({ v }: { v: FeatureCell }) {
  if (v === true) return <span className="cell-yes" role="img" aria-label="Included"><Icon name="CheckCircle" size={20} weight="fill" /></span>;
  if (v === false) return <span className="cell-no" role="img" aria-label="Not included"><Icon name="Minus" size={18} weight="bold" /></span>;
  return <span className="cell-text">{v}</span>;
}

function LimitCell({ v }: { v: LimitValue }) {
  if (v === null) return <span className="cell-no" role="img" aria-label="Not available"><Icon name="Minus" size={18} weight="bold" /></span>;
  if (v === "agreed") return <span className="cell-text">Agreed</span>;
  return <span className="mono">{v.toLocaleString("en-IN")}</span>;
}

const GROUPS: FeatureGroup[] = ["Website", "Sell & pay", "Run the business", "Marketing", "Support"];

/** Full comparison table (§10.8 #4): sticky header and first column, grouped features, then limits. */
export function CompareTable() {
  return (
    <div className="compare-wrap" tabIndex={0} role="region" aria-label="Plan comparison table, scrolls sideways">
      <table className="compare">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            {stages.map((s) => (
              <th key={s.slug} scope="col" className={s.popular ? "is-popular" : undefined}>
                {s.name}
                <small className="mono">{s.monthly}</small>
              </th>
            ))}
          </tr>
        </thead>
        {GROUPS.map((g) => (
          <tbody key={g}>
            <tr className="group-row">
              <th colSpan={5} scope="colgroup">{g}</th>
            </tr>
            {featureRows
              .filter((r) => r.group === g)
              .map((r) => (
                <tr key={r.label}>
                  <th scope="row">{glossify(r.label)}</th>
                  {stages.map((s) => (
                    <td key={s.slug} className={s.popular ? "is-popular" : undefined}>
                      <Cell v={r.cells[s.slug]} />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        ))}
        <tbody>
          <tr className="group-row">
            <th colSpan={5} scope="colgroup">Limits</th>
          </tr>
          {limitRows.map((r) => (
            <tr key={r.key}>
              <th scope="row">{glossify(r.label)}</th>
              {stages.map((s) => (
                <td key={s.slug} className={s.popular ? "is-popular" : undefined}>
                  <LimitCell v={r.cells[s.slug]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** "When to move up" (§10.8 #5): the §10.2 worked example as stacked bars, computed — not typed. */
export function MoveUpBar() {
  const needs = { users: 6, products: 250, orders: 0, locations: 1, integrations: 0 };
  const b = quoteStage("business", needs, []);
  const c = quoteStage("command", needs, []);
  const max = Math.max(b.monthly, c.monthly);
  const adds = ["Full CRM / ERP", "Staff portal with roles", "GST invoicing", "Integrations", "Stripe international payments", "15 users, 1,000 products"];
  return (
    <div className="move-up">
      <p className="move-up-case">A Business client with <strong>6 users</strong> and <strong>250 products</strong>:</p>
      <div className="mu-row">
        <span className="mu-label">Business + over-limits</span>
        <span className="mu-bar">
          <span className="mu-seg is-base" style={{ width: `${(b.base / max) * 100}%` }}>
            <span>Plan {inr(b.base)}</span>
          </span>
          {b.lines.map((l) => (
            <span key={l.label} className="mu-seg is-over" style={{ width: `${(l.amount / max) * 100}%` }} title={`${l.label}: ${inr(l.amount)}`}>
              <span className="sr-only">{l.label}: {inr(l.amount)}</span>
            </span>
          ))}
        </span>
        <span className="mono mu-total">{inr(b.monthly)}</span>
      </div>
      <p className="mu-breakdown">
        {inr(b.base)} + {b.lines.map((l) => `${inr(l.amount)} (${l.label.toLowerCase()})`).join(" + ")} = <strong>{inr(b.monthly)}/month</strong>
      </p>
      <div className="mu-row">
        <span className="mu-label">Command</span>
        <span className="mu-bar">
          <span className="mu-seg is-command" style={{ width: `${(c.monthly / max) * 100}%` }}>
            <span>{inr(c.monthly)}</span>
          </span>
        </span>
        <span className="mono mu-total">{inr(c.monthly)}</span>
      </div>
      <ul className="mini-chips" aria-label="What Command adds">
        {adds.map((a) => (
          <li key={a}>+ {a}</li>
        ))}
      </ul>
      <p className="caveat">
        Here Business is still cheaper. As limits grow, Command becomes the better deal — and adds a full CRM, staff portal, invoicing and integrations. We message you at 80% of any limit with both options and tell you which is cheaper. Nothing is charged without your OK.
      </p>
    </div>
  );
}

/** Small icon + text pair used in the extras / ownership / terms row. */
export function InfoCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="info-card">
      <h3>
        <Icon name={icon} size={22} /> {title}
      </h3>
      {children}
    </div>
  );
}
