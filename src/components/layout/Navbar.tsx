"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Minería", href: "/industrias/mineria" },
  { name: "Energía y Oil & Gas", href: "/industrias/energia" },
  { name: "Ingeniería y Construcción", href: "/industrias/construccion" },
];

const navLinks = [
  { name: "Servicio BPO", href: "/servicio-bpo" },
  { name: "Plataforma", href: "/plataforma" },
  { name: "Industrias", href: "/industrias", children: industries },
  { name: "Nosotros", href: "/nosotros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-sgai-midnight/95 backdrop-blur-md",
          scrolled
            ? "border-b border-white/5 shadow-lg"
            : "border-b border-white/0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl text-white">SGAI</span>
            <span className="hidden sm:block text-[11px] text-sgai-steel leading-tight">
              abastecimiento
              <br />
              inteligente
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.children && setDropdownOpen(true)
                }
                onMouseLeave={() =>
                  link.children && setDropdownOpen(false)
                }
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-sgai-copper"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-sgai-midnight border border-white/10 rounded-xl shadow-xl py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                        <div className="border-t border-white/5 mt-1 pt-1">
                          <span className="block px-4 py-2 text-xs text-sgai-steel">
                            Más industrias (próximamente)
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA + Mobile burger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="hidden lg:inline-flex items-center gap-2 gradient-copper text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Solicita Demo
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-sgai-midnight/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <Link
                    href={link.href}
                    className="text-white text-2xl font-heading hover:text-sgai-copper transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="mt-3 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-white/50 text-sm hover:text-sgai-copper transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  href="/contacto"
                  className="gradient-copper text-white font-semibold px-8 py-3 rounded-lg inline-block mt-4"
                >
                  Solicita Demo &rarr;
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
