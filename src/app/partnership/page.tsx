import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { Selectivity } from "@/components/sections/Selectivity";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Revenue share instead of an agency invoice. How the CreatorClick partnership model works, and which creators we take on.",
};

export default function PartnershipPage() {
  return (
    <PageMain>
      <RevenueShare as="h1" />
      <Selectivity />
      <FAQ />
      <FinalCta index="04" />
    </PageMain>
  );
}
