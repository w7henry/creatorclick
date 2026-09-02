import Link from "next/link";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { ArrowUpRight } from "@/components/ui/Icons";

const CHAPTERS = [
  {
    href: "/how-it-works",
    title: "How it works",
    body: "The route from a feed full of attention to a business with customers — and the five stages we run it in.",
  },
  {
    href: "/what-we-build",
    title: "What we build",
    body: "Websites, training apps and digital products, built as one system under your name.",
  },
  {
    href: "/partnership",
    title: "Partnership",
    body: "Revenue share instead of an invoice. What that means, and who we take on.",
  },
  {
    href: "/work",
    title: "Case studies",
    body: "SCULPTÉ — a creator's audience turned into a training platform she owns.",
  },
];

export function Chapters() {
  return (
    <section id="chapters" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionTag index="03" label="Where to go next" />
        <h2 className="t-display t-display-tight t-optical mt-8 max-w-[16ch] text-[12vw] leading-[0.84] sm:text-[9vw] lg:text-[clamp(2.6rem,4.6vw,5rem)]">
          <Mask>Read the</Mask>
          <Mask delay={0.07}>
            <span className="t-serif">whole argument.</span>
          </Mask>
        </h2>

        <ul className="mt-16">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.05}>
              <li>
                <Link
                  href={c.href}
                  className="group grid grid-cols-12 items-baseline gap-x-5 gap-y-2 border-t border-[var(--color-rule)] py-7 transition-colors duration-500 hover:bg-[rgba(242,240,234,0.02)] md:py-9 [&:last-child]:border-b"
                >
                  <span className="t-index col-span-2 text-[0.62rem] text-bone-34 transition-colors duration-500 group-hover:text-volt md:col-span-1">
                    0{i + 1}
                  </span>
                  <h3 className="t-display col-span-9 text-[7vw] leading-[0.94] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-[4.6vw] md:col-span-5 lg:text-[clamp(1.7rem,2.8vw,3.1rem)]">
                    {c.title}
                  </h3>
                  <p className="t-body col-span-12 col-start-3 max-w-[42ch] text-[0.92rem] md:col-span-5 md:col-start-7">
                    {c.body}
                  </p>
                  <ArrowUpRight className="col-span-1 hidden h-5 w-5 self-center text-bone-34 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt md:block" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
