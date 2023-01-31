/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from "react";
import { ITicket } from "../../../interfaces";
import { EventTicketList, WeekendTicketList } from ".";

export const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<{
    weekend: ITicket[];
    event: ITicket[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTickets = () => {
      setLoading(true);
      fetch("/api/tickets")
        .then((res) => res.json())
        .then((data: ITicket[]) => {
          const ticketsWeekend: ITicket[] = [];
          const ticketsEvent: ITicket[] = [];

          data.forEach((t) => {
            t.type === "event" ? ticketsEvent.push(t) : ticketsWeekend.push(t);
          });
          setTickets({ weekend: ticketsWeekend, event: ticketsEvent });
          setLoading(false);
        })
        .catch((err) => console.log(err.message));
    };

    getTickets();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <WeekendTicketList tickets={tickets?.weekend} />
      <EventTicketList tickets={tickets?.event} />
    </>
  );
};

export default TicketList;
