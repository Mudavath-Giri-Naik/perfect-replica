import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import type { EmblaOptionsType } from "embla-carousel";
import {
  IconBrandGithub,
  IconExternalLink,
  IconArrowUpRight,
  IconPlayerPlayFilled,
  IconCode,
  IconSparkles,
  IconCategory,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";
import intentifyVideo from "@/assets/Intentify.mp4";
import doxyVideo from "@/assets/doxy.mp4";

/* ─── project data ─── */
const projects = [
  {
    name: "Intentify",
    badge: "For Recruiters",
    category: "Generative AI",
    tagline: "AI Assessment Generator",
    description:
      "Turns simple prompts into ready-to-use coding assessments for recruiters — powered by LLMs and structured evaluation.",
    github: "https://github.com/Mudavath-Giri-Naik/Intentify-v2",
    live: "https://intentify-v2.vercel.app/",
    tech: ["React", "Vite", "Node.js", "Express", "TRPC", "MongoDB", "LangChain", "Gemini API", "TypeScript"],
    accent: "#6366f1",
    accentLight: "rgba(99,102,241,0.08)",
    preview: { type: "video" as const, src: intentifyVideo },
  },
  {
    name: "Doxy",
    badge: "For Applicants",
    category: "Generative AI",
    tagline: "AI Document Editor",
    description:
      "An AI document editor — prepare your resumes in seconds by just pasting a JD and download instantly.",
    github: "https://github.com/Mudavath-Giri-Naik/Doxy.git",
    live: "https://doxy-two.vercel.app/",
    tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Groq SDK", "Lexical", "TypeScript"],
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.08)",
    preview: { type: "video" as const, src: doxyVideo },
  },
  {
    name: "Techmates",
    badge: "For Students",
    category: "Full Stack",
    tagline: "Campus Network App",
    description:
      "An all-in-one campus network app to discover internships, hackathons, events, and connect with students.",
    github: "https://github.com/Mudavath-Giri-Naik/Techmates.git",
    live: "https://play.google.com/store/apps/details?id=com.techmates.app",
    tech: ["Flutter", "Dart", "Supabase", "Edge Functions", "PostgreSQL", "FCM", "Google Sign-In"],
    accent: "#0ea5e9",
    accentLight: "rgba(14,165,233,0.08)",
    preview: { type: "image" as const, src: "/techmates.png" },
  },
  {
    name: "Ambox",
    badge: "For Creators & Editors",
    category: "Full Stack",
    tagline: "Creator Collaboration Platform",
    description:
      "A collaboration platform for creators and editors to manage projects, review versions, and ship content faster.",
    github: "https://github.com/Mudavath-Giri-Naik/ambox.git",
    live: "https://ambox-t6yf.vercel.app/",
    tech: ["Next.js", "React", "Supabase", "Gemini API", "Vercel", "shadcn/ui", "TypeScript"],
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.08)",
    preview: { type: "image" as const, src: "/ambox.png" },
  },
];

const categories = [
  { label: "All", icon: <IconCategory size={14} /> },
  { label: "Full Stack", icon: <IconCode size={14} /> },
  { label: "Generative AI", icon: <IconSparkles size={14} /> },
  { label: "AI agents" },
  { label: "AI automation" },
  { label: "MLOps" },
  { label: "RL" },
  { label: "Open Source" },
  { label: "Skills" },
];

