import ScrollReveal from "../ui/ScrollReveal";
import { personalInfo } from "../../data/personalInfo";
import heroImg from "../../assets/alief3.png";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container-custom">
        {/* Title - outside grid so both columns align */}
        <ScrollReveal direction="left">
          <h2
            className="font-bold text-3xl md:text-4xl tracking-tight mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            About Me
          </h2>
        </ScrollReveal>
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left Column - Bio Text */}
          <ScrollReveal direction="left" className="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-between h-full">
            <div>

              {/* Bio Text */}
              <div className="flex flex-col gap-6">
                {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: "1.85",
                      textAlign: "justify",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick Stats and Availability */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              style={{
                marginTop: "var(--space-6)",
                paddingTop: "var(--space-6)",
                borderTop: "1px solid var(--divider)",
              }}
            >
              <div className="flex flex-wrap gap-8">
                {personalInfo.stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px]"
                      style={{
                        color: "var(--text-tertiary)",
                        marginTop: "2px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="shrink-0">
                <span className="status-badge">{personalInfo.availability}</span>
              </div> */}
            </div>
          </ScrollReveal>

          {/* Right Column - Profile Image */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2 order-1 lg:order-2">
            <div className="flex justify-center">
              <div
                className="overflow-hidden w-full rounded-2xl border"
                style={{
                  maxHeight: "550px",
                  aspectRatio: "4/5",
                  background: "var(--glass-bg)",
                  borderColor: "var(--glass-border)",
                  boxShadow: "var(--glass-shadow)",
                }}
              >
                <img
                  src={heroImg}
                  alt="Alif Putra Hermawan"
                  className="w-full h-full object-cover animate-fade-in"
                  style={{ filter: "grayscale(100%) contrast(1.05)" }}
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
