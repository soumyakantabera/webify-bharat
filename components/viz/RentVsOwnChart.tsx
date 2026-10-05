"use client";

import { useId, useState } from "react";

type StageOpt = { slug: string; name: string; setup: number; monthly: number };

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

/**
 * RentVsOwnChart (content-plan §6.11): a 12-month comparison the visitor fills
 * with *their own* numbers — no defaults pretending to be facts. Renting =
 * commission on repeat orders; owning = setup + 12 months of the plan.
 */
export function RentVsOwnChart({ stages, gstNote = "" }: { stages: StageOpt[]; gstNote?: string }) {
  const id = useId().replace(/:/g, "");
  const [orders, setOrders] = useState("");
  const [aov, setAov] = useState("");
  const [pct, setPct] = useState("");
  const [stage, setStage] = useState(stages.find((s) => s.slug === "business")?.slug ?? stages[0].slug);

  const o = Number(orders);
  const a = Number(aov);
  const p = Number(pct);
  const ready = o > 0 && a > 0 && p > 0 && p < 100;
  const st = stages.find((s) => s.slug === stage)!;
  const rent = ready ? o * a * (p / 100) * 12 : 0;
  const own = st.setup + st.monthly * 12;
  const max = Math.max(rent, own, 1);

  return (
    <div className="rvo">
      <form className="rvo-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={`${id}-o`}>
          <span>Orders a month from regular customers through an app</span>
          <input id={`${id}-o`} inputMode="numeric" value={orders} onChange={(e) => setOrders(e.target.value.replace(/[^\d]/g, ""))} placeholder="Your number" />
        </label>
        <label htmlFor={`${id}-a`}>
          <span>Average order value (₹)</span>
          <input id={`${id}-a`} inputMode="numeric" value={aov} onChange={(e) => setAov(e.target.value.replace(/[^\d]/g, ""))} placeholder="Your number" />
        </label>
        <label htmlFor={`${id}-p`}>
          <span>Commission or fee you pay (%) — from your own contract</span>
          <input id={`${id}-p`} inputMode="decimal" value={pct} onChange={(e) => setPct(e.target.value.replace(/[^\d.]/g, ""))} placeholder="Your number" />
        </label>
        <label htmlFor={`${id}-s`}>
          <span>Your own channel on</span>
          <select id={`${id}-s`} value={stage} onChange={(e) => setStage(e.target.value)}>
            {stages.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — {inr(s.monthly)}/month + {inr(s.setup)} setup
              </option>
            ))}
          </select>
        </label>
      </form>
      <div className="rvo-result" aria-live="polite">
        {ready ? (
          <>
            <p className="rvo-title">Over 12 months</p>
            <div className="rvo-bar">
              <span className="rvo-label">Renting: commission on your regulars</span>
              <span className="rvo-track"><span className="rvo-fill is-rent" style={{ width: `${(rent / max) * 100}%` }} /></span>
              <span className="mono">{inr(rent)}</span>
            </div>
            <div className="rvo-bar">
              <span className="rvo-label">Owning: {st.name} plan, setup + 12 months{gstNote ? ` (${gstNote})` : ""}</span>
              <span className="rvo-track"><span className="rvo-fill is-own" style={{ width: `${(own / max) * 100}%` }} /></span>
              <span className="mono">{inr(own)}</span>
            </div>
            <p className="rvo-note">
              Your own channel includes your site, payments and WhatsApp for every customer — not only these orders. Keep the apps for new customers.
              Gateway and WhatsApp charges are extra.
            </p>
          </>
        ) : (
          <p className="rvo-empty">Enter your own numbers to compare. We don&apos;t guess them for you.</p>
        )}
      </div>
    </div>
  );
}
