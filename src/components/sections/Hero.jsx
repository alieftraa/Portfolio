import { useState, useEffect, useRef, useMemo } from "react";
import { Download, ArrowDown } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-wrap">
      <div
        className="hero-content"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h1 className="hero-name" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          {personalInfo.name.trim().split(/\s+/).map((word, i) => (
            <span key={i} className="hero-word" style={{ display: "block" }}>
              {word.split("").map((char, j) => (
                <span key={j} className="hover-letter">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="hero-title">
          {personalInfo.title}
        </p>

        {/* CTAs */}
        <div className="hero-cta-row">
          <button
            onClick={scrollToProjects}
            className="glass-btn glass-btn-primary"
          >
            View Projects
          </button>
          <a
            href={personalInfo.resumeUrl}
            download="Alif_Putra_Hermawan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn glass-btn-secondary"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="scroll-indicator"
        aria-label="Scroll down"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-tertiary)",
        }}
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
