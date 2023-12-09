import { apCourses } from "@/lib/data";
import CourseModalButton from "../CourseModalButton";
import CourseCard from "../CourseCard";

export default function AP() {
  return (
    <div className="grid grid-cols-4 gap-2 mt-5 mx-10">
      {apCourses.map((course, i) => (
        <CourseCard course={course} key={i} />
      ))}
    </div>
  );
}
