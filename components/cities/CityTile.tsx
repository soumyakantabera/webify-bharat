import Link from "next/link";
import { cityGreeting, getZone, type City } from "@/lib/cities";

/** City card (§9.11): name, state, region and the local greeting. */
export function CityTile({ city }: { city: City }) {
  const greet = cityGreeting(city);
  return (
    <Link href={`/cities/${city.slug}`} className="city-tile">
      {greet ? (
        <span className="city-greet" title={`Hello in ${city.greetingLang}`}>
          {city.greeting}!
        </span>
      ) : null}
      <span className="city-name">{city.name}</span>
      <span className="city-state">{city.state}</span>
      <span className="city-zone">{getZone(city.zone).label}</span>
    </Link>
  );
}
