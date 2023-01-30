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
          const TICKETS_WEEKEND: ITicket[] = [];
          const TICKETS_EVENTS: ITicket[] = [];

          data.forEach((t) => {
            t.type === "event"
              ? TICKETS_EVENTS.push(t)
              : TICKETS_WEEKEND.push(t);
          });
          setTickets({ weekend: TICKETS_WEEKEND, event: TICKETS_EVENTS });
          setLoading(false);
        })
        .catch((err) => console.log(err.message));
    };

    getTickets();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <WeekendTicketList tickets={tickets?.weekend} />
      <EventTicketList tickets={tickets?.event} />
    </>
  );
};

export default TicketList;
