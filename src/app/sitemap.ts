import type { MetadataRoute } from "next";

const SITE = "https://sgai.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/servicio-bpo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/plataforma", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industrias", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industrias/mineria", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industrias/energia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industrias/construccion", priority: 0.7, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
