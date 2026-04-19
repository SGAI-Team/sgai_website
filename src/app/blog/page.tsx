import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog — Procurement con IA para Minería, Energía y Construcción",
  description:
    "Análisis operacional, casos y guías sobre abastecimiento inteligente, revisión de Bases Técnicas con IA, compliance y regulación chilena.",
  path: "/blog",
  ogImage: "home.png",
});

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  gradient: string;
};

const posts: Post[] = [
  {
    slug: "ley-40-horas-contratos-indexados-abastecimiento",
    title:
      "Ley de 40 horas y contratos indexados: la matemática que hay que reescribir",
    excerpt:
      "Entre el 40% y 70% de los contratos de una faena son indexados. La Ley 21.561 rompe la fórmula de reajuste y obliga a recalcular. Con diagramas, tabla de impacto y plan de acción.",
    date: "19 abril 2026",
    author: "SGAI — Equipo Contractual",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    slug: "ley-40-horas-contratos-mineros",
    title:
      "Ley de 40 horas aplicada a contratos mineros: cómo absorbe el impacto un BPO de procurement",
    excerpt:
      "El 26 de abril la jornada baja a 42 horas. En faenas con 4x3 y 7x7 eso re-escribe cláusulas contractuales, overtime y compliance. Qué pasa con tus OC y cómo un BPO lo contiene sin recontratar.",
    date: "18 abril 2026",
    author: "SGAI — Equipo BPO",
    gradient: "from-sgai-copper to-sgai-copper-light",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <p className="text-sgai-copper text-sm font-medium mb-3 uppercase tracking-wider">
              Blog SGAI
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Procurement, Bases Técnicas y regulación — sin relleno.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Escribimos para áreas de abastecimiento que ya tienen SAP Ariba,
              JDE o Excel y necesitan resolver problemas reales. Casos, normativa
              chilena y cómo un agente de IA ataca cada uno.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-sgai-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${p.slug}`}
                className="block group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-sgai-copper/40 hover:shadow-xl transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-sgai-steel mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {p.date}
                    </span>
                    <span>·</span>
                    <span>{p.author}</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl text-sgai-midnight mb-3 leading-tight group-hover:text-sgai-copper transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sgai-steel leading-relaxed mb-5">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sgai-copper font-medium">
                    Leer artículo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
