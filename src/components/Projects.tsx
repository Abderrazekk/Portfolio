"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { ArrowUpRight } from "@/components/ui/Icon";

type Project = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: string;
  metrics: string;
  github?: string;
  demo?: string;
  gradient: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Tunisian Guest House Booking Platform",
    date: "Aug – Sep 2026",
    description:
      "Comprehensive MERN stack platform for reserving guest houses in Tunisia. Features multi-role access (Admin/Client), interactive map-based property search, an intelligent filter chatbot, wishlist management, and dynamic image hosting.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    category: "Full Stack",
    metrics: "Map-Based Search · Intelligent Chatbot Filtering",
    github: "https://github.com/Abderrazekk/EstatePro",
    gradient: "from-orange-500 to-accent-purple",
  },
  {
    title: "Online Credit Platform & AI Chatbot",
    date: "Apr – May 2026",
    description:
      "Design and implementation of a secure web application for credit management integrating financial simulations, multi-role dashboards, and an interactive support chatbot powered by LLaMA 3.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python", "Groq", "LLaMA 3", "Ollama", "Docker"],
    category: "GenAI",
    metrics: "Financial Simulations · AI Chatbot",
    github: "https://github.com/Abderrazekk/Plateforme-de-Credit-en-Ligne-avec-Chatbot",
    gradient: "from-accent-blue to-accent-emerald",
  },
  {
    title: "OptiMedLab – Laboratory ERP & AI Platform",
    date: "Feb – Apr 2026",
    description:
      "Full-stack Enterprise Resource Planning (ERP) solution designed specifically for laboratory environments. Streamlines lab operations from inventory & supplier management to financial tracking and intelligent data interaction with LLaMA 3.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python", "Groq", "LLaMA 3", "Ollama", "Docker"],
    category: "Full Stack",
    metrics: "Full ERP Lifecycle · LLaMA 3 Integration",
    github: "https://github.com/Abderrazekk/OptimedLab",
    gradient: "from-accent-cyan to-accent-blue",
  },
  {
    title: "ENA-Mentor AI: Sovereign RAG & Decision Simulator",
    date: "Mar – Apr 2026",
    description:
      "Built a secure Retrieval-Augmented Generation (RAG) platform and interactive role-play simulator for public administration training. Engineered a local vector search pipeline to accurately synthesize decades of institutional archives and legal texts without AI hallucinations.",
    tags: ["Python", "LlamaIndex", "Groq (Llama-3)", "CamemBERT", "ChromaDB", "Streamlit", "PyMuPDF", "Docker"],
    category: "GenAI",
    metrics: "Local Vector Search · Zero Hallucinations",
    github: "https://github.com/Abderrazekk/ENA-Mentor-AI",
    gradient: "from-accent-purple to-accent-pink",
    featured: true,
  },
  {
    title: "Shopina – Production MERN E-Commerce Platform",
    date: "Jan – Mar 2026",
    description:
      "Designed and deployed a production-ready MERN e-commerce platform for a real client. Features Redux Toolkit state, multilingual support (i18n), JWT auth, order, wishlist and comments tracking, SEO optimization, Cloudinary, Docker, and Nginx.",
    tags: ["React.js", "Vite", "TailwindCSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "Nginx", "Cloudinary", "i18n"],
    category: "Full Stack",
    metrics: "Production Client Deployment · Multilingual (i18n)",
    demo: "https://www.shopina.tn",
    gradient: "from-accent-emerald to-teal-500",
  },
  {
    title: "TuniSwipe – Swipe-Based Matching App",
    date: "Oct – Dec 2025",
    description:
      "Cross-platform mobile application with an intuitive swipe interface for matching, including real-time chat, profiles, and algorithmic partner suggestions.",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Docker"],
    category: "Mobile",
    metrics: "Real-Time Chat · Algorithmic Matching",
    github: "https://github.com/Abderrazekk/TuniSwipe",
    gradient: "from-accent-pink to-accent-purple",
  },
  {
    title: "AI Bone Fracture Detection System",
    date: "Feb – Mar 2024",
    description:
      "Machine learning system for X-ray fracture detection and localization, improving diagnostic accuracy through medical image processing and classification methods.",
    tags: ["Python", "PyTorch", "Keras", "PIL", "Matplotlib", "Seaborn"],
    category: "CV",
    metrics: "Deep Learning · Medical Image Processing",
    github: "https://github.com/Abderrazekk/AI-Bone-Fracture-Detection",
    gradient: "from-cyan-500 to-accent-cyan",
  },
];

