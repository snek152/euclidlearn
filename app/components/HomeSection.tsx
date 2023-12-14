import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HomeSectionProps {
  title: string;
  description: string;
  imageSrc: StaticImport;
  reverse?: boolean;
}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <section
      className={`relative grid grid-cols-8 h-full p-5 gap-5 place-items-center`}
    >
      <Image
        src={props.imageSrc}
        alt="A person helping another out"
        className={`col-span-3 aspect-[6/4] object-cover object-center rounded-3xl shadow-sm  ${
          props.reverse ? "order-1" : ""
        }`}
      />
      <div className="z-10 flex flex-col h-full gap-5 col-span-5 w-[95%] items-left justify-center p-5 py-10">
        <h1 className="font-dm text-4xl">{props.title}</h1>
        <h2 className="font-antic text-xl text-left max-w-[60ch]">
          {props.description}
        </h2>
      </div>
    </section>
  );
}
