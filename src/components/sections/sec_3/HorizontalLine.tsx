import React from "react";
import { FadeInDiv } from "../../animation";

interface Props {
  className?: string;
  id?: string 
}

export const HorizontalLine: React.FC<Props> = ({className, id}) => {
  return (
    <FadeInDiv once
    className={"w-full " + className }
    >
        <div id={id} data-testid={id} className="w-full bg-brand-theme3-text h-[2px]" />
    </FadeInDiv>
  );
};

export default HorizontalLine;
