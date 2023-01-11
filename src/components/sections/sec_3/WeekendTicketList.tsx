import React from "react";
import { ITicket } from "../../../interfaces";

import { BlockHeading } from "../../layout";
import { Ticket } from ".";

interface Props {
  tickets: ITicket[];
}

export const WeekendTicketList: React.FC<Props> = ({ tickets }) => {
  return (
    <>
      <BlockHeading
        theme="theme3"
        text={["WEEKEND TICKETS", "AND VOUCHERS"]}
        className="mb-[5vw]"
      />
      <ul className="w-full flex flex-col">
        {tickets.map((ticket, idx) => (
          <Ticket
            key={idx}
            type={ticket.type}
            title={ticket.title}
            price={ticket.price}
            month={ticket.month}
            day={ticket.day}
          />
        ))}
      </ul>
    </>
  );
};

export default WeekendTicketList;
