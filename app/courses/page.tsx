import { LinkButton } from "@/components/Button";
import SmallBanner from "@/components/SmallBanner";

export default function Courses() {
  return (
    <>
      <SmallBanner
        title="What We Teach"
        description="Your education experience starts here"
        sideDescription="We tailor to individual learning styles, providing personalized learning experiences to optimize comprehension and retention."
      >
        <LinkButton
          className="bg-navy text-white px-5 py-1 text-lg"
          hoverClass="bg-black bg-opacity-30 text-white"
          href="/register"
        >
          Register Now
        </LinkButton>
      </SmallBanner>
    </>
  );
}
