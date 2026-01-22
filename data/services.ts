export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "ui-ux",
    icon: "palette",
    title: "Product Design & UI/UX",
    description:
      "Designing clean, user-focused interfaces and layout systems using Figma and modern UX principles.",
  },
  {
    id: "frontend",
    icon: "code",
    title: "Frontend Engineering",
    description:
      "Building responsive, interactive interfaces with React, VUE, Next.js, and modern frontend tools.",
  },
  {
    id: "web-dev",
    icon: "smartphone",
    title: "Full Website Development",
    description:
      "Developing complete websites from structure and styling to logic and deployment.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance, SEO & Content Optimization",
    description:
      "Improving site speed, search visibility, accessibility, and content structure for better reach and engagement.",
  },
  {
    id: "cloud",
    icon: "server",
    title: "Cloud-Connected Web Applications",
    description:
      "Integrating authentication, databases, storage, and APIs using cloud platforms like Firebase, AWS, and Google Cloud.",
  },
  {
    id: "prototyping",
    icon: "shield",
    title: "Prototyping & Iteration",
    description:
      "Rapidly building prototypes and MVPs, testing ideas, and refining based on feedback and real usage.",
  },
];

export default services;
