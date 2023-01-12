import { ITicket } from "../interfaces";

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
    if (month < 1 && month > 31) {
      throw Error("Incorrect month value.");
    }
    monthLong = formatMonth(month);
  }

  const date = monthLong
    ? dayLong
      ? dayLong + " " + monthLong
      : monthLong
    : null;

  return date;
};

export const formatMonth = (n: number) => {
  const rule = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });

  // random date form with current month value
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

// Type guard for typescript to predicate type of filtered values.
const isNumber = (argument: number | null | undefined): argument is number => {
  return typeof argument === "number";
};

const getValidMonths = (months: (number | null | undefined)[]) => {
    const valid_months: number[] = months.filter(isNumber)

    return valid_months
}

export const getMonths = (tickets: ITicket[]): number[] => {
  const months_array = tickets.map((ticket) => ticket.month);
  const valid_months = getValidMonths(months_array)

  const unique_months = Array.from(new Set(valid_months));

  return unique_months;
};

export const sortTicketsByMonth = (months:number[], tickets: ITicket[]) => {
  let list: [number, ITicket[]][] = [];

  months.forEach((month) => {
    // get tickets that include current month value
    const ticket_by_month = tickets.filter((t) => t.month === month);

    // create a child array with current month value at index 0 and ticket list at index 1, and then push it to the list
    const formed_list: [number, ITicket[]] = [month, ticket_by_month];
    list.push(formed_list);
  });

  return list;
};