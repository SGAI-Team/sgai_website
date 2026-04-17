"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface DualCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
  variant?: "light" | "dark";
}

export function DualCard({
  icon,
  title,
  description,
  href,
  linkText,
  variant = "light",
}: DualCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative flex flex-col p-8 md:p-10 rounded-2xl border transition-colors duration-300 overflow-hidden",
        variant === "light"
          ? "bg-white border-gray-200 hover:border-sgai-copper/40 hover:shadow-[0_20px_60px_-20px_rgba(200,117,51,0.25)]"
          : "bg-sgai-slate border-white/10 hover:border-sgai-copper/40 hover:shadow-[0_20px_60px_-20px_rgba(200,117,51,0.35)]"
      )}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sgai-copper/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
      <motion.div
        className="mb-6"
        whileHover={{ rotate: -6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320, damping: 14 }}
      >
        <div className="w-12 h-12 rounded-xl gradient-copper flex items-center justify-center shadow-lg shadow-sgai-copper/30 text-white [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      </motion.div>
      <h3
        className={cn(
          "font-heading text-2xl mb-4 relative",
          variant === "light" ? "text-sgai-midnight" : "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-base leading-relaxed mb-8 flex-1 relative",
          variant === "light" ? "text-sgai-steel" : "text-gray-400"
        )}
      >
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sgai-copper font-medium hover:text-sgai-copper-light transition-colors relative"
      >
        {linkText}
        <span
          className="transition-transform group-hover:translate-x-1.5"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
