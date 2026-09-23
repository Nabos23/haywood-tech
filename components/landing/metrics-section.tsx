import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    image: "/case-studies/healthcare-portal.png",
    industry: "Healthcare",
    title: "Modernizing a regional patient portal",
    description:
      "Replaced a decade-old scheduling system with a HIPAA-compliant portal, cutting appointment no-shows by 34%.",
    stat: "34%",
    statLabel: "fewer missed appointments",
  },
  {
    image: "/case-studies/logistics-ai.png",
    industry: "Logistics",
    title: "AI-powered dispatch optimization",
    description:
      "Built a machine-learning dispatch engine that re-routes drivers in real time, reducing fuel costs across the fleet.",
    stat: "21%",
    statLabel: "reduction in fuel spend",
  },
  {
    image: "/case-studies/manufacturing-cloud.png",
    industry: "Manufacturing",
    title: "Cloud migration & DevOps overhaul",
    description:
      "Migrated on-prem ERP infrastructure to a resilient cloud architecture with automated CI/CD and 24/7 monitoring.",
    stat: "99.95%",
    statLabel: "infrastructure uptime",
  },
];

export function MetricsSection() {
  return (
    <section id="work" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-xl">
            <p className="text-sm font-mono text-secondary mb-4">/ featured work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Real projects. Measurable outcomes.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-secondary transition-colors shrink-0"
          >
            Discuss your project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={`${study.title} dashboard preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wide text-secondary">
                  {study.industry}
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="text-xs font-mono text-muted-foreground">{study.stat} {study.statLabel}</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
                {study.title}
              </h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                {study.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
