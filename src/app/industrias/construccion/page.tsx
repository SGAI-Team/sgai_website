import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Ingeniería y Construcción",
  description:
    "Soluciones de abastecimiento inteligente para ingeniería y construcción. Próximamente.",
};

export default function ConstruccionPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-sgai-steel text-sm mb-4">
              <Link href="/" className="hover:text-sgai-copper transition-colors">
                Home
              </Link>{" "}
              →{" "}
              <Link
                href="/industrias"
                className="hover:text-sgai-copper transition-colors"
              >
                Industrias
              </Link>{" "}
              → Ingeniería y Construcción
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ingeniería y Construcción
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Estamos construyendo soluciones específicas para proyectos
              EPC/EPCM. Si gestionas contratos complejos en ingeniería y
              construcción, conversemos.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-2xl text-sgai-midnight text-center mb-2">
              Quiero saber más cuando esté listo
            </h2>
            <p className="text-sgai-steel text-center text-sm mb-8">
              Déjanos tus datos y te contactaremos cuando tengamos novedades
              para tu sector.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
