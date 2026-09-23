const steps = [
  {
    number: "01",
    title: "Discover & Assess",
    description:
      "We audit your current systems, workflows, and goals to identify the highest-leverage opportunities.",
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "You get a fixed-scope proposal with architecture decisions, timelines, and pricing before any code is written.",
  },
  {
    number: "03",
    title: "Build & Implement",
    description:
      "Our senior engineers ship in short, visible sprints with regular demos — no black-box development.",
  },
  {
    number: "04",
    title: "Support & Scale",
    description:
      "We stay on as your managed partner, monitoring systems and evolving them as your business grows.",
  },
];

export function IntegrationsSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-mono text-secondary mb-4">/ our process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            A clear path from idea to production.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden border border-border">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-background p-8">
              <span className="font-mono text-4xl font-semibold text-foreground/10">
                {step.number}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-8 right-0 h-px w-4 bg-border translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
