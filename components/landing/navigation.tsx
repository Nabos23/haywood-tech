"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#why-haywood", label: "Why Haywood" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-white/10"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/haywood-logo.png"
            alt="Haywood Technologies"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+923279401611"
            className={cn(
              "text-sm font-mono transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/60 hover:text-white"
            )}
          >
            +92 327 940 1611
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #2d3192 0%, #00adef 100%)",
              boxShadow: "0 2px 16px rgba(45,49,146,0.45)",
            }}
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden flex items-center justify-center h-9 w-9 transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white mt-2"
            style={{
              background: "linear-gradient(135deg, #2d3192 0%, #00adef 100%)",
            }}
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
