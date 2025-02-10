"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavLink = ({ href, label }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <motion.li
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.4 }}
      className="p-3 group"
    >
      <Link
        href={href}
        title={label}
        className={`w-2.5 h-2.5 md:w-2.5 md:h-2.5 rounded-full inline-block ${
          isActive
            ? "bg-lightGray group-hover:bg-lightGray"
            : "bg-darkGray group-hover:bg-gray-400"
        } `}
      ></Link>
    </motion.li>
  );
};

export default NavLink;
