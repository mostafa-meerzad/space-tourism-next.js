"use client";

import { useState } from "react";
import { home } from "./constants";

const Home = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row justify-between lg:justify-around items-center gap-28 md:gap-36 lg:gap-0 lg:px-10  py-20 lg:py-32 lg:pb-20 text-white ">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-center lg:text-start">
          <span className="text-xl font-barlow uppercase tracking-widest text-lightGray  ">
            {home.title}
          </span>
          <br />
          <br />
          <span className="text-9xl leading-none uppercase font-sans">
            {home.name}
          </span>
        </h1>
        <p className=" w-2/3 sm:max-w-md md:max-w-2xl text-center lg:text-start text-md text-lightGray leading-7 font-barlow font-medium">
          {home.description}
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <button
          onClick={() => setIsBtnClicked(!isBtnClicked)}
          className="h-48 w-48 lg:h-52 lg:w-52 rounded-full border bg-white text-darkBlue text-2xl font-sans uppercase z-10"
        >
          {home.button}
        </button>
        <div
          className={` w-72 h-72 md:w-80 md:h-80 lg:w-[20rem] lg:h-[20rem] border absolute rounded-full bg-lightGray ${
            isBtnClicked ? "opacity-35" : "opacity-0"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Home;