const categories = ["All", "GenAI", "Full Stack", "Mobile", "CV"];

const categoryCount = (category: string) =>
  category === "All"
    ? projects.length
    : projects.filter((p) => p.category === category).length;

function CodeLink({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${title}`}
      className="group/link flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-cyan"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
}

function PipelineVisual() {
  const steps = [
    { label: "archives + legal texts", tag: "pdf" },
    { label: "chunking & embeddings", tag: "camembert" },
    { label: "vector retrieval", tag: "chromadb" },
    { label: "llama-3 synthesis", tag: "groq" },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-5">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-text-muted uppercase">
        <span>rag_pipeline</span>
        <span className="inline-flex items-center gap-1.5 text-accent-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
          grounded
        </span>
      </div>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={step.label} className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-accent-purple">
              0{i + 1}
            </span>
            <span className="flex-1 truncate font-mono text-xs text-text-secondary">
              {step.label}
            </span>
            <span className="chip">{step.tag}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-surface ring-1 ring-border/50">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-[sweep_5.5s_linear_infinite]" />
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          index="03 / 05"
          title={
            <>
              Selected{" "}
              <span className="gradient-text gradient-text-animated">
                projects
              </span>
            </>
          }
          description="Production systems and research-grade experiments — from client e-commerce and ERP platforms to sovereign RAG pipelines and medical imaging models."
        />

        {/* Filters */}
        <Reveal delay={160}>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1.5 rounded-2xl border border-border/60 bg-surface/40 p-1.5 backdrop-blur-md sm:rounded-full"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-background shadow-glow-cyan"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive
                        ? "bg-background/25 text-background"
                        : "bg-surface-light text-text-muted"
                    }`}
                  >
                    {categoryCount(cat)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div
          key={activeCategory}
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project, i) => (
            <article
              key={project.title}
              className="ring-gradient spotlight group relative animate-rise overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur-sm md:col-span-2 md:p-8"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.gradient}`}
              />
              <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-accent-purple/40 bg-accent-purple/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-accent-purple">
                      Featured
                    </span>
                    <span className="chip">{project.category}</span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-balance text-xl font-semibold text-text-primary transition-colors group-hover:text-accent-cyan md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="text-pretty mt-3 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent-emerald">
                    <span>◆</span>
                    {project.metrics}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-5">
                    {project.github && (
                      <CodeLink href={project.github} label="Code" title={project.title} />
                    )}
                    {project.demo && (
                      <CodeLink href={project.demo} label="Live Demo" title={project.title} />
                    )}
                  </div>
                </div>

                <PipelineVisual />
              </div>
            </article>
          ))}

          {rest.map((project, i) => (
            <div
              key={project.title}
              className="h-full animate-rise"
              style={{ animationDelay: `${(i + featured.length) * 70}ms` }}
            >
              <TiltCard className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-cyan/40">
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <span className="absolute right-5 top-5 font-mono text-[11px] text-text-muted">
                    {String(i + featured.length + 1).padStart(2, "0")}
                  </span>

                  <div className="mb-4 flex flex-wrap items-center gap-2 pr-8">
                    <span className="chip">{project.category}</span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-balance text-lg font-semibold leading-snug text-text-primary transition-colors duration-300 group-hover:text-accent-cyan">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-accent-emerald">
                    <span>◆</span>
                    {project.metrics}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-5 border-t border-border/50 pt-5">
                    {project.github && (
                      <CodeLink href={project.github} label="Code" title={project.title} />
                    )}
                    {project.demo && (
                      <CodeLink href={project.demo} label="Live Demo" title={project.title} />
                    )}
                    {!project.github && !project.demo && (
                      <span className="font-mono text-[11px] text-text-muted">
                        private / client project
                      </span>
                    )}
                  </div>
                </article>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
