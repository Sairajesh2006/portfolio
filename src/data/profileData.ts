/**
 * =====================================================================
 * RAJESH — PERSONAL UNIVERSE CONFIGURATION & DATA SOURCE
 * =====================================================================
 * 
 * You can easily customize any information on your website by editing
 * the values in this file!
 * 
 * - To update your CGPA: change personalInfo.cgpa
 * - To update your academic year: change personalInfo.currentYear
 * - To replace your profile photo: place your photo in `/public/profile.jpg`
 *   and set personalInfo.profilePhoto to "/profile.jpg" (or use the interactive
 *   photo upload button on the site).
 * - To add or edit projects: modify the `projects` array below.
 * - To add or edit gallery items: modify the `gallery` array below.
 */

export interface PersonalInfo {
  fullName: string;
  preferredName: string;
  age: number;
  university: string;
  degree: string;
  currentYear: string;
  cgpa: number;
  intro: string;
  mainAmbition: string;
  profilePhoto: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Core Programming & DSA' | 'Web Technologies' | 'Emerging Tech';
  description: string;
  focusNote: string;
  estimatedProgress: number; // Editable personal estimate
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: 'Hardware Prototype' | 'Concept & Architecture' | 'Active Development';
  tagline: string;
  description: string;
  hardwareComponents?: string[];
  softwareStack: string[];
  highlights: string[];
  imagePlaceholderText: string;
  imageUrl?: string;
  externalLink?: string;
  githubLink?: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  organization: string;
  description: string;
  skillsInvolved: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus Life' | 'Tech & Workspace' | 'Moments' | 'Everyday Life';
  description: string;
  dateTag: string;
  imageUrl?: string;
}

export interface GoalItem {
  id: string;
  title: string;
  category: 'Engineering Skills' | 'Academics & Career' | 'Innovation';
  description: string;
  actionPlan: string;
}

export interface ContactInfo {
  email: string;
  githubUrl: string; // Leave empty if not yet available
  linkedinUrl: string; // Leave empty if not yet available
  location: string;
}

// ---------------------------------------------------------------------
// 1. PERSONAL INFORMATION (Accurate details per your specification)
// ---------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  fullName: "Amrutapu Sai Rajesh",
  preferredName: "Rajesh",
  age: 19,
  university: "VIT-AP University",
  degree: "Bachelor of Technology (B.Tech)",
  currentYear: "Second year",
  cgpa: 8.9, // Edit your latest CGPA here
  intro: "Aspiring software engineer interested in programming, artificial intelligence, and technology.",
  mainAmbition: "Become a skilled software engineer, build useful technology, and explore the world of AI.",
  profilePhoto: "/profile.jpg",
};

// ---------------------------------------------------------------------
// 2. SKILLS (What you are actively learning)
// ---------------------------------------------------------------------
export const skillsData: SkillItem[] = [
  {
    id: "java",
    name: "Java",
    category: "Core Programming & DSA",
    description: "Strong object-oriented fundamentals, class design, memory management concepts, and multi-threading basics.",
    focusNote: "Actively solving algorithmic challenges and building modular applications.",
    estimatedProgress: 75,
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms (DSA)",
    category: "Core Programming & DSA",
    description: "Arrays, Linked Lists, Stacks, Queues, Binary Trees, Recursion, and Sorting & Searching algorithms.",
    focusNote: "Focusing on time/space complexity optimization and structured problem solving.",
    estimatedProgress: 70,
  },
  {
    id: "html",
    name: "HTML",
    category: "Web Technologies",
    description: "Semantic document structuring, modern HTML5 elements, web accessibility practices, and SEO basics.",
    focusNote: "Creating structured web architectures for clean client rendering.",
    estimatedProgress: 85,
  },
  {
    id: "css",
    name: "CSS",
    category: "Web Technologies",
    description: "Modern CSS layouts including Flexbox, CSS Grid, media queries, CSS variables, and modern styling utilities.",
    focusNote: "Developing responsive and visually refined user interfaces.",
    estimatedProgress: 80,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Web Technologies",
    description: "ES6+ syntax, asynchronous programming, DOM manipulation, promises, fetch API, and modular architecture.",
    focusNote: "Building dynamic interactive experiences and web application logic.",
    estimatedProgress: 72,
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Emerging Tech",
    description: "Exploring foundational AI concepts, modern generative AI capabilities, prompt engineering, and ML workflows.",
    focusNote: "Actively studying foundational algorithms and exploring real-world AI applications.",
    estimatedProgress: 60,
  },
];

