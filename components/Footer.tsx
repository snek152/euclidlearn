import { navLinks } from "@/lib/data";
import Link from "next/link";
import { Fragment } from "react";

export default function Footer() {
  return (
    <section className="bg-navy rounded-2xl m-2 px-5 py-3 shadow-sm text-white">
      <div className="flex justify-between">
        <h1 className="font-dm text-xl w-full">
          Providing Guidance, One Student at a Time
        </h1>
        <div className="flex gap-3 w-full justify-end">
          {navLinks.map((link, i) =>
            link.href ? (
              <Link
                href={link.href}
                className="font-dekko text-xl group"
                key={i}
              >
                {link.label}
                <span
                  className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 bg-white`}
                />
              </Link>
            ) : (
              <Fragment key={i}>
                {link.subLinks!.map((subLink, i) => (
                  <Link
                    href={subLink.href!}
                    className="font-dekko text-xl group"
                    key={i}
                  >
                    {subLink.label}
                    <span
                      className={`block max-w-0 group-hover:max-w-full transition-all duration-300 -mt-0.5 h-0.5 bg-white`}
                    />
                  </Link>
                ))}
              </Fragment>
            )
          )}
        </div>
      </div>
      <p className="text-center pt-3 text-lg font-antic">
        © 2023 by EuclidLearn. All Rights Reserved.
      </p>
    </section>
  );
}
