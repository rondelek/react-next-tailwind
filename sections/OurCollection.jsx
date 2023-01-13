"use client";

import { motion } from "framer-motion";

import { TypingText } from "../components";
import { collection } from "../data/collection";
import { staggerContainer, textVariant2 } from "../utils/motion";

export default function OurCollection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center py-12 w-full self-center"
    >
      <h2 className="text-center sm:text-6xl text-4xl gradient-gray">
        our collection
      </h2>

      {collection.map((coffee) => {
        return (
          <motion.div
            key={coffee.id}
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 justify-items-center text-center sm:text-left items-center pb-8 pt-4"
          >
            <img
              src={require(`../public/image-${coffee.image}.png`).default.src}
              alt={coffee.name}
              className="max-w-[200px] sm:col-span-1"
            />
            <div className="sm:col-span-2 text-darkBlue">
              <p className="font-extrabold">{coffee.name}</p>
              <p className="max-w-[460px]">{coffee.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
