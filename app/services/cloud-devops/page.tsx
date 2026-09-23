import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "Cloud & DevOps — Haywood Technologies",
  description:
    "Cloud migration, CI/CD automation, Kubernetes orchestration, and infrastructure-as-code. Reliable, scalable, cost-optimized infrastructure for growing businesses.",
};

const data: ServicePageData = {
  title: "Cloud & DevOps",
  tagline: "Infrastructure that scales without surprises.",
  description:
    "We architect, migrate, and operate cloud environments built for reliability. Whether you're moving off on-premise servers, untangling a legacy AWS setup, or building CI/CD pipelines from scratch — we handle the infrastructure complexity so your engineers can focus on product.",
  heroIcon: "Cloud",
  accentColor: "#ff6a3d",
  heroGradient: "linear-gradient(160deg, #120a05 0%, #1f1108 50%, #0f0802 100%)",
  badges: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD", "IaC", "FinOps"],
  stats: [
    { numericTarget: 99,  display: "99.95%", label: "Average uptime achieved" },
    { numericTarget: 60,  display: "60%",    label: "Average infrastructure cost reduction" },
    { numericTarget: 10,  display: "10×",    label: "Faster deployment cycles" },
    { numericTarget: 24,  display: "24/7",   label: "Infrastructure monitoring" },
  ],
  capabilities: [
    {
      icon: "Upload",
      title: "Cloud Migration",
      description:
        "Lift-and-shift, re-platform, or re-architect migrations from on-premise or legacy cloud environments — planned for zero business disruption.",
    },
    {
      icon: "FileCode",
      title: "Infrastructure as Code",
      description:
        "All infrastructure defined in Terraform or Pulumi — version-controlled, peer-reviewed, and reproducible across environments.",
    },
    {
      icon: "Box",
      title: "Container Orchestration",
      description:
        "Kubernetes cluster design, Helm chart authoring, auto-scaling policies, and service mesh configuration for production-grade container workloads.",
    },
    {
      icon: "Cloud",
      title: "CI/CD Pipelines",
      description:
        "Fully automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, or AWS CodePipeline — from commit to production in minutes.",
    },
    {
      icon: "DollarSign",
      title: "Cost Optimization (FinOps)",
      description:
        "Reserved instance planning, rightsizing, spot instance strategies, and cloud cost dashboards to eliminate waste without sacrificing performance.",
    },
    {
      icon: "Shield",
      title: "Security & Compliance",
      description:
        "Network segmentation, IAM policy hardening, secrets management, and compliance controls aligned to SOC 2, ISO 27001, HIPAA, and PCI DSS.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Infrastructure Audit",
      description:
        "We assess your current architecture, workloads, costs, and security posture — and produce a prioritized improvement roadmap.",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "A detailed target-state architecture with network topology, service boundaries, security controls, and cost projections.",
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description:
        "Phased migration with parallel-run validation, rollback plans, and minimal downtime windows negotiated with your team.",
    },
    {
      step: "04",
      title: "Pipeline Automation",
      description:
        "CI/CD pipelines, automated testing gates, and deployment runbooks so your team can ship safely without manual intervention.",
    },
    {
      step: "05",
      title: "Observability Setup",
      description:
        "Logging, metrics, distributed tracing, and alerting configured in your preferred stack — Datadog, Grafana, CloudWatch, or Prometheus.",
    },
    {
      step: "06",
      title: "Ongoing Operations",
      description:
        "24/7 monitoring, incident response, patching, and quarterly cost reviews — either as a managed service or knowledge transfer to your team.",
    },
  ],
  technologies: [
    "AWS", "Azure", "GCP", "Terraform", "Pulumi", "Kubernetes",
    "Helm", "Docker", "GitHub Actions", "GitLab CI", "ArgoCD", "Datadog",
    "Grafana", "Prometheus", "Vault", "Cilium",
  ],
};

export default function CloudDevOpsPage() {
  return <ServiceLayout data={data} />;
}
