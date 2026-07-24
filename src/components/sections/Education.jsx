import { GraduationCap, BookOpen } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import { education } from "../../data/educationData";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-custom">
        <SectionTitle
          title="Education"
          subtitle="My academic background and relevant coursework"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.1}>
              <div className="glass-card">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--accent-primary)",
                    }}
                  >
                    <GraduationCap size={24} color="#FFF" />
                  </div>

                  <div className="flex-1">
                    {/* Institution */}
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {edu.institution}
                    </h3>

                    {/* Degree */}
                    <p
                      className="font-medium mb-1"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {edu.degree}
                    </p>

                    {/* Period & GPA */}
                    <div
                      className="flex flex-wrap items-center gap-3 mb-4 text-sm"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      <span>
                        {edu.startYear} — {edu.endYear}
                      </span>
                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span
                            className="font-medium"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            GPA: {edu.gpa}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Coursework */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div>
                        <div
                          className="flex items-center gap-2 mb-2 text-sm font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <BookOpen size={14} />
                          Relevant Coursework
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span key={course} className="tech-badge">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
