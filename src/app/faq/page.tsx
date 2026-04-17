import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionReveal } from "@/components/SectionReveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas a las preguntas más comunes sobre SGAI, nuestro servicio BPO y plataforma de procurement con IA.",
};

const faqItems = [
  {
    question: "¿SGAI tiene clientes actualmente?",
    answer:
      "Estamos en etapa de lanzamiento. Nuestro equipo fundador tiene +12 años de experiencia directa en abastecimiento industrial, y la plataforma está en desarrollo activo con un MVP planificado para Q2 2026.",
  },
  {
    question: "¿Cómo se integra la plataforma con SAP Ariba o JDE?",
    answer:
      "La plataforma SGAI está diseñada para complementar — no reemplazar — tu ERP. Los conectores para SAP Ariba y JDE están en nuestro roadmap para Q4 2026. En la fase inicial, trabajamos con exportación/importación de datos estructurados.",
  },
  {
    question: "¿Qué hay detrás de la IA de SGAI?",
    answer:
      "Usamos modelos de lenguaje de última generación, entrenados y configurados para entender el vocabulario técnico del procurement industrial en español. No es un chatbot genérico — son agentes especializados para tareas específicas como revisión de BT, análisis de propuestas y detección de riesgos contractuales.",
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "El servicio BPO se cotiza según el volumen de contratos y OC que gestionamos. La plataforma SGAI se incluye sin costo adicional mientras dure el servicio BPO. Si decides mantener solo la plataforma, ofrecemos licenciamiento SaaS mensual. Conversemos para darte una propuesta a medida.",
  },
  {
    question: "¿En cuánto tiempo se implementa?",
    answer:
      "El servicio BPO se activa en 2-4 semanas (diagnóstico + integración de equipo). La plataforma se despliega en el mes 2 de operación. No hay implementaciones de 12 meses como en plataformas enterprise tradicionales.",
  },
  {
    question: "¿Operan solo en minería?",
    answer:
      "La minería es nuestro punto de entrada y donde tenemos mayor experiencia directa. Pero nuestro servicio BPO y plataforma están diseñados para cualquier industria intensiva en contratos: energía, oil & gas, ingeniería, construcción, manufactura.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "La plataforma opera bajo jurisdicción chilena, alineada con la Ley 21.719 de protección de datos personales. Los datos de cada cliente están aislados y nunca se comparten ni se usan para entrenar modelos de IA.",
  },
  {
    question:
      "¿Qué pasa si quiero dejar el servicio BPO pero quedarme con la plataforma?",
    answer:
      "Puedes hacerlo. La plataforma SGAI funciona de forma independiente del servicio BPO. Si decides continuar solo con el software, activamos una licencia SaaS mensual para que mantengas la continuidad operativa sin perder datos ni configuraciones.",
  },
  {
    question: "¿Puedo probar la plataforma antes de contratar?",
    answer:
      "Sí. Ofrecemos demos personalizadas donde te mostramos los módulos configurados para tu tipo de operación. Agenda una conversación y te preparamos una demo con datos representativos de tu industria.",
  },
  {
    question: "¿SGAI reemplaza a SAP Ariba?",
    answer:
      "No. SGAI complementa a SAP Ariba (y otros ERPs). Nos posicionamos en la capa de inteligencia y ejecución operativa que SAP Ariba no cubre: revisión de BT con IA, monitoreo de desfinanciamiento, análisis comparativo de propuestas y gestión de equipos BPO. Si usas Ariba, SGAI se conecta con él.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-sgai-white pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <h1 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-4 text-center">
              Preguntas frecuentes
            </h1>
            <p className="text-sgai-steel text-center text-lg mb-14">
              Todo lo que necesitas saber sobre SGAI, nuestro servicio y la
              plataforma.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <FAQAccordion items={faqItems} />
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        title="¿Tienes otra pregunta?"
        subtitle="Escríbenos y te respondemos en menos de 24 horas hábiles."
        buttonText="Contactar"
        href="/contacto"
      />
    </>
  );
}
