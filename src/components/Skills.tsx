import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";

const skillCategories = [
  {
    title: "Applied AI & GenAI",
    icon: "🤖",
    gradient: "from-accent-purple to-accent-pink",
    glow: "hover:border-accent-purple/40",
    skills: [
      { name: "LLaMA 3 / Groq API / Ollama", level: 92 },
      { name: "RAG & LlamaIndex Pipelines", level: 90 },
      { name: "ChromaDB & Vector Search", level: 88 },
      { name: "PyTorch & HuggingFace", level: 85 },
    ],
  },
  {
    title: "Full Stack Web (MERN)",
    icon: "🌐",
    gradient: "from-accent-cyan to-accent-blue",
    glow: "hover:border-accent-cyan/40",
    skills: [
      { name: "React.js / Vite / TailwindCSS", level: 95 },
      { name: "Node.js & Express.js", level: 92 },
      { name: "Redux Toolkit & i18n", level: 90 },
      { name: "Secure REST APIs & JWT", level: 94 },
    ],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    gradient: "from-accent-emerald to-accent-cyan",
    glow: "hover:border-accent-emerald/40",
    skills: [
      { name: "Flutter & Dart", level: 90 },
      { name: "Cross-Platform UI/UX", level: 88 },
      { name: "OpenStreetMap & Geo Services", level: 85 },
      { name: "Real-Time Chat & State", level: 88 },
    ],
  },
  {
    title: "Programming Languages",
    icon: "💻",
    gradient: "from-accent-cyan to-accent-emerald",
    glow: "hover:border-accent-cyan/40",
    skills: [
      { name: "Python", level: 94 },
      { name: "JavaScript (ES6+) & TypeScript", level: 92 },
      { name: "Dart", level: 88 },
      { name: "C / Java / PHP / Kotlin", level: 82 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "🗄️",
    gradient: "from-accent-purple to-accent-blue",
    glow: "hover:border-accent-purple/40",
    skills: [
      { name: "MongoDB (Mongoose / Aggregations)", level: 92 },
      { name: "MySQL / Relational DBs", level: 85 },
      { name: "Cloudinary (Media Management)", level: 90 },
      { name: "Data Modeling & Architecture", level: 88 },
    ],
  },
  {
    title: "DevOps & Workflows",
    icon: "⚙️",
    gradient: "from-accent-emerald to-accent-purple",
    glow: "hover:border-accent-emerald/40",
    skills: [
      { name: "Docker Containerization", level: 88 },
      { name: "Nginx Reverse Proxy", level: 82 },
      { name: "Git & GitHub Collaboration", level: 92 },
      { name: "Postman, Linux & Scrum", level: 90 },
    ],
  },
];

const toolsRowOne = [
  "Python",
  "React.js",
  "Flutter",
  "Node.js",
  "Express.js",
  "MongoDB",
  "LLaMA 3",
  "Groq API",
  "PyTorch",
  "Docker",
  "TailwindCSS",
  "TypeScript",
  "Redux Toolkit",
  "JWT",
  "Java",
  "PHP",
  "Kotlin",
];

const toolsRowTwo = [
  "JavaScript",
  "Dart",
  "ChromaDB",
  "LlamaIndex",
  "MySQL",
  "Nginx",
  "Git",
  "Cloudinary",
  "Postman",
  "Streamlit",
  "Linux",
  "Figma",
  "Scrum",
  "LaTeX",
  "Excel",
  "Canva",
  "Adobe Photoshop",
];

function ToolChip({ label }: { label: string }) {
  return (
    <span className="mx-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-4 py-2 text-sm text-text-secondary transition-colors duration-300 hover:border-accent-cyan/40 hover:text-accent-cyan">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/70" />
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.35] mask-fade-y" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technical Expertise"
          title={
            <>
              Skills &amp;{" "}
              <span className="gradient-text gradient-text-animated">
                Technologies
              </span>
            </>
          }
          description="A comprehensive technical toolkit spanning Applied AI, Full-Stack Web, Cross-Platform Mobile, and Cloud/DevOps"
        />

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 70} dir="scale">
              <div
                className={`spotlight group h-full rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${category.glow}`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/70 text-2xl ring-1 ring-border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={category.gradient}
                      delay={j * 120}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="mt-16 space-y-4">
          <Marquee>
            {toolsRowOne.map((tool) => (
              <ToolChip key={tool} label={tool} />
            ))}
          </Marquee>
          <Marquee reverse>
            {toolsRowTwo.map((tool) => (
              <ToolChip key={tool} label={tool} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
