import StyleChoice from "@/components/form/style-choice";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TopicChoice from "@/components/form/topic-choice";

export const Form = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className="sm:gradient-border mx-auto max-w-2xl border bg-background p-4 py-12 md:max-w-4xl lg:max-w-7xl">
      <div className="mx-auto h-64 max-w-screen-lg overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StyleChoice />
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TopicChoice />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mx-auto flex max-w-screen-lg items-center justify-between pt-6">
        <Button className="rounded-full p-2" variant={"secondary"}>
          <ChevronLeft />
        </Button>
        <Button
          className="rounded-full p-2"
          variant={"secondary"}
          onClick={() => setStep((prev) => (prev === 0 ? 1 : 0))}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
