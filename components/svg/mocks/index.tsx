import { Bar, C, Label, PhoneFrame, SampleChip } from "./frames";
import { EXAMPLE } from "@/lib/examples";

export { MockScreen, MOCK_LABELS, type MockVariant } from "./MockScreen";
export { SampleChip } from "./frames";

/** SearchResultMock (§6.10 #31): generic results page, your business card highlighted. No real brand UI. */
export function SearchResultMock({ query = "kirana store near me", className }: { query?: string; className?: string }) {
  return (
    <svg viewBox="0 0 360 260" className={`wb-svg mock-card${className ? ` ${className}` : ""}`} role="img" aria-label={`A search for "${query}" with your business shown as a highlighted result`}>
      <rect width="360" height="260" rx="18" fill="#fff" stroke={C.line} />
      <rect x="16" y="16" width="328" height="34" rx="17" fill={C.surface2} />
      <circle cx="36" cy="33" r="6" fill="none" stroke={C.muted} strokeWidth="2" />
      <path d="M40.5 37.5l4 4" stroke={C.muted} strokeWidth="2" strokeLinecap="round" />
      <Label x={54} y={37} size={11} weight={600} fill={C.ink2}>{query}</Label>
      <g>
        <rect x="16" y="64" width="328" height="74" rx="12" fill={C.raniT} stroke={C.rani} strokeWidth="1.5" />
        <rect x="28" y="76" width="50" height="50" rx="10" fill="#fff" />
        <path d="M38 96l5-10h20l5 10M40 96v18h26V96" fill="none" stroke={C.rani} strokeWidth="2" />
        <Label x={90} y={92} size={12}>{EXAMPLE.kirana.name}</Label>
        <Label x={90} y={108} size={9} weight={600} fill={C.mehendi}>Open now · 1.2 km</Label>
        <rect x="90" y="115" width="62" height="16" rx="8" fill={C.wa} />
        <Label x={121} y={126} size={8} anchor="middle">WhatsApp</Label>
        <rect x="158" y="115" width="44" height="16" rx="8" fill="#fff" stroke={C.line} />
        <Label x={180} y={126} size={8} anchor="middle">Call</Label>
      </g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(16 ${152 + i * 50})`}>
          <rect width="328" height="42" rx="10" fill="#fff" stroke={C.line} />
          <Bar x={12} y={12} w={140} fill="#CFC8BC" />
          <Bar x={12} y={26} w={200} />
        </g>
      ))}
    </svg>
  );
}

/** AiAnswerMock (§6.10 #32): a generic AI-assistant answer recommending "your business". */
export function AiAnswerMock({ question = "Which clinic near me takes WhatsApp bookings?", className }: { question?: string; className?: string }) {
  return (
    <svg viewBox="0 0 360 250" className={`wb-svg mock-card${className ? ` ${className}` : ""}`} role="img" aria-label="An AI assistant answering a customer's question and naming your business">
      <rect width="360" height="250" rx="18" fill="#fff" stroke={C.line} />
      <rect x="120" y="18" width="224" height="44" rx="14" fill={C.surface2} />
      <foreignObject x="130" y="22" width="206" height="40">
        <p className="mock-fo">{question}</p>
      </foreignObject>
      <circle cx="34" cy="92" r="14" fill={C.indigoT} />
      <path d="M34 82l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5Z" fill={C.indigo} />
      <rect x="56" y="78" width="288" height="152" rx="14" fill={C.indigoT} />
      <Bar x={70} y={94} w={210} fill="#D3CDEA" />
      <Label x={70} y={124} size={11} fill={C.ink2} weight={600}>A good option is</Label>
      <rect x="166" y="111" width="104" height="20" rx="6" fill="#fff" stroke={C.indigo} />
      <Label x={218} y={125} size={11} anchor="middle" fill={C.indigo}>{EXAMPLE.clinic.name}</Label>
      <Bar x={70} y={142} w={250} fill="#D3CDEA" />
      <Bar x={70} y={156} w={220} fill="#D3CDEA" />
      <Bar x={70} y={170} w={160} fill="#D3CDEA" />
      <rect x="70" y="190" width="96" height="22" rx="11" fill="#fff" />
      <Label x={118} y={205} size={9} anchor="middle" fill={C.ink2}>{EXAMPLE.clinic.domain}</Label>
    </svg>
  );
}

/** OwnerDashboard (§6.10 #7, §6.11): 3 KPI cards + sparkline + "stuck" list. Always carries the Sample data chip. */
export function OwnerDashboard({ className }: { className?: string }) {
  const kpis = [
    { label: "Enquiries this week", value: "42", tint: C.raniT, ink: C.rani },
    { label: "Collected", value: "₹1.8L", tint: C.peacockT, ink: "#007373" },
    { label: "Stuck orders", value: "3", tint: C.haldiT, ink: "#8A5A00" },
  ];
  return (
    <svg viewBox="0 0 400 280" className={`wb-svg mock-card${className ? ` ${className}` : ""}`} role="img" aria-label="Sample owner dashboard with enquiries, collections and stuck orders">
      <rect width="400" height="280" rx="18" fill="#fff" stroke={C.line} />
      <Label x={18} y={30} size={13}>This week</Label>
      <SampleChip x={318} y={18} />
      {kpis.map((k, i) => (
        <g key={k.label} transform={`translate(${18 + i * 124} 46)`}>
          <rect width="116" height="70" rx="12" fill={k.tint} />
          <Label x={12} y={22} size={8.5} weight={600} fill={C.ink2}>{k.label}</Label>
          <text x="12" y="54" fontSize="22" fontWeight="700" fill={k.ink} className="mono">{k.value}</text>
        </g>
      ))}
      <rect x="18" y="128" width="216" height="134" rx="12" fill={C.surface} stroke={C.line} />
      <Label x={30} y={148} size={9} fill={C.ink2}>Collections, last 8 weeks</Label>
      <path d="M30 236 L56 222 L82 228 L108 204 L134 210 L160 188 L186 192 L212 168" fill="none" stroke={C.peacock} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" className="spark" />
      <path d="M30 236 L56 222 L82 228 L108 204 L134 210 L160 188 L186 192 L212 168 V250 H30Z" fill={C.peacock} opacity="0.12" />
      <rect x="246" y="128" width="136" height="134" rx="12" fill={C.surface} stroke={C.line} />
      <Label x={258} y={148} size={9} fill={C.ink2}>What&apos;s stuck</Label>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(258 ${160 + i * 32})`}>
          <rect width="112" height="24" rx="8" fill="#fff" stroke={C.line} />
          <circle cx="12" cy="12" r="4" fill={C.haldi} />
          <Bar x={22} y={9} w={70} fill="#CFC8BC" />
        </g>
      ))}
    </svg>
  );
}

