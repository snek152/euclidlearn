import { CourseModalButtonProps } from "./CourseModalButton";

export default function CourseCard({ course }: CourseModalButtonProps) {
  return (
    <div className="border-2 bg-white bg-opacity-20 group font-dm text-2xl border-blue rounded-lg py-2 relative z-0 px-3">
      <span className="z-10 relative">{course.name}</span>
      <span className="absolute group-hover:w-full transition-all top-0 left-0 group-hover:opacity-25 z-0 duration-200 bg-gradient-to-r from-white to-lightblue rounded-lg h-full opacity-0 w-[0%]"></span>
      <p className="text-lg font-antic pt-1 z-10 relative">
        {course.desc.split("\n").map((d) =>
          d.indexOf(":") === -1 ? (
            <div key={d}>{d}</div>
          ) : (
            <div key={d}>
              <span className="font-antic underline">{d.split(":")[0]}:</span>
              <span>{d.split(":")[1]}</span>
            </div>
          )
        )}
      </p>
    </div>
  );
}
