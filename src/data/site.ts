export const site = {
  name: "Nimfa Amistoso",
  location: "Butuan City, Philippines",
  tagline: "GoHighLevel Specialist | Full-Stack Web Developer | Virtual Assistant",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/images/myphoto.jpeg" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "https://www.facebook.com/nim.amsts7" as string | undefined,
  email: "nimfa.amistoso@gmail.com",
  calendlyUrl: "https://calendly.com/nimfa-amistoso",
  linkedin: "https://www.linkedin.com/in/nimfa-amistoso-0716b12b1/",
  github: "https://github.com/nimfa-amistoso/",
  instagram: "https://instagram.com/niiimmm_",
};

export const heroBadges: {
  label: string;
  href: string;
  subtitle?: string;
}[] = [
  {
    label: "Open for Remote Opportunities",
    href: "mailto:nimfa.amistoso@gmail.com",
    subtitle: "Available for CRM, VA, and Web Development roles",
  },
  {
    label: "GoHighLevel Specialist",
    href: "https://www.gohighlevel.com/",
    subtitle: "Funnels • Automation • CRM",
  },
  {
    label: "Full-Stack Developer",
    href: "https://github.com/nimfa-amistoso/",
    subtitle: "React • Next.js • Apps Script",
  },
];

export const about = `I am Nimfa Amistoso, a fresh graduate of Bachelor of Science in Information Technology (BSIT) from Caraga State University, with 2 years of experience in virtual assistance, technical support, and CRM management. Currently, I am working as a GoHighLevel (GHL) Specialist at Greater Works Co., where I have been managing marketing automation, building sales funnels, and optimizing client systems for over a year.

In my role as a GHL Specialist, I specialize in creating high-converting funnels, automating workflows, managing pipelines, and supporting clients in maximizing the platform for their business growth. My experience also includes providing technical support, troubleshooting system issues, and ensuring seamless client onboarding and campaign execution.

Previously, I worked as an After Sales Support Specialist at Nowsite since 2022, where I assisted customers in navigating the platform, resolving technical concerns, and leveraging digital marketing tools effectively. This role strengthened my communication skills, client relationship management, and ability to deliver high-quality support.

With hands-on experience in both technical and marketing aspects, I have developed strong problem-solving skills, adaptability, and attention to detail. I am committed to continuously improving my expertise in CRM systems, automation, and digital marketing to contribute effectively in a dynamic and fast-paced environment.`; 

export const experience = [
  {
    role: "GoHighLevel (GHL) Specialist",
    company: "Greater Works Co.",
    year: "2025 - Present",
  },
  {
    role: "BS Information Technology Graduate",
    company: "Caraga State University",
    year: "2020 - 2026",
  },
  {
    role: "Intern - HRMS / System Development",
    company: "Caraga State University",
    year: "2026",
  },
  {
    role: "After Sales Support Specialist",
    company: "Nowsite",
    year: "2022 - 2024",
  },
  {
    role: "Virtual Assistant",
    company: "TheHundredFold",
    year: "2024",
  },
  {
    role: "Frontend & Full-Stack Developer",
    company: "Freelance Projects",
    year: "2023 - Present",
  },
];

export const techStack = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Firebase",
  ],

  backend: [
    "Node.js",
    "Google Apps Script",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "REST API",
  ],

  devops: [
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Firebase Hosting",
  ],

  crm: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Automation",
    "Lead Management",
    "Sales Funnels",
    "Email Automation",
    "Pipeline Management",
  ],

  tools: [
    "GHL",
    "n8n",
    "VS Code",
    "Figma",
    "Canva",
    "Google Workspace",
  ],
};

export const projects = [
  {
    name: "CSC Mock Examination System",
    description:
      "A full-stack mock examination platform with role-based access, analytics, anti-cheating detection, randomized exams, and Google Sheets database integration.",
    url: "https://portfolio-vbuf.vercel.app/",
    domain: "portfolio-vbuf.vercel.app",
  },

  {
    name: "Fusion Plumbing Website",
    description:
      "A modern business website developed for a plumbing service company featuring responsive design, service pages, contact forms, and professional branding.",
    url: "https://fusionplumbing.vercel.app/",
    domain: "fusionplumbing.vercel.app",
  },

  {
    name: "CSC Mock Examination System",
    description:
      "A web-based mock examination platform developed during internship at Caraga State University - Human Resource Management Services.",
    url: "https://csu-csc-mock-exam.vercel.app/",
    domain: "csu-csc-mock-exam.vercel.app",
  },

  {
    name: "GoHighLevel CRM Automation System",
    description:
      "Designed and implemented CRM automation workflows including lead capture funnels, pipeline management, email/SMS automation, and client onboarding systems using GoHighLevel.",
    url: "#",
    domain: "gohighlevel.com",
  },

  {
    name: "Virtual Assistant Workflow Automation Setup",
    description:
      "Created structured VA workflows for client operations including inbox management, scheduling, CRM updates, task automation, and reporting systems.",
    url: "#",
    domain: "virtual-assistant",
  },

  {
    name: "Landing Page Conversion Optimization Project",
    description:
      "Developed and optimized multiple landing pages focused on improving conversion rates through UI/UX improvements, CTA structuring, and responsive design.",
    url: "#",
    domain: "web-optimization",
  },

  {
    name: "Client Funnel Design System (GHL)",
    description:
      "Built high-converting sales funnel templates in GoHighLevel including opt-in pages, thank-you pages, and automated follow-up sequences.",
    url: "#",
    domain: "funnel-system",
  },

  {
    name: "Portfolio Website System (React/Next.js)",
    description:
      "Personal portfolio system built using modern frontend technologies showcasing projects, experience, certifications, and contact integrations.",
    url: "#",
    domain: "personal-brand",
  },
];


export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    href: "#",
    year: "2025",
  },
  {
    name: "CRM & Sales Funnel Automation Training (GoHighLevel)",
    issuer: "GoHighLevel Academy",
    href: "#",
    year: "2025",
  },
  {
    name: "Virtual Assistant Training & Productivity Systems",
    issuer: "Online VA Training Program",
    href: "#",
    year: "2024",
  },
  {
    name: "Customer Support & Client Communication Excellence",
    issuer: "Nowsite Training Program",
    href: "#",
    year: "2023",
  },
];

export const recommendations = [
  {
    quote: "Nimfa demonstrates strong technical and automation skills, especially in CRM systems and workflow optimization. She consistently delivers clean and efficient solutions.",
    author: "Team Lead",
    title: "Greater Works Co."
  },
  {
    quote: "Highly reliable and detail-oriented. She handles client systems and automation tasks with great accuracy and professionalism.",
    author: "Supervisor",
    title: "CSU HRMS Internship"
  },
  {
    quote: "Very responsive and skilled in handling customer concerns and technical support tasks. A great team player.",
    author: "Team Lead",
    title: "Nowsite Support Team"
  },
  {
    quote: "Excellent in building web solutions and adapting quickly to new technologies. Shows strong potential as a full-stack developer.",
    author: "Technical Mentor",
    title: "Freelance Project"
  }
];

// export const memberships = [
//   {
//     name: "Philippine Society of IT Educators – Caraga Chapter",
//     href: "https://psite.org/",
//   },
// ];
