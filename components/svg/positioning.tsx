import { Icon } from "@/components/Icon";
import { blocks } from "@/lib/blocks";
import { BUILD_ROUTES } from "@/lib/build-routes";
import { EXAMPLE } from "@/lib/examples";
import { pillars } from "@/lib/pillars";
import { KiranaFront, RestaurantFront } from "./shopfronts";
import { LogoBadge } from "./LogoBadge";
import { C, Label } from "./mocks/frames";

/**
 * Positioning visuals (content-plan §2.0, §6.10): RangoliMandala, BlueprintGrid,
 * AccessLayers, FiveRoutes, WhiteLabelSwap, OneStopWheel, PlatformLayers,
 * GapBridge, FourPillars.
 */

const cls = (base: string, extra?: string) => `wb-svg ${base}${extra ? ` ${extra}` : ""}`;
const BLOCK_HEX: Record<string, string> = {
  "--peacock": C.peacock,
  "--rani": C.rani,
  "--mehendi": C.mehendi,
  "--indigo": C.indigo,
  "--haldi": C.haldi,
  "--marigold": C.marigold,
  "--dusk": "#6A1E8C",
};

/** RangoliMandala (#1): 8 petals in block colours; draws once on load. */
export function RangoliMandala({ className }: { className?: string }) {
  const colours = [C.rani, C.marigold, C.haldi, C.mehendi, C.peacock, C.indigo, "#6A1E8C", C.rani];
  return (
    <svg viewBox="-100 -100 200 200" className={cls("svg-mandala", className)} aria-hidden="true">
      {colours.map((c, i) => (
        <g key={i} transform={`rotate(${i * 45})`}>
          <path d="M0 -14 C18 -36 18 -66 0 -88 C-18 -66 -18 -36 0 -14Z" fill={c} fillOpacity="0.16" stroke={c} strokeWidth="2" className="draw" pathLength={1} />
          <circle cx="0" cy="-94" r="3" fill={c} />
          <path d="M0 -30 C6 -40 6 -52 0 -62 C-6 -52 -6 -40 0 -30Z" fill={c} opacity="0.7" />
        </g>
      ))}
      <circle r="12" fill={C.haldi} stroke={C.ink} strokeWidth="1.5" />
      <circle r="4" fill={C.rani} />
    </svg>
  );
}

/** BlueprintGrid (#18): blue grid backdrop with handwritten notes (Prototype Room). */
export function BlueprintGrid({ className, notes = ["measure twice", "your logo here", "fits your counter"] }: { className?: string; notes?: string[] }) {
  return (
    <svg className={cls("svg-blueprint", className)} aria-hidden="true" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 500">
      <defs>
        <pattern id="bpg-s" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity="0.08" />
        </pattern>
        <pattern id="bpg-l" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#bpg-s)" />
          <path d="M100 0H0V100" fill="none" stroke="#fff" strokeOpacity="0.18" />
        </pattern>
      </defs>
      <rect width="800" height="500" fill={C.indigo} />
      <rect width="800" height="500" fill="url(#bpg-l)" />
      <g fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="6 6">
        <path d="M90 210 Q200 260 290 300" />
        <path d="M520 190 Q600 220 640 280" />
      </g>
      <g fill="#fff" fillOpacity="0.6" fontStyle="italic" fontSize="18" className="display">
        {notes.map((n, i) => (
          <text key={n} x={[90, 520, 300][i % 3]} y={[190, 170, 330][i % 3]} transform={`rotate(${[-4, 3, -2][i % 3]} ${[90, 520, 300][i % 3]} ${[190, 170, 330][i % 3]})`}>{n}</text>
        ))}
      </g>
    </svg>
  );
}

