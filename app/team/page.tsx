import SmallBanner from "@/components/SmallBanner";
import Link from "next/link";
import TeamCard from "./components/TeamCard";
import image from "@/images/trusted.png";
import { LinkButton } from "@/components/Button";
import { teamMembers } from "@/lib/data";

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
          className="text-white bg-red text-lg px-10 py-1"
          hoverClass="text-white bg-navy bg-opacity-10"
        >
          Join Us
        </LinkButton>
      </SmallBanner>
      <section>
        {teamMembers.map(({ bio, ...rest }, i) => (
          <TeamCard description={bio} {...rest} key={i} />
        ))}
      </section>
    </>
  );
}
