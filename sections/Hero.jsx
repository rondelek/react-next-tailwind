'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

export default function Hero() {
  return (
    <section className="rounded-xl p-10 lg:bg-hero-lg bg-right md:bg-hero-md bg-hero-sm bg-cover">
      <div className="text-center md:text-left md:max-w-[50%] my-10">
        <h1 className="text-4xl font-bold text-white">
          Great coffee made simple.
        </h1>
        <p className="text-md md:text-lg text-gray py-6">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button>Create your plan</button>
      </div>
    </section>
  );
}
