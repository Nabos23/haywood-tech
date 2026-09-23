"use client";

import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { AnimatedCounter } from "@/components/landing/animated-counter";

const reasons = [
  {
    title: "One team, full accountability",
    description:
      "No handoffs between agencies and freelancers. The engineers who design your systems are the ones who operate and support them.",
  },
  {
    title: "Senior engineers, not junior benches",
    description:
      "Every engagement is staffed by consultants with 8+ years of production experience — no learning on your dime.",
  },
  {
    title: "Fixed scope, transparent pricing",
    description:
      "You get a clear statement of work and pricing before we start. No surprise invoices, no scope creep without sign-off.",
  },
  {
    title: "Built to outlast the project",
    description:
      "We document, hand off, and train your internal team so you're never locked into needing us forever.",
  },
];

export function HowItWorksSection() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="why-haywood" className="relative py-24 lg:py-32 border-t border-border bg-muted/30 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 -left-1/4 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl animate-blend"
        style={{ background: "conic-gradient(from 90deg, var(--secondary), var(--primary), var(--accent), var(--secondary))" }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
        <div
          className={`lg:col-span-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-mono text-secondary mb-4">/ why haywood</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Consultants who stay accountable after the invoice is sent.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We&apos;ve worked with in-house teams, agencies, and offshore vendors that
            disappear once the contract ends. Haywood is built to be the partner you
            keep — not the one you have to replace.
          </p>

          <div className="mt-10 flex items-center gap-6 rounded-sm border border-border bg-card p-6 hover-lift">
            <div>
              <AnimatedCounter
                target={14}
                suffix="+"
                className="text-3xl font-semibold text-foreground font-mono"
              />
              <p className="text-xs text-muted-foreground mt-1">Years delivering enterprise technology</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <AnimatedCounter
                target={120}
                suffix="+"
                className="text-3xl font-semibold text-foreground font-mono"
              />
              <p className="text-xs text-muted-foreground mt-1">Projects shipped across industries</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group rounded-sm border border-border bg-card p-7 transition-all duration-700 hover:border-secondary/40 hover:-translate-y-1 hover:shadow-lg ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              <CheckCircle2 className="h-5 w-5 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
