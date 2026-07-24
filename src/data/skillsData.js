// Bento-grid skill cards data
// card types: "featured" (large dark), "secondary" (medium), "compact" (small), "badge" (pill)

export const skillCards = [
  {
    id: "figma",
    name: "Figma",
    type: "featured",
    level: "Primary Tool",
    description:
      "Designing user-centered interfaces, building interactive prototypes, and translating ideas into intuitive digital experiences.",
    tags: ["UI/UX", "Prototyping", "Wireframing", "Design Systems"],
    icon: "figma",
  },
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    type: "secondary",
    description:
      "Turning interface designs into responsive and functional web experiences.",
    tags: ["Vue.js", "SSR", "Responsive Web"],
    icon: "nuxt",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    type: "compact",
    description:
      "Building responsive interfaces efficiently with a consistent and scalable styling approach.",
    tags: ["Responsive Design", "Utility-First"],
    icon: "tailwind",
  },
  {
    id: "react",
    name: "React",
    type: "compact",
    level: "Basic",
    description:
      "Basic experience in building component-based user interfaces.",
    tags: ["Components", "JSX"],
    icon: "react",
  },
  {
    id: "html",
    name: "HTML",
    type: "badge",
    icon: "html",
  },
  {
    id: "css",
    name: "CSS",
    type: "badge",
    icon: "css",
  },
];
