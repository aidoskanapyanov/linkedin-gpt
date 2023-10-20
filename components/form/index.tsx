import StyleChoice from "@/components/form/style-choice";
import TopicChoice from "@/components/form/topic-choice";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { stepAtom } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { ChevronLeft, ChevronRight, Wand2 } from "lucide-react";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";

interface FormProps {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const ButtonTooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ConditionallyScroll = ({
  isLoading,
  input,
  children,
}: {
  isLoading: boolean;
  input: string;
  children: React.ReactNode;
}) => {
  if (input.length > 0 && !isLoading) {
    return <ScrollIntoView selector="#post">{children}</ScrollIntoView>;
  }
  return <>{children}</>;
};

export const Form = ({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: FormProps) => {
  const [step, setStep] = useAtom(stepAtom);
  const { toast } = useToast();

  return (
    <form
      className="sm:gradient-border mx-auto max-w-2xl border bg-background p-4 py-12 md:max-w-4xl lg:max-w-5xl"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto h-[480px] max-w-screen-lg overflow-y-auto sm:h-72">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              className="flex h-full flex-col items-stretch justify-start"
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
              className="h-full"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TopicChoice
                input={input}
                handleInputChange={handleInputChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={cn(
          "mx-auto flex max-w-screen-lg items-center justify-between pt-6",
          step === 1 ? "flex-row-reverse" : "",
        )}
      >
        {step === 1 && (
          <ConditionallyScroll isLoading={isLoading} input={input}>
            <ButtonTooltip text="Generate post">
              <Button
                id="post"
                className="transform rounded-full bg-gradient-to-br from-[#3398c9] to-[#49b79c] p-2 transition-transform hover:brightness-105 active:scale-75"
                variant={"secondary"}
                type="submit"
                disabled={isLoading}
                onClick={() => {
                  if (input.length === 0) {
                    toast({
                      title: "Please enter a topic.",
                      description: "We need something to write about :)",
                    });
                  }
                }}
              >
                <Wand2 className="fill-[#1CA583] text-white" />
              </Button>
            </ButtonTooltip>
          </ConditionallyScroll>
        )}
        <ButtonTooltip text="Previous">
          <Button
            type="button"
            className={cn(
              "transform rounded-full p-2 brightness-[.97] transition-transform active:scale-75",
              step === 0 ? "invisible" : "",
            )}
            variant={"secondary"}
            onClick={() => setStep((prev) => (prev === 0 ? 1 : 0))}
          >
            <ChevronLeft />
          </Button>
        </ButtonTooltip>
        {step === 0 && (
          <ButtonTooltip text="Next">
            <Button
              type="button"
              className="transform rounded-full p-2 brightness-[.97] transition-transform active:scale-75"
              variant={"secondary"}
              onClick={() => setStep((prev) => (prev === 0 ? 1 : 0))}
            >
              <ChevronRight />
            </Button>
          </ButtonTooltip>
        )}
      </div>
    </form>
  );
};
