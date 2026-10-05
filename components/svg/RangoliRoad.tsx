import { withArrows } from "@/components/Glyph";
import { Webu } from "@/components/Webu";
import { Img } from "@/components/collage";

export type RoadStop = { label: string; detail?: string; colour: string; photo?: string };

/** The sales journey stops (content-plan §3). */
export const SALES_JOURNEY: RoadStop[] = [
  { label: "WhatsApp hello", detail: "You message us. A real person replies.", colour: "#25D366", photo: "IMG-R01" },
  { label: "Chai-pe-charcha", detail: "A free discovery chat.", colour: "#E6007E" },
  { label: "Prototype walkthrough", detail: "Shown privately, close to your business.", colour: "#2B1E6B", photo: "IMG-R03" },
  { label: "We map your workflow", detail: "A one-page map of how you work.", colour: "#FFB400", photo: "IMG-B09" },
  { label: "Written scope + price", detail: "On WhatsApp, before you pay anything.", colour: "#FF6B00" },
  { label: "Design → Build → Revise", detail: "Preview links as we go.", colour: "#00A6A6", photo: "IMG-R04" },
  { label: "Launch, then care & grow", detail: "Your monthly plan keeps it running.", colour: "#4F8A10", photo: "IMG-R05" },
];

/**
 * RangoliRoad (content-plan §3, §6.10 #4): a winding dotted road with a
 * coloured stop for each step. Scroll-linked filling and the scooter ride
 * are added with the motion pass (Phase 2); this renders the static road.
 */
export function RangoliRoad({
  stops = SALES_JOURNEY,
  scooter = true,
  className,
}: {
  stops?: RoadStop[];
  scooter?: boolean;
  className?: string;
}) {
  const rowH = 96;
  const w = 600;
  const h = rowH * (stops.length - 1) + 80;
  const pts = stops.map((_, i) => ({ x: i % 2 === 0 ? 150 : 450, y: 40 + i * rowH }));
  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const midY = (prev.y + p.y) / 2;
    return `${acc} C${prev.x} ${midY + 10} ${p.x} ${midY - 10} ${p.x} ${p.y}`;
  }, "");

  return (
    <div className={`rangoli-road${className ? ` ${className}` : ""}`}>
      <svg viewBox={`0 0 ${w} ${h}`} className="wb-svg rangoli-road-svg" aria-hidden="true" preserveAspectRatio="xMidYMin meet">
        <path d={d} stroke="#F4F1EA" strokeWidth={30} fill="none" strokeLinecap="round" />
        <path d={d} stroke="#E7E2DA" strokeWidth={30} fill="none" strokeLinecap="round" opacity={0.6} />
        <path d={d} stroke="#6F6A7A" strokeWidth={2.5} strokeDasharray="2 10" fill="none" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={i} className="rr-stop" data-index={i}>
            <circle cx={p.x} cy={p.y} r={17} fill="#fff" stroke={stops[i].colour} strokeWidth={4} />
            <circle cx={p.x} cy={p.y} r={8} fill={stops[i].colour} className="rr-fill" />
          </g>
        ))}
        {scooter ? (
          <g transform={`translate(${pts[0].x - 100} ${pts[0].y - 40})`} className="rr-scooter">
            <Webu state="scooter" size={64} />
          </g>
        ) : null}
      </svg>
      <ol className="rangoli-road-list">
        {stops.map((s, i) => (
          <li
            key={s.label}
            className={i % 2 === 0 ? "is-left" : "is-right"}
            style={{ ["--stop" as string]: s.colour, ["--top" as string]: `${(pts[i].y / h) * 100}%` }}
          >
            <span className="rr-num" aria-hidden="true">{i + 1}</span>
            {s.photo ? <Img slot={s.photo} mask="circle" className="rr-thumb" width={96} height={96} decorative /> : null}
            <strong>{withArrows(s.label)}</strong>
            {s.detail ? <span>{s.detail}</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
