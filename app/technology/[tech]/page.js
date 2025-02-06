import { technology } from "@/app/constants";
import Image from "next/image";
import React from "react";

const TechnologyPage = async ({ params }) => {
  const { tech } = await params;
  const { name, images, description } = technology[tech];

  return (
    <section className="grid justify-center items-center mt-8 mb-20 md:mb-0 lg:grid-flow-row lg:grid-cols-2   ">
      <div className=" flex flex-col items-center justify-center lg:order-2 lg:items-end">
        <Image
          className="w-screen md:w-screen h-auto md:max-h-full object-contain object-bottom md:object-cover md:object-center lg:h-[30rem] lg:w-[25rem]"
          src={images["portrait"]}
          alt={name}
        />
      </div>

      <div
        className=" h-32
       lg:hidden"
      ></div>

      <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 font-barlow lg:items-start lg:ml-auto -mt-4 px-10 md:px-0 lg:order-1">
        <h2 className="text-lightGray text-md uppercase font-medium tracking-tight lg:text-2xl lg:font-medium">
          the terminology
        </h2>
        <h3 className="text-2xl md:text-4xl uppercase font-semibold text-white lg:text-5xl lg:font-medium ">
          {name}
        </h3>
        <p className="text-lightGray text-center max-w-xl md:max-w-md lg:text-start lg:max-w-md">
          {description}
        </p>
      </div>
    </section>
  );
};

export default TechnologyPage;
