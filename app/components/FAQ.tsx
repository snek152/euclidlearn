"use client";

import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";

const faq: [string, string][] = [
  [
    "Are there any additional resources or materials provided for students?",
    "Yes, we offer a range of supplementary resources including PowerPoint slides, high-quality worksheets, answer keys with step-by-step solutions, and professional lecture videos from expert private teachers.",
  ],
  [
    "Do you provide homework help in addition to regular coaching sessions?",
    "Absolutely! We offer complimentary homework assistance and last-minute test preparation through our Discord community.",
  ],
  [
    "How do you keep parents/guardians informed about their child's progress?",
    "We send progress reports after each session, covering the days focus and highlighting areas of improvement.",
  ],
  [
    "Can lessons be customized to focus on specific topics or areas of difficulty?",
    "Yes, we offer personalized lessons designed to target specific topics or tackle any particular areas of difficulty that students may be facing.",
  ],
  [
    "What sets you apart from others in the area?",
    "We have a proven track record of helping students succeed, and we have a devoted system that works to provide students with the best quality education through quality outside resources and effective teaching.",
  ],
];

export default function FAQ() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  return (
    <section className="p-5">
      <h1 className="font-dm text-4xl pb-2">Frequently Asked Questions</h1>
      <div className="mx-5">
        {faq.map((arr, i) =>
          width >= 768 ? (
            <Disclosure key={i}>
              <Disclosure.Button className="flex justify-between w-full py-2 font-dm text-2xl text-left rounded-lg focus:outline-none cursor-default md:cursor-pointer">
                {arr[0]}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:block hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className="px-4 font-antic text-lg">{arr[1]}</p>
              </Disclosure.Panel>
            </Disclosure>
          ) : (
            <>
              <div className="flex justify-between w-full py-2 font-dm text-2xl text-left rounded-lg focus:outline-none cursor-default md:cursor-pointer">
                {arr[0]}
              </div>
              <p className="px-4 font-antic text-lg">{arr[1]}</p>
            </>
          )
        )}
      </div>
    </section>
  );
}
