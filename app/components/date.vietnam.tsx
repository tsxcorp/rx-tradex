import { parseISO, format } from 'date-fns';
import vi from 'date-fns/locale/vi';

export default function Date({ dateString } : any) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'dd/MM/yyyy', {locale: vi})}</time>;
}