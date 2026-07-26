/**
 * CENTRALIZED PORTFOLIO CONTENT & CONFIGURATION
 * 
 * Edit any text, link, skill, project, or certificate in this file.
 * All UI components automatically import and render from this central object.
 */

export interface ProjectItem {
  id: string;
  title: string;
  valueProposition: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string; // Set to URL string or leave blank for placeholder
  repoUrl?: string; // Set to URL string or leave blank for placeholder
  isFlagship?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  imagePath: string; // File path under public/ directory e.g. "/certificates/..."
}

export interface EducationItem {
  id: string;
  degree: string;
  status: string;
  institution: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  cgpaBranch?: string; // Leave blank or fill e.g. "Computer Science & Engineering | CGPA: 8.5"
}

export interface AchievementItem {
  title: string;
  desc: string;
  badge: string;
}

export const portfolioContent = {
  // Personal Info & Assets
  personal: {
    name: "Kumara Vadivel",
    headline: "Engineering Student & Aspiring Developer",
    altHeadline: "Building with Python, Artificial Intelligence, & Data Science",
    supportingLine:
      "A motivated 3rd Year engineering student specializing in Artificial Intelligence & Data Science at JP College of Engineering, Tenkasi — turning coursework into working applications.",
    bio: [
      "Kumara Vadivel is a 3rd Year B.Tech Artificial Intelligence and Data Science engineering student at JP College of Engineering, Tenkasi, with a solid foundation in programming, data structures, databases, and applied AI & DS.",
      "He enjoys building things that combine software with real-world usefulness — most recently a smart voice assistant that blends AI, live data, and device control.",
      "Currently sharpening skills across Python, web development, and data science through hands-on coursework and self-driven certifications, he's looking for an internship where he can apply Artificial Intelligence & Data Science to solve real problems.",
    ],
    location: "Tenkasi, Tamil Nadu",
    email: "kumarlaksh2424@gmail.com",
    phone: "+91 6383153692",
    linkedIn: "https://www.linkedin.com/in/kumara-vadivel-926a19389",
    gitHub: "", // Leave empty for placeholder badge, or set to e.g. "https://github.com/username"
    
    // File Paths for local static assets (placed in public/ directory)
    profilePhotoPath: "/images/profile.jpg",
    resumePdfPath: "/documents/resume.pdf",
    certificatesPdfPath: "/documents/certificates.pdf",
  },

  // Ticker Keywords (Horizontal Marquee)
  tickerKeywords: [
    "Python",
    "Artificial Intelligence",
    "Web Development",
    "Data Science & Analytics",
    "MySQL & SQL",
    "Smart Voice Assistants",
    "Data Structures",
    "Java & C Programming",
  ],

  // Skills Grouped by Category
  skillsGrouped: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", tag: "Primary" },
        { name: "C Language", tag: "Core" },
        { name: "Java (Basics)", tag: "Foundational" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", tag: "Structure" },
        { name: "CSS", tag: "Styling" },
        { name: "JavaScript", tag: "Logic" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", tag: "RDBMS" },
        { name: "SQL", tag: "Queries" },
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "VS Code", tag: "IDE" },
        { name: "GitHub", tag: "Version Control" },
      ],
    },
    {
      title: "Core Concepts & Fundamentals",
      skills: [
        { name: "Data Structures", tag: "CS Core" },
        { name: "DBMS", tag: "Data" },
        { name: "AI Fundamentals", tag: "Applied AI" },
        { name: "Data Science & Analytics", tag: "Analytics" },
      ],
    },
  ],

  // Featured Projects
  projects: [
    {
      id: "voice-assistant",
      title: "Smart Web-Based Voice Assistant",
      valueProposition:
        "A mobile-friendly, AI-powered voice assistant that responds, informs, and controls — all from the browser.",
      highlights: [
        "Built an AI-driven assistant brain with multi-voice support and wake-word detection",
        "Integrated live data features including real-time temperature display and news updates",
        "Added object detection and smart device-control capabilities",
      ],
      techStack: ["Python", "AI / Voice Processing", "HTML / CSS / JS"],
      liveUrl: "", // Leave blank for placeholder
      repoUrl: "", // Leave blank for placeholder
      isFlagship: true,
    },
  ] as ProjectItem[],

  // Academic Education (Experience section omitted per instructions)
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech)",
      status: "3rd Year — Currently Enrolled",
      institution: "JP College of Engineering",
      location: "Tenkasi, Tamil Nadu",
      period: "2024 – Present",
      isCurrent: true,
      cgpaBranch: "Artificial Intelligence & Data Science (AI & DS)",
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      status: "Percentage: 65%",
      institution: "RPHSS",
      location: "Tenkasi, Tamil Nadu",
      period: "2022",
      isCurrent: false,
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (SSLC)",
      status: "Percentage: 80%",
      institution: "Pulari Matriculation School",
      location: "Tenkasi, Tamil Nadu",
      period: "2020",
      isCurrent: false,
    },
  ] as EducationItem[],

  // Certifications List (with image paths for gallery lightbox)
  certifications: [
    {
      id: "cert-1",
      title: "3D Printing",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Emerging Tech",
      imagePath: "/certificates/3d-printing-hp-life.png",
    },
    {
      id: "cert-2",
      title: "AI for Beginners",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Artificial Intelligence",
      imagePath: "/certificates/ai-for-beginners-hp-life.png",
    },
    {
      id: "cert-3",
      title: "Data Science & Analytics",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Data Science",
      imagePath: "/certificates/data-science-analytics-hp-life.png",
    },
    {
      id: "cert-4",
      title: "C – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
      imagePath: "/certificates/c-programming-skillrack.jpg",
    },
    {
      id: "cert-5",
      title: "SQL – Basics (Standard)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Databases",
      imagePath: "/certificates/sql-basics-skillrack.jpg",
    },
    {
      id: "cert-6",
      title: "Python 3.x – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Jul 2025",
      category: "Programming",
      imagePath: "/certificates/python-3x-skillrack.jpg",
    },
    {
      id: "cert-7",
      title: "Java Basics – Programming Course (Hands-On)",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
      imagePath: "/certificates/java-basics-skillrack.jpg",
    },
    {
      id: "cert-8",
      title: "Python 101 for Data Science",
      issuer: "IBM / Cognitive Class (cognitiveclass.ai)",
      date: "Oct 2025",
      category: "Data Science",
      imagePath: "/certificates/python-101-ibm.jpg",
    },
    {
      id: "cert-9",
      title: "Data Science Workshop (3 hrs)",
      issuer: "Uptor / LMES",
      date: "Oct 2025",
      category: "Workshop",
      imagePath: "/certificates/data-science-workshop-uptor.jpg",
    },
  ] as CertificationItem[],

  // Achievements
  achievements: [
    {
      title: "Coding Contests & Technical Events",
      desc: "Actively participated in competitive programming contests and college technical events.",
      badge: "Competitive Coding",
    },
    {
      title: "Self-Driven Online Coursework",
      desc: "Completed multiple self-driven online courses across Python, AI, and Web Development ahead of academic schedules.",
      badge: "Continuous Skill-Building",
    },
  ] as AchievementItem[],
};
