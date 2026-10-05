import { Webu } from "@/components/Webu";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { WA_MSG } from "@/lib/wa";

/** Empty filter result (content-plan §9.19): Webu thinking + an honest offer. */
export function EmptyState({ context = "empty" }: { context?: string }) {
  return (
    <div className="empty-state" role="status">
      <Webu state="thinking" size={96} />
      <p>Nothing here yet — but we can build it. WhatsApp us.</p>
      <WhatsAppCTA message={WA_MSG.default} context={context} variant="ghost" label="WhatsApp us" />
    </div>
  );
}
