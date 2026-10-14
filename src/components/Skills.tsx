const skillCategories = [
  {
    title: "Machine Learning",
    icon: "🧠",
    color: "accent-cyan",
    skills: [
      { name: "Scikit-learn", level: 95 },
      { name: "XGBoost / LightGBM", level: 90 },
      { name: "Feature Engineering", level: 92 },
      { name: "Model Optimization", level: 88 },
    ],
  },
  {
    title: "Deep Learning",
    icon: "🔮",
    color: "accent-purple",
    skills: [
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow / Keras", level: 88 },
      { name: "Transformers (HuggingFace)", level: 85 },
      { name: "Computer Vision (CNNs)", level: 87 },
    ],
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    color: "accent-emerald",
    skills: [
      { name: "Python / Pandas / NumPy", level: 96 },
      { name: "SQL / PostgreSQL", level: 90 },
      { name: "Apache Spark", level: 80 },
      { name: "ETL / Data Pipelines", level: 85 },
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: "☁️",
    color: "accent-cyan",
    skills: [
      { name: "Docker / Kubernetes", level: 82 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "MLflow / Weights & Biases", level: 88 },
      { name: "CI/CD for ML", level: 80 },
    ],
  },
  {
    title: "NLP & GenAI",
    icon: "💬",
    color: "accent-purple",
    skills: [
      { name: "LLMs / RAG", level: 90 },
      { name: "LangChain / LlamaIndex", level: 85 },
      { name: "Text Classification / NER", level: 88 },
      { name: "Prompt Engineering", level: 92 },
    ],
  },
  {
    title: "Visualization & BI",
    icon: "📊",
    color: "accent-emerald",
    skills: [
      { name: "Matplotlib / Seaborn", level: 92 },
      { name: "Plotly / Dash", level: 85 },
      { name: "Tableau / Power BI", level: 80 },
      { name: "Streamlit", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning the full data science and AI lifecycle
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-surface rounded-2xl p-6 border border-border hover:border-accent-cyan/30 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-text-secondary">{skill.name}</span>
                      <span className="text-text-secondary font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          category.color === "accent-cyan"
                            ? "from-accent-cyan to-accent-cyan/60"
                            : category.color === "accent-purple"
                            ? "from-accent-purple to-accent-purple/60"
                            : "from-accent-emerald to-accent-emerald/60"
                        } transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools ticker */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
            "Python", "R", "SQL", "TensorFlow", "PyTorch", "Spark",
            "Docker", "Git", "Linux", "Jupyter", "VS Code", "AWS",
            "GCP", "MongoDB", "Redis", "FastAPI", "Flask", "Airflow",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
