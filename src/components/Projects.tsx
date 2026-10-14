"use client";

import { useState } from "react";

const projects = [
  {
    title: "AI-Powered Fraud Detection System",
    description:
      "Real-time fraud detection pipeline processing 10M+ transactions daily using ensemble ML models. Achieved 99.2% accuracy with <50ms latency.",
    tags: ["XGBoost", "Kafka", "FastAPI", "Docker", "PostgreSQL"],
    category: "ML",
    metrics: "99.2% accuracy · 10M+ txns/day",
    github: "#",
    demo: "#",
    gradient: "from-accent-cyan to-blue-500",
  },
  {
    title: "LLM-Powered Document Intelligence",
    description:
      "RAG-based document Q&A system using LangChain and GPT-4. Processes legal and financial documents with 94% answer accuracy.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Streamlit", "Python"],
    category: "GenAI",
    metrics: "94% accuracy · 50K+ docs indexed",
    github: "#",
    demo: "#",
    gradient: "from-accent-purple to-pink-500",
  },
  {
    title: "Predictive Maintenance Platform",
    description:
      "IoT sensor data analysis platform predicting equipment failures 72 hours in advance. Reduced unplanned downtime by 45%.",
    tags: ["LSTM", "TensorFlow", "AWS IoT", "Grafana", "TimescaleDB"],
    category: "DL",
    metrics: "72hr prediction · 45% less downtime",
    github: "#",
    demo: "#",
    gradient: "from-accent-emerald to-teal-500",
  },
  {
    title: "Medical Image Classification",
    description:
      "Deep learning model for classifying chest X-rays into 14 pathology categories using transfer learning on DenseNet-121.",
    tags: ["PyTorch", "DenseNet", "OpenCV", "DICOM", "GCP"],
    category: "CV",
    metrics: "0.91 AUC · 200K+ images",
    github: "#",
    demo: "#",
    gradient: "from-cyan-500 to-accent-cyan",
  },
  {
    title: "Customer Churn Prediction Engine",
    description:
      "End-to-end ML pipeline with automated feature engineering, model training, and real-time scoring API. Deployed on AWS SageMaker.",
    tags: ["Scikit-learn", "SageMaker", "MLflow", "Airflow", "React"],
    category: "ML",
    metrics: "87% precision · $2M saved annually",
    github: "#",
    demo: "#",
    gradient: "from-accent-purple to-accent-cyan",
  },
  {
    title: "NLP Sentiment Analysis Dashboard",
    description:
      "Real-time social media sentiment tracker analyzing 100K+ posts/day. Features topic modeling, trend detection, and alerting.",
    tags: ["BERT", "spaCy", "Spark NLP", "Dash", "ElasticSearch"],
    category: "NLP",
    metrics: "100K+ posts/day · Real-time",
    github: "#",
    demo: "#",
    gradient: "from-orange-500 to-accent-purple",
  },
];

const categories = ["All", "ML", "DL", "NLP", "GenAI", "CV"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A selection of data science and AI projects showcasing end-to-end
            problem solving
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent-cyan text-background"
                  : "bg-surface border border-border text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-surface rounded-2xl border border-border hover:border-accent-cyan/30 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-mono mb-4 w-fit">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="text-accent-emerald">📈</span>
                  <span className="text-accent-emerald font-mono text-xs">
                    {project.metrics}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-background text-xs text-text-secondary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                    aria-label={`View code for ${project.title}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-purple transition-colors"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