/** AccessLayers (#23): owner sees all · manager sees team · staff sees own tasks. */
export function AccessLayers({ className }: { className?: string }) {
  const layers = [
    { r: 120, label: "Owner sees everything", fill: C.indigoT, stroke: C.indigo },
    { r: 84, label: "Manager sees their team", fill: C.peacockT, stroke: C.peacock },
    { r: 48, label: "Staff see their own tasks", fill: C.mehendiT, stroke: C.mehendi },
  ];
  return (
    <svg viewBox="0 0 460 280" className={cls("svg-accesslayers", className)} role="img" aria-label="Role-based access: the owner sees everything, managers see their team, staff see only their own tasks">
      {layers.map((l) => (
        <path key={l.r} d={`M140 ${140 - l.r} C${140 + l.r} ${140 - l.r} ${140 + l.r} ${140 - l.r * 0.2} ${140 + l.r * 0.85} ${140 + l.r * 0.4} Q140 ${140 + l.r * 1.05} ${140 - l.r * 0.85} ${140 + l.r * 0.4} C${140 - l.r} ${140 - l.r * 0.2} ${140 - l.r} ${140 - l.r} 140 ${140 - l.r}Z`} fill={l.fill} stroke={l.stroke} strokeWidth="2" />
      ))}
      <g transform="translate(128 116)" color={C.mehendi}>
        <Icon name="UserCircleGear" size={26} />
      </g>
      {layers.map((l, i) => (
        <g key={l.label}>
          <circle cx={290} cy={70 + i * 70} r="8" fill={l.stroke} />
          <path d={`M${140 + l.r * 0.5} ${140 - l.r * 0.75} L282 ${70 + i * 70}`} stroke={l.stroke} strokeWidth="1.5" strokeDasharray="3 4" />
          <Label x={306} y={74 + i * 70} size={12}>{l.label}</Label>
        </g>
      ))}
    </svg>
  );
}

/** FiveRoutes (#24): five roads meeting at one restaurant — the prototype road is shortest. */
const ROUTE_SHORT: Record<string, { label: string; sub: string; f: string; t: string }> = {
  prototype: { label: "Adapt our prototype", sub: "The shortest road", f: C.mehendi, t: C.mehendiT },
  scratch: { label: "From scratch", sub: "Designed and coded only for you", f: C.rani, t: C.raniT },
  "open-source": { label: "On open source", sub: "Proven core, your workflow on top", f: C.indigo, t: C.indigoT },
  budget: { label: "Budget route", sub: "Ready apps, set up properly", f: C.haldi, t: C.haldiT },
  "your-tools": { label: "On your tools", sub: "Zoho, Google, Microsoft, Tally", f: C.peacock, t: C.peacockT },
};

function RoutePill({ x, y, w, slug, icon }: { x: number; y: number; w: number; slug: string; icon: string }) {
  const r = ROUTE_SHORT[slug];
  return (
    <g>
      <rect x={x} y={y - 22} width={w} height="44" rx="22" fill="#fff" stroke={r.f} strokeWidth="1.5" />
      <circle cx={x + 22} cy={y} r="15" fill={r.t} />
      <g transform={`translate(${x + 13} ${y - 9})`} color={r.f}>
        <Icon name={icon} size={18} weight="bold" />
      </g>
      <Label x={x + 44} y={y - 2} size={12.5}>{r.label}</Label>
      <Label x={x + 44} y={y + 12} size={9.5} weight={600} fill={C.muted}>{r.sub}</Label>
    </g>
  );
}

export function FiveRoutes({ className, highlight }: { className?: string; highlight?: "prototype" }) {
  const end = { x: 566, y: 306 };
  const left = BUILD_ROUTES.filter((r) => r.slug !== "prototype");
  const proto = BUILD_ROUTES.find((r) => r.slug === "prototype")!;
  const rows = [46, 116, 186, 256];
  const fade = (slug: string) => (highlight && slug !== "prototype" ? 0.3 : 1);
  const road = (d: string, f: string, wide = false) => (
    <g>
      <path d={d} stroke={f} strokeWidth={wide ? 16 : 13} fill="none" strokeLinecap="round" />
      <path d={d} stroke="#fff" strokeWidth="1.8" strokeDasharray="7 8" fill="none" className="flow-dash" />
    </g>
  );
  return (
    <svg viewBox="0 0 720 356" className={cls("svg-fiveroutes", className)} role="img" aria-label={`Five ways we build, all ending at one restaurant, ${EXAMPLE.restaurant.name}: adapt our prototype (the shortest road), from scratch, on open source, the budget route, or on the tools you already use`}>
      <path d={`M540 ${end.y + 14} H720`} stroke={C.line} strokeWidth="2" />
      {left.map((r, i) => {
        const y = rows[i];
        const f = ROUTE_SHORT[r.slug].f;
        return (
          <g key={r.slug} opacity={fade(r.slug)}>
            {road(`M238 ${y} C400 ${y} 470 ${end.y} ${end.x} ${end.y}`, f)}
            <RoutePill x={14} y={y} w={224} slug={r.slug} icon={r.icon} />
          </g>
        );
      })}
      <g>
        {road(`M476 326 C520 326 530 ${end.y} ${end.x} ${end.y}`, ROUTE_SHORT.prototype.f, true)}
        <RoutePill x={288} y={326} w={188} slug="prototype" icon={proto.icon} />
        <g transform="translate(300 286)">
          <rect width="96" height="20" rx="10" fill={C.haldi} stroke={C.ink} strokeWidth="1.2" />
          <Label x={48} y={14} size={9.5} anchor="middle">Fastest start</Label>
        </g>
      </g>
      <RestaurantFront name={EXAMPLE.restaurant.name} transform="translate(558 100)" />
    </svg>
  );
}

