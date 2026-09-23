"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const badges = [
  "Software Development",
  "AI Engineering",
  "Cloud & DevOps",
  "Managed IT",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0f1a 0%, #12173a 50%, #0a1628 100%)" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div
          className="absolute -top-32 right-0 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, #00adef 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-48 -left-24 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #2d3192 0%, transparent 70%)" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono text-white/50 mb-6 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00adef]" />
            IT Consultancy for Growing Businesses
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            We build, modernize, and{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2d3192, #00adef)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              scale
            </span>{" "}
            your technology.
          </h1>

          <p className="mt-6 text-lg text-white/55 max-w-xl leading-relaxed">
            Haywood Technologies partners with businesses to design software, engineer AI
            systems, run cloud infrastructure, and manage IT — so your team can focus on
            growth instead of downtime.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2d3192 0%, #00adef 100%)",
                boxShadow: "0 4px 24px rgba(45,49,146,0.5)",
              }}
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white/80 border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-white/40">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <AnimatedSphere color="#00adef" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 rounded-sm border border-white/15 bg-white/8 backdrop-blur-md px-4 py-3 shadow-xl"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <p className="text-2xl font-semibold text-white font-mono">99.9%</p>
            <p className="text-xs text-white/50 mt-0.5">Client infrastructure uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
