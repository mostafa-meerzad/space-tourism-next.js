"use client";

import React from "react";
import { destinations } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <section className="destination-bg-img bg-img-config grid grid-cols-2 px-10 lg:px-32 pb-10">
      <div className="grid grid-cols-1 row-start-1 col-start-1 col-end-3  lg:grid-cols-2 lg:grid-rows-3 justify-center lg:pt-10 text-white  max-h-80 mt-32 lg:h-32">
        <h1 className="flex justify-center md:justify-start gap-2 text-xl font-medium font-barlow uppercase tracking-widest [word-spacing:5px] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 ">
          <span className="text-darkGray font-bold ">01</span> Pick your
          destination
        </h1>

        <div className=" h-64 md:h-80 lg:h-20 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:hidden"></div>

        <ul className=" flex gap-4 mx-auto justify-evenly lg:justify-start font-barlow uppercase tracking-widest h-9 w-4/5 max-w-80 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4  lg:mx-0 ">
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

      <div className=" col-start-1 col-end-3 row-start-1 mt-44 md:mt-52 lg:mt-64">
        {children}
      </div>
    </section>
  );
};

export default DestinationLayout;
