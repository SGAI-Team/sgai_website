import { cn } from "@/lib/utils";

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  variant?: "horizontal" | "vertical";
  theme?: "dark" | "light";
}

export function TimelineStep({
  number,
  title,
  description,
  isLast = false,
  theme = "dark",
}: TimelineStepProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center text-white font-bold text-sm shrink-0">
          {number}
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-px flex-1 mt-2",
              theme === "dark" ? "bg-white/10" : "bg-gray-200"
            )}
          />
        )}
      </div>
      {/* Content */}
      <div className="pb-10">
        <h3
          className={cn(
            "font-heading text-xl mb-2",
            theme === "dark" ? "text-white" : "text-sgai-midnight"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-base leading-relaxed",
            theme === "dark" ? "text-gray-400" : "text-sgai-steel"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function HorizontalTimeline({
  steps,
  theme = "dark",
}: {
  steps: { number: number; title: string; description: string }[];
  theme?: "dark" | "light";
}) {
  return (
    <>
      {/* Mobile: vertical */}
      <div className="md:hidden">
        {steps.map((step, i) => (
          <TimelineStep
            key={step.number}
            {...step}
            isLast={i === steps.length - 1}
            theme={theme}
          />
        ))}
      </div>
      {/* Desktop: horizontal */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center text-white font-bold text-sm shrink-0">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px",
                    theme === "dark" ? "bg-white/10" : "bg-gray-200"
                  )}
                />
              )}
            </div>
            <h3
              className={cn(
                "font-heading text-xl mb-2",
                theme === "dark" ? "text-white" : "text-sgai-midnight"
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                theme === "dark" ? "text-gray-400" : "text-sgai-steel"
              )}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
