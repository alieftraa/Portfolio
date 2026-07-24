import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function CertificateModal({ isOpen, onClose, certificate }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          className="cert-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="cert-modal-container"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="cert-modal-close"
              onClick={onClose}
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>

            {/* Certificate Image */}
            <div className="cert-modal-image-wrap">
              <img
                src={certificate.image}
                alt={certificate.title || "Certificate"}
                className="cert-modal-image"
              />
            </div>

            {/* Optional: View Original Link */}
            {certificate.url &&
              certificate.url !== "#" &&
              certificate.url !== "REPLACE_WITH_CERTIFICATE_URL" && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-link"
                >
                  <span>View Original Certificate</span>
                  <ExternalLink size={14} />
                </a>
              )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
