"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AnimatedWave } from "@/components/landing/animated-wave";

export function CtaSection() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      e.currentTarget.reset();
    }, 900);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-primary">
        <AnimatedWave color="#ffffff" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-white/15 bg-primary-foreground/10 backdrop-blur-md p-7 sm:p-9 shadow-2xl">
              <p className="text-sm font-mono text-primary-foreground/70 mb-4">/ get in touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-foreground leading-tight text-glow-echo">
                Let&apos;s talk about your next project.
              </h2>
              <p className="mt-5 text-primary-foreground/90 leading-relaxed max-w-md">
                Tell us where you&apos;re stuck — legacy systems, a stalled build, or IT
                that can&apos;t keep up. We&apos;ll reply within one business day with next steps.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="mailto:info@haywood-tech.com"
                  className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@haywood-tech.com
                </a>
                <a
                  href="tel:+923279401611"
                  className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +92 327 940 1611
                </a>
                <a
                  href="https://www.haywood-tech.com"
                  className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  www.haywood-tech.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-sm bg-card border border-border p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Cooper" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Company name" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project or challenge..."
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="sm:col-span-2 rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                {submitting ? "Sending..." : "Send message"}
                {!submitting && <ArrowUpRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
