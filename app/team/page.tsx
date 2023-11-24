import SmallBanner from "@/components/SmallBanner";
import Link from "next/link";
import TeamCard from "./components/TeamCard";
import image from "@/images/trusted.png";

export default function About() {
  return (
    <>
      <SmallBanner
        title="Our Team"
        description="Your education experience starts here"
        sideDescription="Our team is composed of diligent top-performing students with prestigious awards, high standardized test scores, and extensive teaching experience."
      >
        <Link
          href="/join"
          className="font-dekko text-white text-lg bg-blue px-10 h-full py-1 rounded-full shadow-sm"
        >
          Join Us
        </Link>
      </SmallBanner>
      <section className="h-96">
        <TeamCard
          name="Woojin Yoon"
          role="President and Lead Consultant"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={image}
        />
      </section>
    </>
  );
}
