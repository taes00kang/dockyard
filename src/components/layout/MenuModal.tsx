import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from ".";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuModal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <Modal>
      <motion.div
        className="relative w-[90%] sm:w-[50%]  md:w-[40%] lg:w-[30%]  h-screen p-[3vw] md:p-[1vw] flex flex-col justify-between bg-brand-theme3-bg text-brand-theme3-text border-r-4 border-brand-theme3-text "
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <div className="flex flex-col gap-2 w-full h-[80vh]">
          <div className="menu__item relative flex-1 border-4 border-brand-theme3-text flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[20%] h-full">
              <Image
                src="/assets/cyan-dots.svg"
                alt="cyan dots"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="menu__item__content w-2/3 border-4 border-brand-theme3-text bg-brand-theme3-bg z-[3]">
              <h1 className="menu__item__heading">Eat well</h1>
              <h1 className="menu__item__heading">Drink well</h1>
              <h1 className="menu__item__heading">Do good.</h1>
            </div>
          </div>
          <div className="menu__item relative flex-1 border-4 border-brand-theme3-text flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[20%] h-full">
              <Image
                src="/assets/cyan-dots.svg"
                alt="cyan dots"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="menu__item__content w-2/3 border-4 border-brand-theme3-text bg-brand-theme3-bg z-[3]">
              <h1 className="menu__item__heading">Every Ticket</h1>
              <h1 className="menu__item__heading">$10</h1>
              <p className="text-[50%] my-[5%]">
                The best weekend of your life is only a click away!
              </p>
            </div>
          </div>
          <div className="menu__item relative flex-1 border-4 border-brand-theme3-text flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[20%] h-full">
              <Image
                src="/assets/cyan-dots.svg"
                alt="cyan dots"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-2/3 z-[3]">
              <div className="w-full flex flex-col items-center justify-center">
                <h1 className="menu__item__heading location -translate-x-[20%] rotate-3">Where to</h1>
                <h1 className="menu__item__heading location  translate-x-[20%]  ">Find us</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          hello
        </div>

        <button
          className="absolute font-bold text-[5vw] md:text-[4vw] lg:text-[3vw] top-0 -right-[10vw] w-[10vw] md:-right-[6vw] md:w-[6vw] aspect-square z-[2] flex items-center justify-center bg-brand-theme3-bg text-brand-theme3-text border-r-4 border-b-4 border-brand-theme3-text"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </motion.div>
    </Modal>
  );
};

export default MenuModal;
