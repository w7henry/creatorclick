"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState, type FormEvent } from "react";
import { applyHrefFor, cleanHandle } from "@/lib/handle";
import { ArrowRight, Check } from "./Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/** The three objections a creator has before clicking, answered under the button. */
const ASSURANCES = ["No upfront invoice", "Your brand stays yours", "Buy-out option"];

export function Assurances({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2.5 ${className}`}>
      {ASSURANCES.map((a) => (
        <li
          key={a}
          className="t-index flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.14em] text-bone-50"
        >
          <Check className="h-3 w-3 shrink-0 text-volt" />
          {a}
        </li>
      ))}
    </ul>
  );
}

/** The visitor's handle on a product, as an app icon — redrawn on every keystroke. */
function ClaimPreview({ handle }: { handle: string }) {
  const initial = (handle[0] ?? "Y").toUpperCase();
  return (
    <div aria-hidden="true" className="mt-4 flex items-center gap-3.5">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-volt text-ink shadow-[0_14px_30px_-16px_rgba(217,255,67,0.7)]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={initial}
            className="t-display block text-[1.3rem] leading-none"
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-70%", opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {initial}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="min-w-0">
        <span
          className={`block truncate text-[0.95rem] font-medium tracking-[-0.01em] transition-colors duration-300 ${
            handle ? "text-bone" : "text-bone-34"
          }`}
        >
          @{handle || "yourhandle"}
        </span>
        <span className="t-index mt-0.5 block text-[0.56rem] uppercase tracking-[0.16em] text-bone-34">
          Your app &middot; site &middot; programmes
        </span>
      </span>
    </div>
  );
}

/**
 * "Claim your name" entry, the move Stan's homepage is built around: one
 * field, one first-person button. Typing a handle is a micro-commitment, the
 * preview puts the visitor's own name on the product before they have filled
 * in a form, and the handle carries into /apply so the application opens
 * already started. An empty field still goes straight to the application.
 */
export function HandleClaim({
  onHandleChange,
  preview = true,
  className = "",
}: {
  onHandleChange?: (handle: string) => void;
  preview?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const id = useId();
  const [raw, setRaw] = useState("");
  const handle = cleanHandle(raw);

  function change(value: string) {
    // The "@" is drawn in front of the field, so a typed one would double it.
    const next = value.replace(/^@+/, "");
    setRaw(next);
    onHandleChange?.(cleanHandle(next));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(applyHrefFor(handle));
  }

  return (
    // Marks the form for the mobile sticky bar, which steps aside while one is on screen.
    <form onSubmit={submit} data-claim="" className={className}>
      <label
        htmlFor={id}
        className="t-index block text-[0.58rem] uppercase tracking-[0.2em] text-bone-50"
      >
        Start with your handle
      </label>
      <div className="mt-3 flex flex-col gap-1.5 rounded-[26px] border border-bone-18 bg-[rgba(11,11,12,0.74)] p-1.5 backdrop-blur-md transition-colors duration-300 focus-within:border-volt focus-within:shadow-[0_0_0_1px_#D9FF43] sm:flex-row sm:items-center sm:rounded-full">
        <div className="flex min-w-0 flex-1 items-center pl-4">
          <span aria-hidden="true" className="font-mono text-[1rem] text-bone-50">
            @
          </span>
          <input
            id={id}
            name="handle"
            value={raw}
            onChange={(e) => change(e.target.value)}
            placeholder="yourhandle"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
            maxLength={120}
            className="claim-input h-12 w-full min-w-0 bg-transparent pl-1 pr-3 text-[1.05rem] text-bone outline-none placeholder:text-bone-34"
          />
        </div>
        <button
          type="submit"
          className="btn-volt group h-12 shrink-0 justify-center pl-6 pr-5 text-[0.8rem] tracking-[0.06em]"
        >
          <span className="relative z-10 whitespace-nowrap">See if I qualify</span>
          <ArrowRight className="relative z-10 h-[1.1em] w-[1.35em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </button>
      </div>
      {preview && <ClaimPreview handle={handle} />}
    </form>
  );
}
