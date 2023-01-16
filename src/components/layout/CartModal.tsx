import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Modal, CloseIcon, ModalItem } from ".";
import { colors } from "../../styles/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rehydrate } from '../../redux/ticketSlice'
import { RootState } from "../../redux/store";
import TicketInCart from "./TicketInCart";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartModal: React.FC<Props> = ({ setIsOpen }) => {
  const controls = useAnimationControls();
  const fadeIn = { x: 0 };
  const fadeOut = { x: 50 };

  const tickets = useAppSelector((state: RootState) => state.cart.tickets);

  useEffect(() => {
    controls.start(fadeIn);
  }, []);

  const handleCloseClick = () => {
    controls.start(fadeOut);
    setIsOpen(false);
  };
  return (
    <Modal position="right">
      <motion.div
        className="relative w-full min-w-[320px] max-w-[480px] h-screen flex flex-col justify-between bg-brand-theme3-bg text-brand-theme3-text"
        initial={{ x: 50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <div className="w-full relative h-[8%] bg-brand-theme3-text flex items-center justify-center">
          <button
            className="absolute left-[2%] w-fit h-fit"
            onClick={handleCloseClick}
          >
            <CloseIcon color={colors.theme3.bg} size={38} />
          </button>
          <div className="text-brand-theme3-bg text-[4vh] font-bold">
            Your Cart
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 p-6 overflow-y-scroll">
          {tickets.map((ticket) => (
            <TicketInCart key={ticket.id} ticket={ticket} />
          ))}
        </div>
        <div className="w-full px-[8%] py-[4%] h-[20%] flex flex-col  bg-brand-theme3-text">
          <div className="w-full flex items-center justify-between font-semibold text-[2.5vh] text-brand-theme3-bg">
            <div>Subtotal</div>
            <div>
              {
                // Get sum of ticket prices and convert it to US currency.
                tickets
                  .reduce(
                    (acc, ticket) => acc + ticket.price * ticket.quantity,
                    0
                  )
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
              }
            </div>
          </div>
          <div className="flex w-full h-full items-center">
            <button className="w-full h-[8vh] text-brand-theme3-bg border-2 font-semibold border-brand-theme3-bg hover:bg-brand-theme3-bg hover:text-[2.5vh] hover:text-brand-theme3-text duration-200 ease-in ">
              Check Out
            </button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default CartModal;
