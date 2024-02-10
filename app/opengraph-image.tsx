import { LinkButton } from "@/components/Button";
import { ImageResponse } from "next/server";
import Image from "next/image";
import bg from "@/images/background.svg";
import CourseCard from "./components/CourseCard";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
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
            className="absolute top-80"
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
            className="absolute w-full animate-wave [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.1))] !h-[calc(100%+7vw)] z-0 opacity-80 object-cover select-none"
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
      </>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
