'use client';

import { motion } from 'framer-motion';
import { howItWorks } from '../data/howItWorks';
import { textContainer, textVariant2 } from '../utils/motion';

export default function CardsHowItWorks() {
  return (
    <motion.div
      variants={textContainer}
      className="lg:flex lg:justify-around w-full"
    >
      {howItWorks.map((card) => {
        return (
          <motion.div
            key={card.id}
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="lg:mr-5 lg:max-w-[250px]"
          >
            <h3 className="text-7xl font-extrabold text-cream">0{card.id}</h3>
            <h4 className="text-3xl font-extrabold text-darkBlue py-4">
              {card.title}
            </h4>
            <p className="text-darkBlue pb-8 sm:mx-24 lg:mx-0">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
