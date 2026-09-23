import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "Managed IT Services — Haywood Technologies",
  description:
    "24/7 IT monitoring, help desk support, endpoint management, and security compliance — so your team stays productive and your systems stay online.",
};

const data: ServicePageData = {
  title: "Managed IT Services",
  tagline: "Your systems stay online. Your team stays productive.",
  description:
    "We act as your complete IT department or supplement your in-house team — handling everything from day-to-day help desk tickets to proactive security monitoring and vendor management. Our engineers catch and resolve issues before your employees notice them.",
  heroIcon: "Headset",
  accentColor: "#2d3192",
  heroGradient: "linear-gradient(160deg, #0d0f1a 0%, #0f1535 50%, #080c1e 100%)",
  badges: ["Help Desk", "Monitoring", "Security", "Microsoft 365", "Endpoint Mgmt", "Compliance"],
  stats: [
    { numericTarget: 15,  display: "<15 min", label: "Average response time" },
    { numericTarget: 99,  display: "99.9%",   label: "Client uptime maintained" },
    { numericTarget: 85,  display: "85%",     label: "First-contact resolution rate" },
    { numericTarget: 50,  display: "50+",     label: "Businesses supported" },
  ],
  capabilities: [
    {
      icon: "Activity",
      title: "24/7 Proactive Monitoring",
      description:
        "We monitor your servers, networks, and endpoints around the clock — detecting anomalies and resolving issues before they impact your business.",
    },
    {
      icon: "Headset",
      title: "Help Desk Support",
      description:
        "A dedicated support team available via phone, email, and chat for your employees — with SLA-backed response times and ticket tracking.",
    },
    {
      icon: "Monitor",
      title: "Endpoint Management",
      description:
        "Remote management, patching, and configuration of all devices — laptops, desktops, and mobile — via Microsoft Intune or your preferred MDM.",
    },
    {
      icon: "Users",
      title: "Vendor & License Management",
      description:
        "We consolidate your software subscriptions, negotiate renewals, and manage vendor relationships so you're never paying for unused licenses.",
    },
    {
      icon: "Lock",
      title: "Cybersecurity & EDR",
      description:
        "Endpoint detection and response, email security, multi-factor authentication enforcement, and employee security awareness training.",
    },
    {
      icon: "ClipboardCheck",
      title: "Compliance Management",
      description:
        "Documentation, access controls, audit logging, and policy enforcement aligned to SOC 2, HIPAA, Cyber Essentials, and ISO 27001 frameworks.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Environment Discovery",
      description:
        "We audit your entire IT environment — hardware, software, network, and security — and document everything in a living asset register.",
    },
    {
      step: "02",
      title: "Onboarding & Tool Deployment",
      description:
        "Monitoring agents, RMM software, and security tooling are deployed across your environment within the first week.",
    },
    {
      step: "03",
      title: "SLA & Escalation Definition",
      description:
        "We agree on response time SLAs, escalation paths, and communication protocols tailored to your business hours and criticality tiers.",
    },
    {
      step: "04",
      title: "Ongoing Support & Patching",
      description:
        "Monthly patch cycles, daily monitoring reviews, and immediate response to alerts — all documented in your client portal.",
    },
    {
      step: "05",
      title: "Quarterly Business Reviews",
      description:
        "We present an IT health report, upcoming risk areas, and a roadmap for the next quarter — keeping you informed without overwhelming you.",
    },
  ],
  technologies: [
    "Microsoft 365", "Microsoft Intune", "Entra ID (Azure AD)", "Defender for Endpoint",
    "Sentinel", "Cloudflare", "SentinelOne", "Datto",
    "ConnectWise", "ServiceNow", "Duo MFA", "Proofpoint",
  ],
};

export default function ManagedITPage() {
  return <ServiceLayout data={data} />;
}
