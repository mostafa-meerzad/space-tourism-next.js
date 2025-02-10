"use client";

import { useState } from "react";
import { home } from "./constants";
import { motion } from "motion/react";

const Home = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row justify-between lg:justify-around items-center gap-28 md:gap-36 lg:gap-0 pt-40 md:pt-48 py-20 lg:px-16 lg:pt-56 lg:pb-20 text-white bg-img-config home-bg-img ">
      <div className="flex flex-col items-center lg:items-start ">
        <h1 className="text-center lg:text-start">
          <span className="text-2xl font-barlow uppercase tracking-widest text-lightGray  ">
            {home.title}
          </span>
          <br />
          <br />
          <span className="text-9xl leading-none uppercase font-sans">
            {home.name}
          </span>
        </h1>
        <p className=" w-2/3 sm:max-w-xl md:max-w-2xl  text-center lg:text-start text-md text-lightGray leading-7 font-barlow font-medium">
          {home.description}
        </p>
      </div>

      <motion.div
        className="flex justify-center items-center relative"
        whileHover="hover"
        initial="initial"
      >
        <button
          onClick={() => setIsBtnClicked(!isBtnClicked)}
          className="h-48 w-48 lg:h-52 lg:w-52 rounded-full border bg-white text-darkBlue text-2xl font-sans uppercase z-10"
        >
          {home.button}
        </button>
        <motion.div
          className={`h-full w-full absolute rounded-full bg-lightGray`}
          variants={{
            initial: { scale: .8, opacity: 0.7 },
            hover: { scale: 1.5, opacity: 0.7 },
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
