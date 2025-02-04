import React from "react";
import { crew } from "../constants";
import Link from "next/link";

const CrewLayout = ({ children }) => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 px-10 lg:px-32 crew-bg-img bg-img-config">
      <div className="grid grid-rows-3 grid-cols-1 gap-2 h-min col-start-1 col-end-3 row-start-1 row-end-4 text-white z-10 mt-32 lg:mt-40 ">
        <h1 className="flex gap-2 text-xl font-medium font-barlow uppercase tracking-widest [word-spacing:5px] lg:row-start-1 lg:row-end-2">
          <span className="text-darkGray">02</span> <span>Meet your crew</span>
        </h1>

        <div className="h-40 md:h-28 lg:hidden"></div>

        <ul className="flex flex-row items-center content-center gap-4  h-max mx-auto lg:mx-0 lg:row-start-3 lg:mt-28">
          {Object.keys(crew).map((item) => (
            <li key={item}>
              <Link
                href={`/crew/${item}`}
                title={item}
                className="w-2 h-2 rounded-full bg-white inline-block"
              ></Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-start-1 col-end-3 row-start-1 row-end-4 ">
        {children}
      </div>
    </section>
  );
};

export default CrewLayout;
