import React, { useState } from "react";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import intentifyVideo from "@/assets/Intentify.mp4";
import doxyVideo from "@/assets/doxy.mp4";

/* ─── project data (all names, descriptions, links preserved exactly) ─── */
const projects = [
  {
    name: "Intentify",
    badge: "For Recruiters",
    category: "Generative AI",
    description: (
      <>
        This tool turns simple <span className="highlight-pill">prompts</span> into ready-to-use{" "}
        <span className="highlight-pill">coding assessments</span> for recruiters.
      </>
    ),
    github: "https://github.com/Mudavath-Giri-Naik/Intentify-v2",
    live: "https://intentify-v2.vercel.app/",
    tech: {
      "Frontend": ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
      "Backend": ["Node.js + Express", "TRPC"],
      "Database": ["MongoDB", "Mongoose"],
      "AI": ["LangChain", "Gemini API"],
      "Core": ["TypeScript", "Vitest", "ESLint"],
    },
    preview: { type: "video" as const, src: intentifyVideo },
  },
  {
    name: "Doxy",
    badge: "For Applicants",
    category: "Generative AI",
    description: (
      <>
        An AI document editor - Prepare your <span className="highlight-pill">resumes</span> in seconds by just pasting a{" "}
        <span className="highlight-pill">JD</span> and download.
      </>
    ),
    github: "https://github.com/Mudavath-Giri-Naik/Doxy.git",
    live: "https://doxy-two.vercel.app/",
    tech: {
      "Frontend": ["Next.js", "React", "Tailwind CSS", "Lexical"],
      "Backend": ["Supabase"],
      "Database": ["PostgreSQL"],
      "AI": ["Groq SDK"],
      "Core": ["TypeScript"],
    },
    preview: { type: "video" as const, src: doxyVideo },
  },
  {
    name: "Techmates",
    badge: "For Students",
    category: "Full Stack",
    description: (
      <>
        An all-in-one campus network app to discover <span className="highlight-pill">internships</span>,{" "}
        <span className="highlight-pill">hackathons</span>, events, and connect with students.
      </>
    ),
    github: "https://github.com/Mudavath-Giri-Naik/Techmates.git",
    live: "https://play.google.com/store/apps/details?id=com.techmates.app",
    tech: {
      "Mobile": ["Flutter", "Dart", "Android", "iOS"],
      "Backend": ["Supabase", "Edge Functions", "Cloudflare Workers", "FCM"],
      "Database": ["PostgreSQL", "Realtime"],
      "Auth": ["Google Sign-In"],
    },
    preview: { type: "image" as const, src: "/techmates.png" },
  },
  {
    name: "Ambox",
    badge: "For Creators & Editors",
    category: "Full Stack",
    description: (
      <>
        A collaboration platform for creators and editors to <span className="highlight-pill">manage projects</span>,{" "}
        <span className="highlight-pill">review versions</span>, and ship content faster.
      </>
    ),
    github: "https://github.com/Mudavath-Giri-Naik/ambox.git",
    live: "https://ambox-t6yf.vercel.app/",
    tech: {
      "Frontend": ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
      "Backend": ["Supabase", "Vercel"],
      "AI": ["Gemini API"],
      "Core": ["TypeScript"],
    },
    preview: { type: "image" as const, src: "/ambox.png" },
  },
];

const categories = [
  "All",
  "Full Stack",
  "Generative AI",
  "AI agents",
  "AI automation",
  "MLOps",
  "Reinforcement learning (RL)",
  "Open Source",
  "Skills",
];

/* Generative AI detailed skills mapping */
const genAISkills = [
  {
    title: "Programming languages",
    skills: ["Python", "Java", "C++", "SQL"],
    pillStyle: { bg: "#eff6ff", text: "#1d4ed8", border: "1px solid #bfdbfe" }, // Blue
  },
  {
    title: "ML frameworks & tools",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "LangChain",
      "HuggingFace",
      "Scikit-learn",
      "XGBoost / LightGBM",
      "FastAPI (model serving)",
      "Pandas & NumPy",
    ],
    pillStyle: { bg: "#f0fdf4", text: "#15803d", border: "1px solid #bbf7d0" }, // Green
  },
  {
    title: "LLMs & GenAI",
    skills: [
      "GPT / OpenAI",
      "Llama",
      "RAG (Retrieval-Augmented Generation)",
      "Vector databases",
      "Fine-tuning",
      "AI Agents (LangGraph / CrewAI)",
      "Prompt engineering",
      "Ollama (local LLMs)",
    ],
    pillStyle: { bg: "#faf5ff", text: "#7e22ce", border: "1px solid #e9d5ff" }, // Purple
  },
  {
    title: "MLOps & infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "MLflow",
      "AWS SageMaker",
      "Azure ML",
      "Vertex AI",
      "CI/CD pipelines",
      "GitHub Actions",
      "Evidently AI (drift monitoring)",
      "Model evaluation & monitoring",
    ],
    pillStyle: { bg: "#fffbeb", text: "#b45309", border: "1px solid #fde68a" }, // Orange/Gold
  },
  {
    title: "Foundational knowledge",
    skills: [
      "Linear algebra",
      "Statistics",
      "Calculus",
      "NLP",
      "Computer vision",
      "Reinforcement learning",
      "Probability theory",
      "Data structures & algorithms",
    ],
    pillStyle: { bg: "#fef2f2", text: "#b91c1c", border: "1px solid #fecaca" }, // Red
  },
  {
    title: "System design & deployment (new category — tested in senior interviews)",
    skills: [
      "REST API design",
      "Microservices basics",
      "HuggingFace Spaces / Render / Railway",
      "Async programming (Celery / Redis)",
      "Git & version control",
    ],
    pillStyle: { bg: "#f0f9ff", text: "#0369a1", border: "1px solid #bae6fd" }, // Light Blue
  },
];

