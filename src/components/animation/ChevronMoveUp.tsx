import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { chevronUpVariants } from "./variants";
import { getImage } from "../../utils";

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
      <Image
        src={getImage(`home/chevron-up${type === "large" ? "" : "-mini"}.svg`)}
        fill
        sizes={type === "large" ? "50vw" : "20vw"}
        alt="chevron up"
      />
    </motion.div>
  );
};

export default ChevronMoveUp;