// ---------------------------------------------------------------------
// 3. PROJECTS (Your authentic student projects)
// ---------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: "smart-noise-detection",
    title: "Smart Noise Detection System",
    category: "Embedded Systems · IoT",
    status: "Hardware Prototype",
    tagline: "ESP32-based acoustic monitoring system providing real-time visual and audible alert feedback.",
    description: "An ESP32-powered acoustic safety and noise level monitoring device. The system senses ambient sound thresholds through an integrated sound sensor module, processes readings in real time, and triggers calibrated visual LED notifications, audio alerts via buzzer, and live status readouts on an LCD display.",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-24_191859_dc4292ce.png",
    hardwareComponents: [
      "ESP32 Microcontroller",
      "Analog Sound Sensor Module",
      "Liquid Crystal Display (LCD)",
      "Status Indicator LEDs",
      "Audible Piezo Buzzer",
      "Breadboard & Power Circuit"
    ],
    softwareStack: ["C++ / Arduino IDE", "ESP32 GPIO Framework", "Analog Signal Sampling"],
    highlights: [
      "Real-time ambient noise threshold calibration",
      "Multi-tier alert logic (Safe, Warning, Critical) with color-coded LEDs",
      "Live decibel intensity output rendered directly to LCD display",
      "Compact standalone microcontroller deployment"
    ],
    imagePlaceholderText: "ESP32 Noise Detection Hardware Circuit",
  },
  {
    id: "campus-flow",
    title: "CAMPUS-FLOW",
    category: "Campus Optimization · Concept Architecture",
    status: "Concept & Architecture",
    tagline: "A strategic campus improvement concept aimed at optimizing space utilization for students and faculty.",
    description: "CAMPUS-FLOW is an architectural initiative conceptualized to solve crowded study spaces, underutilized classrooms, and friction in finding open facilities across university campuses. It models intelligent occupancy tracking, streamlined room discovery, and predictive scheduling to empower both students and university administration.",
    softwareStack: ["System Architecture Design", "Space Allocation Logic", "UI/UX Prototyping"],
    highlights: [
      "Concept for live visualization of open library desks, labs, and collaborative halls",
      "Optimized scheduling suggestions to balance footfall during peak college hours",
      "Dual user flows tailored specifically for student study groups and faculty requirements",
      "Designed as a scalable blueprint for smart university campus digital ecosystems"
    ],
    imagePlaceholderText: "CAMPUS-FLOW Architecture Blueprint & UI Concept",
  },
];

// ---------------------------------------------------------------------
// 4. LEARNING TIMELINE (Your genuine academic & tech growth)
// ---------------------------------------------------------------------
export const timelineData: TimelineMilestone[] = [
  {
    period: "August 2024 – Present",
    title: "Second Year B.Tech — Core Engineering & DSA",
    organization: "VIT-AP University",
    description: "Diving deeper into advanced Data Structures & Algorithms, object-oriented software engineering principles with Java, and maintaining an 8.9 CGPA academic standard.",
    skillsInvolved: ["Java", "Data Structures", "Algorithm Optimization", "Computer Architecture"],
  },
  {
    period: "Mid 2024",
    title: "Smart Noise Detection System Development",
    organization: "Hardware Project Exploration",
    description: "Designed and programmed an ESP32-based acoustic monitoring solution integrating analog sound sensors, LCD interface, LEDs, and buzzer alert mechanisms.",
    skillsInvolved: ["ESP32", "Embedded C++", "Hardware Interfacing", "Sensor Logic"],
  },
  {
    period: "Early 2024",
    title: "Modern Web Foundations & CAMPUS-FLOW Conceptualization",
    organization: "Independent Learning & Project Concept",
    description: "Mastered fundamental web technologies (HTML, CSS, modern JavaScript) and conceptualized CAMPUS-FLOW to optimize student and faculty space utilization across college facilities.",
    skillsInvolved: ["HTML5", "CSS3", "JavaScript", "System Design"],
  },
  {
    period: "2023 – 2024",
    title: "Commenced B.Tech in Engineering",
    organization: "VIT-AP University",
    description: "Started higher education journey with a deep curiosity for computing, algorithmic problem solving, and technological innovation.",
    skillsInvolved: ["Problem Solving", "Mathematics", "Engineering Fundamentals"],
  },
];

