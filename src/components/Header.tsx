import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { colors } from "../styles/colors";
import { useBodyClassName } from "../hooks/useBodyClassName";

interface Props {}

export const Header: React.FC<Props> = () => {
  const bodyClassName = useBodyClassName();
  const [textColor, setTextColor] = useState<string>(bodyClassName);

  useEffect(() => {
    setTextColor(() => {
      switch (bodyClassName) {
        case "purple":
          return colors.purple.text;
        case "cyan":
          return colors.cyan.text;
        case "black":
          return colors.black.text;

        default:
          return colors.default.text;
      }
    });
  }, [bodyClassName]);

  return (
    <div className="header flex items-center justify-between w-full py-[2%] md:py-[.5%] px-[2%]">
      <button className="uppercase  text-[4vw] md:text-[2vw] font-semibold">
        menu
      </button>
      <button className="logo uppercase text-[6vw] md:text-[5vw] leading-[6vw] font-bold">
        the dockyard social
      </button>
      <button
        className="relative w-[5vw] md:w-[3vw] aspect-square"
        onClick={() => {
          document.body.classList.replace(document.body.className, "purple");
        }}
      >
        <Cart color={textColor} />
      </button>
    </div>
  );
};

export default Header;
