import { parseISO, format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const weekdays = [...Array(7).keys()].map(i => ptBR.localize.day(i));

export function dateTitle(date) {
  const parseDate = parseISO(date);

  const formattedDate = format(parseDate, "dd'/'MMM'/'yy", {
    locale: ptBR,
  });

  return formattedDate;
}

export function dateTitleWeek(date) {
  const parseDate = parseISO(date);

  return weekdays[getDay(parseDate)];
}
