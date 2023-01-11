import React, { useState, useEffect } from "react";
import { FadeInDiv } from "../../animation";
import { AnimatePresence } from "framer-motion";
import { SlideTag } from "./types";
import { SlideButton, SlideContent } from ".";

interface Props {}

export const TheSpace: React.FC<Props> = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideTag>("info");

  const slideTags: [SlideTag, SlideTag, SlideTag] = [
    "info",
    "hire",
    "training",
  ];
  return (
    <div className="the-space relative w-full px-[5%] pb-[10%] ">
      <div className="the-space__heading cyan-stroke flex flex-col w-full items-center">
        <FadeInDiv once className="leading-[30vw]">
          THE
        </FadeInDiv>
        <FadeInDiv once className="leading-[0] -mt-[3.5vw]">
          SPACE
        </FadeInDiv>
      </div>
      <FadeInDiv className="w-full h-[40vw] relative">
        <div className={`slide z-[3] top-[8vw] px-[3vw] py-[2vw] ${currentSlide === "hire" && "fill"}`}>
          <div className="slide__content w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              {slideTags.map(
                (tag) =>
                  currentSlide === tag && (
                    <SlideContent slideTag={currentSlide} key={tag} />
                  )
              )}
            </AnimatePresence>
          </div>
          <div className="slide__text-block z-[6]">
            <SlideButton
              presetTag="info"
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideTags={slideTags}
            />
          </div>
          <div className="slide__triangle left-[4vw]" />
        </div>
        <div className={`slide z-[2] top-[9vw] left-[1.5vw] ${currentSlide !== "hire" && "fill"}`}>
          <div className="slide__text-block z-[6] w-[26vw]">
            <SlideButton
              presetTag="hire"
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideTags={slideTags}
            />
          </div>
          <div className="slide__triangle left-[17vw]" />
        </div>
        <div className="slide z-[1] top-[10vw] left-[3vw]">
          <div className="slide__text-block z-[6] w-[40vw]">
            <SlideButton
              presetTag="training"
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideTags={slideTags}
            />
          </div>
          <div className="slide__triangle left-[31vw]" />
        </div>
      </FadeInDiv>
    </div>
  );
};

export default TheSpace;
