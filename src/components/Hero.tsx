export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse-glow" />
          <span className="text-sm text-text-secondary">
            Available for new opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="block text-text-primary">Data Science</span>
          <span className="block gradient-text">&amp; AI Engineer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming complex data into actionable intelligence. I build
          end-to-end ML pipelines, deep learning models, and AI-powered
          solutions that drive business impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-background font-semibold hover:opacity-90 transition-opacity duration-200 w-full sm:w-auto"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 w-full sm:w-auto"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "30+", label: "Projects Delivered" },
            { value: "15+", label: "ML Models Deployed" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group cursor-pointer"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border group-hover:border-accent-cyan transition-colors flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent-cyan animate-bounce" />
        </div>
      </a>
    </section>
  );
}
