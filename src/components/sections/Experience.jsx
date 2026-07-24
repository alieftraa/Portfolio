import { Briefcase, Globe, GraduationCap, Compass } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { experiences } from "../../data/experienceData";

const getIcon = (iconName) => {
  switch (iconName) {
    case "briefcase":
      return <Briefcase size={16} />;
    case "globe":
      return <Globe size={16} />;
    case "compass":
      return <Compass size={16} />;
    case "graduation":
      return <GraduationCap size={16} />;
    default:
      return <Briefcase size={16} />;
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* Left Column - Sticky Title */}
          <div className="md:col-span-1 md:sticky md:top-28 h-fit">
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="font-bold text-3xl md:text-4xl tracking-tight mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Experiences
                </h2>
                <p
                  className="text-sm md:text-base font-normal max-w-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  A selective look at the chapters that shaped my career.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Timeline */}
          <div className="md:col-span-2">
            <div className="relative">
              {experiences.map((exp, index) => (
                <ScrollReveal
                  key={exp.id}
                  direction="right"
                  delay={index * 0.05}
                >
                  <div className="flex gap-6 md:gap-8 group">
                    {/* Left Timeline Line & Icon */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Icon Badge */}
                      <div
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--divider)",
                          color: "var(--text-secondary)",
                          boxShadow: "var(--glass-shadow)",
                        }}
                      >
                        {getIcon(exp.icon)}
                      </div>

                      {/* Vertical Line connecting to next item */}
                      {index < experiences.length - 1 && (
                        <div
                          className="w-px flex-1 mt-2"
                          style={{ background: "var(--divider)" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1"
                      style={{
                        paddingBottom: index < experiences.length - 1 ? "7.5rem" : "2rem",
                      }}
                    >
                      {/* Date */}
                      <span
                        className="text-[11px] font-semibold tracking-wider uppercase block mb-1"
                        style={{ color: "var(--text-secondary)", opacity: 0.8 }}
                      >
                        {exp.startDate} — {exp.endDate}
                      </span>

                      {/* Role */}
                      <h3
                        className="font-semibold text-lg md:text-xl tracking-tight mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <div
                        className="text-sm font-medium mb-3 flex items-center gap-1.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span>{exp.company}</span>
                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>•</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p
                        className="text-sm md:text-base font-normal leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
