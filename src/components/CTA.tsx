import React from "react";
import { motion } from "framer-motion";

const fadeInButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

interface Props {
  theme: "default" | "purple" | "cyan";
  text: string;
  callback?: () => void;
}

export const CTA: React.FC<Props> = ({ theme, text, callback }) => {
  return (
    <motion.button
      variants={fadeInButtonVariants}
      initial="hidden"
      whileInView="shown"
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true }}
      onClick={callback}
      className="relative uppercase font-bold text-[5vw] sm:text-[2vw] px-[2vw] py-[1vw] group"
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-[1vw] translate-y-[1vw] group-hover:-translate-x-0 group-hover:-translate-y-0 ${
          theme === "default"
            ? "bg-brand-default-text"
            : theme === "purple"
            ? "bg-brand-purple-text"
            : theme === "cyan" && "bg-brand-cyan-text"
        }`}
      ></span>
      <span
        className={`absolute inset-0 w-full h-full 
              ${
                theme === "default"
                  ? "bg-brand-default-bg border border-brand-default-text group-hover:bg-brand-default-text"
                  : theme === "purple"
                  ? "bg-brand-purple-bg border border-brand-purple-text group-hover:bg-brand-purple-text"
                  : theme === "cyan" &&
                    "bg-brand-cyan-bg border border-brand-cyan-text group-hover:bg-brand-cyan-text"
              }
              `}
      ></span>
      <span
        className={`relative text-brand-default-text group-hover:text-brand-default-bg
        ${
          theme === "default"
            ? "text-brand-default-text group-hover:text-brand-default-bg"
            : theme === "purple"
            ? "text-brand-purple-text group-hover:text-brand-purple-bg"
            : theme === "cyan" &&
              "text-brand-cyan-text group-hover:text-brand-cyan-bg"
        }
        
        `}
      >
        {text}
      </span>
    </motion.button>
  );
};

export default CTA;
