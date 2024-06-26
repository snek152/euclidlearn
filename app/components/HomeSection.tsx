import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HomeSectionProps {
  title: string;
  description: string;
  imageSrc: StaticImport;
  reverse?: boolean;
  minimal?: boolean;
  video?: string;
  topText?: string;
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
          muted
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
        {props.topText && (
          <h2 className="font-dekko text-lg leading-3 uppercase">
            {props.topText}
          </h2>
        )}
        <h1
          className={`font-dm ${
            props.minimal ? "text-[2.5rem] leading-[3rem]" : "text-4xl"
          }`}
        >
          {props.title}
        </h1>
        <h2
          className={`font-antic ${
            props.minimal ? "text-xl" : "text-xl"
          } text-left`}
        >
          {props.description.includes("\n") ? (
            <>
              {props.description.split("\n")[0]}
              <ol className="list-decimal list-inside py-2 space-y-1">
                {props.description
                  .split("\n")
                  .filter((d) => d !== "")
                  .slice(
                    1,
                    props.description.split("\n").filter((d) => d !== "")
                      .length - 1
                  )
                  .map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ol>
              {
                props.description.split("\n")[
                  props.description.split("\n").length - 1
                ]
              }
            </>
          ) : (
            props.description
          )}
        </h2>
      </div>
    </section>
  );
}
