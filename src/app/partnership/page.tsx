import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { Selectivity } from "@/components/sections/Selectivity";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/ui/CtaBand";

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
      <CtaBand />
    </PageMain>
  );
}
