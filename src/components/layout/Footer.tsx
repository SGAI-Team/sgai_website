import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

const solutions = [
  { name: "Servicio BPO", href: "/servicio-bpo" },
  { name: "Plataforma SGAI", href: "/plataforma" },
  { name: "Minería", href: "/industrias/mineria" },
  { name: "Energía y Oil & Gas", href: "/industrias/energia" },
  { name: "Construcción", href: "/industrias/construccion" },
];

const company = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="bg-sgai-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl">SGAI</span>
              <span className="block text-sgai-steel text-xs mt-1">
                Abastecimiento Inteligente
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
              BPO especializado y plataforma de procurement con IA para
              industrias intensivas en contratos en Latinoamérica.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Soluciones
            </h4>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-sgai-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-sgai-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@sgai.cl"
                  className="flex items-center gap-2 text-gray-400 text-sm hover:text-sgai-copper transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contacto@sgai.cl
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Santiago, Chile
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 text-sm hover:text-sgai-copper transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; 2026 SGAI SpA &middot; Todos los derechos reservados
          </p>
          <p className="text-gray-600 text-xs">
            Santiago, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
