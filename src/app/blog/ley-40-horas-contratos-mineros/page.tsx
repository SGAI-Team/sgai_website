import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  AlertTriangle,
  FileText,
  Users,
  Workflow,
  Clock,
  TrendingDown,
  ChevronRight,
} from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SLUG = "ley-40-horas-contratos-mineros";
const URL = `https://sgai.cl/blog/${SLUG}`;
const TITLE =
  "Ley de 40 horas en contratos mineros: cómo absorbe el impacto un BPO de procurement";
const DESCRIPTION =
  "El 26 de abril baja a 42 horas. En faenas 4x3 y 7x7 re-escribe cláusulas, overtime y compliance. Qué pasa con tus OC y cómo lo contiene un BPO de procurement con IA.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: `/blog/${SLUG}`,
  ogImage: "ley40mineria.png",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://sgai.cl/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://sgai.cl/blog" },
    { "@type": "ListItem", position: 3, name: TITLE, item: URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://sgai.cl/og/ley40mineria.png",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: { "@type": "Organization", name: "SGAI", url: "https://sgai.cl/" },
  publisher: {
    "@type": "Organization",
    name: "SGAI",
    logo: { "@type": "ImageObject", url: "https://sgai.cl/og/home.png" },
  },
  mainEntityOfPage: URL,
  about: [
    { "@type": "Thing", name: "Ley 21.561" },
    { "@type": "Thing", name: "Procurement minero" },
    { "@type": "Thing", name: "BPO abastecimiento" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La Ley de 40 horas aplica a faenas con jornada excepcional 4x3 o 7x7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las jornadas del artículo 38 mantienen su estructura pero el tope promedio semanal también baja. Muchos contratos firmados bajo 44 horas necesitan addendum para no exceder el nuevo tope.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué cláusulas contractuales típicamente hay que modificar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bonos de producción atados a horas, cálculos de overtime, dimensionamiento de dotación comprometida, penalidades por no-cumplimiento de horas mínimas y, en servicios mineros, el cálculo del HH facturable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta fiscalmente no adaptar los contratos a tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La DT sanciona con 1 a 60 UTM por trabajador afectado. En una faena de 500 trabajadores con exceso promedio de 2h semanales, el riesgo acumulado mensual supera los CLP 60 MM sin contar costo reputacional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo ayuda un BPO de procurement a esta transición?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leemos tu stock contractual completo con agentes de IA, detectamos las cláusulas impactadas, proponemos addendums y coordinamos con los proveedores. La plataforma SGAI monitorea el cumplimiento post-modificación.",
      },
    },
  ],
};

