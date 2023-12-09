import { testprepCourses } from "@/lib/data";
import CourseModalButton from "../CourseModalButton";

export default function Testprep() {
  return (
    <section>
      <h1 id="testprep" className="text-center font-dm text-4xl">
        Standardized Test Prep
      </h1>
      <h2 className="text-center font-antic text-2xl pt-1">
        click to learn more
      </h2>
      <div className="grid grid-cols-4 gap-2 mt-5 mx-10">
        {testprepCourses.map((course, i) => (
          <CourseModalButton course={course} key={i} />
        ))}
      </div>
    </section>
  );
}
