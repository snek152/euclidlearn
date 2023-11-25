import SmallBanner from "@/components/SmallBanner";
import Link from "next/link";
import TeamCard from "./components/TeamCard";
import image from "@/images/trusted.png";
import { LinkButton } from "@/components/Button";

export default function About() {
  return (
    <>
      <SmallBanner
        title="Our Team"
        description="Your education experience starts here"
        sideDescription="Our team is composed of diligent top-performing students with prestigious awards, high standardized test scores, and extensive teaching experience."
      >
        <LinkButton
          href="/register"
          className="text-white bg-blue text-lg px-10 py-1"
          hoverClass="text-white bg-navy bg-opacity-30"
        >
          Join Us
        </LinkButton>
      </SmallBanner>
      <section className="">
        <TeamCard
          name="Woojin Yoon"
          role="President and Lead Consultant"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={image}
          quals={[
            "Two Time AIME Qualifier",
            "Distinguished Honor Roll Top 1%",
            "1560 SAT Score",
          ]}
        />
        <TeamCard
          name="Abhinav Raja"
          role="Vice President"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={image}
          quals={[
            "Three Time AIME Qualifier",
            "Distinguished Honor Roll Top 1%",
            "USACO Platinum",
            "36 ACT Score",
            "STEM Expert",
          ]}
        />
        <TeamCard
          name="Anirudh Shyam"
          role="Secretary and Lead Teacher"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={image}
          quals={[
            "1580 SAT Score",
            "College Essay Mentor",
            "4 Years of Mentoring Experience",
          ]}
        />
      </section>
    </>
  );
}
