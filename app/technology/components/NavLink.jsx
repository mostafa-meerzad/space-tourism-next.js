"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li className="relative">
      <Link
        href={href}
        className={`flex justify-center items-center w-12 h-12 lg:w-16 lg:h-16 border border-darkGray rounded-full text-lg ${
          isActive
            ? "bg-white text-darkBlue hover:text-darkBlue"
            : "text-lightGray bg-transparent"
        } hover:border-white hover:text-white`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
