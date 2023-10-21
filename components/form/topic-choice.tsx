import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js";

interface Props {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TopicChoice = ({ input, handleInputChange }: Props) => {
  const el = useRef(null);
  const mandateKeyCodes = [8, 35, 36, 37, 38, 39, 40, 46];  // [backspace, end, home, arrow left, arrow up, arrow right, arrow down, delete]

  const checkMaxLength = (e: any) => {
    if(e?.target?.value?.length >= 200 && (!mandateKeyCodes.includes(e?.keyCode))) {
      e.preventDefault();
    }
  };
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "What lessons can today's leaders learn from rise and fall of the Roman Empire?",
        "The key factors that led to the rise of the Roman Empire.",
        "The prosperity of ancient Rome and how they can be applied to modern businesses.",
        "The Roman Empire's fall: a cautionary tale of overextension and internal strife.",
        "From Julius Caesar to Augustus, we're exploring the iconic figures who shaped the Roman Empire's ascent.",
        "Rome and the enduring legacy they leave on modern urban design.",
        "The Roman Empire's military might.",
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 2500,
      showCursor: false,
      attr: "placeholder",
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex h-full flex-col items-stretch justify-start">
      <div className="flex-none pb-4 text-center text-lg font-semibold sm:text-2xl">
        What are you writing about?
      </div>
      <div className="mx-auto max-h-80 w-full max-w-screen-md grow p-4">
        <Textarea
          className="h-full p-8 text-lg"
          ref={el}
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => checkMaxLength(e)}
          maxLength={200}
        />
        <p
          className={cn(
            "absolute p-2 text-muted-foreground",
            input.length > 0 ? "" : "hidden",
            input.length === 200 ? "text-red-500" : "",
          )}
        >{`${input.length}/200`}</p>
      </div>
    </div>
  );
};

export default TopicChoice;
