"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "Multiple", "Other"];
const SIZES = [
  "Under 10k",
  "10k – 50k",
  "50k – 250k",
  "250k – 1M",
  "1M+",
];

const fieldClass =
  "peer w-full border-b border-[var(--color-rule)] bg-transparent py-3 text-[1rem] text-bone outline-none transition-colors duration-300 placeholder:text-bone-34 focus:border-volt";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="t-index block text-[0.58rem] uppercase tracking-[0.2em] text-bone-34"
    >
      {children}
    </label>
  );
}

/**
 * Static hosting means no server. The form composes a structured email so an
 * application still lands somewhere. Point `SITE.formEndpoint` at a form
 * service (Formspree, Tally, Basin…) to switch to a background POST.
 */
export function ApplyForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Platform: ${get("platform")}`,
      `Handle: ${get("handle")}`,
      `Audience size: ${get("audience")}`,
      "",
      "What I want to build:",
      get("vision"),
    ].join("\n");

    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Partnership application — ${get("name") || "Creator"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Name</Label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@domain.com" />
      </div>

      <div>
        <Label htmlFor="platform">Main platform</Label>
        <div className="relative">
          <select id="platform" name="platform" defaultValue={PLATFORMS[0]} className={`${fieldClass} appearance-none pr-8`}>
            {PLATFORMS.map((p) => (
              <option key={p} value={p} className="bg-ink-2 text-bone">
                {p}
              </option>
            ))}
          </select>
          <svg viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute right-1 top-4 h-4 w-4 text-bone-34" aria-hidden="true">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </div>
      </div>

      <div>
        <Label htmlFor="handle">Handle</Label>
        <input id="handle" name="handle" required className={fieldClass} placeholder="@yourhandle" />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="t-index block text-[0.58rem] uppercase tracking-[0.2em] text-bone-34">
          Audience size
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {SIZES.map((s, i) => (
            <label
              key={s}
              className="cursor-pointer"
              data-cursor
            >
              <input
                type="radio"
                name="audience"
                value={s}
                defaultChecked={i === 1}
                className="peer sr-only"
              />
              <span className="t-index block rounded-full border border-[var(--color-rule)] px-4 py-2 text-[0.62rem] uppercase tracking-[0.14em] text-bone-50 transition-colors duration-300 peer-checked:border-volt peer-checked:bg-volt peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-volt">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <Label htmlFor="vision">What do you want to build?</Label>
        <textarea
          id="vision"
          name="vision"
          rows={3}
          className={`${fieldClass} resize-none`}
          placeholder="An app, a membership, a programme — or you're not sure yet."
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-volt group h-[3.5rem] w-full justify-center pl-8 pr-7 text-[0.9rem] tracking-[0.04em] sm:w-auto sm:justify-start" data-cursor>
          <span className="relative z-10">Send application</span>
          <ArrowRight className="relative z-10 h-[1.1em] w-[1.35em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </button>

        {sent ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="t-index mt-5 text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-volt"
            role="status"
          >
            Your mail client should be opening. If nothing happens, write to{" "}
            {SITE.email}.
          </motion.p>
        ) : (
          <p className="t-index mt-5 text-[0.6rem] uppercase leading-relaxed tracking-[0.14em] text-bone-34">
            Applications are read personally. Expect a reply either way.
          </p>
        )}
      </div>
    </form>
  );
}
