import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  href?: string; // último item normalmente sin href
};

/**
 * Breadcrumbs visuales + BreadcrumbList JSON-LD de Schema.org en una sola
 * pieza. Usar en páginas internas (blog posts, industrias, etc.) para:
 * (a) mejorar UX de navegación y jerarquía visual.
 * (b) ayudar a Google a entender la jerarquía del sitio.
 * (c) habilitar los breadcrumbs visuales en el SERP (rich result).
 */
export function Breadcrumbs({
  items,
  theme = "dark",
}: {
  items: BreadcrumbItem[];
  theme?: "dark" | "light";
}) {
  const origin = "https://sgai.cl";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: `${origin}${it.href}` } : {}),
    })),
  };

  const linkClass =
    theme === "dark"
      ? "hover:text-sgai-copper text-sgai-steel"
      : "hover:text-sgai-copper text-sgai-steel";
  const separatorClass = theme === "dark" ? "text-sgai-steel/60" : "text-sgai-steel/60";
  const lastClass = theme === "dark" ? "text-white/90" : "text-sgai-midnight";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-sm flex-wrap gap-y-1"
      >
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={it.name} className="flex items-center">
              {isLast || !it.href ? (
                <span className={lastClass}>{it.name}</span>
              ) : (
                <Link
                  href={it.href}
                  className={`${linkClass} transition-colors`}
                >
                  {it.name}
                </Link>
              )}
              {!isLast ? (
                <ChevronRight className={`w-4 h-4 mx-2 ${separatorClass}`} />
              ) : null}
            </span>
          );
        })}
      </nav>
    </>
  );
}
