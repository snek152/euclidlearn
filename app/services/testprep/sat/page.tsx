import { testprepCourses } from "@/lib/data";
import CourseBanner from "../../CourseBanner";
import CourseLogistics from "../../CourseLogistics";

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={testprepCourses[0].name}
        description={testprepCourses[0].desc}
        backTo="Test Prep"
        backToHref="/services/testprep"
      />
      <CourseLogistics {...testprepCourses[0].logistics} />
    </section>
  );
}
