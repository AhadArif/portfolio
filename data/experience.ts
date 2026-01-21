export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
}

const experience: Experience[] = [
  {
    id: "freelance",
    company: "Freelance Developer (HMN)",
    position: "Full Stack Developer",
    period: "Jan 2024 - Present",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Working with diverse clients to build custom web applications, e-commerce platforms, and design systems. Specializing in React, Next.js, and modern frontend architecture. Led projects from concept to deployment with excellent client satisfaction.",
    tags: ["React", "Next.js", "Node.js", "AWS"],
  },
  {
    id: "web-intern",
    company: "Web Development Intern",
    position: "Frontend Developer",
    period: "May 2023 - Dec 2023",
    startDate: "May 2023",
    endDate: "Dec 2023",
    description:
      "Built and maintained user websites, responsive web pages, and front-end functionality. Worked closely with senior developers and designers to create seamless user experiences and improve site performance by 40%.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "ui-ux",
    company: "UI/UX Design Architect",
    position: "UI/UX Designer",
    period: "Feb 2021 - Apr 2023",
    startDate: "Feb 2021",
    endDate: "Apr 2023",
    description:
      "Conducted user research and workflow for seamless projects. Collaborated with developers to transform wireframes into functional interfaces. Led design sprints and implemented accessibility best practices across all products.",
    tags: ["Figma", "Sketch", "Prototyping", "User Research"],
  },
];

export default experience;
