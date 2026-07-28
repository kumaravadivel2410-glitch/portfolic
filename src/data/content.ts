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
    headline: "Software Engineering Student & Full-Stack Developer",
    altHeadline: "Crafting Clean Code, Data Structures, Scalable Web Systems & AI Solutions",
    supportingLine:
      "A passionate 3rd-year Software Engineering student (2024) dedicated to building scalable web applications, robust software architectures, and intelligent tools with Python, Java, JavaScript, and modern web frameworks.",
    bio: [
      "Kumara Vadivel is a 3rd-year B.Tech engineering student at JP College of Engineering, Tenkasi, specializing in Software Engineering, Object-Oriented Programming, Data Structures & Algorithms, and modern full-stack web development.",
      "He excels at transforming core computer science concepts into production-quality software — from AI-driven web engines and interactive task managers to clean database schemas.",
      "Currently sharpening expertise across software design patterns, full-stack frameworks (React/Next.js), relational database optimization, and applied AI, he is seeking a Software Engineering Internship to deliver impact in a collaborative team.",
    ],
    location: "Tenkasi, Tamil Nadu",
    email: "kumarlaksh2424@gmail.com",
    phone: "+91 6383153692",
    linkedIn: "https://www.linkedin.com/in/kumara-vadivel-926a19389",
    gitHub: "", // Set to e.g. "https://github.com/username"
    
    // File Paths for local static assets
    profilePhotoPath: "/images/profile.jpg",
    resumePdfPath: "/documents/resume.pdf",
    certificatesPdfPath: "/documents/certificates.pdf",
  },

  // Ticker Keywords (Horizontal Marquee)
  tickerKeywords: [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Full-Stack Web Development",
    "Python & Java Programming",
    "Object-Oriented Programming (OOP)",
    "MySQL & Relational DBs",
    "RESTful APIs & Next.js",
    "Git & GitHub Version Control",
    "Applied AI & Voice Engines",
  ],

  // Skills Grouped by Category (Software Engineering Taxonomy)
  skillsGrouped: [
    {
      title: "Software Engineering & Core CS",
      skills: [
        { name: "Data Structures & Algorithms", tag: "CS Core" },
        { name: "Object-Oriented Programming", tag: "OOP" },
        { name: "System Architecture", tag: "Design" },
        { name: "SDLC & Agile Workflow", tag: "Dev Process" },
        { name: "Database Systems (DBMS)", tag: "Data" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", tag: "Primary / Advanced" },
        { name: "C Language", tag: "Core Systems" },
        { name: "Java", tag: "OOP / Enterprise" },
        { name: "JavaScript / TypeScript", tag: "Full Stack" },
      ],
    },
    {
      title: "Web & Full-Stack Development",
      skills: [
        { name: "React.js / Next.js", tag: "Frontend" },
        { name: "HTML5 & CSS3", tag: "UI Layout" },
        { name: "Tailwind CSS", tag: "Styling" },
        { name: "RESTful APIs", tag: "Backend Fetch" },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", tag: "RDBMS" },
        { name: "SQL Queries & Joins", tag: "Data Optimization" },
        { name: "Firebase / Firestore", tag: "Cloud DB" },
      ],
    },
    {
      title: "Engineering Tools & DevOps",
      skills: [
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "VS Code & Debugging", tag: "IDE" },
        { name: "Postman", tag: "API Testing" },
        { name: "Problem Solving & Logic", tag: "Engineering Mindset" },
      ],
    },
  ],

  // Featured Projects
  projects: [
    {
      id: "voice-assistant",
      title: "Smart Web-Based Voice & AI Engine",
      valueProposition:
        "A production-grade, AI-driven voice assistant architecture built with Python, speech recognition algorithms, real-time API integrations, and an interactive web UI.",
      highlights: [
        "Designed an asynchronous NLP & voice-processing pipeline with multi-voice output and wake-word detection",
        "Integrated live REST APIs for real-time temperature telemetry, news streaming, and task automation",
        "Implemented computer vision object detection and modular device control handlers",
      ],
      techStack: ["Python", "Speech Recognition", "REST APIs", "JavaScript", "HTML5 / CSS3"],
      liveUrl: "",
      repoUrl: "",
      isFlagship: true,
    },
    {
      id: "developer-workspace",
      title: "Full-Stack Software Engineering Task Manager",
      valueProposition:
        "An interactive workspace dashboard built for developers to structure code snippets, track algorithm complexity, and manage project workflows.",
      highlights: [
        "Engineered responsive UI using React, TypeScript, and modern glassmorphism design tokens",
        "Implemented structured state persistence with clean data models and search capabilities",
        "Built modular task breakdown components with real-time progress analytics",
      ],
      techStack: ["TypeScript", "React / Next.js", "Tailwind CSS", "Data Structures"],
      liveUrl: "",
      repoUrl: "",
      isFlagship: false,
    },
    {
      id: "sql-analytics-hub",
      title: "Relational SQL Analytics & Query Utility",
      valueProposition:
        "A database engineering utility for executing, visualizing, and optimizing relational SQL queries on large datasets.",
      highlights: [
        "Built normalized MySQL relational schemas and query join algorithms",
        "Created visual data analytics reports using Python data science libraries",
        "Applied automated data validation pipelines to ensure database integrity",
      ],
      techStack: ["Python", "MySQL", "SQL Queries", "Pandas"],
      liveUrl: "",
      repoUrl: "",
      isFlagship: false,
    },
  ] as ProjectItem[],

  // Academic Education (Updated EXACTLY per instruction: College 3rd year 2024, HSC 2024, Primary school 2021)
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech)",
      status: "3rd Year — Currently Enrolled (2024)",
      institution: "JP College of Engineering",
      location: "Tenkasi, Tamil Nadu",
      period: "2024 – Present (3rd Year)",
      isCurrent: true,
      cgpaBranch: "Computer Science & Software Engineering",
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      status: "Passed with 65%",
      institution: "RPHSS (Ramkrishna Paramahamsa Higher Secondary School)",
      location: "Tenkasi, Tamil Nadu",
      period: "2024",
      isCurrent: false,
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (SSLC) / Primary Schooling",
      status: "Passed with 80%",
      institution: "Pulari Matriculation School",
      location: "Tenkasi, Tamil Nadu",
      period: "2021",
      isCurrent: false,
    },
  ] as EducationItem[],

  // Certifications List
  certifications: [
    {
      id: "cert-1",
      title: "3D Printing & Additive Manufacturing",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Emerging Tech",
      imagePath: "/certificates/3d-printing-hp-life.png",
    },
    {
      id: "cert-2",
      title: "AI & Machine Learning Fundamentals",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Artificial Intelligence",
      imagePath: "/certificates/ai-for-beginners-hp-life.png",
    },
    {
      id: "cert-3",
      title: "Data Science & Relational Analytics",
      issuer: "HP LIFE / HP Foundation",
      date: "May 2026",
      category: "Data Science",
      imagePath: "/certificates/data-science-analytics-hp-life.png",
    },
    {
      id: "cert-4",
      title: "C – Systems & Core Programming",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
      imagePath: "/certificates/c-programming-skillrack.jpg",
    },
    {
      id: "cert-5",
      title: "SQL – Database Queries & Optimization",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Databases",
      imagePath: "/certificates/sql-basics-skillrack.jpg",
    },
    {
      id: "cert-6",
      title: "Python 3.x – Advanced Hands-On Course",
      issuer: "SkillRack",
      date: "Jul 2025",
      category: "Programming",
      imagePath: "/certificates/python-3x-skillrack.jpg",
    },
    {
      id: "cert-7",
      title: "Java Basics & Object-Oriented Principles",
      issuer: "SkillRack",
      date: "Sep 2025",
      category: "Programming",
      imagePath: "/certificates/java-basics-skillrack.jpg",
    },
    {
      id: "cert-8",
      title: "Python 101 for Data Science & AI",
      issuer: "IBM / Cognitive Class",
      date: "Oct 2025",
      category: "Data Science",
      imagePath: "/certificates/python-101-ibm.jpg",
    },
    {
      id: "cert-9",
      title: "Data Engineering & Analytics Workshop",
      issuer: "Uptor / LMES",
      date: "Oct 2025",
      category: "Workshop",
      imagePath: "/certificates/data-science-workshop-uptor.jpg",
    },
  ] as CertificationItem[],

  // Achievements
  achievements: [
    {
      title: "Competitive Programming & Hackathons",
      desc: "Active participant in algorithms contests, problem-solving challenges, and college software hackathons.",
      badge: "Competitive Coding",
    },
    {
      title: "Self-Driven Software Engineering Mastery",
      desc: "Completed 9+ professional certifications across Python, Java, SQL, AI, and Data Science ahead of university curriculum.",
      badge: "Continuous Skill-Building",
    },
  ] as AchievementItem[],
};
