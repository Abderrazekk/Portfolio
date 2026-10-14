export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Passionate About{" "}
            <span className="gradient-text">Data &amp; AI</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile visual */}
          <div className="relative flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-border flex items-center justify-center glow-cyan">
              <div className="text-center p-8">
                {/* Terminal-style */}
                <div className="bg-background rounded-xl p-6 font-mono text-sm text-left border border-border">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <p className="text-text-secondary">
                    <span className="text-accent-cyan">$</span> whoami
                  </p>
                  <p className="text-accent-emerald mt-1">
                    data_scientist_ai_engineer
                  </p>
                  <p className="text-text-secondary mt-3">
                    <span className="text-accent-cyan">$</span> cat skills.txt
                  </p>
                  <p className="text-accent-purple mt-1">
                    ML · DL · NLP · CV
                  </p>
                  <p className="text-accent-purple">
                    Python · SQL · Cloud
                  </p>
                  <p className="text-text-secondary mt-3">
                    <span className="text-accent-cyan">$</span>{" "}
                    <span className="animate-pulse">▊</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed text-lg">
              I&apos;m a Data Scientist and AI Engineer with a passion for
              leveraging machine learning and artificial intelligence to solve
              real-world problems. With expertise spanning statistical analysis,
              deep learning, and MLOps, I deliver end-to-end data solutions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My journey began with a fascination for patterns in data and has
              evolved into building production-grade AI systems. I specialize in
              NLP, Computer Vision, and Predictive Analytics, working with
              cross-functional teams to turn data into strategic assets.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I&apos;m not training models or optimizing pipelines, you&apos;ll
              find me contributing to open-source projects, writing technical
              articles, and mentoring aspiring data scientists.
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🎓", label: "MSc in Data Science" },
                { icon: "📍", label: "Open to Remote" },
                { icon: "🔬", label: "Published Researcher" },
                { icon: "🏆", label: "Kaggle Expert" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-border"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-text-secondary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
