"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { hamburger, logo } from "./assets";
import Link from "next/link";
import { nav } from "./constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center py-8 px-8 md:py-0 md:pr-0 lg:py-8 lg:px-12 lg:pr-0 text-white max-w-screen-2xl mx-auto">
      <Link href="/">
        <Image src={logo} alt="space tourism" width={40} height={40} />
      </Link>

      <ul className="relative justify-between items-center gap-8 px-8 lg:px-32 py-9 backdrop-blur-lg font-barlow text-sm leading-3 tracking-widest uppercase hidden md:flex">
        <hr className="absolute right-[90%] bg-lightGray opacity-20 h-[1px] lg:w-1/3 xl:w-2/3 hidden lg:inline-block" />

        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.url}
            className="hover:text-lightGray"
          >
            <li key={item.label} className="relative">
              {item.label}
              <div
                className={`absolute w-3/4 h-1 rounded-lg bg-lightGray top-11  ${
                  pathname === item.url ? "block" : "hidden"
                }`}
              />
            </li>
          </Link>
        ))}
      </ul>



    </nav>
  );
};

export default Navbar;
