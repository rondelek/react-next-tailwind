"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

import React from "react";

export function TypingText({ title, textStyle }) {
  return (
    <motion.div variants={textContainer} className={textStyle}>
      {Array.from(title).map((letter, index) => {
        return (
          <motion.span variants={textVariant2} key={index}>
            <span>{letter === " " ? "\u00A0" : letter}</span>
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export const TitleText = () => <h2>Title Text</h2>;
