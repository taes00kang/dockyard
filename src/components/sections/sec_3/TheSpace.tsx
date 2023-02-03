import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeInDiv } from "../../animation";
import { SlideTag } from "./types";
import { RollerButton, SlideContent, TabButtons } from ".";

export const TheSpace: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideTag>("info");

  const slideTags: [SlideTag, SlideTag, SlideTag] = [
    "info",
    "hire",
    "training",
  ];

  return (
    <div className="the-space relative w-full px-[1%] sm:px-[5%] pb-[10%] ">
      <div className="the-space__heading cyan-stroke flex flex-col w-full items-center">
        <FadeInDiv once className="leading-[46vw] sm:leading-[30vw]">
          THE
        </FadeInDiv>
        <FadeInDiv once className="leading-[0] sm:-mt-[3.5vw]">
          SPACE
        </FadeInDiv>
      </div>
      <FadeInDiv
        once
        className="w-full mt-[12vw] h-auto sm:mt-0 sm:h-[40vw] static sm:relative"
      >
        <TabButtons
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <div
          data-testid="slide-container"
          className={`slide flex z-[3] top-[8vw] px-[3vw] py-[6vw] sm:py-[2vw] ${
            currentSlide === "hire" && "fill"
          }`}
        >
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
            <RollerButton
              presetTag="info"
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideTags={slideTags}
            />
          </div>
          <div className="slide__triangle left-[4vw]" />
        </div>
        <div
          className={`slide hidden sm:flex z-[2] top-[9vw] left-[1.5vw] ${
            currentSlide !== "hire" && "fill"
          }`}
        >
          <div className="slide__text-block z-[6] w-[26vw]">
            <RollerButton
              presetTag="hire"
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideTags={slideTags}
            />
          </div>
          <div className="slide__triangle left-[17vw]" />
        </div>
        <div className="slide hidden sm:flex z-[1] top-[10vw] left-[3vw]">
          <div className="slide__text-block z-[6] w-[40vw]">
            <RollerButton
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
