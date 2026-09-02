import type { ReactNode } from "react";

/**
 * CSS-driven marquee (no JS on the scroll thread). The track holds two
 * identical halves and translates -50%, so the loop is seamless.
 */
export function Marquee({
  children,
  duration = 38,
  reverse = false,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={`marquee-host relative w-full overflow-hidden ${className}`}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center" aria-hidden={ariaLabel ? true : undefined}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
