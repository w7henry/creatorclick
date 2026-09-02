import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { ArrowRight } from "./Icons";

const SIZES = {
  sm: "h-10 pl-5 pr-4 text-[0.72rem] tracking-[0.08em]",
  md: "h-12 pl-7 pr-5 text-[0.8rem] tracking-[0.06em]",
  lg: "h-[3.65rem] pl-9 pr-7 text-[0.95rem] tracking-[0.04em]",
} as const;

function SwapArrow() {
  return (
    <span className="relative z-10 block h-[1.1em] w-[1.35em] overflow-hidden">
      <ArrowRight className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[150%]" />
      <ArrowRight className="absolute left-0 top-0 h-full w-full -translate-x-[150%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
    </span>
  );
}

/** Primary action. */
export function ApplyButton({
  children = "Apply to partner",
  href = SITE.applyHref,
  size = "md",
  className = "",
}: {
  children?: ReactNode;
  href?: string;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-volt group inline-flex ${SIZES[size]} ${className}`}
    >
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      <SwapArrow />
    </a>
  );
}

export function GhostButton({
  children,
  href = "#",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-ghost group font-display font-semibold uppercase ${SIZES[size]} ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <ArrowRight className="h-[1.05em] w-[1.3em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
    </a>
  );
}
