"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import {
  Compass,
  LayoutDashboard,
  FileText,
  ClipboardList,
  Shield,
  Users,
  Unplug,
  AlertTriangle,
  Clock,
  Eye,
  Layers,
  Check,
  Building2,
  Package,
  Target,
  GitBranch,
  AlertCircle,
  Flame,
  TrendingDown,
  RotateCw,
  Wand2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { trackEvent } from "@/lib/analytics";

const bpoBreakdown = [
  {
    icon: Users,
    title: "Equipo especializado asignado",
    body:
      "Ingenieros senior de procurement con experiencia real en faena, no call-center. Se integran a tu equipo como una extensión del área.",
  },
  {
    icon: ClipboardList,
    title: "Procesos repetitivos ejecutados",
    body:
      "Licitaciones, órdenes de compra, revisión de BT, seguimiento de contratos, estados de pago. Lo que hoy te quema horas.",
  },
  {
    icon: Shield,
    title: "Responsabilidad contractual",
    body:
      "El BPO asume SLA, KPI y calidad. Si algo falla, responde SGAI — no queda en el aire entre áreas internas.",
  },
  {
    icon: LayoutDashboard,
    title: "Apoyado por plataforma con IA",
    body:
      "El BPO opera sobre nuestra plataforma. La IA asiste al equipo humano, no lo reemplaza: revisa documentos, alerta riesgos, sugiere adjudicaciones.",
  },
];

const modules = [
  {
    icon: Compass,
    name: "Planificación",
    tagline: "Antes de comprar, entender",
    description:
      "Define qué necesitas, cuándo y a qué costo total. Mapea demanda, riesgo y mercado antes de salir a buscar proveedor.",
    color: "from-sky-500 to-blue-600",
    accent: "text-sky-600",
    border: "border-sky-200",
    bg: "bg-sky-50",
    features: [
      "Demanda",
      "Riesgo",
      "TCO",
      "Mercado",
      "Sourcing",
      "Simulación",
    ],
  },
  {
    icon: Users,
    name: "Proveedores",
    tagline: "Conoce con quién contratas",
    description:
      "Pre-califica, evalúa y monitorea proveedores con un ranking IA basado en desempeño real, no en intuición.",
    color: "from-purple-500 to-violet-600",
    accent: "text-purple-600",
    border: "border-purple-200",
    bg: "bg-purple-50",
    features: [
      "Precalificación",
      "Evaluación",
      "Segmentación",
      "Riesgo y cumplimiento",
      "Desempeño",
      "Ranking IA",
      "ESG",
    ],
  },
  {
    icon: FileText,
    name: "Documentos y Contratos",
    tagline: "Tu stock contractual vivo",
    description:
      "Genera Bases Técnicas con IA, controla versiones, mantiene biblioteca centralizada y firma electrónicamente.",
    color: "from-emerald-500 to-teal-600",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    features: [
      "Generación de BT IA",
      "Control de versiones",
      "Biblioteca contractual",
      "Flujos y aprobaciones",
      "Firma electrónica",
    ],
  },
  {
    icon: ClipboardList,
    name: "Licitación",
    tagline: "Decisiones trazables, no intuición",
    description:
      "Publica, recibe ofertas, evalúa multicriterio, simula escenarios y recibe recomendación de adjudicación con respaldo IA.",
    color: "from-cyan-500 to-blue-500",
    accent: "text-cyan-600",
    border: "border-cyan-200",
    bg: "bg-cyan-50",
    features: [
      "Publicación",
      "Recepción de ofertas",
      "Evaluación multicriterio",
      "Simulación de escenarios",
      "Ranking IA panel de decisión",
      "Recomendación de adjudicación",
      "Transferencia administración",
    ],
  },
  {
    icon: Shield,
    name: "Administración y Auditoría",
    tagline: "Lo que pasa después de firmar",
    description:
      "Estados de pago digitales, KPI y SLA en vivo, reajustes automáticos, modificaciones controladas y auditoría continua.",
    color: "from-rose-500 to-pink-600",
    accent: "text-rose-600",
    border: "border-rose-200",
    bg: "bg-rose-50",
    features: [
      "Estados de pago digital",
      "KPI y SLA",
      "Reajustes automáticos",
      "Modificaciones de contrato",
      "Auditoría continua",
      "Garantías financieras",
      "Riesgos y predicciones IA",
    ],
  },
];

