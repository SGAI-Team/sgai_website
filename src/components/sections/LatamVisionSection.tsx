import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";

const countries = [
  { flag: "🇨🇱", name: "Chile", status: "Operativo" },
  { flag: "🇦🇷", name: "Argentina", status: "Próximamente" },
  { flag: "🇧🇷", name: "Brasil", status: "Próximamente" },
  { flag: "🇵🇪", name: "Perú", status: "Próximamente" },
];

export function LatamVisionSection() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight mb-6">
            Nacimos en Chile. Pensamos en Latinoamérica.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-sgai-steel text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
            Latinoamérica concentra algunos de los sectores más intensivos en
            contratos del mundo: minería, energía, infraestructura. Pero las
            herramientas de procurement siguen siendo importadas, genéricas y en
            inglés. SGAI construye tecnología en español, con lógica local y
            equipos que entienden el terreno.
          </p>
        </SectionReveal>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {countries.map((country) => (
            <StaggerItem key={country.name}>
              <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-sgai-ice">
                <span className="text-4xl" role="img" aria-label={country.name}>
                  {country.flag}
                </span>
                <span className="font-semibold text-sgai-midnight text-sm">
                  {country.name}
                </span>
                <span
                  className={`text-xs font-medium ${
                    country.status === "Operativo"
                      ? "text-sgai-success"
                      : "text-sgai-steel"
                  }`}
                >
                  {country.status}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
