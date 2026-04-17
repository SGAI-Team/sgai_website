import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "SGAI — Abastecimiento Inteligente | BPO + Plataforma con IA",
    template: "%s | SGAI",
  },
  description:
    "Servicio BPO de abastecimiento y plataforma de procurement con inteligencia artificial para minería, energía y construcción en Latinoamérica.",
  keywords: [
    "BPO abastecimiento",
    "procurement IA",
    "plataforma procurement",
    "gestión contratos minería",
    "outsourcing abastecimiento Chile",
    "software procurement latinoamérica",
  ],
  authors: [{ name: "SGAI" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "SGAI — Abastecimiento Inteligente",
    title: "SGAI — Abastecimiento Inteligente | BPO + Plataforma con IA",
    description:
      "Servicio BPO de abastecimiento y plataforma de procurement con inteligencia artificial para minería, energía y construcción en Latinoamérica.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SGAI",
  alternateName: "SGAI Abastecimiento Inteligente",
  url: "https://sgai.cl",
  description:
    "Servicio BPO de abastecimiento y plataforma de procurement con IA para Latinoamérica",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  foundingDate: "2026",
  numberOfEmployees: "1-10",
  industry: "Procurement Technology",
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