/* ─── Skills data ─── */
const genAISkills = [
  {
    title: "Programming languages",
    skills: ["Python", "Java", "C++", "SQL"],
    icon: "💻",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    title: "ML frameworks & tools",
    skills: ["TensorFlow", "PyTorch", "Keras", "LangChain", "HuggingFace", "Scikit-learn", "XGBoost / LightGBM", "FastAPI", "Pandas & NumPy"],
    icon: "🧠",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
  },
  {
    title: "LLMs & GenAI",
    skills: ["GPT / OpenAI", "Llama", "RAG", "Vector databases", "Fine-tuning", "AI Agents", "Prompt engineering", "Ollama"],
    icon: "✨",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
  },
  {
    title: "MLOps & infrastructure",
    skills: ["Docker", "Kubernetes", "MLflow", "AWS SageMaker", "Azure ML", "Vertex AI", "CI/CD", "GitHub Actions", "Evidently AI"],
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
  },
  {
    title: "Foundational knowledge",
    skills: ["Linear algebra", "Statistics", "Calculus", "NLP", "Computer vision", "Reinforcement learning", "Probability", "DSA"],
    icon: "📐",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
  },
  {
    title: "System design & deployment",
    skills: ["REST API design", "Microservices", "HuggingFace Spaces", "Async programming", "Git & version control"],
    icon: "🏗️",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  },
];

