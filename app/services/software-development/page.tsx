import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "Software Development — Haywood Technologies",
  description:
    "Custom web applications, mobile apps, APIs, and internal tools engineered to fit the way your business actually works. Haywood Technologies delivers software that scales.",
};

const data: ServicePageData = {
  title: "Software Development",
  tagline: "Custom software engineered for the way your business works.",
  description:
    "We design and build production-grade software — from customer-facing web applications and mobile apps to internal tools and platform architecture. Every project is scoped upfront so there are no budget surprises, and every line of code is written by senior engineers who own what they ship.",
  heroIcon: "Code2",
  accentColor: "#2d3192",
  heroGradient: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)",
  badges: ["Web Apps", "Mobile", "APIs", "Internal Tools", "Architecture", "Modernization"],
  stats: [
    { numericTarget: 200, display: "200+", label: "Projects delivered" },
    { numericTarget: 98,  display: "98%",  label: "On-time delivery rate" },
    { numericTarget: 40,  display: "40%",  label: "Faster time-to-market avg." },
    { numericTarget: 5,   display: "5 yrs", label: "Average client relationship" },
  ],
  capabilities: [
    {
      icon: "Globe",
      title: "Custom Web Applications",
      description:
        "Full-stack web apps from MVPs to enterprise platforms — built with modern frameworks, clean architecture, and a focus on performance and maintainability.",
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      description:
        "Native and cross-platform iOS and Android applications designed for real-world use cases, with thoughtful UX and robust offline support.",
    },
    {
      icon: "Zap",
      title: "API & Integration Design",
      description:
        "RESTful and GraphQL APIs, third-party integrations, and event-driven architectures that connect your systems reliably and at scale.",
    },
    {
      icon: "RefreshCw",
      title: "Legacy System Modernization",
      description:
        "We migrate aging codebases to modern stacks without disrupting operations — incremental refactoring, data migration, and parallel-run testing.",
    },
    {
      icon: "Wrench",
      title: "Internal Tools & Dashboards",
      description:
        "Custom operational tooling, admin panels, and business dashboards that replace clunky spreadsheets and disconnected SaaS tools.",
    },
    {
      icon: "Network",
      title: "Technical Architecture",
      description:
        "System design reviews, technology selection, scalability planning, and architectural blueprints delivered before a line of code is written.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Scoping",
      description:
        "We map your requirements, existing systems, and success metrics. Output: a fixed-scope proposal with timeline and pricing before any work begins.",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description:
        "System architecture, data models, and UI/UX wireframes are reviewed and approved by you before development kicks off.",
    },
    {
      step: "03",
      title: "Agile Development",
      description:
        "Senior engineers ship in two-week sprints with weekly demos. You see working software early and often — not at the end.",
    },
    {
      step: "04",
      title: "QA & Testing",
      description:
        "Automated test suites, manual QA, performance testing, and security review before every release.",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "We handle CI/CD pipeline setup, infrastructure provisioning, and a zero-downtime production launch.",
    },
    {
      step: "06",
      title: "Ongoing Support",
      description:
        "Post-launch monitoring, bug fixes, and feature iterations. We stay on as your engineering partner as long as you need us.",
    },
  ],
  technologies: [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "Redis", "AWS", "Docker", "Kubernetes", "GraphQL", "REST",
    "React Native", "Expo", "Prisma", "tRPC",
  ],
};

export default function SoftwareDevelopmentPage() {
  return <ServiceLayout data={data} />;
}
