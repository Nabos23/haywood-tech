"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Haywood rebuilt our scheduling platform in twelve weeks after two other vendors stalled out. They communicated clearly at every step and the system just works.",
    author: "Dana Whitfield",
    role: "COO",
    company: "Meridian Health Partners",
    metric: "34% fewer missed appointments",
  },
  {
    quote:
      "They didn't just fix our cloud bill — they redesigned how our team ships code. Deployments that used to take a day now take minutes.",
    author: "Marcus Webb",
    role: "VP Engineering",
    company: "Flux Logistics",
    metric: "21% lower fuel & infra spend",
  },
  {
    quote:
      "Our old IT vendor would take days to respond. Haywood's managed team catches issues before we even notice them.",
    author: "Elena Rodriguez",
    role: "Operations Director",
    company: "Beacon Manufacturing",
    metric: "99.95% uptime since migration",
  },
  {
    quote:
      "The AI workflow they built saves our support team roughly fifteen hours a week. It paid for itself in the first quarter.",
    author: "James Liu",
    role: "Founder",
    company: "Prism Analytics",
    metric: "15 hrs/week saved",
  },
];

const clientLogos = [
  "Meridian Health Partners",
  "Flux Logistics",
  "Beacon Manufacturing",
  "Prism Analytics",
  "Nova Retail Group",
  "Quantum Financial",
  "Atlas Public Schools",
  "Vertex Construction",
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What clients say
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground font-medium">
                &quot;{activeTestimonial.quote}&quot;
              </p>
            </blockquote>

            <div
              className={`mt-10 flex items-center gap-5 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center">
                <span className="text-xl font-semibold text-primary">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-base font-medium text-foreground">{activeTestimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 rounded-sm border border-border bg-card transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="text-2xl md:text-3xl text-foreground font-semibold">
                {activeTestimonial.metric}
              </p>
            </div>

            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6 text-center">
            Trusted by teams across healthcare, logistics, and manufacturing
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden pb-2">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {clientLogos.map((company) => (
                <span
                  key={`${setIdx}-${company}`}
                  className="text-lg md:text-xl font-medium text-foreground/25 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
