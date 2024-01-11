/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wp.flackinjurylaw.com" },
      { protocol: "https", hostname: "flackinjurylaw.com" },
    ],
  },
};

module.exports = nextConfig;
