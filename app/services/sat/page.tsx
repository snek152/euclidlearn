import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={testprepCourses[0].name}
        description={testprepCourses[0].desc}
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      {testprepCourses[0].curriculum.map((unit, i) => (
        // <div className="p-5" key={i}>
        //   <h1 className="font-dm text-3xl">{unit}</h1>
        <CourseCard
          key={i}
          name={`Week ${i + 1}: ${unit}`}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
        />
        // </div>
      ))}
      <CourseLogistics {...testprepCourses[0].logistics} />
    </section>
  );
}
