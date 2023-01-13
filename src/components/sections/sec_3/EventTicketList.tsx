import React from "react";
import { ITicket } from "../../../interfaces";

import { BlockHeading } from "../../layout";
import { Ticket } from ".";
import { getMonths, sortTicketsByMonth } from "../../../utils";
import { formatMonth } from "../../../utils/index";

interface Props {
  tickets: ITicket[];
}

export const EventTicketList: React.FC<Props> = ({ tickets }) => {
  const months = getMonths(tickets);
  const sorted_list = sortTicketsByMonth(months, tickets);

  return (
    <>
      {sorted_list.map((list, idx) => {
        const month = list[0];
        const tickets = list[1];
        return (
          <div key={idx}>
            <BlockHeading
              text={formatMonth(month)}
              theme="theme3"
              className="mb-[7vw]"
            />
            {tickets.map((ticket, idx) => (
              <Ticket
                key={idx}
                id={ticket.id}
                type={ticket.type}
                title={ticket.title}
                price={ticket.price}
                month={ticket.month}
                day={ticket.day}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default EventTicketList;
