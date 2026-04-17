import { IndustryCard } from "@/components/IndustryCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";

export function IndustriesSection() {
  return (
    <section className="gradient-hero py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-14">
            Donde el abastecimiento es crítico, SGAI está.
          </h2>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          <StaggerItem>
            <IndustryCard
              title="Minería"
              description="US$83B en inversión proyectada en Chile al 2033. SAP Ariba, JDE, Bases Técnicas complejas. Nuestro punto de entrada."
              href="/industrias/mineria"
              linkText="Ver más"
            />
          </StaggerItem>
          <StaggerItem>
            <IndustryCard
              title="Energía y Oil & Gas"
              description="Contratos de largo plazo, compliance regulatorio y licitaciones multi-jurisdicción."
              href="/industrias/energia"
              linkText="Próximamente"
              comingSoon
            />
          </StaggerItem>
          <StaggerItem>
            <IndustryCard
              title="Ingeniería y Construcción"
              description="Proyectos EPC/EPCM con miles de OC y contratos simultáneos. Alta demanda de tracking."
              href="/industrias/construccion"
              linkText="Próximamente"
              comingSoon
            />
          </StaggerItem>
          <StaggerItem>
            <IndustryCard
              title="Industria y Manufactura"
              description="Cadenas de suministro con alta frecuencia de compra y gestión de proveedores recurrentes."
              comingSoon
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
