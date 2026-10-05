import { Icon } from "@/components/Icon";
import { Img } from "@/components/collage";
import { PROCESS_STOPS, TYPICAL_TIMELINES, type ProcessStop } from "@/lib/process";

/**
 * Process components (content-plan §9.5): the vertical roadmap, the
 * "what we need from you" kanban and the MiniGantt (hidden until the owner
 * fills real week ranges).
 */
export function ProcessRoadmap({ stops = PROCESS_STOPS }: { stops?: ProcessStop[] }) {
  return (
    <ol className="roadmap">
      {stops.map((s, i) => (
        <li key={s.name} className={i % 2 ? "is-right" : "is-left"} style={{ ["--accent" as string]: `var(${s.colour})` }}>
          <span className="roadmap-dot">
            <Icon name={s.icon} size={22} />
          </span>
          <div className="roadmap-card">
            <span className="roadmap-num">Stop {i + 1}</span>
            <h3>{s.name}</h3>
            <p>{s.what}</p>
            <p className="roadmap-get">
              <strong>You get:</strong> {s.get}
            </p>
            {s.photo ? <Img slot={s.photo} mask="circle" className="roadmap-thumb" width={120} height={120} decorative /> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function KanbanStrip({ items }: { items: readonly string[] }) {
  return (
    <div className="kanban-strip">
      <div className="kanban-col">
        <h3>You share</h3>
        <ul>
          {items.map((i) => (
            <li key={i}>
              <strong>{i}</strong>
              <span>Don&apos;t have it? We&apos;ll help.</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="kanban-col">
        <h3>We prepare</h3>
        <ul>
          <li><strong>Design in your brand</strong><span>Clickable preview</span></li>
          <li><strong>Build and wiring</strong><span>Payments, WhatsApp, GST</span></li>
          <li><strong>Testing</strong><span>On a low-end phone and slow network</span></li>
        </ul>
      </div>
      <div className="kanban-col">
        <h3>Live</h3>
        <ul>
          <li><strong>Your domain, live</strong><span>Accounts in your name</span></li>
          <li><strong>Team trained</strong><span>Plus a walkthrough video</span></li>
          <li><strong>Care starts</strong><span>Your monthly plan</span></li>
        </ul>
      </div>
    </div>
  );
}

/** Renders nothing until TYPICAL_TIMELINES.published is true (§0 rule 2). */
export function MiniGantt() {
  if (!TYPICAL_TIMELINES.published) return null;
  return (
    <div className="mini-gantt">
      <p className="sample-chip">{TYPICAL_TIMELINES.label}</p>
      {TYPICAL_TIMELINES.rows.map((r) => (
        <div key={r.path} className="mg-row">
          <strong>{r.path}</strong>
          {r.phases.map((p) => (
            <span key={p.name} className="mg-phase">
              {p.name} · {p.weeks} weeks
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
