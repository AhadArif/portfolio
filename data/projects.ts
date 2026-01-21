export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/images/project-1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "agency",
    title: "Creative Agency Website",
    description:
      "Modern, animated website for a creative agency with smooth transitions and interactive elements.",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "GSAP", "Tailwind"],
  },
  {
    id: "mobile-app",
    title: "Mobile Banking App",
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
