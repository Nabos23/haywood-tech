import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Contact Us — Haywood Technologies",
  description:
    "Get in touch with Haywood Technologies. We respond to every inquiry within one business day and deliver fixed-scope proposals within 48 hours.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@haywood-tech.com",
    href: "mailto:info@haywood-tech.com",
    description: "We respond to every email within one business day.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 327 940 1611",
    href: "tel:+923279401611",
    description: "Available Monday to Friday, 9am – 6pm PKT.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
    description: "We work with clients globally — remote-first by design.",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 hours",
    href: null,
    description: "Fixed-scope proposals delivered within 48 hours of first call.",
  },
];

const services = [
  "Software Development",
  "AI Engineering",
  "Cloud & DevOps",
  "Managed IT Services",
  "Web Development",
  "SaaS Product Development",
  "Not sure yet",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: "radial-gradient(circle, #2d3192 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full blur-3xl opacity-10 animate-float" style={{ background: "radial-gradient(circle, #00adef 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-mono text-white/40 mb-6">/ contact us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] max-w-3xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-6 text-lg text-white/55 max-w-xl leading-relaxed">
            Every engagement starts with a conversation. Tell us what you&apos;re working on and we&apos;ll put together a fixed-scope proposal within 48 hours — no commitment required.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-10">Get in touch</h2>
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="group flex items-start gap-5 p-6 rounded-sm border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-muted group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">{method.label}</p>
                      <p className="text-lg font-semibold text-foreground">{method.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                    </div>
                    {method.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                );
                return method.href ? (
                  <a key={method.label} href={method.href}>{content}</a>
                ) : (
                  <div key={method.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-12 p-6 rounded-sm border border-border bg-muted/30">
              <h3 className="text-base font-semibold text-foreground mb-3">What happens after you reach out?</h3>
              <ol className="space-y-3">
                {[
                  "We acknowledge your message within 4 business hours.",
                  "We schedule a 30-minute discovery call to understand your project.",
                  "We send a fixed-scope proposal with timeline and pricing within 48 hours.",
                  "You decide — no pressure, no follow-up spam.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Service Cards */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What are you looking for help with?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Explore our services or reach out directly — we&apos;ll help you figure out the right approach even if you&apos;re not sure yet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href={`mailto:info@haywood-tech.com?subject=Enquiry: ${encodeURIComponent(service)}`}
                  className="group flex items-center justify-between p-4 rounded-sm border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-sm font-medium text-foreground">{service}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              ))}
            </div>

            <div className="mt-10 p-8 rounded-sm overflow-hidden relative" style={{ background: "linear-gradient(135deg, #2d3192 0%, #00adef 100%)" }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative">
                <p className="text-white/80 text-sm font-mono mb-2">/ already know what you need?</p>
                <h3 className="text-white text-xl font-semibold mb-4">Send us a project brief</h3>
                <p className="text-white/70 text-sm mb-5">Email us at <strong className="text-white">info@haywood-tech.com</strong> with a short description of your project, timeline, and budget range. We&apos;ll respond with a proposal — no discovery call required.</p>
                <a href="mailto:info@haywood-tech.com?subject=Project Brief" className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                  Send a Brief <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  );
}
