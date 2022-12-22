import variables from "../styles/_colors.module.scss";

export function useColors() {
  const colors = {
    sec1: {
      bg: variables.sec1Bg,
      text: variables.sec1Text,
    },
    sec2: {
      bg: variables.sec2Bg,
      text: variables.sec2Text,
    },
    sec3: {
      bg: variables.sec3Bg,
      text: variables.sec3Text,
    },
    sec4: {
      bg: variables.sec4Bg,
      text: variables.sec4Text,
    },
  };

  return colors;
}
