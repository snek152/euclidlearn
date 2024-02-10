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
        <h1 className="font-dm text-4xl text-center mb-2">
          A Bottom-Up Approach
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <CourseCard
            name="USACO Bronze"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-orange-300"
          />
          <CourseCard
            name="USACO Silver"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-gray"
          />
          <CourseCard
            name="USACO Gold"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-amber-400"
          />
          <CourseCard
            name="USACO Platinum"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-zinc-900"
          />
        </div>
      </section>
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
