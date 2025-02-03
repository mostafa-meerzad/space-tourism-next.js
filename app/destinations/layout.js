"use client";

import React from "react";
import { destinations } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <section className=" destination-bg-img bg-img-config z-10">
      <div className="absolute top-32 left-0 right-0 grid justify-center  grid-cols-1 px-20 md:px-8 text-white">
        <h1 className="flex gap-2 font-barlow uppercase tracking-widest [word-spacing:5px] text-xl font-medium">
          <span className="text-darkGray font-bold ">01</span> Pick your
          destination
        </h1>

        <div className=" h-64 md:h-80"></div>

        <ul className=" flex gap-4 mx-auto justify-evenly font-barlow uppercase tracking-widest h-9 w-4/5 max-w-80">
          {Object.keys(destinations).map((item) => (
            <li key={item} className="relative">
              <Link href={`/destinations/${item}`}>{item}</Link>
              <div
                className={`absolute h-[.2rem] w-3/4 rounded-lg bg-lightGray top-3/4 lef-0  ${
                  pathname === `/destinations/${item}` ? "block" : "hidden"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {children}
    </section>
  );
};

export default DestinationLayout;
