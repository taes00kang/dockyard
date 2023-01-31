import React from "react";
import Image from "next/image";

import { useWindowSize } from "../../../hooks/useWindowSize";

interface Props {
  id?: string;
  srcSet: [string, string];
  translateX?: number;
  translateY?: number;
  rotate?: number;
}

export const FoodImage: React.FC<Props> = ({
  srcSet,
  id,
  translateX = 0,
  translateY = 0,
  rotate = 0,
}) => {
  const windowSize = useWindowSize();

  return (
    <div
      id={id}
      className="pics-container w-[90%] sm:w-[22%] mb-[4vw] sm:mb-0 aspect-square bg-brand-theme2-bg shadow-brand-theme2-text shadow-[11px_11px_0_0]"
      style={
        windowSize.width && windowSize.width > 640
          ? {
              transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
            }
          : {}
      }
    >
      <Image
        // src={getImage(`home/${srcSet[0]}`)}
        src={`/assets/${srcSet[0]}`}
        alt="food image front"
        width={300}
        height={300}
        className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
        sizes="(max-width: 768px) 100vw, 33vw"
        quality={30}
      />
      <Image
        // src={getImage(`home/${srcSet[1]}`)}
        src={`/assets/${srcSet[1]}`}
        alt="food image back"
        width={300}
        height={300}
        className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
        sizes="(max-width: 768px) 100vw, 33vw"
        quality={30}
      />
    </div>
  );
};

export default FoodImage;
