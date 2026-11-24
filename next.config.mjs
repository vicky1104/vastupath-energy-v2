/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export works on Vercel, Netlify or any static host.
  output: "export",
  trailingSlash: true,
  // Set by the GitHub Pages workflow (e.g. "/vastupath-energy-v2"); empty on Vercel.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};
export default nextConfig;
