import React from "react";

interface Props {
  bgColor: string;
  textColor: string;
}

export const Footer: React.FC<Props> = ({ bgColor, textColor }) => {
  return (
    <footer
      className="flex items-center justify-center py-[1vw] text-[16px] tracking-wide leading-[24px]"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      Copyright 2022 The Dockyard Social - Lovingly designed by Too Gallus
    </footer>
  );
};

export default Footer;
