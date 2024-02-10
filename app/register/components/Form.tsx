"use client";
import { Formik, Form, Field } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import * as Yup from "yup";
import { apCourses, testprepCourses } from "@/lib/data";
import { Fragment } from "react";

const subjects = [
  "USA Computing Olympiad",
  "American Invitational Mathematics Exam",
  ...testprepCourses.map((course) => course.name),
  ...apCourses.map((course) => course.name),
];
const grades = ["8", "9", "10", "11", "12"];

const svgThing = (
  <svg
    viewBox="0 0 384 12"
    fill="none"
    aria-hidden="true"
    className="absolute right-0 z-0 top-full w-full translate-x-5 opacity-50 max-w-[120%]"
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

export default function F() {
  return (
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
      validationSchema={Yup.object().shape({
        parentName: Yup.string()
          .min(2, "Too Short")
          .max(50, "Too Long")
          .required("Required"),
        parentEmail: Yup.string()
          .min(4, "Too Short")
          .email("Invalid Email")
          .required("Required"),
        studentName: Yup.string()
          .min(2, "Too Short")
          .max(50, "Too Long")
          .required("Required"),
        studentEmail: Yup.string()
          .min(4, "Too Short")
          .email("Invalid Email")
          .required("Required"),
        subject: Yup.string().notOneOf(["Subject"], "Required"),
        grade: Yup.string().notOneOf(["Grade"], "Required"),
        find: Yup.string().min(2, "Too Short").max(500, "Too Long"),
        questions: Yup.string().min(2, "Too Short").max(500, "Too Long"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue, errors, touched, setFieldTouched }) => (
        <Form className="rounded-2xl border-navy border-opacity-50 border flex flex-col relative p-4 justify-start items-center bg-[#fff] bg-opacity-20 backdrop-blur-sm font-antic">
          {/* <label htmlFor="parentName" className="font-antic">
          Parent Name
        </label> */}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4 py-2 w-full">
            <div>
              <Field
                id="parentName"
                name="parentName"
                className="block rounded-md text-base py-2 px-4 h-10 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                placeholder="Parent Name"
              />
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.parentName && touched.parentName
                  ? errors.parentName
                  : ""}
              </p>
            </div>
            <div>
              <Field
                id="parentEmail"
                name="parentEmail"
                className="block rounded-md text-base py-2 px-4 h-10 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                placeholder="Parent Email"
              />
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.parentEmail && touched.parentEmail
                  ? errors.parentEmail
                  : ""}
              </p>
            </div>
            <div>
              <Field
                id="studentName"
                name="studentName"
                className="block rounded-md text-base py-2 px-4 h-10 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                placeholder="Student Name"
              />
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.studentName && touched.studentName
                  ? errors.studentName
                  : ""}
              </p>
            </div>
            <div>
              <Field
                id="studentEmail"
                name="studentEmail"
                className="block rounded-md text-base py-2 px-4 h-10 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                placeholder="Student Email"
              />
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.studentEmail && touched.studentEmail
                  ? errors.studentEmail
                  : ""}
              </p>
            </div>
          </div>

          <div className="grid gap-2 grid-cols-2 w-full">
            <div>
              <Listbox
                as="div"
                className="py-2 relative"
                value={values.subject}
                onChange={(s) => setFieldValue("subject", s)}
              >
                <Listbox.Button
                  className={`rounded-md text-left text-base h-10 py-2 pl-4 pr-2 w-full shadow-md bg-[#fff] focus:outline-none text-navy justify-between items-center flex ${
                    values.subject === "Subject" ? "text-opacity-50" : ""
                  }`}
                  onClick={() => setFieldTouched("subject", true)}
                  type="button"
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
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in-out duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute left-0 mt-3 overflow-hidden origin-top-right rounded-lg bg-[#fff] border-gray divide-x divide-y divide-navy divide-opacity-5 shadow-xl focus:outline-none grid grid-cols-4 z-20 w-[calc(100vw-2*1.25rem-2*1rem)]">
                    {subjects.map((subject, i) => (
                      <Listbox.Option
                        value={subject}
                        key={i}
                        as="button"
                        type="button"
                        className="block text-sm bg-[#fff] w-full text-left py-2 px-4 text-navy hover:bg-red hover:text-white whitespace-nowrap focus:outline-none"
                      >
                        {subject}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
              <p className="text-red font-antic text-center -mt-0.5 font-bold">
                {errors.subject && touched.subject ? errors.subject : ""}
              </p>
            </div>
            <div>
              <Listbox
                as="div"
                className="py-2 relative"
                value={values.grade}
                onChange={(s) => setFieldValue("grade", s, false)}
              >
                <Listbox.Button
                  className={`rounded-md text-left text-base h-10 py-2 pl-4 pr-2 w-full shadow-md bg-[#fff] focus:outline-none text-navy justify-between items-center flex ${
                    values.grade === "Grade" ? "text-opacity-50" : ""
                  }`}
                  type="button"
                >
                  {values.grade}
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
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in-out duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute left-0 mt-3 min-w-max overflow-hidden origin-top-right rounded-lg bg-[#fff] border-gray divide-x divide-navy divide-opacity-5 flex shadow-xl focus:outline-none z-20">
                    {grades.map((grade, i) => (
                      <Listbox.Option
                        value={grade}
                        key={i}
                        as="button"
                        type="button"
                        className="block bg-[#fff] w-full text-left py-2 px-4 text-navy hover:bg-red hover:text-white focus:outline-none"
                      >
                        {grade}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
              <p className="text-red font-antic text-center -mt-0.5 font-bold">
                {errors.grade && touched.grade ? errors.grade : ""}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 py-2 w-full">
            <div>
              <Field
                id="find"
                name="find"
                rows="3"
                className="block rounded-md text-base py-2 px-4 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                as="textarea"
                placeholder="How did you find out about us?"
              ></Field>
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.find && touched.find ? errors.find : ""}
              </p>
            </div>
            <div>
              <Field
                id="questions"
                name="questions"
                rows="3"
                className="block rounded-md text-base py-2 px-4 w-full shadow-md bg-[#fff] focus:outline-none placeholder:text-navy placeholder:text-opacity-50 text-navy"
                as="textarea"
                placeholder="Any questions, comments, or concerns?"
              ></Field>
              <p className="text-red font-antic text-center mt-1 -mb-1 font-bold">
                {errors.questions && touched.questions ? errors.questions : ""}
              </p>
            </div>
          </div>

          <button
            className={`font-dekko h-full rounded-full shadow-md relative inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out group px-20 py-2 text-lg bg-red text-white mt-5`}
            type="submit"
          >
            <span
              className={`absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease bg-black bg-opacity-20`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
              Register
            </span>
            <span className="relative invisible">Register</span>
          </button>
          {svgThing}
        </Form>
      )}
    </Formik>
  );
}
