"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import { whyUs } from "../data/whyUs";

export default function CardsWhyUs() {
  return (
    <motion.div
      variants={textContainer}
      className="justify-center lg:flex lg:self-center -translate-y-24"
    >
      {whyUs.map((card) => {
        return (
          <motion.div
            key={card.id}
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1 max-w- lg:max-w-[300px] justify-items-center text-center sm:text-left lg:text-center items-center bg-teal rounded-xl p-6  my-4 mx-8 md:mx-20 lg:p-0 lg:px-4 lg:mx-4"
          >
            <Image
              src={`/icon-${card.image}.svg`}
              alt={card.name}
              width={100}
              height={100}
              className="sm:col-span-1 py-4 lg:scale-75 scale-75"
            />
            <div className="sm:col-span-2 text-white lg:pb-4">
              <h3 className="text-2xl font-bold pb-6">{card.name}</h3>
              <p>{card.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
