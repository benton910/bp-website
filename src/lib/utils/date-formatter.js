export const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-US').format(newDate);
};

export const formatDateTimeRange = (dateTime1, dateTime2) => {
    const newDate1 = new Date(dateTime1);
    const newDate2 = new Date(dateTime2);
    return newDate1.toLocaleTimeString('en-US', { timeStyle: 'short' }) + ' - ' + newDate2.toLocaleTimeString('en-US', { timeStyle: 'short' });
};