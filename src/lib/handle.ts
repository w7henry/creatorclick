import { SITE } from "@/lib/site";

/**
 * The hero and every closing band ask for one thing — a social handle — and
 * carry it into the application, so the form opens already started.
 *
 * It travels in the URL fragment, not a query string or browser storage: a
 * fragment never reaches the server, so the handle is not written to the
 * hosting logs and nothing is left on the visitor's device.
 */

const MAX = 30;

/** "@Name", " name ", "tiktok.com/@name/video/1", "https://instagram.com/name/" → "name" */
export function cleanHandle(raw: string): string {
  let h = raw.trim();
  const url = h.match(/^(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+\/(.+)$/i);
  if (url) h = url[1].split(/[/?#]/).find(Boolean) ?? "";
  return h.replace(/^@+/, "").replace(/[^a-z0-9._]/gi, "").slice(0, MAX);
}

/** Route to the application, carrying the handle when there is one. */
export function applyHrefFor(handle: string): string {
  const base = `${SITE.applyHref}/`;
  return handle ? `${base}#handle=${encodeURIComponent(handle)}` : base;
}

export function handleFromHash(hash: string): string {
  const m = hash.match(/[#&]handle=([^&]*)/);
  if (!m) return "";
  try {
    return cleanHandle(decodeURIComponent(m[1]));
  } catch {
    return "";
  }
}
