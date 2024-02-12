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
          <li key={i}>- {b}</li>
        ))}
      </ul>
      {svgThing}
    </div>
  );
}
