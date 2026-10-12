"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ApplyButton } from "./Cta";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Below `sm` the header has no room for its CTA, so on a phone the only way to
 * apply was to scroll to a band or open the menu. This keeps the action under
 * the thumb — and steps aside whenever a handle field or the footer is on
 * screen, so it never doubles up with another CTA or covers the legal links.
 */
export function StickyApply() {
  const pathname = usePathname() ?? "/";
  const off = /^\/(apply|legal)(\/|$)/.test(pathname);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (off) {
      setShow(false);
      return;
    }

    const onScreen = new Set<Element>();
    let scrolled = window.scrollY > 240;
    const sync = () => setShow(scrolled && onScreen.size === 0);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      sync();
    });
    document.querySelectorAll("[data-claim], footer").forEach((el) => io.observe(el));

    // React bails out of identical state, so this only re-renders on a flip.
    const onScroll = () => {
      scrolled = window.scrollY > 240;
      sync();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    sync();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [off, pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[85] bg-[linear-gradient(180deg,transparent,rgba(11,11,12,0.94)_45%)] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 sm:hidden"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <ApplyButton className="pointer-events-auto w-full justify-center">
            See if I qualify
          </ApplyButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
