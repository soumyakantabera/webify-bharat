import { Webu } from "@/components/Webu";

/** Route loading state (content-plan §9.19): Webu building + skeleton tiles. */
export default function Loading() {
  return (
    <div className="container loading-state" role="status" aria-live="polite">
      <Webu state="building" size={110} />
      <span className="sr-only">Loading…</span>
      <div className="loading-tiles" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className="skeleton loading-tile">
            <div className="skeleton-text long" />
            <div className="skeleton-text medium" />
            <div className="skeleton-text short" />
          </div>
        ))}
      </div>
    </div>
  );
}
