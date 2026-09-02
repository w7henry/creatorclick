import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "SCULPTÉ — how creator Onka Kegakilwe turned an audience into a training platform she owns.",
};

export default function WorkPage() {
  return (
    <PageMain>
      <CaseStudies as="h1" />
      <FinalCta index="02" />
    </PageMain>
  );
}
