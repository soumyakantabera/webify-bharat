import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/solutions/organise");

export default function Page() {
  return <RedirectStub to="/solutions/organise" />;
}
