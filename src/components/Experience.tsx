"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Shopina",
    period: "Jan 2026 – Mar 2026",
    type: "Client Project",
    location: "Tunisia · Remote",
    description:
      "Designed, developed, and deployed a production-ready MERN e-commerce platform for an active commercial client, handling end-to-end architecture from frontend UI to Dockerized cloud deployment.",
    highlights: [
      "Built a scalable, multilingual (i18n) storefront with React.js, Vite, TailwindCSS, and Redux Toolkit",
      "Engineered secure REST APIs with JWT authentication, order workflows, wishlist, and admin management",
      "Integrated Cloudinary media hosting, Docker containerization, Nginx reverse proxy, and Google OAuth",
      "Implemented analytics, promotional discount systems, SEO optimization, and dynamic sitemap generation",
    ],
    tech: ["React.js", "Vite", "TailwindCSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "Cloudinary", "JWT", "i18n"],
  },
  {
    role: "Mobile & AI Developer — Final Year Internship",
    company: "Prologic Tunisia",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    location: "Charguia 2, Tunis, Tunisia",
    description:
      "Conducted requirements analysis and developed an enterprise cross-platform mobile application integrated with applied AI and geospatial services.",
    highlights: [
      "Developed cross-platform mobile app in Flutter, backed by a high-performance Node.js/Express REST API and MongoDB",
      "Implemented contract creation, site management, support ticketing, notifications, and secure JWT authentication",
      "Integrated applied AI capabilities leveraging Python, Groq API, Ollama, and LLaMA",
      "Conducted deployment, user acceptance testing, OpenStreetMap routing, UX refinements, and performance tuning",
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "JWT", "OpenStreetMap", "Python", "Groq", "Ollama", "LLaMA", "Docker"],
  },
  {
    role: "Web Developer Intern",
    company: "Real Estate Agency",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    location: "Ariana, Tunisia",
    description:
      "Engineered and delivered a responsive real-estate web platform with real-time property listings, advanced filtering, and administrative management.",
    highlights: [
      "Constructed a high-converting responsive frontend using React.js (Vite), JavaScript, and TailwindCSS",
      "Developed Node.js/Express backend services with MongoDB and secure JWT authentication",
      "Optimized SEO, asset loading, and mobile responsiveness to maximize user engagement",
      "Trained the client's internal team on property catalog and content management workflows",
    ],
    tech: ["React.js", "JavaScript", "TailwindCSS", "Node.js", "Express.js", "JWT", "MongoDB", "Docker"],
  },
];

const education = [
  {
    degree: "Engineering Degree in Data Science & Artificial Intelligence",
    institution: "TEK-UP University",
    period: "Sep 2026 – Expected Jun 2028",
    badge: "In Progress",
    description:
      "Specialized engineering curriculum focused on advanced machine learning, deep learning architectures, statistical modeling, distributed systems, and production MLOps.",
  },
  {
    degree: "Master's Degree in Computer Science",
    institution: "Faculty of Sciences of Bizerte",
    period: "Sep 2025 – Expected Jun 2027",
    badge: "In Progress",
    description:
      "Advanced studies in algorithmic theory, software architecture, distributed databases, artificial intelligence, and secure computing systems.",
  },
  {
    degree: "Licence in Computer Science — Software Engineering & Information Systems",
    institution: "Faculty of Sciences of Bizerte",
    period: "Sep 2022 – Jun 2025",
    badge: "Completed",
    description:
      "Rigorous foundations in object-oriented programming, data structures, algorithms, database management, software design patterns, and web/mobile engineering.",
  },
  {
    degree: "Baccalaureate in Mathematics",
    institution: "Secondary High School of Kalaat Andalous",
    period: "Graduated: 2022",
    badge: "Graduated",
    description:
      "Strong mathematical and analytical foundation in calculus, algebra, statistics, probability, and physics.",
  },
];

