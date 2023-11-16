import Image from "next/image";
import bg from "@/images/background.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-blue/60 h-96 pt-8 relative flex justify-center">
        <Image
          src={bg}
          fill
          alt="A grid of graduation caps"
          className="absolute w-full h-full z-0 opacity-40 object-cover select-none"
          draggable={false}
        />
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
      </section>
      <section className="relative flex justify-center">
        <div className="z-10 flex flex-col h-full gap-5 w-[95%] items-center justify-center p-5 py-10">
          <h1 className="font-dm text-4xl">Trusted by Top Institutions</h1>
          <h2 className="font-antic text-xl text-center max-w-[60ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h2>
        </div>
      </section>
    </>
  );
}
