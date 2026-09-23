import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Target, Eye, Heart, Users, Zap, Shield } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "About Us — Haywood Technologies",
  description:
    "Haywood Technologies is an IT consultancy helping businesses build, modernize, and scale their technology. Learn about our mission, values, and approach.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes Over Outputs",
    description:
      "We measure success by business results — not lines of code, tickets closed, or hours billed. Every engagement is tied to a measurable outcome.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Fixed-scope proposals before any work starts. Weekly progress updates. No hidden costs, no scope creep without your approval. You always know exactly where things stand.",
  },
  {
    icon: Zap,
    title: "Senior-Only Engineering",
    description:
      "We don't staff junior engineers to your project and charge senior rates. Every team member who touches your work has production experience and technical accountability.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    description:
      "Security isn't a feature request — it's built into every architecture decision, every deployment, and every line of code we write.",
  },
  {
    icon: Heart,
    title: "Long-term Partnership",
    description:
      "Our average client relationship is over five years. We build for longevity — systems that your team can own, extend, and hand off without us if needed.",
  },
  {
    icon: Users,
    title: "Vendor-Neutral Advice",
    description:
      "We choose tools based on what your business actually needs — not referral fees or preferred partner programs. Our recommendations are always independent.",
  },
];

const timeline = [
  { year: "2018", title: "Founded", description: "Haywood Technologies was founded with a single mission: deliver enterprise-quality technology to businesses that deserve better than the typical vendor experience." },
  { year: "2019", title: "First 10 Clients", description: "Our first year of operations brought on clients across healthcare, logistics, and manufacturing — the industries we still serve best today." },
  { year: "2021", title: "AI Practice Launch", description: "As LLMs and practical AI tooling matured, we built out a dedicated AI engineering practice to help clients automate workflows and build intelligent products." },
  { year: "2023", title: "Cloud & DevOps Expansion", description: "Growing demand for reliable infrastructure led us to expand our cloud and DevOps capability — now one of our largest practice areas." },
  { year: "2026", title: "Today", description: "Over 50 businesses trust Haywood as their technology partner. We're still the same size that lets us give every client our full attention." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-36 pb-28 lg:pt-48 lg:pb-36 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: "radial-gradient(circle, #2d3192 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full blur-3xl opacity-10 animate-float" style={{ background: "radial-gradient(circle, #00adef 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-mono text-white/40 mb-6">/ about us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02] max-w-4xl">
            We&apos;re the technology team your business deserves.
          </h1>
          <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed">
            Haywood Technologies is an IT consultancy that embeds alongside your team to build software, run infrastructure, and manage IT — so you can focus on growing your business instead of managing technology problems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03]" style={{ background: "linear-gradient(135deg, #2d3192, #00adef)", boxShadow: "0 4px 24px rgba(45,49,146,0.45)" }}>
              Work With Us <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white/80 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-mono text-secondary mb-4">/ our mission</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              Make enterprise-quality technology accessible to every growing business.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most technology vendors treat small and mid-size businesses as second-tier clients — offloading work to junior staff, burying clients in jargon, and disappearing after the invoice clears.
            </p>
            <p>
              We built Haywood Technologies to be the opposite. We work with businesses that are too large to rely on a freelancer but too smart to overpay for a big agency — delivering the same quality, rigor, and accountability you'd expect from an in-house team.
            </p>
            <p>
              Our model is simple: fixed-scope work, senior engineers, and relationships built on results — not retainers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-mono text-secondary mb-4">/ how we operate</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Six principles we don&apos;t compromise on.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="group p-8 rounded-sm border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-muted mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-mono text-secondary mb-4">/ our story</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
              Eight years building what we believe in.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="lg:w-1/2 lg:text-right pl-8 lg:pl-0 lg:pr-16">
                    {i % 2 === 0 && (
                      <>
                        <span className="text-4xl font-semibold font-mono text-foreground/10">{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </>
                    )}
                  </div>
                  <div className="absolute left-0 lg:left-1/2 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2" />
                  <div className="lg:w-1/2 pl-8 lg:pl-16">
                    {i % 2 !== 0 && (
                      <>
                        <span className="text-4xl font-semibold font-mono text-foreground/10">{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border" style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-mono mb-4 text-white/40">/ let&apos;s talk</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Ready to work with a team that actually delivers?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Tell us about your technology challenges and we&apos;ll propose a fixed-scope engagement within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #2d3192, #00adef)", boxShadow: "0 4px 32px rgba(45,49,146,0.5)" }}>
            Get in Touch <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