const team = [
  {
    initials: "GR",
    name: "Gonzalo Rojas Chacón",
    role: "Chief Technology Officer",
    bio: "Lidera la arquitectura técnica de la plataforma: agentes de IA, integraciones con SAP Ariba, JDE y ERP locales, e infraestructura escalable.",
  },
  {
    initials: "CR",
    name: "Claudio Romero Retamal",
    role: "Chief Operating Officer",
    bio: "Conduce la operación del servicio BPO y la coordinación de los equipos de procurement asignados a clientes. Asegura calidad y consistencia.",
  },
  {
    initials: "CR",
    name: "Claudio Rojas Bermúdez",
    role: "Chief Financial Officer",
    bio: "+12 años en abastecimiento directo en la gran minería chilena. Hoy lidera el modelo financiero y la relación con inversionistas y partners.",
  },
];

type DiscoveryQuestion = {
  icon: typeof Compass;
  q: string;
  a: string;
};

const discoveryGroups: {
  label: string;
  title: string;
  subtitle: string;
  accent: string;
  iconBg: string;
  questions: DiscoveryQuestion[];
}[] = [
  {
    label: "Contexto",
    title: "Entendamos cómo operan hoy",
    subtitle:
      "Antes de hablar de dolores, queremos ver el mapa. Estas preguntas nos ayudan a dibujarlo contigo.",
    accent: "text-sgai-copper-light",
    iconBg:
      "bg-sgai-copper-light/10 text-sgai-copper-light border-sgai-copper-light/30",
    questions: [
      {
        icon: Building2,
        q: "¿Cómo está organizado hoy su proceso de abastecimiento?",
        a: "Lo típico: un jefe corporativo que intenta consolidar, áreas que compran por proyecto o faena, y un maestro de proveedores fragmentado entre sistemas.",
      },
      {
        icon: Users,
        q: "¿Qué áreas participan con mayor frecuencia en el proceso?",
        a: "Operaciones pide, Abastecimiento negocia, Legal revisa, Finanzas paga, Contraloría audita. Casi nunca hay una sola vista del ciclo completo.",
      },
      {
        icon: Package,
        q: "¿Cuáles son las categorías o tipos de compra más críticas?",
        a: "Servicios de operación (mantención, perforación, transporte), insumos técnicos (diesel, neumáticos, reactivos) y servicios generales con contratos largos.",
      },
      {
        icon: Target,
        q: "¿Qué parte del proceso consideran más sensible o estratégica?",
        a: "Las compras que si fallan detienen la faena. Ahí no hay margen para error, demora ni para una adjudicación mal fundada.",
      },
      {
        icon: GitBranch,
        q: "¿Cómo gestionan hoy proveedores, contratos y requerimientos?",
        a: "Maestro en una plataforma, contratos en PDF/SharePoint, OCs en el ERP, requerimientos en correos y planillas. Cada capa es una fuente de verdad distinta.",
      },
    ],
  },
  {
    label: "Dolores",
    title: "Abramos la conversación sobre lo que duele",
    subtitle:
      "No hay respuesta correcta. Nos interesa lo que pasa en tu día a día, aunque suene básico.",
    accent: "text-sgai-copper",
    iconBg: "bg-sgai-copper/15 text-sgai-copper border-sgai-copper/40",
    questions: [
      {
        icon: AlertCircle,
        q: "¿Cuáles son hoy los principales desafíos que enfrentan en abastecimiento?",
        a: "Visibilidad parcial, mucha tarea manual, presión por compliance sin herramientas adecuadas y rotación que se lleva el conocimiento del proceso.",
      },
      {
        icon: Flame,
        q: "¿Qué parte del proceso les genera más problemas o desgaste?",
        a: "Licitación y evaluación de ofertas suele ser el cuello de botella. Revisar Bases Técnicas y alinear criterios entre áreas toma semanas.",
      },
      {
        icon: TrendingDown,
        q: "¿Dónde sienten que hoy hay más ineficiencias?",
        a: "En la conciliación entre sistemas (ERP, sourcing, planillas) y en la revisión manual de documentos repetitivos que podrían automatizarse.",
      },
      {
        icon: RotateCw,
        q: "¿Qué situaciones se repiten y les gustaría resolver?",
        a: "OCs con errores de tipeo, licitaciones que se repiten sin aprendizaje entre compradores, contratos que vencen sin aviso y reajustes manuales.",
      },
      {
        icon: Wand2,
        q: "Si pudieran corregir tres cosas del proceso actual, ¿cuáles serían?",
        a: "Centralizar información, eliminar doble carga entre sistemas y tener alertas tempranas antes de que los problemas sean visibles para todos.",
      },
    ],
  },
];

