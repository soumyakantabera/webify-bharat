"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Zone = { id: string; label: string };
type Item = { slug: string; zone: string; name: string; state: string; greeting: string | null; node: ReactNode };

const slugOf = (href: string) => href.match(/\/cities\/([^/?#]+)\/?$/)?.[1];

/**
 * Cities hub explorer (§9.11): region chips filter the grid, swap the regional
 * banner and dim map dots outside the region; hovering or focusing a dot
 * previews that city.
 */
export function CityExplorer({ zones, items, banners, map }: { zones: Zone[]; items: Item[]; banners: Record<string, ReactNode>; map: ReactNode }) {
  const [zone, setZone] = useState("all");
  const [preview, setPreview] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const shown = zone === "all" ? items : items.filter((c) => c.zone === zone);
  const current = items.find((c) => c.slug === preview);

  useEffect(() => {
    const zoneOf = new Map(items.map((c) => [c.slug, c.zone]));
    mapRef.current?.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      const s = slugOf(a.getAttribute("href") ?? "");
      a.classList.toggle("is-dim", zone !== "all" && !!s && zoneOf.get(s) !== zone);
    });
  }, [zone, items]);

  const onHover = (target: EventTarget | null) => {
    const a = (target as Element | null)?.closest?.("a");
    const s = a ? slugOf(a.getAttribute("href") ?? "") : undefined;
    if (s) setPreview(s);
  };

  return (
    <div className="city-explorer">
      <div className="city-map-col">
        <div ref={mapRef} className="city-map" onPointerOver={(e) => onHover(e.target)} onFocus={(e) => onHover(e.target)}>
          {map}
        </div>
        <p className="city-preview" aria-live="polite">
          {current ? (
            <>
              {current.greeting ? <span className="city-greet">{current.greeting}</span> : null}
              <strong>{current.name}</strong> <span>{current.state}</span>
            </>
          ) : (
            <span>Hover or tap a dot to visit a city.</span>
          )}
        </p>
      </div>
      <div className="city-list-col">
        <div className="filter-chips" role="group" aria-label="Filter cities by region">
          {[{ id: "all", label: "All" }, ...zones].map((z) => (
            <button key={z.id} type="button" className={zone === z.id ? "is-on" : undefined} aria-pressed={zone === z.id} onClick={() => setZone(z.id)}>
              {z.label}
            </button>
          ))}
        </div>
        <div className="city-banner">{banners[zone]}</div>
        <p className="city-count" aria-live="polite">
          {shown.length} {shown.length === 1 ? "city" : "cities"}
        </p>
        <div className="city-grid">
          {shown.map((c) => (
            <div key={c.slug}>{c.node}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
