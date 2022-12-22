import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { useColors } from "../hooks/useColors";
import { useBodyClassName } from "../hooks/useBodyClassName";

interface Props {}

export const Header: React.FC<Props> = () => {
  const bodyClassName = useBodyClassName();
  const [textColor, setTextColor] = useState<string>(bodyClassName);

  const colors = useColors();
  
  useEffect(() => {
    setTextColor(() => {
      switch (bodyClassName) {
        case "theme-sec-2":
          return colors.sec2.text;
        case "theme-sec-3":
          return colors.sec3.text;
        case "theme-sec-4":
          return colors.sec4.text;
        default:
          return colors.sec1.text;
      }
    });
  }, [bodyClassName]);

  return (
    <div className="header flex items-center justify-between w-full py-[2%] md:py-[.5%] px-[2%]">
      <button className="uppercase text-[4vw] md:text-[2vw] font-semibold">
        menu
      </button>
      <button className="logo uppercase text-[6vw] md:text-[5vw] leading-[6vw] font-bold">
        the dockyard social
      </button>
      <button
        className="relative w-[5vw] md:w-[3vw] aspect-square"
        onClick={() => {
          document.body.classList.replace(
            document.body.className,
            "theme-sec2"
          );
        }}
      >
        <Cart color={textColor} />
      </button>
    </div>
  );
};

export default Header;