/** WhiteLabelSwap (#25): the same screen toggling between "Your Brand" and "Webify". */
export function WhiteLabelSwap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 240" className={cls("svg-whitelabel", className)} role="img" aria-label="The same app shown with your brand or with Webify Bharat's — your choice">
      <rect x="10" y="10" width="340" height="220" rx="18" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <rect x="10" y="10" width="340" height="52" rx="18" fill={C.surface2} />
      <g className="wl-a">
        <rect x="26" y="22" width="30" height="30" rx="8" fill={C.rani} />
        <Label x={66} y={42} size={14}>{EXAMPLE.restaurant.name}</Label>
      </g>
      <g className="wl-b">
        <rect x="26" y="22" width="30" height="30" rx="8" fill={C.indigo} />
        <Label x={66} y={42} size={14}>Webify Bharat</Label>
      </g>
      {[84, 112, 140].map((y, i) => <rect key={y} x="30" y={y} width={[220, 180, 240][i]} height="12" rx="6" fill={C.line} />)}
      <rect x="30" y="172" width="120" height="34" rx="17" className="wl-btn" />
      <Label x={90} y={194} size={11} anchor="middle" fill="#fff">Order now</Label>
    </svg>
  );
}

/** OneStopWheel (#26): the 11 blocks on a rangoli wheel around the business owner. */
export function OneStopWheel({ className }: { className?: string }) {
  const cx = 160;
  const cy = 160;
  return (
    <svg viewBox="0 0 320 320" className={cls("svg-onestop", className)} role="img" aria-label={`One team for all eleven blocks: ${blocks.map((b) => b.short).join(", ")}`}>
      <circle cx={cx} cy={cy} r="124" fill="none" stroke={C.line} strokeWidth="2" strokeDasharray="2 8" />
      <circle cx={cx} cy={cy} r="92" fill={C.surface2} />
      {blocks.map((b, i) => {
        const a = (Math.PI * 2 * i) / blocks.length - Math.PI / 2;
        const x = cx + Math.cos(a) * 124;
        const y = cy + Math.sin(a) * 124;
        const hex = BLOCK_HEX[b.colour] ?? C.indigo;
        return (
          <g key={b.slug}>
            <circle cx={x} cy={y} r="22" fill="#fff" stroke={hex} strokeWidth="2.5" />
            <g transform={`translate(${x - 11} ${y - 11})`} color={hex}>
              <Icon name={b.icon} size={22} />
            </g>
          </g>
        );
      })}
      <circle cx={cx} cy={cy - 18} r="18" fill={C.haldiT} stroke={C.ink} strokeWidth="2" />
      <path d={`M${cx - 30} ${cy + 30} C${cx - 30} ${cy + 4} ${cx + 30} ${cy + 4} ${cx + 30} ${cy + 30}Z`} fill={C.raniT} stroke={C.ink} strokeWidth="2" />
      <Label x={cx} y={cy + 52} size={11} anchor="middle">You</Label>
    </svg>
  );
}

