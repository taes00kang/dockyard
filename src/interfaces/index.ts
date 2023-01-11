export interface ITicket {
    type: "weekend"| "event" | "voucher";
    title: string;
    price: number;
    month?: number | null;
    day?: number | null;
  }


export interface ITicketWithMonth extends ITicket {
  month: number
}