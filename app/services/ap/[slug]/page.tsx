import { apCourses } from "@/lib/data";
import CourseCard from "../../CourseCard";
import CourseBanner from "../../CourseBanner";

export default function APpage({ params }: { params: { slug: string } }) {
  const course = apCourses.find((course) => course.slug === params.slug)!;
  return (
    <div>
      <CourseBanner title={course?.name} description={course.desc} />
      {course ? <CourseCard course={course} /> : <div>Course not found</div>}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = apCourses.map((course) => course.slug);
  return slugs.map((slug) => ({ params: { slug } }));
}
