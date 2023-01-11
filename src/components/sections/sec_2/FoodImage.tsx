import React from "react";
import Image from "next/image";

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
  return (
    <div
      id={id}
      className="pics-container shadow-brand-purple-text shadow-[11px_11px_0_0]"
      style={{
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
      }}
    >
      <Image
        src={srcSet[0]}
        alt="food image front"
        width={300}
        height={300}
        className="h-auto z-[3] relative w-full hover:opacity-0 duration-300 ease-in"
      />
      <Image
        src={srcSet[1]}
        alt="food image back"
        width={300}
        height={300}
        className="h-auto absolute top-0 left-0 w-full duration-300 ease-in"
      />
    </div>
  );
};

export default FoodImage;
