"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { ApplyButton } from "@/components/ui/Cta";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

/** trailingSlash: true means pathnames come back as "/partnership/". */
const norm = (p: string) => (p !== "/" ? p.replace(/\/+$/, "") : p);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const pathname = norm(usePathname() ?? "/");

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[100] h-px origin-left bg-volt"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,border-color] duration-500 ${
          solid
            ? "border-b border-[var(--color-rule)] bg-[rgba(11,11,12,0.94)]"
            : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" aria-label={`${SITE.name} — home`} className="group">
            <Logo
              markClass="h-8 w-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[8deg]"
              textClass="text-[0.94rem] md:text-[1rem]"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {SITE.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-wipe t-index text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-bone ${
                    active ? "text-volt" : "text-bone-70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex">
              <ApplyButton size="sm">Apply to partner</ApplyButton>
            </span>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-bone-18 lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-bone" />
                <span className="block h-px w-4 bg-bone" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] overflow-y-auto bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="gridlines" />
            <div className="shell relative flex h-[var(--header-h)] items-center justify-between">
              <Logo markClass="h-8 w-8" textClass="text-[0.94rem]" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-bone-18"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

            <nav className="shell mt-6 flex flex-col" aria-label="Mobile">
              {SITE.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-[var(--color-rule)] py-5"
                  >
                    <span className="t-index text-[0.6rem] text-bone-34">0{i + 1}</span>
                    <span
                      className={`t-display flex-1 text-[2.1rem] leading-none ${
                        pathname === item.href ? "text-volt" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-bone-34" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="shell mt-10 pb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6, ease: EASE }}
            >
              <ApplyButton size="lg" href={SITE.applyHref}>
                Apply to partner
              </ApplyButton>
              <p className="t-index mt-6 text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-bone-34">
                Revenue-share partnerships
                <br />
                for selected creators.
              </p>
              <div className="mt-8 flex gap-6">
                {SITE.legal.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="t-index text-[0.6rem] uppercase tracking-[0.16em] text-bone-34"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
