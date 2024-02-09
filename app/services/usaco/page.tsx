import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={"USA Computing Olympiad"}
        description={
          "Euclid Learn excels in preparing students for the USA Computing Olympiad (USACO), a prestigious competition that demonstrates advanced problem solving ability. Beyond coding, the USACO instills a strategic problem-solving mindset, shaping analytical thinkers to excel beyond the competition."
        }
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      <section className="p-5">
        <h1 className="font-dm text-4xl text-center">A Bottom-Up Approach</h1>
        <div className="grid grid-cols-4 gap-3">
          <CourseCard
            name="USACO Bronze"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
          />
          <CourseCard
            name="USACO Silver"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
          />
          <CourseCard
            name="USACO Gold"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
          />
          <CourseCard
            name="USACO Platinum"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
          />
        </div>
      </section>
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
