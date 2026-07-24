import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, ExternalLink, X } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { certifications } from "../../data/achievementsData";

const certificateGroups = certifications.reduce((groups, certificate, index) => {
  if (index % 2 === 0) groups.push([]);
  groups[groups.length - 1].push(certificate);
  return groups;
}, []);

const hasCertificateLink = (certificate) =>
  certificate.verifyUrl && certificate.verifyUrl !== "#";

function CertificateImage({ certificate, priority = false, isActive = true }) {
  const hasLink = hasCertificateLink(certificate);
  const image = (
    <>
      <img
        src={certificate.thumbnail}
        alt={certificate.title}
        className="cert-card-image"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={(event) => {
          event.currentTarget.hidden = true;
          event.currentTarget.nextElementSibling.hidden = false;
        }}
      />
      <span className="cert-card-image-fallback" hidden>
        <Award size={34} strokeWidth={1.5} aria-hidden="true" />
        <span>{certificate.title}</span>
      </span>
    </>
  );

  if (!hasLink) {
    return <div className="cert-card-image-wrap">{image}</div>;
  }

  return (
    <a
      href={certificate.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card-image-wrap cert-card-image-wrap--link"
      aria-label={`View certificate: ${certificate.title}`}
      tabIndex={isActive ? undefined : -1}
    >
      {image}
    </a>
  );
}

function CertificateCard({ certificate, priority, isActive = true, className = "" }) {
  const hasLink = hasCertificateLink(certificate);

  return (
    <article className={`cert-card ${className}`.trim()}>
      <CertificateImage
        certificate={certificate}
        priority={priority}
        isActive={isActive}
      />

      <div className="cert-card-info">
        <span className="cert-card-issuer">{certificate.issuer}</span>
        {hasLink ? (
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card-title-link"
            tabIndex={isActive ? undefined : -1}
          >
            <h3 className="cert-card-title">{certificate.title}</h3>
          </a>
        ) : (
          <h3 className="cert-card-title">{certificate.title}</h3>
        )}

        <div className="cert-card-footer">
          <span className="cert-card-date">{certificate.date}</span>
          {hasLink && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card-link"
              tabIndex={isActive ? undefined : -1}
            >
              <span>View Certificate</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function AllCertificatesModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusCloseButton = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusCloseButton);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="certificates-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.section
            className="certificates-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="all-certificates-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="certificates-modal-header">
              <div>
                <span className="certificates-modal-eyebrow">All certificates</span>
                <h2 id="all-certificates-title">{certifications.length} Certificates</h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="certificates-modal-close"
                onClick={onClose}
                aria-label="Close all certificates"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div className="certificates-modal-grid">
              {certifications.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Achievements() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalGroups = certificateGroups.length;
  const isFirstGroup = currentGroup === 0;
  const isLastGroup = currentGroup === totalGroups - 1;

  return (
    <>
      <section id="achievements" className="section section-alt">
        <div className="container-custom">
          <div className="certifications-layout">
            <ScrollReveal direction="left" className="certifications-sidebar">
              <div>
                <h2 className="certifications-title">Certifications</h2>
                <button
                  type="button"
                  className="certificates-view-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>View All Certificates</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal className="certifications-content" delay={0.08}>
              <div
                id="certificate-carousel"
                className="cert-carousel-viewport"
                aria-roledescription="carousel"
                aria-label="Certificate groups"
              >
                <div
                  className="cert-carousel-track"
                  style={{ transform: `translate3d(-${currentGroup * 100}%, 0, 0)` }}
                >
                  {certificateGroups.map((group, groupIndex) => (
                    <div
                      key={group.map((certificate) => certificate.id).join("-")}
                      className="cert-carousel-group"
                      aria-hidden={groupIndex !== currentGroup}
                    >
                      {group.map((certificate, certificateIndex) => (
                        <CertificateCard
                          key={certificate.id}
                          certificate={certificate}
                          priority={groupIndex === 0}
                          isActive={groupIndex === currentGroup}
                          className={certificateIndex === 0 ? "cert-card--primary" : "cert-card--secondary"}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <p className="cert-carousel-status" aria-live="polite">
                Showing certificates {currentGroup * 2 + 1}–
                {Math.min(currentGroup * 2 + 2, certifications.length)} of {certifications.length}
              </p>

              <div className="certifications-actions">
                <div className="cert-carousel-navigation" aria-label="Certificate navigation">
                  <button
                    type="button"
                    className="cert-carousel-button"
                    onClick={() => setCurrentGroup((group) => group - 1)}
                    disabled={isFirstGroup}
                    aria-label="Previous certificates"
                    aria-controls="certificate-carousel"
                  >
                    <ArrowLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="cert-carousel-button"
                    onClick={() => setCurrentGroup((group) => group + 1)}
                    disabled={isLastGroup}
                    aria-label="Next certificates"
                    aria-controls="certificate-carousel"
                  >
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AllCertificatesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
