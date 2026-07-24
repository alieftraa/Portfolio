import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Zap,
  Folder,
  Briefcase,
  Trophy,
  Mail,
  Sun,
  Moon,
  Menu,
} from "lucide-react";
import { useScrollSpy, sections } from "../../hooks/useScrollSpy";
import { useTheme } from "../../context/ThemeContext";

const navIcons = {
  home: Home,
  about: User,
  experience: Briefcase,
  skills: Zap,
  projects: Folder,
  achievements: Trophy,
  contact: Mail,
};

const navLabels = {
  home: "Home",
  about: "About Me",
  experience: "Experiences",
  skills: "Skills",
  projects: "Projects",
  achievements: "Certif",
  contact: "Contact",
};

export default function Navbar() {
  const activeSection = useScrollSpy();
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef(null);

  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isExpanded = !hasScrolled || isHovered || isOpen;

  return (
    <header className="fixed top-6 left-0 right-0 z-[200] flex justify-center pointer-events-none">
      <motion.div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (hasScrolled) setIsOpen(!isOpen);
        }}
        animate={{
          width: isExpanded ? "min(92vw, 450px)" : "48px",
          height: "44px",
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
        className="rounded-full flex items-center justify-center pointer-events-auto cursor-pointer relative"
        style={{
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"
          }`,
          background: isDark
            ? "rgba(10, 10, 10, 0.5)"
            : "rgba(255, 255, 255, 0.4)",
          boxShadow: isDark
            ? "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
            : "0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center w-full h-full select-none"
              style={{
                color: isDark ? "var(--text-primary)" : "var(--text-primary)",
              }}
            >
              <Menu size={18} strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="expanded-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 px-3 w-full justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {sections.map((section) => {
                const IconComponent = navIcons[section];
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => scrollTo(section)}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border-none bg-transparent group relative"
                    style={{
                      color: isActive
                        ? "var(--accent-primary)"
                        : "var(--text-tertiary)",
                    }}
                    title={navLabels[section]}
                  >
                    <IconComponent
                      size={17}
                      strokeWidth={isActive ? 2.2 : 1.6}
                    />

                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 w-1 h-1 rounded-full"
                        style={{ background: "var(--accent-primary)" }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Divider */}
              <div
                className="w-px h-5 mx-0.5"
                style={{
                  backgroundColor: "var(--divider)",
                }}
              />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border-none bg-transparent"
                style={{
                  color: "var(--text-tertiary)",
                }}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <Sun size={17} strokeWidth={1.6} />
                ) : (
                  <Moon size={17} strokeWidth={1.6} />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
