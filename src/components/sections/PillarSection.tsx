import { Users, LayoutDashboard } from "lucide-react";
import { DualCard } from "@/components/DualCard";
import { SectionReveal } from "@/components/SectionReveal";

export function PillarSection() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-4">
            Dos pilares. Una solución integrada.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-sgai-steel text-center text-lg mb-14 max-w-2xl mx-auto">
            Combinamos equipos expertos con tecnología propia para cubrir el
            ciclo completo de abastecimiento.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <SectionReveal delay={0.2}>
            <DualCard
              icon={<Users />}
              title="Servicio BPO"
              description="Ingenieros de procurement especializados, integrados a tu operación. Gestionamos contratos, órdenes de compra y licitaciones como extensión de tu equipo."
              href="/servicio-bpo"
              linkText="Conocer el servicio"
            />
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <DualCard
              icon={<LayoutDashboard />}
              title="Plataforma SGAI"
              description="Monitoreo de contratos en tiempo real, revisión de Bases Técnicas con IA, análisis de propuestas y alertas de desfinanciamiento. Incluida sin costo adicional con el servicio BPO."
              href="/plataforma"
              linkText="Explorar la plataforma"
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
