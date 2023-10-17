"use client";

import Feedback from "@/components/feedback";
import Footer from "@/components/footer";
import { Form } from "@/components/form";
import Hero from "@/components/hero/hero";
import Posts from "@/components/posts";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen pt-32"
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
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Posts />
      </motion.div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Feedback />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
