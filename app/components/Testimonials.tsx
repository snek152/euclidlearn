"use client";
import Carousel from "react-grid-carousel";
import { svgThing } from "./CourseFormatCard";

const ArrowButton = (props: { side: "left" | "right" }) => {
  const icon =
    props.side === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    );

  return (
    <button
      className={`rounded-full bg-navy text-white absolute z-20 p-2 grid place-items-center top-[calc(50%-22px)] ${
        props.side === "left" ? "left-1" : "right-1"
      }`}
    >
      {icon}
    </button>
  );
};

const Testimonial = (props: { name: string; content: string }) => {
  return (
    <div className="py-5 w-full h-full px-5 z-20">
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            key={i}
            viewBox="0 0 24 24"
            // fill="currentColor"
            className="w-6 h-6 fill-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        <span className="ml-3 text-base font-dekko">Rated 5/5</span>
      </div>
      <p className="font-antic text-base md:text-xl font-semibold">
        {props.content}
      </p>
      <h1 className="font-antic text-base md:text-xl pt-2">-{props.name}</h1>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative rounded-2xl border-red border-opacity-50 border shadow-sm mx-5 grid grid-cols-3 divide-x divide-red divide-opacity-50 group">
      {/* <svg
        className="absolute w-screen md:min-w-0 -left-5 -top-[7vw] z-0 rotate-180"
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(237, 240, 243, 1)" offset="0%"></stop>
            <stop stopColor="rgba(96, 150, 186, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,294L48,285.8C96,278,192,261,288,269.5C384,278,480,310,576,294C672,278,768,212,864,212.3C960,212,1056,278,1152,318.5C1248,359,1344,376,1440,359.3C1536,343,1632,294,1728,245C1824,196,1920,147,2016,122.5C2112,98,2208,98,2304,130.7C2400,163,2496,229,2592,285.8C2688,343,2784,392,2880,343C2976,294,3072,147,3168,106.2C3264,65,3360,131,3456,179.7C3552,229,3648,261,3744,277.7C3840,294,3936,294,4032,269.5C4128,245,4224,196,4320,212.3C4416,229,4512,310,4608,310.3C4704,310,4800,229,4896,187.8C4992,147,5088,147,5184,163.3C5280,180,5376,212,5472,196C5568,180,5664,114,5760,98C5856,82,5952,114,6048,130.7C6144,147,6240,147,6336,147C6432,147,6528,147,6624,187.8C6720,229,6816,310,6864,351.2L6912,392L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
        ></path>
      </svg> */}
      {/* <Carousel
        cols={1}
        rows={1}
        gap={100}
        loop
        showDots
        dotColorActive="#274C77"
        dotColorInactive="#8B8C89"
        arrowLeft={<ArrowButton side="left" />}
        arrowRight={<ArrowButton side="right" />}
        mobileBreakpoint={0}
      >
        <Carousel.Item> */}
      <Testimonial
        name="Charlie (Las Vegas, NV)"
        content="Anirudh is an excellent mentor that helped me prepare for the SAT. His knowledge and experience in the SAT is unmatched. I would highly recommend him for any level of SAT preparation. He is a very friendly and patient person, who is great at explaining difficult problems through clear diagrams and examples. Thanks to him, preparing for the SAT wasn't as scary as I had imagined, and I ended up doing pretty well!"
      />
      {/* </Carousel.Item>
        <Carousel.Item> */}
      <Testimonial
        name="Daniel (San Jose, CA)"
        content="Euclid Learn helped me develop a strategic plan to navigate high school by clarifying what I should prioritize. Through Abhinav's guidance, I was able to publish my research paper in a respectable journal. Furthermore, his suggestions improved my grades, time management, and confidence in my abilities. I recommend Abhinav for anyone who is trying to prioritize their academic goals."
      />
      {/* </Carousel.Item>
        <Carousel.Item> */}
      <Testimonial
        name="Anna (Tribeca, NY)"
        content="Euclid Learn has done an excellent job of solidifying my daughter's understanding of calculus. My daughter significantly improved her testing average and grades in a short period of time. In essence, these classes identify the real questions that appear on assessments and provide solutions in a way that is simple for the student to comprehend.  We are grateful to Abhinav for giving our daughter such a positive learning environment throughout the summer."
      />
      {/* </Carousel.Item>
      </Carousel> */}
      {svgThing}
    </section>
  );
}
