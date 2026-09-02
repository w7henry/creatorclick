import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { Opportunity } from "@/components/sections/Opportunity";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From content to company: how CreatorClick turns a creator's audience into a digital product business, in five stages.",
};

export default function HowItWorksPage() {
  return (
    <PageMain>
      <Opportunity as="h1" />
      <Process />
      <FinalCta index="03" />
    </PageMain>
  );
}
