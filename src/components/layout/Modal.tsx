import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  position: "left" | "right";
}

export const Modal: React.FC<Props> = ({ children, position }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-screen h-screen z-20 bg-black/90 flex ${
        position === "right" && "justify-end"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
