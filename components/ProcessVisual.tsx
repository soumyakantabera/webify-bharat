const steps = [
  {
    n: "1",
    title: "Discover",
    copy: "We understand your business and goals",
    tone: "teal" as const,
    icon: DiscoverIcon,
  },
  {
    n: "2",
    title: "Build",
    copy: "We create the right digital solution",
    tone: "papaya" as const,
    icon: BuildIcon,
  },
  {
    n: "3",
    title: "Automate",
    copy: "We automate processes and integrate tools",
    tone: "gold" as const,
    icon: AutomateIcon,
  },
  {
    n: "4",
    title: "Grow",
    copy: "We track, analyze and help you grow more",
    tone: "teal" as const,
    icon: GrowIcon,
  },
];

function DiscoverIcon() {
  return (
    <svg viewBox="0 0 120 96" fill="none" aria-hidden="true">
      <ellipse cx="60" cy="88" rx="36" ry="6" fill="#E7F5F1" />
      <rect x="36" y="66" width="48" height="6" rx="3" fill="#D7B48A" />
      <rect x="42" y="72" width="4" height="10" rx="1" fill="#C4A06E" />
      <rect x="74" y="72" width="4" height="10" rx="1" fill="#C4A06E" />
      <circle cx="38" cy="32" r="12" fill="#E8B48A" />
      <rect x="24" y="46" width="28" height="24" rx="12" fill="#FF7A45" />
      <circle cx="82" cy="32" r="12" fill="#C48A62" />
      <rect x="68" y="46" width="28" height="24" rx="12" fill="#0F766E" />
      <rect x="54" y="54" width="12" height="8" rx="2" fill="#FAFAF7" stroke="#F2C744" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg viewBox="0 0 120 96" fill="none" aria-hidden="true">
      <ellipse cx="60" cy="88" rx="34" ry="6" fill="#FFF1E8" />
      <rect x="22" y="22" width="76" height="52" rx="8" fill="#1C1F1D" />
      <rect x="28" y="28" width="64" height="36" rx="4" fill="#E7F5F1" />
      <path d="M48 38h-6l8 8-8 8h6l8-8-8-8Zm24 0h6l-8 8 8 8h-6l-8-8 8-8Z" fill="#0F766E" />
      <rect x="46" y="74" width="28" height="5" rx="2" fill="#2A2E2C" />
      <rect x="38" y="79" width="44" height="5" rx="2.5" fill="#FF7A45" />
    </svg>
  );
}

function AutomateIcon() {
  return (
    <svg viewBox="0 0 120 96" fill="none" aria-hidden="true">
      <ellipse cx="60" cy="88" rx="34" ry="6" fill="#E7F5F1" />
      <circle cx="46" cy="52" r="22" fill="#0F766E" />
      <circle cx="46" cy="52" r="9" fill="#FAFAF7" />
      <circle cx="46" cy="52" r="4" fill="#0F766E" />
      <rect x="43" y="26" width="6" height="9" rx="2" fill="#0F766E" />
      <rect x="43" y="69" width="6" height="9" rx="2" fill="#0F766E" />
      <rect x="20" y="49" width="9" height="6" rx="2" fill="#0F766E" />
      <rect x="63" y="49" width="9" height="6" rx="2" fill="#0F766E" />
      <circle cx="82" cy="38" r="16" fill="#FF7A45" />
      <circle cx="82" cy="38" r="6.5" fill="#FAFAF7" />
      <circle cx="82" cy="38" r="3" fill="#FF7A45" />
      <circle cx="92" cy="64" r="11" fill="#F2C744" />
      <path d="M87.5 64.2 91 68l7-9" stroke="#1C1F1D" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GrowIcon() {
  return (
    <svg viewBox="0 0 120 96" fill="none" aria-hidden="true">
      <ellipse cx="60" cy="88" rx="36" ry="6" fill="#E7F5F1" />
      <rect x="24" y="64" width="14" height="16" rx="3" fill="#F2C744" />
      <rect x="42" y="52" width="14" height="28" rx="3" fill="#FF7A45" />
      <rect x="60" y="40" width="14" height="40" rx="3" fill="#0F766E" />
      <rect x="78" y="26" width="14" height="54" rx="3" fill="#075F59" />
      <path d="M30 42c16 0 24 10 34 4 9-5 16-16 28-20" stroke="#0F766E" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M84 18h14v14" stroke="#0F766E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M98 18 82 36" stroke="#0F766E" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function ProcessVisual() {
  return (
    <div className="process-visual">
      <div className="process-visual-head">
        <strong>Our process</strong>
        <span>Simple. Transparent. Effective.</span>
      </div>
      <ol className="process-visual-steps">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className={`pv-step pv-${step.tone}`}>
              <span className="pv-num">{step.n}</span>
              <div className="pv-icon">
                <Icon />
              </div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
