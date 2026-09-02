import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[80svh] items-center overflow-hidden pt-[var(--header-h)]"
    >
      <div className="gridlines" aria-hidden="true" />
      <div className="shell relative py-20">
        <p className="t-index text-[0.62rem] uppercase tracking-[0.24em] text-volt">
          Error 404
        </p>
        <h1 className="t-display t-display-tight t-optical mt-7 text-[18vw] leading-[0.8] lg:text-[clamp(4rem,9vw,10rem)]">
          Nothing
          <br />
          to own
          <br />
          <span className="t-outline">here.</span>
        </h1>
        <Link href="/" className="btn-volt mt-12 h-[3.4rem] pl-8 pr-7 text-[0.9rem]" data-cursor>
          <span className="relative z-10">Back to {SITE.name}</span>
        </Link>
      </div>
    </main>
  );
}
