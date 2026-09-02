import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { LegalDoc } from "@/components/sections/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy policy · Datenschutzerklärung",
  description: "How this website handles personal data, under the GDPR.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageMain>
      <LegalDoc doc="privacy" />
    </PageMain>
  );
}
