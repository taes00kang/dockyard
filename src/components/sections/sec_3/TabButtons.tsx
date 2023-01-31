import React from "react";
import { SlideTag } from "./types";

interface Props {
  currentSlide: SlideTag;
  setCurrentSlide: React.Dispatch<React.SetStateAction<SlideTag>>;
}

export const TabButtons: React.FC<Props> = ({
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div className="flex sm:hidden w-full h-[12vw] bg-brand-theme3-bg text-[5vw] transition-all ease-in duration-300">
      <button
        type="button"
        onClick={() => setCurrentSlide("info")}
        className={`tab-button uppercase font-bold flex-1 flex items-center justify-center border-brand-theme3-text border-2 ${
          currentSlide === "info" && "border-b-0"
        }`}
      >
        info
      </button>
      <button
        type="button"
        onClick={() => setCurrentSlide("hire")}
        className="tab-button uppercase font-bold flex-1 flex items-center justify-center border-brand-theme3-text border-2 border-x-0 fill"
      >
        hire
      </button>
      <button
        type="button"
        onClick={() => setCurrentSlide("training")}
        className={`tab-button uppercase font-bold flex-1 flex items-center justify-center border-brand-theme3-text border-2 ${
          currentSlide === "training" && "border-b-0"
        }`}
      >
        training
      </button>
    </div>
  );
};

export default TabButtons;
