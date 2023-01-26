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
          const tickets_weekend: ITicket[] = [];
          const tickets_event: ITicket[] = [];

          data.forEach((t) => {
            t.type === "event"
              ? tickets_event.push(t)
              : tickets_weekend.push(t);
          });
          setTickets({ weekend: tickets_weekend, event: tickets_event });
          setLoading(false);
        });
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
