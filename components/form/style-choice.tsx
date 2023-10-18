import { cn } from "@/lib/utils";
import { stepAtom, styleAtom } from "@/store";
import { useAtom } from "jotai";

const stylesList = [
  {
    name: "Educational",
    description: "Informative and knowledge-focused.",
  },
  {
    name: "Concrete",
    description: "Clear and specific with real examples.",
  },
  {
    name: "Formal",
    description: "Traditional, professional, and structured.",
  },
  {
    name: "Fun",
    description: "Lively, engaging, and enjoyable.",
  },
  {
    name: "Modern",
    description: "Contemporary and up-to-date.",
  },
  {
    name: "Playful",
    description: "Interactive and enjoyable.",
  },
];

const Styles = () => {
  const [style, setStyle] = useAtom(styleAtom);
  const setStep = useAtom(stepAtom)[1];

  return (
    <>
      {stylesList.map((_style, index) => (
        <div
          key={index}
          className={cn(
            "cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300",
            style === _style.name.toLowerCase()
              ? "ring-2 ring-emerald-500 hover:ring-emerald-500"
              : "",
          )}
          onClick={() => {
            setStyle(_style.name.toLowerCase());
            style != _style.name.toLowerCase()
              ? setStep((prev) => (prev === 0 ? 1 : 0))
              : null;
          }}
        >
          <div className="font-semibold">{_style.name}</div>
          <div className="text-sm text-gray-500">{_style.description}</div>
        </div>
      ))}
    </>
  );
};

const StyleChoice = () => {
  return (
    <>
      <div className="flex-none pb-4 text-center text-lg font-semibold sm:text-2xl">
        What style of writing do you want?
      </div>
      <div className="mx-auto grid max-w-screen-lg grow grid-cols-2 grid-rows-3 gap-2 p-4 pt-4 sm:grid-cols-3 sm:grid-rows-2">
        <Styles />
      </div>
    </>
  );
};

export default StyleChoice;
