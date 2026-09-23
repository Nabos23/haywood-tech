"use client";

import Link from "next/link";
import { Code2, BrainCircuit, Cloud, Headset, Globe, Layers3, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software Development",
    href: "/services/software-development",
    description:
      "Custom web and mobile applications, internal tools, and platform engineering built to fit how your team actually works.",
    points: ["Product & MVP builds", "Legacy system modernization", "API & integration design"],
    color: "text-primary",
    glow: "var(--primary)",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Engineering",
    href: "/services/ai-engineering",
    description:
      "Practical AI systems — from copilots to automation pipelines — designed around your data, workflows, and compliance needs.",
    points: ["LLM & agent integration", "Workflow automation", "Data pipeline design"],
    color: "text-secondary",
    glow: "var(--secondary)",
  },
  {
    icon: Cloud,
    number: "03",
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description:
      "Infrastructure that scales without surprises. We architect, migrate, and operate cloud environments built for reliability.",
    points: ["Cloud migration & architecture", "CI/CD pipelines", "Cost & performance optimization"],
    color: "text-accent",
    glow: "var(--accent)",
  },
  {
    icon: Headset,
    number: "04",
    title: "Managed IT Services",
    href: "/services/managed-it",
    description:
      "Day-to-day IT support, monitoring, and security so your systems stay online and your team stays productive.",
    points: ["24/7 monitoring & support", "Security & compliance", "Vendor & asset management"],
    color: "text-primary",
    glow: "var(--primary)",
  },
  {
    icon: Globe,
    number: "05",
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Fast, accessible websites and web apps — from marketing sites to complex platforms — across custom frontends, backends, and CMS.",
    points: ["Frontend & backend engineering", "WordPress & headless CMS", "Performance & SEO optimization"],
    color: "text-secondary",
    glow: "var(--secondary)",
  },
  {
    icon: Layers3,
    number: "06",
    title: "SaaS Product Development",
    href: "/services/saas-product-development",
    description:
      "End-to-end SaaS builds — multi-tenant architecture, billing, and onboarding — engineered to scale from launch to enterprise.",
    points: ["Multi-tenant architecture", "Subscription & billing systems", "Onboarding & growth infrastructure"],
    color: "text-accent",
    glow: "var(--accent)",
  },
];

export function FeaturesSection() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 h-[640px] w-[900px] rounded-full opacity-[0.14] blur-3xl animate-blend animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary))",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm font-mono text-secondary mb-4">/ services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Six disciplines. One partner for your entire stack.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We don&apos;t hand you off between vendors. Haywood embeds as a single
            accountable team that blends development, AI, infrastructure, and support
            into one continuous capability.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 border border-border rounded-sm overflow-hidden bg-background/60 backdrop-blur-sm"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={[
                  "group relative p-8 lg:p-10 flex flex-col overflow-hidden transition-all duration-700",
                  i % 2 === 0 ? "lg:border-r border-border" : "",
                  i < services.length - 2 ? "border-b border-border" : "",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: service.glow }}
                />

                <div className="flex items-center justify-between mb-8 relative">
                  <span
                    className={`relative flex h-11 w-11 items-center justify-center rounded-sm bg-muted ${service.color} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <span
                      className="absolute inset-0 rounded-sm opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60 animate-spin-slow"
                      style={{
                        background: `conic-gradient(from 0deg, ${service.glow}, transparent, ${service.glow})`,
                      }}
                    />
                    <Icon className="h-5 w-5 relative z-10" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 flex-1">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-secondary transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