/** PipelineBoard (§6.10 #22): CRM kanban, Enquiry → Demo → Quote → Won. */
export function PipelineBoard({ stages = ["Enquiry", "Demo", "Quote", "Won"], className }: { stages?: string[]; className?: string }) {
  const tints = [C.haldi, C.indigo, C.marigold, C.mehendi];
  return (
    <svg viewBox="0 0 440 240" className={`wb-svg mock-card pipeline${className ? ` ${className}` : ""}`} role="img" aria-label={`A pipeline board with columns ${stages.join(", ")}`}>
      <rect width="440" height="240" rx="18" fill="#fff" stroke={C.line} />
      {stages.slice(0, 4).map((s, i) => (
        <g key={s} transform={`translate(${14 + i * 106} 16)`}>
          <rect width="98" height="208" rx="10" fill={C.surface2} />
          <circle cx="14" cy="18" r="4" fill={tints[i]} />
          <Label x={24} y={22} size={10}>{s}</Label>
          {Array.from({ length: 3 - (i === 3 ? 1 : 0) }, (_, j) => (
            <g key={j} transform={`translate(8 ${34 + j * 50})`} className={i === 1 && j === 0 ? "pipe-move" : undefined}>
              <rect width="82" height="42" rx="8" fill="#fff" stroke={C.line} />
              <rect x="8" y="8" width="5" height="26" rx="2.5" fill={tints[i]} />
              <Bar x={20} y={12} w={48} fill={C.ink2} h={5} />
              <Bar x={20} y={25} w={32} h={5} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/** WhatsApp-style chat on your number (generic, no WhatsApp branding). */
export function WhatsAppChatMock({ className, messages }: { className?: string; messages?: { from: "them" | "you"; text: string }[] }) {
  const msgs = messages ?? [
    { from: "them", text: "Hi! Is a table for 4 free tonight?" },
    { from: "you", text: "Yes — 8:00 or 8:30?" },
    { from: "them", text: "8:30 please" },
    { from: "you", text: "Booked. See you at 8:30!" },
  ];
  return (
    <PhoneFrame label="A WhatsApp conversation answered on your business number" className={className}>
      <rect width="180" height="56" fill="#0B6E5F" />
      <circle cx="28" cy="34" r="12" fill="#fff" opacity="0.9" />
      <Label x={48} y={38} size={11} fill="#fff">{EXAMPLE.restaurant.name}</Label>
      <Label x={48} y={50} size={8} weight={500} fill="#fff">online</Label>
      <rect y="56" width="180" height="324" fill="#EFE7DD" />
      {msgs.map((m, i) => {
        const w = Math.min(140, 30 + m.text.length * 4.4);
        const x = m.from === "you" ? 168 - w : 12;
        return (
          <g key={i} transform={`translate(${x} ${72 + i * 52})`}>
            <rect width={w} height="38" rx="10" fill={m.from === "you" ? "#D8F8C8" : "#fff"} />
            <foreignObject x="6" y="4" width={w - 12} height="32">
              <p className="mock-fo small">{m.text}</p>
            </foreignObject>
          </g>
        );
      })}
    </PhoneFrame>
  );
}

/** UPI payment-success screen (generic). */
export function UpiSuccessMock({ amount = "₹1,240", className }: { amount?: string; className?: string }) {
  return (
    <PhoneFrame label={`A payment of ${amount} received in your business account`} className={className}>
      <rect width="180" height="380" fill={C.mehendiT} />
      <circle cx="90" cy="120" r="40" fill={C.mehendi} />
      <path d="M72 120l12 12 24-26" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Label x={90} y={196} size={13} anchor="middle">Payment received</Label>
      <text x="90" y="232" fontSize="26" fontWeight="700" textAnchor="middle" fill={C.ink} className="mono">{amount}</text>
      <Label x={90} y={256} size={10} weight={600} fill={C.ink2} anchor="middle">to {EXAMPLE.restaurant.name}</Label>
      <rect x="20" y="300" width="140" height="34" rx="17" fill="#fff" />
      <Label x={90} y={321} size={10} anchor="middle" fill={C.mehendi}>Invoice sent</Label>
    </PhoneFrame>
  );
}

/** Envelope + folder — Webify Workspace signature. */
export function WorkspaceMock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={`wb-svg${className ? ` ${className}` : ""}`} role="img" aria-label="Business email and shared folders">
      <rect x="20" y="40" width="190" height="130" rx="14" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <path d="M22 46l93 70 93-70" fill="none" stroke={C.ink} strokeWidth="2" />
      <rect x="40" y="140" width="110" height="18" rx="9" fill={C.marigoldT} />
      <Label x={95} y={153} size={9} anchor="middle" fill="#B34A00">hello@{EXAMPLE.traders.domain}</Label>
      <path d="M150 90h50l12 14h88v96H150Z" fill={C.haldiT} stroke={C.ink} strokeWidth="2" />
      <path d="M150 116h150" stroke={C.ink} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={166 + i * 42} y="132" width="32" height="40" rx="5" fill="#fff" stroke={C.line} />
      ))}
    </svg>
  );
}

/** Ad card → WhatsApp enquiry (Reach Ads). */
export function AdCardMock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 220" className={`wb-svg${className ? ` ${className}` : ""}`} role="img" aria-label="An ad for your business leading to a WhatsApp enquiry">
      <rect x="10" y="20" width="190" height="180" rx="16" fill="#fff" stroke={C.line} />
      <Label x={24} y={44} size={9} weight={600} fill={C.muted}>Sponsored</Label>
      <Label x={24} y={62} size={12}>{EXAMPLE.tailor.name}</Label>
      <rect x="24" y="74" width="162" height="70" rx="10" fill={C.marigoldT} />
      <rect x="24" y="156" width="110" height="28" rx="14" fill={C.wa} />
      <Label x={79} y={174} size={10} anchor="middle">Message us</Label>
      <path d="M208 110h40" stroke={C.ink} strokeWidth="2.5" strokeDasharray="5 5" />
      <path d="M244 104l8 6-8 6" fill={C.ink} />
      <rect x="258" y="80" width="96" height="56" rx="12" fill="#D8F8C8" />
      <foreignObject x="264" y="86" width="86" height="46">
        <p className="mock-fo small">Hi, is this still available?</p>
      </foreignObject>
    </svg>
  );
}

/** Map pin card (Reach Local). */
export function MapPinCard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 240" className={`wb-svg${className ? ` ${className}` : ""}`} role="img" aria-label="Your business pinned on a map">
      <rect width="360" height="240" rx="18" fill={C.mehendiT} />
      <g stroke="#fff" strokeWidth="10" opacity="0.9">
        <path d="M0 80h360M0 170h360M90 0v240M250 0v240" />
      </g>
      <path d="M0 40 C120 60 200 20 360 60" stroke="#C9DDB3" strokeWidth="14" fill="none" />
      <path d="M180 60c-20 0-32 14-32 30 0 22 32 54 32 54s32-32 32-54c0-16-12-30-32-30Z" fill={C.rani} stroke="#fff" strokeWidth="3" />
      <circle cx="180" cy="90" r="10" fill="#fff" />
      <rect x="110" y="160" width="140" height="56" rx="12" fill="#fff" />
      <Label x={124} y={182} size={11}>{EXAMPLE.restaurant.name}</Label>
      <Label x={124} y={200} size={9} weight={600} fill={C.mehendi}>Open now · Directions</Label>
    </svg>
  );
}

