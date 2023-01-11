import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { colors } from "../../styles/colors";
import { useBodyClassName } from "../../hooks/useBodyClassName";

interface Props {}

export const Header: React.FC<Props> = () => {
  const bodyClassName = useBodyClassName();
  const [textColor, setTextColor] = useState<string>(bodyClassName);

  useEffect(() => {
    setTextColor(() => {
      switch (bodyClassName) {
        case "theme-2-inview":
          return colors["theme2"].text;
        case "theme-3-inview":
          return colors.theme3.text;
        case "theme-4-inview":
          return colors.theme4.text;
        default:
          return colors.theme1.text;
      }
    });
  }, [bodyClassName]);

  return (
    <div className="header flex items-center justify-between w-full py-[2%] md:py-[.5%] px-[2%]">
      <button className="uppercase text-[4vw] md:text-[1.5vw] font-semibold">
        menu
      </button>
      <button className="logo uppercase text-[6vw] md:text-[4vw] leading-[5vw] font-bold">
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
