import React from "react";
import { crew } from "../constants";
import Link from "next/link";

const CrewLayout = ({ children }) => {
  return (
    <section className="crew-bg-img bg-img-config pt-1">
      <ul className="absolute top-[30rem] md:top-[28rem] lg:top-[37rem] left-0 lg:left-32 right-0 lg:right-full mx-auto w-min flex items-center content-center gap-4">
        {Object.keys(crew).map((item) => (
          <li key={item}>
            <Link
              href={`/crew/${item}`}
              title={item}
              className="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-white inline-block"
            ></Link>
          </li>
        ))}
      </ul>

      <div className="mt-48 md:mt-40 lg:mb-0">{children}</div>
    </section>
  );
};

export default CrewLayout;
