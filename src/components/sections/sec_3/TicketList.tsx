import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { ITicket } from "../../../interfaces";

import { BlockHeading } from "../../layout";
import { EventTicketList, Ticket, WeekendTicketList } from ".";

import { getMonths } from "../../../utils";

interface Props {}

export const TicketList: React.FC<Props> = () => {
  const { data, isLoading } = useQuery("getTickets", () =>
    fetch("/api/tickets").then((res) => res.json())
  );
  if (isLoading) {
    return <></>;
  }

  let tickets_weekend: ITicket[] = [];
  let tickets_event: ITicket[] = [];

  const tickets: ITicket[] = data;

  tickets.forEach((t) => {
    t.type === "event" ? tickets_event.push(t) : tickets_weekend.push(t);
  });

  return (
    <>
      <WeekendTicketList tickets={tickets_weekend} />
      <EventTicketList tickets={tickets_event} />
    </>
  );
};

export default TicketList;
