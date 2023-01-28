import React, { useState, useEffect, useRef } from "react";
import { CTA } from "../../layout";
import {
  FadeInDiv,
  ChevronMoveUp,
  IntroHeadingImage,
  ChevronSpring,
} from "../../animation";
import { scrollToSection } from "../../../utils";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

export const Section1: React.FC = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition(ref);

  useEffect(() => {
    // transition value for intro headings animation.
    const velocity = scrollPosition / 5;
    if (velocity < 200) {
      setTranslateValue(velocity);
    }

    // If window's top offset hits the top of document, set transition value to 0.
    // To resolve the issue that listener can't properly track changes in scrollPosition when user scrolls up too quickly.
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setTranslateValue(0);
      }
    });
  }, [scrollPosition]);

  return (
    <section id="theme-1">
      {/* Sec 1-1 */}
      <div className="flex flex-col justify-center items-center px-[5%] py-[24vw] sm:py-[16vw] md:py-0 sm:h-auto overflow-x-hidden">
        <div className="dots-and-info relative w-full h-full pb-[2%] bg-[length:60%] md:bg-[length:40%] bg-[100%_2%] sm:bg-[99%_90%] flex flex-col items-center sm:items-start justify-end ">
          <div className="flex flex-col w-full justify-center pt-[10%] md:h-[45vw]">
            <div ref={ref} data-testid="intro-headings-ref" />
            <IntroHeadingImage translateValue={translateValue} position="top" />
            <IntroHeadingImage
              translateValue={translateValue}
              position="middle"
            />
            <IntroHeadingImage
              translateValue={translateValue}
              position="bottom"
            />
          </div>
          <div className="md:static sm:absolute left-0 bottom-[-15%] sm:mt-0 mt-[15%]">
            <CTA
              text="free cocktail here"
              theme="theme1"
              onClick={() => scrollToSection("list-weekend")}
            />
          </div>
          <ChevronSpring />
        </div>
      </div>
      {/* Sec 1-2 */}
      <div className="blur-top-bottom relative uppercase block h-auto md:flex justify-center items-center py-[24vw] md:py-[16vw] overflow-hidden text-brand-theme1-text px-[5%] text-[13vw] md:text-[7vw] leading-[14vw] md:leading-[6vw] font-bold text-center">
        <div className="flex flex-col items-center justify-center z-[1]">
          <FadeInDiv
            once
            className="text-[4vw] leading-[14vw] md:leading-[1.42rem] md:text-[1vw] pb-[2vw]"
            dataTestid="sec1-2_heading_1"
          >
            WTF IS THE DOCKYARD?
          </FadeInDiv>
          <FadeInDiv once dataTestid="sec1-2_heading_2">
            THE DOCKYARD IS A
          </FadeInDiv>
          <FadeInDiv once dataTestid="sec1-2_heading_2" className="red-stroke">
            SOCIAL DINING EXPERIENCE.
          </FadeInDiv>
          <FadeInDiv once dataTestid="sec1-2_heading_2">
            EAT, DRINK AND HAVE FUN WITH
          </FadeInDiv>
          <FadeInDiv once dataTestid="sec1-2_heading_2" className="red-stroke">
            YOUR FRIENDS.
          </FadeInDiv>
        </div>
        <ChevronMoveUp
          id="large-1"
          className="absolute aspect-[3/2] w-[40%] left-[-15vw] bottom-[-100vh] h-auto"
          type="large"
          duration={3.4}
          repeatDelay={2.6}
        />
        <ChevronMoveUp
          id="large-2"
          className="right-0 w-[50%]"
          type="large"
          duration={3}
          repeatDelay={3}
        />
        <ChevronMoveUp
          id="small-1"
          className="left-[16vw] w-[10%] md:w-[5%] z-[3]"
          type="small"
          duration={5}
          repeatDelay={1}
        />
        <ChevronMoveUp
          id="small-2"
          className="right-[-7vw] w-[15%] z-[2]"
          type="small"
          duration={3.8}
          repeatDelay={2.2}
        />
        <ChevronMoveUp
          className="right-[25vw] z-[3]"
          type="small"
          duration={4.5}
          repeatDelay={1.5}
        />
      </div>
    </section>
  );
};

export default Section1;
