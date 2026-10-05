"use client";

import { useState, type ReactNode } from "react";

/** Prototype Room filter bar (§9.10 #2): chips filter the teaser masonry. */
export function PrototypeFilter({ groups, items }: { groups: { id: string; label: string }[]; items: { slug: string; group: string; node: ReactNode }[] }) {
  const [group, setGroup] = useState("all");
  const shown = group === "all" ? items : items.filter((i) => i.group === group);
  return (
    <>
      <div className="filter-chips" role="group" aria-label="Filter prototypes">
        {[{ id: "all", label: "All" }, ...groups].map((g) => (
          <button key={g.id} type="button" className={group === g.id ? "is-on" : undefined} aria-pressed={group === g.id} onClick={() => setGroup(g.id)}>
            {g.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} prototypes shown
      </p>
      <div className="proto-masonry" key={group}>
        {shown.map((i) => (
          <div key={i.slug} className="proto-cell">
            {i.node}
          </div>
        ))}
      </div>
    </>
  );
}
