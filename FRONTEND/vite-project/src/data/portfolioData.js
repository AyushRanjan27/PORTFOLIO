export const portfolioData = {
  personalInfo: {
    name: "Ayush Ranjan",
    title: "Software Web Developer | Data Analyst",
    location: "Vadodara, Gujarat, India",
    email: "ayush2004ranjan@gmai.com",
    github: "https://github.com/AyushRanjan27",
    linkedin: "https://www.linkedin.com/in/ayush-1331-ranjan/",
    bio: "Computer Science & Engineering student at Parul Institute of Technology. Passionate about software development, full-stack web applications, and data analytics. Experienced in programming with C++, Java, and Python, building MERN stack applications, and applying machine learning models for data-driven decisions."
  },
  education: [
    {
      institution: "Parul Institute of Technology, Parul University",
      degree: "Bachelor of Technology (B.Tech.)",
      field: "Computer Science & Engineering",
      location: "Vadodara, Gujarat, India",
      dates: "2023 - 2027 (Expected)",
      details: "NAAC A++ Accredited University. Actively participating in hackathons, technical writing forums, and sports events. Specialized in Software Engineering, Full-Stack Web Development, and Applied Machine Learning."
    },
    {
      institution: "IIT Kharagpur (NPTEL Online Certification)",
      degree: "Specialized Coursework",
      field: "Introduction to Internet of Things",
      location: "Online",
      dates: "Jul - Oct 2026 (12 Weeks)",
      details: "Successfully completed a 12-week course funded by MoE, Government of India. Consolidated Score: 77% (Online Assignments: 24.25/25, Proctored Exam: 52.5/75). Credential Roll No: NOC26CS161MANUAL0008971."
    }
  ],
  skills: {
    programming: ["Python", "C", "C++", "Java", "JavaScript"],
    webDev: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MERN Stack", "REST APIs"],
    database: ["MongoDB", "MySQL", "SQL"],
    dataAnalytics: ["Python (Pandas, NumPy)", "Data Cleaning", "Data Preprocessing", "Exploratory Data Analysis (EDA)", "SQL", "Excel", "Data Visualization (Matplotlib)"],
    dataScience: ["Machine Learning", "Deep Learning (CNN)", "Scikit-learn", "Jupyter Notebook", "Google Colab"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass"]
  },
  projects: [
    {
      id: "apex-distro",
      title: "ApexDistro Portal",
      category: "Full Stack",
      tag: "Full Stack",
      date: "Aug 2026",
      description: "A full-stack ERP/CRM platform that centralizes customer management, product management, inventory tracking, and sales challan operations for wholesale and distribution businesses.",
      problem: "Wholesale and distribution teams need one connected system to manage customers, products, inventory, and sales documentation.",
      result: "Built a centralized business-management portal for ERP and CRM workflows with inventory monitoring and sales challan management.",
      techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      contribution: "Sole Developer. Designed and implemented the application workflows, full-stack interface, and business-management features.",
      github: "https://github.com/AyushRanjan27/ApexDistro-Portal",
      live: "https://apex-distro-portal.vercel.app"
    },
    {
      id: "hostelhub",
      title: "HostelHub",
      category: "Full Stack",
      tag: "Full Stack",
      date: "Apr 2026",
      description: "A smart hostel management system with AI-based complaint classification and priority management for faster issue resolution.",
      problem: "Hostel complaints are often recorded and handled manually, making it difficult to prioritize urgent issues and track resolutions.",
      result: "Created a responsive hostel management web application that organizes complaints and uses AI-assisted classification and priority workflows.",
      techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Artificial Intelligence"],
      contribution: "Sole Developer. Built the complaint-management experience and integrated hostel operations with an intelligent prioritization workflow.",
      github: "https://github.com/AyushRanjan27/HostelHub",
      live: "https://hostelhub-nkln.onrender.com"
    },
    {
      id: "dreamwall",
      title: "DREAMWALL",
      category: "Full Stack",
      tag: "Full Stack",
      date: "Jul 2026",
      description: "An AI-powered wallpaper generator that transforms natural-language prompts into visually engaging wallpapers.",
      problem: "Creating tailored digital wallpapers typically requires design expertise and repeated manual editing.",
      result: "Developed a full-stack prompt-based image generation experience that converts user ideas into downloadable wallpaper concepts.",
      techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Generative AI"],
      contribution: "Sole Developer. Implemented the frontend prompt experience and application integration for AI-generated wallpaper output.",
      github: "https://github.com/AyushRanjan27/DREAMWALL",
      live: ""
    },
    {
      id: "traveloop",
      title: "TRAVELOOP - Destination Discovery Portal",
      category: "Web Development",
      tag: "Web Development",
      date: "May 2026",
      description: "A responsive, visually engaging travel discovery portal and vacation planner designed to help travelers discover popular destinations.",
      problem: "Traditional travel blogs are slow and unresponsive on mobile screens, hindering seamless trip navigation.",
      result: "Developed a modern responsive frontend utilizing semantic HTML5 and clean CSS layouts with animated destination cards and structured travel plan outlines.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Full-Stack Development"],
      contribution: "Sole Developer. Created destination discovery, trip planning, budget planning, and a responsive travel experience.",
      github: "https://github.com/AyushRanjan27/TRAVELOOP",
      live: ""
    },
    {
      id: "globalbites",
      title: "GlobalBites - Recipe Platform",
      category: "Full Stack",
      tag: "Full Stack",
      date: "Jun 2026",
      description: "An AI-powered food and recipe discovery platform for personalized recipes, budget-friendly meal planning, global cuisine exploration, and nutritional insights.",
      problem: "Users need more than recipe search: they need personalized, budget-aware meal ideas with useful nutrition context.",
      result: "Built a full-stack recipe platform that combines food discovery, intelligent recommendations, meal planning, and nutritional guidance.",
      techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Generative AI"],
      contribution: "Sole Developer. Implemented recipe discovery and personalization features across the full application.",
      github: "https://github.com/AyushRanjan27/GlobalBites",
      live: "https://global-bites-weld.vercel.app/"
    },
    {
      id: "tic-tac-toe",
      title: "Interactive Tic-Tac-Toe Game",
      category: "Web Development",
      tag: "Web Development",
      description: "A classic browser game with score tracking, visual win animations, and theme settings.",
      problem: "Providing lag-free browser game interactions without external rendering frameworks.",
      result: "Wrote the game logic in pure ES6 JavaScript to check win conditions, track scores, and reset states dynamically.",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      contribution: "Sole Developer. Developed the grid rendering, click handling, and scoring system.",
      github: "https://github.com/AyushRanjan27/Tic-Tac-Toe",
      live: ""
    },
    {
      id: "stone-paper-scissor",
      title: "Stone Paper Scissors Game",
      category: "Web Development",
      tag: "Web Development",
      description: "A responsive game where players compete against a randomized AI opponent, featuring score updates and state indicators.",
      problem: "Creating smooth, instant visual updates for random game evaluations in real-time.",
      result: "Coded standard randomized AI choice selections and styled animations for instant score updates.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      contribution: "Sole Developer. Programmed the comparison logic, UI indicators, and clean CSS styling.",
      github: "https://github.com/AyushRanjan27/Stone-Paper-Scissor",
      live: ""
    }
  ],
  certifications: [
    {
      id: "nptel-iot",
      name: "Introduction to Internet of Things",
      issuer: "NPTEL Online Certification (IIT Kharagpur)",
      date: "Jul - Oct 2026",
      category: "Development",
      skills: ["Internet of Things", "IoT Protocols", "Embedded Systems", "Sensor Networks"],
      score: "77%",
      rollNumber: "NOC26CS161MANUAL0008971",
      certificateUrl: "/NOC26CS161MANUAL0008971-1.pdf",
      credentialUrl: ""
    },
    {
      id: "aws-foundations",
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      date: "Feb 09, 2025",
      category: "Cloud / Networking",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "AWS Architecture"],
      credentialUrl: "https://www.credly.com/go/0OY0cuK5",
      hours: "20 hours"
    },
    {
      id: "intro-data-science",
      name: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "Sep 09, 2025",
      category: "Data Science",
      skills: ["Data Analytics Fundamentals", "Role of Data in AI/ML", "Data Career Options"],
      credentialUrl: ""
    },
  ],
  achievements: [
    {
      title: "Team Leader, KrishiAI",
      event: "PU Code Hackathon 3.0",
      issuer: "Parul University (NAAC A++)",
      date: "2025",
      highlight: "Led Team KrishiAI in the 'AI in Healthcare' track, pitching an AI crop disease diagnosis system using Python and CNNs."
    },
    {
      title: "Hackathon Participant",
      event: "Vadodara Hackathon 6.0",
      issuer: "Parul Innovation & Entrepreneurship Research Centre (PIERC)",
      date: "Sep 2025",
      highlight: "Participated in a multi-day collaborative hackathon aimed at solving real-world civic and industrial challenges."
    },
    {
      title: "Writing Skills Participant",
      event: "Global Funfest 2023-24",
      issuer: "Career Development Cell (CDC), Parul University",
      date: "Oct - Dec 2023",
      highlight: "Completed and participated in the Writing Skills track, demonstrating communication, writing style, and presentation skills."
    },
    {
      title: "Sports Carnival Participant",
      event: "PIT Sports Carnival 2026",
      issuer: "Parul Institute of Technology",
      date: "Jan 2026",
      highlight: "Participated in university-wide sports activities, demonstrating enthusiasm, team collaboration, discipline, and sportsmanship."
    }
  ]
};