/* ─── Animated Project Card ─── */
const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="pcard"
      style={{ '--accent': project.accent, '--accent-light': project.accentLight } as React.CSSProperties}
    >
      {/* Accent top line */}
      <div className="pcard__accent-line" />

      {/* Preview Area */}
      <div className="pcard__preview">
        {project.preview.type === "video" ? (
          <motion.video
            src={project.preview.src}
            autoPlay
            muted
            loop
            playsInline
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pcard__media"
          />
        ) : (
          <motion.img
            src={project.preview.src}
            alt={`${project.name} preview`}
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pcard__media"
          />
        )}

        {/* Shimmer gradient overlay */}
        <div className="pcard__shimmer" />

        {/* Category chip */}
        <div className="pcard__category">
          {project.preview.type === "video" && <IconPlayerPlayFilled size={10} />}
          {project.category}
        </div>

        {/* Hover reveal description */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pcard__desc-overlay"
        >
          <div className="pcard__desc-overlay-inner">
            <p className="pcard__desc-text">{project.description}</p>
            <div className="pcard__desc-actions">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="pcard__desc-cta">
                View Project <IconArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Card Body */}
      <div className="pcard__body">
        {/* Title row */}
        <div className="pcard__title-row">
          <div className="pcard__name-group">
            <h3 className="pcard__name">{project.name}</h3>
            <span className="pcard__badge">{project.badge}</span>
          </div>
          <span className="pcard__tagline">{project.tagline}</span>
        </div>

        {/* Tech stack */}
        <div className="pcard__tech">
          <TooltipProvider delayDuration={200}>
            {project.tech.slice(0, 5).map((t) => (
              <Tooltip key={t}>
                <TooltipTrigger asChild>
                  <span className="pcard__tech-item">{t}</span>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">{t}</TooltipContent>
              </Tooltip>
            ))}
            {project.tech.length > 5 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="pcard__tech-item pcard__tech-item--more">
                    +{project.tech.length - 5}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs">
                  {project.tech.slice(5).join(", ")}
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>

        {/* Action buttons */}
        <div className="pcard__actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="pcard__btn pcard__btn--ghost">
            <IconBrandGithub size={15} />
            <span>Code</span>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="pcard__btn pcard__btn--fill">
            <IconExternalLink size={14} />
            <span>Live Demo</span>
            <motion.span
              animate={{ x: isHovered ? 0 : -3, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "inline-flex" }}
            >
              <IconArrowUpRight size={12} />
            </motion.span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Skills Dashboard ─── */
const SkillsDashboard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <div className="skills__grid">
        {genAISkills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            className="skills__card"
          >
            <div className="skills__card-accent" style={{ background: group.gradient }} />
            <div className="skills__card-header">
              <span className="skills__card-icon">{group.icon}</span>
              <h4 className="skills__card-title">{group.title}</h4>
            </div>
            <div className="skills__card-pills">
              {group.skills.map((skill) => (
                <span key={skill} className="skills__pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const carouselOptions: EmblaOptionsType = { loop: true, align: "center" };

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="psection">
      <div className="psection__inner">
        <div className="psection__stage">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="psection__header"
          >
            <div className="psection__eyebrow">
              <span className="psection__eyebrow-line" />
              <span className="psection__eyebrow-text">Featured Work</span>
              <span className="psection__eyebrow-line" />
            </div>
            <h2 className="psection__title">Projects</h2>
            <p className="psection__subtitle">
              A curated collection of things I've built — from full-stack apps to AI‑powered tools.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="psection__filters"
          >
            <div className="psection__filters-track">
              {categories.map((cat) => {
                const isActive = cat.label === activeCategory;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`psection__pill ${isActive ? "psection__pill--active" : ""}`}
                  >
                    {cat.icon && <span className="psection__pill-icon">{cat.icon}</span>}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Dashboard */}
          <AnimatePresence mode="wait">
            {activeCategory === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <SkillsDashboard />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Cards */}
          <AnimatePresence mode="wait">
            {activeCategory !== "Skills" && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="psection__carousel"
              >
                {filtered.length === 0 ? (
                  <div className="psection__empty">
                    <IconSparkles size={28} className="psection__empty-icon" />
                    <p className="psection__empty-text">More projects coming soon in this category</p>
                  </div>
                ) : (
                  <MotionCarousel
                    slides={filtered.map((_, idx) => idx)}
                    options={carouselOptions}
                    renderSlide={(_, idx) => <ProjectCard key={filtered[idx].name} project={filtered[idx]} index={idx} />}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Scoped Styles ── */}
      <style>{`
        /* ═══════════════════════════════════
           SECTION LAYOUT
           ═══════════════════════════════════ */
        .psection {
          padding: 36px 24px;
          background: transparent;
          font-family: 'Inter', -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
          border: none;
          border-radius: 0;
          width: calc(100% - 96px);
          max-width: 980px;
          margin: 112px auto;
        }
        .psection__inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .psection__stage {
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          background: #f3f4f6;
          padding: 16px 12px 12px;
        }

        /* ═══════════════════════════════════
           HEADER
           ═══════════════════════════════════ */
        .psection__header {
          text-align: center;
          margin-bottom: 12px;
        }
        .psection__eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 6px;
        }
        .psection__eyebrow-line {
          width: 32px;
          height: 1px;
          background: #d4d4d8;
        }
        .psection__eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6366f1;
        }
        .psection__title {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.035em;
          margin: 0;
          color: #18181b;
          line-height: 1.05;
        }
        .psection__subtitle {
          font-size: 13px;
          color: #71717a;
          margin-top: 6px;
          line-height: 1.5;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        /* ═══════════════════════════════════
           FILTER PILLS
           ═══════════════════════════════════ */
        .psection__filters {
          margin-bottom: 10px;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .psection__filters::-webkit-scrollbar { display: none; }
        .psection__filters-track {
          display: flex;
          gap: 6px;
          justify-content: center;
          flex-wrap: wrap;
          padding: 0 4px;
        }
        @media (max-width: 639px) {
          .psection__filters-track {
            flex-wrap: nowrap;
            justify-content: flex-start;
            width: max-content;
          }
        }
        .psection__pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: 999px;
          border: 1.5px solid #e4e4e7;
          background: #ffffff;
          color: #52525b;
          font-size: 11px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
        }
        .psection__pill:hover {
          border-color: #a1a1aa;
          color: #18181b;
          background: #f4f4f5;
        }
        .psection__pill--active {
          background: #18181b !important;
          color: #fff !important;
          border-color: #18181b !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .psection__pill-icon {
          display: inline-flex;
          align-items: center;
          opacity: 0.7;
        }
        .psection__pill--active .psection__pill-icon {
          opacity: 1;
        }

        /* ═══════════════════════════════════
           PROJECT GRID
           ═══════════════════════════════════ */
        .psection__carousel {
          width: 100%;
          margin-top: 14px;
        }
        .psection__carousel .motion-carousel__viewport {
          max-width: 720px;
          margin: 0 auto;
        }
        .psection__carousel .motion-carousel__container {
          margin-left: 0;
        }
        .psection__carousel .motion-carousel__slide {
          padding-left: 0;
        }
        .psection__carousel .pcard {
          max-width: 720px;
          margin: 0 auto;
        }

        /* ═══════════════════════════════════
           EMPTY STATE
           ═══════════════════════════════════ */
        .psection__empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 72px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .psection__empty-icon {
          color: #d4d4d8;
        }
        .psection__empty-text {
          font-size: 14px;
          color: #a1a1aa;
          font-weight: 500;
        }

        /* ═══════════════════════════════════
           PROJECT CARD
           ═══════════════════════════════════ */
        .pcard {
          background: #ffffff;
          border: 1px solid #e8e8ec;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pcard:hover {
          border-color: #d4d4d8;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.02),
            0 4px 8px -2px rgba(0,0,0,0.04),
            0 16px 40px -8px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }

        /* Accent top bar */
        .pcard__accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          z-index: 10;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .pcard:hover .pcard__accent-line {
          opacity: 1;
        }

        /* ── Preview ── */
        .pcard__preview {
          position: relative;
          height: 132px;
          overflow: hidden;
          background: #0f0f10;
        }
        .pcard__media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pcard__shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0,0,0,0.08) 80%,
            rgba(0,0,0,0.25) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Category chip */
        .pcard__category {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 8;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10.5px;
          font-weight: 600;
          color: #fff;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* Description overlay */
        .pcard__desc-overlay {
          position: absolute;
          inset: 0;
          z-index: 6;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .pcard__desc-overlay-inner {
          text-align: center;
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .pcard__desc-text {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.92);
          font-weight: 450;
          max-width: 320px;
          margin: 0;
        }
        .pcard__desc-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 999px;
          background: #ffffff;
          color: #18181b;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.2);
        }
        .pcard__desc-cta:hover {
          transform: scale(1.04);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        /* ── Card Body ── */
        .pcard__body {
          padding: 10px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }

        .pcard__title-row {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .pcard__name-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pcard__name {
          font-size: 15px;
          font-weight: 750;
          color: #18181b;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .pcard__badge {
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 999px;
          font-weight: 600;
          background: var(--accent-light);
          color: var(--accent);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .pcard__tagline {
          font-size: 11px;
          color: #a1a1aa;
          font-weight: 450;
          letter-spacing: 0.005em;
        }

        /* ── Tech pills ── */
        .pcard__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          flex: 1;
          align-content: flex-start;
        }
        .pcard__tech-item {
          font-size: 9px;
          font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
          padding: 2px 7px;
          border-radius: 6px;
          background: #f5f5f6;
          color: #52525b;
          font-weight: 500;
          border: 1px solid #ebebef;
          cursor: default;
          transition: all 0.2s ease;
          line-height: 1.3;
        }
        .pcard__tech-item:hover {
          background: #ebebef;
          color: #27272a;
          border-color: #d4d4d8;
        }
        .pcard__tech-item--more {
          background: var(--accent-light);
          color: var(--accent);
          border-color: transparent;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
        }

        /* ── Action Buttons ── */
        .pcard__actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }
        .pcard__btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 0;
          border-radius: 10px;
          font-size: 10.5px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .pcard__btn--ghost {
          background: #f5f5f6;
          color: #3f3f46;
          border: 1.5px solid #ebebef;
        }
        .pcard__btn--ghost:hover {
          background: #ebebef;
          border-color: #d4d4d8;
          color: #18181b;
        }
        .pcard__btn--fill {
          background: #18181b;
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .pcard__btn--fill:hover {
          background: #27272a;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          transform: translateY(-1px);
        }

        /* ═══════════════════════════════════
           SKILLS DASHBOARD
           ═══════════════════════════════════ */
        .skills {
          margin-bottom: 8px;
        }
        .skills__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 960px) {
          .skills__grid { grid-template-columns: repeat(3, 1fr); }
        }
        .skills__card {
          background: #fff;
          border: 1px solid #e8e8ec;
          border-radius: 14px;
          padding: 18px 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .skills__card:hover {
          border-color: #d4d4d8;
          box-shadow:
            0 4px 8px -2px rgba(0,0,0,0.04),
            0 8px 24px -4px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .skills__card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skills__card:hover .skills__card-accent {
          opacity: 1;
        }
        .skills__card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .skills__card-icon {
          font-size: 18px;
          line-height: 1;
        }
        .skills__card-title {
          font-size: 12px;
          font-weight: 700;
          color: #27272a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0;
        }
        .skills__card-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .skills__pill {
          font-size: 11px;
          padding: 4px 11px;
          border-radius: 6px;
          background: #f5f5f6;
          color: #52525b;
          font-weight: 500;
          border: 1px solid #ebebef;
          transition: all 0.2s ease;
          cursor: default;
        }
        .skills__pill:hover {
          background: #ebebef;
          color: #18181b;
          border-color: #d4d4d8;
        }

        /* ═══════════════════════════════════
           MOBILE RESPONSIVE
           ═══════════════════════════════════ */
        @media (max-width: 639px) {
          .psection {
            padding: 54px 16px;
            margin: 72px 10px;
            width: auto;
            border-radius: 0;
          }
          .psection__stage {
            padding: 20px 10px 14px;
            border-radius: 16px;
          }
          .psection__title {
            font-size: 28px;
          }
          .psection__subtitle {
            font-size: 14px;
          }
          .pcard__preview {
            height: 162px;
          }
          .pcard__body {
            padding: 13px 14px 15px;
            gap: 11px;
          }
          .pcard__name {
            font-size: 15px;
          }
          .pcard__tech-item {
            font-size: 10px;
            padding: 3px 8px;
          }
          .pcard__btn {
            padding: 8px 0;
            font-size: 11px;
          }
          .pcard__desc-text {
            font-size: 13px;
          }
          .pcard__desc-cta {
            font-size: 11px;
            padding: 7px 16px;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .psection {
            width: calc(100% - 48px);
            padding: 34px 18px;
            margin: 94px auto;
          }
          .psection__title {
            font-size: 28px;
          }
          .psection__subtitle {
            font-size: 12px;
          }
          .psection__carousel .motion-carousel__viewport,
          .psection__carousel .pcard {
            max-width: 560px;
          }
          .pcard__preview {
            height: 132px;
          }
        }
        @media (min-width: 1024px) {
          .psection {
            padding: 34px 14px;
            width: calc(100% - 112px);
            max-width: 980px;
            margin: 116px auto;
          }
          .psection__header {
            margin-bottom: 10px;
          }
          .psection__title {
            font-size: 30px;
          }
          .psection__subtitle {
            font-size: 12px;
            margin-top: 5px;
            line-height: 1.45;
            max-width: 420px;
          }
          .psection__filters {
            margin-bottom: 8px;
          }
          .psection__carousel {
            margin-top: 12px;
          }
          .psection__pill {
            padding: 5px 10px;
            font-size: 10.5px;
            gap: 6px;
          }

          .psection__carousel .motion-carousel__viewport,
          .psection__carousel .pcard {
            max-width: 620px;
          }

          .pcard__preview {
            height: 160px;
          }
          .pcard__body {
            padding: 10px 12px 12px;
            gap: 8px;
          }
          .pcard__name {
            font-size: 15px;
          }
          .pcard__badge {
            font-size: 9px;
            padding: 2px 8px;
          }
          .pcard__tagline {
            font-size: 11px;
          }
          .pcard__desc-text {
            font-size: 12px;
            max-width: 290px;
          }
          .pcard__tech-item {
            font-size: 9px;
            padding: 2px 7px;
          }
          .pcard__btn {
            font-size: 10px;
            padding: 6px 0;
            gap: 4px;
          }

        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
