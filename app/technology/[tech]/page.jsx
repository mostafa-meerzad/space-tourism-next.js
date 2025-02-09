import { technology, technologyLinks } from "@/app/constants";
import Image from "next/image";
import React from "react";
import NavLink from "../components/NavLink";

const TechnologyPage = async ({ params }) => {
  const { tech } = await params;
  const { name, images, description } = technology[tech];

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center lg:pl-32 items-center gap-12 lg:gap-16 pt-10 lg:pt-14 pb-20 md:mb-0 overflow-x-hidden ">
      <div className="w-screen lg:w-1/2 lg:max-w-lg max-h-96 lg:max-h-[35rem] object-cover object-bottom  overflow-hidden">
        <Image
          className="lg:hidden w-full"
          src={images["landscape"]}
          alt={name}
        />
        <Image
          className="hidden lg:block h-full w-full"
          src={images["portrait"]}
          alt={name}
        />
      </div>

      <ul className="flex items-center justify-center lg:flex-col mx-auto gap-5 w-4/5 max-w-80 lg:w-min font-barlow uppercase tracking-widest lg:order-2">
        {Object.keys(technologyLinks).map((link) => (
          <NavLink
            label={technologyLinks[link]["label"]}
            href={technologyLinks[link]["url"]}
            key={link}
          />
        ))}
      </ul>

      <div className="flex flex-col items-center lg:items-start justify-center gap-2 px-10 lg:mr-16 lg:px-0 font-barlow ">
        <h2 className="text-lightGray text-lg uppercase font-medium [word-spacing:4px] tracking-widest ">
          the terminology...
        </h2>
        <h3 className="text-3xl md:text-3xl uppercase tracking-wider font-medium text-white ">
          {name}
        </h3>
        <p className="text-lightGray text-lg text-center lg:text-start max-w-xl md:max-w-lg lg:max-w-md  ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechnologyPage;
