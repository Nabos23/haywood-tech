import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "SaaS Product Development — Haywood Technologies",
  description:
    "End-to-end SaaS builds — multi-tenant architecture, Stripe billing, onboarding flows, and growth infrastructure — engineered to scale from MVP to enterprise.",
};

const data: ServicePageData = {
  title: "SaaS Product Development",
  tagline: "From zero to SaaS — faster than you thought possible.",
  description:
    "We build SaaS products end-to-end — from the initial architecture decisions to billing, onboarding, and the infrastructure that scales as you grow. Our team has built products across B2B, B2C, and PLG motions, and we know what separates SaaS products that stall from those that compound.",
  heroIcon: "Layers3",
  accentColor: "#ff6a3d",
  heroGradient: "linear-gradient(160deg, #130805 0%, #200f08 50%, #0e0604 100%)",
  badges: ["MVP Builds", "Multi-tenant", "Stripe", "Auth", "PLG", "Onboarding", "Scalability"],
  stats: [
    { numericTarget: 12,  display: "12 wks",  label: "Average MVP delivery timeline" },
    { numericTarget: 3,   display: "3×",      label: "Faster growth vs. in-house builds" },
    { numericTarget: 99,  display: "99.9%",   label: "Uptime SLA across portfolio" },
    { numericTarget: 50,  display: "$50M+",   label: "Combined ARR across client products" },
  ],
  capabilities: [
    {
      icon: "Rocket",
      title: "MVP Development",
      description:
        "We scope and build a production-ready MVP in 8–14 weeks — enough to validate with real users, raise funding, or onboard your first paying customers.",
    },
    {
      icon: "Server",
      title: "Multi-tenant Architecture",
      description:
        "Data isolation, tenant provisioning, custom domains, and role-based access — built correctly from the start so you don't have to rebuild it later.",
    },
    {
      icon: "CreditCard",
      title: "Billing & Subscriptions",
      description:
        "Stripe integration for subscriptions, usage-based billing, trial management, metered invoicing, and revenue recognition — fully automated.",
    },
    {
      icon: "UserPlus",
      title: "Onboarding & Activation",
      description:
        "Product-led onboarding flows, in-app checklists, email sequences, and activation metrics wired to your analytics stack.",
    },
    {
      icon: "TrendingUp",
      title: "Growth Infrastructure",
      description:
        "Referral systems, PLG viral loops, feature flags, A/B testing infrastructure, and the analytics tooling to understand what's working.",
    },
    {
      icon: "Code2",
      title: "API & Webhook Platform",
      description:
        "Public API design, developer documentation, webhook delivery infrastructure, and SDK scaffolding — so you can build an ecosystem around your product.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Product Discovery",
      description:
        "We align on the core value proposition, target customer, and feature set for v1. Output: a product brief and architecture decision record.",
    },
    {
      step: "02",
      title: "Architecture & Stack Selection",
      description:
        "We choose a stack optimized for your team's future hiring, your scaling needs, and the velocity required to hit your launch date.",
    },
    {
      step: "03",
      title: "MVP Build",
      description:
        "Rapid, focused development sprints to deliver the core product loop. Weekly demos with you throughout — no black-box engineering.",
    },
    {
      step: "04",
      title: "Beta & Feedback Loop",
      description:
        "We help you run a structured beta, instrument the product for analytics, and iterate quickly based on what real users tell you.",
    },
    {
      step: "05",
      title: "Public Launch",
      description:
        "Production hardening, load testing, billing activation, and support tooling setup before you go public.",
    },
    {
      step: "06",
      title: "Scale & Iterate",
      description:
        "Post-launch we stay on as your engineering partner — shipping features, managing infrastructure, and keeping the product healthy as you grow.",
    },
  ],
  technologies: [
    "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis",
    "Stripe", "Auth0", "Clerk", "AWS", "Kubernetes",
    "Posthog", "Segment", "Vercel", "Terraform", "tRPC", "Prisma",
  ],
};

export default function SaaSProductDevelopmentPage() {
  return <ServiceLayout data={data} />;
}
