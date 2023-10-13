"use client";

import IntroducingTag from "@/components/hero/introducing-tag";
import Subtitle from "@/components/hero/subtitle";
import Title from "@/components/hero/title";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-start"
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="pb-8">
        <IntroducingTag />
      </motion.div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Title />
      </motion.div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Subtitle />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
