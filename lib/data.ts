import { NavLink, TeamMember } from "./types";

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    label: "About Us",
    subLinks: [
      {
        href: "/team",
        label: "Meet the Team",
      },
      {
        href: "/join",
        label: "Join Us",
      },
    ],
  },
  {
    label: "Programs",
    subLinks: [
      {
        href: "/courses",
        label: "Courses",
      },
      {
        href: "/consulting",
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
