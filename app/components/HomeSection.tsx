import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HomeSectionProps {
  title: string;
  description: string;
  imageSrc: StaticImport;
  reverse?: boolean;
  minimal?: boolean;
  video?: string;
}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <section
      className={`relative grid md:grid-cols-8 grid-cols-1 h-full ${
        props.minimal ? "p-0" : "p-5"
      } gap-5 place-items-center`}
    >
      {props.video ? (
        <video
          src={props.video}
          autoPlay
          loop
          controls={false}
          className={`md:col-span-3 aspect-[6/4] object-cover object-center rounded-3xl shadow-sm  ${
            props.reverse ? "md:order-1" : ""
          }`}
        ></video>
      ) : (
        <Image
          src={props.imageSrc}
          alt={props.description}
          className={`md:col-span-3 aspect-[6/4] object-cover object-center rounded-3xl shadow-sm  ${
            props.reverse ? "md:order-1" : ""
          }`}
        />
      )}
      <div
        className={`z-10 flex flex-col h-full md:col-span-5 w-[95%] items-left justify-center ${
          props.minimal ? "gap-1 md:gap-2" : "md:px-5 md:py-10 gap-2 md:gap-5 "
        }`}
      >
        <h1
          className={`font-dm ${
            props.minimal ? "text-[2.5rem] leading-10" : "text-4xl"
          }`}
        >
          {props.title}
        </h1>
        <h2 className="font-antic text-xl text-left max-w-[60ch]">
          {props.description}
        </h2>
      </div>
    </section>
  );
}
