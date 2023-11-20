import Image from "next/image";
import bg from "@/images/background.svg";
import Link from "next/link";
import trusted from "@/images/trusted.png";

export default function Home() {
  return (
    <>
      <section className="bg-blue/60 h-80 pt-20 mb-10 relative flex justify-center">
        <div className="z-10 flex flex-col h-full gap-3 w-[95%] justify-center p-5">
          <h1 className="font-dm text-5xl">
            Student Oriented Academic Coaching
          </h1>
          <h2 className="font-antic text-2xl max-w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <div className="flex gap-3">
            <Link
              href="/register"
              className="font-dekko text-white text-lg bg-blue px-4 h-full py-1  rounded-full shadow-sm"
            >
              Course Registration
            </Link>
            <Link
              href="/join"
              className="font-dekko text-white text-lg bg-gray px-4 h-full py-1  rounded-full shadow-sm"
            >
              Join Our Team
            </Link>
          </div>
        </div>
        <svg
          className="absolute top-80"
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
          className="absolute w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))] !h-[calc(100%+330px/3)] z-0 opacity-80 object-cover select-none"
          draggable={false}
        />
      </section>
      <section className="relative flex h-full p-5 gap-5 items-center justify-center">
        <Image
          src={trusted}
          alt="A person helping another out"
          className="w-[35%] aspect-[6/4] object-cover object-top rounded-3xl shadow-sm"
        />
        <div className="z-10 flex flex-col h-full gap-5 w-[95%] items-left justify-center p-5 py-10">
          <h1 className="font-dm text-4xl">Trusted by Top Institutions</h1>
          <h2 className="font-antic text-xl text-left max-w-[60ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h2>
        </div>
      </section>
      <section className="p-5">
        <h1 className="font-dm text-4xl">What We Offer</h1>
      </section>
      <section></section>
    </>
  );
}
