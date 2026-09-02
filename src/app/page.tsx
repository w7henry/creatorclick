import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Problem } from "@/components/sections/Problem";
import { Chapters } from "@/components/sections/Chapters";
import { Philosophy } from "@/components/sections/Philosophy";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Statement />
      <Problem />
      <Chapters />
      <Philosophy />
      <FinalCta />
    </main>
  );
}
