"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
  theme?: "dark" | "light";
}

export function TeamCard({
  initials,
  name,
  role,
  bio,
  theme = "dark",
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group p-8 rounded-2xl border text-center transition-colors duration-300",
        theme === "dark"
          ? "bg-sgai-slate/50 border-white/5 hover:border-sgai-copper/40 hover:shadow-[0_20px_60px_-20px_rgba(200,117,51,0.35)]"
          : "bg-white border-gray-200 hover:border-sgai-copper/40 hover:shadow-[0_20px_60px_-20px_rgba(200,117,51,0.25)]"
      )}
    >
      <motion.div
        className="w-20 h-20 rounded-full gradient-copper mx-auto mb-5 flex items-center justify-center shadow-lg shadow-sgai-copper/30"
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 320, damping: 14 }}
      >
        <span className="text-white font-heading text-2xl">{initials}</span>
      </motion.div>
      <h3
        className={cn(
          "font-heading text-xl mb-1",
          theme === "dark" ? "text-white" : "text-sgai-midnight"
        )}
      >
        {name}
      </h3>
      <p className="text-sgai-copper font-medium text-sm mb-4">{role}</p>
      <p
        className={cn(
          "text-sm leading-relaxed",
          theme === "dark" ? "text-gray-400" : "text-sgai-steel"
        )}
      >
        {bio}
      </p>
    </motion.div>
  );
}
