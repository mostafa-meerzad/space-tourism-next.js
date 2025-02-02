"use client";

import React from "react";
import { destinations } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <section className=" destination-bg-img bg-img-config">
      <div className="absolute top-44 left-0 right-0 grid grid-rows-3 grid-cols-3 px-48 text-white">
        <h1 className="col-start-1 col-end-3 row-start-1 row-end-2 lex gap-2 font-barlow uppercase tracking-widest [word-spacing:5px] text-2xl font-medium">
          <span className="text-darkGray font-bold ">01</span> Pick your
          destination
        </h1>
        <div className="row-start-2 row-end-3 col-start-1 col-end-4 h-10 "></div>

        <ul className="col-start-3 col-end-4 row-start-3 row-end-4 flex gap-4 justify-between font-barlow uppercase tracking-widest ">
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
