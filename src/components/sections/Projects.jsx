import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { projects } from "../../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="projects-header">
            <span className="projects-eyebrow"></span>
            <h2 className="projects-title">Projects</h2>
          </div>
        </ScrollReveal>

        {/* Project Items — Alternating Layout */}
        <div className="projects-list">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <div
                  className={`project-item ${isReversed ? "project-item--reversed" : ""
                    }`}
                >
                  {/* Image Side */}
                  <div className="project-image-wrap">
                    <Link
                      to={`/project/${project.slug}`}
                      className="project-image-link"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  {/* Text Side */}
                  <div className="project-info">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <Link
                      to={`/project/${project.slug}`}
                      className="project-details-btn"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
