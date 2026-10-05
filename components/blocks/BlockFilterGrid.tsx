"use client";

import { useState, type ReactNode } from "react";

/** Filter chips over a server-rendered grid of tiles (content-plan §9.6). */
export function BlockFilterGrid({
  filters,
  items,
  label,
}: {
  filters: { id: string; label: string }[];
  items: { id: string; filter: string; node: ReactNode }[];
  label: string;
}) {
  const [active, setActive] = useState("all");
  const shown = items.filter((i) => active === "all" || i.filter === active || i.filter === "always");
  return (
    <div className="filter-grid">
      <div className="filter-chips" role="group" aria-label={label}>
        {filters.map((f) => (
          <button key={f.id} type="button" aria-pressed={active === f.id} className={active === f.id ? "is-on" : undefined} onClick={() => setActive(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} shown
      </p>
      <div className="block-grid">
        {shown.map((i) => (
          <div key={i.id} className="block-grid-cell">
            {i.node}
          </div>
        ))}
      </div>
    </div>
  );
}
