import { ExternalLink } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import {
  achievements,
  featuredCerts,
  certIconMap,
} from "../../data/achievementsData";

export default function Achievements() {
  const totalCount = featuredCerts.length + achievements.length;

  return (
    <section id="achievements" className="section section-alt">
      <div className="container-custom">
        {/* Header — eyebrow + title + total badge */}
        <ScrollReveal>
          <div className="certs-header">
            <div>
              <span className="certs-eyebrow"></span>
              <h2 className="certs-title">Certifications</h2>
            </div>
            <span className="certs-total-badge">{totalCount} Total</span>
          </div>
        </ScrollReveal>

        {/* Featured Row — 4 large cards */}
        <ScrollReveal delay={0.1}>
          <div className="certs-featured-grid">
            {featuredCerts.map((cert) => {
              const IconComponent = certIconMap[cert.icon];
              return (
                <div key={cert.id} className="cert-featured-card">
                  <div className="cert-featured-icon">
                    {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                  </div>
                  <h3 className="cert-featured-title">{cert.title}</h3>
                  <p className="cert-featured-issuer">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Compact Grid — remaining certs */}
        <div className="certs-compact-grid">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.03}>
              <div className="cert-compact-card">
                {item.verifyUrl && item.verifyUrl !== "#" && (
                  <span className="cert-compact-id">
                    ID: {item.id.toUpperCase()}
                  </span>
                )}
                <h4 className="cert-compact-title">{item.title}</h4>
                <p className="cert-compact-issuer">
                  {item.issuer} • {item.date}
                </p>
                {item.verifyUrl && item.verifyUrl !== "#" && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-compact-verify"
                    aria-label="Verify Certificate"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
