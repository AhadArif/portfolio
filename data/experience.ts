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
    id: "wemasy",
    company: "WEMASY B.V.",
    position: "Junior Web Developer & Support",
    period: "June 2025 - March 2026",
    startDate: "June 2025",
    endDate: "March 2026",
    description:
      "Built and supported live web products, resolved production and integration issues, and worked on AI chatbot integrations, internal tools, and client-facing web experiences.",
    tags: [
      "Web Development",
      "Vue.js",
      "Nuxt.js",
      "OpenAI API",
      "Support",
      "Git",
    ],
  },


  {
    id: "sju",
    company: "St. Joseph's University",
    position: "SEO Freelance",
    period: "November 2025 - February 2026",
    startDate: "November 2025",
    endDate: "February 2026",
    description:
      "Improved university web platforms through on-page SEO, Google Analytics integration, and better page structure for search visibility during events.",
    tags: [
      "SEO",
      "Google Analytics",
      "Web Structure",
    ],
  },

  {
    id: "abc",
    company: "Advance Business Concepts",
    position: "IT Support & Website Administrator",
    period: "April 2024 - May 2025",
    startDate: "April 2024",
    endDate: "May 2025",
    description:
      "Provided IT support and managed website infrastructure, troubleshooting user issues, uptime, DNS, SSL, hosting, CRM workflows, and recurring website bugs.",
    tags: [
      "IT Support",
      "Website Administration",
      "Troubleshooting",
      "DNS & SSL",
      "CRM",
      "Incident Management",
    ],
  },

  {
    id: "clevertize",
    company: "Clevertize",
    position: "Content Writer Intern",
    period: "October 2023 - March 2024",
    startDate: "October 2023",
    endDate: "March 2024",
    description:
      "Worked across content, SEO, social media, and creative marketing, producing website content and campaign visuals while supporting digital campaigns.",
    tags: [
      "Content Writing",
      "SEO",
      "Social Media",
      "Creative Design",
      "Marketing",
    ],
  },
];

export default experience;