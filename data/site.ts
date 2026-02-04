export interface SiteData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  stats: {
    yearsExperience: number;
    recognitions: number;
    projects: number;
  };
}

const siteData: SiteData = {
  name: "Abdul Ahad Arif",
  title: "Creative Developer + Designer",
  subtitle: "I'm a Developer creating beautiful, scalable digital experiences",
  description:
    "I'm a multidisciplinary freelancer working across web development, coding, design, digital marketing, quality assurance, and validation. A motivated computing graduate with a strong interest in cloud computing, modern web technologies, databases, and AI, I transform complex problems into simple, beautiful, and intuitive digital experiences. I bring a strong problem-solving mindset, adaptability, and creativity to every project, with a focus on quality, reliability, and clear communication. When I'm not coding or designing, I'm into gaming, video editing, photography, and exploring what I love.",
  email: "ahad95arif@gmail.com",
  location: "Bangalore, India",
  social: {
    github: "https://github.com/AhadArif",
    linkedin: "https://www.linkedin.com/in/ahad-arif-b1b832262 ",
    twitter: "https://x.com/Ahad95arif",
    dribbble: "https://dribbble.com/ahad-arif",
  },
  stats: {
    yearsExperience: 2,
    recognitions: 6,
    projects: 10,
  },
};

export default siteData;
