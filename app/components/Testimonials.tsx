"use client";
import Carousel from "react-grid-carousel";

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

const Testimonial = (props: {
  name: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-lightblue backdrop-blur-sm bg-opacity-10 py-5 w-full md:w-[calc(100%-2*44px)] px-10 h-full rounded-xl mx-auto z-20">
      <p className="font-antic text-lg md:text-2xl">{props.content}</p>
      <h1 className="font-dm text-lg md:text-2xl">{props.name}</h1>
      <h2 className="font-dekko text-lg md:text-2xl">{props.title}</h2>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="relative mb-10">
      <svg
        className="absolute w-full md:min-w-0 -top-[7vw] z-0 rotate-180"
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
      </svg>
      <Carousel
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
        <Carousel.Item>
          <Testimonial
            name="Snehil Kakani"
            title="Web Developer"
            content="Duis qui quis ad non. Aliqua sit qui magna aute officia dolor consectetur sit culpa dolor mollit duis labore velit. Ut ad anim minim mollit voluptate culpa elit incididunt. Labore fugiat aliqua dolore magna nulla incididunt aute aute. Sint qui magna adipisicing magna fugiat."
          />
        </Carousel.Item>
        <Carousel.Item>
          <Testimonial
            name="Snehil Kakani"
            title="Web Developer"
            content="Duis qui quis ad non. Aliqua sit qui magna aute officia dolor consectetur sit culpa dolor mollit duis labore velit. Ut ad anim minim mollit voluptate culpa elit incididunt. Labore fugiat aliqua dolore magna nulla incididunt aute aute. Sint qui magna adipisicing magna fugiat."
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
