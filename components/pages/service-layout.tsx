"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, BrainCircuit, Cloud, Headset, Globe, Layers3, Monitor, Smartphone, Zap, RefreshCw, Wrench, Network, MessageSquare, GitBranch, Database, Bot, Eye, TrendingUp, Upload, FileCode, Box, DollarSign, Shield, Activity, Lock, ClipboardCheck, Layout, ShoppingCart, FileText, Gauge, Search, Rocket, Server, CreditCard, UserPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CountUp } from "./count-up";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2, BrainCircuit, Cloud, Headset, Globe, Layers3,
  Monitor, Smartphone, Zap, RefreshCw, Wrench, Network,
  MessageSquare, GitBranch, Database, Bot, Eye, TrendingUp,
  Upload, FileCode, Box, DollarSign, Shield,
  Activity, Lock, ClipboardCheck,
  Layout, ShoppingCart, FileText, Gauge, Search,
  Rocket, Server, CreditCard, UserPlus, Users,
};

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  numericTarget: number;
  display: string;
  label: string;
}

export interface ServicePageData {
  title: string;
  tagline: string;
  description: string;
  heroIcon: string;
  accentColor: string;
  heroGradient: string;
  capabilities: Capability[];
  process: ProcessStep[];
  technologies: string[];
  stats: Stat[];
  badges: string[];
}

// Deterministic floating particles — no Math.random() to avoid SSR hydration mismatch
const PARTICLES = [
  { size: 4, left: 8,  top: 15, opacity: 0.18, delay: 0,   dur: 4.5 },
  { size: 6, left: 19, top: 63, opacity: 0.12, delay: 0.5, dur: 5.2 },
  { size: 3, left: 31, top: 28, opacity: 0.20, delay: 1.0, dur: 4.0 },
  { size: 5, left: 44, top: 72, opacity: 0.14, delay: 0.3, dur: 5.8 },
  { size: 4, left: 57, top: 18, opacity: 0.16, delay: 0.8, dur: 4.3 },
  { size: 3, left: 68, top: 55, opacity: 0.10, delay: 1.5, dur: 6.0 },
  { size: 6, left: 76, top: 38, opacity: 0.18, delay: 0.2, dur: 4.7 },
  { size: 4, left: 84, top: 80, opacity: 0.12, delay: 1.1, dur: 5.4 },
  { size: 5, left: 92, top: 22, opacity: 0.20, delay: 0.6, dur: 4.9 },
  { size: 3, left: 12, top: 88, opacity: 0.14, delay: 1.3, dur: 5.1 },
  { size: 6, left: 37, top: 48, opacity: 0.10, delay: 0.9, dur: 6.2 },
  { size: 4, left: 62, top: 92, opacity: 0.16, delay: 0.4, dur: 4.6 },
];

export function ServiceLayout({ data }: { data: ServicePageData }) {
  const { ref: statsRef,  isInView: statsInView  } = useInView<HTMLDivElement>(0.2);
  const { ref: capRef,   isInView: capInView   } = useInView<HTMLDivElement>(0.05);
  const { ref: procRef,  isInView: procInView  } = useInView<HTMLDivElement>(0.05);
  const { ref: techRef,  isInView: techInView  } = useInView<HTMLDivElement>(0.1);

  const Icon = ICON_MAP[data.heroIcon] ?? Code2;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 lg:pt-48 lg:pb-36 overflow-hidden"
        style={{ background: data.heroGradient }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 right-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ background: `radial-gradient(circle, ${data.accentColor} 0%, transparent 70%)` }}
          />
          <div
            className="absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full blur-3xl opacity-15 animate-float"
            style={{ background: "radial-gradient(circle, #2d3192 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
                background: i % 2 === 0 ? data.accentColor : "#ffffff",
                opacity: p.opacity,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Services
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15"
              style={{ background: `${data.accentColor}1a` }}
            >
              <Icon className="h-8 w-8" style={{ color: data.accentColor }} />
            </div>
            <div className="h-px w-16 bg-white/15" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02] max-w-4xl">
            {data.title}
          </h1>
          <p className="mt-4 text-xl font-mono" style={{ color: data.accentColor }}>
            {data.tagline}
          </p>
          <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed">
            {data.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, #2d3192, ${data.accentColor})`,
                boxShadow: `0 4px 24px ${data.accentColor}50`,
              }}
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white/80 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {data.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/50 font-mono"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: data.accentColor }} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────── */}
      <section className="border-b border-border">
        <div
          ref={statsRef}
          className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border"
        >
          {data.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className="text-3xl lg:text-4xl font-semibold font-mono"
                style={{ color: i % 2 === 0 ? "#2d3192" : data.accentColor }}
              >
                {statsInView ? (
                  <CountUp target={stat.numericTarget} display={stat.display} />
                ) : (
                  "—"
                )}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────── */}
      <section id="capabilities" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-mono mb-4" style={{ color: data.accentColor }}>
              / what we deliver
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Our {data.title} Capabilities
            </h2>
          </div>

          <div ref={capRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.capabilities.map((cap, i) => {
              const CapIcon = ICON_MAP[cap.icon] ?? Code2;
              return (
                <div
                  key={cap.title}
                  className={`group relative p-8 rounded-sm border border-border bg-card overflow-hidden transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                    capInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${data.accentColor}10 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-muted mb-6 transition-all duration-300 group-hover:scale-110">
                      <CapIcon className="h-5 w-5" style={{ color: data.accentColor }} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-mono mb-4" style={{ color: data.accentColor }}>
              / how we work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Our Engagement Process
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A proven methodology that eliminates surprises and keeps you in control from day one.
            </p>
          </div>

          <div
            ref={procRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border"
          >
            {data.process.map((step, i) => (
              <div
                key={step.step}
                className={`relative bg-background p-8 transition-all duration-700 ${
                  procInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono text-5xl font-semibold text-foreground/[0.06]">
                  {step.step}
                </span>
                <div className="mt-5 h-0.5 w-8 mb-5" style={{ background: data.accentColor }} />
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ─────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-mono mb-4" style={{ color: data.accentColor }}>
              / our stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Technologies & Tools
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We choose the right tool for each situation — no vendor lock-in, no unnecessary complexity.
            </p>
          </div>

          <div ref={techRef} className="flex flex-wrap gap-3">
            {data.technologies.map((tech, i) => (
              <span
                key={tech}
                className={`inline-flex items-center rounded-sm border border-border bg-card px-4 py-2.5 text-sm font-mono text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all duration-500 ${
                  techInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: `${i * 40}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section
        className="py-28 border-t border-border overflow-hidden relative"
        style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}
      >
        <div
          className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${data.accentColor} 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-mono mb-4 text-white/40">/ ready to start?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Let&apos;s build something great together.
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll put together a fixed-scope proposal within 48 hours — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, #2d3192, ${data.accentColor})`,
              boxShadow: `0 4px 32px ${data.accentColor}50`,
            }}
          >
            Start a Project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
