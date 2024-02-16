import Image from "next/image";
import bg from "@/images/background.svg";
import CourseFormatCard from "./components/CourseFormatCard";
import { LinkButton } from "@/components/Button";
import HomeSection from "./components/HomeSection";

import trusted from "@/images/trusted.png";
import mentor from "@/images/mentor.png";
import results from "@/images/results.png";
import CourseCard from "./components/CourseCard";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Price from "./components/Price";

export default function Home() {
  return (
    <>
      <section className="bg-blue/60 h-80 pt-20 mb-10 relative flex justify-center">
        <div className="z-10 flex flex-col h-full gap-3 w-[95%] justify-center p-5">
          <h1 className="font-dm text-3xl md:text-5xl">
            Student Oriented Academic Coaching
          </h1>
          <h2 className="font-antic text-lg md:text-2xl max-w-[50ch]">
            Providing Guidance, One Student at a Time
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            <LinkButton
              href="/register"
              className="text-white bg-red text-lg px-4 py-1"
              hoverClass="text-white bg-navy bg-opacity-10"
            >
              Course Registration
            </LinkButton>
            <LinkButton
              href="/register"
              className="text-white bg-navy text-lg px-4 py-1"
              hoverClass="text-white bg-black bg-opacity-30"
            >
              Join Our Team
            </LinkButton>
          </div>
        </div>
        <svg
          className="absolute top-80 origin-top scale-y-75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6096ba"
            fillOpacity="0.6"
            d="M0,128L40,154.7C80,181,160,235,240,245.3C320,256,400,224,480,202.7C560,181,640,171,720,176C800,181,880,203,960,192C1040,181,1120,139,1200,122.7C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <Image
          loading="eager"
          src={bg}
          fill
          alt="A grid of graduation caps"
          className="absolute w-full animate-wave [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.1))] !h-[calc(100%+6vw)] z-0 opacity-80 object-cover select-none"
          draggable={false}
        />
      </section>
      <section className="p-5">
        <h1 className="font-dm text-4xl mb-5 text-center">What We Offer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5">
          <CourseCard title="AP" href="/services/ap" />
          <CourseCard title="SAT" href="/services/sat" />
          <CourseCard title="ACT" href="/services/act" />
          <CourseCard title="AIME" href="/services/aime" />
          <CourseCard title="USACO" href="/services/usaco" />
          {/* <CourseCard title="Consulting" href="/services/consulting" /> */}
        </div>
      </section>
      <HomeSection
        title="Redefining the Learning Experience"
        description="With cutting-edge strategies and innovative techniques, our students consistently exceed benchmarks, employing personalized plans and continuous assessment to align with individual learning styles and identify areas for growth, all while seamlessly integrating technology to elevate the learning experience."
        imageSrc={mentor}
      />
      {/* <HomeSection
        title="Trusted by Top Institutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageSrc={trusted}
        reverse
      /> */}
      <HomeSection
        title="Delivering Results within Days"
        description="At our institution, students thrive through significant academic, extracurricular, and personal advancements, guided by our accomplished mentors who provide precise guidance for impactful results, all achieved in a remarkably short period of time"
        imageSrc={trusted}
        reverse
      />
      <HomeSection
        title="24/7 Access to Private Mentors"
        description="Our mentors are available round-the-clock to provide support across all subjects. We firmly believe continuous mentorship significantly accelerates progress, ensuring unparalleled advancement for our students."
        imageSrc={results}
      />
      <section className="p-5 pb-5">
        <h1 className="font-dm text-center text-4xl">Why Us?</h1>
        <div className="grid md:grid-cols-3 gap-5 py-4 pb-5">
          <CourseFormatCard
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
            title="One on One Learning"
            content="Students connect with our mentors individually via Google Meet for private lessons, ensuring focused attention and personalized guidance."
          />
          <CourseFormatCard
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
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            }
            title="Developing Conceptual Understanding"
            content="Mentors personalize student solutions based on diagnostics and teach in an efficient manner by presenting uniquely insightful problems."
          />
          <CourseFormatCard
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
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            }
            title="Students Come First"
            content="Lessons are taught with the student in mind and we prioritize and optimize performance on the assessments they want to focus on."
          />
        </div>
      </section>
      <section className="p-5">
        <h1 className="font-dm text-center text-4xl">Our Accomplishments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-4 pb-5">
          <CourseFormatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-20 stroke-navy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            }
            title="1420 SAT Average"
            content=""
          />
          <CourseFormatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-20 stroke-navy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            }
            title="18% Testing Improvement"
            content=""
          />
          <CourseFormatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-20 stroke-navy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            }
            title="3+ Platinum Promotions"
            content=""
          />
          <CourseFormatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-20 stroke-navy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            }
            title="3+ AIME Qualifiers"
            content=""
          />
        </div>
      </section>
      {/* <section className="p-5">
        <h1 className="font-dm text-4xl">Why Us</h1>
        <div className="space-y-5 pt-5">
          {whyUsReasons.map((reason, i) => (
            <div
              key={i}
              className="bg-lightblue bg-opacity-30 px-5 py-3 flex w-full items-center"
            >
              <h1 className="font-dm text-4xl w-8">{i + 1}</h1>
              <p className="font-antic text-xl">{reason}</p>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section className="p-5 z-20">
        <h1 className="font-dm text-4xl">Pricing</h1>
        <div className="flex p-5">
          <div className="w-[25%] flex flex-col items-center">
            <h1 className="font-dm text-6xl">$5</h1>
            <h2 className="font-antic text-3xl">per session</h2>
          </div>
        </div>
      </section> */}
      <h1 className="font-dm text-4xl pl-5 pb-2 text-center">Testimonials</h1>
      <h2 className="font-antic pb-5 text-lg text-center">
        Are you a student? Submit your testimonial{" "}
        <a
          href="https://g.page/r/CQvJx7RqwgeSEAI/review"
          target="_blank"
          rel="noreferrer noopener"
          className="text-navy underline underline-offset-1"
        >
          here.
        </a>
      </h2>
      <Testimonials />
      <section className="p-5 pt-10 scroll-m-12" id="price">
        <h1 className="font-dm text-4xl pb-2 text-center">
          Online Mentorship Plans
        </h1>
        <h2 className="font-antic pb-5 text-lg text-center">
          Students connect with mentors via Zoom for personalized lessons.
          Depending on the student{"'"}s goals, lessons may include test
          preparation, lectures, problem solving, and study strategies. At the
          end of each session, mentors will develop action items with students
          to perfect the lessons focus, assign homework problems, and share
          lecture videos/slides for students to review.
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <Price
            pricing="$70"
            classType="Private Lessons"
            benefits={["1 student", "Gold Mentor", "1 office hour/week"]}
            className="border border-red border-opacity-50 rounded-xl shadow-md"
          />
          <Price
            pricing="$90"
            classType="Premium Private Lessons"
            benefits={["1 student", "Platinum Mentor", "1 office hour/week"]}
            className="border border-red border-opacity-50 rounded-xl shadow-md"
          />
        </div>
      </section>
      <FAQ />
    </>
  );
}
