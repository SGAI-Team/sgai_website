import type { Metadata } from "next";

const SITE = "https://sgai.cl";

type PageSEO = {
  title: string;
  description: string;
  path: string; // empieza con "/"
  ogImage?: string; // filename bajo /og, ej: "plataforma.png"
};

export const pageMetadata = ({
  title,
  description,
  path,
  ogImage = "home.png",
}: PageSEO): Metadata => {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "es-CL": path, es: path, "x-default": path },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SGAI — Abastecimiento Inteligente",
      locale: "es_CL",
      type: "website",
      images: [{ url: `/og/${ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og/${ogImage}`],
    },
  };
};
