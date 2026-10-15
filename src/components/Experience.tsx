"use client";

import { useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Briefcase,
  Code,
  Globe,
  GraduationCap,
  Landmark,
  Link2,
  MapPin,
  RefreshCw,
  ScrollText,
  ShoppingCart,
  Smartphone,
  Target,
  Zap,
} from "@/components/ui/Icon";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Shopina",
    initials: "SH",
    period: "Jan 2026 – Mar 2026",
    type: "Client Project",
    location: "Tunisia · Remote",
    link: { label: "shopina.tn", href: "https://www.shopina.tn" },
    description:
      "Designed, developed, and deployed a production-ready MERN e-commerce platform for an active commercial client, handling end-to-end architecture from frontend UI to Dockerized cloud deployment.",
    highlights: [
      "Built a scalable, multilingual (i18n) storefront with React.js, Vite, TailwindCSS, and Redux Toolkit",
      "Engineered secure REST APIs with JWT authentication, order workflows, wishlist, comments, and admin management",
      "Integrated Cloudinary media hosting, Docker containerization, Nginx reverse proxy, and Google OAuth",
      "Implemented analytics, promotional discount systems, SEO optimization, and dynamic sitemap generation",
      "Maintained and optimized the live platform for performance",
    ],
    tech: ["React.js", "Vite", "TailwindCSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "Nginx", "Cloudinary", "REST API", "i18n"],
    gradient: "from-accent-emerald to-accent-cyan",
  },
  {
    role: "Mobile & AI Developer — Final Year Internship",
    company: "Prologic Tunisia",
    initials: "PT",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    location: "Charguia 2, Tunis, Tunisia",
    link: { label: "GitHub · OPM-MOBILE", href: "https://github.com/Abderrazekk/OPM-MOBILE" },
    description:
      "Conducted requirements analysis and functional specification writing, then developed an enterprise cross-platform mobile application integrated with applied AI and geospatial services.",
    highlights: [
      "Developed cross-platform mobile app in Flutter, backed by a high-performance Node.js/Express REST API and MongoDB",
      "Implemented contract creation, site management, support ticketing, notifications, and secure JWT authentication",
      "Integrated applied AI capabilities leveraging Python, Groq API, Ollama, and LLaMA",
      "Conducted deployment, user acceptance testing, OpenStreetMap routing, UX refinements, and performance tuning",
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "JWT", "REST API", "OpenStreetMap", "Python", "Groq", "Ollama", "LLaMA", "Docker"],
    gradient: "from-accent-cyan to-accent-purple",
  },
  {
    role: "Web Developer Intern",
    company: "Real Estate Agency",
    initials: "RE",
    period: "Jul 2024 – Aug 2024",
    type: "Internship",
    location: "Ariana, Tunisia",
    link: { label: "GitHub · RealEstates-Agent", href: "https://github.com/Abderrazekk/RealEstates-Agent" },
    description:
      "Engineered and delivered a responsive real-estate web platform with real-time property listings, advanced filtering, and administrative management.",
    highlights: [
      "Constructed a high-converting responsive frontend using React.js (Vite), JavaScript, and TailwindCSS",
      "Developed Node.js/Express backend services with MongoDB and secure JWT authentication",
      "Optimized SEO, asset loading, and mobile responsiveness to maximize user engagement",
      "Trained the client's internal team on property catalog and content management workflows",
    ],
    tech: ["React.js", "JavaScript", "TailwindCSS", "Node.js", "Express.js", "JWT", "REST API", "MongoDB", "Docker"],
    gradient: "from-accent-purple to-accent-pink",
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
  { title: "AI Engineer for Data Scientists Associate", issuer: "DataCamp", icon: Brain, tint: "text-accent-purple", badge: "AI & ML", link: "https://www.linkedin.com/in/abderazek-benhadjmbarek-9650612a3/details/certifications/1779206907574/single-media-viewer/?profileId=ACoAAEkoIh0BgqnBmZaRKA0gXhTSviDEYUVQSWY" },
  { title: "AI Engineer for Developers Associate", issuer: "DataCamp", icon: Code, tint: "text-accent-cyan", badge: "Applied AI", link: "https://www.linkedin.com/in/abderazek-benhadjmbarek-9650612a3/details/certifications/1775912629937/single-media-viewer/?profileId=ACoAAEkoIh0BgqnBmZaRKA0gXhTSviDEYUVQSWY" },
  { title: "Mobile Developer - Internship", issuer: "Prologic Tunisie", icon: Smartphone, tint: "text-accent-emerald", badge: "Mobile", link: "https://www.linkedin.com/in/abderazek-benhadjmbarek-9650612a3/details/certifications/1755775134891/single-media-viewer/?profileId=ACoAAEkoIh0BgqnBmZaRKA0gXhTSviDEYUVQSWY" },
  { title: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", icon: Zap, tint: "text-accent-cyan", badge: "Edge AI", link: "https://learn.nvidia.com/certificates?id=f29051a2ffc54b28b94690e7611d194c" },
  { title: "Data Science", issuer: "Cisco Networking Academy", icon: BarChart3, tint: "text-accent-blue", badge: "Data Science", link: "https://www.credly.com/badges/e16e1f75-dd55-4cd8-9c52-4fa2edac1581/public_url" },
  { title: "Scrum Fundamentals", issuer: "SCRUMstudy", icon: RefreshCw, tint: "text-accent-purple", badge: "Agile", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-BelhadjmbarekAbderazek-1046869.pdf" },
  { title: "E-Commerce", issuer: "TuniTech", icon: ShoppingCart, tint: "text-accent-emerald", badge: "Web Systems", link: "https://www.linkedin.com/in/abderazek-benhadjmbarek-9650612a3/details/certifications/1709983931327/single-media-viewer/?profileId=ACoAAEkoIh0BgqnBmZaRKA0gXhTSviDEYUVQSWY" },
  { title: "Full Stack Development", issuer: "ATAST", icon: Globe, tint: "text-accent-cyan", badge: "Full Stack", link: "https://www.linkedin.com/in/abderazek-benhadjmbarek-9650612a3/details/certifications/1707661550514/single-media-viewer/?profileId=ACoAAEkoIh0BgqnBmZaRKA0gXhTSviDEYUVQSWY" },
  { title: "Effective Leadership", issuer: "HP", icon: Target, tint: "text-accent-pink", badge: "Leadership", link: "https://www.life-global.org/certificate/d2bd09c5-f420-4491-bc1d-663440c6dfa5" },
];

const tabs = [
  { key: "experience", label: "Experience", icon: Briefcase, count: experiences.length },
  { key: "education", label: "Education", icon: GraduationCap, count: education.length },
  { key: "certifications", label: "Certifications", icon: ScrollText, count: certifications.length },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onTabKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const index = tabs.findIndex((t) => t.key === activeTab);
    const next =
      e.key === "ArrowRight"
        ? tabs[(index + 1) % tabs.length]
        : tabs[(index - 1 + tabs.length) % tabs.length];
    setActiveTab(next.key);
    tabRefs.current[next.key]?.focus();
  };

  return (
    <section id="experience" className="section">
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.25] mask-fade-y" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Trajectory"
          index="04 / 05"
          title={
            <>
              Experience &amp;{" "}
              <span className="gradient-text gradient-text-animated">
                Qualifications
              </span>
            </>
          }
          description="Practical industry experience, academic excellence in Data Science & AI, and verified certifications."
        />

        {/* Tabs */}
        <Reveal delay={160}>
          <div
            role="tablist"
            aria-label="Experience, education and certifications"
            onKeyDown={onTabKeyDown}
            className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1.5 rounded-2xl border border-border/60 bg-surface/40 p-1.5 backdrop-blur-md sm:rounded-full"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  ref={(el) => {
                    tabRefs.current[tab.key] = el;
                  }}
                  id={`tab-${tab.key}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-background shadow-glow-cyan"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span aria-hidden>
                    <tab.icon className="h-4 w-4" />
                  </span>
                  {tab.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      isActive
                        ? "bg-background/25 text-background"
                        : "bg-surface-light text-text-muted"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panels */}
        <div
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="mt-12 animate-fade-down"
        >
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
                    className={`absolute top-7 h-4 w-4 rounded-full border-4 border-background bg-accent-cyan shadow-[0_0_14px_var(--color-accent-cyan)] ${
                      index % 2 === 0
                        ? "left-[-8px] md:left-auto md:right-[-8px]"
                        : "left-[-8px]"
                    }`}
                  />

                  <div className="card group p-6">
                    <div className="mb-5 flex items-start gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${exp.gradient} font-mono text-xs font-bold text-background`}
                      >
                        {exp.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold leading-snug text-text-primary md:text-lg">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-accent-cyan">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="chip">{exp.period}</span>
                      <span className="chip">{exp.type}</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-pretty mb-4 text-sm leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>

                    <ul className="mb-5 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs leading-relaxed text-text-secondary sm:text-[13px]"
                        >
                          <span className="mt-0.5 flex-shrink-0 text-accent-emerald">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-4">
                      {exp.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    {exp.link && (
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-emerald transition-colors hover:text-accent-cyan"
                      >
                        <Link2 className="h-3.5 w-3.5" />
                        {exp.link.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="grid gap-5 md:grid-cols-2">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 70} dir="scale">
                  <div className="card flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2.5 py-1 font-mono text-[11px] text-accent-cyan">
                        {edu.badge}
                      </span>
                      <span className="text-right font-mono text-[11px] text-text-muted">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-balance mb-2 text-base font-semibold leading-snug text-text-primary md:text-lg">
                      {edu.degree}
                    </h3>
                    <p className="mb-3 flex items-center gap-1.5 text-sm font-medium text-accent-purple">
                      <Landmark className="h-4 w-4 shrink-0" />
                      {edu.institution}
                    </p>
                    <p className="text-pretty mt-auto text-sm leading-relaxed text-text-secondary">
                      {edu.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS */}
          {activeTab === "certifications" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 50} dir="scale">
                  <div className="card flex h-full flex-col p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/70 ring-1 ring-border">
                        <cert.icon className={`h-5 w-5 ${cert.tint}`} />
                      </span>
                      <span className="chip">{cert.badge}</span>
                    </div>
                    <h4 className="text-balance text-sm font-semibold leading-snug text-text-primary">
                      {cert.title}
                    </h4>
                    <div className="mt-auto border-t border-border/50 pt-3">
                      <p className="text-xs font-medium text-accent-emerald">
                        Issued by {cert.issuer}
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center gap-1 text-xs text-accent-cyan transition-colors hover:underline"
                        >
                          Verify credential <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
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