export default function BlogLey40HorasContratosMineros() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="gradient-hero pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Breadcrumbs
              theme="dark"
              items={[
                { name: "Inicio", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Ley 40 horas en contratos mineros" },
              ]}
            />
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-sgai-copper hover:text-sgai-copper-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>

          <h1 className="font-heading text-4xl md:text-5xl text-white mb-5 leading-tight">
            Ley de 40 horas en contratos mineros: cómo absorbe el impacto un BPO de procurement
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mb-6">
            Faltan 8 días para que la jornada baje a 42 horas. En una faena 4x3
            o 7x7 eso re-escribe cláusulas, overtime y compliance. Quien opere con
            Ariba + Excel lo verá como ajuste de nómina; quien opere con un BPO
            de procurement lo verá como tarea ejecutada.
          </p>
          <div className="flex items-center gap-4 text-sm text-sgai-steel">
            <time dateTime="2026-04-18">18 abril 2026</time>
            <span>·</span>
            <span>SGAI — Equipo BPO</span>
            <span>·</span>
            <span>Lectura: 8 min</span>
          </div>
        </div>
      </section>

      <section className="bg-sgai-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <nav
            aria-label="Tabla de contenidos"
            className="bg-sgai-ice border border-gray-200 rounded-xl p-5 mb-12"
          >
            <p className="font-semibold text-sgai-midnight mb-3">En este artículo</p>
            <ol className="list-decimal pl-5 space-y-1 text-sgai-midnight/90">
              <li><a href="#calendario" className="hover:underline">Calendario de la Ley 21.561 (tramo 2026)</a></li>
              <li><a href="#contratos" className="hover:underline">Qué pasa con tus contratos vigentes</a></li>
              <li><a href="#oc" className="hover:underline">Impacto en órdenes de compra recurrentes</a></li>
              <li><a href="#bpo" className="hover:underline">Cómo un BPO absorbe el cambio sin recontratar</a></li>
              <li><a href="#plataforma" className="hover:underline">Qué revisa la plataforma SGAI en tu stock contractual</a></li>
              <li><a href="#caso" className="hover:underline">Caso: faena cuprífera con 180 contratos activos</a></li>
              <li><a href="#faq" className="hover:underline">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="space-y-6 text-sgai-midnight/90 leading-relaxed text-lg">
            <p>
              La Ley 21.561 bajó la jornada ordinaria de 45 a 44 horas en abril
              de 2024, pasa a 42 horas el 26 de abril de 2026 y aterrizará en 40
              el 26 de abril de 2028. En la mayoría de los artículos que hay
              sobre esto el foco está en RR.HH. En minería, el problema real
              está en el lugar que menos se mira: el <strong>contrato</strong>.
              Cada cláusula que liga horas a pagos, a dimensionamiento o a
              cumplimiento tiene que revisarse. Y cada compañía tiene entre 80 y
              300 contratos activos con proveedores.
            </p>

            <h2
              id="calendario"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Scale className="w-7 h-7 mr-3 text-sgai-copper" />
              1. Calendario de la Ley 21.561
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-sgai-midnight text-white">
                    <th className="border border-slate-700 p-3 text-left">Fecha</th>
                    <th className="border border-slate-700 p-3 text-left">Jornada semanal</th>
                    <th className="border border-slate-700 p-3 text-left">Lo que se debe corregir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3">26 abril 2024</td>
                    <td className="border border-gray-200 p-3">44 horas</td>
                    <td className="border border-gray-200 p-3">Ya aplicado (gran parte corregida tarde)</td>
                  </tr>
                  <tr className="bg-sgai-copper/10">
                    <td className="border border-gray-200 p-3"><strong>26 abril 2026</strong></td>
                    <td className="border border-gray-200 p-3"><strong>42 horas</strong></td>
                    <td className="border border-gray-200 p-3"><strong>Addendums, recalcular overtime, revisar HH facturable</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">26 abril 2028</td>
                    <td className="border border-gray-200 p-3">40 horas</td>
                    <td className="border border-gray-200 p-3">Mismo ejercicio, mayor impacto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              id="contratos"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <FileText className="w-7 h-7 mr-3 text-sgai-copper" />
              2. Qué pasa con tus contratos vigentes
            </h2>
            <p>
              Un contrato minero típico con servicios operativos o mantención
              contiene al menos cuatro cláusulas atadas a horas. Cuando la ley
              baja el tope, todas se mueven:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dimensionamiento mínimo comprometido</strong>. &quot;El
                contratista garantiza 1.200 HH semanales de operador tractor&quot;.
                Si esa cantidad se calculó sobre 44 horas y ahora son 42, el
                contratista necesita +4,5% dotación para cumplir o renegociar la
                base.
              </li>
              <li>
                <strong>Bonos de producción con piso horario</strong>. &quot;Se
                paga bono si el servicio entrega al menos X toneladas y el
                trabajador cumple 40h efectivas&quot;. El piso horario queda
                automáticamente adaptado, pero el bono no.
              </li>
              <li>
                <strong>Cálculo de HH facturable</strong>. Los contratos que
                facturan por HH necesitan especificar cómo se calcula una hora
                extra bajo la nueva base. El multiplicador cambió.
              </li>
              <li>
                <strong>Penalidades por no-cubrimiento</strong>. &quot;Se
                descuenta $X por hora no-cubierta&quot;. Quedan sub-calculadas si
                el punto de partida es el contrato viejo.
              </li>
            </ul>

            <p>
              En una faena con 180 contratos activos, rastrear estas cláusulas a
              mano toma entre 400 y 700 HH de abogados y analistas. Gran parte
              del impacto fiscal proviene de que ese trabajo no se hizo o se
              hizo tarde.
            </p>

            <h2
              id="oc"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Workflow className="w-7 h-7 mr-3 text-sgai-copper" />
              3. Impacto en órdenes de compra recurrentes
            </h2>
            <p>
              Más silencioso pero igual de caro: las OC recurrentes (mantención,
              servicios, suministros recurrentes) vienen con tarifas pactadas
              sobre supuestos de dotación y horas. Si tu OC dice &quot;Servicio de
              catering 24/7 para 650 personas en régimen 7x7&quot; y la base de
              turnos cambia, el proveedor te va a presentar un re-cálculo. El
              momento en que lo haga decide cuánto pagas.
            </p>
            <p>
              Nuestro trabajo común con áreas de abastecimiento: marcar el 100%
              de OC recurrentes con un flag de &quot;jornada-sensible&quot;,
              filtrar las que vencen en los próximos 12 meses, y renegociar
              antes de que el proveedor levante la mano primero.
            </p>

            <h2
              id="bpo"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Users className="w-7 h-7 mr-3 text-sgai-copper" />
              4. Cómo un BPO absorbe el cambio sin recontratar
            </h2>
            <p>
              Tu equipo interno ya tiene trabajo. Pedirles que paren la operación
              para revisar 180 contratos en un mes no es realista. Un BPO de
              procurement se monta así:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Semana 1-2</strong>. Ingesta completa del repositorio
                contractual. Normalmente son PDFs en SharePoint y un listado en
                Ariba. Los leemos con agentes de IA y levantamos las cláusulas
                horarias.
              </li>
              <li>
                <strong>Semana 2-3</strong>. Clasificación de riesgo por
                contrato (alto / medio / bajo), priorizado por valor anual y por
                si vence el próximo ejercicio.
              </li>
              <li>
                <strong>Semana 3-5</strong>. Redacción de addendums por lote y
                coordinación con contraparte (nuestros ingenieros hacen la
                llamada, tu legal solo revisa y firma).
              </li>
              <li>
                <strong>Semana 5 en adelante</strong>. Monitoreo post-firma en
                la plataforma SGAI: alertas si un proveedor factura por fuera
                del nuevo esquema, si una OC vence sin ser renegociada, o si un
                trabajador del contratista excede el tope.
              </li>
            </ol>

            <h2
              id="plataforma"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <AlertTriangle className="w-7 h-7 mr-3 text-sgai-copper" />
              5. Qué revisa la plataforma SGAI en tu stock contractual
            </h2>
            <p>
              Los módulos de IA que corren sobre tu repositorio contractual
              cubren cinco frentes específicos para este cambio:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Detector de cláusulas sensibles a jornada</strong>.
                Marca automáticamente cada cláusula que mencione horas, turnos,
                HH, dotación mínima, bonos de producción o penalidades.
              </li>
              <li>
                <strong>Simulador de impacto</strong>. Aplica la nueva jornada
                sobre el contrato y proyecta cambio en costo, HH necesarias y
                riesgo fiscal.
              </li>
              <li>
                <strong>Generador de addendums</strong>. Plantilla por tipología
                de contrato (servicios, suministros, mantención, consultoría),
                pre-llenada con los campos cambiados.
              </li>
              <li>
                <strong>Monitor de desfinanciamiento</strong>. Si un contrato
                empieza a consumir más presupuesto del estimado tras la
                transición, alerta antes del cierre del mes.
              </li>
              <li>
                <strong>Tablero de compliance</strong>. Registro auditable de
                qué se revisó, quién firmó y cuándo. Útil si la DT pregunta.
              </li>
            </ul>

            <h2
              id="caso"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <TrendingDown className="w-7 h-7 mr-3 text-sgai-copper" />
              6. Caso: faena cuprífera con 180 contratos activos
            </h2>
            <p>
              Faena tipo región de Antofagasta. Dotación directa 2.100
              personas, dotación contratista ~3.500 adicionales. 180 contratos
              activos con proveedores. Presupuesto anual de contratos: USD 240
              MM.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-sgai-midnight text-white">
                    <th className="border border-slate-700 p-3 text-left">Indicador</th>
                    <th className="border border-slate-700 p-3 text-left">Sin BPO (ajuste tardío)</th>
                    <th className="border border-slate-700 p-3 text-left">Con BPO SGAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3">Contratos revisados a tiempo</td>
                    <td className="border border-gray-200 p-3">~40%</td>
                    <td className="border border-gray-200 p-3">100%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">HH de abogado/analista consumidas</td>
                    <td className="border border-gray-200 p-3">520 h</td>
                    <td className="border border-gray-200 p-3">80 h</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Sobrecosto estimado primer año</td>
                    <td className="border border-gray-200 p-3">USD 1.8 MM</td>
                    <td className="border border-gray-200 p-3">USD 0.3 MM</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">Incidencias DT por contratista</td>
                    <td className="border border-gray-200 p-3">9</td>
                    <td className="border border-gray-200 p-3">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              id="faq"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Clock className="w-7 h-7 mr-3 text-sgai-copper" />
              7. Preguntas frecuentes
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Mi área legal puede quedar fuera del loop?
                </h3>
                <p>
                  No. El BPO prepara, negocia y deja listos los addendums. Tu
                  legal firma y aprueba. Ese control no se delega.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Qué pasa con Ariba, JDE o SAP S/4 que ya tenemos?
                </h3>
                <p>
                  Se integran directo. La plataforma SGAI no reemplaza tu ERP;
                  se sienta encima y agrega la capa de inteligencia que hoy no
                  tiene (revisión de BT con IA, simuladores, alertas).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Cuánto demora arrancar?
                </h3>
                <p>
                  Entre 2 y 6 semanas para tener operativa la primera ola de
                  contratos críticos. Rollout completo en 12-16 semanas.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-sgai-midnight to-sgai-slate rounded-2xl text-white">
              <h3 className="font-heading text-2xl mb-3">
                Quedan 8 días para el 26 de abril.
              </h3>
              <p className="text-gray-300 mb-6">
                Si tu área de abastecimiento todavía está intentando armar el
                listado de contratos impactados, conversemos esta semana. Te
                entregamos el diagnóstico del primer lote sin costo.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 gradient-copper text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Agendar conversación
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 text-sm text-sgai-steel border-t border-gray-200 pt-6">
              <p>
                <strong>Fuentes:</strong>{" "}
                <a
                  href="https://www.bcn.cl/leychile/navegar?idNorma=1191638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sgai-copper hover:underline"
                >
                  Ley 21.561 (BCN)
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.dt.gob.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sgai-copper hover:underline"
                >
                  Dirección del Trabajo
                </a>{" "}
                · Cochilco. Este artículo es guía operacional, no asesoría
                legal; valida con tu abogado laboral antes de redactar
                addendums.
              </p>
              <p className="mt-3">
                Lee también:{" "}
                <Link
                  href="/blog/ley-40-horas-contratos-indexados-abastecimiento"
                  className="text-sgai-copper hover:underline"
                >
                  Ley 40h en contratos indexados (cláusulas β/γ)
                </Link>{" "}
                ·{" "}
                <Link href="/plataforma" className="text-sgai-copper hover:underline">
                  Plataforma SGAI
                </Link>{" "}
                ·{" "}
                <Link href="/servicio-bpo" className="text-sgai-copper hover:underline">
                  Servicio BPO
                </Link>{" "}
                ·{" "}
                <Link href="/industrias/mineria" className="text-sgai-copper hover:underline">
                  Abastecimiento en minería
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
