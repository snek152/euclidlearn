"use client";

import { Menu, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import learn from "@/images/Learn.png";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { LinkButton } from "./Button";

export default function Navbar() {
  const router = usePathname();
  return (
    <Popover
      as="nav"
      className="rounded-full w-[calc(100vw-0.5rem)] m-1 bg-navy shadow-sm pl-3 text-white flex justify-between items-center fixed z-50"
    >
      <h1 className="font-dm text-2xl inline-flex">
        <Image
          src={learn}
          height={30}
          width={30}
          alt="A person with an arrow icon on their head"
          className="aspect-square transform scale-[0.80]"
        />
        EuclidLearn
      </h1>
      <div>
        <Popover.Button className="text-xl outline-none grid place-items-center h-full md:sr-only">
          {({ open }) =>
            open ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )
          }
        </Popover.Button>
        <div className="sr-only md:not-sr-only flex gap-5 items-center">
          {navLinks.map((link, i) =>
            link.href ? (
              <Link
                href={link.href}
                key={i}
                className={`font-dekko text-xl flex flex-col group transition duration-300 ${
                  router === link.href ? "text-lightblue" : "text-white"
                }`}
              >
                {link.label}
                <span
                  className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 ${
                    router === link.href ? "bg-lightblue" : "bg-white"
                  }`}
                />
              </Link>
            ) : (
              <Menu key={i} as="div" className="relative">
                <Menu.Button
                  className={`font-dekko text-xl group transition duration-300 ${
                    link.subLinks?.find((val) => val.href == router) !=
                    undefined
                      ? "text-lightblue"
                      : "text-white"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        className="group-hover:animate-wiggle origin-center"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5"
                      />
                    </svg>
                  </span>
                  {/* <span
                    className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 ${
                      link.subLinks?.find((val) => val.href == router) !=
                      undefined
                        ? "text-lightblue"
                        : "text-white"
                    }`}
                  /> */}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-3 w-40 origin-top-right rounded-lg bg-navy border-white divide-y divide-blue divide-opacity-30 shadow-md focus:outline-none ">
                    {link.subLinks?.map((subLink, j) => (
                      <Menu.Item key={j}>
                        {({ active }) => (
                          <Link
                            href={subLink.href!}
                            className={`${
                              active ? "" : ""
                            } font-dekko text-lg group flex flex-col w-auto py-1 px-3 text-white transition duration-300`}
                          >
                            <div className="py-0.5 inline-flex flex-col w-min whitespace-nowrap">
                              {subLink.label}
                              <span
                                className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-1 h-0.5 ${
                                  router === link.href
                                    ? "bg-lightblue"
                                    : "bg-white"
                                }`}
                              />
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            )
          )}
          <LinkButton
            href="/register"
            className="text-black bg-lightblue text-xl px-5 py-2"
            hoverClass="text-black bg-blue bg-opacity-30"
          >
            Register Now
          </LinkButton>
          {/* <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Button Text
            </span>
            <span class="relative invisible">Button Text</span>
          </a> */}
        </div>
      </div>
    </Popover>
  );
}
