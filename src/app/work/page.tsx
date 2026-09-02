import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "SCULPTÉ — how creator Onka Kegakilwe turned an audience into a training platform she owns.",
};

export default function WorkPage() {
  return (
    <PageMain>
      <CaseStudies as="h1" />
      <CtaBand />
    </PageMain>
  );
}
