import { Bar, BrowserBar, C, Label, LaptopFrame, PhoneFrame } from "./frames";

/**
 * Illustrated prototype teasers (content-plan §9.10, §6.10 #19). Concept
 * views only — never a screenshot of a real prototype, never a link.
 */
export type MockVariant =
  | "restaurant"
  | "clinic"
  | "coaching"
  | "retail"
  | "manufacturer"
  | "crm"
  | "hr"
  | "exporter";

export const MOCK_LABELS: Record<MockVariant, string> = {
  restaurant: "Concept view: phone menu with an order confirmation",
  clinic: "Concept view: appointment slots with a WhatsApp reminder",
  coaching: "Concept view: admissions pipeline with a fee receipt",
  retail: "Concept view: store catalogue with a repeat-order button",
  manufacturer: "Concept view: dealer price tiers and order status",
  crm: "Concept view: CRM board with key numbers",
  hr: "Concept view: staff list with role badges and attendance",
  exporter: "Concept view: multi-currency checkout",
};

function Restaurant() {
  return (
    <PhoneFrame label={MOCK_LABELS.restaurant}>
      <rect width="180" height="64" rx="0" fill={C.marigold} />
      <Label x={14} y={36} size={13} fill="#fff">Today&apos;s menu</Label>
      <Bar x={14} y={44} w={80} fill="#FFD0AD" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(12 ${80 + i * 62})`}>
          <rect width="156" height="52" rx="12" fill={C.surface} stroke={C.line} />
          <circle cx="26" cy="26" r="16" fill={[C.marigoldT, C.haldiT, C.mehendiT, C.raniT][i]} />
          <Bar x={50} y={16} w={56} fill={C.ink2} />
          <Bar x={50} y={30} w={40} />
          <rect x="116" y="16" width="30" height="20" rx="10" fill={C.marigold} />
          <Label x={131} y={29} size={9} fill="#fff" anchor="middle">Add</Label>
        </g>
      ))}
      <g className="mock-toast">
        <rect x="14" y="330" width="152" height="36" rx="12" fill={C.ink} />
        <circle cx="34" cy="348" r="9" fill={C.wa} />
        <path d="M30 348l3 3 5-6" stroke="#fff" strokeWidth="2" fill="none" />
        <Label x={50} y={352} size={10} fill="#fff">Order placed</Label>
      </g>
    </PhoneFrame>
  );
}

function Clinic() {
  const slots = ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "4:00", "4:30", "5:00"];
  return (
    <PhoneFrame label={MOCK_LABELS.clinic}>
      <Label x={14} y={40} size={13}>Book a slot</Label>
      {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
        <g key={d}>
          <rect x={14 + i * 40} y="54" width="34" height="40" rx="10" fill={i === 1 ? C.peacock : C.surface2} />
          <Label x={31 + i * 40} y={78} size={9} fill={i === 1 ? "#fff" : C.ink2} anchor="middle">{d}</Label>
        </g>
      ))}
      {slots.map((s, i) => (
        <g key={s}>
          <rect x={14 + (i % 3) * 52} y={110 + Math.floor(i / 3) * 34} width="46" height="26" rx="13" fill={i === 2 ? C.peacock : "#fff"} stroke={i === 2 ? C.peacock : C.line} />
          <Label x={37 + (i % 3) * 52} y={127 + Math.floor(i / 3) * 34} size={9} fill={i === 2 ? "#fff" : C.ink2} anchor="middle">{s}</Label>
        </g>
      ))}
      <rect x="14" y="222" width="152" height="30" rx="15" fill={C.peacock} />
      <Label x={90} y={241} size={10} fill="#fff" anchor="middle">Confirm booking</Label>
      <g className="mock-toast">
        <rect x="14" y="282" width="152" height="70" rx="14" fill={C.mehendiT} />
        <Label x={26} y={302} size={9} fill={C.mehendi}>WhatsApp reminder</Label>
        <Bar x={26} y={312} w={120} fill="#C9DDB3" />
        <Bar x={26} y={324} w={96} fill="#C9DDB3" />
        <Label x={26} y={344} size={9} fill={C.ink2} weight={600}>Tomorrow, 10:30</Label>
      </g>
    </PhoneFrame>
  );
}

function Board({ cols, tints }: { cols: string[]; tints: string[] }) {
  return (
    <g>
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${16 + i * 104} 70)`}>
          <rect width="96" height="184" rx="10" fill={C.surface2} />
          <Label x={10} y={18} size={9} fill={C.ink2}>{c}</Label>
          {Array.from({ length: 3 - (i % 2) }, (_, j) => (
            <g key={j} transform={`translate(8 ${28 + j * 46})`}>
              <rect width="80" height="38" rx="8" fill="#fff" stroke={C.line} />
              <rect x="8" y="8" width="6" height="22" rx="3" fill={tints[i]} />
              <Bar x={20} y={11} w={46} fill={C.ink2} h={5} />
              <Bar x={20} y={23} w={34} h={5} />
            </g>
          ))}
        </g>
      ))}
    </g>
  );
}

