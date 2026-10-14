const experiences = [
  {
    role: "Senior Data Scientist",
    company: "TechCorp AI",
    period: "2023 – Present",
    type: "Full-time",
    description:
      "Leading a team of 5 data scientists building AI solutions for enterprise clients. Architected a real-time recommendation engine serving 10M+ users.",
    highlights: [
      "Built RAG-based document intelligence platform with 94% accuracy",
      "Reduced model inference latency by 60% through optimization",
      "Led migration of ML pipelines to Kubernetes-based infrastructure",
    ],
    tech: ["PyTorch", "LangChain", "Kubernetes", "AWS", "MLflow"],
  },
  {
    role: "Data Scientist",
    company: "DataDriven Inc.",
    period: "2021 – 2023",
    type: "Full-time",
    description:
      "Developed and deployed machine learning models for predictive analytics and NLP applications across financial services.",
    highlights: [
      "Designed fraud detection system processing 10M+ daily transactions",
      "Built NLP pipeline for automated document classification (F1: 0.93)",
      "Mentored 3 junior data scientists and established best practices",
    ],
    tech: ["Scikit-learn", "TensorFlow", "Spark", "GCP", "Docker"],
  },
  {
    role: "ML Engineer Intern",
    company: "InnovateLab",
    period: "2020 – 2021",
    type: "Internship",
    description:
      "Contributed to computer vision and NLP research projects. Published a paper on efficient transfer learning for medical imaging.",
    highlights: [
      "Developed chest X-ray classification model (AUC: 0.91)",
      "Co-authored research paper accepted at MICCAI workshop",
      "Optimized data preprocessing pipeline, reducing training time by 40%",
    ],
    tech: ["PyTorch", "OpenCV", "CUDA", "Weights & Biases", "Linux"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role + exp.company}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:ml-0"
                  : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 w-4 h-4 rounded-full bg-accent-cyan border-4 border-background z-10 ${
                  index % 2 === 0
                    ? "left-[-8px] md:left-auto md:right-[-8px]"
                    : "left-[-8px] md:left-[-8px]"
                }`}
              />

              {/* Card */}
              <div className="bg-surface rounded-2xl p-6 border border-border hover:border-accent-cyan/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent-cyan font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="text-sm text-text-secondary font-mono">
                      {exp.period}
                    </span>
                    <span className="block text-xs text-accent-purple mt-1">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-accent-emerald mt-0.5">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-background text-xs text-text-secondary border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
