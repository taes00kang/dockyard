import React from "react";
import { FadeInDiv } from "../animation";
import { colors } from "../../styles/colors";

interface Props {
  theme: keyof typeof colors;
  text: string;
  onClick?: () => void;
}

export const CTA: React.FC<Props> = ({ theme, text, onClick }) => {
  const color = colors[theme];

  return (
    <FadeInDiv once className="relative w-fit h-fit" onClick={onClick}>
      <div
        className="front relative uppercase border-2 z-[2] hover:translate-x-[10px] hover:translate-y-[10px] px-[2.5vw] py-[1vw] duration-200 font-bold text-[5vw] leading-[7vw] sm:text-[3vw] sm:leading-[4vw] lg:text-[1.5vw] lg:leading-[2vw] ease-in cursor-pointer"
        style={{
          borderColor: color.text,
          backgroundColor: color.bg,
          color: color.text,
        }}
      >
        {text}
      </div>
      <div
        className="back absolute top-0 left-0 bottom-0 right-0 translate-x-[10px] translate-y-[10px]"
        style={{
          backgroundColor: color.text,
        }}
      />
    </FadeInDiv>
  );
};

export default CTA;
