import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sgai.cl";

export const viewport: Viewport = {
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SGAI — BPO + Plataforma de Procurement con IA para Minería y Energía",
    template: "%s | SGAI",
  },
  description:
    "Servicio BPO de abastecimiento + plataforma con IA para gestión de contratos, órdenes de compra y licitaciones en minería, energía y construcción. Chile y LatAm.",
  keywords: [
    "BPO abastecimiento",
    "procurement IA",
    "plataforma procurement",
    "gestión contratos minería",
    "outsourcing abastecimiento Chile",
    "software procurement latinoamérica",
    "SAP Ariba",
    "revisión bases técnicas IA",
    "órdenes de compra minería",
  ],
  authors: [{ name: "SGAI" }],
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "SGAI — Abastecimiento Inteligente",
    title:
      "SGAI — BPO + Plataforma de Procurement con IA para Minería y Energía",
    description:
      "Servicio BPO de abastecimiento + plataforma con IA para gestión de contratos, órdenes de compra y licitaciones en minería, energía y construcción.",
    url: "/",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SGAI — BPO + Plataforma de Procurement con IA para Minería y Energía",
    description:
      "Servicio BPO de abastecimiento + plataforma con IA para gestión de contratos, órdenes de compra y licitaciones.",
    images: ["/og/home.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SGAI",
  alternateName: "SGAI Abastecimiento Inteligente",
  url: SITE_URL,
  logo: `${SITE_URL}/og/home.png`,
  description:
    "Servicio BPO de abastecimiento y plataforma de procurement con IA para Latinoamérica",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "RM",
    addressCountry: "CL",
  },
  foundingDate: "2026",
  numberOfEmployees: "1-10",
  industry: "Procurement Technology",
  areaServed: [
    { "@type": "Country", name: "Chile" },
    { "@type": "Country", name: "Perú" },
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "México" },
  ],
  knowsAbout: [
    "BPO de abastecimiento",
    "Procurement con IA",
    "Gestión de contratos mineros",
    "Licitaciones industriales",
    "Bases Técnicas",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SGAI",
  url: SITE_URL,
  inLanguage: "es-CL",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const gtagIds = [GA4_ID, ADS_ID].filter(Boolean) as string[];
const gtagStubScript = gtagIds.length
  ? `
window.dataLayer = window.dataLayer || [];
window.gtag = function gtag(){ window.dataLayer.push(arguments); };
window.gtag('js', new Date());
${gtagIds.map((id) => `window.gtag('config', '${id}');`).join("\n")}
(function deferGtag(){
  var loaded = false;
  var load = function(){
    if (loaded) return; loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}';
    document.head.appendChild(s);
  };
  ['pointerdown','scroll','keydown','touchstart'].forEach(function(e){
    window.addEventListener(e, load, { once:true, passive:true });
  });
  setTimeout(load, 12000);
})();
`.trim()
  : "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {gtagStubScript ? (
          <script dangerouslySetInnerHTML={{ __html: gtagStubScript }} />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AnalyticsBootstrap />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
