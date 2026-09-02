import type { Metadata } from "next";
import { PageMain } from "@/components/ui/PageMain";
import { Products } from "@/components/sections/Products";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Premium websites, training apps and digital products — built as one system under the creator's own name.",
};

export default function WhatWeBuildPage() {
  return (
    <PageMain>
      <Products as="h1" />
      <CtaBand />
    </PageMain>
  );
}
