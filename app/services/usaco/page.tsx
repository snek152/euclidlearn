import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";
import HomeSection from "@/app/components/HomeSection";
import mentor from "@/images/mentor.png";
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
          "Euclid Learn excels in preparing students for the USA Computing Olympiad (USACO), a prestigious competition that demonstrates advanced problem solving ability. Beyond coding, the USACO instills a strategic problem-solving mindset, shaping analytical thinkers to excel beyond the competition."
        }
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      <section className="p-5">
        <HomeSection
          topText="About USACO"
          title="The USA Computing Olympiad"
          description="Dolore in non velit tempor ut irure reprehenderit duis ut labore. Fugiat tempor anim eu elit labore pariatur esse consectetur laborum velit tempor et culpa officia. Nostrud nulla ipsum est officia deserunt laboris id proident eiusmod labore est. Nisi laboris exercitation ut ullamco sint occaecat deserunt adipisicing commodo consequat est aute quis. "
          imageSrc={mentor}
          minimal
        />
        <HomeSection
          title="Private Lessons"
          description="Dolore in non velit tempor ut irure reprehenderit duis ut labore. Fugiat tempor anim eu elit labore pariatur esse consectetur laborum velit tempor et culpa officia. Nostrud nulla ipsum est officia deserunt laboris id proident eiusmod labore est. Nisi laboris exercitation ut ullamco sint occaecat deserunt adipisicing commodo consequat est aute quis. "
          imageSrc={mentor}
          video="/USACOvideo.mp4"
          reverse
          minimal
        />
      </section>
      <section className="p-5">
        <h1 className="font-dm text-4xl text-center mb-2">
          A Bottom-Up Approach
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <CourseCard
            name="USACO Bronze"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-orange-300"
          />
          <CourseCard
            name="USACO Silver"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-gray"
          />
          <CourseCard
            name="USACO Gold"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-amber-400"
          />
          <CourseCard
            name="USACO Platinum"
            desc="Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur. Lorem minim magna pariatur consequat duis consectetur."
            center
            to="to-zinc-900"
          />
        </div>
      </section>
      <CourseLogistics {...testprepCourses[1].logistics} />
    </section>
  );
}
