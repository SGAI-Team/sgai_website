import { HorizontalTimeline } from "@/components/TimelineStep";
import { SectionReveal } from "@/components/SectionReveal";

const steps = [
  {
    number: 1,
    title: "Nos integramos a tu operación",
    description:
      "Asignamos ingenieros de abastecimiento con experiencia directa en tu tipo de contratos y procesos industriales.",
  },
  {
    number: 2,
    title: "Activamos la plataforma SGAI",
    description:
      "Desplegamos dashboards de monitoreo, agentes de IA para revisión de BT y alertas automáticas de riesgo.",
  },
  {
    number: 3,
    title: "Escalamos juntos",
    description:
      "A medida que el servicio madura, la plataforma se convierte en parte de tu operación — con o sin BPO.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="gradient-hero py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-14">
            Cómo funciona
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <HorizontalTimeline steps={steps} theme="dark" />
        </SectionReveal>
      </div>
    </section>
  );
}
