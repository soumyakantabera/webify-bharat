import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/systems");

export default function Page() {
  return <RedirectStub to="/systems" />;
}
