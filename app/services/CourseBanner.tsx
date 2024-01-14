import Image from "next/image";
import bg from "@/images/background.svg";
import Link from "next/link";
import { LinkButton } from "@/components/Button";

export interface CourseBannerProps {
  title: string;
  description: string;
  backTo?: string;
  backToHref?: string;
  //   children: React.ReactNode;
  //   sideDescription?: string;
}

export default function CourseBanner(props: CourseBannerProps) {
  return (
    <section className="bg-blue/60 h-48 pt-48 px-7 mb-40 relative flex items-center justify-center">
      {props.backTo && props.backToHref ? (
        <Link
          href={props.backToHref}
          className="left-2 top-14 group transition duration-300 z-10 absolute text-xl font-dekko"
        >
          <div className="flex gap-1 items-center justify-center">
            Back to {props.backTo}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 bg-black`}
          />
        </Link>
      ) : (
        <></>
      )}
      <div className="z-10 flex flex-col items-center h-full gap-3 w-[95%] justify-center p-5">
        <h1 className="font-dm w-full text-5xl text-center">{props.title}</h1>
        <h2 className="font-antic text-xl text-center max-w-[50ch]">
          {props.description}
        </h2>
        <div className="flex gap-3">
          <LinkButton
            className="px-6 py-1 bg-navy text-white text-lg"
            href="/register"
            hoverClass="bg-black bg-opacity-20 text-white"
          >
            Register
          </LinkButton>
        </div>
      </div>
      <svg
        className="absolute top-48 z-0"
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
