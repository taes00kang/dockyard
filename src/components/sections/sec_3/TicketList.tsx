import React, { useState, useEffect } from "react";
import { ITicket } from "../../../interfaces";
import { EventTicketList, WeekendTicketList } from ".";

export const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<{
    weekend: ITicket[];
    event: ITicket[];
  } | null>(null);

  useEffect(() => {
    const getTickets = async () => {
      fetch("/api/tickets")
        .then((res) => res.json())
        .then((data: ITicket[]) => {
          const ticketsWeekend: ITicket[] = [];
          const ticketsEvent: ITicket[] = [];

          data.forEach((t) => {
            switch (t.type) {
              case "event":
                ticketsEvent.push(t);
                break;
              case "weekend":
                ticketsWeekend.push(t);
                break;
              default:
                break;
            }
          });
          setTickets({ weekend: ticketsWeekend, event: ticketsEvent });
        })
        .catch((err) => console.log(err.message));
    };

    getTickets();
  }, []);

  return tickets ? (
    <div data-testid="ticket-list">
      <WeekendTicketList tickets={tickets.weekend} />
      <EventTicketList tickets={tickets.event} />
    </div>
  ) : (
    <div data-testid="ticket-no">loading...</div>
  );
};

export default TicketList;
