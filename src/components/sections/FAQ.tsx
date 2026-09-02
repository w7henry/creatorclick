"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Mask, Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "How does the revenue-share model work?",
    a: "Instead of charging a full agency fee before anything is proven, we invest the strategy, design, engineering and infrastructure ourselves. In return we take an agreed share of the revenue the product generates, over an agreed period. The split depends on scope, the audience you bring and how much we are carrying — and it is written down in plain language before a single thing is built.",
  },
  {
    q: "Do I need a certain number of followers?",
    a: "There is no hard threshold. Engagement, trust and consistency matter far more than raw follower count. An audience of thirty thousand people who actually listen is worth more to a product business than half a million who scroll past.",
  },
  {
    q: "What kind of products can we build?",
    a: "Premium websites, training apps, memberships, programmes, cohort challenges and community platforms — plus the payments, onboarding and lifecycle infrastructure underneath them. If it can be owned, sold and improved over time, it is in scope.",
  },
  {
    q: "How much creative control do I have?",
    a: "It carries your name, so you have the final word on brand, tone and product direction. We bring the strategy and the craft, and we will argue our corner when we think something is wrong — but nothing ships that you do not believe in.",
  },
  {
    q: "Who owns the product?",
    a: "You do. The brand, the audience, the customer list and the product are yours. Our agreement covers a share of revenue for a defined period — never ownership of your business.",
  },
  {
    q: "How long does the process take?",
    a: "Most partnerships run roughly eight to fourteen weeks from strategy to launch, depending on scope. Apps take longer than websites, and a first digital product can often go live sooner while the larger platform is still being built.",
  },
  {
    q: "Do you work with creators outside of fitness?",
    a: "Fitness, health and performance is where we are strongest and where we say yes fastest. Adjacent categories — nutrition, recovery, lifestyle — we look at case by case. The model matters more than the niche.",
  },
];

function Item({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = `faq-panel-${index}`;
  return (
    <div className="border-t border-[var(--color-rule)] last:border-b">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="group flex w-full items-start gap-5 py-6 text-left md:gap-8 md:py-8"
        >
          <span
            className="t-index shrink-0 pt-1.5 text-[0.6rem] transition-colors duration-500"
            style={{ color: open ? "#D9FF43" : "rgba(242,240,234,0.34)" }}
          >
            0{index + 1}
          </span>
          <span
            className="t-display flex-1 text-[1.35rem] leading-[1.08] transition-colors duration-500 sm:text-[1.7rem] lg:text-[clamp(1.4rem,2.05vw,2.15rem)]"
            style={{ color: open ? "#F2F0EA" : "rgba(242,240,234,0.78)" }}
          >
            {item.q}
          </span>
          <span className="relative mt-1.5 grid h-6 w-6 shrink-0 place-items-center">
            <span
              className="absolute h-px w-4 transition-colors duration-500"
              style={{ background: open ? "#D9FF43" : "rgba(242,240,234,0.5)" }}
            />
            <motion.span
              className="absolute h-4 w-px"
              animate={{
                rotate: open ? 90 : 0,
                opacity: open ? 0 : 1,
                backgroundColor: open ? "#D9FF43" : "rgba(242,240,234,0.5)",
              }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="t-body max-w-[62ch] pb-8 pl-[2.4rem] pr-8 md:pl-[3.6rem]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="shell grid grid-cols-12 gap-y-12 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-[24vh]">
            <SectionTag index="03" label="Questions" />
            <h2 className="t-display t-display-tight t-optical mt-8 text-[13vw] leading-[0.84] sm:text-[10vw] lg:text-[clamp(2.6rem,4.4vw,4.8rem)]">
              <Mask>Worth</Mask>
              <Mask delay={0.07}>
                <span className="t-serif">asking.</span>
              </Mask>
            </h2>
            <Reveal delay={0.16}>
              <p className="t-body mt-8 max-w-[30ch]">
                Anything not answered here, ask us directly in your
                application.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          {FAQS.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
