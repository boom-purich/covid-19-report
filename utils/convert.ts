import moment from 'moment';

export const separatorNumber = (amount:any) => {
    return amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'unreported';
}

export const convertDateFormat = (date:any) => {
    return date ? moment(date).format('DD MMMM YYYY | HH:mm a') : '-';
}