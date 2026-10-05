import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/how-we-work");

export default function Page() {
  return <RedirectStub to="/how-we-work" />;
}
