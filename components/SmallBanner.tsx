import Image from "next/image";
import bg from "@/images/background.svg";

export interface SmallBannerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  sideDescription?: string;
}

export default function SmallBanner(props: SmallBannerProps) {
  return (
    <section className="bg-blue/60 h-72 pt-16 md:pt-14 px-2 md:px-7 mb-10 relative flex flex-col md:flex-row items-center justify-center">
      <div className="z-10 flex flex-col h-full md:gap-3 w-[95%] justify-center md:p-5">
        <h1 className="font-dm text-3xl md:text-5xl">{props.title}</h1>
        <h2 className="font-antic text-xl pb-2 md:pb-0 md:text-2xl max-w-[50ch]">
          {props.description}
        </h2>
        <div className="flex gap-3">{props.children}</div>
      </div>
      {props.sideDescription && (
        <p className="z-10 font-antic text-base md:text-xl pl-3 pt-2 md:p-0 md:text-center">
          {props.sideDescription}
        </p>
      )}
      <svg
        className="absolute top-72 z-0"
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
        src={bg}
        fill
        alt="A grid of graduation caps"
        className="absolute w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2))] !h-[calc(100%+7vw)] z-0 opacity-80 object-cover select-none"
        draggable={false}
        loading="eager"
      />
    </section>
  );
}
