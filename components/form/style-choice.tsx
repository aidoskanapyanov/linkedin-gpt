import React from "react";

const StyleChoice = () => {
  return (
    <div>
      <div className="pb-4 text-center text-lg font-semibold sm:text-2xl">
        What style of writing do you want?
      </div>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-2 p-4 pt-4 sm:grid-cols-3">
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Educational</div>
          <div className="text-sm text-gray-500">
            Informative and knowledge-focused.
          </div>
        </div>
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Concrete</div>
          <div className="text-sm text-gray-500">
            Clear and specific with real examples.
          </div>
        </div>
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Formal</div>
          <div className="text-sm text-gray-500">
            Traditional, professional, and structured.
          </div>
        </div>
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Fun</div>
          <div className="text-sm text-gray-500">
            Lively, engaging, and enjoyable.
          </div>
        </div>
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Modern</div>
          <div className="text-sm text-gray-500">
            Contemporary and up-to-date.
          </div>
        </div>
        <div className="cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          <div className="font-semibold">Playful</div>
          <div className="text-sm text-gray-500">
            Interactive and enjoyable.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleChoice;
