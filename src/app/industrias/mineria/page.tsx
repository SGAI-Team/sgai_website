import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  AlertTriangle,
  Languages,
  Search,
  BarChart3,
  Shield,
  Plug,
} from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Abastecimiento con IA para Minería del Cobre y Litio en Chile",
  description:
    "BPO + plataforma con IA para la gran minería chilena. Integración SAP Ariba y JDE, revisión de Bases Técnicas, compliance local y operación en español. US$83B en pipeline al 2033.",
  path: "/industrias/mineria",
  ogImage: "mineria.png",
});

const pains = [
  {
    icon: Plug,
    title: "Integración Ariba-JDE sin conector nativo",
    description:
      "Nadie lo resuelve para minería. Los equipos pierden horas en procesos manuales de conciliación entre plataformas.",
  },
  {
    icon: Search,
    title: "Revisión de BT intensiva en HH",
    description:
      "Cada licitación demanda días de revisión manual. Bases Técnicas complejas en español con terminología especializada.",
  },
  {
    icon: AlertTriangle,
    title: "Desfinanciamiento silencioso",
    description:
      "Contratos que se desbordan sin alertas tempranas. Los sobrecostos se detectan cuando ya es tarde.",
  },
  {
    icon: Shield,
    title: "Compliance creciente",
    description:
      "Ley de Delitos Económicos y data sovereignty desde diciembre 2026. Las empresas necesitan proveedores bajo jurisdicción chilena.",
  },
  {
    icon: Languages,
    title: "Gap de idioma",
    description:
      "Startups globales operan en inglés, el procurement minero opera en español. Las herramientas importadas no se adaptan.",
  },
];

const solutions = [
  {
    title: "Ingenieros de abastecimiento especializados en minería",
    description:
      "Equipos BPO que conocen SAP Ariba, JDE, procesos de licitación y compliance minero de primera mano.",
  },
  {
    title: "Revisión de BT con IA en español",
    description:
      "Agentes de IA que leen, resumen y comparan Bases Técnicas mineras. Diseñado para reducir hasta un 70% las HH de revisión.",
  },
  {
    title: "Monitoreo de desfinanciamiento en tiempo real",
    description:
      "Dashboard con alertas automáticas cuando un contrato se acerca a su techo presupuestario.",
  },
  {
    title: "Data sovereignty chilena",
    description:
      "Plataforma operando bajo jurisdicción chilena, alineada con la Ley 21.719 de protección de datos.",
  },
];

const segments = [
  {
    title: "Proveedores de la minería",
    description:
      "Mantenimiento, ingeniería, ambiental, logística — empresas que necesitan gestionar decenas de contratos con mandantes mineros.",
  },
  {
    title: "Mediana minería",
    description:
      "Operaciones con equipos de abastecimiento ajustados que necesitan eficiencia sin la complejidad de plataformas enterprise.",
  },
  {
    title: "Gran minería con foco tecnológico",
    description:
      "Módulos complementarios de IA para operaciones que ya tienen ERP pero buscan inteligencia adicional.",
  },
];

export default function MineriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-sgai-steel text-sm mb-4">
              <Link
                href="/"
                className="hover:text-sgai-copper transition-colors"
              >
                Home
              </Link>{" "}
              →{" "}
              <Link
                href="/industrias"
                className="hover:text-sgai-copper transition-colors"
              >
                Industrias
              </Link>{" "}
              → Minería
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Abastecimiento inteligente{" "}
              <span className="gradient-copper-text">para minería.</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Chile concentra el 27% de la producción mundial de cobre, con
              US$83.000 millones en pipeline de inversión minera al 2033. Las
              áreas de abastecimiento operan con SAP Ariba, JDE, Bases Técnicas
              en español y compliance local. Ninguna plataforma global resuelve
              esta combinación.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Dolores que conocemos de primera mano
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {pains.map((pain) => (
              <StaggerItem key={pain.title}>
                <div className="bg-sgai-ice border border-gray-200 rounded-xl p-6 h-full">
                  <pain.icon className="w-8 h-8 text-sgai-copper mb-4" />
                  <h3 className="font-semibold text-sgai-midnight mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-sgai-steel text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-14">
              Cómo SGAI responde
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {solutions.map((sol) => (
              <StaggerItem key={sol.title}>
                <div className="bg-sgai-slate/50 border border-white/5 rounded-2xl p-8 h-full hover:border-sgai-copper/20 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Segments */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Segmentos que atendemos
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {segments.map((seg) => (
              <StaggerItem key={seg.title}>
                <div className="bg-sgai-ice border border-gray-200 rounded-xl p-6 h-full">
                  <h3 className="font-semibold text-sgai-midnight mb-3">
                    {seg.title}
                  </h3>
                  <p className="text-sgai-steel text-sm leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="Conversemos sobre tu operación minera"
        subtitle="Te mostramos cómo SGAI se adapta a tu tipo de contratos y plataformas."
        buttonText="Agenda una conversación"
        href="/contacto"
      />
    </>
  );
}
