import React from "react";
import Image from "next/image";
import { CTA } from "../../layout";
import { FadeInDiv } from "../../animation";
import HorizontalLine from "./HorizontalLine";
import { ITicket } from "../../../interfaces";
import { getDate, getImage } from "../../../utils";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/ticketSlice";

export const Ticket: React.FC<ITicket> = ({
  id,
  type,
  title,
  price,
  month,
  day,
}) => {
  const date = getDate(day, month);
  const message = "treat yo self";

  const dispatch = useAppDispatch();

  return (
    <li className="w-full flex flex-col">
      <div className="w-full flex flex-col-reverse sm:flex-row gap-[6vw] items-center justify-between">
        <div className="flex flex-1 flex-col ">
          <FadeInDiv className="flex w-full" once>
            <h1 className="ticket-heading mb-[1.5vw]">{title}</h1>
          </FadeInDiv>
          {type === "voucher" && (
            <FadeInDiv
              once
              className="text-[3vw] leading-[3.5vw] sm:text-[2vw] sm:leading-[2.5vw] tracking-wide pb-[2vw]"
            >
              Feel like treating your friends and fam to a bit of the Dockyard
              life? We offer gift vouchers that range from $25 to $100 which can
              be redeemed in the venue against entry and food tokens!
            </FadeInDiv>
          )}
          <div className="mt-[4vw] sm:mt-0 flex justify-center  sm:justify-start">
            <CTA
              text="Add to Cart"
              theme="theme3"
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    quantity: 1,
                    price,
                    title,
                    type,
                    day,
                    month,
                  })
                )
              }
            />
          </div>
        </div>
        <FadeInDiv
          once
          className="flex-1 flex flex-col gap-[4vw] sm:gap-0 w-full p-[2%] sm:p-[1%] border-2 border-brand-theme3-text shadow-brand-theme3-text shadow-[.5vw_.5vw] overflow-hidden"
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="ticket-heading">
              <span className="cyan-stroke">
                {type === "voucher" ? "Gift " : "Entry "}
              </span>
              {type === "voucher" ? "Voucher" : "Ticket"}
            </h1>
            <h1 className="ticket-heading price ">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>
          <div className="w-full flex items-center justify-between">
            {type === "voucher" || date ? (
              <h2 className="uppercase text-[4vw] sm:text-[2.5vw] leading-[3vw] font-bold tracking-tight">
                {type === "voucher" ? message : date}
              </h2>
            ) : (
              <div />
            )}
            <Image
              // src={getImage("home/stripes-cyan.svg")}
              src="/assets/stripes-cyan.svg"
              alt="Ticket Chevron"
              width={400}
              height={100}
              className="h-auto w-1/2 py-[2.5vw] translate-x-[3.5vw]"
            />
          </div>
        </FadeInDiv>
      </div>
      <HorizontalLine className="py-[10vw] sm:py-[5vw]" />
    </li>
  );
};

export default Ticket;
