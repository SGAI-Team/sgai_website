import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShoppingCart,
  Search,
  ClipboardList,
  Brain,
  Shield,
} from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { FeatureCard } from "@/components/FeatureCard";
import { TimelineStep } from "@/components/TimelineStep";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Servicio BPO de Abastecimiento",
  description:
    "Ingenieros de procurement dedicados a tu operación. Gestión de contratos, OC y licitaciones con plataforma de IA incluida.",
};

const services = [
  {
    icon: FileText,
    title: "Generación de contratos",
    description:
      "Redacción, revisión y procesamiento de contratos de servicios, suministros y proyectos.",
  },
  {
    icon: ShoppingCart,
    title: "Órdenes de compra",
    description:
      "Gestión end-to-end de OC: desde la solicitud hasta la emisión y seguimiento.",
  },
  {
    icon: Search,
    title: "Licitaciones y sourcing",
    description:
      "Preparación de Bases Técnicas, evaluación de propuestas y procesos de adjudicación.",
  },
  {
    icon: ClipboardList,
    title: "Administración de contratos",
    description:
      "Seguimiento de obligaciones, KPIs, estados de pago y alertas de desfinanciamiento.",
  },
  {
    icon: Brain,
    title: "Revisión de BT con IA",
    description:
      "Agentes de IA que resumen, comparan y detectan inconsistencias en Bases Técnicas.",
  },
  {
    icon: Shield,
    title: "Revisión contratos pre-firma",
    description:
      "Detección automática de cláusulas críticas y alertas de riesgo.",
  },
];

const methodology = [
  {
    number: 1,
    title: "Diagnóstico (Semana 1-2)",
    description:
      "Entendemos tu operación, plataformas (SAP, JDE, Artikos), equipo actual y puntos de dolor.",
  },
  {
    number: 2,
    title: "Integración (Semana 3-4)",
    description:
      "Asignamos ingenieros dedicados. Se integran a tus herramientas y procesos.",
  },
  {
    number: 3,
    title: "Activación plataforma (Mes 2)",
    description:
      "Desplegamos la plataforma SGAI configurada para tu operación.",
  },
  {
    number: 4,
    title: "Operación continua (Mes 3+)",
    description:
      "Gestión en régimen con reportería, mejora continua y escalamiento.",
  },
];

const differentiators = [
  {
    title: "Plataforma incluida a costo cero",
    description:
      "Los BPO tradicionales cobran la tecnología aparte o no la tienen. Nosotros la incluimos porque el abastecimiento sin datos en tiempo real es ciego.",
  },
  {
    title: "Equipo con experiencia directa",
    description:
      "Nuestros fundadores llevan +12 años gestionando abastecimiento en industria. No somos consultores que aprendieron — somos operadores que construyeron tecnología.",
  },
  {
    title: "IA aplicada, no marketing",
    description:
      "Nuestros agentes de IA revisan Bases Técnicas, comparan propuestas y detectan riesgos. No es un chatbot genérico — es IA entrenada para el lenguaje técnico del procurement industrial.",
  },
];

export default function ServicioBPOPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sgai-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-sgai-steel text-sm mb-4">
              <Link href="/" className="hover:text-sgai-copper transition-colors">
                Home
              </Link>{" "}
              → Servicio BPO
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 leading-tight">
              Ingenieros de abastecimiento dedicados a tu operación.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-sgai-steel text-lg leading-relaxed max-w-2xl mb-8">
              Externaliza la gestión de contratos, órdenes de compra y
              licitaciones con un equipo que conoce la industria desde adentro.
              La plataforma SGAI viene incluida — sin costo adicional.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 gradient-copper text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Solicita una propuesta
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-sgai-ice py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Qué incluye el servicio
            </h2>
          </SectionReveal>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <FeatureCard {...service} theme="light" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Metodología */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Metodología de implementación
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div>
              {methodology.map((step, i) => (
                <TimelineStep
                  key={step.number}
                  {...step}
                  isLast={i === methodology.length - 1}
                  theme="light"
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-14">
              Por qué SGAI, no un BPO tradicional
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <div className="bg-sgai-slate/50 border border-white/5 rounded-2xl p-8 h-full">
                  <h3 className="font-heading text-xl text-white mb-4">
                    {d.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries mention */}
      <section className="bg-sgai-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <p className="text-sgai-steel text-lg mb-6">
              Nuestro servicio BPO se adapta a industrias intensivas en
              contratos:
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: "Minería", href: "/industrias/mineria" },
                { name: "Energía y Oil & Gas", href: "/industrias/energia" },
                { name: "Ingeniería y Construcción", href: "/industrias/construccion" },
                { name: "Industria", href: "/industrias" },
              ].map((ind, i) => (
                <span key={ind.name} className="flex items-center gap-3">
                  <Link
                    href={ind.href}
                    className="text-sgai-copper font-medium hover:text-sgai-copper-light transition-colors"
                  >
                    {ind.name}
                  </Link>
                  {i < 3 && (
                    <span className="text-gray-300" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        title="¿Quieres saber cuántas HH podrías liberar?"
        subtitle="Conversemos. Sin compromiso."
        buttonText="Agenda una conversación"
        href="/contacto"
      />
    </>
  );
}
