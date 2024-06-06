import moment from 'moment';

export function time(input: string) {
    return moment(input, 'HH:mm');
}

export function date(input: string) {
    return moment(input, 'YYYY-MM-DD');
}

export function showToDate(input: string) {
    return moment(input, 'YYYY-MM-DD').subtract(1, 'days').format('dddd DD.MM.YYYY');
}