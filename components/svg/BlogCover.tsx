import { Icon } from "@/components/Icon";
import { getCategory, type BlogCategory } from "@/lib/blog-categories";

/**
 * BlogCover (content-plan §17.3 #12, §17.4): category colour background,
 * 2–3 composed icons and a quiet rangoli pattern. No photos, no text baked in
 * except the optional category chip — so the same art works as the OG image.
 */
export function BlogCover({
  category,
  showLabel = true,
  className,
}: {
  category: BlogCategory["slug"];
  showLabel?: boolean;
  className?: string;
}) {
  const cat = getCategory(category);
  const n = cat.icons.length;
  const id = `bc-${cat.slug}`;
  return (
    <svg viewBox="0 0 1200 630" className={`wb-svg blog-cover${className ? ` ${className}` : ""}`} role="img" aria-label={`${cat.name} article cover`}>
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.4" fill={cat.ink} fillOpacity="0.16" />
          <path d="M30 22c3 3 3 5 0 7-3-2-3-4 0-7Z" fill={cat.ink} fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="1200" height="630" fill={cat.bg} />
      <rect width="1200" height="630" fill={`url(#${id})`} />
      <circle cx="1040" cy="90" r="220" fill={cat.ink} fillOpacity="0.07" />
      <circle cx="120" cy="600" r="180" fill={cat.ink} fillOpacity="0.06" />
      {cat.icons.map((name, i) => {
        const size = i === 0 ? 260 : 170;
        const x = n === 2 ? [380, 680][i] : [330, 650, 830][i];
        const y = i === 0 ? 170 : [0, 120, 300][i];
        return (
          <g key={`${name}-${i}`} transform={`translate(${x} ${y})`} color={cat.ink}>
            <circle cx={size / 2} cy={size / 2} r={size / 2 + 28} fill={cat.ink} fillOpacity="0.1" />
            <g transform={`scale(${size / 24})`}>
              <Icon name={name} size={24} />
            </g>
          </g>
        );
      })}
      {showLabel ? (
        <g>
          <rect x="56" y="510" width={cat.name.length * 23 + 72} height="76" rx="38" fill={cat.ink} fillOpacity="0.94" />
          <text x="92" y="560" fontSize="40" fontWeight="700" fill={cat.bg}>
            {cat.name}
          </text>
        </g>
      ) : null}
    </svg>
  );
}
