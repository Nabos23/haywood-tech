import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";

const stacks = [
  {
    category: "Frontend & Product",
    items: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    category: "AI & Data",
    items: ["Python", "LangChain", "Vector Databases", "LLM APIs"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    category: "IT & Security",
    items: ["Microsoft 365", "SOC 2 Controls", "SIEM", "Endpoint Mgmt"],
  },
];

export function InfrastructureSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-sm font-mono text-secondary mb-4">/ technology & expertise</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Modern stack. Vendor-neutral advice.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            We choose tools based on what your business actually needs — not what
            earns us a referral fee. Our engineers stay certified across the platforms
            enterprises rely on most.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {stacks.map((stack) => (
              <div key={stack.category}>
                <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground mb-3">
                  {stack.category}
                </p>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <AnimatedTetrahedron color="#00adef" />
          </div>
        </div>
      </div>
    </section>
  );
}
