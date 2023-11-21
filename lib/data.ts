import { NavLink } from "./types";

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

export const whyUsReasons = Array<string>(3).fill(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
