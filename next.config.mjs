/**
 * The site is published as a fully static export (GitHub Pages).
 * `NEXT_PUBLIC_BASE_PATH` lets the same build target either a project page
 * (e.g. /creatorclick) or a custom domain (empty string).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