/** PlatformLayers (§2.0.4, #28): Platform → Your software (your logo) → We run & grow it. */
export function PlatformLayers({ className }: { className?: string }) {
  const layers = [
    { y: 176, title: "Webify Platform", icon: "Stack", fill: C.indigoT, stroke: C.indigo },
    { y: 104, title: "Your software", icon: "SquaresFour", fill: C.raniT, stroke: C.rani, logo: true },
    { y: 32, title: "We run & grow it", icon: "TrendUp", fill: C.peacockT, stroke: C.peacock },
  ];
  return (
    <svg viewBox="0 0 460 262" className={cls("svg-platformlayers", className)} role="img" aria-label="Three layers: the Webify Platform at the base, your own software in your brand in the middle, and us running and growing it on top">
      {layers.map((l) => (
        <g key={l.title}>
          <path d={`M30 ${l.y + 22} L220 ${l.y - 4} L410 ${l.y + 22} L220 ${l.y + 48}Z`} fill={l.fill} stroke={l.stroke} strokeWidth="2" />
          <path d={`M30 ${l.y + 22} V${l.y + 36} L220 ${l.y + 62} L410 ${l.y + 36} V${l.y + 22} L220 ${l.y + 48}Z`} fill={l.stroke} opacity="0.75" />
          <path d={`M60 ${l.y + 22} L220 ${l.y} L380 ${l.y + 22} L220 ${l.y + 44}Z`} fill="none" stroke={l.stroke} strokeOpacity="0.35" strokeDasharray="3 4" />
          <circle cx="146" cy={l.y + 22} r="12" fill="#fff" stroke={l.stroke} strokeWidth="1.5" />
          <g transform={`translate(138 ${l.y + 14})`} color={l.stroke}>
            <Icon name={l.icon} size={16} weight="bold" />
          </g>
          <Label x={164} y={l.y + 26} size={12}>{l.title}</Label>
          {l.logo ? (
            <g>
              <rect x="288" y={l.y + 8} width="96" height="22" rx="6" fill="#fff" stroke={C.rani} strokeDasharray="4 3" />
              <Label x={336} y={l.y + 23} size={9} anchor="middle" fill={C.rani}>{EXAMPLE.restaurant.name}</Label>
            </g>
          ) : null}
        </g>
      ))}
    </svg>
  );
}


/** GapBridge (#29): app chips on one bank, a kirana store on the other, Webify's four pillars as the bridge deck. */
export function GapBridge({ apps = ["Zoho", "Odoo", "Tally", "Google", "Microsoft", "Razorpay"], className }: { apps?: string[]; className?: string }) {
  const planks = [
    { t: "Strategy", f: C.indigo, icon: "Compass" },
    { t: "Systems", f: C.rani, icon: "SquaresFour" },
    { t: "Marketing", f: C.marigold, icon: "Megaphone" },
    { t: "Care", f: C.peacock, icon: "Lifebuoy" },
  ];
  const hangers = Array.from({ length: 13 }, (_, i) => 196 + i * 20);
  const cableY = (x: number) => {
    const t = (x - 186) / (454 - 186);
    return (1 - t) * (1 - t) * 116 + 2 * (1 - t) * t * 236 + t * t * 116;
  };
  return (
    <svg viewBox="0 44 640 262" className={cls("svg-gapbridge", className)} role="img" aria-label={`Great tools on one side, a business like ${EXAMPLE.kirana.name} on the other — Webify's strategy, systems, marketing and care bridge the gap`}>
      {/* water */}
      <path d="M150 226 H490 V306 H150Z" fill={C.peacockT} />
      <g fill="none" stroke={C.peacock} strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <path d="M190 246 q10 -6 20 0 t20 0 M300 262 q10 -6 20 0 t20 0 M400 244 q10 -6 20 0 t20 0 M240 284 q10 -6 20 0 t20 0 M360 290 q10 -6 20 0 t20 0" />
      </g>
      {/* banks */}
      <path d="M0 200 H164 L186 306 H0Z" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
      <path d="M640 200 H476 L454 306 H640Z" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
      <path d="M0 200 H164 M476 200 H640" stroke={C.mehendi} strokeWidth="4" />
      {/* the tools, waiting on the far bank — real marks where an open one exists */}
      {apps.slice(0, 6).map((a, i) => (
        <LogoBadge key={a} x={6 + (i % 2) * 84} y={82 + Math.floor(i / 2) * 38} w={80} h={30} size={9.5} name={a} title={a} label stroke={C.muted} />
      ))}
      <Label x={82} y={70} size={10} weight={700} fill={C.muted} anchor="middle">GREAT TOOLS</Label>
      {/* towers, cable, hangers */}
      {[180, 454].map((x) => (
        <g key={x}>
          <rect x={x} y="106" width="12" height="100" rx="2" fill={C.indigo} />
          <rect x={x - 4} y="100" width="20" height="8" rx="2" fill={C.ink} />
        </g>
      ))}
      <path d="M186 116 Q320 236 454 116" fill="none" stroke={C.ink} strokeWidth="2.5" />
      {hangers.map((x) => (
        <path key={x} d={`M${x} ${cableY(x)} V184`} stroke={C.ink} strokeWidth="1" opacity="0.5" />
      ))}
      {/* deck: the four pillars */}
      <rect x="164" y="208" width="312" height="8" fill={C.ink} />
      {planks.map((p, i) => (
        <g key={p.t}>
          <rect x={172 + i * 76} y="182" width="72" height="26" rx="6" fill={p.f} stroke={C.ink} strokeWidth="1.2" />
          <g transform={`translate(${178 + i * 76} 188)`} color="#fff">
            <Icon name={p.icon} size={14} weight="bold" />
          </g>
          <Label x={213 + i * 76} y={199} size={9.5} anchor="middle" fill="#fff">{p.t}</Label>
        </g>
      ))}
      <KiranaFront name={EXAMPLE.kirana.name} transform="translate(492 63.6) scale(0.62)" />
    </svg>
  );
}

