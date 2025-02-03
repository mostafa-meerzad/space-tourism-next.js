"use client";

import React from "react";
import { destinations } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <section className="destination-bg-img bg-img-config ">
      <div className="absolute top-32 left-0 right-0 grid lg:grid-cols-3 lg:grid-rows-3 justify-center  grid-cols-1 px-20 md:px-8 lg:px-32 lg:pt-10 text-white">
        <h1 className="flex gap-2 font-barlow uppercase tracking-widest [word-spacing:5px] text-xl font-medium lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 ">
          <span className="text-darkGray font-bold ">01</span> Pick your
          destination
        </h1>

        <div className=" h-64 md:h-80 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:h-10"></div>

        <ul className=" flex gap-4 mx-auto justify-evenly font-barlow uppercase tracking-widest h-9 w-4/5 max-w-80 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4   ">
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
