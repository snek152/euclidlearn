"use client";

import { Disclosure } from "@headlessui/react";

export default function FAQ() {
  return (
    <section className="p-5">
      <h1 className="font-dm text-4xl">Frequently Asked Questions</h1>
      <Disclosure>
        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-navy rounded-lg hover:bg-opacity-80 focus:outline-none focus-visible:ring focus-visible:ring-navy focus-visible:ring-opacity-75">
          Hello
        </Disclosure.Button>
        <Disclosure.Panel>
          <p className="px-4 py-2 text-sm text-gray-500">World</p>
        </Disclosure.Panel>
      </Disclosure>
    </section>
  );
}
