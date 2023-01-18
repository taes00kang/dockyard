import React from "react";
import Image from "next/image";
import { useImages } from "../../redux/hooks";

interface Props {
  itemClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const ModalItem: React.FC<Props> = ({
  children,
  itemClassName,
  contentClassName,
}) => {
  const { images, isLoading } = useImages();

  return (
    <div className={`modal-item ${itemClassName}`}>
      <div className="absolute top-0 left-0 w-[20%] h-full">
        {!isLoading && (
          <Image
            src={images["cyan-dots.svg"]}
            alt="cyan dots"
            fill
            style={{ objectFit: "cover", objectPosition: "right" }}
            sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 30vw,
                20vw"
          />
        )}
      </div>
      <div className={`modal-item__content ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ModalItem;
