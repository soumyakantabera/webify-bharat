"use client";

import { useState, type ReactNode } from "react";

/**
 * ReadinessMeter (content-plan §6.11, §9.3 #2): tick what you already have;
 * the meter shows how launch-ready you are. Nothing is stored or sent.
 */
export function ReadinessMeter({ items }: { items: { id: string; label: string; chip?: ReactNode }[] }) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const pct = Math.round((done.size / items.length) * 100);
  const toggle = (id: string) =>
    setDone((d) => {
      const n = new Set(d);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  return (
    <div className="readiness">
      <div className="readiness-meter" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Launch readiness">
        <div className="readiness-fill" style={{ width: `${pct}%` }} />
        <span className="readiness-pct mono">{pct}% ready</span>
      </div>
      <p className="readiness-hint">
        {pct === 100 ? "You're ready — let's launch." : done.size ? "Everything unticked is something we set up for you." : "Tick what you already have. We set up the rest."}
      </p>
      <ul className="readiness-list">
        {items.map((it) => (
          <li key={it.id}>
            <label>
              <input type="checkbox" checked={done.has(it.id)} onChange={() => toggle(it.id)} />
              <span>{it.label}</span>
              {it.chip}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
