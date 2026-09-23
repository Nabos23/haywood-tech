"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, Globe } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Engineering", href: "/services/ai-engineering" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "Managed IT", href: "/services/managed-it" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "SaaS Product Development", href: "/services/saas-product-development" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Why Haywood", href: "/#why-haywood" },
    { name: "Our Process", href: "/#process" },
    { name: "Featured Work", href: "/#work" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "#", badge: "Hiring" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Security & Compliance", href: "/security-compliance" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave color="#2d3192" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center mb-6">
                <Image
                  src="/haywood-logo.png"
                  alt="Haywood Technologies"
                  width={180}
                  height={54}
                  className="h-9 w-auto"
                />
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                An IT consultancy helping businesses build, modernize, and scale
                through software, AI, cloud, and managed IT services.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="mailto:info@haywood-tech.com"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@haywood-tech.com
                </a>
                <a
                  href="tel:+923279401611"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +92 327 940 1611
                </a>
                <a
                  href="https://www.haywood-tech.com"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  www.haywood-tech.com
                </a>
              </div>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6 text-foreground">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Haywood Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
