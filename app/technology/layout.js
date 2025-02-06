import Link from "next/link";
import React from "react";
import { technology } from "../constants";

const Layout = ({ children }) => {
  return (
    <section className="technology-bg-img bg-img-config grid grid-cols-2  pb-20 ">
      <div className="grid grid-cols-1 row-start-1 col-start-1 col-end-3  lg:grid-cols-2 lg:grid-rows-3 justify-center lg:pt-10 text-white  max-h-80 mt-32 lg:h-32 px-0 md:px-10  lg:px-20">
        <h1 className="flex justify-center md:justify-start gap-2 text-xl font-medium font-barlow uppercase tracking-widest [word-spacing:5px] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 ">
          <span className="text-darkGray font-bold ">03</span> SPACE LAUNCH 101
        </h1>

        <div className=" h-[50vw] lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 "></div>

        <ul className=" flex items-center justify-center mx-auto gap-4 lg:justify-start font-barlow uppercase tracking-widest h-9 w-4/5 max-w-80 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:mt-44 lg:items-start lg:mx-0 lg:flex-col lg:gap-8 ">
          {Object.keys(technology).map((item) => (
            <li key={item} className="relative">
              <Link
                href={`/technology/${item}`}
                className="w-10 h-10 lg:w-16 lg:h-16 text-lightGray border rounded-full flex justify-center items-center"
              >
                2
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" col-start-1 col-end-3 row-start-1 mt-40  lg:mt-64">
        {children}
      </div>
    </section>
  );
};

export default Layout;
