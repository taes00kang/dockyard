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
    let value: SlideTag;
    switch (presetTag) {
      case "info":
        return currentSlide;

      case "hire": {
        currentSlide === "hire" ? (value = "info") : (value = "hire");
        return value;
      }

      case "training":
        currentSlide === "training" ? (value = "info") : (value = "training");
        return value;
    }
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
          key={idx}
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
