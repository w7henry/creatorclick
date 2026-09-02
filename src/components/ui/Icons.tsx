import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;

export const ArrowRight = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path
      d="M4 12h15m0 0-6.2-6.2M19 12l-6.2 6.2"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="square"
    />
  </svg>
);

export const ArrowUpRight = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path
      d="M6.5 17.5 17.5 6.5M17.5 6.5H8.6M17.5 6.5v8.9"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="square"
    />
  </svg>
);

export const ArrowDown = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path
      d="M12 4v15m0 0 6.2-6.2M12 19l-6.2-6.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    />
  </svg>
);

export const Plus = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

export const Check = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path d="m4.5 12.5 5 5 10-11" stroke="currentColor" strokeWidth="2.1" strokeLinecap="square" />
  </svg>
);

export const Cross = (p: I) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
  </svg>
);

export const Play = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
);
