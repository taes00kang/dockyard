import React from "react";
import { colors } from "../../styles/colors";

interface Props {
  className?: string;
  theme: keyof typeof colors;
  text: string | [string, string];
}

export const BlockHeading: React.FC<Props> = ({ className, theme, text }) => {
  const isSingleLine = typeof text === "string";
  const themeIndex = theme.charAt(5);

  return (
    <div
      className={
        "w-full uppercase flex flex-col items-center justify-center " + className
      }
    >
      <div className={`heading-theme-${themeIndex} ${isSingleLine ? "" : "top"}`}>
        {isSingleLine ? text : text[0]}
      </div>
      {!isSingleLine && (
        <div className={`heading-theme-${themeIndex} bottom`}>{text[1]}</div>
      )}
    </div>
  );
};

export default BlockHeading;
