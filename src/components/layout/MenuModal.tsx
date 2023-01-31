/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Modal, ModalItem } from ".";
import { scrollToSection } from "../../utils";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuModal: React.FC<Props> = ({ setIsOpen }) => {
  const controls = useAnimationControls();
  const fadeIn = { x: 0 };
  const fadeOut = { x: -50 };

  useEffect(() => {
    controls.start(fadeIn);
  }, []);

  const handleCloseClick = () => {
    controls.start(fadeOut);
    setIsOpen(false);
  };

  return (
    <Modal position="left">
      <motion.div
        className="relative w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%]  h-screen p-[3vw] md:p-[1vw] flex flex-col justify-between bg-brand-theme3-bg text-brand-theme3-text border-r-4 border-brand-theme3-text "
        initial={{ x: -50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <div className="flex flex-col gap-2 w-full h-[80vh]">
          <ModalItem
            itemClassName="flex-1"
            contentClassName="w-2/3 py-[3%] px-[2%]"
            onClick={() => {
              scrollToSection("theme-3");
              setIsOpen(false);
            }}
          >
            <h1 className="modal-item__heading">Eat well</h1>
            <h1 className="modal-item__heading">Drink well</h1>
            <h1 className="modal-item__heading">Do good.</h1>
          </ModalItem>
          <ModalItem
            itemClassName="flex-1"
            contentClassName="w-2/3 py-[3%] px-[2%]"
            onClick={() => {
              scrollToSection("list-weekend");
              setIsOpen(false);
            }}
          >
            <h1 className="modal-item__heading">Every Ticket</h1>
            <h1 className="modal-item__heading">$10</h1>
            <p className="text-[50%] my-[5%]">
              The best weekend of your life is only a click away!
            </p>
          </ModalItem>

          <ModalItem
            itemClassName="flex-1"
            contentClassName="w-2/3 py-[6%]"
            onClick={() => {
              scrollToSection("address");
              setIsOpen(false);
            }}
          >
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="modal-item__heading location -translate-x-[10%] rotate-3">
                Where to
              </h1>
              <h1 className="modal-item__heading location  translate-x-[10%]  ">
                Find us
              </h1>
            </div>
          </ModalItem>
        </div>
        <div>
          <div className="flex items-center justify-center py-[1vw] tracking-wide">
            Follow us
            <a className="ml-[2%]" href="">
              @DockyardSocial
            </a>
          </div>
          <div className="flex items-center justify-center py-[1vw] tracking-wide">
            Designed by Too Gallus
          </div>
        </div>

        <button
          type="button"
          className="absolute font-bold text-[5vw] md:text-[4vw] lg:text-[3vw] top-0 -right-[10vw] w-[10vw] md:-right-[6vw] md:w-[6vw] aspect-square z-[2] flex items-center justify-center bg-brand-theme3-bg text-brand-theme3-text border-r-4 border-b-4 border-brand-theme3-text"
          onClick={handleCloseClick}
        >
          X
        </button>
      </motion.div>
    </Modal>
  );
};

export default MenuModal;
