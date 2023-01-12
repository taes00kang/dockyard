import React from "react";
import { FadeInDiv } from "../../animation";

interface Props {
  className?: string;
}

export const HorizontalLine: React.FC<Props> = ({className}) => {
  return (
    <FadeInDiv once
    className={"w-full " + className }
    >
      
        <div className="w-full bg-brand-theme3-text h-[2px]" />
    </FadeInDiv>
  );
};

export default HorizontalLine;
