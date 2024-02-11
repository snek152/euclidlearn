import { apCourses, testprepCourses } from "@/lib/data";
import CourseModalButton, { CourseLinkButton } from "../CourseModalButton";
import CourseCard from "../CourseCard";
import SmallBanner from "@/components/SmallBanner";
import { LinkButton } from "@/components/Button";
import CourseLogistics from "../CourseLogistics";
import { Metadata } from "next";
import CourseBanner from "../CourseBanner";
import HomeSection from "@/app/components/HomeSection";
import tutoring from "@/images/tutoring.jpg";
import { svgThing } from "@/app/components/CourseFormatCard";

export const metadata: Metadata = {
  title: "EuclidLearn | AP Tutoring",
  openGraph: {
    type: "website",
    title: "EuclidLearn | AP Tutoring",
    url: "https://euclidlearn.com/services/ap",
  },
};

export default function AP() {
  return (
    <>
      <CourseBanner
        title={"AP Tutoring"}
        description={
          "Our comprehensive method involves detailed guidance, frequent assessments, ample hands-on practice, and timed exams. This prepares students thoroughly for their AP exams while ensuring a deep comprehension of the subject matter."
        }
      ></CourseBanner>
      {/* <section className="p-5">
        <h1 className="text-center font-dm text-4xl">
          Advanced Placement Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5 mx-10">
          {apCourses.map((course, i) => (
            <CourseLinkButton course={course} key={i} />
          ))}
        </div>
      </section> */}
      {/* <section className="p-5">
        <CourseLogistics {...testprepCourses[0].logistics} />
      </section> */}
      <section className="p-5">
        <HomeSection
          title="Get a High Score and College Credit"
          description="Nulla sit cillum tempor laboris. Dolore labore aliqua amet adipisicing amet deserunt proident id tempor sunt. Est velit in esse cillum laboris deserunt duis adipisicing. Aliquip culpa culpa eu tempor deserunt sit exercitation consectetur labore esse aute et eu. Lorem cillum excepteur cillum consectetur."
          imageSrc={tutoring}
          minimal
          reverse
        />
      </section>
      <section className="p-5">
        <h1 className="text-center font-dm text-4xl">Course Offerings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-2 gap-3">
          <div className="border border-navy p-2 rounded-lg shadow">
            <h1 className="font-dm text-3xl mb-3 text-center">Mathematics</h1>
            <div className="flex flex-col gap-2">
              {apCourses
                .filter((c) => c.type === "math")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg shadow">
            <h1 className="font-dm text-3xl mb-3 text-center">Engineering</h1>
            <div className="flex flex-col gap-2">
              {apCourses
                .filter((c) => c.type === "engineering")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg shadow">
            <h1 className="font-dm text-3xl mb-3 text-center">Sciences</h1>
            <div className="flex flex-col gap-2">
              {apCourses
                .filter((c) => c.type === "science")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg shadow">
            <h1 className="font-dm text-3xl mb-3 text-center">Humanities</h1>
            <div className="flex flex-col gap-2">
              {apCourses
                .filter((c) => c.type === "humanities")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5">
          {apCourses.map((course, i) => (
            <CourseModalButton course={course} key={i} />
          ))}
        </div> */}
      </section>
    </>
  );
}
