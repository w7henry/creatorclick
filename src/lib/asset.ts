/**
 * Static assets are served from a base path on GitHub Pages project sites
 * ("/creatorclick") and from the root on a custom domain. next/image and
 * next/link handle that automatically; a plain <img> does not, so every
 * hand-written src goes through here.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
