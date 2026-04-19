import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  Calculator,
  AlertTriangle,
  FileText,
  Workflow,
  TrendingDown,
  Clock,
} from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IndexedContractDiagram } from "@/components/IndexedContractDiagram";
import { ProcurementCycleDiagram } from "@/components/ProcurementCycleDiagram";

const SLUG = "ley-40-horas-contratos-indexados-abastecimiento";
const URL = `https://sgai.cl/blog/${SLUG}`;
const TITLE =
  "Ley de 40 horas y contratos indexados: la matemática que hay que reescribir";
const DESCRIPTION =
  "La Ley 21.561 no solo cambia jornadas: obliga a recalcular la fórmula de indexación de cientos de contratos de abastecimiento. Qué componentes se afectan, cómo renegociar y quién paga la diferencia.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: `/blog/${SLUG}`,
  ogImage: "ley40indexados.png",
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://sgai.cl/og/ley40indexados.png",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  author: { "@type": "Organization", name: "SGAI", url: "https://sgai.cl/" },
  publisher: {
    "@type": "Organization",
    name: "SGAI",
    logo: { "@type": "ImageObject", url: "https://sgai.cl/og/home.png" },
  },
  mainEntityOfPage: URL,
  about: [
    { "@type": "Thing", name: "Ley 21.561 de 40 horas" },
    { "@type": "Thing", name: "Contratos indexados" },
    { "@type": "Thing", name: "Procurement minero" },
    { "@type": "Thing", name: "Cláusulas de ajuste" },
  ],
  keywords:
    "ley 40 horas, contratos indexados, procurement, abastecimiento, minería, ajuste de precios, HH, ICC, IPC, Chile",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un contrato indexado en procurement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un contrato cuyo precio no está fijo en el tiempo: se reajusta periódicamente según variables externas o internas. Típicamente por IPC, Índice de Costos de Construcción (ICC), variación de horas-hombre pactadas, dotación mínima, productividad por operador o sueldo mínimo. En minería y construcción es el estándar para contratos largos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué la Ley 40 horas afecta los indexadores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque muchos indexadores usan HH (horas-hombre) o productividad por trabajador como variable. La Ley 21.561 baja el tope semanal de 44 a 42 horas en 2026 y a 40 en 2028. Los indexadores calculados sobre 44 horas quedan subestimados: si no se reescriben, el contratista factura menos de lo debido y presiona por revisión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién paga la diferencia cuando el indexador hay que recalcular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del contrato. Si la cláusula de reajuste es automática y objetiva, el mandante absorbe. Si requiere adenda explícita, se negocia. En la práctica la mitad del riesgo lo asume cada parte — pero quien llega tarde a la mesa paga más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos contratos de una faena suelen estar indexados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 40% y 70% del stock contractual de una faena minera tipo. Los más comunes son servicios de mantención, operadores de equipos, transporte, casino y servicios generales — casi todo lo que tiene componente fuerte de mano de obra.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo detectar automáticamente qué contratos tienen indexadores afectados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Un agente de IA que lea tu biblioteca contractual y busque patrones de cláusulas ('HH', 'horas-hombre', 'jornada', 'productividad', 'dotación mínima', 'tope semanal') marca los de riesgo en minutos. Ese es uno de los casos de uso que más ROI entrega la plataforma SGAI en el primer trimestre.",
      },
    },
  ],
};

