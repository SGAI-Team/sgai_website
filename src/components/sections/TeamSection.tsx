import Link from "next/link";
import { TeamCard } from "@/components/TeamCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";

const team = [
  {
    initials: "GR",
    name: "Gonzalo",
    role: "Chief Technology Officer",
    bio: "Responsable del desarrollo técnico de la plataforma. Traduce necesidades del negocio hacia arquitectura funcional escalable.",
  },
  {
    initials: "CR",
    name: "Claudio Romero",
    role: "Chief Visionary Officer",
    bio: "Autor intelectual de la solución. Su investigación fundamenta la lógica del negocio y el modelo de procurement inteligente.",
  },
  {
    initials: "CR",
    name: "Claudio Rojas",
    role: "Chief Commercial Officer",
    bio: "+12 años de experiencia directa en abastecimiento en la gran minería chilena. Lidera la estrategia de comercialización y ventas.",
  },
];

export function TeamSection() {
  return (
    <section className="gradient-hero py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-4 max-w-2xl mx-auto">
            Construido por gente de abastecimiento, para gente de
            abastecimiento.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-gray-400 text-center text-lg mb-14 max-w-xl mx-auto">
            Un equipo que ha vivido el proceso completo — desde la licitación
            hasta el finiquito del contrato.
          </p>
        </SectionReveal>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard {...member} theme="dark" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-sgai-copper font-medium hover:text-sgai-copper-light transition-colors"
            >
              Conoce nuestra historia
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
