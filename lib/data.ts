import { Course, NavLink, TeamMember } from "./types";

export const apCourses: Course[] = [
  {
    name: "AP Calculus BC",
    desc: "Key Concepts: Differentiation, integration, limits, and application of derivatives and integrals.\nTesting Practice: Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB and BC Calculus, including multiple-choice and free-response question practice.",
    slug: "calc-bc",
    curriculum: ["Derivatives", "Integrals"],
  },
  {
    name: "AP Precalculus",
    desc: "Key Concepts: Advanced algebraic skills, trigonometry, conic sections, polar coordinates, and sequences/series.\nTesting Practice: Regular in-class quizzes, comprehensive chapter tests, and full-length simulated AP Precalculus exams to assess understanding and test-taking skills.",
    slug: "precalc",
    curriculum: [],
  },
  {
    name: "AP Computer Science A",
    desc: "Key Concepts: Java programming, object-oriented programming, data structures, and algorithms.\nTesting Practice: Coding assignments, code analysis exercises, and timed practice exams that include multiple-choice questions and coding tasks to prepare for both aspects of the AP CSA exam.",
    slug: "csa",
    curriculum: [
      "Syntax, Data Types, Conditionals, Iteration, Methods, Objects",
      "Classes, Class Hierarchies, Polymorphism, Interfaces, Abstraction",
      "Arrays, Arraylist, Recursion, Strings",
    ],
  },
  {
    name: "AP Biology",
    desc: "Key Concepts: Cellular biology, genetics, evolution, ecology, and laboratory techniques.\nTesting Practice: Hands-on laboratory experiments, weekly quizzes, and simulated AP Biology exams with both multiple-choice and free-response questions, emphasizing data interpretation and experimental design.",
    slug: "bio",
    curriculum: [],
  },
  {
    name: "AP Chemistry",
    desc: "Key Concepts: Chemical reactions, stoichiometry, atomic structure, and thermodynamics.\nTesting Practice: Extensive laboratory work, problem-solving exercises, and timed practice tests covering both the multiple-choice and free-response sections of the AP Chemistry exam.",
    slug: "chem",
    curriculum: [
      "Stoichiometry",
      "Thermodynamics",
      "Atomic Theory",
      "Intermolecular Forces",
    ],
  },
  {
    name: "AP Lang and Comp",
    desc: "Key Concepts: Rhetorical analysis, argumentation, synthesis, and effective writing.\nTesting Practice: Timed essay writing, analysis of various texts, and practice exams designed to simulate the AP Language and Composition exam's format and content.",
    slug: "lang",
    curriculum: [],
  },
  {
    name: "AP Physics I, II, and C: Mech",
    desc: "Key Concepts: Mechanics, electricity and magnetism, and fluid dynamics.\nTesting Practice: Extensive problem-solving exercises, hands-on experiments, and timed practice exams tailored to each specific AP Physics course, covering both multiple-choice and free-response sections.",
    slug: "physics",
    curriculum: [],
  },
  {
    name: "AP Statistics",
    desc: "Key Concepts: Statistical inference, probability, data analysis, and experimental design.\nTesting Practice: Data interpretation exercises, hypothesis testing, and practice exams closely resembling the format and content of the AP Statistics exam, including both multiple-choice and free-response questions.",
    slug: "stats",
    curriculum: [],
  },
];

interface ExpandedCourse extends Course {
  logistics: {
    bestFor: string;
    pricing: string;
    classType: "private" | "group";
    durationWeeks: number;
  };
}

export const testprepCourses: ExpandedCourse[] = [
  {
    name: "CollegeBoard SAT",
    desc: "Id labore occaecat magna ut. Aute fugiat id aliquip nulla occaecat ullamco eiusmod mollit consectetur elit nulla mollit. Cupidatat duis nostrud Lorem quis aute sint consequat aute nostrud consectetur irure aute. ",
    slug: "sat",
    curriculum: [
      "reading comprehension, passage analysis, question types, vocabulary building, grammar",
      "foundational skills, word problems, problem solving strategies, statistics, algebra, geometry",
    ],
    logistics: {
      bestFor: "12+",
      pricing: "$65/hr",
      classType: "private",
      durationWeeks: 8,
    },
  },
  {
    name: "CollegeBoard ACT",
    desc: "Id labore occaecat magna ut. Aute fugiat id aliquip nulla occaecat ullamco eiusmod mollit consectetur elit nulla mollit. Cupidatat duis nostrud Lorem quis aute sint consequat aute nostrud consectetur irure aute. ",
    slug: "act",
    curriculum: [],
    logistics: {
      bestFor: "12+",
      pricing: "$65/hr",
      classType: "private",
      durationWeeks: 8,
    },
  },
];

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
    label: "Services",
    subLinks: [
      {
        href: "/services/ap",
        label: "AP Tutoring",
        // subLinks: apCourses.map((course) => ({
        //   href: `/services/ap/${course.slug}`,
        //   label: course.name,
        // })),
      },
      {
        href: "/services/sat",
        label: "SAT Prep",
        // subLinks: testprepCourses.map((course) => ({
        //   href: `/services/${course.slug}`,
        //   label: course.name,
        // })),
      },
      {
        href: "/services/act",
        label: "ACT Prep",
        // subLinks: testprepCourses.map((course) => ({
        //   href: `/services/${course.slug}`,
        //   label: course.name,
        // })),
      },
      {
        href: "/services/aime",
        label: "AIME Prep",
      },
      {
        href: "/services/usaco",
        label: "USACO Prep",
      },
      // {
      //   href: "/services/consulting",
      //   label: "Consulting",
      // },
    ],
  },
  // {
  //   label: "Events",
  //   href: "/events",
  // },
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
    image: "/team/woojin.png",
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
    image: "/team/abhinav.png",
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
