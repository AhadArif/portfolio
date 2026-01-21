export interface SiteData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  };
  stats: {
    yearsExperience: number;
    happyClients: number;
    projects: number;
  };
}

const siteData: SiteData = {
  name: "Alex Morgan",
  title: "Creative Developer + Designer",
  subtitle: "I'm a Developer creating beautiful, scalable digital experiences",
  description:
    "I transform complex problems into simple, beautiful and intuitive designs. When I'm not coding or designing, I play games and do what I love. I have been doing web design and development for over 15 years, while constantly learning to improve my techniques and developing new skills that will help me realize any of your ideas.",
  email: "alex_morgan@email.com",
  phone: "+1 (123) 456-4880",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com",
  },
  stats: {
    yearsExperience: 1,
    happyClients: 15,
    projects: 3,
  },
};

export default siteData;
