import { apCourses } from "@/lib/data";
import { CourseLinkButton } from "../CourseModalButton";
import CourseCard from "../CourseCard";
import SmallBanner from "@/components/SmallBanner";
import { LinkButton } from "@/components/Button";

export default function AP() {
  return (
    <>
      <SmallBanner
        title={"AP Tutoring"}
        description="Your education experience starts here"
        sideDescription={
          "Our comprehensive method involves detailed guidance, frequent assessments, ample hands-on practice, and timed exams. This prepares students thoroughly for their AP exams while ensuring a deep comprehension of the subject matter."
        }
      >
        <LinkButton
          className="bg-navy text-white px-5 py-1 text-lg"
          hoverClass="bg-black bg-opacity-30 text-white"
          href="/register"
        >
          Register Now
        </LinkButton>
      </SmallBanner>
      <section>
        <h1 id="ap" className="text-center font-dm text-4xl">
          Advanced Placement Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5 mx-10">
          {apCourses.map((course, i) => (
            <CourseLinkButton course={course} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
