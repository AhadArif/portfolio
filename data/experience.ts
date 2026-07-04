interface Experience {
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
    id: "Internship",
    company: "St Joseph's University",
    position: "SEO & Analytics Intern",
    period: "Nov 2025 - Feb 2026",
    startDate: "Nov 2025",
    endDate: "Feb 2026",
    description:
      "Reviewed the website and recommended practical SEO and performance improvements. Added targeted keywords, meta tags, titles, and descriptions, connected Google Analytics, analysed engagement and traffic data, and refined content to improve search visibility.",
    tags: ["Search Engine Optimization", "Google Analytics", "Meta Tags", "Keyword Research", "Performance", "Content Strategy"],
  },
  {
    id: "wemasy",
    company: "WEMASY",
    position: "Web Development & Digital Marketing",
    period: "June 2025 - March 2026",
    startDate: "June 2025",
    endDate: "March 2026",
    description:
      "Created and shipped Projects, made content and design assets for web and marketing deliverables, shaped page layouts, and supported visual consistency across client-facing materials. Built and shipped 4 tools and implemented iframes for chatbots, ai writer tool, kanban trello based board tool, social media tool with 3 features (await, respond, write) etc.,  Worked closely on content presentation, creative direction, and brand-aligned updates.",
    tags: ["Content Design", "Web Design", "Visual Branding", "Layouts", "UI", "Creatives"],
  },
  {
    id: "clevertize",
    company: "Clevertize",
    position: "Digital Marketing, Content & Design Executive",
    period: "Oct 2023 - Mar 2024",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    description:
      "Handled content writing, copywriting, social media management, and design-focused marketing work for websites and multiple brands. Created engaging posts, campaign visuals, and website content while improving search visibility and supporting cross-platform execution.",
    tags: ["Content Writing", "Copywriting", "Social Media", "Design", "Marketing", "SEO"],
  },
];

export default experience;
