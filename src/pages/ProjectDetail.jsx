import { useEffect, useState } from "react";
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
} from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { projects } from "../data/projectsData";


export default function ProjectDetail() {
  const { slug } = useParams();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = projects.find((p) => p.slug === slug);



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
    setLightboxIndex(index);
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
      {/* Top Bar - Centered Home Icon */}
      <nav className="detail-topbar">
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/"
            className="detail-home-btn"
            aria-label="Back to Home"
          >
            <Home size={18} strokeWidth={1.8} />
          </Link>
        </div>
      </nav>

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
            <span className="detail-eyebrow">{project.category.toUpperCase()}</span>
            <h1 className="detail-title">{project.title}</h1>

            {/* Meta row */}
            <div className="detail-meta">
              <div className="detail-meta-item">
                <User size={14} />
                <span>{project.role}</span>
              </div>
              <div className="detail-meta-item">
                <Calendar size={14} />
                <span>{project.date}</span>
              </div>
              <div className="detail-meta-item">
                <Clock size={14} />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="detail-hero-image-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
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

              {/* Features */}
              <h3 className="detail-sub-heading">Key Features</h3>
              <ul className="detail-features">
                {project.features.map((feature, i) => (
                  <li key={i} className="detail-feature-item">
                    <span className="detail-feature-dot" />
                    {feature}
                  </li>
                ))}
              </ul>
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

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
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
                    className="detail-gallery-item"
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
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="detail-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="detail-lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

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

            <motion.img
              key={lightboxIndex}
              src={project.gallery[lightboxIndex].src}
              alt={project.gallery[lightboxIndex].caption}
              className="detail-lightbox-img"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

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

            <div
              className="detail-lightbox-caption"
              onClick={(e) => e.stopPropagation()}
            >
              {project.gallery[lightboxIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
