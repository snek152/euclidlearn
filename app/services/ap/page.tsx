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
      <section className="p-5 mx-10">
        <HomeSection
          title="Get a High Score and College Credit"
          description="Nulla sit cillum tempor laboris. Dolore labore aliqua amet adipisicing amet deserunt proident id tempor sunt. Est velit in esse cillum laboris deserunt duis adipisicing. Aliquip culpa culpa eu tempor deserunt sit exercitation consectetur labore esse aute et eu. Lorem cillum excepteur cillum consectetur."
          imageSrc={tutoring}
          minimal
          reverse
        />
      </section>
      <section className="p-5 mx-10">
        <h1 className="text-center font-dm pb-2 text-4xl">Course Offerings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-2 gap-3">
          <div className="border border-navy p-2 flex flex-col items-center rounded-lg shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 aspect-square"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
              />
            </svg>
            <h1 className="font-dm text-3xl mb-3 text-center">Mathematics</h1>
            <div className="flex flex-col w-full gap-2">
              {apCourses
                .filter((c) => c.type === "math")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg flex flex-col items-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h1 className="font-dm text-3xl mb-3 text-center">Engineering</h1>
            <div className="flex flex-col gap-2 w-full">
              {apCourses
                .filter((c) => c.type === "engineering")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg flex flex-col items-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            <h1 className="font-dm text-3xl mb-3 text-center">Sciences</h1>
            <div className="flex flex-col gap-2 w-full">
              {apCourses
                .filter((c) => c.type === "science")
                .map((course, i) => (
                  <CourseModalButton course={course} key={i} />
                ))}
            </div>
          </div>
          <div className="border border-navy p-2 rounded-lg flex flex-col items-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <h1 className="font-dm text-3xl mb-3 text-center">Humanities</h1>
            <div className="flex flex-col gap-2 w-full">
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
