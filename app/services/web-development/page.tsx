import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "Web Development — Haywood Technologies",
  description:
    "Fast, accessible websites and web apps — from marketing sites to complex platforms. Custom frontends, backends, CMS, e-commerce, and performance optimization.",
};

const data: ServicePageData = {
  title: "Web Development",
  tagline: "Websites and web apps that perform as good as they look.",
  description:
    "We build websites and web applications that load fast, rank in search, and convert visitors into customers. Whether you need a high-converting marketing site, a custom e-commerce store, or a complex web platform, we handle the design, engineering, and ongoing maintenance.",
  heroIcon: "Globe",
  accentColor: "#00adef",
  heroGradient: "linear-gradient(160deg, #050e1a 0%, #071825 50%, #040d18 100%)",
  badges: ["Next.js", "WordPress", "Shopify", "Performance", "SEO", "CMS", "E-commerce"],
  stats: [
    { numericTarget: 95,  display: "95+",    label: "Average Lighthouse performance score" },
    { numericTarget: 2,   display: "2×",     label: "Average conversion rate improvement" },
    { numericTarget: 1,   display: "<1.5s",  label: "Average page load time" },
    { numericTarget: 300, display: "300+",   label: "Sites and apps delivered" },
  ],
  capabilities: [
    {
      icon: "Layout",
      title: "Marketing Websites",
      description:
        "High-converting, brand-aligned marketing sites with animations, strong SEO foundations, and CMS backends your team can actually use.",
    },
    {
      icon: "Globe",
      title: "Custom Web Applications",
      description:
        "Complex interactive platforms — portals, dashboards, booking systems, and directory sites — built with React and Next.js for maximum performance.",
    },
    {
      icon: "ShoppingCart",
      title: "E-commerce",
      description:
        "Custom Shopify themes and headless e-commerce builds with bespoke checkout flows, inventory integrations, and conversion-optimized design.",
    },
    {
      icon: "FileText",
      title: "CMS & Content Platforms",
      description:
        "Headless CMS implementations (Contentful, Sanity, Strapi) and WordPress builds giving your content team full editorial independence.",
    },
    {
      icon: "Gauge",
      title: "Performance Optimization",
      description:
        "Core Web Vitals auditing and remediation, image optimization, code splitting, and edge caching to dramatically improve load times.",
    },
    {
      icon: "Search",
      title: "SEO Engineering",
      description:
        "Technical SEO implementation — structured data, canonical tags, sitemap generation, crawl budget optimization, and page speed improvements.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Brief & Discovery",
      description:
        "We understand your goals, audience, competitors, and content needs. Output: a project brief and agreed-on sitemap.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description:
        "Wireframes and high-fidelity designs reviewed and approved before development begins — ensuring alignment before code is written.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Frontend and backend development with regular staging previews. You can review and request changes at any point in the process.",
    },
    {
      step: "04",
      title: "QA & Performance Audit",
      description:
        "Cross-browser testing, mobile responsiveness checks, Core Web Vitals validation, and accessibility audit (WCAG 2.1 AA).",
    },
    {
      step: "05",
      title: "Launch",
      description:
        "DNS cutover, CDN configuration, uptime monitoring setup, and Google Search Console verification — all handled by us.",
    },
    {
      step: "06",
      title: "Maintenance & Growth",
      description:
        "Ongoing CMS updates, security patches, performance monitoring, and iterative improvements based on analytics data.",
    },
  ],
  technologies: [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress",
    "Shopify", "Contentful", "Sanity", "Strapi", "Vercel",
    "Cloudflare", "AWS CloudFront", "Playwright", "Lighthouse",
  ],
};

export default function WebDevelopmentPage() {
  return <ServiceLayout data={data} />;
}
