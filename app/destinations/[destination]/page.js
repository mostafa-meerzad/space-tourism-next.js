import { destinations } from "@/app/constants";
import Image from "next/image";
import React from "react";

const DestinationPage = async ({ params }) => {
  const { destination } = await params;
  const { name, images, description, distance, travel } =
    destinations[destination];

  return (
    <section className="flex flex-col gap-24 md:gap-32 justify-center items-center pt-44 md:pt-48 pb-10">
      <div className=" w-52 h-52 md:w-60 md:h-60">
        <Image src={images[destination]} alt={destination} />
      </div>

      <div className="flex flex-col items-center px-8 md:px-24 text-white max-w-screen-sm md:max-w-screen-md">
        <h2 className="text-7xl font-barlows uppercase font-normal">{name}</h2>
        <p className="text-center font-barlow tracking-wide [word-spacing:2px] text-lightGray px-5">
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
