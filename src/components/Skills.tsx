import Marquee from "@/components/ui/Marquee";
import RadarChart, { type RadarDatum } from "@/components/ui/RadarChart";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import { Bot, Code, Database, Globe, Settings, Smartphone } from "@/components/ui/Icon";

const skillCategories = [
  {
    title: "Applied AI & GenAI",
    icon: Bot,
    tint: "text-accent-purple",
    gradient: "from-accent-purple to-accent-pink",
    skills: [
      { name: "LLaMA 3 / Groq API / Ollama", level: 92 },
      { name: "RAG & LlamaIndex Pipelines", level: 90 },
      { name: "ChromaDB & Vector Search", level: 88 },
      { name: "PyTorch & HuggingFace", level: 85 },
    ],
  },
  {
    title: "Full Stack Web (MERN)",
    icon: Globe,
    tint: "text-accent-cyan",
    gradient: "from-accent-cyan to-accent-blue",
    skills: [
      { name: "React.js / Vite / TailwindCSS", level: 95 },
      { name: "Node.js & Express.js", level: 92 },
      { name: "Redux Toolkit & i18n", level: 90 },
      { name: "Secure REST APIs & JWT", level: 94 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    tint: "text-accent-emerald",
    gradient: "from-accent-emerald to-accent-cyan",
    skills: [
      { name: "Flutter & Dart", level: 90 },
      { name: "Cross-Platform UI/UX", level: 88 },
      { name: "OpenStreetMap & Geo Services", level: 85 },
      { name: "Real-Time Chat & State", level: 88 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    tint: "text-accent-blue",
    gradient: "from-accent-cyan to-accent-emerald",
    skills: [
      { name: "Python", level: 94 },
      { name: "JavaScript (ES6+) & TypeScript", level: 92 },
      { name: "Dart", level: 88 },
      { name: "C / Java / PHP / Kotlin", level: 82 },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    tint: "text-accent-purple",
    gradient: "from-accent-purple to-accent-blue",
    skills: [
      { name: "MongoDB (Mongoose / Aggregations)", level: 92 },
      { name: "MySQL / Relational DBs", level: 85 },
      { name: "Cloudinary (Media Management)", level: 90 },
      { name: "Data Modeling & Architecture", level: 88 },
    ],
  },
  {
    title: "DevOps & Workflows",
    icon: Settings,
    tint: "text-accent-emerald",
    gradient: "from-accent-emerald to-accent-purple",
    skills: [
      { name: "Docker Containerization", level: 88 },
      { name: "Nginx Reverse Proxy", level: 82 },
      { name: "Git & GitHub Collaboration", level: 92 },
      { name: "Postman, Linux & Scrum", level: 90 },
    ],
  },
];

const radar: RadarDatum[] = [
  { label: "AI / GenAI", value: 90 },
  { label: "Web / MERN", value: 94 },
  { label: "Mobile", value: 88 },
  { label: "Languages", value: 90 },
  { label: "Data & DB", value: 89 },
  { label: "DevOps", value: 87 },
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
    <section id="skills" className="section">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.3] mask-fade-y" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technical Expertise"
          index="02 / 05"
          title={
            <>
              Skills &amp;{" "}
              <span className="gradient-text gradient-text-animated">
                Technologies
              </span>
            </>
          }
          description="A technical toolkit spanning Applied AI, Full-Stack Web, Cross-Platform Mobile, and Cloud / DevOps."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Proficiency radar */}
          <Reveal dir="left">
            <div className="card ring-gradient p-6 lg:sticky lg:top-28">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary">
                  Proficiency Map
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">
                  self-assessed
                </span>
              </div>
              <RadarChart data={radar} className="mx-auto aspect-square w-full max-w-[22rem]" />
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-center">
                {[
                  { k: "Domains", v: "6" },
                  { k: "Avg. level", v: "90%" },
                  { k: "Tools", v: "34+" },
                ].map((s) => (
                  <div key={s.k}>
                    <p className="gradient-text text-lg font-bold">{s.v}</p>
                    <p className="font-mono text-[10px] tracking-wider text-text-muted uppercase">
                      {s.k}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Category cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {skillCategories.map((category, i) => (
              <Reveal key={category.title} delay={i * 70} dir="scale">
                <div className={`card group h-full p-6`}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/70 ring-1 ring-border transition-transform duration-300 group-hover:scale-110">
                      <category.icon className={`h-5 w-5 ${category.tint}`} />
                    </span>
                    <h3 className="text-base font-semibold text-text-primary">
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
