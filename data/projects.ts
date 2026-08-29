export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: "eatopia-website",
    title: "EATOPIA Socials Restaurant Reservation Website",
    description:
      "Full-stack dynamic website, with AI discovery, Google API's and Backend for Reservations.",
    image: "/images/project-1.jpg",
    tags: ["TypeScript", "Next.js", "React.js", "Node.js", "Firebase"],
    link: "https://eatopiaa.vercel.app/",
  },

  {
    id: "wishing-wand-website",
    title: "The Wising Wand Website",
    description:
      "Full-stack dynamic website, for event management and bookings.",
    image: "/images/TheWishingWand.png",
    tags: ["Java Script", "Next.js", "CSS", "HTML", "React.js", "Node.js", "Firebase"],
    link: "https://thewishingwand.in/",
  },

  {
    id: "juxoria-website",
    title: "Services Website - Juxaria",
    description:
      "This project is a services website for Juxaria, a company that provides various services to its clients.",
    image: "/images/whitelogo.png",
    tags: ["Portfolio"],
    link: "https://www.juxaria.in",
  },

  {
    id: "RolePilot Ai Resume Builder",
    title: "AI Resume Builder",
    description:
      "Role Pilot is a modern AI powered resume builder, a React Native mobile application that allows users to create professional resumes with ease. It leverages AI technology to provide personalized resume suggestions and formatting options.",
    image: "/images/RolePilot.jpg",
    tags: ["Tailwind", "React Native", "EXPO", "AI", "Next.js"],
    link: "https://github.com/AhadArif/RolePilot"
  },
  {
    id: "portfolio-website",
    title: "My Portfolio Website",
    description:
      "Modern, Simple Portfolio Website showcasing static pages with dynamic live.",
    image: "/images/project-2.jpg",
    tags: ["JavaScript", "TypeScript", "Tailwind", "Firebase"],
    link: "https://AbdulAhadArif.vercel.app/",
  },
  {
    id: "Solar Tracking Smart Irrigation System",
    title: "IOT & Devices",
    description:
      "ESP-32 based solar tracking smart irrigation system, with LED display for detection and soil moisture sensors. Solar panels with LDR sensors for tracking light and rotating to detection with servo motor.",
    image: "/images/project-3.jpg",
    tags: ["C#", "ESP-32", "IoT"],
    link: "https://www.linkedin.com/posts/ahad-arif-b1b832262_iot-mca-studentprojects-activity-7420011090190921728-iUQ2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECNBscBj2nZ0LQLk556Qv1v97pDoqvbGwQ",
  },
  {
    id: "React Photography Website",
    title: "Urbex Photography Website (Basic)",
    description:
      "Urbex Photography website built with React, featuring buy-able image galleries, webpages, and for urban exploration enthusiasts.",
    image: "/images/project-4.jpg",
    tags: ["Vue.js", "React.js", "Javascript", "SQL Workbench"],
    link: "https://github.com/AhadArif/New-Web-React?tab=readme-ov-file"
  },

  {
    id: "ai-based-project",
    title: "Coming Soon",
    description:
      "This project is in working progress! To know more, visit the GitHub.",
    image: "/images/project-5.jpg",
    tags: ["Coming Soon", "AI"],
    link: "https://github.com/AhadArif",
  },
  {
    id: "ASP.NET Project",
    title: "ASP.NET Web Forms Portfolio",
    description:
      "An interactive developer portfolio built with ASP.NET Web Forms, styled with CSS3 to showcase projects and skills along with 5 interative tasks (Welcome Message, Current Date & Time, Form submission, Button click & Calculator).",
    image: "/images/project-6.jpg",
    tags: ["Angular", "Node.js", "PostgreSQL"],
    link: "https://github.com/AhadArif/portfolio-webforms",
  },
];

export default projects;
