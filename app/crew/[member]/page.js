import React from "react";
import Image from "next/image";
import { crew } from "@/app/constants";

const CrewPage = async ({ params }) => {
  const { member } = await params;
  const { name, images, role, bio } = crew[member];

  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-start lg:gap-20 lg:pl-32  items-center lg:items-start mb-20 md:mb-0">
      <div className=" flex flex-col items-center justify-center w-full lg:w-1/3 md:order-3 md:mt-20 lg:mt-5 lg:order-2 ">
        <Image
          className="w-48 h-64 md:h-[30rem] md:w-[24rem] lg:h-33rem] object-contain object-bottom"
          src={images[member]}
          alt={name}
        />
        <hr className="w-4/5 h-0.5 bg-darkGray opacity-30 md:hidden" />
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start gap-2 lg:gap-4 mt-16 px-8 lg:pl-0 font-barlow md:order-1  max-w-md md:max-w-lg lg:max-w-xl lg:mt-44">
        <h2 className="text-darkGray text-xl uppercase font-semibold tracking-tight lg:text-2xl">
          {role}
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase font-semibold md:font-medium lg:font-semibold text-white">{name}</h3>
        <p className="text-lightGray leading-7 text-center lg:text-start">{bio}</p>
      </div>
    </section>
  );
};

export default CrewPage;
