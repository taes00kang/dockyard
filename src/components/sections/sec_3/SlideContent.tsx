import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideContentVariants } from "../../animation/variants";
import { getImage } from "../../../utils";
//components
import { CTA } from "../../layout";
import { SlideTag } from "./types";

interface Props {
  slideTag: SlideTag;
}

export const SlideContent: React.FC<Props> = ({ slideTag }) => {
  switch (slideTag) {
    case "info":
      return (
        <motion.div
          id="slide-info"
          className="flex flex-col sm:grid grid-cols-2 w-full h-full gap-4 lg:gap-7 text-[1.1vw]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideContentVariants}
        >
          <div>
            <h1 className="info-heading">WE'RE ALL ABOUT</h1>
            <h1 className="info-heading">THE COMMUNITY.</h1>
          </div>
          <Image
            // src={getImage("home/arrows-cyan.svg")}
            src={"/assets/arrows-cyan.svg"}
            alt="arrow cyan"
            width={200}
            height={50}
            className="w-full h-auto sm:block hidden"
          />
          <p>
            Located on the footprint of one of Glasgow’s world-renowned naval
            engineering facilities, now stands a converted West End industrial
            warehouse. Hosting up to ten carefully selected passionate street
            food vendors, providing the biggest and best flavours from around
            the world. Whether traditional Thai or authentic Southern American,
            we’ve got you covered.
          </p>
          <p>
            Drinks, we’re pushing out the boat! – from pop up bars with
            specialist craft beers, to cool wines and innovative seasonal
            cocktails. Whether your taste is Bourbon Dive bars or Flamboyant
            Tiki, just pull up a pew (or two!) we’ve got just the thing for you
            (and you!).
          </p>
          <p>
            Food traders menus will rotate and change up every couple of weeks
            to give you a variety and food experience like no other. Where else
            can a group of ten friends eat together from ten different world
            cuisines while catching a vibe with Nas?{" "}
          </p>
          <p>
            We’re here to help support and grow the thriving food community in
            Scotland from farmers to drinks slingers and vendors. Ingredients
            near: Inspiration far.{" "}
          </p>
        </motion.div>
      );
    case "hire":
      return (
        <motion.div
          id="slide-hire"
          className="grid grid-cols-2 w-full h-full gap-4 text-[1.1vw]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideContentVariants}
        >
          <div className="grid">
            <div>
              <h1 className="info-heading">HIRING HIRING HIRING</h1>
              <h1 className="info-heading">HIRING HIRING HIRING</h1>
            </div>
            <p>
              Wanna hire us out for the night!?
              <br />
              <br />
              Our unique venue offers versatile space from 200 to 14,000 sqFT to
              give you a suitable variety of areas for everything from
              conference to wedding. Each exclusive booking is managed on a
              bespoke basis with a personal event co-ordinator. Wanna hire us
              out for the night!?
            </p>
            <CTA text="get in touch" theme="theme3_reverse" />
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              // src={getImage("home/interior.png")}
              src={"/assets/interior.png"}
              alt="interior map"
              width={500}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      );
    case "training":
      return (
        <motion.div
          id="slide-info"
          className="grid grid-cols-2 w-full h-full gap-4 lg:gap-7 text-[1.1vw]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideContentVariants}
        >
          <div>
            <h1 className="info-heading">A new way</h1>
            <h1 className="info-heading">of learning.</h1>
          </div>
          <Image
            // src={getImage("home/arrows-cyan.svg")}
            src={"/assets/arrows-cyan.svg"}
            alt="arrow cyan"
            width={200}
            height={50}
            className="w-full h-auto"
          />
          <p>
            Whether you’re a brand-new business finding your feet, or have
            fallen on hard times, we want to build a facility to help equip you
            for the road ahead.
          </p>
          <p>
            Our goal is to build a training and development centre within the
            venue. The Dockyard Social School will be used to support great
            causes and initiatives across the country when we open the doors to
            be used as a professional school to nurture up and coming talent.
          </p>
          <p>
            To make this possible, we’re giving back to Glasgow with our own
            training and development school to help get Glasgow’s most
            disadvantaged people launched into an exciting and growing industry.
          </p>
          <p>
            There will also be a specific employability service for local
            homeless/unemployed people who can benefit from accessing training,
            work experience, career support and job matching, these employment
            programmes will be in partnership with local and national charities.
            <br />
            <br />
            We’re doing this to change lives, we’re a local start-up for local
            start-ups.
          </p>
        </motion.div>
      );

    default:
      return <></>;
  }
};

export default SlideContent;
