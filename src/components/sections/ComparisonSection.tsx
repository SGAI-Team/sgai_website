import { ComparisonTable } from "@/components/ComparisonTable";
import { SectionReveal } from "@/components/SectionReveal";

export function ComparisonSection() {
  return (
    <section className="section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-sgai-midnight text-center mb-14">
            Lo que otros cobran aparte, nosotros lo incluimos.
          </h2>
        </SectionReveal>
        <ComparisonTable />
      </div>
    </section>
  );
}
