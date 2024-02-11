interface CourseCardProps {
  name: string;
  desc: string;
  center?: boolean;
  to?: string;
}

export default function CourseCard({
  name,
  desc,
  center,
  to,
}: CourseCardProps) {
  return (
    <section
      className={`border bg-white bg-opacity-20 group md:my-3 font-dm ${
        center ? "text-2xl" : "text-2xl"
      } border-red rounded-md shadow-sm py-2 relative px-3`}
    >
      <h1 className={`z-10 relative ${center ? "text-center" : ""}`}>{name}</h1>
      <span
        className={`absolute md:group-hover:w-full transition-all top-0 left-0 md:group-hover:opacity-25 z-0 duration-200 bg-gradient-to-r from-white ${
          to ? to : "to-lightblue"
        } rounded-lg h-full md:opacity-0 opacity-50 md:w-[0%] w-full`}
      ></span>
      <div
        className={`${
          center ? "text-base" : "text-lg"
        } font-antic pt-1 z-10 relative`}
      >
        {desc}
        {/* {course.desc.split("\n").map((d) =>
          d.indexOf(":") === -1 ? (
            <div key={d}>{d}</div>
          ) : (
            <div key={d}>
              <span className="font-antic underline">{d.split(":")[0]}:</span>
              <span>{d.split(":")[1]}</span>
            </div>
          )
        )} */}
      </div>
    </section>
  );
}
