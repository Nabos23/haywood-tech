import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Project-Based",
    description: "For a defined build with a clear start and finish",
    price: "Fixed quote",
    detail: "Scoped after discovery",
    features: [
      "Fixed-scope statement of work",
      "Dedicated project lead",
      "Weekly demos & reporting",
      "30-day post-launch support",
    ],
    cta: "Request a quote",
    popular: false,
  },
  {
    name: "Managed Retainer",
    description: "Ongoing development, AI, and infrastructure support",
    price: "From $6,500",
    detail: "per month",
    features: [
      "Dedicated engineering hours",
      "Priority response SLA",
      "Infrastructure monitoring",
      "Monthly roadmap reviews",
      "Security & compliance checks",
    ],
    cta: "Talk to sales",
    popular: true,
  },
  {
    name: "Enterprise Partnership",
    description: "For multi-team, multi-system engagements",
    price: "Custom",
    detail: "Tailored contract",
    features: [
      "Everything in Managed Retainer",
      "24/7 dedicated support desk",
      "On-site & embedded options",
      "Custom SLA & compliance terms",
      "Multi-year roadmap planning",
    ],
    cta: "Contact us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="engagement" className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-secondary mb-4">/ engagement models</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Work with us the way that fits your business.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Every engagement starts with a scoped proposal — no hourly guesswork,
            no surprise invoices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-10 bg-background flex flex-col ${
                plan.popular ? "md:-my-3 md:py-11 lg:py-13 border-2 border-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-sm">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl lg:text-4xl font-semibold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.detail}</p>
              </div>

              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-sm h-11 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-transparent border border-border text-foreground hover:bg-muted"
                }`}
              >
                <a href="#contact">
                  {plan.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Every plan includes a documented handoff, so you&apos;re never locked in.{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Talk to us about your project
          </a>
        </p>
      </div>
    </section>
  );
}
