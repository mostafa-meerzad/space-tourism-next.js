"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavLink = ({ label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const parentVariants = {
    initial: { color: "white" },
    hover: isActive ? { color: "white" } : { color: "#9ca3af" },
  };
  const chileVariants = {
    initial: isActive ? { scale: 1, backgroundColor: "white" } : { scale: 0 },
    hover: isActive
      ? { backgroundColor: "white" }
      : { scale: 1, backgroundColor: "#9ca3af" },
  };
  return (
    <motion.li
      className={`relative font-barlow uppercase tracking-widest text-white`}
      variants={parentVariants}
      initial="initial"
      whileHover="hover"
    >
      <Link href={href}>
        {label}
        <motion.div
          className={`absolute h-[.2rem] w-3/4 rounded-lg  top-3/4 lef-0 `}
          variants={chileVariants}
        />
      </Link>
    </motion.li>
  );
};

export default NavLink;
