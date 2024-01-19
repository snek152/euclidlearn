import { apCourses } from "@/lib/data";
import CourseCard from "../../CourseCard";
import CourseBanner from "../../CourseBanner";

export default function APpage({ params }: { params: { slug: string } }) {
  const course = apCourses.find((course) => course.slug === params.slug)!;
  return (
    <section>
      <CourseBanner
        title={course?.name}
        description={course.desc}
        backTo="AP Courses"
        backToHref="/services/ap"
      />
      <section className="">
        <h1 className="font-dm text-4xl text-center">Course Curriculum</h1>
        {course.curriculum.map((unit, i) => (
          // <div className="p-5" key={i}>
          //   <h1 className="font-dm text-3xl">{unit}</h1>
          <CourseCard
            key={i}
            name={`Week ${i + 1}: ${unit}`}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
          />
          // </div>
        ))}
      </section>
    </section>
  );
}

export async function generateStaticParams() {
  const slugs = apCourses.map((course) => course.slug);
  return slugs.map((slug) => ({ params: { slug } }));
}