/** Opt-in broadcast bubbles (Reach Campaigns). */
export function BroadcastBubbles({ className }: { className?: string }) {
  return (
    <WhatsAppChatMock
      className={className}
      messages={[
        { from: "you", text: "Diwali offer for our regulars" },
        { from: "you", text: "Order by Friday for home delivery" },
        { from: "them", text: "Please send the list!" },
        { from: "you", text: "Sent. Happy Diwali!" },
      ]}
    />
  );
}

/** Sample monthly marketing report (§9.7c #7) — always carries the Sample data chip. */
export function ReportMock({ className }: { className?: string }) {
  const rows = [
    { label: "Google search", value: 18, fill: C.rani },
    { label: "Maps", value: 14, fill: C.mehendi },
    { label: "Ads", value: 9, fill: C.marigold },
    { label: "AI assistants", value: 3, fill: C.indigo },
  ];
  const max = 20;
  return (
    <svg viewBox="0 0 400 260" className={`wb-svg mock-card${className ? ` ${className}` : ""}`} role="img" aria-label="Sample monthly report showing enquiries by source">
      <rect width="400" height="260" rx="18" fill="#fff" stroke={C.line} />
      <Label x={18} y={30} size={13}>Enquiries by source · this month</Label>
      <SampleChip x={318} y={16} />
      {rows.map((r, i) => (
        <g key={r.label} transform={`translate(18 ${54 + i * 36})`}>
          <Label x={0} y={14} size={10} weight={600} fill={C.ink2}>{r.label}</Label>
          <rect x="104" y="3" width="240" height="14" rx="7" fill={C.surface2} />
          <rect x="104" y="3" width={(r.value / max) * 240} height="14" rx="7" fill={r.fill} />
          <text x="354" y="15" fontSize="11" fontWeight="700" fill={C.ink} className="mono">{r.value}</text>
        </g>
      ))}
      <rect x="18" y="204" width="170" height="38" rx="10" fill={C.surface} stroke={C.line} />
      <Label x={30} y={222} size={9} fill={C.ink2} weight={600}>Top search</Label>
      <Label x={30} y={235} size={10}>“kirana near me”</Label>
      <rect x="200" y="204" width="182" height="38" rx="10" fill={C.surface} stroke={C.line} />
      <Label x={212} y={222} size={9} fill={C.ink2} weight={600}>Map views</Label>
      <text x="212" y="236" fontSize="11" fontWeight="700" fill={C.ink} className="mono">1,240</text>
    </svg>
  );
}
