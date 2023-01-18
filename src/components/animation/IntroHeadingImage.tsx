import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { introHeadingVariants } from "./variants";

import { useImages } from "../../redux/hooks";

interface Props {
  position: "top" | "middle" | "bottom";
  scrollYPosition: number;
  ref?: React.RefObject<HTMLDivElement>;
}

export const IntroHeadingImage: React.FC<Props> = ({
  position,
  scrollYPosition,
  ref,
}) => {
  const isTop = position === "top";
  const isMiddle = position === "middle";

  const imageClassName = isTop
    ? "-rotate-[3deg] -mb-[2%] px-[3%] -ml-20 md:-ml-32"
    : isMiddle
    ? "rotate-[3deg] -mr-16 md:-mr-24"
    : "rotate-[1deg] -mt-[2%] px-[5%] -ml-16 md:-ml-24";

  const { images } = useImages();

  return (
    <motion.div
      ref={ref}
      className="w-full flex item-center justify-center"
      variants={introHeadingVariants}
      initial="hidden"
      whileInView="shown"
      transition={{
        duration: 0.2,
        ease: "easeIn",
        delay: isTop ? 0 : isMiddle ? 0.3 : 0.6,
      }}
      viewport={{ once: true }}
      style={{
        translateX: `${isMiddle ? scrollYPosition : scrollYPosition * -1}%`,
        zIndex: isTop ? 1 : isMiddle ? 2 : 3,
      }}
    >
      <Image
        alt="intro box"
        src={images[`text-block-${isTop ? 1 : isMiddle ? 2 : 3}.svg`]}
        width={300}
        height={200}
        className={"w-[85%] sm:w-[70%] md:w-[50%] h-auto " + imageClassName}
      />
    </motion.div>
  );
};

export default IntroHeadingImage;
