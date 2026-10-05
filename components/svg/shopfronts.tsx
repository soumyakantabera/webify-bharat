import { C } from "./mocks/frames";

/**
 * Detailed shopfronts for the positioning diagrams. Each draws in a local
 * 156 × 220 box with the ground at y = 220; place it with `transform`.
 * Names come from lib/examples.ts — illustrative, never a real client.
 */

function Sign({ name, fill, color }: { name: string; fill: string; color: string }) {
  const size = name.length > 14 ? 10.5 : 12;
  return (
    <g>
      <rect x="0" y="44" width="156" height="30" rx="4" fill={fill} stroke={C.ink} strokeWidth="2" />
      <circle cx="10" cy="59" r="2.5" fill={color} />
      <circle cx="146" cy="59" r="2.5" fill={color} />
      <text x="78" y={63.5} textAnchor="middle" className="display" fontSize={size} fontWeight={700} letterSpacing="0.3" fill={color}>
        {name.toUpperCase()}
      </text>
    </g>
  );
}

function Awning({ a, b }: { a: string; b: string }) {
  return (
    <g stroke={C.ink} strokeWidth="1.5" strokeLinejoin="round">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${i * 26} 74 h26 v16 q-13 12 -26 0 Z`} fill={i % 2 ? b : a} />
      ))}
    </g>
  );
}

function Plant({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <ellipse cx="8" cy="196" rx="5" ry="10" fill={C.mehendi} transform="rotate(-24 8 196)" />
      <ellipse cx="14" cy="194" rx="5" ry="11" fill={C.mehendi} opacity="0.8" transform="rotate(18 14 194)" />
      <path d="M2 204 h20 l-3 16 h-14 Z" fill={C.marigold} stroke={C.ink} strokeWidth="1.5" />
    </g>
  );
}

/** A restaurant: signboard, striped awning, lanterns, a table in the window, menu board and an OPEN door. */
export function RestaurantFront({ name, transform }: { name: string; transform?: string }) {
  return (
    <g transform={transform}>
      {/* chimney + steam */}
      <rect x="116" y="24" width="16" height="22" fill={C.marigoldT} stroke={C.ink} strokeWidth="1.5" />
      <path d="M121 20 q-5 -6 0 -11 q5 -5 0 -10 M128 20 q-5 -6 0 -11 q5 -5 0 -10" fill="none" stroke={C.muted} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <rect x="8" y="74" width="140" height="146" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <Sign name={name} fill={C.indigo} color={C.haldi} />
      <Awning a={C.rani} b="#fff" />
      {/* lanterns */}
      {[30, 126].map((x) => (
        <g key={x}>
          <path d={`M${x} 98 V106`} stroke={C.ink} strokeWidth="1.2" />
          <rect x={x - 5} y="106" width="10" height="12" rx="4" fill={C.marigold} stroke={C.ink} strokeWidth="1.2" />
        </g>
      ))}
      {/* window with a laid table */}
      <rect x="20" y="122" width="60" height="46" rx="4" fill={C.peacockT} stroke={C.ink} strokeWidth="1.5" />
      <path d="M50 122 V130" stroke={C.ink} strokeWidth="1" />
      <path d="M44 134 a6 6 0 0 1 12 0 Z" fill={C.haldi} stroke={C.ink} strokeWidth="1" />
      <rect x="32" y="152" width="36" height="4" rx="2" fill={C.ink2} />
      <path d="M36 156 v10 M64 156 v10" stroke={C.ink2} strokeWidth="2" />
      <circle cx="42" cy="149" r="3" fill="#fff" stroke={C.ink2} strokeWidth="1" />
      <circle cx="58" cy="149" r="3" fill="#fff" stroke={C.ink2} strokeWidth="1" />
      {/* menu board */}
      <rect x="22" y="176" width="40" height="34" rx="3" fill="#2E2A3A" stroke={C.ink} strokeWidth="1.5" />
      <text x="42" y="187" textAnchor="middle" fontSize="7" fontWeight={700} fill="#fff">MENU</text>
      {[193, 199, 205].map((y, i) => (
        <rect key={y} x="28" y={y} width={[26, 20, 24][i]} height="2.5" rx="1.25" fill="#fff" opacity="0.55" />
      ))}
      <Plant x={66} />
      {/* door */}
      <rect x="94" y="124" width="44" height="96" rx="3" fill={C.haldiT} stroke={C.ink} strokeWidth="1.5" />
      <rect x="100" y="132" width="32" height="38" rx="2" fill="#fff" opacity="0.75" />
      <rect x="102" y="140" width="28" height="12" rx="2" fill={C.mehendi} />
      <text x="116" y="149" textAnchor="middle" fontSize="7" fontWeight={800} fill="#fff">OPEN</text>
      <circle cx="131" cy="180" r="2.5" fill={C.ink} />
      <rect x="88" y="214" width="56" height="6" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
    </g>
  );
}

/** A kirana store: signboard, awning, open counter with stocked shelves, a scale and grain sacks. */
export function KiranaFront({ name, transform }: { name: string; transform?: string }) {
  const goods = [C.rani, C.haldi, C.peacock, C.marigold, C.mehendi, C.indigo];
  return (
    <g transform={transform}>
      <rect x="8" y="74" width="140" height="146" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <Sign name={name} fill={C.peacock} color="#fff" />
      <Awning a={C.haldi} b="#fff" />
      {/* shelves */}
      <rect x="18" y="104" width="120" height="74" rx="3" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <path d={`M18 ${126 + row * 24} H138`} stroke={C.ink} strokeWidth="1.2" />
          {Array.from({ length: 9 }, (_, i) => {
            const c = goods[(i + row * 2) % goods.length];
            const h = 10 + ((i * 7 + row * 3) % 3) * 3;
            return <rect key={i} x={23 + i * 12.5} y={126 + row * 24 - h} width="9" height={h} rx="1.5" fill={c} opacity={0.85} />;
          })}
        </g>
      ))}
      {/* counter + scale */}
      <rect x="12" y="176" width="132" height="20" rx="2" fill={C.marigoldT} stroke={C.ink} strokeWidth="1.5" />
      <path d="M104 176 v-10 M94 166 h20 M94 166 l-4 6 h8 Z M114 166 l-4 6 h8 Z" fill={C.haldi} stroke={C.ink} strokeWidth="1.2" />
      {/* sacks */}
      {[22, 52, 82].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 220 c-4 -14 0 -22 6 -24 h14 c6 2 10 10 6 24 Z`} fill={[C.haldiT, "#F3E6CF", C.haldiT][i]} stroke={C.ink} strokeWidth="1.3" />
          <path d={`M${x + 6} 200 q7 4 14 0`} fill="none" stroke={C.ink} strokeWidth="1" />
        </g>
      ))}
      <Plant x={120} />
    </g>
  );
}
