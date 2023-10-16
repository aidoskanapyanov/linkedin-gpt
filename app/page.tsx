"use client";

import { Form } from "@/components/form";
import Hero from "@/components/hero/hero";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen py-32"
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
      <Hero />
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Form />
      </motion.div>
    </motion.div>
  );
}
