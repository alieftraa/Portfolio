import { Link as LinkIcon, Code2, Mail } from "lucide-react";
import { InstagramIcon } from "../ui/SocialIcons";
import ScrollReveal from "../ui/ScrollReveal";
import { personalInfo } from "../../data/personalInfo";

export default function Contact() {
  const socialCards = [
    {
      label: "LinkedIn",
      handle: "@alieftraa",
      href: personalInfo.social.linkedin,
      icon: LinkIcon,
    },
    {
      label: "GitHub",
      handle: "@alieftraa",
      href: personalInfo.social.github,
      icon: Code2,
    },
    {
      label: "Instagram",
      handle: "@alieftraa",
      href: personalInfo.social.instagram,
      icon: InstagramIcon,
    },
    {
      label: "Email",
      handle: personalInfo.email,
      href: personalInfo.social.email,
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="section text-center">
      <div className="container-custom">
        <ScrollReveal>
          <span className="contact-eyebrow">CONTACT</span>
          <h2 className="contact-title">Let's Connect.</h2>
          <p className="contact-subtitle">
            Currently open to new opportunities and interesting collaborations.
          </p>
          <br></br><br></br>
          <div className="my-10 md:my-14">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-email-link"
            >
              {personalInfo.email}
            </a>
          </div>
        </ScrollReveal>
        <br></br><br></br><br></br>

        <ScrollReveal delay={0.15}>
          <div className="contact-social-grid">
            {socialCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-card"
                >
                  <div className="contact-social-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h4 className="contact-social-label">{card.label}</h4>
                  <p className="contact-social-handle">{card.handle}</p>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
