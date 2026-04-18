"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HeroBackground } from "@/components/HeroBackground";
import { trackCtaClick } from "@/lib/analytics";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
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

      {/* Decorative copper arcs */}
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

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Abastecimiento inteligente{" "}
            <span className="gradient-copper-text">
              para empresas que construyen Latinoamérica.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            BPO especializado + plataforma con IA. Gestionamos tus contratos y
            órdenes de compra con equipos expertos y tecnología propia. Minería,
            energía, construcción e industria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contacto"
              onClick={() => trackCtaClick("hero", "Solicita una demo")}
              className="group inline-flex items-center justify-center gap-2 gradient-copper text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all text-lg hover:shadow-[0_10px_40px_-10px_rgba(200,117,51,0.7)] hover:-translate-y-0.5"
            >
              Solicita una demo
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
            <Link
              href="/plataforma"
              onClick={() => trackCtaClick("hero", "Conoce la plataforma")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all text-lg hover:-translate-y-0.5"
            >
              Conoce la plataforma
            </Link>
          </motion.div>

          {/* Credibility line */}
          <motion.p
            className="text-sgai-steel text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Diseñado por profesionales con +12 años en abastecimiento directo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
