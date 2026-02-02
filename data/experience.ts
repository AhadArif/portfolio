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
    company: "Freelance — WEMASY",
    position: "Junior Developer • Web Master • Designer",
    period: "Nov 2025 - Present",
    startDate: "Nov 2025",
    endDate: "Present",
    description:
      "Currently working as a junior developer and web master managing website development, maintenance, and UI design for client projects. Built responsive pages, improved performance, and supported SEO-friendly structures while collaborating with content and marketing teams.",
    tags: ["Web Development", "Design", "SEO", "Maintenance", "UI"],
  },
  {
    id: "Intern",
    company: "Clevertize",
    position: "Digital Marketing & Content Executive",
    period: "Oct 2023 - Mar 2024",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    description:
      "Handled content writing, copywriting, social media management, and SEO optimization for websites and multiple brands. Created engaging posts and website content, improved search visibility, and supported campaign execution across platforms.",
    tags: ["Content Writing", "Copywriting", "Social Media", "SEO", "Marketing"],
  },
  {
    id: "ui-ux",
    company: "Freelance",
    position: "Digital Marketing Specialist",
    period: "Feb 2023 - Apr 2023",
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    description:
      "Provided freelance digital marketing services including website optimization, SEO setup, brand positioning, and basic user research. Helped businesses improve online presence and audience engagement through strategic content and website improvements.",
    tags: ["SEO", "Websites", "Branding", "User Research"],
  },
];

export default experience;
