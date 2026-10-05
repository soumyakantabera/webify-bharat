/**
 * LaunchCountdown (content-plan §9.3 #3): horizontal day cards from the
 * first chat to launch day. Durations depend on approvals, so none are shown.
 */
export function LaunchCountdown({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="launch-countdown">
      {steps.map((s, i) => (
        <li key={s} className={i === steps.length - 1 ? "is-launch" : undefined}>
          <span className="lc-step">Step {i + 1}</span>
          <strong>{s}</strong>
        </li>
      ))}
    </ol>
  );
}
