import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = {
  title: "Legal notice · Impressum",
  description: "Service provider information pursuant to § 5 DDG.",
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <PageMain>
      <LegalDoc doc="imprint" />
    </PageMain>
  );
}
