"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 & ISO 27001 aligned",
    description: "Every engagement follows audited security controls and continuous monitoring practices.",
  },
  {
    icon: Lock,
    title: "Encryption by default",
    description: "AES-256 encryption for data at rest and TLS 1.3 in transit across every system we build.",
  },
  {
    icon: Eye,
    title: "Least-privilege access",
    description: "Role-based access and MFA are standard on every project — no shared credentials, ever.",
  },
  {
    icon: FileCheck,
    title: "HIPAA & GDPR ready",
    description: "Healthcare and multi-region clients get compliance built into architecture from day one.",
  },
];

const certifications = ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "CCPA"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-muted/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm font-mono text-secondary mb-4">/ security & compliance</p>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-8">
              Trust is non-negotiable.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Enterprise-grade security isn&apos;t an add-on — it&apos;s built into every
              system we design, from architecture decisions to day-to-day operations.
            </p>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 rounded-sm border border-border bg-card text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-sm border border-border bg-card hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
