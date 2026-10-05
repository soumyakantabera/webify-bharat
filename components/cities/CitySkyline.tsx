/**
 * CitySkyline (content-plan §9.11): a generic Indian skyline — dome, gateway,
 * temple spire, towers and a sun. Deliberately not any one city's landmark.
 * Fills come from CSS classes so the SVG never relies on var() in attributes.
 */
export function CitySkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 160" className={`wb-svg city-skyline${className ? ` ${className}` : ""}`} aria-hidden="true" focusable="false">
      <circle cx="470" cy="58" r="30" className="sky-sun" />
      <g className="sky-back">
        <rect x="20" y="70" width="44" height="90" rx="3" />
        <rect x="120" y="50" width="34" height="110" rx="3" />
        <rect x="330" y="62" width="40" height="98" rx="3" />
        <rect x="520" y="74" width="54" height="86" rx="3" />
      </g>
      <g className="sky-front">
        <path d="M70 160V104h22V92h10v12h22v56Z" />
        <path d="M160 160v-44c0-24 22-40 40-40s40 16 40 40v44Z" />
        <rect x="196" y="56" width="8" height="20" />
        <circle cx="200" cy="52" r="6" />
        <path d="M250 160V96h70v64h-18v-30a17 17 0 0 0-34 0v30Z" />
        <rect x="246" y="86" width="78" height="12" rx="2" />
        <path d="M380 160V112l14-10 6-40 6 40 14 10v48Z" />
        <rect x="430" y="96" width="40" height="64" rx="3" />
        <rect x="476" y="118" width="40" height="42" rx="3" />
      </g>
      <g className="sky-windows">
        <rect x="438" y="106" width="8" height="8" />
        <rect x="454" y="106" width="8" height="8" />
        <rect x="438" y="124" width="8" height="8" />
        <rect x="454" y="124" width="8" height="8" />
        <rect x="484" y="128" width="8" height="8" />
        <rect x="500" y="128" width="8" height="8" />
      </g>
      <rect x="0" y="156" width="600" height="4" className="sky-ground" />
    </svg>
  );
}
