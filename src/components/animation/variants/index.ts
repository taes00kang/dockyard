const chevronVariants = {
  initial: {
    opacity: 0,
    y: -120,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const introHeadingVariants = {
  hidden: {
    scale: 0,
  },
  shown: {
    scale: [0, 1.2, 1],
  },
};

const chevronUpVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-2000px",
  },
};

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  shown: {
    opacity: [0,.6,1,1],
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideContentVariants = {
  initial: { y: "200%" },
  animate: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
  exit: { y: "200%", transition: { duration: 1, ease: "easeInOut" } },
};

export {
  chevronUpVariants,
  chevronVariants,
  fadeInVariants,
  introHeadingVariants,
  slideContentVariants,
};
