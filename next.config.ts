import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "interest-cohort=()" },
];

const immutableCache = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.dev", "*.ngrok-free.app", "*.ngrok.app"],

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/og/:path*", headers: immutableCache },
      { source: "/_next/static/:path*", headers: immutableCache },
    ];
  },
};

export default nextConfig;
