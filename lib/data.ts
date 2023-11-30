import { Course, NavLink, TeamMember } from "./types";

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/team",
    label: "Meet the Team",
  },
  {
    label: "Programs",
    subLinks: [
      {
        href: "/services/ap",
        label: "AP Tutoring",
      },
      {
        href: "/services/testprep",
        label: "SAT/ACT Prep",
      },
      {
        href: "/services/competition",
        label: "AIME/USACO Prep",
      },
      {
        href: "/services/consulting",
        label: "Consulting",
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Woojin Yoon",
    role: "Lead of Internal Affairs",
    quals: [
      "Two Time AIME Qualifier",
      "Distinguished Honor Roll Top 1%",
      "1560 SAT Score",
    ],
    bio: "Hey there! I'm Woojin and I absolutely love hardware engineering. When I'm not tinkering with tech, you'll find me collecting Pokémon cards, diving into 3D printing projects, and working on unique animations.",
    image: "/trusted.png",
  },
  {
    name: "Abhinav Raja",
    role: "Lead of Services",
    quals: [
      "Three Time AIME Qualifier",
      "Distinguished Honor Roll Top 1%",
      "USACO Platinum",
      "36 ACT Score",
      "STEM Expert",
    ],
    bio: "Hey, I'm Abhinav! I love exploring machine learning in military applications. Outside of that, I'm into chess, tennis, and making music in my free time.",
    image: "/trusted.png",
  },
  {
    name: "Anirudh Shyam",
    role: "Lead of Customer Relations",
    quals: [
      "1580 SAT Score",
      "College Essay Mentor",
      "4 Years of Mentoring Experience",
    ],
    bio: "Hello, I'm Anirudh, and my passion lies in psychology. During my free time, I find enjoyment in watching sports, delving into Marvel movies, collecting cards, and bonding with my two dogs, Scout and April.",
    image: "/trusted.png",
  },
];

export const apCourses: Course[] = [
  {
    name: "AP Calculus BC",
    desc: "Key Concepts: Differentiation, integration, limits, and application of derivatives and integrals.\nTesting Practice: Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB and BC Calculus, including multiple-choice and free-response question practice.",
  },
  {
    name: "AP Precalculus",
    desc: "Key Concepts: Advanced algebraic skills, trigonometry, conic sections, polar coordinates, and sequences/series.\nTesting Practice: Regular in-class quizzes, comprehensive chapter tests, and full-length simulated AP Precalculus exams to assess understanding and test-taking skills.",
  },
  {
    name: "AP Computer Science A",
    desc: "Key Concepts: Java programming, object-oriented programming, data structures, and algorithms.\nTesting Practice: Coding assignments, code analysis exercises, and timed practice exams that include multiple-choice questions and coding tasks to prepare for both aspects of the AP CSA exam.",
  },
  {
    name: "AP Biology",
    desc: "Key Concepts: Cellular biology, genetics, evolution, ecology, and laboratory techniques.\nTesting Practice: Hands-on laboratory experiments, weekly quizzes, and simulated AP Biology exams with both multiple-choice and free-response questions, emphasizing data interpretation and experimental design.",
  },
  {
    name: "AP Chemistry",
    desc: "Key Concepts: Chemical reactions, stoichiometry, atomic structure, and thermodynamics.\nTesting Practice: Extensive laboratory work, problem-solving exercises, and timed practice tests covering both the multiple-choice and free-response sections of the AP Chemistry exam.",
  },
  {
    name: "AP Lang and Comp",
    desc: "Key Concepts: Rhetorical analysis, argumentation, synthesis, and effective writing.\nTesting Practice: Timed essay writing, analysis of various texts, and practice exams designed to simulate the AP Language and Composition exam's format and content.",
  },
  {
    name: "AP Physics I, II, and C: Mech",
    desc: "Key Concepts: Mechanics, electricity and magnetism, and fluid dynamics.\nTesting Practice: Extensive problem-solving exercises, hands-on experiments, and timed practice exams tailored to each specific AP Physics course, covering both multiple-choice and free-response sections.",
  },
  {
    name: "AP Statistics",
    desc: "Key Concepts: Statistical inference, probability, data analysis, and experimental design.\nTesting Practice: Data interpretation exercises, hypothesis testing, and practice exams closely resembling the format and content of the AP Statistics exam, including both multiple-choice and free-response questions.",
  },
];
