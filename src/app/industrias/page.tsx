import type { Metadata } from "next";
import { IndustryCard } from "@/components/IndustryCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Industrias",
  description:
    "Soluciones de abastecimiento para minería, energía, construcción e industria en Latinoamérica.",
};

const industries = [
  {
    title: "Minería",
    description:
      "US$83B en inversión proyectada en Chile al 2033. SAP Ariba, JDE, Bases Técnicas complejas. Gestión de contratos de alto volumen con compliance local. Nuestro punto de entrada.",
    href: "/industrias/mineria",
  },
  {
    title: "Energía y Oil & Gas",
    description:
      "Contratos de largo plazo, compliance regulatorio estricto y licitaciones multi-jurisdicción. Proyectos de infraestructura energética con múltiples contratistas.",
    href: "/industrias/energia",
    comingSoon: true,
  },
  {
    title: "Ingeniería y Construcción",
    description:
      "Proyectos EPC/EPCM con miles de OC y contratos simultáneos. Alta demanda de tracking de entregas y control de costos en tiempo real.",
    href: "/industrias/construccion",
    comingSoon: true,
  },
  {
    title: "Industria y Manufactura",
    description:
      "Cadenas de suministro con alta frecuencia de compra y gestión de proveedores recurrentes. Optimización de costos y eficiencia operativa.",
    comingSoon: true,
  },
];

export default function IndustriasPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Soluciones de abastecimiento para industrias que mueven
              Latinoamérica.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Nuestro servicio BPO y plataforma con IA se adaptan a sectores
              donde la gestión de contratos es compleja, de alto volumen y
              crítica para la operación.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Industries grid */}
      <section className="gradient-hero pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer
            className="grid md:grid-cols-2 gap-6"
            staggerDelay={0.12}
          >
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <IndustryCard {...ind} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="¿Tu industria no aparece aquí?"
        subtitle="Si gestionas contratos complejos, podemos ayudarte. Conversemos."
        buttonText="Contactar"
        href="/contacto"
      />
    </>
  );
}
