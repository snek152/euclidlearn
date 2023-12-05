import { apCourses } from "@/lib/data";
import CourseModalButton from "./CourseModalButton";

export default function AP() {
  return (
    <section className="h-96">
      <h1 id="ap" className="text-center font-dm text-4xl">
        Advanced Placement Courses
      </h1>
      <h2 className="text-center font-antic text-2xl pt-1">
        click to learn more
      </h2>
      <div className="grid grid-cols-4 gap-2 mt-5 mx-10">
        {apCourses.map((course, i) => (
          <CourseModalButton course={course} key={i} />
        ))}
      </div>
    </section>
  );
}
