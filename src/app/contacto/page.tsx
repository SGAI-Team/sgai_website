import { pageMetadata } from "@/lib/metadata";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata = pageMetadata({
  title: "Contacto — Agenda una Demo de SGAI",
  description:
    "Conversemos sobre tu operación de abastecimiento. Demo personalizada y diagnóstico gratuito. Respondemos en menos de 24 horas hábiles desde Santiago, Chile.",
  path: "/contacto",
  ogImage: "contacto.png",
});

export default function ContactoPage() {
  return (
    <section className="bg-sgai-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h1 className="font-heading text-4xl md:text-5xl text-sgai-midnight mb-4">
            Conversemos.
          </h1>
          <p className="text-sgai-steel text-lg mb-14 max-w-xl">
            Cuéntanos sobre tu operación y te preparamos una demo personalizada.
            Sin compromiso, sin presión de venta.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.1}>
              <ContactForm />
            </SectionReveal>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <SectionReveal delay={0.2}>
              <div className="bg-sgai-ice rounded-2xl p-8 sticky top-24">
                <h2 className="font-heading text-xl text-sgai-midnight mb-6">
                  Datos de contacto
                </h2>
                <div className="space-y-5">
                  <a
                    href="mailto:contacto.sgai@sgai.cl"
                    className="flex items-center gap-3 text-sgai-steel hover:text-sgai-copper transition-colors"
                  >
                    <Mail className="w-5 h-5 text-sgai-copper" />
                    <span className="text-sm">contacto.sgai@sgai.cl</span>
                  </a>
                  <div className="flex items-center gap-3 text-sgai-steel">
                    <MapPin className="w-5 h-5 text-sgai-copper" />
                    <span className="text-sm">Santiago, Chile</span>
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sgai-steel hover:text-sgai-copper transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-sgai-copper" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8">
                  <h3 className="font-semibold text-sgai-midnight text-sm mb-3">
                    ¿Qué pasa después?
                  </h3>
                  <ol className="space-y-3 text-sgai-steel text-sm">
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full gradient-copper text-white text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      Respondemos en menos de 24 horas hábiles
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full gradient-copper text-white text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      Coordinamos una llamada de 30 minutos
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full gradient-copper text-white text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      Preparamos una demo personalizada
                    </li>
                  </ol>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
