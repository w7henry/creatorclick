import type { ReactNode } from "react";

/** Sub-pages start below the fixed header rather than under it. */
export function PageMain({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="pt-[var(--header-h)]">
      {children}
    </main>
  );
}
