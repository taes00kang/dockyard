import React from "react";
import Image from "next/image";
import { CTA } from "../../layout";
import { FadeInDiv } from "../../animation";
import HorizontalLine from "./HorizontalLine";
import { ITicket } from "../../../interfaces";
import { getDate } from '../../../utils'

export const Ticket: React.FC<ITicket> = ({
  type,
  title,
  price,
  month,
  day,
}) => {

  const date = getDate(day, month)
  const message = "treat yo self";
  return (
    <li className="w-full flex flex-col">
      <div className="w-full flex gap-[6vw] items-center justify-between">
        <div className="flex flex-1 flex-col ">
          <FadeInDiv once>
            <h1 className="ticket-heading mb-[1.5vw]">{title}</h1>
          </FadeInDiv>
          {type === "voucher" && (
            <FadeInDiv
              once
              className="text-[2vw] leading-[2.5vw] tracking-wide pb-[2vw]"
            >
              Feel like treating your friends and fam to a bit of the Dockyard
              life? We offer gift vouchers that range from $25 to $100 which can
              be redeemed in the venue against entry and food tokens!
            </FadeInDiv>
          )}
          <div>
            <CTA text="Buy now" theme="theme3" />
          </div>
        </div>
        <FadeInDiv
          once
          className="flex-1 w-full p-[1%] border-2 border-brand-theme3-text shadow-brand-theme3-text shadow-[.5vw_.5vw] overflow-hidden"
        >
          <div className="w-full flex justify-between">
            <h1 className="ticket-heading">
              <span className="cyan-stroke">
                {type === "voucher" ? "Gift " : "Entry "}
              </span>
              {type === "voucher" ? "Voucher" : "Ticket"}
            </h1>
            <h1 className="ticket-heading price">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>
          <div className="w-full flex items-center justify-between">
            {type === "voucher" || date ? (
              <h2 className="uppercase text-[2.5vw] leading-[3vw] font-bold tracking-tight">
                {type === "voucher" ? message : date}
              </h2>
            ) : (
              <div />
            )}
            <Image
              src="/assets/stripes-cyan.svg"
              alt="Ticket Chevron"
              width={400}
              height={100}
              className="h-auto w-1/2 py-[2.5vw] translate-x-[3.5vw]"
            />
          </div>
        </FadeInDiv>
      </div>
      <HorizontalLine className="py-[5vw]" />
    </li>
  );
};

export default Ticket;

