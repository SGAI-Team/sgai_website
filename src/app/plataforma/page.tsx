import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  Wrench,
  ShoppingCart,
  BarChart3,
  FileText,
  DollarSign,
  Brain,
  Search,
  Shield,
  Plug,
} from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Plataforma de Procurement con IA",
  description:
    "Software de abastecimiento con inteligencia artificial. Revisión de BT, monitoreo de contratos, análisis de propuestas. Diseñado para Latinoamérica.",
};

const modules = [
  {
    icon: ClipboardList,
    title: "Planificación",
    description:
      "Evaluación de proveedores, plan de sourcing, pre-sourcing y categorización de gasto.",
  },
  {
    icon: Wrench,
    title: "Ingeniería de materiales",
    description:
      "Catalogación, análisis de criticidad, obsolescencia, puntos de reordenamiento, preservación.",
  },
  {
    icon: ShoppingCart,
    title: "Adquisiciones",
    description:
      "Portal de compras, órdenes de compra, gestión de reparables, tracking de entregas.",
  },
  {
    icon: BarChart3,
    title: "Sourcing",
    description:
      "Licitaciones con Q&A integrado, negociación, evaluación técnica-comercial, adjudicación.",
  },
  {
    icon: FileText,
    title: "Administración de contratos",
    description:
      "Obligaciones, KPIs, estados de pago, acreditación de personas/equipos, alertas de desfinanciamiento.",
  },
  {
    icon: DollarSign,
    title: "Finanzas",
    description:
      "Estados de pago, control presupuestario, reportería consolidada.",
  },
];

const agents = [
  {
    icon: Search,
    title: "Agente de revisión de BT",
    description:
      "Lee bases técnicas completas, genera resúmenes ejecutivos, detecta inconsistencias y compara contra versiones anteriores. Diseñado para reducir hasta un 70% las HH de revisión.",
  },
  {
    icon: Brain,
    title: "Agente de análisis de propuestas",
    description:
      "Consolida propuestas comerciales de múltiples oferentes, extrae datos clave y genera matrices comparativas automáticas.",
  },
  {
    icon: Shield,
    title: "Agente de riesgo contractual",
    description:
      "Analiza borradores de contrato pre-firma, identifica cláusulas críticas, compromisos financieros y riesgos potenciales.",
  },
];

const integrations = [
  "SAP Ariba",
  "JDE / Oracle",
  "SAP Business One",
  "Power BI",
  "Artikos",
];

const roadmap = [
  {
    period: "Q2 2026",
    title: "MVP Plataforma",
    description: "Módulos core de contratos, OC y monitoreo de gasto.",
  },
  {
    period: "Q3 2026",
    title: "Agentes IA v1",
    description: "Revisión de BT y análisis de propuestas con IA.",
  },
  {
    period: "Q4 2026",
    title: "Integraciones",
    description: "Conectores SAP Ariba y JDE.",
  },
  {
    period: "2027",
    title: "Expansión",
    description:
      "Red de proveedores, módulos de sourcing avanzado, expansión regional.",
  },
];

export default function PlataformaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Procurement con inteligencia artificial.{" "}
              <span className="gradient-copper-text">
                Diseñado para Latinoamérica.
              </span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              La plataforma SGAI cubre el ciclo completo de abastecimiento con
              módulos de IA que reducen trabajo manual, detectan riesgos y
              entregan visibilidad en tiempo real.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 gradient-copper text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Solicita una demo
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="#modulos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                Ver módulos
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="bg-sgai-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Módulos de la plataforma
            </h2>
          </SectionReveal>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {modules.map((mod) => (
              <StaggerItem key={mod.title}>
                <FeatureCard {...mod} theme="light" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* IA Section */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-4">
              IA que entiende el abastecimiento
            </h2>
            <p className="text-gray-400 text-center text-lg mb-14 max-w-2xl mx-auto">
              No usamos IA genérica. Nuestros agentes están diseñados para el
              lenguaje técnico del procurement industrial en español.
            </p>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {agents.map((agent) => (
              <StaggerItem key={agent.title}>
                <div className="bg-sgai-slate/50 border border-white/5 rounded-2xl p-8 h-full hover:border-sgai-copper/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-copper flex items-center justify-center mb-4">
                    <agent.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {agent.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <SectionReveal delay={0.4}>
            <p className="text-sgai-steel text-xs text-center mt-8 max-w-xl mx-auto">
              Nuestros agentes de IA están en desarrollo activo. Las capacidades
              descritas representan la visión del producto en su roadmap de
              lanzamiento 2026.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Integraciones */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight mb-4">
              Se conecta con lo que ya usas
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 mt-10">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 bg-sgai-ice border border-gray-200 rounded-xl px-6 py-4"
                >
                  <Plug className="w-4 h-4 text-sgai-copper" />
                  <span className="text-sgai-midnight font-medium text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-sgai-steel text-base max-w-2xl mx-auto">
              La plataforma SGAI está diseñada para integrarse con los ERPs y
              plataformas de e-procurement más usados en la industria
              latinoamericana. No reemplazamos tu ERP — lo complementamos con
              inteligencia.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-sgai-ice py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-4">
              Dónde estamos y hacia dónde vamos
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-sgai-steel text-center mb-14 max-w-xl mx-auto">
              Este roadmap es público y actualizado. Creemos que la
              transparencia construye más confianza que prometer features que no
              existen.
            </p>
          </SectionReveal>

          <StaggerContainer
            className="grid md:grid-cols-4 gap-6"
            staggerDelay={0.12}
          >
            {roadmap.map((item, i) => (
              <StaggerItem key={item.period}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full gradient-copper flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < roadmap.length - 1 && (
                      <div className="hidden md:block flex-1 h-px bg-gray-200" />
                    )}
                  </div>
                  <span className="text-sgai-copper font-bold text-sm">
                    {item.period}
                  </span>
                  <h3 className="font-semibold text-sgai-midnight mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sgai-steel text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="¿Quieres ver la plataforma en acción?"
        subtitle="Te mostramos lo que tenemos — y lo que viene."
        buttonText="Solicita una demo"
        href="/contacto"
      />
    </>
  );
}
