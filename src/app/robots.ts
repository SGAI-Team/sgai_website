import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://sgai.cl/sitemap.xml",
    host: "https://sgai.cl",
  };
}
