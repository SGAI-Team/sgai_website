import { pageMetadata } from "@/lib/metadata";
import { Clock, Brain, Scale } from "lucide-react";
import { TeamCard } from "@/components/TeamCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata = pageMetadata({
  title: "Nosotros — Equipo con +12 años en procurement minero chileno",
  description:
    "Fundado por profesionales con más de 12 años en abastecimiento directo en la gran minería chilena. Construimos SGAI desde la experiencia operativa, no desde la teoría.",
  path: "/nosotros",
  ogImage: "nosotros.png",
});

const team = [
  {
    initials: "GR",
    name: "Gonzalo Rojas Chacón",
    role: "Chief Technology Officer",
    bio: "Lidera la arquitectura técnica de la plataforma SGAI: agentes de IA, integraciones con SAP Ariba, JDE y ERP locales, e infraestructura escalable. Traduce el dolor operacional en producto.",
  },
  {
    initials: "CR",
    name: "Claudio Romero Retamal",
    role: "Chief Operating Officer",
    bio: "Conduce la operación del servicio BPO y la coordinación de los equipos de procurement asignados a clientes. Asegura calidad, cumplimiento de SLAs y consistencia entre faena y plataforma.",
  },
  {
    initials: "CR",
    name: "Claudio Rojas Bermúdez",
    role: "Chief Financial Officer",
    bio: "Responsable del modelo financiero, planificación estratégica y relación con inversionistas y partners. +12 años en abastecimiento directo en la gran minería chilena, ahora aplicados al modelo de negocio.",
  },
];

const reasons = [
  {
    icon: Clock,
    title: "Timing de mercado",
    description:
      "US$83B en inversión minera. Startups globales de procurement AI levantando cientos de millones. Pero ninguna habla español ni entiende el contexto regulatorio latinoamericano.",
  },
  {
    icon: Brain,
    title: "Tecnología lista",
    description:
      "Los modelos de IA generativa alcanzaron un nivel donde es posible construir agentes que lean Bases Técnicas en español, comparen propuestas y detecten riesgos contractuales. Hace 3 años esto no era viable.",
  },
  {
    icon: Scale,
    title: "Regulación a favor",
    description:
      "La Ley 21.719 de protección de datos (vigente diciembre 2026) favorece soluciones locales con data sovereignty. Las empresas van a necesitar proveedores tecnológicos que operen bajo jurisdicción chilena.",
  },
];

const values = [
  {
    title: "Transparencia",
    description:
      "Preferimos mostrar un roadmap honesto antes que prometer features que no existen. Si no lo tenemos listo, lo decimos.",
  },
  {
    title: "Conocimiento de terreno",
    description:
      "No somos una startup de Silicon Valley adaptando un producto para Latam. Somos gente de la industria que construye su propia herramienta.",
  },
  {
    title: "Tecnología con propósito",
    description:
      "Usamos IA donde agrega valor real (reducir HH en revisión de BT, detectar riesgos), no como buzzword de marketing.",
  },
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SGAI",
  alternateName: "SGAI Abastecimiento Inteligente",
  url: "https://sgai.cl/",
  logo: "https://sgai.cl/og/home.png",
  description:
    "Consultora chilena de abastecimiento inteligente. BPO de procurement + plataforma con IA para minería, energía y construcción.",
  priceRange: "$$$",
  email: "contacto.sgai@sgai.cl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "RM",
    addressCountry: "CL",
  },
  areaServed: [
    { "@type": "Country", name: "Chile" },
    { "@type": "Country", name: "Argentina" },
    { "@type": "Country", name: "Brasil" },
    { "@type": "Country", name: "Perú" },
  ],
  knowsAbout: [
    "BPO procurement",
    "Gestión de contratos mineros",
    "Bases Técnicas",
    "SAP Ariba",
    "Agentes de IA",
  ],
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      {/* Hero */}
      <section className="bg-sgai-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6">
              Somos SGAI.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-sgai-steel text-lg leading-relaxed max-w-2xl">
              SGAI nace de una convicción: el abastecimiento en Latinoamérica
              merece mejor tecnología. No importada, no genérica, no en inglés.
              Tecnología construida por gente que ha vivido el proceso completo
              — desde la licitación hasta el finiquito del contrato — en las
              industrias más exigentes del continente.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sgai-ice py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Nuestro equipo
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard {...member} theme="light" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why now */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-14">
              Por qué ahora
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className="bg-sgai-slate/50 border border-white/5 rounded-2xl p-8 h-full">
                  <reason.icon className="w-8 h-8 text-sgai-copper mb-4" />
                  <h3 className="text-white font-heading text-xl mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
              Valores
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {values.map((val) => (
              <StaggerItem key={val.title}>
                <div className="text-center">
                  <h3 className="font-heading text-xl text-sgai-midnight mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sgai-steel text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="¿Quieres conocer más sobre SGAI?"
        subtitle="Conversemos sobre cómo podemos ayudarte con tu operación de abastecimiento."
        buttonText="Agenda una conversación"
        href="/contacto"
      />
    </>
  );
}
