"use client";

import { useState, type FormEvent } from "react";
import {
  Compass,
  LayoutDashboard,
  Search,
  FileText,
  ClipboardList,
  Shield,
  Users,
  Unplug,
  AlertTriangle,
  Clock,
  Eye,
  Layers,
  MessageSquare,
  Send,
  Check,
  ArrowRight,
} from "lucide-react";
import { trackEvent, trackFormStart } from "@/lib/analytics";

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
      "Planificación de categorías",
      "Demanda proyectada",
      "Análisis de riesgo",
      "TCO (costo total de propiedad)",
      "Inteligencia de mercado",
      "Estrategia de sourcing",
      "Simulación de escenarios",
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
      "Maestro de proveedores",
      "Precalificación automatizada",
      "Evaluación 360°",
      "Segmentación estratégica",
      "Compliance y riesgo",
      "Seguimiento de desempeño",
      "Ranking IA",
      "Indicadores ESG",
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
      "Generación de BT con IA",
      "Control de versiones",
      "Biblioteca contractual",
      "Flujos y aprobaciones",
      "Firma electrónica",
      "Repositorio auditable",
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
      "Publicación de licitación",
      "Recepción de ofertas",
      "Evaluación multicriterio",
      "Simulación de escenarios",
      "Ranking IA panel de decisión",
      "Recomendación de adjudicación",
      "Transferencia a administración",
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
      "KPI y SLA en tiempo real",
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
    name: "Gonzalo",
    role: "Chief Technology Officer",
    bio: "Responsable del desarrollo técnico de la plataforma. Traduce necesidades de negocio en arquitectura funcional y escalable.",
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
    bio: "+12 años en abastecimiento directo en la gran minería chilena. Lidera estrategia comercial y relación con clientes.",
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
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    role: "",
    painText: "",
    idea: "",
    contactName: "",
    contactEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (!started) {
      setStarted(true);
      trackFormStart("demo_feedback");
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    const payload = { ...form, source: "sgai.cl/demo" };
    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else if (typeof window !== "undefined") {
        window.dataLayer?.push({ event: "sgai_demo_feedback", payload });
      }
      trackEvent("demo_feedback_submitted", {
        company: form.company,
        has_idea: form.idea.length > 0,
      });
      setSubmitted(true);
    } catch {
      alert(
        "No pudimos enviar tu mensaje. Escríbenos a contacto@sgai.cl — guardamos tu feedback manualmente.",
      );
    }
  };

  return (
    <>
      {/* 1. Portada */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden px-6">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full border border-sgai-copper/10 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full border border-sgai-copper/5 -translate-x-1/2 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto py-24">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-5">
            Presentación SGAI · Conversación privada
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-white leading-[1.05] mb-6">
            Esto es SGAI.
            <br />
            <span className="gradient-copper-text">
              Y queremos entender tu operación.
            </span>
          </h1>
          <p className="text-sgai-steel text-xl leading-relaxed max-w-3xl">
            No somos otra plataforma rígida con módulos que no calzan con tu
            realidad. Somos un equipo chileno que vivió el problema del
            abastecimiento por dentro y construyó una solución flexible, con
            BPO humano y una plataforma de IA que se adapta a cómo tú operas.
          </p>
        </div>
      </section>

      {/* 2. Foco de la empresa */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Nuestro foco
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            Abastecimiento inteligente para empresas que mueven Latinoamérica.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-10">
            Existimos porque las áreas de procurement en minería, energía y
            construcción cargan procesos críticos con herramientas pensadas
            para otros mercados o para otros tamaños. SGAI combina dos cosas
            que antes iban por caminos separados:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sgai-ice rounded-2xl p-8 border border-gray-200">
              <Users className="w-10 h-10 text-sgai-copper mb-5" />
              <h3 className="font-heading text-2xl text-sgai-midnight mb-3">
                Servicio BPO
              </h3>
              <p className="text-sgai-steel leading-relaxed">
                Ingenieros senior de procurement que se integran a tu operación
                como extensión del equipo. Gestionan contratos, órdenes de
                compra y licitaciones.
              </p>
            </div>
            <div className="bg-sgai-ice rounded-2xl p-8 border border-gray-200">
              <LayoutDashboard className="w-10 h-10 text-sgai-copper mb-5" />
              <h3 className="font-heading text-2xl text-sgai-midnight mb-3">
                Plataforma SGAI
              </h3>
              <p className="text-sgai-steel leading-relaxed">
                Software con agentes de IA para revisión de BT, monitoreo de
                contratos, análisis de propuestas y alertas de riesgo. Incluida
                sin costo adicional con el BPO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lo que nos diferencia */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Lo que nos diferencia
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 max-w-3xl leading-tight">
            La diferencia la hace cómo te acompañamos, no solo el software.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed mb-12 max-w-3xl">
            Combinamos tecnología, servicio y contexto local. Cada uno por
            separado existe en el mercado. La ventaja está en tenerlos
            integrados, hablando entre sí, y operando con gente que entiende
            faena.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Diff
              icon="⚡"
              title="Puesta en marcha en semanas, no en años"
              body="El primer módulo activo en 6-10 semanas. Nada de proyectos de 18 meses donde el cliente paga implementación antes de ver resultado. Pagas cuando el agente ya está operando."
            />
            <Diff
              icon="🧩"
              title="BPO y plataforma integrados de fábrica"
              body="Los ingenieros que ejecutan tu procurement son los mismos que entrenan los agentes de IA. Nadie más en el mercado combina ambos con este nivel de acoplamiento."
            />
            <Diff
              icon="🇨🇱"
              title="Equipo local con kilómetros en faena"
              body="+12 años operando en la gran minería chilena. Hablamos el idioma de SAP Ariba, JDE, SAP S/4 y también del Excel que sigue gobernando un 60% del proceso real."
            />
            <Diff
              icon="🎛️"
              title="Modular: activas lo que necesitas"
              body="¿Solo quieres revisión de Bases Técnicas? Se activa ese módulo. ¿Sumas monitoreo de contratos el siguiente trimestre? Se agrega. No cobramos por funciones que no usas."
            />
            <Diff
              icon="🔌"
              title="Se conecta a lo que ya tienes"
              body="Ariba, JDE, SAP S/4, Buk, SharePoint o planillas compartidas. No te obligamos a migrar antes de empezar. La plataforma lee y escribe sobre tu stack actual."
            />
            <Diff
              icon="📈"
              title="ROI medible desde el primer trimestre"
              body="Antes de firmar te entregamos un diagnóstico con números propios de tu operación: HH ahorradas, contratos por revisar, riesgo de desfinanciamiento. Si no cierra el caso, no cierra el contrato."
            />
          </div>

          <div className="mt-12 bg-sgai-slate/50 border border-sgai-copper/20 rounded-2xl p-8 max-w-4xl">
            <p className="text-sgai-copper text-xs font-bold uppercase tracking-wider mb-3">
              En resumen
            </p>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-heading">
              Te damos servicio experto, tecnología propia y velocidad de
              arranque — sin obligarte a rediseñar tu operación para que calce
              con nuestro software.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 5 Módulos — ciclo completo de procurement */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            La plataforma
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            Cinco módulos. 36 capacidades. Un solo ciclo.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-12">
            Cada módulo cubre una etapa del proceso de abastecimiento, desde la
            planificación previa hasta la auditoría post-firma. Puedes activarlos
            todos o empezar por el que más te duele — la plataforma escala
            contigo.
          </p>

          {/* Flujo del ciclo */}
          <div className="hidden md:flex items-center justify-between mb-10 px-2">
            {modules.map((m, i) => (
              <div key={m.name} className="flex items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-sgai-steel">
                  {String(i + 1).padStart(2, "0")} · {m.name}
                </span>
                {i < modules.length - 1 ? (
                  <ArrowRight className="w-4 h-4 mx-3 text-sgai-copper/60" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Grid de 5 columnas con todas las features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className={`group relative rounded-2xl border ${m.border} ${m.bg} overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all`}
                >
                  {/* Header */}
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

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sgai-midnight/80 text-sm leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${m.accent}`}>
                      Incluye
                    </div>
                    <ul className="space-y-1.5 mt-auto">
                      {m.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-sgai-midnight/90"
                        >
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${m.accent}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cierre */}
          <div className="mt-12 max-w-3xl bg-sgai-ice border border-gray-200 rounded-2xl p-8">
            <p className="text-sgai-copper text-xs font-bold uppercase tracking-widest mb-3">
              Cómo lo activas
            </p>
            <p className="text-sgai-midnight text-lg leading-relaxed mb-4">
              No tienes que activar los 5 al mismo tiempo. La mayoría de
              clientes empieza por <strong>Documentos &amp; Contratos</strong> o
              <strong> Licitación</strong> (los que duelen más rápido) y suma
              los demás en los siguientes trimestres.
            </p>
            <p className="text-sgai-steel text-sm">
              Lo que SÍ recomendamos: que el primer módulo activo esté
              integrado a tu sistema actual (Ariba, JDE, SharePoint o lo que
              uses) desde el día uno. Eso evita la doble carga de datos.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Equipo */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            El equipo detrás
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 max-w-3xl leading-tight">
            Gente que vivió el problema, no que lo leyó.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed mb-12 max-w-2xl">
            Tres socios con roles complementarios: estrategia comercial,
            visión de producto y ejecución técnica.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-sgai-slate/50 border border-white/10 rounded-2xl p-8 hover:border-sgai-copper/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-full gradient-copper flex items-center justify-center mb-5">
                  <span className="text-white font-heading text-2xl">
                    {m.initials}
                  </span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dolores comunes */}
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

      {/* 7. Formulario de feedback / ideas */}
      <section id="feedback" className="gradient-hero py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Tu turno
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
            Ahora cuéntanos tú.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed mb-10">
            Nuestro roadmap lo construimos con clientes reales. Si tienes un
            dolor específico o una idea de cómo la plataforma debería operar en
            tu caso, escríbela aquí. Te respondemos en persona.
          </p>

          {submitted ? (
            <div className="bg-sgai-slate/70 border border-sgai-success/30 rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-sgai-success/20 flex items-center justify-center mx-auto mb-5">
                <Check className="w-7 h-7 text-sgai-success" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-2">
                Recibido. Gracias.
              </h3>
              <p className="text-sgai-steel">
                Nos pondremos en contacto en menos de 24 horas hábiles con una
                propuesta concreta sobre lo que nos compartiste.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="bg-sgai-slate/50 border border-white/10 rounded-2xl p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Empresa
                  </label>
                  <input
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                    placeholder="Ej: Minera El Roble"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Tu rol
                  </label>
                  <input
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                    placeholder="Ej: Jefe de abastecimiento"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-sgai-copper" />
                  ¿Cuál es hoy tu mayor dolor en abastecimiento?
                </label>
                <textarea
                  name="painText"
                  required
                  value={form.painText}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                  placeholder="Ej: Tenemos 180 contratos activos y el ajuste a 42 horas nos cayó encima sin plan. O: Ariba no conversa con JDE y reconciliamos a mano cada mes."
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-1.5">
                  <MessageSquare className="w-4 h-4 text-sgai-copper" />
                  ¿Qué debería hacer SGAI que hoy no hace nadie?
                </label>
                <textarea
                  name="idea"
                  value={form.idea}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                  placeholder="Opcional. Cualquier idea cuenta."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Tu nombre
                  </label>
                  <input
                    name="contactName"
                    required
                    value={form.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                    placeholder="Nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Email corporativo
                  </label>
                  <input
                    name="contactEmail"
                    type="email"
                    required
                    value={form.contactEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper"
                    placeholder="tu@empresa.cl"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 gradient-copper text-white font-semibold px-6 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Enviar
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-sgai-steel text-center">
                Lo que compartas queda guardado solo para esta conversación. No
                lo usamos para marketing masivo.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Diff({
  icon,
  title,
  body,
}: {
  icon?: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-sgai-slate/50 border border-white/10 rounded-xl p-6 hover:border-sgai-copper/40 transition-colors">
      {icon ? <div className="text-3xl mb-3">{icon}</div> : null}
      <h3 className="font-heading text-xl text-white mb-3">{title}</h3>
      <p className="text-sgai-steel text-sm leading-relaxed">{body}</p>
    </div>
  );
}
