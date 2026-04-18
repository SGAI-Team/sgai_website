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
} from "lucide-react";
import { trackEvent, trackFormStart } from "@/lib/analytics";

const modules = [
  {
    icon: Search,
    name: "Revisión de Bases Técnicas con IA",
    description:
      "Lee BT de 200+ páginas en minutos, detecta inconsistencias, cláusulas críticas y resume lo que tu equipo tiene que decidir.",
    benefit: "-70% HH de revisión manual",
  },
  {
    icon: FileText,
    name: "Monitoreo de contratos",
    description:
      "Seguimiento en tiempo real de vencimientos, hitos, entregables y desfinanciamiento. Alertas antes de que el problema crezca.",
    benefit: "Cero sorpresas en cierre de mes",
  },
  {
    icon: ClipboardList,
    name: "Análisis de propuestas",
    description:
      "Consolida ofertas comerciales, extrae comparables y arma matrices de evaluación en una pasada. Reduce sesgo del comprador.",
    benefit: "Decisiones trazables y auditables",
  },
  {
    icon: Shield,
    name: "Revisión pre-firma",
    description:
      "Detecta cláusulas de riesgo antes de firmar. Cruza con tu política de compras y resalta excepciones.",
    benefit: "Menos sorpresas legales post-firma",
  },
  {
    icon: LayoutDashboard,
    name: "Tablero ejecutivo",
    description:
      "Un solo panel con KPIs reales: compliance, lead time, ahorros, riesgo, cobertura de contratos. Exportable a PPT y Power BI.",
    benefit: "Info para decidir en 60 segundos",
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

      {/* 3. Anti-Ariba */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            Lo que nos diferencia
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-8 max-w-3xl leading-tight">
            No queremos ser otra SAP Ariba.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed mb-10 max-w-3xl">
            Las plataformas globales llegan con un manual de cómo debería ser
            tu proceso. Tú ajustas tu operación al software. Con SGAI es al
            revés: la plataforma se adapta a cómo trabajas, no tú a ella.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Diff
              title="Flexibles"
              body="Configuramos módulos específicos para tu flujo. No pagas por 40 funciones que nunca usarás."
            />
            <Diff
              title="Locales"
              body="Español, compliance chileno, integraciones con Ariba/JDE/SAP y también con las planillas que siguen vivas."
            />
            <Diff
              title="Escuchamos"
              body="Antes de proponer, mapeamos tu operación real. El roadmap se construye con tu input, no contra él."
            />
          </div>
        </div>
      </section>

      {/* 4. 5 Módulos */}
      <section className="bg-sgai-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sgai-copper text-sm font-medium uppercase tracking-widest mb-4">
            La plataforma
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-6 max-w-3xl leading-tight">
            Cinco módulos que cubren el ciclo completo.
          </h2>
          <p className="text-sgai-steel text-lg leading-relaxed max-w-3xl mb-12">
            Cada módulo resuelve un problema concreto del ciclo de procurement.
            Puedes activarlos todos de una, o empezar por el que más te duele y
            sumar después.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className="bg-sgai-ice border border-gray-200 rounded-2xl p-8 hover:border-sgai-copper/40 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-sgai-copper uppercase tracking-wider">
                          Módulo {i + 1}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl text-sgai-midnight mb-2">
                        {m.name}
                      </h3>
                      <p className="text-sgai-steel text-base leading-relaxed mb-3">
                        {m.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sgai-copper">
                        <Check className="w-4 h-4" />
                        {m.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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

function Diff({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-sgai-slate/50 border border-white/10 rounded-xl p-6">
      <h3 className="font-heading text-xl text-white mb-3">{title}</h3>
      <p className="text-sgai-steel text-sm leading-relaxed">{body}</p>
    </div>
  );
}
