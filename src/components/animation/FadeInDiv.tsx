import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "./variants";

interface Props {
  children: React.ReactNode;
  once?: boolean;
  className?: string;
  onClick?: () => void;
  dataTestid?: string;
}

export const FadeInDiv: React.FC<Props> = ({
  children,
  once = false,
  className = "",
  onClick,
  dataTestid,
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: once }}
      onClick={onClick}
      data-testid={dataTestid}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
