"use client";

import { Course } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export interface CourseModalButtonProps {
  course: Course;
}

export default function CourseModalButton({ course }: CourseModalButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="border-2 bg-white bg-opacity-20 group font-dekko text-xl border-blue rounded-full py-2 relative z-0"
        onClick={() => setOpen(true)}
      >
        <span className="z-10 relative">{course.name}</span>
        <span className="absolute group-hover:w-full transition-all top-0 left-0 group-hover:opacity-25 z-0 duration-200 bg-gradient-to-r from-white to-lightblue rounded-full h-full opacity-0 w-[0%]"></span>
      </button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl shadow-navy/20 transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl flex justify-between items-center font-dm font-medium leading-6 text-gray-900"
                  >
                    <span>{course.name}</span>
                    <button onClick={() => setOpen(false)} className="group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:rotate-[90deg] rotate-0 transition-transform duration-200"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg font-antic text-gray-500">
                      {course.desc.split("\n").map((d) =>
                        d.indexOf(":") === -1 ? (
                          <div key={d}>{d}</div>
                        ) : (
                          <div key={d}>
                            <span className="font-dm">{d.split(":")[0]}:</span>
                            <span>{d.split(":")[1]}</span>
                          </div>
                        )
                      )}
                    </p>
                  </div>

                  {/* <div>
                    <button
                      type="button"
                      className="ml-auto block"
                      onClick={() => setOpen(false)}
                    >
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
