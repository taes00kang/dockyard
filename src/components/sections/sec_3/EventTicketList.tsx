import React from "react";
import { ITicket } from "../../../interfaces";
import { BlockHeading } from "../../layout";
import { Ticket } from ".";
import { getMonths, sortTicketsByMonth, formatMonth } from "../../../utils";

interface Props {
  tickets: ITicket[] | undefined;
}

export const EventTicketList: React.FC<Props> = ({ tickets }) => {
  if (tickets) {
    const months = getMonths(tickets);
    const sortedList = sortTicketsByMonth(months, tickets);

    return (
      <>
        {sortedList.map((list) => {
          const month = list[0];
          const tickets = list[1];
          return (
            <div key={month}>
              <BlockHeading
                text={formatMonth(month)}
                theme="theme3"
                className="mb-[10vw] sm:mb-[7vw]"
              />
              {tickets.map((ticket) => (
                <Ticket
                  key={ticket.id}
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
  }
  return null;
};

export default EventTicketList;
