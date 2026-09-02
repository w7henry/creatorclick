import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { ApplyPanel } from "@/components/sections/ApplyPanel";

export const metadata: Metadata = {
  title: "Apply to partner",
  description:
    "Apply for a revenue-share partnership with CreatorClick. Tell us about your audience, your brand and what you want to own.",
};

export default function ApplyPage() {
  return (
    <PageMain>
      <ApplyPanel />
    </PageMain>
  );
}
