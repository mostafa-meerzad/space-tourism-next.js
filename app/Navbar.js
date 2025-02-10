"use client";
import Image from "next/image";
import { useState } from "react";
import { close, hamburger, logo } from "./assets";
import Link from "next/link";
import { nav } from "./constants";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <motion.ul
          className={`flex flex-col items-start justify-start gap-6 fixed pl-10 pt-32 right-0 top-0 h-screen w-64 md:hidden backdrop-blur-2xl backdrop-brightness-[1] backdrop-contrast-[94%]  font-barlow text-md leading-9 tracking-widest uppercase `}
          animate={
            isMenuOpen ? { opacity: 1, right: 0 } : { opacity: 0, right: -150 }
          }
        >
          {nav.map((item) => (
            <NavLink href={item.url} label={item.label} key={item.label} />
          ))}
        </motion.ul>
      </nav>
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
    <motion.li
      className={`text-lg md:text-[1rem] tracking-widest uppercase [word-spacing:4px] w-full md:w-auto group`}
      whileHover="hover"
      initial="initial"
    >
      <Link
        href={href}
        className="relative py-3 md:py-4 w-full left-0 right-0 block"
      >
        {label}

        <motion.div
          className={`absolute w-1 md:w-3/4 h-full md:h-1 rounded-lg bg-lightGray top-0 right-0 md:top-16 md:right-auto  ${
            isActive ? "block group-hover:bg-lightGray" : "hidden"
          } group-hover:block group-hover:bg-gray-500`}
          variants={{
            initial: { opacity: 0.7 },
            hover: { opacity: 1 },
          }}
        />
      </Link>
    </motion.li>
  );
};
export default Navbar;
