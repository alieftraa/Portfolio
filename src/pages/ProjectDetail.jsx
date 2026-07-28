import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  Clock,
  User,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  X,
  MapPin,
  CalendarClock,
  ShieldQuestion,
  Package,
  Eye,
  MessageSquare,
  Users,
  FileText,
  Lightbulb,
  Target,
  ClipboardList,
  Palette,
  CheckCircle2,
  Star,
  ArrowDown,
  Layout,
  GitBranch,
  PenTool,
  Monitor,
  Play,
  UserCheck,
  MessageCircle,
  RefreshCcw,
  Award,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { projects } from "../data/projectsData";
import Navbar from "../components/layout/Navbar";



/* ─────────────────────────────────────────────
   Shared inline-style helpers (design-token aligned)
   ───────────────────────────────────────────── */

const glassCard = {
  background: "var(--glass-bg)",
  border: "1px solid var(--glass-border)",
  borderRadius: "var(--radius-lg)",
  padding: "var(--space-5)",
  transition: "all var(--transition-fast)",
};

const glassCardHoverable = {
  ...glassCard,
  cursor: "default",
};

const sectionWrap = {
  marginTop: "var(--space-9)",
};

const sectionHeadingStyle = {
  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
  fontWeight: 700,
  color: "var(--text-primary)",
  letterSpacing: "-0.02em",
  marginBottom: "var(--space-5)",
};

const sectionSubtitle = {
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "var(--text-secondary)",
  marginBottom: "var(--space-6)",
  maxWidth: 640,
};

const accentDot = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "var(--accent-primary)",
  flexShrink: 0,
};

const iconWrap = {
  width: 44,
  height: 44,
  borderRadius: "var(--radius-md)",
  background: "rgba(41, 151, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: "var(--space-3)",
};

const connectorLine = {
  width: 2,
  height: 32,
  background: "var(--glass-border)",
  margin: "0 auto",
};

const placeholderBox = {
  ...glassCard,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 280,
  color: "var(--text-tertiary)",
  fontSize: "0.875rem",
  fontWeight: 500,
  textAlign: "center",
  flexDirection: "column",
  gap: "var(--space-3)",
};

const gridTwo = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "var(--space-4)",
};

const gridTwoResponsive = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "var(--space-4)",
};

/* ─────────────────────────────────────────────
   Fade-in wrapper
   ───────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

/* ─────────────────────────────────────────────
   Image helper – renders image or styled fallback
   ───────────────────────────────────────────── */
