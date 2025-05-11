/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ Enables static HTML export
  trailingSlash: true, // ✅ Optional: ensures URLs end with /
};

module.exports = nextConfig;