/* tech pill color palette */
const pillColors = [
  { bg: "#dbeafe", text: "#1d4ed8" },
  { bg: "#ede9fe", text: "#6d28d9" },
  { bg: "#d1fae5", text: "#047857" },
  { bg: "#fef3c7", text: "#b45309" },
  { bg: "#fee2e2", text: "#dc2626" },
];

/* ─── component ─── */
const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        background: "#ffffff",
        padding: "56px 20px",
        isolation: "isolate",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── OUTER CARD (Google-style big rounded container) ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #e0e0e0",
          borderRadius: 24,
          padding: "40px 36px 40px",
        }}
        className="projects-outer-card"
      >
        {/* ── Headline ── */}
        <h2
          style={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            color: "#111",
          }}
        >
          <span
            style={{
              backgroundImage: "linear-gradient(to top, #555555, #111111)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Projects
          </span>
        </h2>

        {/* ── Subtitle ── */}
        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: 12.5,
            width: "100%",
            margin: "10px auto 0",
            lineHeight: 1.6,
          }}
        >
          A collection of things I've built — from full-stack apps to AI-powered tools.
        </p>

        {/* ── Responsive Filter Tabs ── */}
        <>
          {/* Mobile Swipeable Filter Row */}
          <div className="md:hidden w-full overflow-x-auto mt-7 pb-4 mb-4 hide-scrollbar">
            <div className="flex gap-2.5 w-max px-4">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                const count =
                  cat === "All"
                    ? projects.length
                    : cat === "Skills"
                    ? genAISkills.reduce((acc, group) => acc + group.skills.length, 0)
                    : projects.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-3 py-2 rounded-full text-[12px] font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#111] text-white border border-[#111] shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 shadow-sm hover:bg-slate-50"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cat} <span className="opacity-70 text-[11.5px] ml-1">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden md:flex flex-col items-center gap-2.5 my-6 mb-8">
            {[categories.slice(0, 5), categories.slice(5)].map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
              {row.map((cat) => {
                const isActive = cat === activeCategory;
                const count =
                  cat === "All"
                    ? projects.length
                    : cat === "Skills"
                    ? genAISkills.reduce((acc, group) => acc + group.skills.length, 0)
                    : projects.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "5px 14px",
                      borderRadius: 999,
                      border: isActive ? "1px solid #111" : "1px solid #ccc",
                      background: isActive ? "#111" : "transparent",
                      color: isActive ? "#fff" : "#555",
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all .2s ease",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {cat} <span style={{ opacity: 0.7, fontSize: 12, marginLeft: 3 }}>({count})</span>
                  </button>
                );
              })}
            </div>
          ))}
          </div>
        </>

        {/* ── Dedicated Skills Dashboard ── */}
        {activeCategory === "Skills" && (
          <div
            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 md:mb-10 border border-slate-200 shadow-sm text-left"
          >
            {genAISkills.map((group, groupIdx) => (
              <div key={group.title} className={groupIdx === genAISkills.length - 1 ? "mb-0" : "mb-4 md:mb-6"}>
                <h4 className="text-slate-800 text-[11px] md:text-xs font-bold mb-2.5 md:mb-3 uppercase tracking-wide">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 md:px-3 py-1 rounded-full text-[10px] md:text-[11px] font-medium font-inter"
                      style={{
                        background: group.pillStyle.bg,
                        color: group.pillStyle.text,
                        border: group.pillStyle.border,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Cards Grid (Hide when viewing Skills tab) ── */}
        {activeCategory !== "Skills" && (
          <div
            style={{
              display: "grid",
              gap: 12,
              marginTop: 24,
            }}
            className="projects-grid"
          >
            {filtered.map((project) => (
              <div
                key={project.name}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "opacity .35s ease, transform .35s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
              {/* Preview Area — video or image */}
              <div
                className="group relative"
                style={{
                  height: 120,
                  position: "relative",
                  overflow: "hidden",
                  background: "#111",
                }}
              >
                {project.preview.type === "video" ? (
                  <video
                    src={project.preview.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={project.preview.src}
                    alt={`${project.name} preview`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* Hover Description Overlay */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center"
                  style={{ background: "rgba(255,255,255,.92)", backdropFilter: "blur(4px)" }}
                >
                  <p
                    style={{
                      color: "#111",
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div
                className="card-body"
                style={{
                  padding: "10px 12px 12px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Name + Badge + Category Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0 }}>
                    <h3
                      className="project-name"
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        margin: 0,
                        color: "#111",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      className="project-badge"
                      style={{
                        fontSize: 8.5,
                        fontWeight: 500,
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: "rgba(59,130,246,.12)",
                        color: "#60a5fa",
                        whiteSpace: "nowrap",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <span
                    className="project-category"
                    style={{
                      background: "#ede9fe",
                      color: "#6d28d9",
                      fontSize: 8.5,
                      fontWeight: 500,
                      padding: "2px 6px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {project.category}
                  </span>
                </div>


                {/* Tech Pills Categorized (Table-like grid to save space) */}
                <div
                  className="tech-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: "4px 4px",
                    marginTop: 6,
                    alignItems: "start",
                    flex: 1,
                  }}
                >
                  {Object.entries(project.tech).map(([category, rawTechs], categoryIndex) => {
                    const techs = rawTechs as string[]; // cast as string array since TS infers differently here
                    return (
                      <React.Fragment key={category}>
                        <span className="tech-category-label" style={{ fontSize: 8.5, color: "#888", fontWeight: 600, paddingTop: 2 }}>
                          {category}
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                          {techs.map((t, i) => {
                            return (
                              <span
                                key={t}
                                className="tech-pill"
                                style={{
                                  fontSize: 8,
                                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                                  padding: "1px 5px",
                                  borderRadius: 4,
                                  background: "#f3f4f6",
                                  color: "#1f2937",
                                  fontWeight: 500,
                                  border: "1px solid #e5e7eb",
                                }}
                              >
                                {t}
                              </span>
                            );
                          })}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Divider */}
                <div
                  className="card-divider"
                  style={{
                    height: 1,
                    background: "#e5e5e5",
                    margin: "10px 0 8px",
                  }}
                />

                {/* Buttons */}
                <div className="card-buttons" style={{ display: "flex", gap: 6 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      background: "#f5f5f5",
                      color: "#333",
                      border: "1px solid #e0e0e0",
                      borderRadius: 7,
                      padding: "5px 0",
                      fontSize: 10.5,
                      fontWeight: 500,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "background .2s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#e8e8e8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#f5f5f5")
                    }
                  >
                    <IconBrandGithub size={11} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      background: "#111",
                      color: "#fff",
                      border: "none",
                      borderRadius: 7,
                      padding: "5px 0",
                      fontSize: 10.5,
                      fontWeight: 500,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "background .2s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#333")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#111")
                    }
                  >
                    <IconWorld size={11} />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* scoped styles for responsive grid + outer card + pulse animation */}
      <style>{`
        .projects-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .projects-outer-card {
          padding: 40px 36px 40px;
        }
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .projects-outer-card {
            padding: 32px 20px 28px !important;
            border-radius: 18px !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            margin-top: 16px !important;
          }
          .projects-outer-card {
            padding: 24px 14px 22px !important;
            border-radius: 14px !important;
          }
          /* Mobile card improvements */
          .projects-grid > div {
            border-radius: 14px !important;
          }
          /* Taller preview on mobile for better visibility */
          .projects-grid .group {
            height: 160px !important;
          }
          /* Larger card body padding */
          .projects-grid .card-body {
            padding: 14px 16px 16px !important;
          }
          /* Larger project name */
          .projects-grid .project-name {
            font-size: 15px !important;
          }
          /* Larger badge text */
          .projects-grid .project-badge,
          .projects-grid .project-category {
            font-size: 10px !important;
            padding: 3px 8px !important;
          }
          /* Larger tech category labels */
          .projects-grid .tech-category-label {
            font-size: 10px !important;
          }
          /* Larger tech pills */
          .projects-grid .tech-pill {
            font-size: 10px !important;
            padding: 3px 7px !important;
          }
          /* Wider tech grid label column */
          .projects-grid .tech-grid {
            grid-template-columns: 58px 1fr !important;
            gap: 5px 6px !important;
            margin-top: 10px !important;
          }
          /* Better divider spacing */
          .projects-grid .card-divider {
            margin: 14px 0 10px !important;
          }
          /* Larger buttons */
          .projects-grid .card-btn {
            padding: 8px 0 !important;
            font-size: 12.5px !important;
            border-radius: 9px !important;
            gap: 5px !important;
          }
          .projects-grid .card-buttons {
            gap: 8px !important;
          }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .highlight-pill {
          background: rgba(99, 102, 241, 0.12);
          color: #4f46e5;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
