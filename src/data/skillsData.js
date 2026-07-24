// Bento-grid skill cards data
// card types: "featured" (large dark), "secondary" (medium), "compact" (small), "badge" (pill)

export const skillCards = [
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    type: "featured",
    level: "Expert",
    description:
      "Building performant, SEO-friendly web applications with server-side rendering and a powerful modular architecture.",
    tags: ["Vue.js", "SSR", "Nitro"],
    icon: "nuxt",
  },
  {
    id: "react",
    name: "React",
    type: "secondary",
    level: "Advanced",
    description:
      "Creating dynamic, component-driven user interfaces with modern hooks and state management patterns.",
    tags: ["Hooks", "JSX"],
    icon: "react",
  },
  {
    id: "vuejs",
    name: "Vue.js",
    type: "compact",
    level: "Advanced",
    description:
      "Building reactive single-page applications with the progressive JavaScript framework.",
    icon: "vue",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    type: "compact",
    level: "Proficient",
    description:
      "Crafting responsive, utility-first designs with rapid prototyping and consistent styling.",
    icon: "tailwind",
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
