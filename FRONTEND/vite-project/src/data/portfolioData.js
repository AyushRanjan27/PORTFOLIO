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
      dates: "2022 - 2026 (Expected)",
      details: "NAAC A++ Accredited University. Actively participating in hackathons, technical writing forums, and sports events. Specialized in Software Engineering, Full-Stack Web Development, and Applied Machine Learning."
    },
    {
      institution: "IIT Kharagpur (NPTEL Online Certification)",
      degree: "Specialized Coursework",
      field: "Computer Networks And Internet Protocol",
      location: "Online",
      dates: "Jan - Apr 2025 (12 Weeks)",
      details: "Successfully completed a 12-week course funded by MoE, Government of India. Consolidated Score: 55% (Online Assignments: 25/25, Proctored Exam: 30/75). Credential Roll No: NPTEL25CS15S1159700085."
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
      id: "hostel-ml",
      title: "Hostel Management System using ML",
      category: "Machine Learning",
      tag: "Machine Learning / ML",
      description: "An intelligent hostel management portal integrating machine learning algorithms to optimize room allocation, track student records, and perform capacity forecasting.",
      problem: "Manual hostel administration leads to highly inefficient room allocation, reservation conflicts, and a lack of predictive foresight for utility requirements.",
      data: "Used historical student room selections, capacity logs, utility bills, and student academic/demographic profiles.",
      analysis: "Applied regression and classification models in Python to predict seasonal demand and suggest room matchings based on compatibility.",
      insight: "Identified peak reservation seasons and optimized student pairings using collaborative compatibility metrics.",
      result: "Constructed an automated web-based management dashboard that allocates rooms dynamically, saving administrative overhead.",
      techStack: ["JavaScript", "Python", "Machine Learning", "Express.js", "MongoDB", "HTML5", "CSS3"],
      contribution: "Sole Developer. Coded the frontend forms, mapped the database schema, and modeled the allocation prediction parameters.",
      github: "https://github.com/AyushRanjan27/Hostel-Management-System-Using-ML",
      live: ""
    },
    {
      id: "traveloop",
      title: "TRAVELOOP - Destination Discovery Portal",
      category: "Web Development",
      tag: "Web Development",
      description: "A responsive, visually engaging travel discovery portal and vacation planner designed to help travelers discover popular destinations.",
      problem: "Traditional travel blogs are slow and unresponsive on mobile screens, hindering seamless trip navigation.",
      result: "Developed a modern responsive frontend utilizing semantic HTML5 and clean CSS layouts with animated destination cards and structured travel plan outlines.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Vite"],
      contribution: "Sole Developer. Created the responsive page designs and custom smooth-scrolling animations.",
      github: "https://github.com/AyushRanjan27/TRAVELOOP",
      live: ""
    },
    {
      id: "globalbites",
      title: "GlobalBites - Recipe Platform",
      category: "Web Development",
      tag: "Web Development",
      description: "An international food recipe discovery platform allowing users to search cuisines, view detailed culinary guides, and filter by cooking time.",
      problem: "Finding verified recipe cards from diverse international culinary backgrounds in a single, fast portal is challenging.",
      result: "Built a responsive recipe portal featuring dynamic card search, cuisine categories, step-by-step instructions, and ingredient checklists.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Vite"],
      contribution: "Sole Developer. Implemented cuisine indexing, client search matching, and card layouts.",
      github: "https://github.com/AyushRanjan27/GlobalBites",
      live: ""
    },
    {
      id: "netflix-clone",
      title: "Netflix Landing Page Clone",
      category: "Web Development",
      tag: "Web Development",
      description: "A high-fidelity landing page replica focusing on absolute pixel perfection, hover scaling states, and accordion layouts.",
      problem: "Replicating premium, complex streaming dashboards with pure layout tags requires thorough CSS structure.",
      result: "Created a replica of the primary landing page featuring fluid media queries, layout styling, and CSS keyframe banners.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      contribution: "Sole Developer. Replicated the exact margins, color values, and accordion interactions.",
      github: "https://github.com/AyushRanjan27/Netflix_Clone",
      live: ""
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
    {
      id: "nptel-networks",
      name: "Computer Networks And Internet Protocol",
      issuer: "NPTEL Online Certification (IIT Kharagpur)",
      date: "Jan - Apr 2025",
      category: "Development",
      skills: ["Routing Algorithms", "IP Addressing", "TCP/UDP Protocols", "Network Layers"],
      score: "55%",
      rollNumber: "NPTEL25CS15S1159700085",
      credentialUrl: ""
    }
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
