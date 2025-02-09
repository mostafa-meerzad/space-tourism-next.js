"use client";
import Image from "next/image";
import React, { useState } from "react";
import { close, hamburger, logo } from "./assets";
import Link from "next/link";
import { nav, titles } from "./constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const title = Object.keys(titles).find((key) => pathname.startsWith(key));
  const titleNum = titles[title]?.["num"];
  const titleLabel = titles[title]?.["label"];

  return (
    <>
      <nav className="absolute left-0 lg:top-8 right-0 flex justify-between items-center px-8 md:pr-0 text-white max-w-screen-2xl mx-auto z-50 py-10 md:py-0">
        <Link href="/">
          <Image src={logo} alt="space tourism" width={40} height={40} />
        </Link>

        <ul className="relative justify-between items-center gap-9 px-8 lg:px-32 py-2 bg-blur font-barlow  hidden md:flex">
          <hr className="absolute right-[90%] bg-lightGray opacity-20 h-[1px] lg:w-2/3 xl:w-5/12 hidden lg:inline-block" />

          {nav.map((item) => (
            <NavLink label={item.label} href={item.url} key={item.label} />
          ))}
        </ul>

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
          } flex-col items-start justify-start gap-6 fixed pl-10 pt-32 right-0 top-0 h-screen w-64 md:hidden backdrop-blur-2xl backdrop-brightness-[1] backdrop-contrast-[94%]  font-barlow text-md leading-9 tracking-widest uppercase `}
        >
          {nav.map((item) => (
            <NavLink href={item.url} label={item.label} key={item.label} />
          ))}
        </ul>
      </nav>

      <h1 className=" absolute left-0 right-0 top-28 md:top-36 lg:top-44 flex justify-center md:justify-start md:px-10 lg:px-32 gap-2 text-white text-xl font-medium font-barlow uppercase tracking-widest [word-spacing:5px]">
        <span className="text-darkGray font-bold ">{titleNum}</span>{" "}
        {titleLabel}{" "}
      </h1>
    </>
  );
};

const NavLink = ({ label, href }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li
      className={`text-lg md:text-[1rem] tracking-widest uppercase hover:text-lightGray [word-spacing:4px] ${
        isActive && "hover:text-white"
      } w-full md:w-auto group`}
    >
      <Link href={href} className="relative py-3 md:py-4 w-full left-0 right-0 block">
        {label}
        <div
          className={`absolute w-1 md:w-3/4 h-full md:h-1 rounded-lg bg-lightGray top-0 right-0 md:top-16 md:right-auto  ${
            isActive ? "block group-hover:bg-lightGray" : "hidden"
          } group-hover:block group-hover:bg-gray-500`}
        />
      </Link>
    </li>
  );
};
export default Navbar;
