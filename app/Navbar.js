"use client";
import Image from "next/image";
import React, { useState } from "react";
import { close, hamburger, logo } from "./assets";
import Link from "next/link";
import { nav } from "./constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center py-8 px-8 md:pt-2 md:pr-0 lg:py-8 lg:px-12 lg:pr-0 text-white max-w-screen-2xl mx-auto z-50">
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

      {/* Mobile menu */}

      <div
        className={`${
          isMenuOpen ? "fixed" : "absolute"
        } top-12 right-8 z-50 md:hidden`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image
          src={isMenuOpen ? close : hamburger}
          alt="close menu"
          width={20}
          height={20}
        />
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-start justify-start gap-5 fixed pl-10 pt-32 right-0 top-0 h-screen w-64 md:hidden backdrop-blur-2xl backdrop-brightness-[1] backdrop-contrast-[94%]  font-barlow text-md leading-9 tracking-widest uppercase `}
      >
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.url}
            className="hover:text-lightGray w-full"
          >
            <li key={item.label} className="relative">
              {item.label}
              <div
                className={`absolute w-1 h-full rounded-lg bg-lightGray top-0 right-0  ${
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
