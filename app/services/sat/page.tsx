import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";
import CourseFormatCard from "@/app/components/CourseFormatCard";

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={testprepCourses[0].name}
        description={testprepCourses[0].desc}
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      <section className="p-5">
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
      </section>
      <section className="p-5">
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <CourseFormatCard
              key={i}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-36"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              }
              title="Higher Score Guaranteed"
              content="Commodo elit ex ea est mollit aliqua exercitation."
            />
          ))}
        </div>
      </section>
      <CourseLogistics {...testprepCourses[0].logistics} />
    </section>
  );
}
