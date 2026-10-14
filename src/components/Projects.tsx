"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    title: "ENA-Mentor AI: Sovereign RAG & Decision Simulator",
    description:
      "Built a secure Retrieval-Augmented Generation (RAG) platform and interactive role-play simulator for public administration training. Engineered a local vector search pipeline to accurately synthesize decades of institutional archives and legal texts without AI hallucinations.",
    tags: ["Python", "LlamaIndex", "Groq (Llama-3)", "CamemBERT", "ChromaDB", "Streamlit", "Docker"],
    category: "GenAI",
    metrics: "Local Vector Search · Zero Hallucinations",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-accent-purple to-accent-pink",
    featured: true,
  },
  {
    title: "OptiMedLab – Laboratory ERP & AI Platform",
    description:
      "Full-stack Enterprise Resource Planning (ERP) solution designed specifically for laboratory environments. Streamlines lab operations from inventory & supplier management to financial tracking and intelligent data interaction with LLaMA 3.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python", "Groq", "LLaMA 3", "Docker"],
    category: "Full Stack",
    metrics: "Full ERP Lifecycle · LLaMA 3 Integration",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-accent-cyan to-accent-blue",
  },
  {
    title: "Online Credit Platform & AI Chatbot",
    description:
      "Design and implementation of a secure web application for credit management integrating financial simulations, multi-role dashboards, and an interactive support chatbot powered by LLaMA 3.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python", "Groq", "LLaMA 3", "Docker"],
    category: "GenAI",
    metrics: "Financial Simulations · AI Chatbot",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-accent-blue to-accent-emerald",
  },
  {
    title: "Shopina – Production MERN E-Commerce Platform",
    description:
      "Designed and deployed a production-ready MERN e-commerce platform for a real client. Features Redux Toolkit state, multilingual support (i18n), JWT auth, order and wishlist tracking, SEO optimization, Cloudinary, Docker, and Nginx.",
    tags: ["React.js", "Vite", "TailwindCSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "Cloudinary"],
    category: "Full Stack",
    metrics: "Production Client Deployment · Multilingual (i18n)",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-accent-emerald to-teal-500",
  },
  {
    title: "Tunisian Guest House Booking Platform",
    description:
      "Comprehensive MERN stack platform for reserving guest houses in Tunisia. Features multi-role access (Admin/Client), interactive map-based property search, an intelligent filter chatbot, wishlist management, and dynamic image hosting.",
    tags: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    category: "Full Stack",
    metrics: "Map-Based Search · Intelligent Chatbot Filtering",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-orange-500 to-accent-purple",
  },
  {
    title: "TuniSwipe – Swipe-Based Matching App",
    description:
      "Cross-platform mobile application with an intuitive swipe interface for matching, including real-time chat, profiles, and algorithmic partner suggestions.",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Docker"],
    category: "Mobile",
    metrics: "Real-Time Chat · Algorithmic Matching",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-accent-pink to-accent-purple",
  },
  {
    title: "AI Bone Fracture Detection System",
    description:
      "Deep learning computer vision system for X-ray fracture detection and localization, improving diagnostic accuracy through medical image processing and transfer learning classification methods.",
    tags: ["Python", "PyTorch", "Keras", "PIL", "Matplotlib", "Seaborn"],
    category: "CV",
    metrics: "Deep Learning · Medical Image Processing",
    github: "https://github.com/Abderrazekk",
    demo: "https://github.com/Abderrazekk",
    gradient: "from-cyan-500 to-accent-cyan",
  },
];

const categories = ["All", "GenAI", "Full Stack", "Mobile", "CV"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Featured{" "}
              <span className="gradient-text gradient-text-animated">
                Projects
              </span>
            </>
          }
          description="A selection of data science and AI projects showcasing end-to-end problem solving"
        />

        {/* Category filter */}
        <Reveal delay={160}>
          <div className="mt-12 mb-12 flex flex-wrap justify-center gap-2 rounded-full border border-border/60 bg-surface/40 p-1.5 backdrop-blur-md sm:w-fit sm:mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-background shadow-glow-cyan"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div
          key={activeCategory}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="group h-full animate-rise"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <TiltCard className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/60 backdrop-blur-sm transition-colors duration-300 hover:border-accent-cyan/40">
                  {/* Gradient header */}
                  <div
                    className={`relative h-1.5 bg-gradient-to-r ${project.gradient}`}
                  >
                    <div className="absolute inset-0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                <div className="relative flex flex-1 flex-col p-6">
                  {project.featured && (
                    <span className="absolute right-6 top-5 rounded-full border border-accent-purple/40 bg-accent-purple/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-purple">
                      Featured
                    </span>
                  )}

                  <span className="mb-4 inline-block w-fit rounded-full bg-accent-cyan/10 px-3 py-1 font-mono text-xs text-accent-cyan">
                    {project.category}
                  </span>

                  <h3 className="mb-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-accent-cyan">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4 flex items-center gap-2 text-sm">
                    <span className="text-accent-emerald">◆</span>
                    <span className="font-mono text-xs text-accent-emerald">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/70 bg-background/60 px-2 py-1 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-cyan"
                      aria-label={`View code for ${project.title}`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-purple"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
