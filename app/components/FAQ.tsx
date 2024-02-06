"use client";

import { Disclosure } from "@headlessui/react";

const faq: [string, string][] = [
  [
    "Is a free trial available?",
    "Yes! We offer one free trial lesson between your student and a mentor on our team.",
  ],
  [
    "Why EuclidLearn?",
    "We possess an in-depth understanding of the education system, coupled with proven strategies for student success. Our accomplished team is dedicated to delivering a great educational experience for your students",
  ],
  [
    "What is unique about Euclid Learn?",
    "We tailor to individual learning styles, providing personalized learning experiences to optimize comprehension and retention.",
  ],
];

export default function FAQ() {
  return (
    <section className="p-5">
      <h1 className="font-dm text-4xl pb-2">Frequently Asked Questions</h1>
      <div className="mx-5">
        {faq.map((arr, i) => (
          <>
            <div
              className="flex justify-between w-full py-2 font-dm text-2xl text-left rounded-lg focus:outline-none"
              key={i}
            >
              {arr[0]}
              {/* <svg
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg> */}
            </div>
            <p className="px-4 font-antic text-lg">{arr[1]}</p>
          </>
        ))}
      </div>
    </section>
  );
}
