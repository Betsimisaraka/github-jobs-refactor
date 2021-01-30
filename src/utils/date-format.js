import { formatDistance } from 'date-fns';

export const DateFormated = (date) => {
    return formatDistance(new Date(date), new Date());
}