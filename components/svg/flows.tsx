import { Icon } from "@/components/Icon";
import { BUILD_ROUTES, WHITE_LABEL_LINE } from "@/lib/build-routes";
import { EXAMPLE } from "@/lib/examples";
import { C, Label } from "./mocks/frames";

/**
 * Flow diagrams (content-plan §6.10): ChatFlow, InvoiceFan, FilingStamp,
 * ConnectHub, LaunchRocket, GrowthTree, RentLadder, ReachFunnel, DecisionTree.
 * Generic shapes and labels only; tool names appear as text ("works with").
 */

const cls = (base: string, extra?: string) => `wb-svg ${base}${extra ? ` ${extra}` : ""}`;

function Chip({ x, y, w, text, fill, stroke, color = C.ink, size = 11 }: { x: number; y: number; w: number; text: string; fill: string; stroke?: string; color?: string; size?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={30} rx={15} fill={fill} stroke={stroke ?? "none"} strokeWidth={1.5} />
      <Label x={x + w / 2} y={y + 19.5} size={size} anchor="middle" fill={color}>{text}</Label>
    </g>
  );
}

const Arrowhead = ({ id, color = C.ink }: { id: string; color?: string }) => (
  <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0 0 L10 5 L0 10 z" fill={color} />
  </marker>
);

