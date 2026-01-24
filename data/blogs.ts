export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  author: string;
  content: {
    introduction: string;
    challenge: string;
    approach: string[];
    results: string[];
    conclusion: string;
  };
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Building My Portfolio: How One Project Sparked Creativity and a New Beginning",
    excerpt: "How creating my portfolio pushed me to explore new ideas, design freely, and start something of my own.",
    category: "Achievements",
    date: "January 12, 2026",
    readTime: "5 min read",
    image: "/images/blog-1.png",
    tags: ["Portfolio", "Creativity", "Learning"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "This portfolio project was more than just a website — it became the starting point of a new creative phase for me. While building it using TypeScript, JavaScript, and CSS, I began experimenting more freely with layouts, interactions, and ideas that I had never tried before.",
      challenge: "Initially, I struggled with finding the right balance between design and functionality. I wanted the portfolio to feel personal, clean, and expressive, without becoming too complex or overly technical.",
      approach: [
        "Planned the layout with simplicity and clarity in mind",
        "Experimented with small animations and subtle interactions",
        "Used TypeScript for structure and JavaScript for dynamic behavior",
        "Refined styles using clean and minimal CSS patterns",
        "Iterated continuously based on how the site felt, not just how it looked"
      ],
      results: [
        "Developed a portfolio that reflects both skills and personality",
        "Gained confidence experimenting with creative layouts",
        "Discovered a strong interest in personal branding through design",
        "Started exploring new side projects inspired by this experience"
      ],
      conclusion: "This project gave me the confidence to trust my creative instincts. It not only strengthened my technical foundation but also sparked an urge to start new ideas and build things that feel meaningful. It marked the beginning of a more confident and creative approach to my work."
    }
  },

  {
    id: 2,
    title: "Designing with AI: How Ideation Tools Transformed My Creative Process",
    excerpt: "Using AI, Pinterest, and visual references to create better design posts and creative content.",
    category: "Design",
    date: "January 8, 2026",
    readTime: "5 min read",
    image: "/images/blog-2.png",
    tags: ["AI", "Design", "Creativity"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "Design inspiration can come from anywhere — but recently, AI tools have become an important part of my creative workflow. Along with platforms like Pinterest and curated references, AI has helped me explore ideas faster and more confidently.",
      challenge: "Finding fresh ideas consistently is not easy. Creative blocks, limited references, and time constraints often slow down the process, especially when creating design posts and visual content regularly.",
      approach: [
        "Used AI tools mainly for ideation and concept exploration",
        "Combined AI outputs with Pinterest boards and visual references",
        "Refined layouts manually to maintain originality",
        "Focused on using AI as a creative assistant, not a replacement",
        "Iterated on typography, spacing, and composition"
      ],
      results: [
        "Improved consistency in design output",
        "Reduced time spent on early ideation phases",
        "Developed a more experimental design style",
        "Created more engaging and visually balanced posts"
      ],
      conclusion: "AI became a valuable creative partner rather than a shortcut. It helped me think faster, explore more ideas, and refine concepts better. This experience strengthened my design process and made creativity feel more accessible and enjoyable."
    }
  },

  {
    id: 3,
    title: "How AI Content Influenced Hardware Prices: My Observation on SSD Market Trends",
excerpt: "Exploring how viral AI videos in mid-January triggered a sharp spike in SSD and RAM prices.",
category: "Tech",
date: "January 25, 2026",
readTime: "6 min read",
image: "/images/blog-3.png",
tags: ["Hardware", "AI", "Market Trends"],
author: "Abdul Ahad Arif",
content: {
introduction: "In mid-January, while casually searching for an SSD upgrade, I noticed a sudden spike in 1TB SSD and RAM prices over just ten days. Prices jumped from around ₹13,000 to over ₹20,000, coinciding with a surge of viral AI content online.",
challenge: "Hardware prices usually change gradually, but this rapid increase left many buyers, including myself, puzzled since there was no official supply shortage.",
approach: [
"Monitored prices daily across multiple online stores",
"Tracked trending AI-related videos and social media content",
"Observed discussions and recommendations from influencers",
"Noted user sentiment and buying patterns in forums and comments"
],
results: [],
conclusion: "This observation revealed how quickly digital content can influence real-world tech markets. It highlighted the growing power of online trends in shaping consumer behavior and pricing dynamics."
}
  },

  {
    id: 4,
    title: "Learning SEO Through Practice: How Optimization Can Drive Real Growth",
    excerpt: "What SEO taught me and how it can help websites and businesses grow steadily over time.",
    category: "Insights",
    date: "January 2, 2026",
    readTime: "6 min read",
    image: "/images/blog-4.png",
    tags: ["SEO", "Growth", "Digital Strategy"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "My journey into SEO began as a curiosity and soon became one of the most valuable learning experiences in my web development path. Understanding how search engines work changed the way I approach content and structure.",
      challenge: "Many websites struggle to gain visibility despite good design and content. Without proper optimization, even well-built sites remain unnoticed, limiting their growth potential.",
      approach: [
        "Learned keyword research and search intent basics",
        "Optimized page structure and metadata",
        "Improved internal linking and content clarity",
        "Tracked rankings and performance regularly",
        "Refined strategy based on real results"
      ],
      results: [],
      conclusion: "SEO taught me patience, strategy, and long-term thinking. It showed how small, consistent improvements can compound into meaningful growth for both websites and businesses."
    }
  },

  {
    id: 5,
    title: "Essential Design Tools I Rely On for Creative Work",
    excerpt: "A look at the tools that shape my design workflow — from ideation to final visuals.",
    category: "Design",
    date: "December 22, 2025",
    readTime: "5 min read",
    image: "/images/blog-5.png",
    tags: ["Figma", "Canva", "Gemini", "Design Tools"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "Great design is often powered by great tools. Over time, I’ve built a small but effective toolkit that helps me move smoothly from ideas to polished visuals.",
      challenge: "With so many tools available, choosing the right ones without overcomplicating the workflow can be difficult.",
      approach: [
        "Used Figma for layout and interface design",
        "Used Canva for quick social visuals",
        "Explored Gemini for creative ideation",
        "Tested Framer for interactive prototypes",
        "Built a workflow focused on speed and clarity"
      ],
      results: [
        "Faster design iterations",
        "More consistent visual quality",
        "Better idea-to-design conversion",
        "Improved creative confidence"
      ],
      conclusion: "These tools simplified my creative process and helped me focus more on ideas than execution. Choosing the right tools made design more enjoyable and productive."
    }
  },

  {
    id: 6,
    title: "Building a Smart Irrigation System: Solar Tracking and IoT in Action",
    excerpt: "A hands-on project combining solar tracking, IoT sensors, and automation for efficient irrigation.",
    category: "Tech",
    date: "December 10, 2025",
    readTime: "7 min read",
    image: "/images/blog-6.png",
    tags: ["IoT", "Solar", "Automation"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "This project focused on building a solar tracking IoT-based smart irrigation system that adapts to sunlight and soil conditions. It was a practical blend of electronics, automation, and sustainability.",
      challenge: "Efficient water usage and energy optimization are major challenges in agriculture. Designing a system that tracks sunlight and waters crops intelligently required careful integration of hardware and sensors.",
      approach: [
        "Used servo motors to rotate solar panels toward sunlight",
        "Stored energy in rechargeable lithium-ion batteries",
        "Displayed temperature readings on LED displays",
        "Used soil moisture sensors to control the water pump",
        "Automated watering when soil was dry and stopped when wet"
      ],
      results: [
        "Built a fully functional solar tracking mechanism",
        "Achieved automated irrigation based on real sensor data",
        "Improved energy efficiency through sunlight tracking",
        "Gained strong practical IoT experience"
      ],
      conclusion: "This project strengthened my understanding of real-world automation systems. It showed how technology can directly improve sustainability and efficiency when applied thoughtfully."
    }
  },

  {
    id: 7,
    title: "Boosting SMARTCHEM 2026 Visibility: How Strategic SEO Drove Results Before the Conference",
    excerpt: "A behind-the-scenes look at how focused SEO efforts helped SMARTCHEM 2026 gain strong online visibility ahead of the event.",
    category: "Achievements",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: "/images/blog-7.png",
    tags: ["SEO", "Event Marketing", "Growth"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "In October 2025, my teammate and I began working on the digital presence of SMARTCHEM 2026 with a clear goal: improve its online visibility before the conference season peaked.",
      challenge: "The website had limited visibility and a short time window to rank before peak registrations began.",
      approach: [
        "Performed keyword research",
        "Optimized core pages and metadata",
        "Improved internal linking",
        "Enhanced performance and mobile usability",
        "Tracked progress weekly"
      ],
      results: [
        "Strong organic traffic growth by December",
        "Multiple pages ranking on first page",
        "Higher engagement and visibility",
        "Positive recognition for our contribution"
      ],
      conclusion: "This experience boosted both my confidence and belief in strategic digital growth. Seeing our work recognized and produce real impact motivated me to take on bigger challenges with clarity and assurance."
    }
  },

  {
    id: 8,
    title: "Creating Eatopia: AI‑Powered Restaurant Discovery for Every Mood",
    excerpt: "How I built Eatopia, a smart social restaurant discovery platform using AI and mood-based recommendations.",
    category: "Achievements",
    date: "December 5, 2025",
    readTime: "7 min read",
    image: "/images/blog-8.png",
    tags: ["AI", "Startup", "Web App"],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "Eatopia began as an idea to simplify how people discover restaurants based on mood, group type, and vibe. It later grew into a full web project using AI-assisted recommendations.",
      challenge: "Traditional food discovery platforms often ignore social context and mood, making recommendations feel generic and impersonal.",
      approach: [
        "Designed mood and group-based filters",
        "Integrated smart recommendation logic",
        "Built a clean UI for fast discovery",
        "Connected real restaurant data",
        "Tested flows for social sharing"
      ],
      results: [
        "Launched a working MVP",
        "Improved discovery accuracy through filters",
        "Received positive feedback from early users",
        "Strengthened product design thinking"
      ],
      conclusion: "Eatopia taught me how product ideas become real platforms. It strengthened my confidence in building full experiences that blend design, logic, and user needs together."
    }
  },

  {
    id: 9,
    title: "Coming Soon",
    excerpt: "New insights and experiences are on the way.",
    category: "Insights",
    date: "Coming Soon",
    readTime: "—",
    image: "/images/blog-9.png",
    tags: [],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "A new story will be shared here soon.",
      challenge: "—",
      approach: [],
      results: [],
      conclusion: "Stay tuned for upcoming content."
    }
  },

  {
    id: 10,
    title: "Coming Soon",
    excerpt: "More projects and reflections will be added shortly.",
    category: "Insights",
    date: "Coming Soon",
    readTime: "—",
    image: "/images/blog-10.png",
    tags: [],
    author: "Abdul Ahad Arif",
    content: {
      introduction: "Another upcoming post will appear here soon.",
      challenge: "—",
      approach: [],
      results: [],
      conclusion: "More updates coming soon."
    }
  }
];

export default blogs;
