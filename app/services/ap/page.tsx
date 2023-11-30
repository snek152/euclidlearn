import { apCourses } from "@/lib/data";

export default function AP() {
  return (
    <div className="grid grid-cols-4 gap-2 mt-5 mx-10">
      {apCourses.map((course, i) => (
        <button
          className="border-2 bg-white bg-opacity-20 group font-dekko text-xl border-blue rounded-full py-2 relative z-0"
          key={i}
        >
          <span className="z-10 relative">{course.name}</span>
          <span className="absolute w-full top-0 left-0 group-hover:opacity-50 transition-opacity z-0 duration-300 bg-gradient-to-r from-white to-lightblue rounded-full h-full opacity-0"></span>
        </button>
      ))}
    </div>
  );
}