const pains = [
  {
    icon: Layers,
    title: "Procesos manuales en todos lados",
    body:
      "Excel, correos, PDFs, llamadas. El proceso vive en la cabeza de una o dos personas. Si esa persona se va o se enferma, se rompe.",
  },
  {
    icon: Unplug,
    title: "Plataformas que no se hablan",
    body:
      "Ariba por un lado, JDE por otro, SAP S/4 en el medio, Excel en todos lados. Cada una es una fuente de verdad distinta. Se gastan horas conciliando.",
  },
  {
    icon: AlertTriangle,
    title: "Errores silenciosos",
    body:
      "Un tipeo en la OC, un precio viejo, una cláusula omitida, una versión de BT antigua. Los errores se descubren cuando ya facturaron o cuando llega la auditoría.",
  },
  {
    icon: Eye,
    title: "Falta de transparencia",
    body:
      "¿Cuántos contratos están por vencer? ¿Qué gastamos en esta categoría? ¿Cuánto me ahorré vs el año pasado? Si la respuesta demora más de 30 minutos, hay un problema.",
  },
  {
    icon: Clock,
    title: "Info que llega tarde",
    body:
      "El reporte mensual de compras llega cuando ya no sirve para decidir. Las alertas de desfinanciamiento llegan cuando ya desfinanció.",
  },
  {
    icon: Compass,
    title: "Fragmentación entre áreas",
    body:
      "Operaciones sabe lo que necesita, Abastecimiento compra, Legal revisa, Finanzas paga, Contraloría audita. Nadie ve el ciclo completo, cada uno mira su pedazo.",
  },
];

