import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { chevronUpVariants } from "./variants";
import { useImages } from "../../redux/hooks";

interface Props {
  id?: string;
  className?: string;
  type: "small" | "large";
  duration: number;
  repeatDelay: number;
}

export const ChevronMoveUp: React.FC<Props> = ({
  id,
  className, // className may include width, x position and z-index
  duration,
  repeatDelay,
  type,
}) => {
  const { images, isLoading } = useImages();
  return (
    <motion.div
      id={id}
      variants={chevronUpVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: repeatDelay,
        ease: "linear",
      }}
      className={"absolute aspect-[3/2] h-auto bottom-[-100vh] " + className}
    >
      {!isLoading && (
        <Image
          src={images[`chevron-up${type === "large" ? "" : "-mini"}.svg`]}
          fill
          sizes={type === "large" ? "50vw" : "20vw"}
          alt="chevron up"
        />
      )}
    </motion.div>
  );
};

export default ChevronMoveUp;
