/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export works on Vercel, Netlify or any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
