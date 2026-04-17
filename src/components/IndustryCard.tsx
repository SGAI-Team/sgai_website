"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  comingSoon?: boolean;
}

export function IndustryCard({
  title,
  description,
  href,
  linkText = "Ver más",
  comingSoon = false,
}: IndustryCardProps) {
  const content = (
    <motion.div
      whileHover={!comingSoon ? { y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-8 h-full transition-colors duration-300",
        "bg-sgai-slate/80 border-white/5",
        !comingSoon && "hover:border-sgai-copper/40 cursor-pointer"
      )}
    >
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-sgai-copper/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <h3 className="font-heading text-xl text-white mb-3 relative">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 relative">
        {description}
      </p>
      <div className="relative">
        {comingSoon ? (
          <span className="text-sgai-steel text-sm">Próximamente</span>
        ) : (
          <span className="inline-flex items-center gap-2 text-sgai-copper text-sm font-medium group-hover:text-sgai-copper-light transition-colors">
            {linkText}
            <span
              className="transition-transform group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </span>
        )}
      </div>
    </motion.div>
  );

  if (href && !comingSoon) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
