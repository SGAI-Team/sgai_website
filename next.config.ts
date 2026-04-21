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
  // Static export para Azure Static Web Apps: genera HTML estático en /out
  // Las rutas (/contacto, /plataforma, etc.) quedan como archivos .html.
  // staticwebapp.config.json maneja rewrites + security headers en prod.
  output: "export",

  // Next 16 exige trailingSlash para generar carpetas con index.html
  // que Azure SWA puede servir sin rewrites complejos.
  trailingSlash: true,

  // Azure SWA no soporta Image Optimization con static export.
  images: { unoptimized: true },

  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.app",
    "192.168.0.100",
    "localhost",
  ],

  async headers() {
    // Los headers de next.config NO aplican en static export (los reales
    // vienen de staticwebapp.config.json en producción). En dev los
    // headers immutable rompen HMR / refresco de bundles, por eso solo
    // mandamos headers de seguridad documentales.
    if (process.env.NODE_ENV !== "production") {
      return [{ source: "/:path*", headers: securityHeaders }];
    }
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/og/:path*", headers: immutableCache },
      { source: "/_next/static/:path*", headers: immutableCache },
    ];
  },
};

export default nextConfig;
