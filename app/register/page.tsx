"use client";
import SmallBanner from "@/components/SmallBanner";
import { apCourses, testprepCourses } from "@/lib/data";
import { Menu } from "@headlessui/react";
import { Field, Form, Formik } from "formik";

const svgThing = (
  <svg
    viewBox="0 0 384 12"
    fill="none"
    aria-hidden="true"
    className="absolute right-0 top-full w-full translate-x-5 opacity-50 max-w-[120%]"
  >
    <mask
      id=":r3:-a"
      maskUnits="userSpaceOnUse"
      x={48}
      y={0}
      width={269}
      height={4}
      style={{ maskType: "alpha" }}
    >
      <path
        transform="rotate(180 316.656 4)"
        fill="#C4C4C4"
        d="M316.656 4h268v4h-268z"
      />
    </mask>
    <g filter="url(#:r3:-b)" mask="url(#:r3:-a)">
      <path
        transform="rotate(180 292.656 1)"
        fill="url(#:r3:-c)"
        d="M292.656 1h220v2h-220z"
      />
    </g>
    <mask
      id=":r3:-d"
      maskUnits="userSpaceOnUse"
      x={116}
      y={0}
      width={268}
      height={12}
      style={{ maskType: "alpha" }}
    >
      <path
        transform="rotate(180 384 12)"
        fill="#C4C4C4"
        d="M384 12h268v12H384z"
      />
    </mask>
    <g filter="url(#:r3:-e)" mask="url(#:r3:-d)">
      <path
        transform="rotate(180 360 1)"
        fill="url(#:r3:-f)"
        d="M360 1h220v2H360z"
      />
    </g>
    <defs>
      <linearGradient
        id=":r3:-c"
        x1="292.656"
        y1={1}
        x2="512.656"
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A78BFA" stopOpacity={0} />
        <stop offset=".323" stopColor="#A78BFA" />
        <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
        <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id=":r3:-f"
        x1={360}
        y1={1}
        x2={580}
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A78BFA" stopOpacity={0} />
        <stop offset=".323" stopColor="#A78BFA" />
        <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
        <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
      </linearGradient>
      <filter
        id=":r3:-b"
        x="71.656"
        y={-2}
        width={222}
        height={4}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation=".5"
          result="effect1_foregroundBlur_311_43467"
        />
      </filter>
      <filter
        id=":r3:-e"
        x={131}
        y={-10}
        width={238}
        height={20}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation="4.5"
          result="effect1_foregroundBlur_311_43467"
        />
      </filter>
    </defs>
  </svg>
);

const subjects = [
  "USA Computing Olympiad",
  "American Invitational Mathematics Exam",
  ...testprepCourses.map((course) => course.name),
  ...apCourses.map((course) => course.name),
];
const grades = ["8", "9", "10", "11", "12"];

export default function Register() {
  return (
    <>
      <SmallBanner
        title="Register for EuclidLearn"
        description="Fill out the below form to register for our programs. We will email you after the form is submitted to handle payment."
      >
        {""}
      </SmallBanner>
      <section className="p-5">
        <Formik
          initialValues={{
            parentName: "",
            parentEmail: "",
            studentName: "",
            studentEmail: "",
            subject: "Subject",
            grade: "Grade",
            find: "",
            questions: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ values, setValues }) => (
            <Form className="rounded-2xl group border-navy border-opacity-50 border flex flex-col relative p-4 justify-start items-center bg-[#fff] bg-opacity-20 backdrop-blur-sm">
              {/* <label htmlFor="parentName" className="font-antic">
                Parent Name
              </label> */}
              <div className="grid gap-2 grid-cols-4 py-2">
                <Field
                  id="parentName"
                  name="parentName"
                  className="block rounded-md text-base py-2 px-4 w-full shadow-xl bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                  placeholder="Parent Name"
                />
                <Field
                  id="parentEmail"
                  name="parentEmail"
                  className="block rounded-md text-base py-2 px-4 w-full shadow-xl bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                  placeholder="Parent Email"
                />
                <Field
                  id="studentName"
                  name="studentName"
                  className="block rounded-md text-base py-2 px-4 w-full shadow-xl bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                  placeholder="Student Name"
                />
                <Field
                  id="studentEmail"
                  name="studentEmail"
                  className="block rounded-md text-base py-2 px-4 w-full shadow-xl bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                  placeholder="Student Email"
                />
              </div>

              <div className="grid gap-2 grid-cols-2">
                <Menu as="div" className="py-2 relative">
                  <Menu.Button
                    className={`rounded-md text-left text-base py-2 pl-4 pr-2 w-full shadow-xl bg-[#fff] focus:outline-none text-navy justify-between items-center flex ${
                      values.subject === "Subject" ? "text-opacity-50" : ""
                    }`}
                  >
                    {values.subject}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-3 min-w-max overflow-hidden origin-top-right rounded-lg bg-[#fff] border-gray divide-y divide-navy divide-opacity-30 shadow-md focus:outline-none">
                    {subjects.map((subject, i) => (
                      <Menu.Item
                        key={i}
                        as="button"
                        onClick={() => setValues({ ...values, subject })}
                        className="block bg-[#fff] w-full text-left py-2 px-4 text-navy hover:bg-red hover:text-white focus:outline-none"
                      >
                        {subject}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              </div>

              <Field
                id="find"
                name="find"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                as="textarea"
              ></Field>

              <button type="submit">Submit</button>
              {svgThing}
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}
