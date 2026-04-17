import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  theme?: "dark" | "light";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  theme = "light",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02]",
        theme === "light"
          ? "bg-white border-gray-200 hover:border-sgai-copper/30 hover:shadow-[0_0_30px_rgba(200,117,51,0.06)]"
          : "bg-sgai-slate/50 border-white/5 hover:border-sgai-copper/20 hover:shadow-[0_0_30px_rgba(200,117,51,0.08)]"
      )}
    >
      <div className="w-10 h-10 rounded-lg gradient-copper flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3
        className={cn(
          "font-semibold text-lg mb-2",
          theme === "light" ? "text-sgai-midnight" : "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm leading-relaxed",
          theme === "light" ? "text-sgai-steel" : "text-gray-400"
        )}
      >
        {description}
      </p>
    </div>
  );
}
