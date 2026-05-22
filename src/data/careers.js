const careers = [
  {
    id: 1,
    name: "Forensic Scientist",
    category: "Science",
    description: "Analyze crime scene evidence using lab techniques",
    skills: ["Biology", "Chemistry", "Observation"],
    education: "BSc/MSc in Forensic Science",

    roadmap: [
      "Learn Biology and Chemistry fundamentals",
      "Study forensic investigation techniques",
      "Practice lab experiments and evidence analysis",
      "Apply for internships in forensic labs"
    ],

    dailyTasks: [
      "Watch one forensic investigation video",
      "Study fingerprint analysis basics",
      "Read one crime case study"
    ],

    subjectsUsed: [
      {
        subject: "Biology",
        topic: "DNA Analysis",
        usage: "Used for identifying suspects through biological evidence"
      },
      {
        subject: "Chemistry",
        topic: "Chemical Reactions",
        usage: "Used for analyzing unknown substances and toxicology reports"
      },
      {
        subject: "Physics",
        topic: "Ballistics",
        usage: "Used for firearm and trajectory investigations"
      }
    ]
  },

  {
    id: 2,
    name: "UX Designer",
    category: "Tech",
    description: "Design user-friendly apps and websites",
    skills: ["Design", "Research", "Figma"],
    education: "Any degree + portfolio",

    roadmap: [
      "Learn UX design principles",
      "Master Figma and wireframing",
      "Create case studies and mock projects",
      "Build portfolio and apply for internships"
    ],

    dailyTasks: [
      "Learn one Figma feature",
      "Redesign one app screen",
      "Study one UX case study"
    ],

    subjectsUsed: [
      {
        subject: "Psychology",
        topic: "Human Behavior",
        usage: "Used to understand user interaction patterns"
      },
      {
        subject: "Design",
        topic: "Color Theory",
        usage: "Used for creating visually balanced interfaces"
      },
      {
        subject: "Computer Science",
        topic: "UI Principles",
        usage: "Used for designing responsive digital products"
      }
    ]
  },

  {
    id: 3,
    name: "Wildlife Biologist",
    category: "Nature",
    description: "Study animals and their ecosystems",
    skills: ["Research", "Field Work"],
    education: "BSc/MSc in Biology",

    roadmap: [
      "Study zoology and ecology basics",
      "Participate in field research programs",
      "Learn wildlife conservation methods",
      "Work with research organizations or NGOs"
    ],

    dailyTasks: [
      "Read about one endangered species",
      "Watch a wildlife documentary",
      "Study ecosystem interactions"
    ],

    subjectsUsed: [
      {
        subject: "Biology",
        topic: "Ecology",
        usage: "Used for studying ecosystems and animal habitats"
      },
      {
        subject: "Geography",
        topic: "Climate Patterns",
        usage: "Used to track environmental impact on wildlife"
      },
      {
        subject: "Environmental Science",
        topic: "Conservation",
        usage: "Used for protecting endangered species"
      }
    ]
  },

  {
    id: 4,
    name: "Game Designer",
    category: "Creative",
    description: "Design gameplay, levels, and mechanics for games",
    skills: ["Creativity", "Storytelling"],
    education: "Game Design / Self-taught",

    roadmap: [
      "Learn game design fundamentals",
      "Study storytelling and level design",
      "Create mini games using Unity or Unreal",
      "Build a game portfolio"
    ],

    dailyTasks: [
      "Sketch one game level idea",
      "Study game mechanics",
      "Practice Unity basics"
    ],

    subjectsUsed: [
      {
        subject: "Mathematics",
        topic: "Coordinates & Logic",
        usage: "Used for game mechanics and movement systems"
      },
      {
        subject: "Art",
        topic: "Visual Composition",
        usage: "Used for designing characters and environments"
      },
      {
        subject: "Computer Science",
        topic: "Programming",
        usage: "Used for gameplay systems and interactions"
      }
    ]
  },

  {
    id: 5,
    name: "Actuary",
    category: "Finance",
    description: "Analyze financial risks using mathematics",
    skills: ["Math", "Statistics"],
    education: "Actuarial Exams",

    roadmap: [
      "Strengthen mathematics and statistics",
      "Prepare for actuarial exams",
      "Learn financial modeling and analytics",
      "Apply for actuarial trainee roles"
    ],

    dailyTasks: [
      "Solve probability questions",
      "Practice statistics problems",
      "Study actuarial exam concepts"
    ],

    subjectsUsed: [
      {
        subject: "Mathematics",
        topic: "Probability",
        usage: "Used for financial risk prediction"
      },
      {
        subject: "Statistics",
        topic: "Data Analysis",
        usage: "Used for insurance and investment modeling"
      },
      {
        subject: "Economics",
        topic: "Financial Planning",
        usage: "Used for market and business forecasting"
      }
    ]
  },

  {
    id: 6,
    name: "Food Technologist",
    category: "Science",
    description: "Develop and improve food products",
    skills: ["Chemistry", "Food Science"],
    education: "BSc Food Tech",

    roadmap: [
      "Study food chemistry and nutrition",
      "Learn food safety standards",
      "Practice product development techniques",
      "Intern with food manufacturing companies"
    ],

    dailyTasks: [
      "Study food preservation methods",
      "Research nutrition labels",
      "Learn food safety basics"
    ],

    subjectsUsed: [
      {
        subject: "Chemistry",
        topic: "Food Composition",
        usage: "Used for analyzing ingredients and nutrition"
      },
      {
        subject: "Biology",
        topic: "Microorganisms",
        usage: "Used for food safety and preservation"
      },
      {
        subject: "Health Science",
        topic: "Nutrition",
        usage: "Used for creating healthy food products"
      }
    ]
  },

  {
    id: 7,
    name: "Urban Planner",
    category: "Government",
    description: "Plan and design city infrastructure",
    skills: ["Planning", "Design"],
    education: "Urban Planning Degree",

    roadmap: [
      "Study urban development concepts",
      "Learn GIS and mapping tools",
      "Work on city planning projects",
      "Apply for planning and development roles"
    ],

    dailyTasks: [
      "Analyze a city map",
      "Study smart city concepts",
      "Learn GIS fundamentals"
    ],

    subjectsUsed: [
      {
        subject: "Geography",
        topic: "Land Mapping",
        usage: "Used for city development planning"
      },
      {
        subject: "Mathematics",
        topic: "Measurements",
        usage: "Used for infrastructure calculations"
      },
      {
        subject: "Environmental Science",
        topic: "Sustainability",
        usage: "Used for eco-friendly city planning"
      }
    ]
  },

  {
    id: 8,
    name: "Data Analyst",
    category: "Tech",
    description: "Analyze data to find insights",
    skills: ["Excel", "SQL", "Python"],
    education: "Any degree + skills",

    roadmap: [
      "Master Excel and data cleaning",
      "Learn SQL for database querying",
      "Practice Python and data visualization",
      "Build analytics projects and dashboards"
    ],

    dailyTasks: [
      "Practice SQL queries",
      "Clean one dataset",
      "Build a small Excel dashboard"
    ],

    subjectsUsed: [
      {
        subject: "Mathematics",
        topic: "Statistics",
        usage: "Used for analyzing trends and predictions"
      },
      {
        subject: "Computer Science",
        topic: "SQL",
        usage: "Used for handling and querying datasets"
      },
      {
        subject: "Business Studies",
        topic: "Market Analysis",
        usage: "Used for business decision-making"
      }
    ]
  },

  {
    id: 9,
    name: "Psychologist",
    category: "Healthcare",
    description: "Study human behavior and mental health",
    skills: ["Communication", "Analysis"],
    education: "BA/BSc + MSc Psychology",

    roadmap: [
      "Study psychology fundamentals",
      "Learn counseling and therapy techniques",
      "Participate in clinical training",
      "Pursue specialization and internships"
    ],

    dailyTasks: [
      "Read one psychology article",
      "Study behavioral patterns",
      "Practice communication skills"
    ],

    subjectsUsed: [
      {
        subject: "Psychology",
        topic: "Human Behavior",
        usage: "Used for therapy and counseling"
      },
      {
        subject: "Biology",
        topic: "Brain Function",
        usage: "Used for understanding emotions and mental health"
      },
      {
        subject: "Sociology",
        topic: "Social Interaction",
        usage: "Used for studying group behavior"
      }
    ]
  },

  {
    id: 10,
    name: "Air Traffic Controller",
    category: "Aviation",
    description: "Manage aircraft movement for safety",
    skills: ["Focus", "Decision Making"],
    education: "Specialized training",

    roadmap: [
      "Learn aviation communication basics",
      "Train in air traffic management systems",
      "Practice quick decision-making skills",
      "Complete aviation authority certification"
    ],

    dailyTasks: [
      "Study aviation communication codes",
      "Practice focus exercises",
      "Learn aircraft navigation basics"
    ],

    subjectsUsed: [
      {
        subject: "Physics",
        topic: "Motion",
        usage: "Used for understanding aircraft movement"
      },
      {
        subject: "Geography",
        topic: "Navigation",
        usage: "Used for flight route management"
      },
      {
        subject: "Mathematics",
        topic: "Speed & Distance",
        usage: "Used for safe aircraft coordination"
      }
    ]
  }
];

export default careers;