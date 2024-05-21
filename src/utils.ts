import moment from 'moment';

export function time(input: string) {
    return moment(input, 'HH:mm');
}

export function date(input: string) {
    return moment(input, 'YYYY-MM-DD');
}