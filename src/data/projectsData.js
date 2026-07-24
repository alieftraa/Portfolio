import diskominfoCover from "../assets/projects/diskominfo.png";
import diskominfoGallery1 from "../assets/projects/dis2.png";
import diskominfoGallery2 from "../assets/projects/dis3.png";

import bengkelCover from "../assets/projects/motorku.png";
import bengkelGallery1 from "../assets/projects/motorku2.png";
import bengkelGallery2 from "../assets/projects/motorku 3.png";

// import socialMusicCover from "../assets/projects/social-music.png";
// import socialMusicGallery1 from "../assets/projects/socialmusic-gallery1.png";
// import socialMusicGallery2 from "../assets/projects/socialmusic-gallery2.png";

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web App" },
  { id: "mobile", label: "Mobile" },
  { id: "uiux", label: "UI/UX" },
];

export const projects = [
  {
    id: "project-2",
    slug: "bengkel-motorku",
    title: "Bengkel Motorku",
    description:
      "A UI/UX thesis project utilizing User-Centered Design (UCD) and SUS (System Usability Scale) to optimize motorcycle service workflows.",
    detailDescription:
      "Bengkel Motorku is a thesis project focused on designing a mobile application for motorcycle repair service management. Using User-Centered Design (UCD) methodology and evaluated with SUS (System Usability Scale), the project aims to streamline the process of booking, tracking, and managing motorcycle repair services. The research involved user interviews, persona creation, user journey mapping, wireframing, and iterative prototyping to achieve an optimal user experience.",
    techStack: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    category: "uiux",
    liveUrl: "https://www.figma.com/design/PT3jqsMkG4hSpxNlytxHaa/bismillah-habis-ini-dapet-kerja-di-US?node-id=0-1&t=HOPMD8dnzXqsDnFf-1",
    githubUrl: "#",
    featured: true,
    date: "2024-12",
    color: "#FF6B6B",
    bgColor: "#2D1B2E",
    iconName: "smartphone",
    image: bengkelCover,
    gallery: [
      { src: bengkelCover, caption: "User-Centered Design process overview" },
      { src: bengkelGallery1, caption: "User flow and wireframe documentation" },
      { src: bengkelGallery2, caption: "High-fidelity mobile app screens" },
    ],
    features: [
      "Complete UCD (User-Centered Design) methodology implementation",
      "User research with interviews and persona creation",
      "Wireframing and interactive prototyping in Figma",
      "SUS (System Usability Scale) evaluation with real users",
      "Iterative design process with multiple feedback rounds",
    ],
    role: "UI/UX Researcher & Designer",
    duration: "6 months",
  },
  {
    id: "project-1",
    slug: "diskominfo-redesign",
    title: "Diskominfo Redesign Website",
    description:
      "A comprehensive redesign focused on accessibility and modern information architecture for government services.",
    detailDescription:
      "A full redesign of the Diskominfo DIY (Dinas Komunikasi dan Informatika Daerah Istimewa Yogyakarta) governmental portal. The project focused on improving the user experience through modern UI patterns, better information architecture, and enhanced accessibility. The redesign covers the entire website including the homepage, service pages, news section, and contact pages, ensuring a consistent and cohesive design language throughout.",
    techStack: ["Nuxt.js", "Tailwind CSS", "Figma", "Responsive UI"],
    category: "web",
    liveUrl: "https://www.figma.com/design/W2exjVe0XLihM6LgV5Xy2f/DISKOMINFO?node-id=0-1",
    githubUrl: "https://github.com/alieftraa/ReDesign-Kominfo",
    featured: true,
    date: "2025-03",
    color: "#82C92E",
    bgColor: "#082F1D",
    iconName: "globe",
    image: diskominfoCover,
    gallery: [
      { src: diskominfoCover, caption: "Homepage redesign with modern hero section" },
      { src: diskominfoGallery1, caption: "Services page with organized card layout" },
      { src: diskominfoGallery2, caption: "Mobile responsive version" },
    ],
    features: [
      "Modern, accessible UI design following WCAG guidelines",
      "Responsive design optimized for all device sizes",
      "Improved information architecture for easier navigation",
      "Integrated search functionality for government services",
      "Performance optimized with Nuxt.js SSR",
    ],
    role: "Frontend Developer & UI/UX Designer",
    duration: "3 months",
  },
  // {

  // },
  // {
  //   id: "project-3",
  //   slug: "social-music",
  //   title: "Social Music",
  //   description:
  //     "A full-stack web development project building a social-driven music platform with real-time interactions.",
  //   detailDescription:
  //     "Social Music (SoMu) is a full-stack web application designed as a social media platform for music enthusiasts. The platform enables users to share music, discover new artists, create and share playlists, and connect with other music lovers through real-time interactions. Built with modern web technologies, the application features a responsive design, real-time chat, music player integration, and a recommendation system based on user preferences.",
  //   techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
  //   category: "web",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  //   date: "2022-12",
  //   color: "#B5FF57",
  //   bgColor: "#231145",
  //   iconName: "music",
  //   image: socialMusicCover,
  //   gallery: [
  //     { src: socialMusicCover, caption: "Social Music dashboard overview" },
  //     { src: socialMusicGallery1, caption: "Music feed and player interface" },
  //     { src: socialMusicGallery2, caption: "User profile and music stats" },
  //   ],
  //   features: [
  //     "Real-time social feed with music sharing capabilities",
  //     "Integrated music player with playlist management",
  //     "User profiles with music taste analytics",
  //     "Real-time chat and messaging using Socket.io",
  //     "Music recommendation engine based on listening habits",
  //   ],
  //   role: "Full-Stack Developer",
  //   duration: "4 months",
  // },
];
