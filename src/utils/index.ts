import { ITicket } from "../interfaces";

export const formatMonth = (n: number) => {
  const rule = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });

  // Random date form with current month value.
  // Month value should be subtracted by 1, because Date object takes index of month as prop.
  const date = new Date(1000, n - 1, 1);

  return rule.format(date).toLowerCase();
};

export const formatDay = (n: number) => {
  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

  const suffixes = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
  ]);
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};
// functions
export const getDate = (
  day: number | null | undefined,
  month: number | null | undefined
): string | null => {
  let dayLong = null;
  let monthLong = null;

  if (day) {
    if (day < 1 && day > 31) {
      throw Error("Incorrect date value.");
    }
    dayLong = formatDay(day);
  }
  if (month) {
    if (month < 1 && month > 12) {
      throw Error("Incorrect month value.");
    }
    monthLong = formatMonth(month);
  }

  const date = monthLong
    ? dayLong
      ? `${dayLong} ${monthLong}`
      : monthLong
    : null;

  return date;
};

// Type guard for typescript to predicate type of filtered values.
const isNumber = (argument: number | null | undefined): argument is number => {
  return typeof argument === "number";
};

const getValidMonths = (months: (number | null | undefined)[]) => {
  const validMonths: number[] = months.filter(isNumber);

  return validMonths;
};

export const getMonths = (tickets: ITicket[]): number[] => {
  const monthsArray = tickets.map((ticket) => ticket.month);
  const validMonths = getValidMonths(monthsArray);

  const uniqueMonths = Array.from(new Set(validMonths));

  return uniqueMonths;
};

export const sortTicketsByMonth = (months: number[], tickets: ITicket[]) => {
  const list: [number, ITicket[]][] = [];

  months.forEach((month) => {
    // get tickets that include current month value
    const ticketsByMonth = tickets.filter((t) => t.month === month);

    // create a child array with current month value at index 0 and ticket list at index 1, and then push it to the list
    const formedList: [number, ITicket[]] = [month, ticketsByMonth];
    list.push(formedList);
  });

  return list;
};

export const getImage = (fileName: string) => {
  return `https://dd2i0p7y69k4h.cloudfront.net/images/${fileName}`;
};

export const scrollToSection = (id: string) => {
  const secId = document.getElementById(id);

  if (secId)
    window.scrollTo({
      top: secId.offsetTop,
      behavior: "smooth",
    });
};
