"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

type Item = { slug: string; category: string; text: string; node: ReactNode };

/**
 * Blog search + category chips (§9.14). Filters pre-rendered cards on the
 * client; `?q=` and `?topic=` in the URL pre-fill the search and chip (matches the site's SearchAction).
 */
export function BlogSearch({ categories, items, empty }: { categories: { slug: string; name: string }[]; items: Item[]; empty: ReactNode }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("q");
    const topic = params.get("topic");
    if (initial) setQ(initial);
    if (topic && categories.some((c) => c.slug === topic)) setCat(topic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((i) => (cat === "all" || i.category === cat) && words.every((w) => i.text.includes(w)));
  }, [q, cat, items]);

  return (
    <div className="blog-search">
      <label className="blog-search-box">
        <span className="sr-only">Search guides</span>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search guides — e.g. UPI, WhatsApp, GST" />
      </label>
      <div className="filter-chips" role="group" aria-label="Filter by topic">
        {[{ slug: "all", name: "All" }, ...categories].map((c) => (
          <button key={c.slug} type="button" className={cat === c.slug ? "is-on" : undefined} aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)}>
            {c.name}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} guides shown
      </p>
      {shown.length ? (
        <div className="blog-grid">
          {shown.map((i) => (
            <div key={i.slug}>{i.node}</div>
          ))}
        </div>
      ) : (
        empty
      )}
    </div>
  );
}
