import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Cart, CartModal, MenuModal } from ".";
import { colors } from "../../styles/colors";
import { useBodyClassName } from "../../hooks/useBodyClassName";
import { useAppSelector } from "../../redux/hooks";

export const Header: React.FC = () => {
  const bodyClassName = useBodyClassName();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [textColor, setTextColor] = useState<string>(bodyClassName);
  const [cartCount, setCartCount] = useState(0);

  const tickets = useAppSelector((state) => state.cart.tickets);

  const totalQuantity = tickets.reduce(
    (acc, ticket) => acc + ticket.quantity,
    0
  );

  useEffect(() => {
    setCartCount(totalQuantity);
  }, [totalQuantity]);

  useEffect(() => {
    setTextColor(() => {
      switch (bodyClassName) {
        case "theme-2-inview":
          return colors.theme2.text;
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
      <button
        className="uppercase text-[4vw] md:text-[1.5vw] font-semibold"
        onClick={() => setMenuOpen(true)}
      >
        menu
      </button>
      <button className="logo uppercase text-[6vw] md:text-[4vw] leading-[5vw] font-bold">
        the dockyard social
      </button>
      <button
        className="relative w-[5vw] md:w-[3vw] aspect-square"
        onClick={() => setCartOpen(true)}
      >
        <Cart color={textColor} />
        {cartCount > 0 && (
          <>
            <div className="cart-count absolute hidden md:flex items-center justify-center cart-count -top-[30%] -right-[20%] font-bold text-[1.3vw] min-w-[80%] aspect-square">
              {cartCount}
            </div>
            <div className="absolute cart-count block md:hidden -top-[5%] -right-[5%] min-w-[1.3vw] h-[1.3vw] " />
          </>
        )}
      </button>
      <AnimatePresence>
        {menuOpen && <MenuModal setIsOpen={setMenuOpen} />}
        {cartOpen && <CartModal setIsOpen={setCartOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