// ---------------------------------------------------------------------
// 5. LIFESTYLE & PERSONAL WORLD (College life & interests)
// ---------------------------------------------------------------------
export const galleryPlaceholders: GalleryPhoto[] = [
  {
    id: "campus-life-1",
    title: "VIT-AP University Campus",
    category: "Campus Life",
    description: "The serene academic blocks and university grounds at VIT-AP where my engineering journey unfolds every day.",
    dateTag: "Academic Year 2024–2025",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-24_191623_004dd541.png",
  },
  {
    id: "workspace-1",
    title: "Study & Coding Setup",
    category: "Tech & Workspace",
    description: "My personal workspace for late-night problem solving, debugging code, and building projects.",
    dateTag: "Development Desk",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-24_191605_9263c208.png",
  },
  {
    id: "moments-1",
    title: "College Tech Discussions",
    category: "Moments",
    description: "Brainstorming project concepts and discussing hardware and software ideas with classmates and peers.",
    dateTag: "Collaborative Sessions",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-24_191840_5698c102.png",
  },
  {
    id: "interests-1",
    title: "Curiosity & Exploration",
    category: "Everyday Life",
    description: "Exploring new tech concepts, reading, experimenting with code snippets, and staying inspired.",
    dateTag: "Daily Rhythm",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-24_191849_8d27f3cd.png",
  },
];

export const hobbiesList = [
  {
    title: "Algorithmic Problem Solving",
    description: "Breaking down complex logic puzzles and writing clean, efficient code.",
    icon: "code",
  },
  {
    title: "Exploring Emerging Tech & AI",
    description: "Reading tech papers, following AI breakthroughs, and understanding new developer tools.",
    icon: "cpu",
  },
  {
    title: "Hardware & IoT Tinkering",
    description: "Experimenting with microcontrollers like ESP32 and connecting software with the physical world.",
    icon: "circuit-board",
  },
  {
    title: "Music for Deep Focus",
    description: "Listening to mellow instrumental and ambient music to stay in the zone while programming.",
    icon: "headphones",
  },
  {
    title: "Campus Walks & Reflection",
    description: "Taking evening strolls around the university grounds to clear the mind and reflect on goals.",
    icon: "compass",
  },
];

// ---------------------------------------------------------------------
// 6. FUTURE GOALS & AMBITIONS (Presented as future aspirations)
// ---------------------------------------------------------------------
export const goalsData: GoalItem[] = [
  {
    id: "goal-dsa",
    title: "Master Data Structures & Algorithmic Problem Solving",
    category: "Engineering Skills",
    description: "Consistently practice competitive programming and deepen mastery over complex data structures, dynamic programming, and graph algorithms.",
    actionPlan: "Dedicate structured daily time to solving problems and analyzing time/space trade-offs.",
  },
  {
    id: "goal-software-eng",
    title: "Build Production-Ready, Real-World Software",
    category: "Engineering Skills",
    description: "Transition from small experimental scripts to full-stack, scalable systems that solve genuine problems for people.",
    actionPlan: "Develop comprehensive applications with robust architectures, clean APIs, and thoughtful user experiences.",
  },
  {
    id: "goal-ai-depth",
    title: "Explore Artificial Intelligence & Machine Learning",
    category: "Innovation",
    description: "Understand the mathematical and computational mechanics powering modern AI systems, moving beyond surface-level usage to practical implementation.",
    actionPlan: "Study machine learning fundamentals, neural networks, and experiment with intelligent software workflows.",
  },
  {
    id: "goal-career",
    title: "Prepare for Top Software Engineering Opportunities",
    category: "Academics & Career",
    description: "Build a strong portfolio of genuine projects, excel in technical interviews, and contribute to collaborative engineering teams.",
    actionPlan: "Prepare thoroughly for internships, technical assessments, and software engineering career milestones.",
  },
];

// ---------------------------------------------------------------------
// 7. CONTACT DETAILS (Privacy-first: No sensitive info exposed)
// ---------------------------------------------------------------------
export const contactData: ContactInfo = {
  email: "trivenigopavarapu07@gmail.com", // Set your preferred contact email here
  githubUrl: "", // Add your GitHub profile URL when you'd like it to show
  linkedinUrl: "", // Add your LinkedIn profile URL when you'd like it to show
  location: "VIT-AP University, Andhra Pradesh, India",
};
