import certpertamina from "../assets/projects/certif/sertifpertamina.png";
import certkominfo from "../assets/projects/certif/sertifkominfo.png";
import certbangkit from "../assets/projects/certif/sertifbangkit.png";

export const experiences = [
  {
    id: "exp-1",
    company: "PT Kilang Pertamina Internasional RU IV",
    role: "Information Technology Intern",
    type: "Internship",
    startDate: "Apr 2025",
    endDate: "May 2025",
    location: "Cilacap, Indonesia",
    description: "Analyzed secure network infrastructure, studied topology and communication workflows, and assisted in CCTV/radio system operations in a major industrial refinery.",
    icon: "briefcase",
    certificate: {
      image: certpertamina,
      url: "REPLACE_WITH_CERTIFICATE_URL",
      title: "Sertifikat Magang Pertamina",
    },
  },
  {
    id: "exp-2",
    company: "Dinas Komunikasi dan Informatika DIY",
    role: "UI/UX Designer & Front End Web Developer Intern",
    type: "Internship",
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    location: "Yogyakarta, Indonesia",
    description: "Redesigned the official government portal in Figma and developed responsive interfaces using Nuxt.js and Tailwind CSS for enhanced usability.",
    icon: "globe",
    certificate: {
      image: certkominfo,
      url: "REPLACE_WITH_CERTIFICATE_URL",
      title: "Sertifikat Magang Diskominfo",
    },
  },
  {
    id: "exp-3",
    company: "Bangkit Academy (by Google, Gojek, Tokopedia, Traveloka)",
    role: "Mobile Development - Independent Study",
    type: "Independent Study",
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    location: "Remote",
    description: "Specialized in Mobile Development, designing high-fidelity Figma mockups and building functional Android app components with Kotlin and Android Studio.",
    icon: "compass",
    certificate: {
      image: certbangkit,
      url: "REPLACE_WITH_CERTIFICATE_URL",
      title: "Bangkit Academy Certificate",
    },
  },
];
