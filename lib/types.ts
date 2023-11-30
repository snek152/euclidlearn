import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavLink = {
  href?: string;
  label: string;
  subLinks?: NavLink[];
};

export type TeamMember = {
  name: string;
  role: string;
  quals: string[];
  bio: string;
  image: string;
};

export type Course = {
  name: string;
  desc: string;
};
