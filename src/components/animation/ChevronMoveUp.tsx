import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { chevronUpVariants } from "./variants";

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
        src={`/assets/chevron-up${type === "large" ? "" : "-mini"}.svg`}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt="chevron up"
      />
    </motion.div>
  );
};

export default ChevronMoveUp;
