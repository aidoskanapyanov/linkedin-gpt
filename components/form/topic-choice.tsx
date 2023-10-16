import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js";

const TopicChoice = () => {
  const el = useRef(null);

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
    <div>
      <div className="pb-4 text-center text-lg font-semibold sm:text-2xl">
        What are you writing about?
      </div>
      <div className="mx-auto h-48 max-w-screen-md p-4">
        <Textarea className="h-full p-8 text-lg" ref={el} />
      </div>
    </div>
  );
};

export default TopicChoice;
