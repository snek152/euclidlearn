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

      <CourseCard
        name="Practical Application in the Real World"
        desc="Participating in the USACO opens doors for students to delve into the world of competitive programming, algorithms, and code design. Whether navigating Computer Science courses in university or facing coding interviews with leading tech giants such as Apple, Amazon, or Tesla, students can leverage their USACO experience. Throughout this journey, they will acquire essential coding skills, including effective debugging practices, thorough time complexity analysis, and more"
        center
      />
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
