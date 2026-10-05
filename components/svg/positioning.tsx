import { Icon } from "@/components/Icon";
import { blocks } from "@/lib/blocks";
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

/** FiveRoutes (#24): five roads meeting at one shop — the prototype road is shortest. */
export function FiveRoutes({ className, highlight }: { className?: string; highlight?: "prototype" }) {
  const routes = [
    { label: "Adapt our prototype", d: "M300 130 L420 130", f: C.mehendi, ly: 144, lx: 150 },
    { label: "From scratch", d: "M40 30 C200 30 260 120 420 128", f: C.rani, ly: 30, lx: 40 },
    { label: "On open source", d: "M40 90 C180 90 300 126 420 129", f: C.indigo, ly: 90, lx: 40 },
    { label: "Budget route", d: "M40 170 C180 170 300 134 420 131", f: C.haldi, ly: 170, lx: 40 },
    { label: "On your tools", d: "M40 230 C200 230 260 140 420 132", f: C.peacock, ly: 230, lx: 40 },
  ];
  return (
    <svg viewBox="0 0 520 260" className={cls("svg-fiveroutes", className)} role="img" aria-label="Five ways we build, all ending in your own system: adapt our prototype (the shortest road), from scratch, on open source, the budget route, or on the tools you already use">
      {routes.map((r, i) => (
        <g key={r.label} opacity={highlight && i !== 0 ? 0.35 : 1}>
          <path d={r.d} stroke={r.f} strokeWidth={i === 0 ? 10 : 7} fill="none" strokeLinecap="round" />
          <path d={r.d} stroke="#fff" strokeWidth="1.5" strokeDasharray="5 7" fill="none" />
          {i === 0 ? <path d="M288 130 H300" stroke={r.f} strokeWidth="2" strokeDasharray="3 3" /> : null}
          <rect x={r.lx - 4} y={r.ly - 26} width={r.label.length * 6.6 + 16} height="20" rx="10" fill="#fff" stroke={r.f} />
          <Label x={r.lx + 4} y={r.ly - 12} size={10}>{r.label}</Label>
        </g>
      ))}
      <g transform="translate(424 92)">
        <path d="M0 22 L8 0 H80 L88 22Z" fill={C.rani} stroke={C.ink} strokeWidth="2" />
        <rect x="6" y="22" width="76" height="56" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <rect x="34" y="44" width="20" height="34" fill={C.haldiT} stroke={C.ink} strokeWidth="1.5" />
        <Label x={44} y={36} size={8} anchor="middle">YOUR SHOP</Label>
      </g>
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
        <Label x={66} y={42} size={14}>Your Brand</Label>
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
    { y: 168, title: "Webify Platform", sub: "Our proven base, so you don't pay to reinvent the wheel.", fill: C.indigoT, stroke: C.indigo },
    { y: 100, title: "Your software", sub: "Your own software, in your brand.", fill: C.raniT, stroke: C.rani, logo: true },
    { y: 32, title: "We run & grow it", sub: "Hosting, care, change hours and marketing.", fill: C.peacockT, stroke: C.peacock },
  ];
  return (
    <svg viewBox="0 0 440 250" className={cls("svg-platformlayers", className)} role="img" aria-label="Three layers: the Webify Platform at the base, your own software in your brand in the middle, and us running and growing it on top">
      {layers.map((l) => (
        <g key={l.title}>
          <path d={`M30 ${l.y + 22} L220 ${l.y - 4} L410 ${l.y + 22} L220 ${l.y + 48}Z`} fill={l.fill} stroke={l.stroke} strokeWidth="2" />
          <path d={`M30 ${l.y + 22} V${l.y + 36} L220 ${l.y + 62} L410 ${l.y + 36} V${l.y + 22} L220 ${l.y + 48}Z`} fill={l.stroke} opacity="0.75" />
          <Label x={220} y={l.y + 22} size={12} anchor="middle">{l.title}</Label>
          {l.logo ? (
            <g>
              <rect x="300" y={l.y + 4} width="64" height="22" rx="6" fill="#fff" stroke={C.rani} strokeDasharray="4 3" />
              <Label x={332} y={l.y + 19} size={9} anchor="middle" fill={C.rani}>Your logo</Label>
            </g>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

/** GapBridge (#29): app chips on one bank, an MSME shop on the other, Webify's four pillars as planks. */
export function GapBridge({ apps = ["Zoho", "Odoo", "Tally", "Google", "Microsoft", "Razorpay"], className }: { apps?: string[]; className?: string }) {
  const planks = [
    { t: "Strategy", f: C.indigo },
    { t: "Systems", f: C.rani },
    { t: "Marketing", f: C.marigold },
    { t: "Care", f: C.peacock },
  ];
  return (
    <svg viewBox="0 56 600 204" className={cls("svg-gapbridge", className)} role="img" aria-label="Great tools on one side, your business on the other — Webify's strategy, systems, marketing and care bridge the gap">
      <path d="M0 200 H150 L170 260 H0Z" fill={C.surface2} />
      <path d="M600 200 H450 L430 260 H600Z" fill={C.surface2} />
      <path d="M150 220 Q300 250 450 220" fill="none" stroke={C.peacock} strokeOpacity="0.3" strokeWidth="18" />
      {apps.slice(0, 6).map((a, i) => (
        <g key={a} opacity="0.6">
          <rect x={10 + (i % 2) * 70} y={70 + Math.floor(i / 2) * 40} width="64" height="28" rx="14" fill="#fff" stroke={C.muted} />
          <Label x={42 + (i % 2) * 70} y={88 + Math.floor(i / 2) * 40} size={10} anchor="middle" fill={C.ink2}>{a}</Label>
        </g>
      ))}
      <path d="M150 196 Q300 150 450 196" fill="none" stroke={C.ink} strokeWidth="3" />
      {planks.map((p, i) => (
        <g key={p.t}>
          <rect x={160 + i * 72} y={176 - (i === 1 || i === 2 ? 14 : 4)} width="66" height="26" rx="6" fill={p.f} />
          <Label x={193 + i * 72} y={193 - (i === 1 || i === 2 ? 14 : 4)} size={10} anchor="middle" fill="#fff">{p.t}</Label>
        </g>
      ))}
      <g transform="translate(470 98)">
        <path d="M0 26 L10 0 H110 L120 26Z" fill={C.rani} stroke={C.ink} strokeWidth="2" />
        <rect x="8" y="26" width="104" height="76" fill="#fff" stroke={C.ink} strokeWidth="2" />
        <rect x="46" y="56" width="28" height="46" fill={C.haldiT} stroke={C.ink} strokeWidth="1.5" />
        <Label x={60} y={44} size={9} anchor="middle">YOUR BUSINESS</Label>
      </g>
    </svg>
  );
}

/** FourPillars (#30): Strategy, Systems, Marketing, Care holding up a shop roof. */
export function FourPillars({ className }: { className?: string }) {
  const pillars = [
    { t: "Strategy", f: C.indigo },
    { t: "Systems", f: C.rani },
    { t: "Marketing", f: C.marigold },
    { t: "Care", f: C.peacock },
  ];
  return (
    <svg viewBox="0 0 440 280" className={cls("svg-fourpillars", className)} role="img" aria-label="Four pillars — strategy, systems, marketing and care — holding up your business">
      <path d="M20 70 L220 14 L420 70Z" fill={C.raniT} stroke={C.ink} strokeWidth="2" />
      <rect x="30" y="70" width="380" height="20" fill={C.haldi} stroke={C.ink} strokeWidth="2" />
      <Label x={220} y={56} size={12} anchor="middle">YOUR BUSINESS</Label>
      {pillars.map((p, i) => {
        const x = 52 + i * 94;
        return (
          <g key={p.t}>
            <rect x={x} y="90" width="54" height="12" fill={p.f} opacity="0.6" />
            <rect x={x + 8} y="102" width="38" height="138" fill="#fff" stroke={p.f} strokeWidth="2.5" />
            <path d={`M${x + 18} 110 V232 M${x + 27} 110 V232 M${x + 36} 110 V232`} stroke={p.f} strokeOpacity="0.35" strokeWidth="2" />
            <rect x={x} y="240" width="54" height="12" fill={p.f} opacity="0.6" />
            <Label x={x + 27} y={272} size={11} anchor="middle">{p.t}</Label>
          </g>
        );
      })}
    </svg>
  );
}
