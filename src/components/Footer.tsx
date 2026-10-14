const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
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

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-purple font-bold text-background">
                AB
              </div>
              <span className="text-lg font-semibold">
                <span className="gradient-text">Abderazek</span>
                <span className="text-text-secondary">.ai</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Full Stack &amp; AI Developer building intelligent, scalable
              products across web, mobile, and applied AI.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-3 md:items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Navigation
            </h4>
            <nav className="flex flex-col items-start gap-2 md:items-center">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-cyan"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-surface/50 text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="#home"
              className="group mt-2 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-cyan"
            >
              Back to top
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-sm text-text-muted sm:flex-row">
          <p>© {currentYear} Abderazek Benhadjmbarek. All rights reserved.</p>
          <p className="font-mono text-xs">
            Built with <span className="text-accent-cyan">Next.js</span> ·{" "}
            <span className="text-accent-purple">Tailwind CSS</span> ·{" "}
            <span className="text-accent-emerald">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
