import { testprepCourses } from "@/lib/data";
import CourseBanner from "../CourseBanner";
import CourseLogistics from "../CourseLogistics";
import CourseCard from "../CourseCard";
import { svgThing } from "@/app/components/CourseFormatCard";

export default function Page() {
  return (
    <section>
      <CourseBanner
        title={"American Invitational Mathematics Examination (AIME)"}
        description={
          "Euclid Learn excels in preparing students for the USA Computing Olympiad (USACO), a prestigious competition that demonstrates advanced problem solving ability. Beyond coding, the USACO instills a strategic problem-solving mindset, shaping analytical thinkers to excel beyond the competition."
        }
        // backTo="Test Prep"
        // backToHref="/services/testprep"
      />
      <section className="p-5">
        <div className="rounded-2xl group mb-4 border-red border-opacity-50 border shadow-sm relative p-4 bg-white">
          <h1 className="font-dm text-3xl">What is AIME?</h1>
          <p className="font-antic text-lg pt-1">
            Irure dolore enim aliquip et commodo mollit laborum veniam enim
            occaecat. Nisi officia id adipisicing duis sunt ea sit est duis.
            Tempor nostrud cupidatat amet voluptate ut ea aliqua reprehenderit
            non incididunt. Do est ad ullamco aute ut eu anim Lorem ea ex
            cupidatat laborum. Occaecat sit officia ex dolor irure esse nulla
            ullamco duis est consequat non. Ad culpa elit elit sit elit laborum
            et nisi eu ex quis. Officia consectetur mollit eiusmod elit quis
            ullamco excepteur eiusmod magna cillum non. Duis sunt sint labore
            deserunt. Nostrud Lorem veniam velit minim eu. Consectetur aliqua
            occaecat consectetur tempor velit. Ex ut laborum sunt dolore eu
            occaecat mollit id minim veniam ad esse ad amet. Nisi nulla sint
            cupidatat ea incididunt do laboris excepteur eu aliqua sit ad
            ullamco nulla. In officia deserunt anim voluptate tempor pariatur ex
            est. Irure laborum aliqua amet aliqua dolore non laborum minim
            nulla. Consectetur fugiat pariatur amet fugiat in consequat ullamco
            reprehenderit exercitation ut cupidatat aute. Reprehenderit proident
            aliquip ea adipisicing enim velit magna dolor id. Labore qui nisi
            cillum veniam laborum.
          </p>
          {svgThing}
        </div>
        <div className="rounded-2xl group mt-4 border-red border-opacity-50 border shadow-sm relative p-4 bg-white">
          <h1 className="font-dm text-3xl text-right">Syllabus and Schedule</h1>
          <p className="font-antic text-lg text-right pt-1">
            Irure dolore enim aliquip et commodo mollit laborum veniam enim
            occaecat. Nisi officia id adipisicing duis sunt ea sit est duis.
            Tempor nostrud cupidatat amet voluptate ut ea aliqua reprehenderit
            non incididunt. Do est ad ullamco aute ut eu anim Lorem ea ex
            cupidatat laborum. Occaecat sit officia ex dolor irure esse nulla
            ullamco duis est consequat non. Ad culpa elit elit sit elit laborum
            et nisi eu ex quis. Officia consectetur mollit eiusmod elit quis
            ullamco excepteur eiusmod magna cillum non. Duis sunt sint labore
            deserunt. Nostrud Lorem veniam velit minim eu. Consectetur aliqua
            occaecat consectetur tempor velit. Ex ut laborum sunt dolore eu
            occaecat mollit id minim veniam ad esse ad amet. Nisi nulla sint
            cupidatat ea incididunt do laboris excepteur eu aliqua sit ad
            ullamco nulla. In officia deserunt anim voluptate tempor pariatur ex
            est. Irure laborum aliqua amet aliqua dolore non laborum minim
            nulla. Consectetur fugiat pariatur amet fugiat in consequat ullamco
            reprehenderit exercitation ut cupidatat aute. Reprehenderit proident
            aliquip ea adipisicing enim velit magna dolor id. Labore qui nisi
            cillum veniam laborum.
          </p>
          {svgThing}
        </div>
      </section>
      <section className="p-5">
        <h1 className="text-4xl font-dm text-center">Our Training</h1>
      </section>
      {/* <CourseLogistics {...testprepCourses[1].logistics} /> */}
    </section>
  );
}
