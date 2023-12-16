import { apCourses } from "@/lib/data";
import { CourseLinkButton } from "../CourseModalButton";
import CourseCard from "../CourseCard";

export default function AP() {
  return (
    <section>
      <h1 id="ap" className="text-center font-dm text-4xl">
        Advanced Placement Courses
      </h1>
      <div className="grid grid-cols-4 gap-2 mt-5 mx-10">
        {apCourses.map((course, i) => (
          <CourseLinkButton course={course} key={i} />
        ))}
      </div>
    </section>
  );
}
