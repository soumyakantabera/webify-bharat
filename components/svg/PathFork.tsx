/**
 * PathFork (content-plan §6.10 #3): one road splitting into three coloured
 * lanes — Launch (marigold), Organise (rani), Grow (mehendi).
 */
export function PathFork({ className, labels = true }: { className?: string; labels?: boolean }) {
  return (
    <svg viewBox="0 0 320 220" className={`wb-svg svg-pathfork${className ? ` ${className}` : ""}`} aria-hidden="true">
      <path d="M160 220 V150" stroke="#E7E2DA" strokeWidth={34} strokeLinecap="round" fill="none" />
      <path d="M160 150 C160 110 70 110 52 40" stroke="#FF6B00" strokeWidth={26} strokeLinecap="round" fill="none" />
      <path d="M160 150 V40" stroke="#E6007E" strokeWidth={26} strokeLinecap="round" fill="none" />
      <path d="M160 150 C160 110 250 110 268 40" stroke="#4F8A10" strokeWidth={26} strokeLinecap="round" fill="none" />
      <g stroke="#fff" strokeWidth={2.5} strokeDasharray="6 8" fill="none" strokeLinecap="round">
        <path d="M160 214 V150" />
        <path d="M160 150 C160 110 70 110 52 40" />
        <path d="M160 150 V40" />
        <path d="M160 150 C160 110 250 110 268 40" />
      </g>
      <circle cx={160} cy={150} r={10} fill="#fff" stroke="#1B1030" strokeWidth={2} />
      {labels ? (
        <g fontFamily="var(--font-display), Arial, sans-serif" fontWeight={700} fontSize={15} textAnchor="middle" fill="#1B1030">
          <text x={52} y={22}>Launch</text>
          <text x={160} y={22}>Organise</text>
          <text x={268} y={22}>Grow</text>
        </g>
      ) : null}
    </svg>
  );
}
