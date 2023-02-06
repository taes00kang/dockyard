import React from "react";
import Image from "next/image";
import { getImageUrl } from "../../utils";

interface Props {
  itemClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ModalItem: React.FC<Props> = ({
  children,
  itemClassName,
  contentClassName,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`modal-item ${itemClassName}`}
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-[20%] h-full">
        <Image
          src={getImageUrl("cyan-dots.svg")}
          alt="cyan dots"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
          sizes="(max-width: 768px) 20vw, 10vw"
        />
      </div>
      <div className={`modal-item__content ${contentClassName}`}>
        {children}
      </div>
    </button>
  );
};

export default ModalItem;
