"use client";

import IntroducingTag from "@/components/hero/introducing-tag";
import Subtitle from "@/components/hero/subtitle";
import Title from "@/components/hero/title";
import { Github } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Link
          href={"https://github.com/aidoskanapyanov/linkedin-gpt"}
          target="_blank"
        >
          <Button
            variant={"outline"}
            className="mt-6 rounded-full font-normal shadow-md"
          >
            <Github className="mr-2 h-6 w-6 fill-gray-600" /> Star on GitHub
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
