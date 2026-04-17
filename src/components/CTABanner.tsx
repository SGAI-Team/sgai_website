import Link from "next/link";
import { SectionReveal } from "./SectionReveal";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export function CTABanner({ title, subtitle, buttonText, href }: CTABannerProps) {
  return (
    <section className="gradient-copper py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {title}
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-white text-sgai-copper font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors text-lg"
          >
            {buttonText}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
