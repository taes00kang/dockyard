import React from "react";
import Image from "next/image";
import { getImage } from "../../../utils";

//components
import { FadeInDiv } from "../../animation";
import { CTA } from "../../layout";
import FoodImage from "./FoodImage";

export const Section2: React.FC = () => {
  return (
    <section id="theme-2">
      {/* Sec-2-1 */}
      <div className="pb-[5vw]">
        <div className="flex w-full item-center px-[5%] text-brand-theme2-text ">
          <div className="w-[65%] flex flex-col gap-[1vw] justify-center">
            <FadeInDiv className="text-[1.5vw] font-bold">
              IT'S MORE THAN THAT THOUGH
            </FadeInDiv>
            <div className="relative w-full flex justify-between">
              <Image
                className="absolute block h-auto -left-[5vw] w-[6vw] aspect-[3/11]"
                src={getImage("home/blue-dots.svg")}
                alt="blue dots"
                width={100}
                height={500}
                style={{
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  objectPosition: "16% 0px",
                }}
              />
              <div className="mt-[1.5vw] px-[5vw] text-[1.3vw] font-[400] leading-[1.42rem] flex flex-col">
                <FadeInDiv>
                  <p>
                    We are The Dockyard Social.
                    <br />
                    <br />
                    We’ve switched from popups to permanent. Now we’re bringing
                    together the best street food traders Scotland has to offer.
                    A true taste of Global comfort food. Throw in some
                    watermelon daiquiris, a dollop of old school tunes, with a
                    pinch of likeminded people, and dance ‘til your paws hurt!
                    <br />
                    <br />
                    Everyone is welcome from families and foodies, to dates and
                    dogs!
                    <br />
                    <br />
                    Now opening weekly – 8 food traders | Multiple themed bars |
                    Resident DJs
                  </p>
                </FadeInDiv>
                <div className="w-full mt-[2.5vw]">
                  <CTA theme="theme2" text="free cocktail here" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <FadeInDiv className="relative w-full flex justify-end items-center">
              <Image
                src={getImage("home/laughing-lady.jpeg")}
                alt="laughing lady"
                width={300}
                height={300}
                className="h-auto w-full aspect-square border-[5px] border-brand-theme2-text shadow-brand-theme2-text shadow-[11px_11px_0_0]"
              />
              <div className="absolute uppercase left-0 top-0 px-[1vw] py-[0.3vw] bg-brand-theme2-text text-brand-theme2-bg text-[2.5vw] leading-[3vw] font-bold -translate-x-[34px] -rotate-[11deg]">
                just look how <br /> happy she is!**
              </div>
            </FadeInDiv>
          </div>
        </div>
        {/* Sec-2-2 */}
        <div className="bg-blue-dots w-full flex flex-col mt-[13vw] pt-[5vw] pb-[13vw]">
          <div className="pics-top relative z-[1] w-full flex items-center justify-between">
            <FoodImage
              srcSet={["food-1-1.jpeg", "food-1-2.jpeg"]}
              translateX={82}
              translateY={26}
              rotate={-14}
            />
            <FoodImage
              srcSet={["food-2-1.jpeg", "food-2-2.jpeg"]}
              translateX={-43}
              translateY={-57}
              rotate={-6}
            />
            <FoodImage
              srcSet={["food-3-1.jpeg", "food-3-2.jpeg"]}
              translateX={-167}
              rotate={9}
            />
          </div>
          <div className="pics-bottom relative z-[4] w-full flex items-center justify-end">
            <FoodImage
              srcSet={["food-4-1.jpeg", "food-4-2.jpeg"]}
              translateX={-214}
              translateY={-124}
              rotate={6}
            />
            <FoodImage
              srcSet={["food-5-1.jpeg", "food-5-2.jpeg"]}
              translateX={-143}
              translateY={-95}
              rotate={11}
            />
            <FoodImage
              srcSet={["food-6-1.jpeg", "food-6-2.jpeg"]}
              translateX={-68}
              translateY={-135}
              rotate={-6}
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            src={getImage("home/stripes-light.svg")}
            width={1000}
            height={100}
            alt="light red stripe line"
            className="w-[200vw] min-w-[500vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
