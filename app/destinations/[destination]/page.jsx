import { destinationLinks, destinations } from "@/app/constants";
import Image from "next/image";
import React from "react";
import NavLink from "../components/NavLink";

const DestinationPage = async ({ params }) => {
  const { destination } = await params;
  const { name, images, description, distance, travel } =
    destinations[destination];

  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-28  justify-center items-center pb-20 mt-10 md:pt-12">
      <Image
        src={images[destination]}
        alt={destination}
        className=" w-56 h-56 md:w-[20rem] md:h-[20rem] lg:h-[26rem]  lg:w-[26rem]"
      />

      <div className="flex flex-col justify-center items-center lg:items-start lg:gap-8">
        <ul className="flex justify-evenly lg:justify-start gap-4 h-9  max-w-80 ">
          {Object.keys(destinationLinks).map((item) => (
            <NavLink
              label={destinationLinks[item]["label"]}
              href={destinationLinks[item]["url"]}
              key={destinationLinks[item]["label"]}
            />
          ))}
        </ul>

        <div className=" flex flex-col items-center justify-center lg:justify-start gap-3 max-w-md md:max-w-screen-sm lg:max-w-lg lg:items-start  md:px-8 lg:px-0">
          <h2 className="text-8xl font-barlows uppercase font-normal text-white">
            {name}
          </h2>
          <p className="text-center  text-lg lg:text-start font-barlow tracking-wide [word-spacing:2px] text-lightGray lg:max-w-lg">
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
      </div>
    </div>
  );
};

export default DestinationPage;
