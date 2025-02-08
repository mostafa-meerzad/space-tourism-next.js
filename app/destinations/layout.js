"use client";

import React from "react";
import { destinations } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {
  return (
    <section className="destination-bg-img bg-img-config pt-1">
      <ul className="absolute top-[27rem] md:top-[37rem] lg:top-[17rem] flex justify-evenly lg:justify-start gap-4 mx-auto left-0 right-0 h-9  max-w-80 lg:translate-x-0 lg:left-1/2 lg:right-auto">
        {Object.keys(destinations).map((item) => (
          <NavLink label={item} key={item} />
        ))}
      </ul>

      <div className="mt-40 md:mt-56 lg:mt-72">
        {children}
      </div>
    </section>
  );
};

const NavLink = ({ label }) => {
  const pathname = usePathname();
  const isActive = pathname === `/destinations/${label}`;
  return (
    <li
      className={`relative font-barlow uppercase tracking-widest text-white  ${
        isActive ? "hover:text-white" : "hover:text-gray-400"
      } group`}
    >
      <Link href={`/destinations/${label}`}>
        {label}
        <div
          className={`absolute h-[.2rem] w-3/4 rounded-lg  top-3/4 lef-0
             bg-lightGray
            ${
              isActive ? "block group-hover:bg-lightGray" : "hidden"
            } group-hover:block group-hover:bg-gray-500`}
        />
      </Link>
    </li>
  );
};

export default DestinationLayout;
