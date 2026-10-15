"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/70 py-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-purple text-lg font-bold text-background shadow-glow-cyan transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            AB
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </div>
          <span className="hidden text-lg font-semibold sm:block">
            <span className="gradient-text gradient-text-animated">Abderazek</span>
            <span className="text-text-secondary">.ai</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/40 p-1 backdrop-blur-md md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 ring-1 ring-accent-cyan/30" />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Resume */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shine group hidden items-center gap-2 rounded-full border border-accent-cyan/40 px-5 py-2 text-sm font-medium text-accent-cyan transition-all duration-300 hover:border-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-cyan md:inline-flex"
          >
            Resume
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14"
              />
            </svg>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-surface/50 text-text-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  mobileOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mt-2 space-y-1 border-t border-border/60 px-6 py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              aria-current={active === link.id ? "true" : undefined}
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-all duration-300 ${
                active === link.id
                  ? "bg-accent-cyan/10 text-accent-cyan"
                  : "text-text-secondary hover:bg-surface-light/60 hover:text-text-primary"
              }`}
            >
              <span>{link.label}</span>
              <span className="font-mono text-[10px] text-text-muted">
                0{i + 1}
              </span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple px-4 py-3 text-center text-sm font-semibold text-background"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
