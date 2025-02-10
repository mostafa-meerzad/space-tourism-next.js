"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li
      className={`relative font-barlow uppercase tracking-widest text-white  ${
        isActive ? "hover:text-white" : "hover:text-gray-400"
      } group`}
    >
      <Link href={href}>
        {label}
        <div
          className={`absolute h-[.2rem] w-3/4 rounded-lg  top-3/4 lef-0
               bg-lightGray
              ${
                isActive ? "block group-hover:bg-lightGray" : "hidden"
              } group-hover:block group-hover:bg-gray-500`}
        />
      </Link>
    </li>
  );
};

export default NavLink;
