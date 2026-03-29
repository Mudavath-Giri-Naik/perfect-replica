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
      "Frontend": ["React", "Vite", "Tailwind CSS", "shadcn/ui", "React Router"],
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
      "Frontend": ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Lexical"],
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
  "MLOps",
  "Open Source",
  "Tools",
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
        padding: "80px 20px",
        isolation: "isolate",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── OUTER CARD (Google-style big rounded container) ── */}
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #e0e0e0",
          borderRadius: 28,
          padding: "60px 48px 56px",
        }}
        className="projects-outer-card"
      >
        {/* ── Headline ── */}
        <h2
          style={{
            textAlign: "center",
            fontSize: 44,
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
            fontSize: 14,
            width: "100%",
            margin: "14px auto 0",
            lineHeight: 1.6,
          }}
        >
          A collection of things I've built — from full-stack apps to AI-powered tools.
        </p>

        {/* ── Filter Tabs ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 30,
          }}
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 999,
                  border: isActive ? "1px solid #111" : "1px solid #ccc",
                  background: isActive ? "#111" : "transparent",
                  color: isActive ? "#fff" : "#555",
                  fontSize: 13,
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

        {/* ── Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gap: 16,
            marginTop: 36,
          }}
          className="projects-grid"
        >
          {filtered.map((project) => (
            <div
              key={project.name}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: 14,
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
                  height: 150,
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
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center"
                  style={{ background: "rgba(255,255,255,.92)", backdropFilter: "blur(4px)" }}
                >
                  <p
                    style={{
                      color: "#111",
                      fontSize: 14,
                      lineHeight: 1.6,
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
                style={{
                  padding: "14px 16px 16px",
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
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        margin: 0,
                        color: "#111",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontSize: 9,
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
                    style={{
                      background: "#ede9fe",
                      color: "#6d28d9",
                      fontSize: 9,
                      fontWeight: 500,
                      padding: "2px 8px",
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
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr",
                    gap: "6px 4px",
                    marginTop: 8,
                    alignItems: "start",
                    flex: 1,
                  }}
                >
                  {Object.entries(project.tech).map(([category, rawTechs], categoryIndex) => {
                    const techs = rawTechs as string[]; // cast as string array since TS infers differently here
                    return (
                      <React.Fragment key={category}>
                        <span style={{ fontSize: 9.5, color: "#888", fontWeight: 600, paddingTop: 3 }}>
                          {category}
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                          {techs.map((t, i) => {
                            // we assign a pill color based on the category index so all pills in a category share a theme
                            const c = pillColors[categoryIndex % pillColors.length];
                            return (
                              <span
                                key={t}
                                style={{
                                  fontSize: 9,
                                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                                  padding: "2px 6px",
                                  borderRadius: 4,
                                  background: c.bg,
                                  color: c.text,
                                  fontWeight: 500,
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
                  style={{
                    height: 1,
                    background: "#e5e5e5",
                    margin: "16px 0 12px",
                  }}
                />

                {/* Buttons */}
                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                      background: "#f5f5f5",
                      color: "#333",
                      border: "1px solid #e0e0e0",
                      borderRadius: 9,
                      padding: "7px 0",
                      fontSize: 11.5,
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
                    <IconBrandGithub size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                      background: "#111",
                      color: "#fff",
                      border: "none",
                      borderRadius: 9,
                      padding: "7px 0",
                      fontSize: 11.5,
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
                    <IconWorld size={13} />
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scoped styles for responsive grid + outer card + pulse animation */}
      <style>{`
        .projects-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .projects-outer-card {
          padding: 60px 48px 56px;
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
            padding: 40px 24px 36px !important;
            border-radius: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-outer-card {
            padding: 32px 16px 28px !important;
            border-radius: 16px !important;
          }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
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
