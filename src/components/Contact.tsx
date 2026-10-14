"use client";

import { useState, FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const EMAIL = "abderazekbelhadjmbarek@gmail.com";

const contactItems = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+216 54 999 718",
    href: "tel:+21654999718",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Tunisia, Ariana, Kalaat Andalous (Open to Remote)",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Abderrazekk",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abderazek-benhadjmbarek",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const labelClass = (name: keyof typeof formData) =>
    `pointer-events-none absolute left-4 transition-all duration-200 ${
      focused === name || formData[name]
        ? "top-2.5 text-xs text-accent-cyan"
        : "top-1/2 -translate-y-1/2 text-sm text-text-secondary"
    }`;
  const fieldClass =
    "peer w-full rounded-xl border border-border bg-surface/60 px-4 pb-2 pt-6 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-transparent focus:border-accent-cyan focus:bg-surface";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s{" "}
              <span className="gradient-text gradient-text-animated">
                Collaborate
              </span>
            </>
          }
          description="Interested in working together or hiring for full-stack, mobile, or AI engineering roles? Feel free to reach out directly."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-text-primary">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <Reveal key={item.label} delay={i * 80} dir="left">
                    <a
                      href={item.href}
                      className="spotlight group flex items-center gap-4 rounded-xl border border-border/60 bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/40"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan transition-colors group-hover:bg-accent-cyan/20">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-text-muted">{item.label}</p>
                        <p className="break-words text-sm font-medium text-text-primary sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Copy + Socials */}
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={copyEmail}
                  className="shine flex items-center gap-2.5 rounded-xl border border-accent-cyan/40 bg-accent-cyan/5 px-4 py-2.5 text-sm text-accent-cyan transition-all duration-300 hover:bg-accent-cyan/10"
                >
                  {copied ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {copied ? "Copied!" : "Copy Email"}
                </button>
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-surface/50 px-4 py-2.5 text-sm text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-accent-cyan"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal dir="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={fieldClass}
                  />
                  <label htmlFor="name" className={labelClass("name")}>
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={fieldClass}
                  />
                  <label htmlFor="email" className={labelClass("email")}>
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder=" "
                  value={formData.subject}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={fieldClass}
                />
                <label htmlFor="subject" className={labelClass("subject")}>
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder=" "
                  value={formData.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${fieldClass} resize-none`}
                />
                <label htmlFor="message" className={labelClass("message")}>
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="shine group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple py-4 font-semibold text-background shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-purple"
              >
                {submitted ? (
                  <>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
