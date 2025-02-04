import React from "react";
import Image from "next/image";
import { crew } from "@/app/constants";

const CrewPage = async ({ params }) => {
  const { member } = await params;
  const { name, images, role, bio } = crew[member];

  return (
    <section className="grid justify-center items-center mt-48 mb-20 md:mb-0 lg:grid-flow-row lg:grid-cols-2 ">
      <div className=" flex flex-col items-center justify-center md:order-3 lg:order-2">
        <Image
          className="w-48 h-64 md:h-[25rem] md:w-[18rem] object-contain object-bottom lg:h-[30rem] lg:w-[25rem]"
          src={images[member]}
          alt={name}
        />
        <hr className="w-4/5 h-0.5 bg-darkGray opacity-30 md:hidden" />
      </div>

      <div className=" h-10 md:order-2  md:h-24 lg:hidden"></div>

      <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 font-barlow md:order-1 lg:items-start -mt-4">
        <h2 className="text-darkGray text-lg uppercase font-semibold tracking-tight lg:text-2xl lg:font-medium">
          {role}
        </h2>
        <h3 className="text-2xl uppercase font-semibold text-white lg:text-5xl lg:font-medium ">
          {name}
        </h3>
        <p className="text-lightGray text-center max-w-xl lg:text-start lg:max-w-sm">
          {bio}
        </p>
      </div>
    </section>
  );
};

export default CrewPage;
