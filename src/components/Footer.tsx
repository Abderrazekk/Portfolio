const currentYear = 2025;

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-bold text-background text-sm">
              DS
            </div>
            <span className="text-sm text-text-secondary">
              Designed &amp; Built with ❤️ and Python
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#home" className="hover:text-accent-cyan transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-accent-cyan transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent-cyan transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-secondary">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
