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
    id: "website",
    title: "EATOPIA Socials Restarant Reservation Website",
    description:
      "Full-stack dynamic website, with AI discovery, Google API's and Backend for Reservations.",
    image: "/images/project-1.jpg",
    tags: ["TypeScript","Next.js","React.js","Node.js", "Firebase"],
    
  },
  {
    id: "Website",
    title: "Portfolio Website",
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
      "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/images/project-3.jpg",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: "task-manager",
    title: "Task Management Dashboard",
    description:
      "Collaborative task management tool with real-time updates, team chat, and project analytics.",
    image: "/images/project-4.jpg",
    tags: ["Vue.js", "Express", "Socket.io"],
  },
  {
    id: "ai-product",
    title: "AI-Powered Analytics",
    description:
      "Analytics dashboard with AI-driven insights and predictive modeling for business intelligence.",
    image: "/images/project-5.jpg",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    id: "restaurant",
    title: "Restaurant Booking System",
    description:
      "Online reservation system with table management, menu display, and automated email confirmations.",
    image: "/images/project-6.jpg",
    tags: ["Angular", "Node.js", "PostgreSQL"],
  },
];

export default projects;
