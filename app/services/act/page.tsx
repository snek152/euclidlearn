import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EuclidLearn | ACT Prep",
  openGraph: {
    type: "website",
    title: "EuclidLearn | ACT Prep",
    url: "https://euclidlearn.com/services/act",
  },
};

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={testprepCourses[1].name}
        description={testprepCourses[1].desc}
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      {testprepCourses[1].curriculum.map((unit, i) => (
        // <div className="p-5" key={i}>
        //   <h1 className="font-dm text-3xl">{unit}</h1>
        <CourseCard
          key={i}
          name={`Week ${i + 1}: ${unit}`}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
        />
        // </div>
      ))}
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
