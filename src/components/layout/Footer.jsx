import { ArrowUp, Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/personalInfo";

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: personalInfo.social.linkedin,
    label: "LinkedIn",
  },
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  {
    icon: InstagramIcon,
    href: personalInfo.social.instagram,
    label: "Instagram",
  },
  { icon: Mail, href: personalInfo.social.email, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-12"
      style={{
        borderTop: "1px solid var(--divider)",
        background: "var(--bg-section-alt)",
      }}
    >
      <div className="container-custom">
        {/* Back to Top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="glass-card w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
            style={{ padding: 0 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} style={{ color: "var(--text-secondary)" }} />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-tertiary)",
              }}
              aria-label={label}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-tertiary)")
              }
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p
            className="text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
