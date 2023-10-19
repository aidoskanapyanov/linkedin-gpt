"use client";

import Feedback from "@/components/feedback";
import Footer from "@/components/footer";
import { Form } from "@/components/form";
import Hero from "@/components/hero/hero";
import Posts from "@/components/posts";
import { useToast } from "@/components/ui/use-toast";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { styleAtom } from "@/store";
import { useCompletion } from "ai/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

export default function Home() {
  const { toast } = useToast();
  const style = useAtom(styleAtom)[0];
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      body: { style },
      onError: (err) => {
        toast({
          title: err.message,
          description: "Please try again tomorrow.",
        });
      },
    });

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
        <Form
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </motion.div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Posts completion={completion} isLoading={isLoading} />
      </motion.div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Feedback />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