/** FourPillars (#30): Strategy, Systems, Marketing and Care holding up one business. */
export function FourPillars({ className, name = EXAMPLE.restaurant.name }: { className?: string; name?: string }) {
  const tints: Record<string, string> = { "--indigo": C.indigoT, "--rani": C.raniT, "--marigold": C.marigoldT, "--peacock": C.peacockT };
  const solid: Record<string, string> = { "--indigo": C.indigo, "--rani": C.rani, "--marigold": C.marigold, "--peacock": C.peacock };
  return (
    <svg viewBox="0 0 480 342" className={cls("svg-fourpillars", className)} role="img" aria-label={`Four pillars — strategy, systems, marketing and care — holding up a business like ${name}`}>
      {/* pediment with a rangoli medallion */}
      <path d="M24 94 L240 22 L456 94 Z" fill={C.raniT} stroke={C.ink} strokeWidth="2" strokeLinejoin="round" />
      <path d="M70 86 L240 32 L410 86 Z" fill="none" stroke={C.rani} strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="240" cy="66" r="15" fill="#fff" stroke={C.rani} strokeWidth="1.5" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return <circle key={i} cx={240 + Math.cos(a) * 9} cy={66 + Math.sin(a) * 9} r="2.6" fill={i % 2 ? C.haldi : C.rani} />;
      })}
      <circle cx="240" cy="66" r="3" fill={C.indigo} />
      {/* architrave with the business name */}
      <rect x="34" y="94" width="412" height="30" fill={C.haldi} stroke={C.ink} strokeWidth="2" />
      <text x="240" y="114.5" textAnchor="middle" className="display" fontSize="14" fontWeight={700} letterSpacing="1" fill={C.ink}>{name.toUpperCase()}</text>
      {Array.from({ length: 25 }, (_, i) => (
        <rect key={i} x={40 + i * 16.5} y="124" width="9" height="5" fill={C.haldiT} stroke={C.ink} strokeWidth="0.8" />
      ))}
      {pillars.map((p, i) => {
        const cx = 90 + i * 100;
        const f = solid[p.colour] ?? C.indigo;
        const t = tints[p.colour] ?? C.indigoT;
        return (
          <g key={p.slug}>
            {/* capital */}
            <rect x={cx - 34} y="130" width="68" height="11" rx="2" fill={f} />
            <circle cx={cx - 34} cy="136" r="5" fill="#fff" stroke={f} strokeWidth="2" />
            <circle cx={cx + 34} cy="136" r="5" fill="#fff" stroke={f} strokeWidth="2" />
            <rect x={cx - 25} y="141" width="50" height="6" fill={t} stroke={f} strokeWidth="1" />
            {/* fluted shaft */}
            <rect x={cx - 22} y="147" width="44" height="114" fill="#fff" stroke={f} strokeWidth="2.5" />
            <path d={`M${cx - 12} 152 V256 M${cx} 152 V256 M${cx + 12} 152 V256`} stroke={f} strokeOpacity="0.28" strokeWidth="2" />
            <circle cx={cx} cy="198" r="17" fill={t} stroke={f} strokeWidth="2" />
            <g transform={`translate(${cx - 10} 188)`} color={f}>
              <Icon name={p.icon} size={20} weight="bold" />
            </g>
            {/* base */}
            <rect x={cx - 28} y="261" width="56" height="7" fill={t} stroke={f} strokeWidth="1" />
            <rect x={cx - 34} y="268" width="68" height="9" rx="2" fill={f} />
            <Label x={cx} y={320} size={13} anchor="middle">{p.name}</Label>
            <Label x={cx} y={334} size={9.5} weight={600} fill={C.muted} anchor="middle">{p.product}</Label>
          </g>
        );
      })}
      {/* steps */}
      <rect x="20" y="277" width="440" height="10" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
      <rect x="8" y="287" width="464" height="10" fill={C.surface2} stroke={C.ink} strokeWidth="1.5" />
    </svg>
  );
}
