"use client";

import { asset } from "@/lib/asset";

import { useMemo, useState } from "react";
import Link from "next/link";

export type CityCard = {
  slug: string;
  name: string;
  state: string;
  region: string;
  photo: string;
  headline: string;
};

const regions = ["North", "South", "East", "West", "Central", "Northeast", "UT"];

export function CityBrowser({ cities }: { cities: CityCard[] }) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!query) return cities;
    return cities.filter((c) =>
      `${c.name} ${c.state} ${c.region}`.toLowerCase().includes(query),
    );
  }, [cities, query]);

  return (
    <>
      <label className="city-search">
        <span>Find a city</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try Jaipur, Kerala, Northeast"
          type="search"
          autoComplete="off"
        />
      </label>
      {filtered.length === 0 ? (
        <p className="muted-copy">No city matches that. Try the state or the capital name.</p>
      ) : null}
      {regions.map((region) => {
        const list = filtered.filter((c) => c.region === region);
        if (!list.length) return null;
        return (
          <div key={region} className="city-region">
            <h3>{region}</h3>
            <div className="industry-grid">
              {list.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="industry-card real-photo city-card"
                >
                  <img
                    src={asset(`/images/real/${city.photo}`)}
                    alt={`${city.name} business digital systems`}
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                  <div className="content">
                    <span className="badge">{city.state}</span>
                    <h3>{city.name}</h3>
                    <p>{city.headline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