function CaseStudyImage({ src, alt, fallbackText, minHeight = 280, style = {}, onClick }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div style={{ ...placeholderBox, minHeight, ...style }}>
        <ImageIcon size={40} color="var(--text-tertiary)" strokeWidth={1.2} />
        <span>{fallbackText || alt}</span>
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--text-tertiary)",
            opacity: 0.5,
          }}
        >

        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      loading="lazy"
      onClick={onClick}
      style={{
        width: "100%",
        borderRadius: "var(--radius-lg)",
        display: "block",
        border: "1px solid var(--glass-border)",
        cursor: onClick ? "zoom-in" : "default",
        ...style,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   BENGKEL MOTORKU — Case Study Sections
   ───────────────────────────────────────────── */

function BengkelMotorkuCaseStudy({ project }) {
  const [personaIndex, setPersonaIndex] = useState(0);
  const [activityTab, setActivityTab] = useState("all");
  const [customerActivityIndex, setCustomerActivityIndex] = useState(0);
  const [ownerActivityIndex, setOwnerActivityIndex] = useState(0);
  const [wireframeTab, setWireframeTab] = useState("all");
  const [customerWireframeIndex, setCustomerWireframeIndex] = useState(0);
  const [ownerWireframeIndex, setOwnerWireframeIndex] = useState(0);
  const [hifiTab, setHifiTab] = useState("all");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");
  const [lbAlt, setLbAlt] = useState("");

  const openLb = (src, alt) => { setLbSrc(src); setLbAlt(alt); setLbOpen(true); };
  const closeLb = () => setLbOpen(false);

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e) => { if (e.key === "Escape") closeLb(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lbOpen]);

  const rawBase = import.meta.env.BASE_URL || "/";
  const baseUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const ASSET = `${baseUrl}bengkel-motorku`;

  const personas = [
    {
      label: "College Student",
      image: `${ASSET}/persona-1.jpg`,
      fallback: "persona-1.png",
    },
    {
      label: "Busy Employee",
      image: `${ASSET}/persona-2.jpg`,
      fallback: "persona-2.png",
    },
    {
      label: "Workshop Owner",
      image: `${ASSET}/persona-3.jpg`,
      fallback: "persona-3.png",
    },
  ];

  const prevPersona = () =>
    setPersonaIndex((i) => (i - 1 + personas.length) % personas.length);
  const nextPersona = () =>
    setPersonaIndex((i) => (i + 1) % personas.length);

  return (
    <>
      {/* ── SECTION 1: The Problem ─────────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>The Problem</h2>
        <p style={sectionSubtitle}>
          Through field research at Bengkel Diemas Motor, four core pain points
          emerged that shape the motorcycle service experience for both riders
          and workshop owners.
        </p>
        <div style={gridTwoResponsive}>
          {[
            {
              icon: <MapPin size={20} color="var(--accent-primary)" />,
              title: "Finding Nearby Workshops",
              desc: "Riders who break down in unfamiliar areas struggle to locate a trusted workshop nearby — there's no centralized, location-based search tool available.",
            },
            {
              icon: <CalendarClock size={20} color="var(--accent-primary)" />,
              title: "Long Queue & Wait Times",
              desc: "Walk-in customers face unpredictable wait times with no way to book ahead, leading to frustration and wasted time.",
            },
            {
              icon: <ShieldQuestion size={20} color="var(--accent-primary)" />,
              title: "Limited Service Transparency",
              desc: "No visibility into spare part availability, service pricing, or workshop operating hours before visiting — users make decisions in the dark.",
            },
            {
              icon: <Package size={20} color="var(--accent-primary)" />,
              title: "No Digital Service Management",
              desc: "Workshop owners still rely on manual record-keeping for inventory, bookings, and service history — causing inefficiency and errors.",
            },
          ].map((item, i) => (
            <div key={i} style={glassCard}>
              <div style={iconWrap}>{item.icon}</div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 2: Research ─────────────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Research</h2>
        <p style={sectionSubtitle}>
          Following the User-Centered Design methodology (ISO 9241-210), a
          structured research process was conducted to deeply understand user
          needs before any design work began.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {[
            {
              icon: <Eye size={20} color="var(--accent-primary)" />,
              label: "Field Observation",
              desc: "Conducted on-site observation at Bengkel Diemas Motor to understand real workshop operations, customer flow, and pain points firsthand.",
            },
            {
              icon: <MessageSquare size={20} color="var(--accent-primary)" />,
              label: "User & Owner Interviews",
              desc: "Interviewed 8 motorcycle owners and 2 workshop owners using structured questionnaires to capture needs, frustrations, and expectations.",
            },
            {
              icon: <Users size={20} color="var(--accent-primary)" />,
              label: "Persona Development",
              desc: "Synthesized interview data into 3 representative personas — a college student, a busy employee, and a workshop owner — to guide design decisions.",
            },
            {
              icon: <FileText size={20} color="var(--accent-primary)" />,
              label: "Requirements Definition",
              desc: "Mapped user pain points to 12 functional requirements and 3 non-functional requirements covering performance, usability, and portability.",
            },
          ].map((step, i, arr) => (
            <div key={i} style={{ width: "100%", maxWidth: 480 }}>
              <div
                style={{
                  ...glassCard,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-4)",
                }}
              >
                <div style={iconWrap}>{step.icon}</div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {step.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < arr.length - 1 && <div style={connectorLine} />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 3: Key Insights ────────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Key Insights</h2>
        <p style={sectionSubtitle}>
          The most important findings from the research phase, distilled into
          actionable design drivers.
        </p>
        <div style={gridTwoResponsive}>
          {[
            "Users need a map-based search to find the nearest workshop — especially critical when stranded on the road.",
            "Transparent, upfront information about spare part stock and service pricing is expected before visiting a workshop.",
            "Workshop owners need a digital dashboard to manage bookings, inventory stock, and service records in real time.",
            "Ratings and reviews are a key trust signal — users won't choose a workshop without social proof from other riders.",
            "A pickup service feature is highly desired by users who can't ride their motorcycle to the workshop.",
            "Real-time workshop availability status (open, full, or closed) would significantly reduce wasted trips.",
          ].map((insight, i) => (
            <div
              key={i}
              style={{
                ...glassCard,
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
              }}
            >
              <div style={{ ...iconWrap, width: 36, height: 36 }}>
                <Lightbulb size={18} color="var(--accent-primary)" />
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {insight}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 4: Design Process ──────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Design Process</h2>
        <p style={sectionSubtitle}>
          Following the User-Centered Design (UCD) methodology based on ISO
          9241-210, ensuring every decision is grounded in real user needs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--space-4)",
            textAlign: "center",
          }}
        >
          {[
            {
              icon: <Target size={22} color="var(--accent-primary)" />,
              label: "Understand Context of Use",
              step: "01",
              desc: "Field observation + interviews",
            },
            {
              icon: <ClipboardList size={22} color="var(--accent-primary)" />,
              label: "Specify Requirements",
              step: "02",
              desc: "12 functional & 3 non-functional",
            },
            {
              icon: <Palette size={22} color="var(--accent-primary)" />,
              label: "Produce Design Solutions",
              step: "03",
              desc: "Wireframes → Hi-Fi → Prototype",
            },
            {
              icon: <CheckCircle2 size={22} color="var(--accent-primary)" />,
              label: "Evaluate Against Requirements",
              step: "04",
              desc: "SUS testing with 13 participants",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                ...glassCard,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "var(--space-6) var(--space-5)",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "var(--accent-primary)",
                  textTransform: "uppercase",
                }}
              >
                Step {item.step}
              </span>
              <div style={{ ...iconWrap, marginBottom: 0 }}>{item.icon}</div>
              <h4
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                {item.label}
              </h4>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-tertiary)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 5: Competitive Analysis ────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Competitive Analysis</h2>
        <p style={sectionSubtitle}>
          Comparing existing solutions in the market to identify gaps and
          opportunities for Bengkel Motorku.
        </p>
        <div style={gridTwoResponsive}>
          {[
            {
              name: "Motorku X",
              type: "Competitor",
              highlights: [
                "✓ Booking & spare parts catalog",
                "✗ Limited to partner workshops only",
                "✗ No rating or review system",
              ],
            },
            {
              name: "Astra Otoshop",
              type: "Competitor",
              highlights: [
                "✓ Strong brand trust & wide network",
                "✗ Restricted to Honda/Astra vehicles",
                "✗ No pickup service option",
              ],
            },
            {
              name: "SiTepat",
              type: "Competitor",
              highlights: [
                "✓ Queue management focus",
                "✗ No spare parts catalog",
                "✗ No multi-brand support",
              ],
            },
            {
              name: "Bengkel Motorku",
              type: "This Project",
              highlights: [
                "✓ All-brand, location-based workshop search",
                "✓ Integrated ratings, pickup service & real-time stock",
                "✓ Dual-sided: serves both users and workshop owners",
              ],
              accent: true,
            },
          ].map((app, i) => (
            <div
              key={i}
              style={{
                ...glassCard,
                borderColor: app.accent
                  ? "var(--accent-primary)"
                  : "var(--glass-border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {app.accent && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "var(--accent-primary)",
                  }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-4)",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {app.name}
                </h4>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    background: app.accent
                      ? "rgba(41, 151, 255, 0.15)"
                      : "var(--glass-bg)",
                    color: app.accent
                      ? "var(--accent-primary)"
                      : "var(--text-tertiary)",
                    border: `1px solid ${app.accent
                      ? "rgba(41, 151, 255, 0.3)"
                      : "var(--glass-border)"
                      }`,
                  }}
                >
                  {app.type}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                {app.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={accentDot} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 6: User Personas (carousel) ── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>User Personas</h2>
        <p style={sectionSubtitle}>
          Three representative personas created from interview and observation
          data to guide design decisions throughout the project.
        </p>

        <div style={{ position: "relative" }}>
          {/* Carousel viewport */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div
              style={{
                display: "flex",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: `translateX(-${personaIndex * 100}%)`,
              }}
            >
              {personas.map((persona, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: "100%",
                    padding: "0 var(--space-1)",
                    boxSizing: "border-box",
                  }}
                >
                  <CaseStudyImage
                    src={persona.image}
                    alt={persona.label}
                    fallbackText={persona.fallback}
                    minHeight={220}
                    style={{ maxHeight: "55vh", objectFit: "contain" }}
                    onClick={() => openLb(persona.image, persona.label)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prevPersona}
            aria-label="Previous persona"
            style={{
              position: "absolute",
              left: "var(--space-3)",
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all var(--transition-fast)",
              zIndex: 2,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextPersona}
            aria-label="Next persona"
            style={{
              position: "absolute",
              right: "var(--space-3)",
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all var(--transition-fast)",
              zIndex: 2,
            }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-2)",
              marginTop: "var(--space-4)",
            }}
          >
            {personas.map((_, i) => (
              <button
                key={i}
                onClick={() => setPersonaIndex(i)}
                aria-label={`Go to persona ${i + 1}`}
                style={{
                  width: personaIndex === i ? 24 : 8,
                  height: 8,
                  borderRadius: "var(--radius-full)",
                  background:
                    personaIndex === i
                      ? "var(--accent-primary)"
                      : "var(--glass-border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all var(--transition-base)",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── SECTION 7: Information Architecture ── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Information Architecture</h2>
        <p style={sectionSubtitle}>
          The sitemap visualizes the overall structure of the application,
          mapping out every screen and its hierarchy for both the user and
          workshop owner sides.
        </p>
        <CaseStudyImage
          src={`${ASSET}/sitemap.jpg`}
          alt="Application Sitemap"
          fallbackText="sitemap.jpg"
          minHeight={320}
        />
      </motion.div>

      {/* ── SECTION 8: Activity Diagram ──────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Activity Diagram</h2>
        <p style={sectionSubtitle}>
          Illustrating step-by-step workflows of key system processes divided into Customer and Workshop Owner roles.
        </p>

        {/* Role Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            marginBottom: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActivityTab("all")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${activityTab === "all" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                activityTab === "all"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                activityTab === "all" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <Layout size={16} />
            <span>Show All</span>
          </button>

          <button
            onClick={() => setActivityTab("user")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${activityTab === "user" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                activityTab === "user"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                activityTab === "user" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <User size={16} />
            <span>1. Customer App</span>
          </button>

          <button
            onClick={() => setActivityTab("owner")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${activityTab === "owner" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                activityTab === "owner"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                activityTab === "owner" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <UserCheck size={16} />
            <span>2. Workshop Owner App</span>
          </button>
        </div>

        {/* 1. CUSTOMER WORKFLOWS */}
        {(activityTab === "user" || activityTab === "all") && (
          <div style={{ marginBottom: activityTab === "all" ? "var(--space-8)" : 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <User size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Customer Activity Diagrams
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  Step-by-step activity flows for motorcycle owners from workshop discovery to service completion.
                </p>
              </div>
            </div>

            {/* Customer Activity Carousel */}
            {(() => {
              const flows = [
                {
                  label: "Booking Service",
                  file: "flow-booking.png",
                  desc: "End-to-end booking flow from workshop search to service confirmation.",
                },
                {
                  label: "Purchasing Spare Parts",
                  file: "flow-spareparts.png",
                  desc: "Browse catalog, check stock, add to cart, and complete purchase.",
                },
                {
                  label: "Filtering & Finding Workshops",
                  file: "flow-filter.png",
                  desc: "Location-based search with filters for ratings, distance, and services.",
                },
              ];
              return (
                <div style={{ position: "relative" }}>
                  {/* Carousel viewport */}
                  <div style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                    <div
                      style={{
                        display: "flex",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: `translateX(-${customerActivityIndex * 100}%)`,
                      }}
                    >
                      {flows.map((flow, i) => (
                        <div key={i} style={{ minWidth: "100%", boxSizing: "border-box" }}>
                          <h4
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                              marginBottom: "var(--space-2)",
                            }}
                          >
                            {flow.label}
                          </h4>
                          <p
                            style={{
                              fontSize: "0.8125rem",
                              color: "var(--text-tertiary)",
                              marginBottom: "var(--space-3)",
                              lineHeight: 1.5,
                            }}
                          >
                            {flow.desc}
                          </p>
                          <CaseStudyImage
                            src={`${ASSET}/${flow.file}`}
                            alt={`Activity Diagram — ${flow.label}`}
                            fallbackText={flow.file}
                            minHeight={500}
                            style={{ maxHeight: "72vh", objectFit: "contain" }}
                            onClick={() => openLb(`${ASSET}/${flow.file}`, `Activity Diagram — ${flow.label}`)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Nav buttons */}
                  <button
                    onClick={() =>
                      setCustomerActivityIndex(
                        (i) => (i - 1 + flows.length) % flows.length
                      )
                    }
                    aria-label="Previous activity diagram"
                    style={{
                      position: "absolute",
                      left: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      setCustomerActivityIndex((i) => (i + 1) % flows.length)
                    }
                    aria-label="Next activity diagram"
                    style={{
                      position: "absolute",
                      right: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots indicator */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    {flows.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCustomerActivityIndex(i)}
                        aria-label={`Go to activity diagram ${i + 1}`}
                        style={{
                          width: customerActivityIndex === i ? 24 : 8,
                          height: 8,
                          borderRadius: "var(--radius-full)",
                          background:
                            customerActivityIndex === i
                              ? "var(--accent-primary)"
                              : "var(--glass-border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all var(--transition-base)",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 2. WORKSHOP OWNER WORKFLOWS */}
        {(activityTab === "owner" || activityTab === "all") && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <UserCheck size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Workshop Owner Activity Diagrams
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  Operational workflows for workshop inventory management and service request handling.
                </p>
              </div>
            </div>

            {/* Owner Activity Carousel */}
            {(() => {
              const flows = [
                {
                  label: "Workshop Order Management",
                  file: "flow-owner1.png",
                  desc: "Owner-side flow for managing spare part inventory and availability.",
                },
                {
                  label: "Workshop Stock Management",
                  file: "flow-owner2.png",
                  desc: "Owner-side flow for managing spare part inventory and availability.",
                },
              ];
              return (
                <div style={{ position: "relative" }}>
                  {/* Carousel viewport */}
                  <div style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                    <div
                      style={{
                        display: "flex",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: `translateX(-${ownerActivityIndex * 100}%)`,
                      }}
                    >
                      {flows.map((flow, i) => (
                        <div key={i} style={{ minWidth: "100%", boxSizing: "border-box" }}>
                          <h4
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                              marginBottom: "var(--space-2)",
                            }}
                          >
                            {flow.label}
                          </h4>
                          <p
                            style={{
                              fontSize: "0.8125rem",
                              color: "var(--text-tertiary)",
                              marginBottom: "var(--space-3)",
                              lineHeight: 1.5,
                            }}
                          >
                            {flow.desc}
                          </p>
                          <CaseStudyImage
                            src={`${ASSET}/${flow.file}`}
                            alt={`Activity Diagram — ${flow.label}`}
                            fallbackText={flow.file}
                            minHeight={500}
                            style={{ maxHeight: "72vh", objectFit: "contain" }}
                            onClick={() => openLb(`${ASSET}/${flow.file}`, `Activity Diagram — ${flow.label}`)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Nav buttons */}
                  <button
                    onClick={() =>
                      setOwnerActivityIndex(
                        (i) => (i - 1 + flows.length) % flows.length
                      )
                    }
                    aria-label="Previous activity diagram"
                    style={{
                      position: "absolute",
                      left: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      setOwnerActivityIndex((i) => (i + 1) % flows.length)
                    }
                    aria-label="Next activity diagram"
                    style={{
                      position: "absolute",
                      right: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots indicator */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    {flows.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setOwnerActivityIndex(i)}
                        aria-label={`Go to activity diagram ${i + 1}`}
                        style={{
                          width: ownerActivityIndex === i ? 24 : 8,
                          height: 8,
                          borderRadius: "var(--radius-full)",
                          background:
                            ownerActivityIndex === i
                              ? "var(--accent-primary)"
                              : "var(--glass-border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all var(--transition-base)",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </motion.div>

      {/* ── SECTION 9: Wireframes ──────────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Wireframes</h2>
        <p style={sectionSubtitle}>
          Low-fidelity wireframes created to explore layout and interaction patterns for both Customer and Workshop Owner interfaces.
        </p>

        {/* Role Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            marginBottom: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setWireframeTab("all")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${wireframeTab === "all" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                wireframeTab === "all"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                wireframeTab === "all" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <Layout size={16} />
            <span>Show All</span>
          </button>

          <button
            onClick={() => setWireframeTab("user")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${wireframeTab === "user" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                wireframeTab === "user"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                wireframeTab === "user" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <User size={16} />
            <span>1. Customer App</span>
          </button>

          <button
            onClick={() => setWireframeTab("owner")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${wireframeTab === "owner" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                wireframeTab === "owner"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                wireframeTab === "owner" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <UserCheck size={16} />
            <span>2. Workshop Owner App</span>
          </button>
        </div>

        {/* 1. CUSTOMER WIREFRAMES */}
        {(wireframeTab === "user" || wireframeTab === "all") && (
          <div style={{ marginBottom: wireframeTab === "all" ? "var(--space-8)" : 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <User size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Customer Wireframes
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  Low-fidelity layouts for customer onboarding, discovery, booking, and ordering screens.
                </p>
              </div>
            </div>

            {/* Customer Wireframe Carousel */}
            {(() => {
              const wireframes = [
                { label: "Splash & Login", file: "wireframe-1.png" },
                { label: "Home & Service History", file: "wireframe-2.png" },
                { label: "Schedule, Chat & Profile", file: "wireframe-3.png" },
                { label: "Workshop Detail", file: "wireframe-4.png" },
                { label: "Spare Parts & Order", file: "wireframe-5.png" },
                { label: "Bengkel Nearby", file: "wireframe-6.png" },
                { label: "Order, Tracking & Rating", file: "wireframe-7.png" },
                { label: "Service Booking", file: "wireframe-8.png" },
              ];
              return (
                <div style={{ position: "relative" }}>
                  {/* Carousel viewport */}
                  <div style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                    <div
                      style={{
                        display: "flex",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: `translateX(-${customerWireframeIndex * 100}%)`,
                      }}
                    >
                      {wireframes.map((wf, i) => (
                        <div key={i} style={{ minWidth: "100%", boxSizing: "border-box" }}>
                          <h4
                            style={{
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                              marginBottom: "var(--space-3)",
                            }}
                          >
                            {wf.label}
                          </h4>
                          <CaseStudyImage
                            src={`${ASSET}/${wf.file}`}
                            alt={`Wireframe — ${wf.label}`}
                            fallbackText={wf.file}
                            minHeight={560}
                            style={{ maxHeight: "80vh", objectFit: "contain" }}
                            onClick={() => openLb(`${ASSET}/${wf.file}`, `Wireframe — ${wf.label}`)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Nav buttons */}
                  <button
                    onClick={() =>
                      setCustomerWireframeIndex(
                        (i) => (i - 1 + wireframes.length) % wireframes.length
                      )
                    }
                    aria-label="Previous wireframe"
                    style={{
                      position: "absolute",
                      left: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      setCustomerWireframeIndex((i) => (i + 1) % wireframes.length)
                    }
                    aria-label="Next wireframe"
                    style={{
                      position: "absolute",
                      right: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots indicator */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    {wireframes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCustomerWireframeIndex(i)}
                        aria-label={`Go to wireframe ${i + 1}`}
                        style={{
                          width: customerWireframeIndex === i ? 24 : 8,
                          height: 8,
                          borderRadius: "var(--radius-full)",
                          background:
                            customerWireframeIndex === i
                              ? "var(--accent-primary)"
                              : "var(--glass-border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all var(--transition-base)",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 2. WORKSHOP OWNER WIREFRAMES */}
        {(wireframeTab === "owner" || wireframeTab === "all") && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <UserCheck size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Workshop Owner Wireframes
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  Low-fidelity layouts for workshop operations, stock control, and service management.
                </p>
              </div>
            </div>

            {/* Owner Wireframe Carousel */}
            {(() => {
              const wireframes = [
                { label: "Owner Splash & Login", file: "wireframe-9.png" },
                { label: "Owner Dashboard", file: "wireframe-10.png" },
              ];
              return (
                <div style={{ position: "relative" }}>
                  {/* Carousel viewport */}
                  <div style={{ overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                    <div
                      style={{
                        display: "flex",
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: `translateX(-${ownerWireframeIndex * 100}%)`,
                      }}
                    >
                      {wireframes.map((wf, i) => (
                        <div key={i} style={{ minWidth: "100%", boxSizing: "border-box" }}>
                          <h4
                            style={{
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                              marginBottom: "var(--space-3)",
                            }}
                          >
                            {wf.label}
                          </h4>
                          <CaseStudyImage
                            src={`${ASSET}/${wf.file}`}
                            alt={`Wireframe — ${wf.label}`}
                            fallbackText={wf.file}
                            minHeight={560}
                            style={{ maxHeight: "80vh", objectFit: "contain" }}
                            onClick={() => openLb(`${ASSET}/${wf.file}`, `Wireframe — ${wf.label}`)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Nav buttons */}
                  <button
                    onClick={() =>
                      setOwnerWireframeIndex(
                        (i) => (i - 1 + wireframes.length) % wireframes.length
                      )
                    }
                    aria-label="Previous wireframe"
                    style={{
                      position: "absolute",
                      left: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      setOwnerWireframeIndex((i) => (i + 1) % wireframes.length)
                    }
                    aria-label="Next wireframe"
                    style={{
                      position: "absolute",
                      right: "var(--space-3)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid var(--glass-border)",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all var(--transition-fast)",
                      zIndex: 2,
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  {/* Dots indicator */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    {wireframes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setOwnerWireframeIndex(i)}
                        aria-label={`Go to wireframe ${i + 1}`}
                        style={{
                          width: ownerWireframeIndex === i ? 24 : 8,
                          height: 8,
                          borderRadius: "var(--radius-full)",
                          background:
                            ownerWireframeIndex === i
                              ? "var(--accent-primary)"
                              : "var(--glass-border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all var(--transition-base)",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </motion.div>

      {/* ── SECTION 10: Final Interface ─────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Final Interface</h2>
        <p style={sectionSubtitle}>
          High-fidelity screens divided into two comprehensive roles: the Customer/User Interface and the Workshop Owner Interface.
        </p>

        {/* Role Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            marginBottom: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setHifiTab("all")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${hifiTab === "all" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                hifiTab === "all"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                hifiTab === "all" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <Layout size={16} />
            <span>Show All</span>
          </button>

          <button
            onClick={() => setHifiTab("user")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${hifiTab === "user" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                hifiTab === "user"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                hifiTab === "user" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <User size={16} />
            <span>1. Customer App</span>
          </button>

          <button
            onClick={() => setHifiTab("owner")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-5)",
              borderRadius: "var(--radius-full)",
              border: `1px solid ${hifiTab === "owner" ? "var(--accent-primary)" : "var(--glass-border)"
                }`,
              background:
                hifiTab === "owner"
                  ? "rgba(41, 151, 255, 0.15)"
                  : "var(--glass-bg)",
              color:
                hifiTab === "owner" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
          >
            <UserCheck size={16} />
            <span>2. Workshop Owner App</span>
          </button>
        </div>

        {/* 1. USER INTERFACE SECTION */}
        {(hifiTab === "user" || hifiTab === "all") && (
          <div style={{ marginBottom: hifiTab === "all" ? "var(--space-8)" : 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <User size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Customer Interface
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  High-fidelity screens tailored for motorcycle owners to discover nearby workshops, book services, order spare parts, and track real-time status.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-4)",
              }}
            >
              {[
                { label: "Splash Screen & Login", file: "hifi-1.png" },
                { label: "Home & Service History", file: "hifi-2.png" },
                { label: "Workshop & Details", file: "hifi-3.png" },
                { label: "Spare Parts Catalog", file: "hifi-4.png" },
                { label: "Cart & Checkout", file: "hifi-5.png" },
                { label: "Service Booking", file: "hifi-6.png" },
                { label: "Order & Tracking", file: "hifi-7.png" },
                { label: "Scheduled Maintenance", file: "hifi-8.png" },
                { label: "Customer Chat", file: "hifi-9.png" },
                { label: "Profile & Settings", file: "hifi-10.png" },
                { label: "Nearby Workshops Map", file: "hifi-11.png" },
                { label: "Ratings & Digital Receipts", file: "hifi-12.png" },
              ].map((screen) => (
                <div key={screen.file}>
                  <h4
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {screen.label}
                  </h4>
                  <CaseStudyImage
                    src={`${ASSET}/${screen.file}`}
                    alt={`High Fidelity User — ${screen.label}`}
                    fallbackText={screen.file}
                    minHeight={560}
                    style={{ objectFit: "contain" }}
                    onClick={() => openLb(`${ASSET}/${screen.file}`, `${screen.label}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. PEMILIK BENGKEL INTERFACE SECTION */}
        {(hifiTab === "owner" || hifiTab === "all") && (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-4)",
                paddingBottom: "var(--space-3)",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(41, 151, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-primary)",
                }}
              >
                <UserCheck size={18} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  Workshop Owner Interface
                </h3>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  High-fidelity screens designed for workshop managers to oversee service queues, inventory stock, pickup requests, and daily operations.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-4)",
              }}
            >
              {[
                { label: "Owner Dashboard", file: "hifi-owner-1.png" },
                { label: "Chat & Profile", file: "hifi-owner-2.png" },

              ].map((screen) => (
                <div key={screen.file}>
                  <h4
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {screen.label}
                  </h4>
                  <CaseStudyImage
                    src={`${ASSET}/${screen.file}`}
                    alt={`High Fidelity Owner — ${screen.label}`}
                    fallbackText={screen.file}
                    minHeight={560}
                    style={{ objectFit: "contain" }}
                    onClick={() => openLb(`${ASSET}/${screen.file}`, `${screen.label}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* ── SECTION 11: Prototype ──────────────── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Interactive Prototype</h2>
        <p style={sectionSubtitle}>
          An interactive prototype built in Figma to simulate the real user
          experience and gather meaningful feedback during usability testing.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "var(--space-4)",
            paddingBottom: "var(--space-4)",
          }}
        >
          <a
            href={project.prototypeUrl && project.prototypeUrl !== "#" ? project.prototypeUrl : "#"}
            target="_blank"
            rel="noreferrer"
            className="glass-btn glass-btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-4) var(--space-6)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Play size={18} />
            <span>View Interactive Prototype</span>
          </a>
        </div>
      </motion.div>

      {/* ── SECTION 12: Testing & Validation ───── */}
      <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Testing &amp; Validation</h2>
        <p style={sectionSubtitle}>
          Usability testing was conducted using the System Usability Scale (SUS)
          with real users, followed by iterative design improvements.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {[
            {
              icon: <UserCheck size={20} color="var(--accent-primary)" />,
              label: "Participants",
              desc: "8 end-users (motorcycle owners) and 5 workshop owners completed guided usability tasks and the 10-item SUS questionnaire.",
            },
            {
              icon: <MessageCircle size={20} color="var(--accent-primary)" />,
              label: "Key Feedback",
              desc: "Users requested real-time workshop availability badges, clearer vehicle info on booking confirmations, and a more prominent dark-mode primary menu.",
            },
            {
              icon: <RefreshCcw size={20} color="var(--accent-primary)" />,
              label: "Design Iterations",
              desc: "3 key revisions: (1) added full/available status badges to workshop cards, (2) refined dark-mode navigation contrast, (3) added vehicle detail summary to booking confirmation.",
            },
            {
              icon: <Award size={20} color="var(--accent-primary)" />,
              label: "SUS Evaluation",
              desc: "Both user groups rated the application in the \"Excellent\" usability range (Grade A), validating the effectiveness of the UCD approach.",
            },
          ].map((step, i, arr) => (
            <div key={i} style={{ width: "100%", maxWidth: 480 }}>
              <div
                style={{
                  ...glassCard,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-4)",
                }}
              >
                <div style={iconWrap}>{step.icon}</div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {step.label}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < arr.length - 1 && <div style={connectorLine} />}
            </div>
          ))}
        </div>

        {/* SUS Score Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-4)",
            marginTop: "var(--space-6)",
          }}
        >
          {[
            {
              score: "83.12",
              group: "End Users",
              grade: "A",
              label: "Excellent",
              count: "8 participants",
            },
            {
              score: "88.0",
              group: "Workshop Owners",
              grade: "A",
              label: "Excellent",
              count: "5 participants",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                ...glassCard,
                textAlign: "center",
                borderColor: "var(--accent-primary)",
                position: "relative",
                overflow: "hidden",
                padding: "var(--space-6) var(--space-5)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--accent-primary)",
                }}
              />
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "var(--accent-primary)",
                  textTransform: "uppercase",
                }}
              >
                {item.group}
              </span>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  marginTop: "var(--space-2)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {item.score}
              </div>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(41, 151, 255, 0.15)",
                  color: "var(--accent-primary)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  border: "1px solid rgba(41, 151, 255, 0.3)",
                }}
              >
                Grade {item.grade} · {item.label}
              </span>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-tertiary)",
                  marginTop: "var(--space-3)",
                  marginBottom: 0,
                }}
              >
                {item.count}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 13: Reflection ─────────────── */}
      {/* <motion.div style={sectionWrap} {...fadeUp}>
        <h2 style={sectionHeadingStyle}>Reflection</h2>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "var(--space-4)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
          }}
        >
          <BookOpen size={18} color="var(--accent-primary)" />
          What I Learned
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            maxWidth: 640,
          }}
        >
          This project was my undergraduate thesis and my most comprehensive
          design challenge. Going through the full User-Centered Design cycle —
          from field observation at a real workshop to SUS-validated prototypes —
          taught me that great UX isn't about assumptions; it's about evidence.
          The iterative feedback loop was transformative: early designs looked
          polished but missed critical user needs (like real-time workshop
          availability) that only surfaced through testing. Achieving SUS scores
          of 83+ across both user groups validated not just the interface, but
          the entire research-driven approach. If I were to continue this
          project, I'd explore integrating a real-time payment system and
          expanding the pickup service with live GPS tracking.
        </p>
      </motion.div> */}

      {/* ── CASE STUDY IMAGE LIGHTBOX ─── */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lbOpen && (
              <motion.div
                className="detail-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeLb}
              >
                <button
                  className="detail-lightbox-close"
                  onClick={closeLb}
                  aria-label="Close image"
                >
                  <X size={24} />
                </button>
                <motion.img
                  key={lbSrc}
                  src={lbSrc}
                  alt={lbAlt}
                  className="detail-lightbox-img"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                />
                {lbAlt && (
                  <div
                    className="detail-lightbox-caption"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lbAlt}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}


/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function ProjectDetail() {
  const { slug } = useParams();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSingle, setLightboxSingle] = useState(null);

  const project = projects.find((p) => p.slug === slug);

  const isBengkelMotorku = slug === "bengkel-motorku";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  // Lock body scroll and add keyboard controls when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setLightboxSingle(null);
      } else if (e.key === "ArrowLeft" && !lightboxSingle) {
        setLightboxIndex((prev) => {
          const total = project?.gallery?.length || 1;
          return (prev - 1 + total) % total;
        });
      } else if (e.key === "ArrowRight" && !lightboxSingle) {
        setLightboxIndex((prev) => {
          const total = project?.gallery?.length || 1;
          return (prev + 1) % total;
        });
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, lightboxSingle, project]);

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="glass-btn glass-btn-primary">
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxSingle(null);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openSingleLightbox = (src, caption = "") => {
    setLightboxSingle({ src, caption });
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction) => {
    setLightboxIndex((prev) => {
      const total = project.gallery.length;
      return (prev + direction + total) % total;
    });
  };

  return (
    <>
      <Navbar homeOnly />

      {/* Hero */}
      <motion.section
        className="detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="detail-title">{project.title}</h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="detail-hero-image-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onClick={() => openSingleLightbox(project.image, project.title)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openSingleLightbox(project.image, project.title)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="detail-hero-image"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="detail-content">
        <div className="container-custom">
          <div className="detail-grid">
            {/* Main Description */}
            <motion.div
              className="detail-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h2 className="detail-section-heading">About This Project</h2>
              <p className="detail-description">{project.detailDescription}</p>

              {/* Features — only for non-Bengkel projects */}
              {!isBengkelMotorku && (
                <>
                  <h3 className="detail-sub-heading">Key Features</h3>
                  <ul className="detail-features">
                    {project.features.map((feature, i) => (
                      <li key={i} className="detail-feature-item">
                        <span className="detail-feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="detail-sidebar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {/* Tech Stack */}
              <div className="detail-sidebar-card">
                <h4 className="detail-sidebar-label">Tech Stack</h4>
                <div className="detail-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="detail-sidebar-card">
                <h4 className="detail-sidebar-label">Links</h4>
                <div className="detail-links">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="detail-link-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Figma</span>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="detail-link-btn"
                    >
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {(!project.liveUrl || project.liveUrl === "#") &&
                    (!project.githubUrl || project.githubUrl === "#") && (
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        Links coming soon
                      </p>
                    )}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* ── Bengkel Motorku: Case Study Sections ── */}
          {isBengkelMotorku && <BengkelMotorkuCaseStudy project={project} />}

          {/* Gallery — only for non-Bengkel projects */}
          {!isBengkelMotorku && project.gallery && project.gallery.length > 0 && (
            <motion.div
              className="detail-gallery-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <h2 className="detail-section-heading">Project Gallery</h2>
              <div className="detail-gallery-grid">
                {project.gallery.map((item, i) => (
                  <div
                    key={i}
                    className={`detail-gallery-item ${item.fullWidth ? "full-width" : ""}`}
                    onClick={() => openLightbox(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="detail-gallery-img"
                      loading="lazy"
                    />
                    <div className="detail-gallery-overlay">
                      <span className="detail-gallery-caption">
                        {item.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back Link */}
          <motion.div
            className="detail-bottom-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.65 }}
          >
            <Link to="/#projects" className="glass-btn glass-btn-secondary">
              <ArrowLeft size={16} />
              <span>Back to All Projects</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                className="detail-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setLightboxOpen(false);
                  setLightboxSingle(null);
                }}
              >
                <button
                  className="detail-lightbox-close"
                  onClick={() => {
                    setLightboxOpen(false);
                    setLightboxSingle(null);
                  }}
                  aria-label="Close lightbox"
                >
                  <X size={24} />
                </button>

                {!lightboxSingle && project.gallery && project.gallery.length > 1 && (
                  <>
                    <button
                      className="detail-lightbox-nav detail-lightbox-prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox(-1);
                      }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      className="detail-lightbox-nav detail-lightbox-next"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox(1);
                      }}
                      aria-label="Next image"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                <motion.img
                  key={lightboxSingle ? lightboxSingle.src : lightboxIndex}
                  src={lightboxSingle ? lightboxSingle.src : project.gallery?.[lightboxIndex]?.src}
                  alt={lightboxSingle ? lightboxSingle.caption : project.gallery?.[lightboxIndex]?.caption}
                  className="detail-lightbox-img"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                />

                {(lightboxSingle?.caption || project.gallery?.[lightboxIndex]?.caption) && (
                  <div
                    className="detail-lightbox-caption"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {lightboxSingle ? lightboxSingle.caption : project.gallery?.[lightboxIndex]?.caption}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
