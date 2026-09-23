import type { Metadata } from "next";
import { ServiceLayout, type ServicePageData } from "@/components/pages/service-layout";

export const metadata: Metadata = {
  title: "AI Engineering — Haywood Technologies",
  description:
    "Practical AI systems — LLM integration, workflow automation, and intelligent agents — built around your data and compliance requirements.",
};

const data: ServicePageData = {
  title: "AI Engineering",
  tagline: "Practical AI that works in the real world.",
  description:
    "We don't sell AI hype — we build AI systems that save time, reduce cost, and create measurable competitive advantage. From LLM integrations and intelligent agents to full data pipelines, every solution is designed around your specific workflows and compliance requirements.",
  heroIcon: "BrainCircuit",
  accentColor: "#00adef",
  heroGradient: "linear-gradient(160deg, #050e1a 0%, #081b2e 50%, #040d1c 100%)",
  badges: ["LLM Integration", "Agents", "Automation", "Data Pipelines", "RAG", "Fine-tuning"],
  stats: [
    { numericTarget: 15,  display: "15 hrs",  label: "Average weekly hours saved per team" },
    { numericTarget: 98,  display: "98%",      label: "Accuracy rate across deployments" },
    { numericTarget: 60,  display: "60%",      label: "Average cost reduction on manual tasks" },
    { numericTarget: 3,   display: "3× ROI",   label: "Average first-year return on investment" },
  ],
  capabilities: [
    {
      icon: "MessageSquare",
      title: "LLM & Agent Integration",
      description:
        "We integrate GPT-4, Claude, Gemini, and open-source models into your products and workflows — copilots, chat interfaces, document Q&A, and autonomous agents.",
    },
    {
      icon: "GitBranch",
      title: "Workflow Automation",
      description:
        "AI-powered pipelines that replace manual, repetitive processes — document classification, data extraction, approval routing, and decision support.",
    },
    {
      icon: "Database",
      title: "Data Pipeline Engineering",
      description:
        "End-to-end data infrastructure for AI — ingestion, cleaning, embedding, storage in vector databases, and retrieval-augmented generation (RAG) architectures.",
    },
    {
      icon: "Bot",
      title: "Custom AI Agents",
      description:
        "Multi-step autonomous agents that browse, call APIs, write code, and take actions on your behalf — built with guardrails for enterprise reliability.",
    },
    {
      icon: "Eye",
      title: "Computer Vision",
      description:
        "Image classification, object detection, document OCR, and quality-control systems for manufacturing, logistics, and healthcare workflows.",
    },
    {
      icon: "TrendingUp",
      title: "Predictive Analytics",
      description:
        "Machine learning models that forecast demand, detect anomalies, score leads, and surface insights from your operational data.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Data & Feasibility Assessment",
      description:
        "We audit your existing data, systems, and workflows to identify the highest-value AI opportunities and flag any data quality or compliance issues upfront.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Architecture design, model selection, and a proof-of-concept to validate the approach before any production work begins.",
    },
    {
      step: "03",
      title: "Build & Integration",
      description:
        "We build the AI system and integrate it into your existing tools — with APIs, webhooks, or direct UI embedding as needed.",
    },
    {
      step: "04",
      title: "Evaluation & Fine-tuning",
      description:
        "Rigorous accuracy testing, bias checks, and performance benchmarking. We iterate until the system meets your production quality bar.",
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description:
        "Production deployment with observability tooling — latency tracking, output quality monitoring, and cost dashboards.",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      description:
        "As your data grows and models improve, we retrain, fine-tune, and expand the system's capabilities on an ongoing basis.",
    },
  ],
  technologies: [
    "Python", "LangChain", "LangGraph", "OpenAI", "Anthropic Claude", "Gemini",
    "Pinecone", "Weaviate", "pgvector", "HuggingFace", "FastAPI", "Celery",
    "AWS SageMaker", "Azure OpenAI", "Ollama", "dspy",
  ],
};

export default function AIEngineeringPage() {
  return <ServiceLayout data={data} />;
}
