"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "Multiple", "Other"];
const SIZES = ["Under 10k", "10k – 50k", "50k – 250k", "250k – 1M", "1M+"];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "peer w-full border-b border-[var(--color-rule)] bg-transparent py-3 text-[1rem] text-bone outline-none transition-colors duration-300 placeholder:text-bone-34 focus:border-volt disabled:opacity-50";

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

function mailtoFor(v: Record<string, string>) {
  const body = [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Platform: ${v.platform}`,
    `Handle: ${v.handle}`,
    `Audience size: ${v.audience}`,
    "",
    "What I want to build:",
    v.vision,
  ].join("\n");
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Partnership application — ${v.name || "Creator"}`
  )}&body=${encodeURIComponent(body)}`;
}

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const data = new FormData(event.currentTarget);
    // Bots fill hidden fields; people do not.
    if (String(data.get("company") ?? "")) return;

    const values: Record<string, string> = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      platform: String(data.get("platform") ?? ""),
      handle: String(data.get("handle") ?? "").trim(),
      audience: String(data.get("audience") ?? ""),
      vision: String(data.get("vision") ?? "").trim(),
      source: "creatorclick.com",
      submittedAt: new Date().toISOString(),
    };

    setFallback(mailtoFor(values));
    setStatus("sending");

    try {
      // form-urlencoded keeps this a "simple" request, so the browser sends it
      // without a CORS preflight.
      const res = await fetch(SITE.formWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(values).toString(),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        className="py-6"
      >
        <p className="t-index text-[0.58rem] uppercase tracking-[0.22em] text-volt">
          Application received
        </p>
        <p className="t-lead mt-5 max-w-[34ch] text-bone">
          Thanks — that landed. We read every application ourselves and come
          back either way.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-wipe t-index mt-8 text-[0.62rem] uppercase tracking-[0.16em] text-bone-50"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid gap-x-8 gap-y-9 sm:grid-cols-2"
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Label htmlFor="name">Name</Label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" disabled={status === "sending"} />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@domain.com" disabled={status === "sending"} />
      </div>

      <div>
        <Label htmlFor="platform">Main platform</Label>
        <div className="relative">
          <select id="platform" name="platform" defaultValue={PLATFORMS[0]} disabled={status === "sending"} className={`${fieldClass} appearance-none pr-8`}>
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
        <input id="handle" name="handle" required className={fieldClass} placeholder="@yourhandle" disabled={status === "sending"} />
      </div>

      <fieldset className="sm:col-span-2" disabled={status === "sending"}>
        <legend className="t-index block text-[0.58rem] uppercase tracking-[0.2em] text-bone-34">
          Audience size
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {SIZES.map((s, i) => (
            <label key={s} className="cursor-pointer" data-cursor>
              <input type="radio" name="audience" value={s} defaultChecked={i === 1} className="peer sr-only" />
              <span className="t-index block rounded-full border border-[var(--color-rule)] px-4 py-2 text-[0.62rem] uppercase tracking-[0.14em] text-bone-50 transition-colors duration-300 peer-checked:border-volt peer-checked:bg-volt peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-volt">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <Label htmlFor="vision">What do you want to build?</Label>
        <textarea id="vision" name="vision" rows={3} disabled={status === "sending"} className={`${fieldClass} resize-none`} placeholder="An app, a membership, a programme — or you're not sure yet." />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          data-cursor
          className="btn-volt group h-[3.5rem] w-full justify-center pl-8 pr-7 text-[0.9rem] tracking-[0.04em] disabled:cursor-wait sm:w-auto sm:justify-start"
        >
          <span className="relative z-10">
            {status === "sending" ? "Sending…" : "Send application"}
          </span>
          <ArrowRight className="relative z-10 h-[1.1em] w-[1.35em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </button>

        {status === "error" ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="t-index mt-5 max-w-[46ch] text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-bone"
          >
            That didn&rsquo;t go through.{" "}
            <a href={fallback} className="link-wipe text-volt">
              Send it by email instead
            </a>{" "}
            — your details are already filled in.
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
