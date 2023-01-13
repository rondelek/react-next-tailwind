"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

export default function Navbar() {
  return (
    <div className="flex justify-between py-8">
      <img
        src="/logo.svg"
        alt="logo"
        className="md:w-[237px] md:h-[25px] w-[168px] h-[20px]"
      />
      <Image src="/menu.png" alt="menu" width={25} height={25} />
    </div>
  );
}
