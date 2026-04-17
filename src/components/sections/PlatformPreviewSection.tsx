import Link from "next/link";
import { Search, BarChart3, ClipboardList, Shield } from "lucide-react";
import { DashboardMockup } from "@/components/DashboardMockup";
import { SectionReveal } from "@/components/SectionReveal";

const features = [
  {
    icon: Search,
    title: "Revisión de Bases Técnicas con IA",
    description:
      "Agentes que leen, resumen y detectan inconsistencias en BT. Diseñado para reducir hasta un 70% las HH de revisión manual.",
  },
  {
    icon: BarChart3,
    title: "Monitoreo de contratos en tiempo real",
    description:
      "Dashboard con alertas de desfinanciamiento, tracking de estados de pago y KPIs de cumplimiento contractual.",
  },
  {
    icon: ClipboardList,
    title: "Análisis comparativo de propuestas",
    description:
      "Consolidación automática de propuestas comerciales con resúmenes por IA y matrices de evaluación.",
  },
  {
    icon: Shield,
    title: "Revisión de contratos pre-firma",
    description:
      "Detección de cláusulas críticas y alertas de riesgo antes de que firmes.",
  },
];

export function PlatformPreviewSection() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-4">
            Plataforma SGAI
          </h2>
          <p className="text-sgai-copper text-center text-lg font-medium mb-14">
            Procurement con inteligencia artificial
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <SectionReveal delay={0.1}>
            <div className="flex justify-center">
              <DashboardMockup />
            </div>
          </SectionReveal>

          {/* Features list */}
          <div className="space-y-8">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={0.15 + i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-copper flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sgai-midnight mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sgai-steel text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
            <SectionReveal delay={0.6}>
              <Link
                href="/plataforma"
                className="inline-flex items-center gap-2 text-sgai-copper font-medium hover:text-sgai-copper-light transition-colors"
              >
                Ver todos los módulos
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