export function DemoPitch() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <>
      {/* 1. Portada */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url(/mining-hero.png)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-sgai-midnight/85 via-sgai-midnight/50 to-sgai-midnight/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-sgai-midnight/90 via-transparent to-sgai-midnight/40"
          aria-hidden="true"
        />
        <HeroBackground />

        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full border border-sgai-copper/10 translate-x-1/2 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full border border-sgai-copper/5 -translate-x-1/2 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-10 left-1/3 w-3 h-3 rounded-full bg-sgai-copper/40 pointer-events-none"
          animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-1/4 w-2 h-2 rounded-full bg-sgai-copper-light/50 pointer-events-none"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative max-w-5xl mx-auto py-24">
          <motion.p
            className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Presentación SGAI · Conversación privada
          </motion.p>
          <motion.h1
            className="font-heading text-5xl md:text-7xl text-white leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Esto es SGAI.
            <br />
            <span className="gradient-copper-text">
              Y queremos entender tu operación.
            </span>
          </motion.h1>
          <motion.p
            className="text-sgai-steel text-xl leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Somos un grupo humano altamente especializado en abastecimiento —
            no un BPO genérico. A eso sumamos una plataforma apoyada por IA,
            centrada en hacer el procurement más inteligente y en mejorar los
            procesos manuales que hoy viven en planillas, correos y llamadas.
          </motion.p>
        </div>
      </section>

      {/* 2. Quiénes somos */}
      <section className="relative gradient-hero py-24 px-6 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-sgai-copper/10 blur-3xl pointer-events-none"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-sgai-copper-light/10 blur-3xl pointer-events-none"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.p
            className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            Quiénes somos
          </motion.p>
          <motion.h2
            className="font-heading text-4xl md:text-5xl text-white mb-6 max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Gente que vivió el problema,{" "}
            <span className="gradient-copper-text">no que lo leyó.</span>
          </motion.h2>
          <motion.p
            className="text-sgai-steel text-lg leading-relaxed mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Antes de contarte qué es SGAI, queremos que nos conozcas. Somos
            tres socios con roles complementarios: estrategia comercial,
            visión de producto y ejecución técnica.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, idx) => (
              <motion.div
                key={m.name}
                className="group relative bg-sgai-slate/50 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-sgai-copper/50 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.25 + idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 0%, rgba(200,117,51,0.18), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="relative w-20 h-20 mb-5">
                    <motion.div
                      className="absolute inset-0 rounded-full gradient-copper blur-lg opacity-60"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        duration: 3 + idx * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative w-20 h-20 rounded-full gradient-copper flex items-center justify-center shadow-[0_8px_30px_-8px_rgba(200,117,51,0.6)]">
                      <span className="text-white font-heading text-2xl">
                        {m.initials}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-xl text-white mb-1">
                    {m.name}
                  </h3>
                  <p className="text-sgai-copper font-medium text-sm mb-4">
                    {m.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {m.bio}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-sgai-copper/40 via-sgai-copper/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ¿Qué es un BPO? */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Punto de partida
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            ¿Qué es un BPO? Y por qué el nuestro es distinto.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-6">
            BPO (<em>Business Process Outsourcing</em>) significa entregarle a
            un tercero especializado la ejecución de un proceso completo. En
            procurement se usa típicamente para tareas repetitivas como
            órdenes de compra o conciliaciones.
          </p>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-12">
            El nuestro va un paso más allá: es un BPO de abastecimiento{" "}
            <strong className="text-sgai-midnight">
              operado por ingenieros senior y apoyado por una plataforma con
              IA propia
            </strong>
            . No es un call-center de compras. Es un equipo experto asignado a
            tu operación, con tecnología que automatiza lo repetitivo y libera
            tiempo para las decisiones estratégicas.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {bpoBreakdown.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-sgai-ice border border-gray-200 rounded-2xl p-6 flex gap-5 hover:border-sgai-copper/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg gradient-copper flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-sgai-midnight mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sgai-steel text-sm leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-sgai-midnight rounded-2xl p-8 max-w-4xl">
            <p className="text-sgai-copper text-xs font-bold uppercase tracking-widest mb-3">
              La diferencia en una línea
            </p>
            <p className="text-white text-xl leading-relaxed font-heading">
              Grupo humano altamente especializado, apoyado por IA — centrado
              en abastecimiento inteligente y en mejorar los procesos
              manuales. No un BPO genérico, no una plataforma rígida.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Los cinco módulos — detalle completo con IA */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            La plataforma
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            Cinco módulos. Un ciclo continuo.{" "}
            <span className="text-sgai-copper">La IA apoya al equipo.</span>
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-12">
            Cada módulo cubre una etapa del proceso de abastecimiento, desde
            la planificación previa hasta la auditoría post-firma. No te
            mostramos todo de una — puedes activar el que más te duele y
            sumar el resto después.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className={`group relative rounded-2xl border ${m.border} ${m.bg} overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all`}
                >
                  <div className={`bg-gradient-to-br ${m.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                        Módulo {i + 1}
                      </span>
                      <Icon className="w-6 h-6 text-white/90" />
                    </div>
                    <h3 className="font-heading text-2xl mb-1.5 leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-white/85 text-sm leading-snug">
                      {m.tagline}
                    </p>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sgai-midnight/80 text-sm leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <div
                      className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${m.accent}`}
                    >
                      Incluye
                    </div>
                    <ul className="space-y-1.5 mt-auto">
                      {m.features.map((f) => {
                        const hasAI = /\bIA\b/.test(f);
                        return (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-sgai-midnight/90"
                          >
                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${m.accent}`} />
                            <span className="flex-1">
                              {f}
                              {hasAI ? (
                                <span className="ml-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-sgai-copper/10 text-sgai-copper text-[10px] font-bold uppercase tracking-wider align-middle">
                                  IA
                                </span>
                              ) : null}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-sgai-steel">
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-sgai-copper/10 text-sgai-copper text-[10px] font-bold uppercase tracking-wider">
              IA
            </span>
            <span>
              = capacidad apoyada por IA propia (revisión, ranking,
              recomendación, predicción).
            </span>
          </div>
        </div>
      </section>

      {/* 6. Preguntas clave interactivas */}
      <section className="relative gradient-hero py-24 px-6 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 rounded-full bg-sgai-copper/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-sgai-copper-light/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sgai-copper/10 border border-sgai-copper/30 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sgai-copper" />
            <span className="text-sgai-copper text-xs font-bold uppercase tracking-widest">
              Hagamos una pausa
            </span>
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-5xl text-white mb-6 max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Preguntas clave para{" "}
            <span className="gradient-copper-text">conocer tus dolores.</span>
          </motion.h2>
          <motion.p
            className="text-sgai-steel text-lg leading-relaxed mb-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Estas son las preguntas que hacemos en cada conversación con
            equipos de abastecimiento. <strong className="text-white">Piensa
            tu respuesta primero.</strong> Cuando quieras, puedes abrir una
            pista con patrones que hemos oído — no es la respuesta correcta,
            solo algo para contrastar tu realidad.
          </motion.p>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sgai-midnight/50 border border-white/10 text-sgai-steel text-xs mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sgai-copper" />
            No abras la pista hasta haber pensado tu respuesta.
          </motion.div>

          <div className="space-y-16">
            {discoveryGroups.map((group, gIdx) => (
              <div key={group.label}>
                <motion.div
                  className="flex items-center gap-3 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${group.iconBg}`}
                  >
                    {gIdx + 1} · {group.label}
                  </span>
                </motion.div>
                <motion.h3
                  className="font-heading text-2xl md:text-3xl text-white mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  {group.title}
                </motion.h3>
                <motion.p
                  className="text-sgai-steel leading-relaxed mb-8 max-w-3xl"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {group.subtitle}
                </motion.p>

                <div className="grid md:grid-cols-2 gap-4">
                  {group.questions.map((item, qIdx) => {
                    const Icon = item.icon;
                    const id = `${group.label}-${qIdx}`;
                    const isOpen = openQuestion === id;
                    return (
                      <motion.button
                        key={id}
                        type="button"
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : id)
                        }
                        className={`group text-left relative overflow-hidden rounded-2xl border transition-colors ${
                          isOpen
                            ? "bg-sgai-slate/80 border-sgai-copper/60"
                            : "bg-sgai-slate/40 border-white/10 hover:border-sgai-copper/40"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.45,
                          delay: 0.1 + qIdx * 0.06,
                        }}
                        whileHover={{ y: -3 }}
                      >
                        <div className="p-5 flex items-start gap-4">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${group.iconBg}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium leading-snug">
                              {item.q}
                            </p>
                          </div>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-0">
                                <div className="pl-[60px] relative">
                                  <MessageCircle className="absolute left-3 top-0.5 w-4 h-4 text-sgai-copper/70" />
                                  <p className="text-sgai-steel text-sm leading-relaxed border-l-2 border-sgai-copper/40 pl-4 italic">
                                    {item.a}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Dolores comunes */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Lo que escuchamos en todas las conversaciones
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            ¿Te resulta familiar algo de esto?
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-12">
            Estos son los seis dolores que aparecen en prácticamente todas
            nuestras conversaciones con jefes de abastecimiento y gerentes de
            operaciones. No necesitas tenerlos todos para que SGAI tenga
            sentido.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {pains.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-sgai-ice border border-gray-200 rounded-xl p-6 flex gap-5 hover:border-sgai-copper/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-sgai-copper/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-sgai-copper" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-sgai-midnight mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sgai-steel text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA final — sin formulario */}
      <section
        id="feedback"
        className="relative gradient-hero py-28 px-6 overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sgai-copper/15 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sgai-copper-light/10 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sgai-copper/15 border border-sgai-copper/40 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-sgai-copper" />
            <span className="text-sgai-copper text-xs font-bold uppercase tracking-widest">
              Pasemos a la acción
            </span>
          </motion.div>

          <motion.h2
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Diseñemos{" "}
            <span className="gradient-copper-text">tu POC.</span>
          </motion.h2>
          <motion.p
            className="text-sgai-steel text-xl leading-relaxed max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ya conversamos. Ahora el próximo paso es concreto: en 48 horas te
            enviamos una propuesta de POC escrita — módulo, caso, métricas y
            plazos. Antes de terminar, dos preguntas cortas nos terminan de
            cerrar la foto para diseñarla bien.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              {
                icon: AlertCircle,
                q: "¿Hay algún dolor importante que no hayamos tocado?",
                hint: "Casi siempre queda uno guardado. Ese suele ser el más útil para diseñar la POC.",
              },
              {
                icon: Sparkles,
                q: "¿Cuál sería para ustedes una mejora realmente valiosa?",
                hint: "Pedimos imaginar, no priorizar. Si mañana funcionara algo perfecto, ¿qué sería?",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.q}
                  className="relative bg-sgai-slate/60 border border-sgai-copper/30 rounded-2xl p-6 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sgai-copper/20 blur-3xl pointer-events-none"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 6 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-copper flex items-center justify-center shrink-0 shadow-[0_6px_20px_-4px_rgba(200,117,51,0.6)]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-heading text-lg leading-tight mb-2">
                        {item.q}
                      </p>
                      <p className="text-sgai-steel text-sm leading-relaxed italic">
                        {item.hint}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <motion.p
              className="text-white font-heading text-2xl md:text-3xl mb-8 max-w-2xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Arranquemos la POC.{" "}
              <span className="gradient-copper-text">
                Propuesta escrita en 48h.
              </span>
            </motion.p>

            <motion.div
              className="relative inline-block mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl gradient-copper blur-2xl opacity-60"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <a
                href="mailto:contacto.sgai@sgai.cl?subject=Vamos%20con%20la%20POC%20SGAI&body=Hola%20equipo%20SGAI%2C%0A%0ADesp%C3%A9s%20de%20la%20conversaci%C3%B3n%20queremos%20avanzar%20con%20la%20POC.%20El%20dolor%20prioritario%20que%20queremos%20abordar%20es%3A%0A%0A%0A%0ALa%20mejora%20realmente%20valiosa%20ser%C3%ADa%3A%0A%0A%0A%0AQuedo%20atento%20a%20su%20propuesta%20en%2048%20horas.%0A%0ASaludos."
                onClick={() => trackEvent("demo_cta_arrancar_poc_click")}
                className="relative inline-flex items-center justify-center gap-3 gradient-copper text-white font-heading text-xl md:text-2xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-[0_15px_50px_-10px_rgba(200,117,51,0.7)]"
              >
                Quiero mi propuesta de POC
                <motion.span
                  aria-hidden="true"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sgai-steel text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a
                href="mailto:contacto.sgai@sgai.cl?subject=Dudas%20después%20del%20demo%20SGAI"
                onClick={() => trackEvent("demo_cta_email_click")}
                className="inline-flex items-center gap-2 hover:text-sgai-copper transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Tengo dudas antes de arrancar · contacto.sgai@sgai.cl
              </a>
              <span className="text-sgai-copper/50 hidden md:inline">·</span>
              <Link
                href="/contacto"
                onClick={() => trackEvent("demo_cta_contacto_click")}
                className="inline-flex items-center gap-2 hover:text-sgai-copper transition-colors"
              >
                Reagendar una sesión
              </Link>
            </motion.div>

            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="bg-sgai-slate/40 border border-white/10 rounded-xl p-5">
                <div className="text-sgai-copper text-xs font-bold uppercase tracking-wider mb-2">
                  48h · Propuesta
                </div>
                <p className="text-white font-heading text-lg mb-1">
                  POC escrita
                </p>
                <p className="text-sgai-steel text-sm leading-relaxed">
                  Módulo, caso, métricas y plazos. La revisas con tu equipo.
                </p>
              </div>
              <div className="bg-sgai-slate/40 border border-white/10 rounded-xl p-5">
                <div className="text-sgai-copper text-xs font-bold uppercase tracking-wider mb-2">
                  Semana 1-2 · Kickoff
                </div>
                <p className="text-white font-heading text-lg mb-1">
                  Alcance + data
                </p>
                <p className="text-sgai-steel text-sm leading-relaxed">
                  Accesos, datos de prueba, criterios de éxito medibles.
                </p>
              </div>
              <div className="bg-sgai-slate/40 border border-white/10 rounded-xl p-5">
                <div className="text-sgai-copper text-xs font-bold uppercase tracking-wider mb-2">
                  Semana 3-6 · Ejecución
                </div>
                <p className="text-white font-heading text-lg mb-1">
                  Resultados sobre tu caso
                </p>
                <p className="text-sgai-steel text-sm leading-relaxed">
                  Operamos en tu operación real. Revisamos resultados antes
                  de hablar de contrato.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