export default function LeyContratosIndexadosPost() {
  return (
    <>
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
                { name: "Ley 40h en contratos indexados" },
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
            Ley de 40 horas y contratos indexados: la matemática que hay que reescribir
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mb-6">
            En los contratos de servicios mineros, de mantención o de operación
            de equipos, el precio no está fijo: sube o baja según una fórmula
            de reajuste. Esa fórmula suele tener una variable atada a horas-hombre
            o productividad. La Ley 21.561 la rompió. Esto explica cómo se
            arregla antes de que lo haga un arbitraje.
          </p>
          <div className="flex items-center gap-4 text-sm text-sgai-steel">
            <time dateTime="2026-04-19">19 abril 2026</time>
            <span>·</span>
            <span>SGAI — Equipo Contractual</span>
            <span>·</span>
            <span>Lectura: 11 min</span>
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
              <li><a href="#que-es" className="hover:underline">Qué es un contrato indexado y por qué importa ahora</a></li>
              <li><a href="#anatomia" className="hover:underline">Anatomía de un indexador típico</a></li>
              <li><a href="#impacto" className="hover:underline">Qué variables rompe exactamente la Ley 21.561</a></li>
              <li><a href="#ejemplos" className="hover:underline">5 ejemplos concretos: mantención, operadores, transporte, casino, servicios</a></li>
              <li><a href="#quien-paga" className="hover:underline">Quién paga la diferencia (y cuándo)</a></li>
              <li><a href="#como-gestionarlo" className="hover:underline">Cómo gestionarlo desde el área de abastecimiento</a></li>
              <li><a href="#faq" className="hover:underline">Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="space-y-6 text-sgai-midnight/90 leading-relaxed text-lg">
            <p>
              Hablamos mucho de cómo la Ley 21.561 afecta a los trabajadores, a
              los sindicatos y a las plantillas de RR.HH. Muy poco de lo que hace
              con el procurement. Y en una faena minera o un proyecto de
              construcción, entre el 40% y el 70% de los contratos vigentes son
              <strong> indexados</strong>: tienen una fórmula que los reajusta
              en el tiempo. Esa fórmula casi siempre depende de variables que
              la ley acaba de mover. Quien no la reescriba a tiempo, paga —
              en dinero directo o en tiempo de abogados — la diferencia.
            </p>

            <p>
              Este artículo es la guía técnica-operacional para que un área de
              abastecimiento entienda qué cláusulas están en riesgo, cómo
              priorizarlas y qué hacer antes del 26 de abril cuando entra en
              vigencia el tramo de 42 horas.
            </p>

            <h2
              id="que-es"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Scale className="w-7 h-7 mr-3 text-sgai-copper" />
              1. Qué es un contrato indexado y por qué importa ahora
            </h2>

            <p>
              Un contrato indexado es cualquier contrato cuyo precio no está
              fijado en el tiempo. Tiene una base inicial (P₀) y una fórmula de
              reajuste que lo actualiza cada cierto período (mensual, trimestral,
              anual). La fórmula suele combinar varios factores:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Inflación (IPC)</strong>: variación del Índice de Precios
                al Consumidor publicado por INE.
              </li>
              <li>
                <strong>ICC</strong>: Índice de Costos de la Construcción
                (cuando aplica a EPC/EPCM).
              </li>
              <li>
                <strong>Horas-hombre (HH) pactadas</strong>: costo del HH
                acordado al inicio, que se ajusta según reajustes salariales o
                cambios de dotación.
              </li>
              <li>
                <strong>Productividad esperada</strong>: unidades producidas o
                servicios ejecutados por trabajador por jornada.
              </li>
              <li>
                <strong>Sueldo mínimo / reajustes colectivos</strong>: cuando la
                base de mano de obra está atada al piso legal o a un convenio.
              </li>
            </ul>

            <p>
              En minería chilena el indexador HH es prácticamente universal en
              contratos de servicios operativos. Y es justamente ese componente
              el que la Ley 40h obliga a revisar.
            </p>

            <h2
              id="anatomia"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Calculator className="w-7 h-7 mr-3 text-sgai-copper" />
              2. Anatomía de un indexador típico
            </h2>

            <p>
              Un contrato indexado de servicios mineros típicamente tiene una
              fórmula con esta forma:
            </p>

            <div className="my-8 bg-white rounded-2xl p-6 border border-gray-200 overflow-x-auto">
              <IndexedContractDiagram className="w-full h-auto min-w-[720px]" />
            </div>

            <p>
              Los coeficientes <strong>α, β, γ</strong> son los pesos de cada
              variable en el reajuste y los define el contrato. En contratos de
              mano de obra intensiva suele pesar más β (HH) que α (IPC). Por
              ejemplo:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-sgai-midnight text-white">
                    <th className="border border-slate-700 p-3 text-left">Tipo de contrato</th>
                    <th className="border border-slate-700 p-3 text-left">α (IPC)</th>
                    <th className="border border-slate-700 p-3 text-left">β (HH)</th>
                    <th className="border border-slate-700 p-3 text-left">γ (Productividad)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3">Servicios de mantención</td>
                    <td className="border border-gray-200 p-3">0.3</td>
                    <td className="border border-gray-200 p-3"><strong className="text-sgai-copper">0.55</strong></td>
                    <td className="border border-gray-200 p-3">0.15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">Operación equipos móviles</td>
                    <td className="border border-gray-200 p-3">0.25</td>
                    <td className="border border-gray-200 p-3"><strong className="text-sgai-copper">0.6</strong></td>
                    <td className="border border-gray-200 p-3">0.15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Transporte</td>
                    <td className="border border-gray-200 p-3">0.4</td>
                    <td className="border border-gray-200 p-3">0.45</td>
                    <td className="border border-gray-200 p-3">0.15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">Casino minero</td>
                    <td className="border border-gray-200 p-3">0.35</td>
                    <td className="border border-gray-200 p-3"><strong className="text-sgai-copper">0.5</strong></td>
                    <td className="border border-gray-200 p-3">0.15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Suministros (materiales)</td>
                    <td className="border border-gray-200 p-3">0.85</td>
                    <td className="border border-gray-200 p-3">0.05</td>
                    <td className="border border-gray-200 p-3">0.1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Cuanto mayor sea β, más impacto tiene la Ley 40h en el precio. En
              servicios de mantención y operación (β ≈ 0,55–0,6), 2 horas
              menos por semana representan un recalculo obligatorio del 4,5%
              sobre el componente HH. En un contrato anual de USD 8 MM, son
              USD 200 K de diferencia por año.
            </p>

            <h2
              id="impacto"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <AlertTriangle className="w-7 h-7 mr-3 text-sgai-copper" />
              3. Qué variables rompe exactamente la Ley 21.561
            </h2>

            <p>
              De las cinco variables típicas del indexador, la ley afecta
              directamente dos: <strong>HH pactadas</strong> y
              <strong> productividad esperada</strong>. Indirectamente afecta
              una tercera: <strong>reajustes colectivos</strong>, porque los
              sindicatos suelen renegociar al mismo tiempo que se baja la
              jornada.
            </p>

            <h3 className="text-xl font-semibold text-sgai-midnight mt-6 mb-2">
              Variable β — Horas-hombre pactadas
            </h3>
            <p>
              El contrato típico dice: &quot;el contratista garantiza 1.200 HH
              semanales de operador de planta&quot;. Ese número se calculó sobre
              una jornada de 44 horas: 27,3 trabajadores equivalentes. Con 42
              horas, necesita 28,6 trabajadores para entregar las mismas HH.
              Pero el precio unitario del HH sigue siendo el mismo. Resultado: el
              contratista cubre con gente extra el faltante y reclama ajuste.
            </p>

            <h3 className="text-xl font-semibold text-sgai-midnight mt-6 mb-2">
              Variable γ — Productividad por trabajador
            </h3>
            <p>
              Si el contrato dice &quot;2,4 toneladas procesadas por operador por
              jornada&quot;, está asumiendo jornada completa de 44 horas. Con 42
              horas efectivas, la productividad nominal cae ~4,5%. El indicador
              entero se recalcula.
            </p>

            <h3 className="text-xl font-semibold text-sgai-midnight mt-6 mb-2">
              Indirecta — Reajustes colectivos
            </h3>
            <p>
              Los sindicatos suelen pedir reajuste salarial al mismo tiempo que
              se baja la jornada: &quot;si trabajo menos horas quiero mantener
              el ingreso&quot;. Cuando se negocia y se otorga, la tarifa base
              del HH sube. Doble impacto: β se dispara por jornada y por tarifa.
            </p>

            <h2
              id="ejemplos"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <Workflow className="w-7 h-7 mr-3 text-sgai-copper" />
              4. Cinco ejemplos concretos
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-sgai-midnight text-white">
                    <th className="border border-slate-700 p-3 text-left">Contrato</th>
                    <th className="border border-slate-700 p-3 text-left">Valor anual</th>
                    <th className="border border-slate-700 p-3 text-left">Ajuste estimado 44h → 42h</th>
                    <th className="border border-slate-700 p-3 text-left">Impacto CLP/USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3">Mantención mecánica faena</td>
                    <td className="border border-gray-200 p-3">USD 12 MM</td>
                    <td className="border border-gray-200 p-3">+2,5%</td>
                    <td className="border border-gray-200 p-3 text-sgai-copper font-semibold">+USD 300 K</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">Operación equipos extracción</td>
                    <td className="border border-gray-200 p-3">USD 28 MM</td>
                    <td className="border border-gray-200 p-3">+2,7%</td>
                    <td className="border border-gray-200 p-3 text-sgai-copper font-semibold">+USD 755 K</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Transporte intramina</td>
                    <td className="border border-gray-200 p-3">USD 6 MM</td>
                    <td className="border border-gray-200 p-3">+2%</td>
                    <td className="border border-gray-200 p-3 text-sgai-copper font-semibold">+USD 120 K</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3">Casino 1.200 personas</td>
                    <td className="border border-gray-200 p-3">USD 4,5 MM</td>
                    <td className="border border-gray-200 p-3">+2,2%</td>
                    <td className="border border-gray-200 p-3 text-sgai-copper font-semibold">+USD 99 K</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3">Servicios generales (aseo, portería)</td>
                    <td className="border border-gray-200 p-3">USD 2 MM</td>
                    <td className="border border-gray-200 p-3">+2,4%</td>
                    <td className="border border-gray-200 p-3 text-sgai-copper font-semibold">+USD 48 K</td>
                  </tr>
                  <tr className="bg-sgai-ice font-semibold">
                    <td className="border border-gray-200 p-3" colSpan={3}>
                      Total impacto en una faena mediana (5 contratos tipo)
                    </td>
                    <td className="border border-gray-200 p-3 text-sgai-copper">
                      +USD 1,32 MM / año
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Y son solo cinco contratos. Una faena real tiene 40–80 contratos
              con componente de HH. El acumulado anual fácilmente supera USD 4
              MM en un solo ejercicio.
            </p>

            <h2
              id="quien-paga"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <FileText className="w-7 h-7 mr-3 text-sgai-copper" />
              5. Quién paga la diferencia (y cuándo)
            </h2>

            <p>
              Depende de cómo está redactada la cláusula de reajuste. Cuatro
              escenarios típicos:
            </p>

            <div className="space-y-4 my-6">
              <div className="border-l-4 border-sgai-copper pl-5 py-2">
                <p className="font-semibold text-sgai-midnight">
                  Cláusula con reajuste automático vinculado a jornada legal
                </p>
                <p className="text-sgai-steel text-base">
                  El mandante absorbe el 100%. El contrato se actualiza solo al
                  entrar en vigor la nueva jornada. Es el caso ideal para el
                  contratista y el más caro para el mandante si no lo anticipó.
                </p>
              </div>
              <div className="border-l-4 border-sgai-copper/70 pl-5 py-2">
                <p className="font-semibold text-sgai-midnight">
                  Cláusula con fórmula fija (β hardcodeado)
                </p>
                <p className="text-sgai-steel text-base">
                  Requiere addendum. Se negocia en partes: habitualmente 50/50.
                  Quien llega antes a la mesa tiene más palanca.
                </p>
              </div>
              <div className="border-l-4 border-sgai-copper/40 pl-5 py-2">
                <p className="font-semibold text-sgai-midnight">
                  Cláusula de precio fijo sin reajuste por jornada
                </p>
                <p className="text-sgai-steel text-base">
                  El contratista asume el 100%. En la práctica muchos piden
                  renegociar invocando &quot;hecho del príncipe&quot; (cambio
                  normativo imprevisible). A veces se concede parcialmente.
                </p>
              </div>
              <div className="border-l-4 border-sgai-copper/25 pl-5 py-2">
                <p className="font-semibold text-sgai-midnight">
                  Contrato vencido o en renovación
                </p>
                <p className="text-sgai-steel text-base">
                  Ventana de oportunidad. La nueva licitación ya incorpora la
                  jornada de 42 horas desde la línea de base, evitando el
                  conflicto. Revisar cuáles vencen en los próximos 12 meses es
                  la primera tarea.
                </p>
              </div>
            </div>

            <h2
              id="como-gestionarlo"
              className="font-heading text-3xl text-sgai-midnight mt-14 mb-4 flex items-center"
            >
              <TrendingDown className="w-7 h-7 mr-3 text-sgai-copper" />
              6. Cómo gestionarlo desde el área de abastecimiento
            </h2>

            <p>
              La plataforma SGAI cubre este ejercicio dentro del ciclo completo
              de procurement:
            </p>

            <div className="my-8 bg-white rounded-2xl p-6 border border-gray-200 overflow-x-auto">
              <ProcurementCycleDiagram className="w-full h-auto min-w-[720px]" />
            </div>

            <p>
              Específicamente, el trabajo se hace entre los módulos 3
              (Documentos y Contratos) y 5 (Administración y Auditoría):
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Detección automática</strong>. Un agente de IA lee la
                biblioteca contractual y marca los contratos con cláusulas β/γ
                sensibles a jornada. En una faena típica procesa 200 contratos
                en &lt; 2 horas.
              </li>
              <li>
                <strong>Priorización</strong>. Cruza valor anual × peso β ×
                fecha de próximo reajuste. Sale una lista ordenada de los 10–15
                contratos que mueven el 80% del impacto económico.
              </li>
              <li>
                <strong>Simulación de impacto</strong>. Corre el cálculo para
                cada contrato con la nueva jornada y entrega un número concreto
                en CLP/USD por contrato y agregado.
              </li>
              <li>
                <strong>Generación de addendums</strong>. Plantilla por tipo de
                contrato, pre-llenada con el cálculo. Legal solo revisa y firma.
              </li>
              <li>
                <strong>Monitoreo post-firma</strong>. Verifica que la
                facturación del contratista aplique correctamente la nueva
                fórmula y alerta si hay desviaciones.
              </li>
            </ol>

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
                  ¿Qué pasa si ya se me pasó la fecha del 26 de abril?
                </h3>
                <p>
                  No es el fin del mundo. Los reajustes se aplican
                  retroactivamente desde la fecha efectiva del cambio legal,
                  incluso si el addendum se firma después. Lo caro es el costo
                  de arbitraje si el contratista decide escalar antes de que
                  lleguen a acuerdo.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Aplica también a contratos de suministro de materiales?
                </h3>
                <p>
                  En menor medida. Los contratos con α alto (IPC dominante) se
                  ven mucho menos afectados. Pero si el proveedor incluye
                  servicios asociados (instalación, mantenimiento post-venta),
                  esa porción sí se recalcula.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Cómo se compara el impacto en minería vs construcción EPC?
                </h3>
                <p>
                  En minería pesa más por la masa de contratos operativos
                  (mantención + operación + servicios). En EPC/EPCM el impacto
                  se concentra en el componente de subcontrato directo y en el
                  plazo: una obra de 24 meses puede absorber dos tramos de la
                  ley (42h y 40h) en la misma vida del contrato.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sgai-midnight text-lg mb-1">
                  ¿Un BPO de procurement puede encargarse de esto?
                </h3>
                <p>
                  Sí, es uno de los escenarios donde un BPO especializado
                  demuestra más valor. El equipo de SGAI lo ejecuta de punta a
                  punta: lectura con IA, simulación, redacción de addendum,
                  coordinación con proveedor y monitoreo post-firma. Tu equipo
                  interno queda liberado para lo estratégico.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-sgai-midnight to-sgai-slate rounded-2xl text-white">
              <h3 className="font-heading text-2xl mb-3">
                ¿Cuánto te cuesta no revisar tus contratos indexados?
              </h3>
              <p className="text-gray-300 mb-6">
                En una conversación de 30 minutos revisamos tu stock contractual
                y te damos una estimación del impacto económico. Sin costo, sin
                compromiso.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 gradient-copper text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Agendar conversación
                <ArrowLeft className="w-5 h-5 rotate-180" />
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
                ·{" "}
                <a
                  href="https://www.ine.gob.cl/estadisticas/economia/indices-de-precio-e-inflacion/indice-de-precios-al-consumidor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sgai-copper hover:underline"
                >
                  INE — IPC
                </a>
                . Este artículo es guía operacional, no asesoría legal;
                consulta con tu abogado laboral antes de firmar addendums.
              </p>
              <p className="mt-3">
                Lee también:{" "}
                <Link
                  href="/blog/ley-40-horas-contratos-mineros"
                  className="text-sgai-copper hover:underline"
                >
                  Ley 40h en contratos mineros (general)
                </Link>{" "}
                ·{" "}
                <Link
                  href="/plataforma"
                  className="text-sgai-copper hover:underline"
                >
                  Módulos de la plataforma SGAI
                </Link>{" "}
                ·{" "}
                <Link
                  href="/servicio-bpo"
                  className="text-sgai-copper hover:underline"
                >
                  Servicio BPO
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
