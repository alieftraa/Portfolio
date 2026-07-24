import { Code2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { skillCards } from "../../data/skillsData";

/* ── SVG icon components for technology logos ── */

function FigmaIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9H12V2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9H15.5C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16H12V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H12V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 16C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16H8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NuxtIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.437 18.24L10.09 6.572a1.2 1.2 0 0 1 2.08 0l1.86 3.253-3.72 6.503H5.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.38 10.5l4.66 7.74h2.52a1.2 1.2 0 0 0 1.04-1.8l-4.74-8.29a1.2 1.2 0 0 0-2.08 0L13.38 10.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReactIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function VueIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 3h4l6 10.5L18 3h4L12 21 2 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 3l5 8.5L17 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TailwindIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 10.84 14.54 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.63 7.16 14.46 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 16.84 9.54 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.63 13.16 9.46 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HtmlIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 3l1.5 16L12 21l6.5-2L20 3H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 7h10l-.5 5.5L12 14l-4.5-1.5L7.25 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CssIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 3l1.5 16L12 21l6.5-2L20 3H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 7H8l.25 3h7.25l-.5 5.5L12 17l-3-1.5-.15-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap = {
  figma: FigmaIcon,
  nuxt: NuxtIcon,
  react: ReactIcon,
  vue: VueIcon,
  tailwind: TailwindIcon,
  html: HtmlIcon,
  css: CssIcon,
};

/* ── Card sub-components ── */

function FeaturedCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code2;
  return (
    <div className="bento-card bento-featured">
      <div className="bento-card-header">
        <div className="bento-icon-wrap bento-icon-featured">
          <Icon size={28} />
        </div>
        {skill.level && (
          <span className="bento-level-badge bento-level-featured">
            {skill.level}
          </span>
        )}
      </div>

      <h3 className="bento-card-title bento-title-featured">{skill.name}</h3>

      <p className="bento-card-desc bento-desc-featured">{skill.description}</p>

      {skill.tags && (
        <div className="bento-tags">
          {skill.tags.map((tag) => (
            <span key={tag} className="bento-tag bento-tag-featured">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SecondaryCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code2;
  return (
    <div className="bento-card bento-secondary">
      <div className="bento-card-header">
        <div className="bento-icon-wrap bento-icon-secondary">
          <Icon size={24} />
        </div>
        {skill.level && (
          <span className="bento-level-badge bento-level-secondary">
            {skill.level}
          </span>
        )}
      </div>

      <h3 className="bento-card-title bento-title-secondary">{skill.name}</h3>

      <p className="bento-card-desc bento-desc-secondary">{skill.description}</p>

      {skill.tags && (
        <div className="bento-tags">
          {skill.tags.map((tag) => (
            <span key={tag} className="bento-tag bento-tag-secondary">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function CompactCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code2;
  return (
    <div className="bento-card bento-compact">
      <div className="bento-card-header">
        <div className="bento-icon-wrap bento-icon-compact">
          <Icon size={20} />
        </div>
        {skill.level && (
          <span className="bento-level-badge bento-level-compact">
            {skill.level}
          </span>
        )}
      </div>

      <h3 className="bento-card-title bento-title-compact">{skill.name}</h3>

      <p className="bento-card-desc bento-desc-compact">{skill.description}</p>

      {skill.tags && (
        <div className="bento-tags" style={{ marginTop: "12px" }}>
          {skill.tags.map((tag) => (
            <span key={tag} className="bento-tag bento-tag-secondary">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function BadgeCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code2;
  return (
    <div className="bento-card bento-badge">
      <div className="bento-badge-inner">
        <Icon size={18} />
        <span className="bento-badge-name">{skill.name}</span>
      </div>
    </div>
  );
}

/* ── Main Skills Section ── */

export default function Skills() {
  const featured = skillCards.filter((s) => s.type === "featured");
  const secondary = skillCards.filter((s) => s.type === "secondary");
  const compact = skillCards.filter((s) => s.type === "compact");
  const badges = skillCards.filter((s) => s.type === "badge");

  return (
    <section id="skills" className="section section-alt">
      <div className="container-custom">
        {/* ── Header ── */}
        <ScrollReveal>
          <div className="bento-header">
            <div className="bento-header-left">
              <span className="bento-eyebrow"></span>
              <h2 className="bento-section-title">Tech Stack</h2>
            </div>
            <p className="bento-header-desc">
              The tools and technologies I use to turn ideas into experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Bento Grid ── */}
        <div className="bento-grid">
          {/* Row 1 — Featured + Secondary */}
          <ScrollReveal direction="left" className="bento-col-featured">
            {featured.map((skill) => (
              <FeaturedCard key={skill.id} skill={skill} />
            ))}
          </ScrollReveal>

          <ScrollReveal direction="right" className="bento-col-secondary">
            {secondary.map((skill) => (
              <SecondaryCard key={skill.id} skill={skill} />
            ))}
          </ScrollReveal>

          {/* Row 2 — Compact cards + Badge cards */}
          {compact.map((skill, i) => (
            <ScrollReveal
              key={skill.id}
              delay={i * 0.1}
              className="bento-col-compact"
            >
              <CompactCard skill={skill} />
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2} className="bento-col-badges">
            <div className="bento-badges-stack">
              {badges.map((skill) => (
                <BadgeCard key={skill.id} skill={skill} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
