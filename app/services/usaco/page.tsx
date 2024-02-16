import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";
import HomeSection from "@/app/components/HomeSection";
import code from "@/images/code.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EuclidLearn | USACO Prep",
  openGraph: {
    type: "website",
    title: "EuclidLearn | USACO Prep",
    url: "https://euclidlearn.com/services/usaco",
  },
};

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={"USA Computing Olympiad"}
        description={
          "Elevate your experience by working with a mentor from our team. Our mentors have extensive experience in competitive programming and have achieved top scores."
        }
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      <section className="p-5 mx-10">
        <HomeSection
          topText="About USACO"
          title="The USA Computing Olympiad"
          description="Euclid Learn excels in preparing students for the USA Computing Olympiad (USACO), a prestigious competition that demonstrates advanced problem solving ability. Beyond coding, the USACO instills a strategic problem-solving mindset, shaping analytical thinkers to excel beyond the competition."
          imageSrc={code}
          video="/USACOvideo.mp4"
          minimal
        />
        <HomeSection
          title="Private Lessons"
          description={`Lessons are designed around two fundamental principles:\n
          Every student has a different level of coding and problem-solving experience, which improves over time\n
          Mastering algorithmic programming requires regular practice and reflective learning\n
          Upon enrollment, our mentors conduct a thorough assessment of the student's existing programming profficency, then we develop a personalized syllabus based on the student's specific needs and aspirations. Throughout the entirety of their educational journey, students are paired with a dedicated mentor who guides them through every phase of advancement, starting from the foundational levels of USACO Bronze and potentially progressing to the more advanced terrain of USACO Platinum.`}
          imageSrc={code}
          reverse
          minimal
        />
      </section>
      <section className="p-5 mx-10">
        <h1 className="font-dm text-4xl text-center mb-2">
          A Bottom-Up Approach
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <CourseCard
            name="USACO Bronze"
            desc="At the bronze level, students build on their programming fundamentals, designing relatively simple algorithms to solve various problems. Students are exposed to fundamental techniques like sorting and recursion."
            center
            to="to-orange-300"
          />
          <CourseCard
            name="USACO Silver"
            desc="At the silver level, students begin learning real-world data structures and algorithms. Students learn how to process data using sets, efficiently find items via binary search, and traverse graphs via Depth First Search."
            center
            to="to-gray"
          />
          <CourseCard
            name="USACO Gold"
            desc="At the gold level, problems often require multiple steps combined with key deductions. Students learn data structures like Fenwick Trees, Disjoint Set Unions, and more, along with famous algorithms like Dijkstra's Algorithm."
            center
            to="to-amber-400"
          />
          <CourseCard
            name="USACO Platinum"
            desc="At the platinum level, problems become extremely challenging, as the full array of techniques and algorithms used in competitive programming can appear. The top 24 contestants are invited to the USA National Training camp."
            center
            to="to-zinc-900"
          />
        </div>
      </section>
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
