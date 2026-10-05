"use client";

import { useMemo, useState } from "react";
import { Plant } from "@phosphor-icons/react/dist/ssr/Plant";
import { Buildings } from "@phosphor-icons/react/dist/ssr/Buildings";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { Scissors } from "@phosphor-icons/react/dist/ssr/Scissors";
import { IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";
import { EXTRA_ADDONS, FEATURES, inr, quoteAll, reachTotals, REACH_OPTIONS, type FeatureId, type Needs, type PlanSlug } from "@/lib/estimator";
import { addons, getStage, THIRD_PARTY_COSTS } from "@/lib/offers";
import { waLink } from "@/lib/wa-link";
import { waEstimate } from "@/lib/wa";

const STAGE_ICON = { Plant, Buildings, Star, Scissors } as const;

function StageIcon({ name }: { name: string }) {
  const I = STAGE_ICON[name as keyof typeof STAGE_ICON];
  return I ? <I size={22} weight="duotone" aria-hidden="true" className="stage-ic" /> : null;
}

type PathOpt = { slug: string; name: string; suggestedTier: PlanSlug };

const NEED_FIELDS: { key: keyof Needs; label: string; hint: string }[] = [
  { key: "users", label: "People who'll log in", hint: "You and your staff" },
  { key: "products", label: "Products to sell online", hint: "0 if you don't sell online" },
  { key: "orders", label: "Orders or bookings a month", hint: "Never capped on any plan — this just helps us plan" },
  { key: "locations", label: "Locations / branches", hint: "" },
  { key: "integrations", label: "Tools to connect", hint: "Tally, Zoho, Shiprocket, Sheets…" },
];

/**
 * Scope estimator (content-plan §10.7): pick a path, enter rough needs,
 * see the cheapest stage (stage + over-limits vs the next stage), add
 * extras and marketing, then send the scope on WhatsApp.
 */
export function ScopeEstimator({ paths, gstNote = "" }: { paths: PathOpt[]; gstNote?: string }) {
  const [path, setPath] = useState<string>("");
  const [needs, setNeeds] = useState<Needs>({ users: 1, products: 0, orders: 0, locations: 1, integrations: 0 });
  const [features, setFeatures] = useState<FeatureId[]>([]);
  const [extras, setExtras] = useState<string[]>([]);
  const [reach, setReach] = useState<string[]>([]);

  const { quotes, best } = useMemo(() => quoteAll(needs, features), [needs, features]);
  const pathOpt = paths.find((p) => p.slug === path);
  const extraAddons = addons.filter((a) => (EXTRA_ADDONS as readonly string[]).includes(a.slug));
  const extrasTotal = extraAddons.filter((a) => extras.includes(a.slug)).reduce((t, a) => t + (a.amount ?? 0), 0);
  const r = reachTotals(reach);

  const stage = best ? getStage(best.stage)! : null;
  const planMonthly = (best?.monthly ?? 0) + extrasTotal;
  const setup = (best?.setup ?? 0) + r.setup;
  const monthly = planMonthly + r.monthly;
  const annual = planMonthly * 10 + r.monthly * 12;

  const addonNames = [
    ...(best?.lines.map((l) => l.label) ?? []),
    ...extraAddons.filter((a) => extras.includes(a.slug)).map((a) => a.name),
    ...r.picked.map((p) => p.label),
  ];
  const message = waEstimate({
    path: pathOpt?.name ?? "not sure",
    tier: stage?.name ?? "not sure",
    addons: addonNames,
    from: `${inr(setup)} setup + ${inr(monthly)}/month`,
  });

  const setNeed = (k: keyof Needs, v: string) => setNeeds((n) => ({ ...n, [k]: Math.max(0, Math.min(100000, Number(v.replace(/[^\d]/g, "")) || 0)) }));
  const toggle = (list: string[], set: (v: string[]) => void, id: string) => set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  return (
    <div className="estimator">
      <form className="est-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend><span className="est-step">1</span> Where is your business today?</legend>
          <div className="est-chips">
            {paths.map((p) => (
              <label key={p.slug} className={path === p.slug ? "is-on" : undefined}>
                <input type="radio" name="est-path" value={p.slug} checked={path === p.slug} onChange={() => setPath(p.slug)} />
                {p.name}
              </label>
            ))}
          </div>
          {pathOpt ? <p className="est-hint">{pathOpt.name} usually starts at {getStage(pathOpt.suggestedTier)!.name}. Your numbers decide the real fit.</p> : null}
        </fieldset>

        <fieldset>
          <legend><span className="est-step">2</span> Rough needs</legend>
          <div className="est-needs">
            {NEED_FIELDS.map((f) => (
              <label key={f.key}>
                <span>{f.label}</span>
                <input inputMode="numeric" value={String(needs[f.key])} onChange={(e) => setNeed(f.key, e.target.value)} aria-describedby={f.hint ? `hint-${f.key}` : undefined} />
                {f.hint ? <small id={`hint-${f.key}`}>{f.hint}</small> : null}
              </label>
            ))}
          </div>
          <div className="est-checks">
            {FEATURES.map((f) => (
              <label key={f.id}>
                <input type="checkbox" checked={features.includes(f.id)} onChange={() => setFeatures((l) => (l.includes(f.id) ? l.filter((x) => x !== f.id) : [...l, f.id]))} />
                {f.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend><span className="est-step">3</span> Extras and marketing (optional)</legend>
          <div className="est-checks">
            {extraAddons.map((a) => (
              <label key={a.slug}>
                <input type="checkbox" checked={extras.includes(a.slug)} onChange={() => toggle(extras, setExtras, a.slug)} />
                {a.name} <small>{a.price}</small>
              </label>
            ))}
            {REACH_OPTIONS.map((o) => (
              <label key={o.id}>
                <input type="checkbox" checked={reach.includes(o.id)} onChange={() => toggle(reach, setReach, o.id)} />
                {o.label} <small>{inr(o.monthly)}/month{o.setup ? ` + ${inr(o.setup)} setup` : ""}</small>
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="est-result" aria-live="polite" aria-label="Your estimate">
        <p className="est-kicker">Recommended</p>
        <h3 className="est-stage">{stage ? <><StageIcon name={stage.icon} /> {stage.name}</> : "Let's talk — Custom"}</h3>
        <ul className="est-compare">
          {quotes.map((q) => (
            <li key={q.stage} className={best?.stage === q.stage ? "is-best" : !q.feasible ? "is-off" : undefined}>
              <span>{getStage(q.stage)!.name}</span>
              <span className="mono">{q.feasible ? `${inr(q.monthly)}/mo` : "—"}</span>
              {!q.feasible && q.reason ? <small>{q.reason}</small> : null}
              {q.feasible && q.lines.length ? <small>{inr(q.base)} + {q.lines.map((l) => l.label.toLowerCase()).join(", ")}</small> : null}
            </li>
          ))}
          <li className="is-custom">
            <span>Custom</span>
            <span className="mono">from ₹40,000/mo</span>
            <small>Unique workflows, multi-unit, platforms — quoted after a chat.</small>
          </li>
        </ul>
        <dl className="est-totals">
          <div>
            <dt>Setup</dt>
            <dd className="mono">{inr(setup)}</dd>
          </div>
          <div>
            <dt>Monthly</dt>
            <dd className="mono">{inr(monthly)}</dd>
          </div>
          <div>
            <dt>Annual prepay</dt>
            <dd className="mono">{inr(annual)}</dd>
          </div>
        </dl>
        <p className="est-note">
          Estimate only{gstNote ? `, ${gstNote}` : ""}. Annual prepay gives 2 months free on your plan. Not included: {THIRD_PARTY_COSTS.join(" · ")}.
        </p>
        <a
          className="wa-cta wa-cta--primary est-send"
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-section="estimator"
          onClick={() => track("estimator_send", { tier: stage?.name ?? "custom", addons: addonNames.length })}
        >
          <IconWhatsApp size={18} />
          <span className="wa-cta-label">Send this scope on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
