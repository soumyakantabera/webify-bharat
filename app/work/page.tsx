import { RedirectStub, redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/prototypes");

export default function Page() {
  return <RedirectStub to="/prototypes" />;
}
