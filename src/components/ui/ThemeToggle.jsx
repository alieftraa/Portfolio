import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
        style={{ background: "var(--glass-bg-hover)" }}
      />
      {theme === "light" ? (
        <Moon size={18} style={{ color: "var(--text-primary)" }} />
      ) : (
        <Sun size={18} style={{ color: "var(--accent-secondary)" }} />
      )}
    </button>
  );
}
