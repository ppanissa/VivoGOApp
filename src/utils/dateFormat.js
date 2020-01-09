import { parseISO, format } from 'date-fns';

export default function dateFormat(date) {
  const parseDate = parseISO(date);

  const formattedDate = format(parseDate, "HH:mm'h'");

  return formattedDate;
}
