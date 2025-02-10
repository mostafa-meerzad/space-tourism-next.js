import React from "react";
import Image from "next/image";
import { crew, crewLinks } from "@/app/constants";
import NavLink from "../components/NavLink";

const CrewPage = async ({ params }) => {
  const { member } = await params;
  const { name, images, role, bio } = crew[member];

  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 md:gap-8 mb-16 md:mb-0 md:pt-16 lg:pt-0 lg:px-32">
      <div className=" flex flex-col items-center justify-center w-full mt-8 lg:mt-0 md:order-3 lg:w-1/2 ">
        <Image
          className="w-48 h-64 md:h-[30rem] md:w-[24rem] lg:h-[33rem] object-contain object-bottom"
          src={images[member]}
          alt={name}
        />
        <hr className="w-4/5 h-0.5 bg-darkGray opacity-30 md:hidden" />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 lg:items-start">
        <ul className="flex items-center content-center gap-4 w-min md:order-2">
          {Object.keys(crewLinks).map((item) => (
            <NavLink
              href={crewLinks[item]["url"]}
              label={crewLinks[item]["label"]}
              key={crewLinks[item]["label"]}
            />
          ))}
        </ul>
        <div className="flex flex-col items-center lg:items-start justify-center gap-2 px-10 lg:px-0 font-barlow ">
          <h2 className="text-gray-400 text-lg uppercase font-medium [word-spacing:4px] tracking-widest ">
            {role}
          </h2>
          <h3 className="text-3xl md:text-3xl uppercase tracking-wider font-medium text-white ">
            {name}
          </h3>
          <p className="text-lightGray text-lg text-center lg:text-start max-w-xl md:max-w-lg lg:max-w-md ">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrewPage;