const certifications = [
  { title: "AI Engineer for Data Scientists Associate", issuer: "DataCamp", icon: "🧠", badge: "AI & ML" },
  { title: "AI Engineer for Developers Associate", issuer: "DataCamp", icon: "💻", badge: "Applied AI" },
  { title: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", icon: "⚡", badge: "Edge AI" },
  { title: "Data Science", issuer: "Cisco Networking Academy", icon: "📊", badge: "Data Science" },
  { title: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy", icon: "🔄", badge: "Agile" },
  { title: "Full Stack Development", issuer: "ATAST", icon: "🌐", badge: "Full Stack" },
  { title: "Effective Leadership", issuer: "HP", icon: "🎯", badge: "Leadership" },
  { title: "E-Commerce Architecture", issuer: "TuniTech", icon: "🛒", badge: "Web Systems" },
];

const tabs = [
  { key: "experience", label: "Work Experience", icon: "💼", count: experiences.length },
  { key: "education", label: "Education", icon: "🎓", count: education.length },
  { key: "certifications", label: "Certifications", icon: "📜", count: certifications.length },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.3] mask-fade-y" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Trajectory"
          title={
            <>
              Experience &amp;{" "}
              <span className="gradient-text gradient-text-animated">
                Qualifications
              </span>
            </>
          }
          description="Practical industry experience, academic excellence in Data Science & AI, and verified certifications"
        />

        {/* Tabs */}
        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-2xl border border-border/60 bg-surface/40 p-1.5 backdrop-blur-md sm:rounded-full sm:w-fit sm:mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-background shadow-glow-cyan"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                    activeTab === tab.key
                      ? "bg-background/25 text-background"
                      : "bg-surface-light text-text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panels */}
        <div key={activeTab} className="mt-12 animate-fade-down">
          {/* WORK */}
          {activeTab === "experience" && (
            <div className="relative">
              <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent md:left-1/2 md:-translate-x-px" />

              {experiences.map((exp, index) => (
                <Reveal
                  key={exp.role + exp.company}
                  dir={index % 2 === 0 ? "left" : "right"}
                  className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`absolute top-6 h-4 w-4 rounded-full border-4 border-background bg-accent-cyan shadow-[0_0_14px_var(--color-accent-cyan)] ${
                      index % 2 === 0
                        ? "left-[-8px] md:left-auto md:right-[-8px]"
                        : "left-[-8px]"
                    }`}
                  />

                  <div className="spotlight group rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40">
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="font-medium text-accent-cyan">
                          {exp.company}
                        </p>
                        <p className="mt-0.5 text-xs text-text-muted">
                          📍 {exp.location}
                        </p>
                      </div>
                      <div className="flex-shrink-0 sm:text-right">
                        <span className="rounded-md border border-border bg-surface-light px-2.5 py-1 font-mono text-xs text-text-secondary">
                          {exp.period}
                        </span>
                        <span className="mt-1 block text-xs font-medium text-accent-purple">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>

                    <ul className="mb-5 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary sm:text-sm"
                        >
                          <span className="mt-0.5 flex-shrink-0 text-accent-emerald">
                            ▸
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 70} dir="scale">
                  <div className="spotlight group flex h-full flex-col rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2.5 py-1 font-mono text-xs text-accent-cyan">
                        {edu.badge}
                      </span>
                      <span className="font-mono text-xs text-text-muted">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-text-primary">
                      {edu.degree}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-accent-purple">
                      🏛️ {edu.institution}
                    </p>
                    <p className="mt-auto text-sm leading-relaxed text-text-secondary">
                      {edu.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 50} dir="scale">
                  <div className="spotlight group flex h-full flex-col justify-between rounded-xl border border-border/60 bg-surface/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40">
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                          {cert.icon}
                        </span>
                        <span className="rounded-full border border-border bg-surface-light px-2 py-0.5 font-mono text-[10px] text-text-secondary">
                          {cert.badge}
                        </span>
                      </div>
                      <h4 className="line-clamp-2 text-sm font-semibold text-text-primary transition-colors group-hover:text-accent-cyan">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="mt-3 border-t border-border/50 pt-3 text-xs font-medium text-accent-emerald">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
