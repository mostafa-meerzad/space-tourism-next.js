"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li>
      <Link
        href={href}
        title={label}
        className={`w-2.5 h-2.5 md:w-2.5 md:h-2.5 rounded-full inline-block ${
          isActive
            ? "bg-lightGray hover:bg-lightGray"
            : "bg-darkGray hover:bg-gray-400"
        } `}
      ></Link>
    </li>
  );
};

export default NavLink;
