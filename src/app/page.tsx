import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Problem } from "@/components/sections/Problem";
import { Opportunity } from "@/components/sections/Opportunity";
import { Products } from "@/components/sections/Products";
import { RevenueShare } from "@/components/sections/RevenueShare";
import { Process } from "@/components/sections/Process";
import { Selectivity } from "@/components/sections/Selectivity";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Philosophy } from "@/components/sections/Philosophy";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  slogan: SITE.tagline,
  email: SITE.email,
  areaServed: "Worldwide",
  knowsAbout: [
    "Creator monetization",
    "Fitness app development",
    "Digital product strategy",
    "Revenue share partnerships",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, author-controlled object — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Cursor />
      <Navbar />

      <main id="main">
        <Hero />
        <Statement />
        <Problem />
        <Opportunity />
        <Products />
        <RevenueShare />
        <Process />
        <Selectivity />
        <CaseStudies />
        <Philosophy />
        <FAQ />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
