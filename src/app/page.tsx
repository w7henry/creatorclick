import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Problem } from "@/components/sections/Problem";
import { Stack } from "@/components/sections/Stack";
import { Steps } from "@/components/sections/Steps";
import { CaseTeaser } from "@/components/sections/CaseTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/ui/CtaBand";

/**
 * Ordered as a conversion page: promise and first step, proof, the cost of
 * standing still, the offer, the effort, the evidence, the objections, the
 * same first step again. docs/conversion-psychology.md has the reasoning.
 */
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ProofBar />
      <Problem />
      <Stack />
      <Steps />
      <CaseTeaser />
      {/* revenue share, who owns what, lock-in, follower count, timeline */}
      <FAQ index="05" pick={[0, 4, 5, 1, 6]} />
      <CtaBand />
    </main>
  );
}
