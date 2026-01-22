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
    recognitions: number;
    projects: number;
  };
}

const siteData: SiteData = {
  name: "Abdul Ahad Arif",
  title: "Creative Developer + Designer",
  subtitle: "I'm a Developer creating beautiful, scalable digital experiences",
  description:
    "I transform complex problems into simple, beautiful and intuitive designs. When I'm not coding or designing, I play games and do what I love. I have been doing web design and development for over 15 years, while constantly learning to improve my techniques and developing new skills that will help me realize any of your ideas.",
  email: "ahad01arif@gmail.com",
  phone: "+91",
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