/** ChatFlow (#6): WhatsApp bubble tree — menu · booking · reminder · human. */
export function ChatFlow({ className }: { className?: string }) {
  const branches = [
    { y: 30, text: "See the menu", icon: "BookOpenText", fill: C.mehendiT, ink: C.mehendi },
    { y: 90, text: "Book a table", icon: "CalendarCheck", fill: C.peacockT, ink: C.peacock },
    { y: 150, text: "Remind me", icon: "BellRinging", fill: C.haldiT, ink: C.marigold },
    { y: 210, text: "Talk to a person", icon: "HandWaving", fill: C.raniT, ink: C.rani },
  ];
  return (
    <svg viewBox="0 0 440 270" className={cls("svg-chatflow", className)} role="img" aria-label="An automatic WhatsApp reply offering the menu, a booking, a reminder, or a person">
      <path d="M20 108h150a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H44l-14 12v-12H20a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12Z" fill="#fff" stroke={C.mehendi} strokeWidth="2" />
      <Label x={22} y={131} size={11}>Hi! How can</Label>
      <Label x={22} y={147} size={11}>we help today?</Label>
      {branches.map((b) => (
        <g key={b.text}>
          <path d={`M184 136 C220 136 220 ${b.y + 15} 250 ${b.y + 15}`} fill="none" stroke={C.mehendi} strokeWidth="2" strokeDasharray="4 5" className="flow-dash" />
          <Chip x={250} y={b.y} w={176} text={b.text} fill={b.fill} />
          <g transform={`translate(260 ${b.y + 6})`} color={b.ink}>
            <Icon name={b.icon} size={18} weight="bold" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/** InvoiceFan (#8): GST invoices fanning out from every payment. */
export function InvoiceFan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 260" className={cls("svg-invoicefan", className)} role="img" aria-label="GST invoices fanning out, one for each payment">
      {[-18, -6, 6, 18].map((r, i) => (
        <g key={r} transform={`rotate(${r} 180 250)`}>
          <rect x="120" y="30" width="120" height="170" rx="10" fill="#fff" stroke={C.ink} strokeWidth="1.5" />
          <rect x="120" y="30" width="120" height="28" rx="10" fill={i === 3 ? C.haldi : C.haldiT} />
          {i === 3 ? (
            <g>
              <Label x={132} y={49} size={10}>GST INVOICE</Label>
              {[72, 86, 100, 114].map((y) => <rect key={y} x="132" y={y} width={y === 114 ? 50 : 90} height="5" rx="2.5" fill={C.line} />)}
              <rect x="132" y="136" width="96" height="1.5" fill={C.ink} />
              <rect x="132" y="146" width="40" height="7" rx="3.5" fill={C.ink2} />
              <g transform="rotate(-12 200 175)">
                <rect x="168" y="162" width="58" height="24" rx="5" fill="none" stroke={C.mehendi} strokeWidth="2" />
                <Label x={197} y={178} size={11} anchor="middle" fill={C.mehendi}>PAID</Label>
              </g>
            </g>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

/** FilingStamp (#9): rubber stamp "FILED · gst.gov.in". */
export function FilingStamp({ portal = "gst.gov.in", className }: { portal?: string; className?: string }) {
  return (
    <svg viewBox="0 0 300 240" className={cls("svg-filingstamp", className)} role="img" aria-label={`A rubber stamp reading Filed, ${portal}`}>
      <g className="stamp-thump">
        <rect x="128" y="8" width="44" height="54" rx="14" fill={C.indigo} />
        <rect x="104" y="58" width="92" height="22" rx="6" fill={C.marigold} stroke={C.ink} strokeWidth="2" />
      </g>
      <g transform="rotate(-8 150 160)">
        <rect x="40" y="110" width="220" height="100" rx="16" fill="none" stroke={C.marigold} strokeWidth="5" />
        <rect x="52" y="122" width="196" height="76" rx="10" fill="none" stroke={C.marigold} strokeWidth="2" />
        <text x="150" y="164" fontSize="34" fontWeight="800" textAnchor="middle" fill={C.marigold} className="display" letterSpacing="4">FILED</text>
        <Label x={150} y={186} size={13} anchor="middle" fill={C.marigold}>{portal}</Label>
      </g>
    </svg>
  );
}

/** ConnectHub (#10): your system at the centre, spokes to the tools you use. */
export function ConnectHub({ tools = ["Tally", "Zoho", "Google Sheets", "Shiprocket", "WhatsApp", "Odoo"], className }: { tools?: string[]; className?: string }) {
  const cx = 220;
  const cy = 150;
  const fills = [C.haldiT, C.raniT, C.mehendiT, C.marigoldT, C.peacockT, C.indigoT];
  return (
    <svg viewBox="0 0 440 300" className={cls("svg-connecthub", className)} role="img" aria-label={`Your system connected to ${tools.join(", ")}`}>
      {tools.map((t, i) => {
        const a = (Math.PI * 2 * i) / tools.length - Math.PI / 2;
        const x = cx + Math.cos(a) * 170;
        const y = cy + Math.sin(a) * 110;
        const w = Math.max(70, t.length * 8 + 24);
        return (
          <g key={t}>
            <path d={`M${cx} ${cy} L${x} ${y}`} stroke={C.indigo} strokeWidth="2" strokeDasharray="5 6" className="flow-dash" />
            <Chip x={x - w / 2} y={y - 15} w={w} text={t} fill={fills[i % fills.length]} stroke={C.line} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="48" fill={C.indigo} />
      <circle cx={cx} cy={cy} r="56" fill="none" stroke={C.indigo} strokeOpacity="0.25" strokeWidth="6" />
      <Label x={cx} y={cy - 2} size={12} anchor="middle" fill="#fff">Your</Label>
      <Label x={cx} y={cy + 14} size={12} anchor="middle" fill="#fff">system</Label>
    </svg>
  );
}

/** LaunchRocket (#11): rocket rising past launch milestones. */
export function LaunchRocket({ milestones = ["Registered", "Brand ready", "Site live", "Payments live", "Launch day"], className }: { milestones?: string[]; className?: string }) {
  return (
    <svg viewBox="-40 0 400 320" className={cls("svg-launchrocket", className)} role="img" aria-label={`A rocket rising past: ${milestones.join(", ")}`}>
      <path d="M90 300 V30" stroke={C.line} strokeWidth="4" strokeLinecap="round" />
      {milestones.map((m, i) => {
        const y = 280 - i * 60;
        return (
          <g key={m}>
            <circle cx="90" cy={y} r="9" fill={i === milestones.length - 1 ? C.marigold : "#fff"} stroke={C.marigold} strokeWidth="3" />
            <Label x={72} y={y + 4} size={11} anchor="end">{m}</Label>
          </g>
        );
      })}
      <g className="rocket-rise">
        <path d="M230 60c30 30 34 90 20 150h-40c-14-60-10-120 20-150Z" fill="#fff" stroke={C.ink} strokeWidth="2.5" />
        <circle cx="230" cy="120" r="14" fill={C.peacockT} stroke={C.ink} strokeWidth="2.5" />
        <path d="M210 170l-26 30 28-4ZM250 170l26 30-28-4Z" fill={C.rani} stroke={C.ink} strokeWidth="2" />
        <path d="M216 214c4 30 10 40 14 52 4-12 10-22 14-52Z" fill={C.marigold} />
        <path d="M222 214c2 18 5 24 8 32 3-8 6-14 8-32Z" fill={C.haldi} />
      </g>
      <g fill={C.haldi}>
        <circle cx="300" cy="60" r="3" />
        <circle cx="160" cy="40" r="2" />
        <circle cx="320" cy="150" r="2" />
      </g>
    </svg>
  );
}

/** GrowthTree (#12): branches labelled with growth moves. */
export function GrowthTree({ moves = ["Direct ordering", "Sell abroad", "Dealer portal", "Automation", "Owner dashboard", "New city"], className }: { moves?: string[]; className?: string }) {
  const spots = [
    { x: 70, y: 70, bx: 170, by: 150 },
    { x: 290, y: 60, bx: 200, by: 140 },
    { x: 40, y: 150, bx: 170, by: 190 },
    { x: 320, y: 140, bx: 200, by: 180 },
    { x: 80, y: 225, bx: 175, by: 230 },
    { x: 300, y: 220, bx: 195, by: 225 },
  ];
  return (
    <svg viewBox="-24 0 428 330" className={cls("svg-growthtree", className)} role="img" aria-label={`A tree whose branches are growth moves: ${moves.join(", ")}`}>
      <path d="M185 320 C180 260 190 200 185 110" stroke="#7A5A3A" strokeWidth="14" fill="none" strokeLinecap="round" />
      {moves.slice(0, 6).map((m, i) => {
        const s = spots[i];
        const w = Math.max(90, m.length * 7 + 26);
        return (
          <g key={m}>
            <path d={`M${s.bx} ${s.by} Q${(s.bx + s.x) / 2} ${s.y + 10} ${s.x} ${s.y}`} stroke="#7A5A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
            <ellipse cx={s.x} cy={s.y - 4} rx="20" ry="12" fill={C.mehendi} opacity="0.35" />
            <Chip x={s.x - w / 2} y={s.y - 15} w={w} text={m} fill={C.mehendiT} stroke={C.mehendi} size={10.5} />
          </g>
        );
      })}
      <ellipse cx="185" cy="100" rx="44" ry="30" fill={C.mehendi} opacity="0.85" />
      <path d="M150 322h70" stroke={C.ink} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** RentLadder (#14): listing → lead pack → ads, with coins falling. Neutral, never "vs". */
export function RentLadder({ rungs = ["Free listing", "Lead pack", "Paid ads"], className }: { rungs?: string[]; className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={cls("svg-rentladder", className)} role="img" aria-label={`A rented-leads ladder: ${rungs.join(", then ")} — each step costs more`}>
      <path d="M80 290 L120 20 M180 290 L220 20" stroke={C.ink2} strokeWidth="5" strokeLinecap="round" />
      {rungs.map((r, i) => {
        const y = 240 - i * 90;
        const x = 86 + (290 - y) * 0.148 - 6;
        return (
          <g key={r}>
            <path d={`M${x} ${y} h${100}`} stroke={C.ink2} strokeWidth="5" strokeLinecap="round" />
            <rect x={x + 112} y={y - 15} width="120" height="30" rx="15" fill={C.indigoT} />
            <Label x={x + 172} y={y + 4} size={11} anchor="middle" fill={C.indigo}>{r}</Label>
          </g>
        );
      })}
      <g className="coins-fall" fill={C.haldi} stroke={C.ink} strokeWidth="1.5">
        <circle cx="40" cy="60" r="9" />
        <circle cx="30" cy="140" r="9" />
        <circle cx="50" cy="210" r="9" />
      </g>
      <g fill={C.ink} fontSize="10" fontWeight="800" textAnchor="middle">
        <text x="40" y="64">₹</text>
        <text x="30" y="144">₹</text>
        <text x="50" y="214">₹</text>
      </g>
    </svg>
  );
}

/** ReachFunnel (#33): Search · Maps · Ads · AI → your site → WhatsApp. */
export function ReachFunnel({ className }: { className?: string }) {
  const inputs = [
    { t: "Search", f: C.raniT },
    { t: "Maps", f: C.mehendiT },
    { t: "Ads", f: C.marigoldT },
    { t: "AI assistants", f: C.indigoT },
  ];
  return (
    <svg viewBox="0 0 520 240" className={cls("svg-reachfunnel", className)} role="img" aria-label="Customers arrive from search, maps, ads and AI assistants, land on your site, then message you on WhatsApp">
      <defs>
        <Arrowhead id="rf-a" />
      </defs>
      {inputs.map((x, i) => {
        const y = 24 + i * 52;
        return (
          <g key={x.t}>
            <Chip x={10} y={y} w={124} text={x.t} fill={x.f} />
            <path d={`M136 ${y + 15} C190 ${y + 15} 190 120 232 120`} fill="none" stroke={C.ink2} strokeWidth="2" strokeDasharray="4 5" className="flow-dash" />
          </g>
        );
      })}
      <rect x="236" y="88" width="120" height="64" rx="16" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <Label x={296} y={116} size={11} anchor="middle">{EXAMPLE.restaurant.domain}</Label>
      <Label x={296} y={134} size={9} weight={600} anchor="middle" fill={C.ink2}>Webify Site</Label>
      <path d="M358 120 H392" stroke={C.ink} strokeWidth="2.5" markerEnd="url(#rf-a)" />
      <rect x="398" y="94" width="112" height="52" rx="26" fill={C.wa} />
      <Label x={454} y={125} size={12} anchor="middle">WhatsApp</Label>
    </svg>
  );
}

/** DecisionTree (§9.7b): build vs buy — question, an example business, the route and its cost. */
export function DecisionTree({ className }: { className?: string }) {
  const route = (slug: string) => BUILD_ROUTES.find((r) => r.slug === slug)!;
  const leaves = [
    { q: "Standard need, tight budget", qi: "Calculator", ex: `${EXAMPLE.kirana.name}: billing and stock, nothing unusual`, a: "Zoho / Odoo, set up for you", r: route("budget"), f: C.haldiT, s: C.marigold },
    { q: "Already on Google / Microsoft", qi: "CloudArrowUp", ex: `${EXAMPLE.clinic.name}: already runs on Google Workspace`, a: "Build around your tools", r: route("your-tools"), f: C.peacockT, s: C.peacock },
    { q: "Unique workflow", qi: "PuzzlePiece", ex: `${EXAMPLE.traders.name}: dealer price tiers no app handles`, a: "Custom build", r: route("scratch"), f: C.raniT, s: C.rani },
    { q: "Close to our prototype", qi: "SquaresFour", ex: `${EXAMPLE.restaurant.name}: direct ordering, like our prototype`, a: "Adapt our prototype", r: route("prototype"), f: C.mehendiT, s: C.mehendi },
  ];
  return (
    <svg viewBox="0 0 720 440" className={cls("svg-decisiontree", className)} role="img" aria-label="Build or buy: standard need and tight budget means Zoho or Odoo set up for you; already on Google or Microsoft means we build around them; a unique workflow means a custom build; close to a prototype means we adapt it">
      <defs>
        <marker id="dt-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill={C.ink2} />
        </marker>
      </defs>
      <rect x="240" y="14" width="240" height="50" rx="25" fill={C.indigo} />
      <circle cx="270" cy="39" r="15" fill="#fff" />
      <g transform="translate(260 29)" color={C.indigo}>
        <Icon name="Compass" size={20} weight="bold" />
      </g>
      <Label x={378} y={45} size={16} anchor="middle" fill="#fff">What do you need?</Label>
      {leaves.map((l, i) => {
        const x = 16 + i * 174;
        const cx = x + 80;
        return (
          <g key={l.q}>
            <path d={`M360 64 C360 100 ${cx} 92 ${cx} 124`} fill="none" stroke={C.ink2} strokeWidth="2" markerEnd="url(#dt-a)" />
            {/* the question */}
            <rect x={x} y="128" width="160" height="118" rx="14" fill="#fff" stroke={C.line} strokeWidth="1.5" />
            <circle cx={x + 26} cy="154" r="16" fill={l.f} />
            <g transform={`translate(${x + 16} 144)`} color={l.s}>
              <Icon name={l.qi} size={20} weight="bold" />
            </g>
            <foreignObject x={x + 48} y="136" width="106" height="40">
              <p className="dt-q">{l.q}</p>
            </foreignObject>
            <path d={`M${x + 12} 184 H${x + 148}`} stroke={C.line} strokeDasharray="3 4" />
            <foreignObject x={x + 12} y="190" width="138" height="52">
              <p className="dt-ex">e.g. {l.ex}</p>
            </foreignObject>
            <path d={`M${cx} 246 V274`} stroke={C.ink2} strokeWidth="2" markerEnd="url(#dt-a)" />
            {/* the route */}
            <rect x={x} y="278" width="160" height="100" rx="14" fill={l.f} stroke={l.s} strokeWidth="1.5" />
            <g transform={`translate(${x + 12} 290)`} color={l.s}>
              <Icon name={l.r.icon} size={20} weight="bold" />
            </g>
            <foreignObject x={x + 38} y="286" width="116" height="44">
              <p className="dt-a">{l.a}</p>
            </foreignObject>
            <rect x={x + 8} y="342" width="144" height="26" rx="13" fill="#fff" />
            <foreignObject x={x + 8} y="342" width="144" height="26">
              <p className="dt-cost">{l.r.cost}</p>
            </foreignObject>
          </g>
        );
      })}
      <rect x="16" y="396" width="688" height="34" rx="17" fill={C.indigoT} />
      <g transform="translate(150 404)" color={C.indigo}>
        <Icon name="Tag" size={18} weight="bold" />
      </g>
      <Label x={176} y={418} size={11.5} weight={700} fill={C.indigo}>{WHITE_LABEL_LINE}</Label>
    </svg>
  );
}
