import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { SlideTag } from "./types";

interface Props {
  presetTag: SlideTag;
  currentSlide: SlideTag;
  setCurrentSlide: React.Dispatch<React.SetStateAction<SlideTag>>;
  slideTags: [SlideTag, SlideTag, SlideTag];
}

export const RollerButton: React.FC<Props> = ({
  currentSlide,
  setCurrentSlide,
  presetTag,
  slideTags,
}) => {
  const displayValue = useMemo(() => {
    let value: SlideTag = currentSlide;

    if (presetTag === "hire") {
      value = "hire";
      if (currentSlide === "hire") {
        value = "info";
      }
    }

    if (presetTag === "training") {
      value = "training";
      if (currentSlide === "training") {
        value = "info";
      }
    }
    return value;
  }, [currentSlide, presetTag]);

  return (
    <motion.div
      className="slide__text-roller"
      onClick={() => setCurrentSlide(displayValue)}
      initial={{ y: 0 }}
      animate={
        displayValue === "hire"
          ? { y: "-6vw" }
          : displayValue === "training"
          ? { y: "-12vw" }
          : { y: 0 }
      }
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeOut",
      }}
    >
      {slideTags.map((tag, idx) => (
        <div
          key={tag}
          className="leading-[120%] text-right w-[9vw]"
          style={{
            marginTop: idx === 0 ? 0 : "3vw",
          }}
        >
          {tag}
        </div>
      ))}
    </motion.div>
  );
};

export default RollerButton;
