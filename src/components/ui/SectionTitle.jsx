import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <ScrollReveal className="w-full">
      <div
        className={`mb-12 md:mb-16 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <h2
          className="font-bold mb-3 text-3xl md:text-4xl tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h2>
        {subtitle && subtitle.trim() && (
          <p
            className="max-w-xl text-sm md:text-base font-normal"
            style={{
              color: "var(--text-secondary)",
              marginInline: align === "center" ? "auto" : "0",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
