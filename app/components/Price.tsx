import { svgThing } from "./CourseFormatCard";

interface PriceProps {
  pricing: string;
  classType: string;
  benefits: string[];
  className: string;
}

export default function Price(props: PriceProps) {
  return (
    <div className={`p-5 group relative ${props.className}`}>
      <span className="uppercase font-dekko text-base bg-navy text-white px-2 py-1 rounded-sm shadow-sm">
        {props.classType}
      </span>
      <h1 className="flex text-7xl py-2 gap-2 items-center font-dm">
        {props.pricing}
        <span className="text-lg font-antic">per hour</span>
      </h1>
      <hr />
      <ul className="flex flex-col pt-2 text-2xl font-antic list-none">
        {props.benefits.map((b, i) => (
          <li key={i} className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-navy"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      {svgThing}
    </div>
  );
}
