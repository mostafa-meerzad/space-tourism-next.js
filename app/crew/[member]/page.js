import React from "react";
import Image from "next/image";
import { crew } from "@/app/constants";

const CrewPage = async ({ params }) => {
  const { member } = await params;
  const { name, images, role, bio } = crew[member];

  return (
    <section className="grid justify-center items-center mt-48 mb-20 ">
      <div className=" flex flex-col items-center justify-center ">
        <Image
          className="w-48 h-64 object-contain object-bottom"
          src={images[member]}
          alt={name}
        />
        <hr className="w-4/5 h-0.5 bg-darkGray opacity-30 " />
      </div>

      <div className=" h-10"></div>

      <div className="flex flex-col items-center justify-center gap-2 font-barlow">
        <h2 className="text-darkGray text-lg uppercase font-medium tracking-tight ">
          {role}
        </h2>
        <h3 className="text-2xl uppercase font-semibold text-white">{name}</h3>
        <p className="text-lightGray text-center">{bio}</p>
      </div>
    </section>
  );
};

export default CrewPage;
