"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: "dark" | "light";
}

export function FAQAccordion({ items, theme = "light" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "rounded-xl border overflow-hidden transition-colors",
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-sgai-slate/50 border-white/5",
              isOpen &&
                (theme === "light"
                  ? "border-sgai-copper/30"
                  : "border-sgai-copper/20")
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-5 text-left transition-colors",
                theme === "light"
                  ? "hover:bg-gray-50"
                  : "hover:bg-white/[0.02]"
              )}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-semibold text-base pr-4",
                  theme === "light" ? "text-sgai-midnight" : "text-white"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180",
                  theme === "light" ? "text-sgai-steel" : "text-gray-400"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div
                    className={cn(
                      "px-6 pb-5 text-sm leading-relaxed",
                      theme === "light" ? "text-sgai-steel" : "text-gray-400"
                    )}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
