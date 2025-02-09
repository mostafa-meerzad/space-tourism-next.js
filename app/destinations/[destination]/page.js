import { destinations } from "@/app/constants";
import Image from "next/image";
import React from "react";

const DestinationPage = async ({ params }) => {
  const { destination } = await params;
  const { name, images, description, distance, travel } =
    destinations[destination];

  return (
    <section className="flex flex-col lg:flex-row gap-24 md:gap-24 lg:gap-28  justify-center items-center pb-20">
      <div className=" w-56 h-56 md:w-[20rem] md:h-[20rem] lg:h-[25rem]  lg:w-[25rem]">
        <Image src={images[destination]} alt={destination} />
      </div>

      <div className="flex flex-col items-center justify-center lg:justify-start gap-3 max-w-md md:max-w-screen-sm lg:max-w-lg lg:items-start  md:px-8 lg:px-0 lg:pr-10">
        <h2 className="text-8xl font-barlows uppercase font-normal text-white">
          {name}
        </h2>
        <p className="text-center lg:text-start font-barlow tracking-wide [word-spacing:2px] text-lightGray ">
          {description}
        </p>
        <hr className="bg-darkGray opacity-20 w-full my-9 h-[1px]" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 ">
          <div className="flex flex-col items-center md:items-start gap-2 text-lightGray uppercase ">
            <span className=" text-md tracking-widest">avg. distance</span>{" "}
            <span className="text-3xl text-white font-normal tracking-wider font-sans">
              {distance}
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2 text-lightGray uppercase ">
            <span className=" text-md tracking-widest">est. travel time</span>{" "}
            <span className="text-3xl text-white tracking-wider font-normal font-sans">
              {travel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
