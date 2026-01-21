export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "web-dev",
    icon: "code",
    title: "Web Development",
    description:
      "Building responsive websites and web apps with modern frameworks, ensuring high performance and scalability.",
  },
  {
    id: "ui-ux",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.",
  },
  {
    id: "mobile-dev",
    icon: "smartphone",
    title: "Mobile Development",
    description:
      "Developing native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance Optimization",
    description:
      "Optimizing web apps and sites for speed, accessibility, and SEO to ensure the best possible user experience.",
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications with modern backend technologies and cloud services.",
  },
  {
    id: "testing",
    icon: "shield",
    title: "Security & Testing",
    description:
      "Implementing comprehensive security measures and testing strategies to ensure reliable and secure applications.",
  },
];

export default services;
