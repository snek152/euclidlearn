"use client";

import { Menu, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import learn from "@/images/Learn.png";
import { navLinks } from "@/lib/navLinks";
import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Popover
      as="nav"
      className="rounded-full w-[calc(100vw-0.5rem)] m-1 bg-navy shadow-sm pl-3 text-white flex justify-between items-center absolute z-50"
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
                className="font-dekko text-xl hover:text-lightblue transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Menu key={i} as="div" className="relative">
                <Menu.Button className="font-dekko text-xl hover:text-lightblue transition-colors flex items-center gap-1">
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
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
                  <Menu.Items className="absolute right-0 mt-3 w-36 origin-top-right rounded-lg bg-navy border-white divide-y divide-blue shadow-md focus:outline-none ">
                    {link.subLinks?.map((subLink, j) => (
                      <Menu.Item key={j}>
                        {({ active }) => (
                          <Link
                            href={subLink.href!}
                            className={`${
                              active ? "" : ""
                            } font-dekko text-lg group flex w-full items-center py-1 px-3 text-white hover:text-lightblue transition-colors`}
                          >
                            {subLink.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            )
          )}
          <Link
            href="/register"
            className="font-dekko text-black text-xl bg-lightblue px-5 h-full py-2 rounded-full shadow-sm"
          >
            Register Now
          </Link>
        </div>
      </div>
    </Popover>
  );
}
