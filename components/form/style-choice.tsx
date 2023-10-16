import React from "react";

const StyleChoice = () => {
  return (
    <div>
      <div className="pb-4 text-center text-lg font-semibold sm:text-2xl">
        What style of writing do you want?
      </div>
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-2 pt-4 sm:grid-cols-3">
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Educational
        </div>
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Concrete
        </div>
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Formal
        </div>
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Fun
        </div>
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Modern
        </div>
        <div className="h-16 cursor-pointer rounded-lg border p-4 transition-all hover:ring-2 hover:ring-gray-300">
          Playful
        </div>
      </div>
    </div>
  );
};

export default StyleChoice;
