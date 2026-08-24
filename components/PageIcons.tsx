import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CreditCard,
  Factory,
  FileCheck,
  Globe,
  GraduationCap,
  Home,
  Images,
  IndianRupee,
  KeyRound,
  LayoutGrid,
  MessageCircle,
  Newspaper,
  SearchX,
  ShoppingBag,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Users,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  home: KeyRound,
  services: Briefcase,
  websites: Globe,
  ecommerce: ShoppingBag,
  payments: CreditCard,
  whatsapp: MessageCircle,
  analytics: BarChart3,
  compliance: FileCheck,
  industries: Building2,
  retail: Store,
  restaurant: UtensilsCrossed,
  healthcare: Stethoscope,
  education: GraduationCap,
  "real-estate": Home,
  manufacturing: Factory,
  work: Images,
  pricing: IndianRupee,
  about: Users,
  blog: Newspaper,
  article: BookOpen,
  contact: MessageCircle,
  missing: SearchX,
};

export function PageGlyph({
  name,
  size = 16,
}: {
  name: string;
  size?: number;
}) {
  const Icon = ICONS[name] ?? LayoutGrid;
  return <Icon size={size} strokeWidth={2.2} aria-hidden />;
}

export function PageLead({
  icon,
  kicker,
  children,
}: {
  icon: string;
  kicker: string;
  children?: ReactNode;
}) {
  return (
    <>
      <div className="eyebrow">
        <span className="eyebrow-icon">
          <PageGlyph name={icon} size={13} />
        </span>
        {kicker}
      </div>
      {children}
    </>
  );
}
