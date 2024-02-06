"use client";

import { useRouter } from "next/navigation";

const svgThing = (
  <svg
    viewBox="0 0 384 12"
    fill="none"
    aria-hidden="true"
    className="absolute right-0 top-full w-full -translate-x-5 group-hover:opacity-100 opacity-25 max-w-[120%] transition duration-150"
  >
    <mask
      id=":r3:-a"
      maskUnits="userSpaceOnUse"
      x={48}
      y={0}
      width={269}
      height={4}
      style={{ maskType: "alpha" }}
    >
      <path
        transform="rotate(180 316.656 4)"
        fill="#C4C4C4"
        d="M316.656 4h268v4h-268z"
      />
    </mask>
    <g filter="url(#:r3:-b)" mask="url(#:r3:-a)">
      <path
        transform="rotate(180 292.656 1)"
        fill="url(#:r3:-c)"
        d="M292.656 1h220v2h-220z"
      />
    </g>
    <mask
      id=":r3:-d"
      maskUnits="userSpaceOnUse"
      x={116}
      y={0}
      width={268}
      height={12}
      style={{ maskType: "alpha" }}
    >
      <path
        transform="rotate(180 384 12)"
        fill="#C4C4C4"
        d="M384 12h268v12H384z"
      />
    </mask>
    <g filter="url(#:r3:-e)" mask="url(#:r3:-d)">
      <path
        transform="rotate(180 360 1)"
        fill="url(#:r3:-f)"
        d="M360 1h220v2H360z"
      />
    </g>
    <defs>
      <linearGradient
        id=":r3:-c"
        x1="292.656"
        y1={1}
        x2="512.656"
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A78BFA" stopOpacity={0} />
        <stop offset=".323" stopColor="#A78BFA" />
        <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
        <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id=":r3:-f"
        x1={360}
        y1={1}
        x2={580}
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A78BFA" stopOpacity={0} />
        <stop offset=".323" stopColor="#A78BFA" />
        <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
        <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
      </linearGradient>
      <filter
        id=":r3:-b"
        x="71.656"
        y={-2}
        width={222}
        height={4}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation=".5"
          result="effect1_foregroundBlur_311_43467"
        />
      </filter>
      <filter
        id=":r3:-e"
        x={131}
        y={-10}
        width={238}
        height={20}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation="4.5"
          result="effect1_foregroundBlur_311_43467"
        />
      </filter>
    </defs>
  </svg>
);

export interface CourseCardProps {
  title: string;
  href: string;
}

export default function CourseCard(props: CourseCardProps) {
  const router = useRouter();
  return (
    <button
      className="rounded-2xl bg-white group border-black md:border-red md:border-opacity-10 border shadow-sm flex flex-col relative p-4 justify-start items-center border-opacity-5 hover:border-black hover:border-opacity-50 transition-colors duration-500"
      onMouseEnter={() => {
        // router.prefetch(props.href.split("#")[0]);
      }}
      onClick={() => {
        // router.prefetch(props.href.split("#")[0]);
        router.push(props.href);
        // if (props.href.indexOf("#") != -1)
        // console.log(props.href.split("#")[1]);
        // console.log(document.getElementById(props.href.split("#")[1]));
        // document
        //   .getElementById(props.href.split("#")[1])
        //   ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <h1 className="font-dm text-2xl text-center">{props.title}</h1>
      {svgThing}
    </button>
  );
}