function Coaching() {
  return (
    <LaptopFrame label={MOCK_LABELS.coaching}>
      <BrowserBar title="admissions" />
      <Label x={16} y={52} size={13}>Admissions</Label>
      <Board cols={["Enquiry", "Demo class", "Admitted"]} tints={[C.haldi, C.indigo, C.mehendi]} />
      <g className="mock-toast" transform="translate(330 120)">
        <rect width="100" height="96" rx="12" fill="#fff" stroke={C.line} />
        <rect width="100" height="26" rx="12" fill={C.indigo} />
        <Label x={50} y={17} size={9} fill="#fff" anchor="middle">Fee receipt</Label>
        <Bar x={12} y={38} w={70} fill={C.ink2} h={5} />
        <Bar x={12} y={50} w={52} h={5} />
        <circle cx="50" cy="76" r="10" fill={C.mehendi} />
        <path d="M45 76l3 3 6-7" stroke="#fff" strokeWidth="2" fill="none" />
      </g>
    </LaptopFrame>
  );
}

function Retail() {
  const tints = [C.raniT, C.haldiT, C.peacockT, C.mehendiT];
  return (
    <PhoneFrame label={MOCK_LABELS.retail}>
      <Label x={14} y={40} size={13}>Your store</Label>
      <rect x="14" y="50" width="152" height="24" rx="12" fill={C.surface2} />
      <Bar x={26} y={59} w={70} />
      {tints.map((t, i) => (
        <g key={i} transform={`translate(${14 + (i % 2) * 78} ${86 + Math.floor(i / 2) * 104})`}>
          <rect width="74" height="96" rx="12" fill="#fff" stroke={C.line} />
          <rect x="6" y="6" width="62" height="50" rx="8" fill={t} />
          <Bar x={8} y={64} w={46} fill={C.ink2} h={5} />
          <Bar x={8} y={76} w={30} h={5} />
        </g>
      ))}
      <rect x="14" y="304" width="152" height="40" rx="20" fill={C.rani} />
      <path d="M38 318a8 8 0 1 1-2 8" stroke="#fff" strokeWidth="2" fill="none" />
      <Label x={100} y={329} size={10} fill="#fff" anchor="middle">Repeat last order</Label>
    </PhoneFrame>
  );
}

function Manufacturer() {
  const tiers = [
    { name: "Gold dealer", tint: C.haldiT },
    { name: "Silver dealer", tint: C.surface2 },
    { name: "Retail", tint: C.peacockT },
  ];
  const steps = ["Placed", "Packed", "Dispatched"];
  return (
    <LaptopFrame label={MOCK_LABELS.manufacturer}>
      <BrowserBar title="dealer portal" />
      <Label x={16} y={52} size={13}>Price tiers</Label>
      {tiers.map((t, i) => (
        <g key={t.name} transform={`translate(16 ${64 + i * 34})`}>
          <rect width="230" height="28" rx="8" fill={t.tint} />
          <Label x={12} y={18} size={9}>{t.name}</Label>
          <Bar x={120} y={11} w={40} fill={C.ink2} h={5} />
          <Bar x={172} y={11} w={44} h={5} />
        </g>
      ))}
      <Label x={16} y={190} size={13}>Order status</Label>
      {steps.map((s, i) => (
        <g key={s}>
          {i > 0 ? <rect x={30 + (i - 1) * 120} y="214" width="120" height="4" fill={i < 2 ? C.mehendi : C.line} /> : null}
          <circle cx={30 + i * 120} cy="216" r="11" fill={i < 2 ? C.mehendi : "#fff"} stroke={i < 2 ? C.mehendi : C.line} strokeWidth="3" />
          <Label x={30 + i * 120} y={248} size={9} fill={C.ink2} anchor="middle">{s}</Label>
        </g>
      ))}
      <rect x="270" y="64" width="154" height="94" rx="10" fill={C.indigoT} />
      <Label x={284} y={84} size={9} fill={C.indigo}>Dealer login</Label>
      <Bar x={284} y={96} w={110} fill="#fff" h={14} />
      <Bar x={284} y={116} w={110} fill="#fff" h={14} />
      <rect x="284" y="136" width="60" height="14" rx="7" fill={C.indigo} />
    </LaptopFrame>
  );
}

function Crm() {
  return (
    <LaptopFrame label={MOCK_LABELS.crm}>
      <BrowserBar title="your business · CRM" />
      {[C.raniT, C.peacockT, C.haldiT].map((t, i) => (
        <g key={i} transform={`translate(${16 + i * 138} 34)`}>
          <rect width="130" height="30" rx="8" fill={t} />
          <Bar x={10} y={9} w={50} fill={C.ink2} h={5} />
          <Bar x={10} y={19} w={30} h={4} fill="#fff" />
        </g>
      ))}
      <Board cols={["New lead", "Quote sent", "Won"]} tints={[C.rani, C.haldi, C.mehendi]} />
    </LaptopFrame>
  );
}

function Hr() {
  const rows = [
    { role: "Owner", tint: C.indigo },
    { role: "Manager", tint: C.peacock },
    { role: "Staff", tint: C.mehendi },
    { role: "Staff", tint: C.mehendi },
  ];
  return (
    <LaptopFrame label={MOCK_LABELS.hr}>
      <BrowserBar title="team portal" />
      <Label x={16} y={52} size={13}>Team</Label>
      {rows.map((r, i) => (
        <g key={i} transform={`translate(16 ${64 + i * 46})`}>
          <rect width="250" height="38" rx="10" fill="#fff" stroke={C.line} />
          <circle cx="20" cy="19" r="11" fill={C.surface2} />
          <Bar x={40} y={12} w={70} fill={C.ink2} h={5} />
          <Bar x={40} y={23} w={48} h={5} />
          <rect x="176" y="11" width="62" height="16" rx="8" fill={r.tint} />
          <Label x={207} y={22} size={8} fill="#fff" anchor="middle">{r.role}</Label>
        </g>
      ))}
      <Label x={290} y={52} size={13}>Attendance</Label>
      {Array.from({ length: 20 }, (_, i) => (
        <rect key={i} x={290 + (i % 5) * 28} y={66 + Math.floor(i / 5) * 28} width="22" height="22" rx="6" fill={i === 7 || i === 13 ? C.haldiT : C.mehendiT} />
      ))}
    </LaptopFrame>
  );
}

function Exporter() {
  return (
    <LaptopFrame label={MOCK_LABELS.exporter}>
      <BrowserBar title="checkout" />
      <Label x={16} y={52} size={13}>Checkout</Label>
      {["USD", "EUR", "GBP", "INR"].map((c, i) => (
        <g key={c}>
          <rect x={16 + i * 54} y="64" width="48" height="22" rx="11" fill={i === 0 ? C.indigo : C.surface2} />
          <Label x={40 + i * 54} y={79} size={9} fill={i === 0 ? "#fff" : C.ink2} anchor="middle">{c}</Label>
        </g>
      ))}
      <rect x="16" y="100" width="230" height="30" rx="8" fill="#fff" stroke={C.line} />
      <Bar x={28} y={112} w={120} />
      <rect x="16" y="138" width="110" height="30" rx="8" fill="#fff" stroke={C.line} />
      <rect x="136" y="138" width="110" height="30" rx="8" fill="#fff" stroke={C.line} />
      <rect x="16" y="190" width="230" height="34" rx="17" fill={C.indigo} />
      <Label x={131} y={211} size={10} fill="#fff" anchor="middle">Pay by card</Label>
      <g transform="translate(340 150)">
        <circle r="74" fill={C.peacockT} stroke={C.peacock} strokeWidth="2" />
        <ellipse rx="74" ry="28" fill="none" stroke={C.peacock} strokeWidth="1.5" />
        <ellipse rx="30" ry="74" fill="none" stroke={C.peacock} strokeWidth="1.5" />
        <path d="M-74 0h148M0 -74v148" stroke={C.peacock} strokeWidth="1.5" />
        <path d="M-40 -60q60 40 90 -10" fill="none" stroke={C.marigold} strokeWidth="3" strokeDasharray="5 5" />
        <circle cx="50" cy="-70" r="6" fill={C.marigold} />
      </g>
    </LaptopFrame>
  );
}

const VARIANTS: Record<MockVariant, () => React.ReactElement> = {
  restaurant: Restaurant,
  clinic: Clinic,
  coaching: Coaching,
  retail: Retail,
  manufacturer: Manufacturer,
  crm: Crm,
  hr: Hr,
  exporter: Exporter,
};

export function MockScreen({ variant }: { variant: MockVariant }) {
  const V = VARIANTS[variant];
  return <V />;
}
